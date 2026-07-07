
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import ResizePanel from "react-resize-panel";
import './styles.css';
import SidePanel from "./SidePanel";
import logo from "./Images/logo.png";
import Model from "./Model";
import { FaDownload, FaPaperPlane } from "react-icons/fa6";
import 'react-contexify/ReactContexify.css';
import { useGlobalcontext } from "./context";
import { Button, ButtonGroup, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { getCountries, getCountryCallingCode } from 'react-phone-number-input';
import en from 'react-phone-number-input/locale/en.json';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import { toast } from 'react-toastify';

function renderFlagImage(countryCode, style = {}) {
  if (!countryCode) return null;
  const lowerCode = countryCode.toLowerCase();
  return (
    <img
      src={`https://flagcdn.com/w40/${lowerCode}.png`}
      srcSet={`https://flagcdn.com/w80/${lowerCode}.png 2x`}
      width="20"
      height="15"
      alt={countryCode}
      style={{
        objectFit: 'contain',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '2px',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        flexShrink: 0,
        ...style
      }}
    />
  );
}

const ALL_COUNTRIES = getCountries()
  .map(code => ({
    code,
    name: en[code] || '',
    callingCode: `+${getCountryCallingCode(code)}`
  }))
  .filter(c => c.name)
  .sort((a, b) => a.name.localeCompare(b.name));

const priorityCodes = ['IN', 'US'];
const priorityCountries = ALL_COUNTRIES.filter(c => priorityCodes.includes(c.code))
  .sort((a, b) => priorityCodes.indexOf(a.code) - priorityCodes.indexOf(b.code));
const regularCountries = ALL_COUNTRIES.filter(c => !priorityCodes.includes(c.code));

const COUNTRIES_LIST = [...priorityCountries, ...regularCountries];

const App = () => {
  const { formData, filtertabledata, inletpos1, inletpos2, outletpos1, outletpos2, material } = useGlobalcontext()
  var { diameter, length, inletqty, outletqty } = formData
  const [res, setRes] = useState()
  const [loading, setLoading] = useState(false)
  const [btnsdisable, setBtnsDisable] = useState(false)

  const [openProposalModal, setOpenProposalModal] = useState(false)
  const [proposalForm, setProposalForm] = useState({
    name: '',
    companyName: '',
    phone: '',
    email: '',
    countryCode: 'NO'
  })
  const [proposalErrors, setProposalErrors] = useState({})

  const dropdownRef = useRef(null)
  const [showDropdown, setShowDropdown] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleOpenProposalModal = () => {
    setOpenProposalModal(true)
    setProposalForm({
      name: '',
      companyName: '',
      phone: '',
      email: '',
      countryCode: 'NO'
    })
    setProposalErrors({})
    setSearchQuery('')
    setShowDropdown(false)
  }

  const handleCloseProposalModal = () => {
    setOpenProposalModal(false)
  }

  const handleProposalChange = (e) => {
    const { name, value } = e.target
    setProposalForm(prev => ({
      ...prev,
      [name]: value
    }))
    if (proposalErrors[name]) {
      setProposalErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleProposalSubmit = async () => {
    const errors = {}
    if (!proposalForm.name.trim()) errors.name = 'Name is required'
    if (!proposalForm.companyName.trim()) errors.companyName = 'Company name is required'

    if (!proposalForm.phone || !proposalForm.phone.trim()) {
      errors.phone = 'Phone number is required'
    } else {
      const parsed = parsePhoneNumberFromString(proposalForm.phone, proposalForm.countryCode)
      if (!parsed || !parsed.isValid()) {
        errors.phone = 'Please enter a valid phone number'
      }
    }

    if (!proposalForm.email.trim()) {
      errors.email = 'Email address is required'
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(proposalForm.email)) {
        errors.email = 'Please enter a valid email address'
      }
    }

    if (Object.keys(errors).length > 0) {
      setProposalErrors(errors)
      return
    }

    // Build inlet positions only up to the configured inlet quantity
    const inletPositions = {}
    if (formData.inletqty >= 1) {
      inletPositions['Inlet Position 1 (mm)'] = inletpos1
    }
    if (formData.inletqty >= 2) {
      inletPositions['Inlet Position 2 (mm)'] = inletpos2
    }

    // Build outlet positions only up to the configured outlet quantity
    const outletPositions = {}
    if (formData.outletqty >= 1) {
      outletPositions['Outlet Position 1 (mm)'] = outletpos1
    }
    if (formData.outletqty >= 2) {
      outletPositions['Outlet Position 2 (mm)'] = outletpos2
    }

    const parsed = parsePhoneNumberFromString(proposalForm.phone, proposalForm.countryCode)
    const formattedPhone = parsed ? parsed.formatInternational() : proposalForm.phone.trim()

    // Construct the payload with user details and structured configuration data
    const proposalPayload = {
      applicationName: "Pipe-Conveyor",
      customerDetails: {
        name: proposalForm.name,
        companyName: proposalForm.companyName,
        phoneNumber: formattedPhone,
        email: proposalForm.email
      },
      configurationDetails: {
        inputs: {
          "Rotor Material": material,
          "Diameter (mm)": formData.diameter,
          "Length (mm)": formData.length,
        },
        inlets: {
          "Number of Inlets": formData.inletqty,
          ...inletPositions,
        },
        outlets: {
          "Number of Outlets": formData.outletqty,
          ...outletPositions,
        },
      },
    }

    console.log("Submitting proposal payload:", proposalPayload)

    setLoading(true)
    try {
      const response = await axios.post("https://vagenexpressapi.azurewebsites.net/api/Main/SendProposal", proposalPayload)
      toast.success("Proposal submitted successfully!")
      setOpenProposalModal(false)
    } catch (err) {
      console.error("Error submitting proposal:", err?.response?.data?.Message)
      toast.error(err?.response?.data?.Message || "Error submitting proposal")
    } finally {
      setLoading(false)
    }
  }

  const DownLoadPdf = async () => {
    const arrangethedata = filtertabledata.map((item, i) => {
      const newObj = {
        id: i + 1,
        partnumber: item.partnumber,
        qty: item.qty,
      };
      return newObj;
    });
    const newobj = {
      BOM: arrangethedata,
      Diameter: diameter,
      Inletp1: inletpos1,
      Inletp2: inletpos2,
      Inletqty: inletqty,
      Length: length,
      Outletp1: outletpos1,
      Outletp2: outletpos2,
      Outletqty: outletqty
    }
    console.log(JSON.stringify(newobj));
    setLoading(true)
    try {
      const response = await axios.post("https://vagenexpressapi.azurewebsites.net/api/Main/generatedrawing", {
        BOM: arrangethedata,
        Diameter: diameter,
        Inletp1: inletpos1,
        Inletp2: inletpos2,
        Inletqty: inletqty,
        Length: length,
        Outletp1: outletpos1,
        Outletp2: outletpos2,
        Outletqty: outletqty
      },);

      setBtnsDisable(true)
      setRes(response.data)
      setLoading(false)
    } catch (err) {
      alert(err)
      setLoading(false)
    }
  };


  return (
    <div>
      {loading && (
        <div className="page-overlay">
          <div className="spinner-container">
            <div className="spinner"></div>
          </div>
        </div>
      )}

      <div className='body' style={{ display: "flex", height: "100vh" }}>
        <div className='content' style={{ overflow: "hidden", flex: "1", display: "flex", flexDirection: "column" }}>
          <nav style={{ padding: "5px 20px", borderBottom: "1px solid #ccc", display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img src={logo} alt="" style={{ width: "100px" }} />
              <h3 style={{ margin: "0", color: "#000c66" }}>Express Pipe Conveyor</h3>
            </div>
            <div>
              <ButtonGroup variant="contained" aria-label="outlined primary  group" style={{ backgroundColor: "none" }}>
                <Button style={{ backgroundColor: 'rgb(23, 18, 31)', borderRightColor: "white", textTransform: "capitalize", color: "#fff", fontFamily: "Lato", fontWeight: "400" }} onClick={DownLoadPdf}>Generate</Button>
                <Button disabled={!btnsdisable} style={{ display: "flex", fontFamily: "Lato", alignItems: "center", justifyContent: "center", gap: "7px", backgroundColor: 'rgb(23, 18, 31)', textTransform: "capitalize", borderRightColor: "white", color: "#fff", fontWeight: "400", opacity: btnsdisable ? 1 : 0.4 }} onClick={() => {
                  window.open(res.DrawingURL, "_blank")
                }}>
                  <span><FaDownload size={15} /></span>
                  <span>Pdf</span>
                </Button>
                <Button disabled={!btnsdisable} style={{ display: "flex", fontFamily: "Lato", alignItems: "center", justifyContent: "center", gap: "5px", backgroundColor: 'rgb(23, 18, 31)', textTransform: "capitalize", borderRightColor: "white", color: "#fff", fontWeight: "400", opacity: btnsdisable ? 1 : 0.4 }} onClick={handleOpenProposalModal}>
                  <span style={{ display: "flex", justifyContent: "center" }}><FaPaperPlane size={14} /></span>
                  <span>Submit Proposal</span>
                </Button>
              </ButtonGroup>

            </div>
          </nav>
          <div className="model" style={{ overflow: "auto", flex: "1" }}>
            <Model />
          </div>
        </div>
        <ResizePanel direction="w" borderClass='customResizeBorder' className="r">
          <SidePanel setBtnsDisable={setBtnsDisable} setRes={setRes} />
        </ResizePanel>
      </div>

      <Dialog
        open={openProposalModal}
        onClose={handleCloseProposalModal}
        maxWidth="xs"
        fullWidth
        PaperProps={{
          style: {
            borderRadius: '16px',
            fontFamily: 'Lato',
            overflow: 'visible',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.25)'
          }
        }}
      >
        <DialogTitle style={{
          backgroundColor: 'rgb(23, 18, 31)',
          color: '#fff',
          fontSize: '18px',
          fontWeight: '700',
          fontFamily: 'Lato',
          padding: '18px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: '16px 16px 0 0'
        }}>
          <span>Submit Proposal</span>
        </DialogTitle>
        <DialogContent style={{ padding: '20px 20px', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', gap: '15px', overflow: 'visible' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label className="form-label" style={{ marginBottom: '8px' }}>Name</label>
            <input
              type="text"
              className="form-control"
              style={{ width: '100%', boxSizing: 'border-box' }}
              name="name"
              value={proposalForm.name}
              onChange={handleProposalChange}
              placeholder="Enter your name"
            />
            {proposalErrors.name && <span style={{ color: 'red', fontSize: '12px', marginTop: '4px', textAlign: 'start' }}>{proposalErrors.name}</span>}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label className="form-label" style={{ marginBottom: '8px' }}>Company Name</label>
            <input
              type="text"
              className="form-control"
              style={{ width: '100%', boxSizing: 'border-box' }}
              name="companyName"
              value={proposalForm.companyName}
              onChange={handleProposalChange}
              placeholder="Enter company name"
            />
            {proposalErrors.companyName && <span style={{ color: 'red', fontSize: '12px', marginTop: '4px', textAlign: 'start' }}>{proposalErrors.companyName}</span>}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }} ref={dropdownRef}>
            <label className="form-label" style={{ marginBottom: '8px' }}>Phone Number</label>
            <div style={{ display: 'flex', gap: '8px', width: '100%' }}>
              <button
                type="button"
                className="form-control"
                style={{
                  width: '90px',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  backgroundColor: '#FFFFFF',
                  cursor: 'pointer',
                  padding: '10px 6px',
                  textAlign: 'center'
                }}
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  {renderFlagImage(proposalForm.countryCode)}
                </span>
                <span style={{ fontSize: '14px', fontWeight: '600', color: '#4B5675' }}>
                  {`+${getCountryCallingCode(proposalForm.countryCode)}`}
                </span>
              </button>
              <input
                type="text"
                className="form-control"
                style={{ flex: 1, boxSizing: 'border-box' }}
                name="phone"
                value={proposalForm.phone}
                onChange={handleProposalChange}
                placeholder="Enter phone number"
              />
            </div>

            {showDropdown && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '0',
                  width: '280px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #DBDFE9',
                  borderRadius: '0.65rem',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
                  zIndex: 1000,
                  marginTop: '4px',
                  padding: '8px',
                  boxSizing: 'border-box'
                }}
              >
                <input
                  type="text"
                  placeholder="Search country..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    fontSize: '14px',
                    border: '1px solid #DBDFE9',
                    borderRadius: '0.35rem',
                    marginBottom: '8px',
                    outline: 'none',
                    boxSizing: 'border-box',
                    fontFamily: 'Lato'
                  }}
                  autoFocus
                />
                <div
                  style={{
                    maxHeight: '200px',
                    overflowY: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2px'
                  }}
                >
                  {COUNTRIES_LIST.filter(c =>
                    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    c.callingCode.includes(searchQuery)
                  ).map((c) => (
                    <button
                      key={c.code}
                      type="button"
                      onClick={() => {
                        setProposalForm(prev => ({
                          ...prev,
                          countryCode: c.code
                        }))
                        setShowDropdown(false)
                        setSearchQuery('')
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                        padding: '8px 10px',
                        border: 'none',
                        background: 'none',
                        cursor: 'pointer',
                        borderRadius: '0.35rem',
                        textAlign: 'left',
                        fontFamily: 'Lato',
                        transition: 'background-color 0.15s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f4f6fa'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '180px' }}>
                        {renderFlagImage(c.code)}
                        <span style={{ fontSize: '14px', color: '#252F4A', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {c.name}
                        </span>
                      </div>
                      <span style={{ fontSize: '13px', color: '#78829D', fontWeight: '500' }}>
                        {c.callingCode}
                      </span>
                    </button>
                  ))}
                  {COUNTRIES_LIST.filter(c =>
                    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    c.callingCode.includes(searchQuery)
                  ).length === 0 && (
                      <div style={{ padding: '8px', fontSize: '13px', color: '#78829D', textAlign: 'center' }}>
                        No countries found
                      </div>
                    )}
                </div>
              </div>
            )}

            {proposalErrors.phone && <span style={{ color: 'red', fontSize: '12px', marginTop: '4px', textAlign: 'start' }}>{proposalErrors.phone}</span>}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label className="form-label" style={{ marginBottom: '8px' }}>Email Address</label>
            <input
              type="email"
              className="form-control"
              style={{ width: '100%', boxSizing: 'border-box' }}
              name="email"
              value={proposalForm.email}
              onChange={handleProposalChange}
              placeholder="Enter email address"
            />
            {proposalErrors.email && <span style={{ color: 'red', fontSize: '12px', marginTop: '4px', textAlign: 'start' }}>{proposalErrors.email}</span>}
          </div>
        </DialogContent>
        <DialogActions style={{ padding: '15px 24px', backgroundColor: '#ffffff', borderTop: '1px solid #eee', borderRadius: '0 0 16px 16px' }}>
          <Button
            onClick={handleCloseProposalModal}
            style={{
              color: 'rgb(23, 18, 31)',
              fontFamily: 'Lato',
              textTransform: 'capitalize',
              fontWeight: '500'
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleProposalSubmit}
            style={{
              backgroundColor: 'rgb(23, 18, 31)',
              color: '#fff',
              fontFamily: 'Lato',
              textTransform: 'capitalize',
              fontWeight: '500',
              padding: '6px 16px',
              borderRadius: '6px'
            }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
};
export default App;
































