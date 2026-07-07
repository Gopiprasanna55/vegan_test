import React, { useEffect, useState } from 'react'
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useGlobalcontext } from './context';
import TableData from './TableData';
import { toast } from 'react-toastify';

const InputsIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="15" width="15" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
);

const InletsIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="15" width="15" xmlns="http://www.w3.org/2000/svg">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
  </svg>
);

const OutletsIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="15" width="15" xmlns="http://www.w3.org/2000/svg">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" transform="rotate(180 12 12)"></polygon>
  </svg>
);

const CustomSelect = ({ id, value, options, onChange, name, openDropdown, setOpenDropdown }) => {
  const isOpen = openDropdown === id;
  const selectedOption = options.find(opt => opt.value === value);

  const handleToggle = (e) => {
    e.stopPropagation();
    setOpenDropdown(isOpen ? null : id);
  };

  const handleSelect = (val, e) => {
    e.stopPropagation();
    onChange(val, name);
    setOpenDropdown(null);
  };

  return (
    <div className="custom-select-container" onClick={(e) => e.stopPropagation()}>
      <div
        className={`custom-select-trigger ${isOpen ? 'active' : ''}`}
        onClick={handleToggle}
      >
        <span>{selectedOption ? selectedOption.label : value}</span>
        <span className="custom-select-arrow">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>

      {isOpen && (
        <div className="custom-select-options">
          {options.map((opt) => (
            <div
              key={opt.value}
              className={`custom-select-option ${value === opt.value ? 'selected' : ''}`}
              onClick={(e) => handleSelect(opt.value, e)}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const SidePanel = ({ setBtnsDisable, setRes }) => {
  const {
    formData,
    setFormData,
    setPartname,
    partname,
    setShadowVisible,
    inletpos1,
    setInletpos1,
    inletpos2,
    setInletpos2,
    outletpos1,
    setOutletpos1,
    outletpos2,
    setOutletpos2,
    objdata,
    setObjdata,
    inletuuids,
    setInletuuids,
    outletuuids,
    setOutletuuids,
    setMaterial,
    material
  } = useGlobalcontext();

  const [firstdropdown, setFirstDropdown] = useState(false);
  const [seconddropdown, setSecondDropdown] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const [oneinput, setOneinput] = useState(inletpos1);
  const [secondinput, setSecondinput] = useState(inletpos2);
  const [thirdinput, setThirdinput] = useState(outletpos1);
  const [fourinput, setFourinput] = useState(outletpos2);

  useEffect(() => {
    const handleOutsideClick = () => {
      setOpenDropdown(null);
    };
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, []);

  const materialOptions = [
    { value: "Carbon Steel", label: "Carbon Steel" },
    { value: "Stainless Steel", label: "Stainless Steel" }
  ];

  const diameterOptions = [
    { value: 200, label: "200" },
    { value: 300, label: "300" }
  ];

  const lengthOptions = [2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000].map(val => ({
    value: val,
    label: val.toString()
  }));

  const qtyOptions = [
    { value: 1, label: "1" },
    { value: 2, label: "2" }
  ];

  const FirstDropDown = () => {
    setFirstDropdown(!firstdropdown);
    setSecondDropdown(false);
  };
  const SecondDropdown = () => {
    setSecondDropdown(!seconddropdown);
    setFirstDropdown(false);
  };

  const getMinMaxValues = (length, diameter) => {
    if (diameter === 200) {
      switch (length) {
        case 2000:
          return {
            inletp1: { min: 0, max: 1775 },
            inletp2: { min: 245, max: 1775 },
            outletp1: { min: 0, max: 1775 },
            outletp2: { min: 245, max: 1775 },
          };
        case 3000:
          return {
            inletp1: { min: 0, max: 2775 },
            inletp2: { min: 245, max: 2775 },
            outletp1: { min: 0, max: 2775 },
            outletp2: { min: 245, max: 2775 },
          };
        case 4000:
          return {
            inletp1: { min: 0, max: 3775 },
            inletp2: { min: 245, max: 3775 },
            outletp1: { min: 0, max: 3775 },
            outletp2: { min: 245, max: 3775 },
          };
        case 5000:
          return {
            inletp1: { min: 0, max: 4775 },
            inletp2: { min: 245, max: 4775 },
            outletp1: { min: 0, max: 4775 },
            outletp2: { min: 245, max: 4775 },
          };
        case 6000:
          return {
            inletp1: { min: 0, max: 5775 },
            inletp2: { min: 245, max: 5775 },
            outletp1: { min: 0, max: 5775 },
            outletp2: { min: 245, max: 5775 },
          };
        case 7000:
          return {
            inletp1: { min: 0, max: 6775 },
            inletp2: { min: 245, max: 6775 },
            outletp1: { min: 0, max: 6775 },
            outletp2: { min: 245, max: 6775 },
          };
        case 8000:
          return {
            inletp1: { min: 0, max: 7775 },
            inletp2: { min: 245, max: 7775 },
            outletp1: { min: 0, max: 7775 },
            outletp2: { min: 245, max: 7775 },
          };
        case 9000:
          return {
            inletp1: { min: 0, max: 8775 },
            inletp2: { min: 245, max: 8775 },
            outletp1: { min: 0, max: 8775 },
            outletp2: { min: 245, max: 8775 },
          };
        case 10000:
          return {
            inletp1: { min: 0, max: 9775 },
            inletp2: { min: 245, max: 9775 },
            outletp1: { min: 0, max: 9775 },
            outletp2: { min: 245, max: 9775 },
          };
        case 11000:
          return {
            inletp1: { min: 0, max: 10775 },
            inletp2: { min: 245, max: 10775 },
            outletp1: { min: 0, max: 10775 },
            outletp2: { min: 245, max: 10775 },
          };
        case 12000:
          return {
            inletp1: { min: 0, max: 11775 },
            inletp2: { min: 245, max: 11775 },
            outletp1: { min: 0, max: 11775 },
            outletp2: { min: 245, max: 11775 },
          };
        default:
          return {};
      }
    } else {
      switch (length) {
        case 2000:
          return {
            inletp1: { min: 0, max: 1668 },
            inletp2: { min: 352, max: 1668 },
            outletp1: { min: 0, max: 1668 },
            outletp2: { min: 352, max: 1668 },
          };
        case 3000:
          return {
            inletp1: { min: 0, max: 2668 },
            inletp2: { min: 352, max: 2668 },
            outletp1: { min: 0, max: 2668 },
            outletp2: { min: 352, max: 2668 },
          };
        case 4000:
          return {
            inletp1: { min: 0, max: 3668 },
            inletp2: { min: 352, max: 3668 },
            outletp1: { min: 0, max: 3668 },
            outletp2: { min: 352, max: 3668 },
          };
        case 5000:
          return {
            inletp1: { min: 0, max: 4668 },
            inletp2: { min: 352, max: 4668 },
            outletp1: { min: 0, max: 4668 },
            outletp2: { min: 352, max: 4668 },
          };
        case 6000:
          return {
            inletp1: { min: 0, max: 5668 },
            inletp2: { min: 352, max: 5668 },
            outletp1: { min: 0, max: 5668 },
            outletp2: { min: 352, max: 5668 },
          };
        case 7000:
          return {
            inletp1: { min: 0, max: 6668 },
            inletp2: { min: 352, max: 6668 },
            outletp1: { min: 0, max: 6668 },
            outletp2: { min: 352, max: 6668 },
          };
        case 8000:
          return {
            inletp1: { min: 0, max: 7668 },
            inletp2: { min: 352, max: 7668 },
            outletp1: { min: 0, max: 7668 },
            outletp2: { min: 352, max: 7668 },
          };
        case 9000:
          return {
            inletp1: { min: 0, max: 8668 },
            inletp2: { min: 352, max: 8668 },
            outletp1: { min: 0, max: 8668 },
            outletp2: { min: 352, max: 8668 },
          };
        case 10000:
          return {
            inletp1: { min: 0, max: 9668 },
            inletp2: { min: 352, max: 9668 },
            outletp1: { min: 0, max: 9668 },
            outletp2: { min: 352, max: 9668 },
          };
        case 11000:
          return {
            inletp1: { min: 0, max: 10668 },
            inletp2: { min: 352, max: 10668 },
            outletp1: { min: 0, max: 10668 },
            outletp2: { min: 352, max: 10668 },
          };
        case 12000:
          return {
            inletp1: { min: 0, max: 11668 },
            inletp2: { min: 352, max: 11668 },
            outletp1: { min: 0, max: 11668 },
            outletp2: { min: 352, max: 11668 },
          };
        default:
          return {};
      }
    }
  };

  const data = getMinMaxValues(formData.length, formData.diameter);

  useEffect(() => {
    setPartname("");
    setShadowVisible(true);
    setObjdata([]);
    setInletuuids([]);
    setOutletuuids([]);

    if (formData.diameter === 200) {
      setInletpos1(0);
      setOutletpos1(0);
      setInletpos2(245);
      setOutletpos2(245);
      setOneinput(0);
      setSecondinput(245);
      setThirdinput(0);
      setFourinput(245);
    } else {
      setInletpos1(0);
      setOutletpos1(0);
      setInletpos2(352);
      setOutletpos2(352);
      setOneinput(0);
      setSecondinput(352);
      setThirdinput(0);
      setFourinput(352);
    }
  }, [formData.diameter, formData.length]);

  const handleChange = (val, name) => {
    toast.dismiss();
    setBtnsDisable(false);
    setRes("");
    let numberValue = parseInt(val, 10);

    if (name === "inletqty") {
      if (numberValue === 1 && inletuuids.length > 0) {
        inletuuids.forEach((item) => {
          setObjdata((prev) => prev.filter((obj) => obj.uuid !== item));
        });
      }
    }

    if (name === "outletqty") {
      if (numberValue === 1 && outletuuids.length > 0) {
        outletuuids.forEach((item) => {
          setObjdata((prev) => prev.filter((obj) => obj.uuid !== item));
        });
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: numberValue,
    }));
  };

  const handleMaterialChange = (val) => {
    setMaterial(val);
    setBtnsDisable(false);
    setRes("");
    setPartname("");
  };

  const FirstInputhandle = (e) => {
    const value = parseInt(e.target.value, 10) || 0;
    toast.dismiss();
    setOneinput(value);
    setInletpos1(value);
    if (value < data.inletp1.min) {
      setInletpos1(data.inletp1.min);
      toast(`Inlet Position 1 ranges between ${data.inletp1.min} mm to ${data.inletp1.max} mm`);
    }
    if (value > data.inletp1.max) {
      setInletpos1(data.inletp1.max);
      toast(`Inlet Position 1 ranges between ${data.inletp1.min} mm to ${data.inletp1.max} mm`);
    }
  };

  const secondInputhandle = (e) => {
    const value = parseInt(e.target.value, 10) || 0;
    if (formData.inletqty === 2) {
      toast.dismiss();
      setSecondinput(value);
      setInletpos2(value);

      if (value < data.inletp2.min) {
        setInletpos2(data.inletp2.min);
        toast(`Inlet Position 2 ranges between ${data.inletp2.min} mm to ${data.inletp2.max} mm`);
      }

      if (value > data.inletp2.max) {
        setInletpos2(data.inletp2.max);
        toast(`Inlet Position 2 ranges between ${data.inletp2.min} mm to ${data.inletp2.max} mm`);
      }
    }
  };

  const ThirdInputhandle = (e) => {
    const value = parseInt(e.target.value, 10) || 0;
    toast.dismiss();
    setThirdinput(value);
    setOutletpos1(value);
    if (value < data.outletp1.min) {
      setOutletpos1(data.outletp1.min);
      toast(`Outlet Position 1 ranges between ${data.outletp1.min} mm to ${data.outletp1.max} mm`);
    }
    if (value > data.outletp1.max) {
      setOutletpos1(data.outletp1.max);
      toast(`Outlet Position 1 ranges between ${data.outletp1.min} mm to ${data.outletp1.max} mm`);
    }
  };

  const FourthInputhandle = (e) => {
    const value = parseInt(e.target.value, 10) || 0;
    if (formData.outletqty === 2) {
      toast.dismiss();
      setFourinput(value);
      setOutletpos2(value);

      if (value < data.outletp2.min) {
        setOutletpos2(data.outletp2.min);
        toast(`Outlet Position 2 ranges between ${data.outletp2.min} mm to ${data.outletp2.max} mm`);
      }

      if (value > data.outletp2.max) {
        setOutletpos2(data.outletp2.max);
        toast(`Outlet Position 2 ranges between ${data.outletp2.min} mm to ${data.outletp2.max} mm`);
      }
    }
  };

  return (
    <div className='sidebar panel' style={{ position: "relative" }}>
      <div className="sidebarcontent" style={{ overflow: "auto" }}>
        <div className='sidebarcards'>
          <div className="cards">

            {/* Inputs Card */}
            <div className="sidebar-card" style={{ zIndex: (openDropdown === 'material' || openDropdown === 'diameter' || openDropdown === 'length') ? 100 : 1 }}>
              <div className="sidebar-card-header" style={{ cursor: "default" }}>
                <div className="sidebar-card-header-left">
                  <div className="sidebar-card-icon-container">
                    <InputsIcon />
                  </div>
                  <div className="sidebar-card-title-group">
                    <h4 className="sidebar-card-title">Inputs</h4>
                    <span className="sidebar-card-subtitle">Core mechanical specification</span>
                  </div>
                </div>
              </div>
              <div className="sidebar-card-body">
                <div className="form-group">
                  <label>Rotor Material</label>
                  <CustomSelect
                    id="material"
                    value={material}
                    options={materialOptions}
                    onChange={(val) => handleMaterialChange(val)}
                    openDropdown={openDropdown}
                    setOpenDropdown={setOpenDropdown}
                  />
                </div>
                <div className="form-grid-2">
                  <div className="form-group">
                    <label>Diameter (mm)</label>
                    <CustomSelect
                      id="diameter"
                      value={formData.diameter}
                      options={diameterOptions}
                      name="diameter"
                      onChange={(val, name) => handleChange(val, name)}
                      openDropdown={openDropdown}
                      setOpenDropdown={setOpenDropdown}
                    />
                  </div>
                  <div className="form-group">
                    <label>Length</label>
                    <CustomSelect
                      id="length"
                      value={formData.length}
                      options={lengthOptions}
                      name="length"
                      onChange={(val, name) => handleChange(val, name)}
                      openDropdown={openDropdown}
                      setOpenDropdown={setOpenDropdown}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Inlets Card */}
            <div className="sidebar-card" style={{ zIndex: openDropdown === 'inletqty' ? 100 : 1 }}>
              <div className="sidebar-card-header" onClick={FirstDropDown}>
                <div className="sidebar-card-header-left">
                  <div className="sidebar-card-icon-container">
                    <InletsIcon />
                  </div>
                  <div className="sidebar-card-title-group">
                    <h4 className="sidebar-card-title">Inlets</h4>
                    <span className="sidebar-card-subtitle">Material entry points</span>
                  </div>
                </div>
                <div className="sidebar-card-header-right">
                  <div className="sidebar-card-badge">{formData.inletqty}</div>
                  <div className="sidebar-card-chevron">
                    {firstdropdown ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </div>
              </div>
              {firstdropdown && (
                <div className="sidebar-card-body">
                  <div className="form-group">
                    <label>Number of Inlets</label>
                    <CustomSelect
                      id="inletqty"
                      value={formData.inletqty}
                      options={qtyOptions}
                      name="inletqty"
                      onChange={(val, name) => handleChange(val, name)}
                      openDropdown={openDropdown}
                      setOpenDropdown={setOpenDropdown}
                    />
                  </div>

                  <div className="form-grid-2">
                    <div className="form-group">
                      <label>Position 1</label>
                      <div className="input-container-badge">
                        <input type="number" className="input" value={oneinput} onChange={FirstInputhandle} />
                        <span className="input-unit-badge">mm</span>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Position 2</label>
                      <div className="input-container-badge">
                        <input type="number" className="input" value={secondinput} onChange={secondInputhandle} disabled={formData.inletqty !== 2} />
                        <span className="input-unit-badge">mm</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Outlets Card */}
            <div className="sidebar-card" style={{ zIndex: openDropdown === 'outletqty' ? 100 : 1 }}>
              <div className="sidebar-card-header" onClick={SecondDropdown}>
                <div className="sidebar-card-header-left">
                  <div className="sidebar-card-icon-container">
                    <OutletsIcon />
                  </div>
                  <div className="sidebar-card-title-group">
                    <h4 className="sidebar-card-title">Outlets</h4>
                    <span className="sidebar-card-subtitle">Material discharge points</span>
                  </div>
                </div>
                <div className="sidebar-card-header-right">
                  <div className="sidebar-card-badge">{formData.outletqty}</div>
                  <div className="sidebar-card-chevron">
                    {seconddropdown ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </div>
              </div>
              {seconddropdown && (
                <div className="sidebar-card-body">
                  <div className="form-group">
                    <label>Number of Outlets</label>
                    <CustomSelect
                      id="outletqty"
                      value={formData.outletqty}
                      options={qtyOptions}
                      name="outletqty"
                      onChange={(val, name) => handleChange(val, name)}
                      openDropdown={openDropdown}
                      setOpenDropdown={setOpenDropdown}
                    />
                  </div>

                  <div className="form-grid-2">
                    <div className="form-group">
                      <label>Position 1</label>
                      <div className="input-container-badge">
                        <input type="number" className="input" value={thirdinput} onChange={ThirdInputhandle} />
                        <span className="input-unit-badge">mm</span>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Position 2</label>
                      <div className="input-container-badge">
                        <input type="number" className="input" value={fourinput} onChange={FourthInputhandle} disabled={formData.outletqty !== 2} />
                        <span className="input-unit-badge">mm</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <TableData />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
