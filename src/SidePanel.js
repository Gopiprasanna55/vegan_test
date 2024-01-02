import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import {
  FormLabel,
  Card,
  CardContent,
  TextField
} from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import ColumnResize from "react-table-column-resizer";
import { useGlobalcontext } from './context';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const SidePanel = () => {
  const { formData, setFormData, setPartname, partname } = useGlobalcontext()
  const [firstdropdown, setFirstDropdown] = useState(false)
  const [seconddropdown, setSecondDropdown] = useState(false)



  const FirstDropDown = () => {
    setFirstDropdown(!firstdropdown)
    setSecondDropdown(false)
  }
  const SecondDropdown = () => {
    setSecondDropdown(!seconddropdown)
    setFirstDropdown(false)

  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    const Numbervalue = parseInt(value)
    setFormData({
      ...formData,
      [name]: Numbervalue,
    });
  };
  var diameter = formData.diameter;
  var troughtsection2000, qty2000;
  if (diameter == 200 && formData.length == 2000) {
    troughtsection2000 = "Trough Section 2000 Ø200"
    qty2000 = 1
  }
  if (diameter == 200 && formData.length == 4000) {
    troughtsection2000 = "Trough Section 2000 Ø200"
    qty2000 = 2
  }
  if (diameter == 200 && formData.length == 5000) {
    troughtsection2000 = "Trough Section 2000 Ø200"
    qty2000 = 1
  } if (diameter == 200 && formData.length == 7000) {
    troughtsection2000 = "Trough Section 2000 Ø200"
    qty2000 = 2
  }
  if (diameter == 200 && formData.length == 8000) {
    troughtsection2000 = "Trough Section 2000 Ø200"
    qty2000 = 1
  }
  // diameter300

  if (diameter == 300 && formData.length == 2000) {
    troughtsection2000 = "Trough Section 2000 Ø300"
    qty2000 = 1
  }
  if (diameter == 300 && formData.length == 4000) {
    troughtsection2000 = "Trough Section 2000 Ø300"
    qty2000 = 2
  }
  if (diameter == 300 && formData.length == 5000) {
    troughtsection2000 = "Trough Section 2000 Ø300"
    qty2000 = 1
  } if (diameter == 300 && formData.length == 7000) {
    troughtsection2000 = "Trough Section 2000 Ø300"
    qty2000 = 2
  }
  if (diameter == 300 && formData.length == 8000) {
    troughtsection2000 = "Trough Section 2000 Ø300"
    qty2000 = 1
  }


  var troughtsection3000, qty3000;
  // diameter200
  if (diameter == 200 && formData.length == 3000) {
    troughtsection3000 = "Trough Section 3000 Ø200"
    qty3000 = 1
  }
  if (diameter == 200 && formData.length == 5000) {
    troughtsection3000 = "Trough Section 3000 Ø200"
    qty3000 = 1
  }
  if (diameter == 200 && formData.length == 6000) {
    troughtsection3000 = "Trough Section 3000 Ø200"
    qty3000 = 2
  }
  if (diameter == 200 && formData.length == 7000) {
    troughtsection3000 = "Trough Section 3000 Ø200"
    qty3000 = 1
  }
  if (diameter == 200 && formData.length == 8000) {
    troughtsection3000 = "Trough Section 3000 Ø200"
    qty3000 = 2
  }
  // diameter300

  if (diameter == 300 && formData.length == 3000) {
    troughtsection3000 = "Trough Section 3000 Ø300"
    qty3000 = 1
  }
  if (diameter == 300 && formData.length == 5000) {
    troughtsection3000 = "Trough Section 3000 Ø300"
    qty3000 = 1
  }
  if (diameter == 300 && formData.length == 6000) {
    troughtsection3000 = "Trough Section 3000 Ø300"
    qty3000 = 2
  }
  if (diameter == 300 && formData.length == 7000) {
    troughtsection3000 = "Trough Section 3000 Ø300"
    qty3000 = 1
  }
  if (diameter == 300 && formData.length == 8000) {
    troughtsection3000 = "Trough Section 3000 Ø300"
    qty3000 = 2
  }

  var bearing, bearingqty;
  var bolts, boltqty;
  if (formData.length == 4000 || formData.length == 5000 || formData.length == 6000) {
    bearing = formData.diameter == 200 ? "Intermedaite Bearing Ø200" : "Intermedaite Bearing Ø300"
    bolts = formData.diameter == 200 ? "Vagen R Bolt Kit Ø200" : "Vagen R Bolt Kit Ø300"
    bearingqty = 1
    boltqty = 1
  }
  if (formData.length == 7000 || formData.length == 8000) {
    bearing = formData.diameter == 200 ? "Intermedaite Bearing Ø200" : "Intermedaite Bearing Ø300"
    bolts = formData.diameter == 200 ? "Vagen R Bolt Kit Ø200" : "Vagen R Bolt Kit Ø300"
    bearingqty = 2
    boltqty = 2
  }
  const tabledata = [
    {id:1, partnumber: formData.diameter == 200 ? "Vagen R Drive Station Ø200KW" : "Vagen R Drive Station Ø300KW", qty: 1 },
    {id:2, partnumber: formData.diameter == 200 ? "Vagen R End station Ø200" : "Vagen R End station Ø300", qty: 1 },
    {id:3, partnumber: troughtsection2000, qty: qty2000 },
    {id:4, partnumber: troughtsection3000, qty: qty3000 },
    {id:5, partnumber: bearing, qty: bearingqty },
    {id:6, partnumber: bolts, qty: boltqty },
    {id:7, partnumber: `Inlet${formData.inletqty == 1 ? "" : "'s"} ${formData.diameter == 200 ? " Ø200" : " Ø300"}`, qty: formData.inletqty },
    {id:8, partnumber: `Outlet${formData.outletqty == 1 ? "" : "'s"} ${formData.diameter == 200 ? " Ø200" : " Ø300"}`, qty: formData.outletqty },
  ]
  const filtertabledata = tabledata.filter(item => item.partnumber !== undefined && item.qty !== undefined);
console.log(partname);




  return (

    <div className='sidebar panel' style={{ position: "relative" }}>
      <div className="sidebarcontent" style={{ overflow: "auto" }} >
        <div className='sidebarcards' >
          <div className="cards">
            <Card style={{ borderRadius: "10px" }}>
              <div className='acc'>
                <FormLabel style={{ margin: "0", fontSize: '18px', wordSpacing: "1px", fontFamily: "Lato", paddingLeft: "15px", color: "#ffffff", fontWeight: "700" }}>Inputs</FormLabel>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "20px 15px", backgroundColor: "#ffffff" }}>
                <label htmlFor="" className='form-label' >Diameter (mm)</label>
                <select className="form-select" data-control="select2" data-placeholder="Select an option" name='diameter' value={formData.diameter} onChange={handleChange}>
                  <option value={200}>200</option>
                  <option value={300}>300</option>
                </select>
                <label className="form-label" >Length</label>
                <select className="form-select" data-control="select2" data-placeholder="Select an option" name='length' value={formData.length} onChange={handleChange}>
                  <option value={2000}>2000</option>
                  <option value={3000}>3000</option>
                  <option value={4000}>4000</option>
                  <option value={5000}>5000</option>
                  <option value={6000}>6000</option>
                  <option value={7000}>7000</option>
                  <option value={8000}>8000</option>
                </select>
              </div>
            </Card>
            <Card style={{ borderRadius: "10px" }}>
              <div className='acc' onClick={FirstDropDown}>
                <FormLabel style={{ margin: "0", fontSize: '18px', wordSpacing: "1px", fontFamily: "Lato", paddingLeft: "15px", color: "#ffffff", fontWeight: "700" }}>Inlets</FormLabel>
                <div style={{ paddingRight: "15px" }}>
                  {
                    firstdropdown ? <FaChevronUp /> : <FaChevronDown />
                  }
                </div>
              </div>
              {
                firstdropdown &&
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "20px 15px" }}>
                  <label className="form-label" >Number of Inlets</label>
                  <select className="form-select" data-control="select2" data-placeholder="Select an option" name='inletqty' value={formData.inletqty} onChange={handleChange}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                  </select>
                  <label className="form-label" >Inlet Position1 (mm)</label>
                  <input type="number" className="form-control mb-3" id="kt_docs_maxlength_basic" name='inletp1' value={formData.inletp1} onChange={handleChange} />
                  <label className="form-label" >Inlet Position2 (mm)</label>
                  <input type="number" className="form-control mb-3" id="kt_docs_maxlength_basic" name='inletp2' value={formData.inletp2} onChange={handleChange} />
                </div>
              }
            </Card>
            <Card style={{ borderRadius: "10px" }}>
              <div className='acc' onClick={SecondDropdown}>
                <FormLabel style={{ margin: "0", color: "#ffffff", fontSize: '18px', wordSpacing: "1px", paddingLeft: "15px", fontWeight: "700" }}>Outlets</FormLabel>
                <div style={{ paddingRight: "15px" }}>
                  {
                    seconddropdown ? <FaChevronUp /> : <FaChevronDown />
                  }
                </div>
              </div>
              {
                seconddropdown &&
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "20px 15px" }}>
                  <label className="form-label" >Number of Outlets</label>
                  <select className="form-select" data-control="select2" data-placeholder="Select an option" name='outletqty' value={formData.outletqty} onChange={handleChange}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                  </select>
                  <label className="form-label" >Outlet Position1 (mm)</label>
                  <input type="number" className="form-control mb-3" id="kt_docs_maxlength_basic" value={formData.outletp1} name='outletp1' onChange={handleChange} />
                  <label className="form-label" >Outlet Position2 (mm)</label>
                  <input type="number" className="form-control mb-3" id="kt_docs_maxlength_basic" value={formData.outletp2} name='outletp2' onChange={handleChange} />
                </div>
              }
            </Card>
          </div>
          <TableContainer component={Paper} style={{ marginTop: "8px", overflow: "hidden", borderRadius: "10px",marginBottom:"35px" }}>
            <div className="acc">
              <TableHead style={{ paddingLeft: "15px", fontSize: "18px", fontWeight: "700" }}>Bill of Materials</TableHead>
            </div>
            <Table sx={{ minWidth: 200 }}  >
              <TableRow>
                <StyledTableCell style={{ padding: "10px", fontFamily: "Lato", fontWeight: "700" }}>S.No</StyledTableCell>
                <ColumnResize
                  id={1}
                  minWidth={35}
                  maxWidth={60}
                  className="columnResizer"
                />
                <StyledTableCell style={{ padding: "10px", fontFamily: "Lato", fontWeight: "700" }} >Part Number</StyledTableCell>
                <ColumnResize
                  id={3}
                  maxWidth={120}
                  className="columnResizer"
                />
                <StyledTableCell style={{ padding: "10px", fontFamily: "Lato", fontWeight: "700" }} >Qty</StyledTableCell>
                <ColumnResize
                  id={2}
                  minWidth={35}
                  maxWidth={60}
                  className="columnResizer"
                />
              </TableRow>
              <TableBody>
                {
                  filtertabledata.map((item, index) => {
                    const { partnumber, qty,id } = item
                    return (
                      <StyledTableRow >
                        <StyledTableCell component="th" scope="row" style={{ padding: "10px", fontFamily: "Lato" }}>
                          {index + 1}
                        </StyledTableCell>
                        <td className="column_resizer_body" />
                        <StyledTableCell style={{ padding: "10px", fontFamily: "Lato", color: partname == partnumber && "red" }} onClick={() => {
                          setPartname(partnumber)
                        }}>{partnumber}</StyledTableCell>
                        <td className="column_resizer_body" />
                        <StyledTableCell style={{ padding: "10px", fontFamily: "Lato" }} >{qty}</StyledTableCell>
                        <td className="column_resizer_body" />
                      </StyledTableRow>
                    )
                  })
                }
              </TableBody>
            </Table>
          </TableContainer>

        </div>


      </div>
        <div style={{ position: "absolute", width: "100%", bottom: 0, backgroundColor: ' rgb(101, 30, 62)', color: '#fff', textAlign: 'center', padding: '4px', display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: "white", fontSize: "14px" }}>Version :</span>
          <span style={{ color: "white", fontSize: "14px" }}>V1.0</span>
        </div>
    </div>
  )
}
export default SidePanel