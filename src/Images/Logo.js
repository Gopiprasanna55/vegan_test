import React, { useState } from "react";
import ResizePanel from "react-resize-panel";
// import style from './styles.css';
import './styles.css';
import logo from "./Images/logo.jpg";
import { styled } from '@mui/material/styles';
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Input,
  Slider,
  Stack,
  InputLabel,
  Accordion,
  AccordionSummary,
  Typography,
  Card,
  CardContent,
  AccordionDetails,
  MenuItem, Select, TextField, CardHeader
} from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell,{ tableCellClasses }from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const App = () => {
  const [firstdropdown, setFirstDropdown] = useState(false)
  const [seconddropdown, setSecondDropdown] = useState(false)
  const [values, setValues] = useState({

  })


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
    setValues({
      ...values,
      [name]: value,
    });
  };
  // function createData(
  //   name: string,
  //   calories: number,
  //   fat: number,
  //   carbs: number,
  //   protein: number,
  // ) {
  //   return { name, calories, fat, carbs, protein };
  // }

  // const rows = [
  //   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  //   createData('Eclair', 262, 16.0, 24, 6.0),
  //   createData('Cupcake', 305, 3.7, 67, 4.3),
  //   createData('Gingerbread', 356, 16.0, 49, 3.9),
  // ];
  return (
    <div className='container'>
      <div className='body'>
        <div className='content'>
          <nav style={{ display: "flex", alignItems: "center" }}>
            {/* <div style={{display:"flex",alignItemscenter:"center"}}> */}
            <img src={logo} alt="" style={{ width: "50px", height: "50px", borderRadius: "50%", border: "1px soild", marginLeft: "20PX" }} />
            {/* </div> */}

          </nav>
         
        </div>
        <ResizePanel direction="w" style={{ width: '400px' }} borderClass='customResizeBorder'>
          <div className='sidebar panel'>
            <div className="sidebarcards">
              <Card style={{ width: "100%", height: firstdropdown || seconddropdown ? "500px" : "300px",paddingBottom:"15px" }}>
                <div className="cardheader">
                  {/* <h4 style={{ margin: "0" }}>Header</h4> */}
                  <FormLabel style={{ margin: "0", color: "black", fontSize: '18px', fontWeight: "550", color: "white" }}>Vagen</FormLabel>
                </div>
                <CardContent style={{ padding: "0" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "20px 15px" }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        {/* <div className="MuiTypography-root jss30 jss38 MuiCardHeader-title MuiTypography-subtitle1 MuiTypography-displayBlock" style={{ fontSize: "13px", fontWeight: 550 }}>Custumer Refernce</div> */}
                        {/* <Typography variant="h6" style={{fontSize:"16px"}}>Responsive h5</Typography> */}
                        {/* <div className="MuiTypography-root jss30 jss38 MuiCardHeader-title MuiTypography-subtitle1 MuiTypography-displayBlock" style="font-size: 13px; font-weight: 550;">Choose side rails</div> */}
                        <FormLabel style={{ margin: "0", color: "black", fontSize: '13px', fontWeight: "550", wordSpacing: "5px",verticalAlign:"baseline" }}>Custumer Refernce</FormLabel>

                        <TextField   style={{ width: "195px", padding: "0",fontFamily: 'Roboto'}} InputProps={{ style: { fontSize: "14px" } }} variant="standard" name="width" value={values.width} onChange={handleChange} />
                      </div>
                      {/* <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div className="MuiTypography-root jss30 jss38 MuiCardHeader-title MuiTypography-subtitle1 MuiTypography-displayBlock" style={{ fontSize: "13px", fontWeight: 550 }}>Diameter</div>

                        <TextField id="my-input" aria-describedby="my-helper-text" style={{ width: "195px", padding: "0", fontSize: "13px" }} InputProps={{ style: { fontSize: "13px" } }} variant="standard" name="height" value={values.height} onChange={handleChange} />
                      </div> */}

                      <div variant="standard" style={{ display: "flex", gap: "10px", justifyContent: "space-between", alignItems: "center" }}>
                        <FormLabel style={{ margin: "0", color: "black", fontSize: '13px', fontWeight: "550",wordSpacing:"5px" }}>Diameter</FormLabel>

                        {/* <div className="MuiTypography-root jss30 jss38 MuiCardHeader-title MuiTypography-subtitle1 MuiTypography-displayBlock" style={{ fontSize: "13px", fontWeight: 550 }}>Diameter</div> */}


                        <TextField
                          id="standard-select-currency-native"
                          select
                          defaultValue="EUR"
                          variant="standard"
                          SelectProps={{
                            native: true,
                          }}
                          style={{ width: "195px", padding: "0",fontFamily: 'Roboto' }}
                          InputProps={{ style: { fontSize: "14px",wordSpacing:"5px" } }}
                        >
                          <option value={0}>
                            100
                          </option>
                          <option value={1}>
                            200
                          </option>
                          <option value={2}>
                            300
                          </option>
                          <option value={3}>
                            400
                          </option>

                        </TextField>
                      </div>
                      <div variant="standard" style={{ display: "flex", gap: "10px", justifyContent: "space-between", alignItems: "center" }}>

                        {/* <div className="MuiTypography-root jss30 jss38 MuiCardHeader-title MuiTypography-subtitle1 MuiTypography-displayBlock" style={{ fontSize: "13px", fontWeight: 550 }}>Length</div> */}
                        <FormLabel style={{ margin: "0", color: "black", fontSize: '13px', fontWeight: "550",wordSpacing:"5px" }}>Length</FormLabel>
                        <TextField
                          id="standard-select-currency-native"
                          select
                          defaultValue="EUR"
                          variant="standard"
                          SelectProps={{
                            native: true,
                          }}
                          style={{ width: "195px", padding: "0",fontFamily: 'Roboto' }}
                          InputProps={{ style: { fontSize: "14px",wordSpacing:"5px" } }}
                        >
                          <option value={0} style={{fontSize:"14px",fontFamily: 'Roboto'}}>
                            1000
                          </option>
                          <option value={1} style={{fontSize:"14px",fontFamily: 'Roboto'}}>
                            2000
                          </option>
                          <option value={2} style={{fontSize:"14px",fontFamily: 'Roboto'}}>
                            3000
                          </option>
                          <option value={3} style={{fontSize:"14px",fontFamily: 'Roboto'}}>
                            4000
                          </option>

                        </TextField>
                      </div>
                      <div variant="standard" style={{ display: "flex", gap: "10px", justifyContent: "space-between", alignItems: "center" }}>

                        {/* <div className="MuiTypography-root jss30 jss38 MuiCardHeader-title MuiTypography-subtitle1 MuiTypography-displayBlock" style={{ fontSize: "13px", fontWeight: 550 }}>MaterialvilotRotor</div> */}
                        <FormLabel style={{ margin: "0", color: "black", fontSize: '13px', fontWeight: "550",wordSpacing:"5px" }}>Material of Rotor</FormLabel>



                        <TextField
                          id="standard-select-currency-native"
                          select
                          defaultValue="EUR"
                          variant="standard"
                          SelectProps={{
                            native: true,
                          }}
                          style={{ width: "195px", padding: "0",fontFamily: 'Roboto' }}
                          InputProps={{ style: { fontSize: "14px" } }}
                        >
                          <option value={0} style={{fontSize:"14px",fontFamily: 'Roboto'}}>
                            100rpm
                          </option>
                          <option value={1} style={{fontSize:"14px",fontFamily: 'Roboto'}}>
                            200rpm
                          </option>
                          <option value={2} style={{fontSize:"14px",fontFamily: 'Roboto'}}>
                            300rpm
                          </option>
                          <option value={3} style={{fontSize:"14px",fontFamily: 'Roboto'}}>
                            400rpm
                          </option>

                        </TextField>
                      </div>
                      {/* <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div className="MuiTypography-root jss30 jss38 MuiCardHeader-title MuiTypography-subtitle1 MuiTypography-displayBlock" style={{ fontSize: "13px", fontWeight: 550 }}>Length</div>

                        <TextField id="my-input" aria-describedby="my-helper-text" style={{ width: "195px", padding: "0", fontSize: "13px" }} InputProps={{ style: { fontSize: "13px" } }} variant="standard" name="height" value={values.height} onChange={handleChange} />
                      </div> */}
                      {/* <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div className="MuiTypography-root jss30 jss38 MuiCardHeader-title MuiTypography-subtitle1 MuiTypography-displayBlock" style={{ fontSize: "13px", fontWeight: 550 }}>MaterialvilotRotor</div>

                        <TextField id="my-input" aria-describedby="my-helper-text" style={{ width: "195px", padding: "0", fontSize: "13px" }} InputProps={{ style: { fontSize: "13px" } }} variant="standard" name="height" value={values.height} onChange={handleChange} />
                      </div> */}
                    </div>
                    <Card style={{ margin: "0px 15px" }}>
                      <div className='acc' onClick={FirstDropDown}>
                        {/* <div className="MuiTypography-root jss30 jss38 MuiCardHeader-title MuiTypography-subtitle1 MuiTypography-displayBlock" style={{ fontSize: "17px", paddingLeft: "15px" }}>Inputs</div> */}
                  <FormLabel style={{ margin: "0", color: "black", fontSize: '14px', fontWeight: "550", color: "white",paddingLeft: "15px" }}>Inlets</FormLabel>

                        <div style={{ paddingRight: "15px" }}>
                          {
                            firstdropdown ? <FaChevronUp /> : <FaChevronDown />
                          }
                        </div>

                      </div>
                      {
                        firstdropdown && <CardContent style={{ padding: "0" }}>
                          <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "20px 15px" }}>
                            {/* <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                              <div className="MuiTypography-root jss30 jss38 MuiCardHeader-title MuiTypography-subtitle1 MuiTypography-displayBlock" style={{ fontSize: "13px", fontWeight: 550 }}>Number Inlet </div>
                              <TextField id="my-input" aria-describedby="my-helper-text" style={{ width: "195px", padding: "0", fontSize: "13px" }} InputProps={{ style: { fontSize: "13px" } }} variant="standard" name="width" value={values.width} onChange={handleChange} />
                            </div> */}
                            <div variant="standard" style={{ display: "flex", gap: "10px", justifyContent: "space-between", alignItems: "center" }}>

                              {/* <div className="MuiTypography-root jss30 jss38 MuiCardHeader-title MuiTypography-subtitle1 MuiTypography-displayBlock" style={{ fontSize: "13px", fontWeight: 550 }}>Number Inlet</div> */}
                        <FormLabel style={{ margin: "0", color: "black", fontSize: '13px', fontWeight: "550",wordSpacing:"5px" }}>Number Inlet</FormLabel>



                              <TextField
                                id="standard-select-currency-native"
                                select
                                defaultValue="EUR"
                                variant="standard"
                                SelectProps={{
                                  native: true,
                                }}
                                style={{ width: "195px", padding: "0", fontSize: "13px",fontFamily:"Roboto" }}
                                InputProps={{ style: { fontSize: "13px" } }}
                              >
                                <option value={0} style={{fontSize:"14px",fontFamily: 'Roboto'}}>
                                  1
                                </option>
                                <option value={1} style={{fontSize:"14px",fontFamily: 'Roboto'}}>
                                  2
                                </option>
                                <option value={2} style={{fontSize:"14px",fontFamily: 'Roboto'}}>
                                  3
                                </option>
                                <option value={3} style={{fontSize:"14px",fontFamily: 'Roboto'}}>
                                  4
                                </option>

                              </TextField>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                              {/* <div className="MuiTypography-root jss30 jss38 MuiCardHeader-title MuiTypography-subtitle1 MuiTypography-displayBlock" style={{ fontSize: "13px", fontWeight: 550 }}>Inlop 1 plassering fra drivsiden</div> */}
                        <FormLabel style={{ margin: "0", color: "black", fontSize: '13px', fontWeight: "550",wordSpacing:"px" }}>Inlet Position1</FormLabel>

                              <TextField id="my-input" aria-describedby="my-helper-text" style={{ width: "195px", padding: "0", fontSize: "14px" }} InputProps={{ style: { fontSize: "14px" } }} variant="standard" name="height" onChange={handleChange} />
                            </div>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                              {/* <div className="MuiTypography-root jss30 jss38 MuiCardHeader-title MuiTypography-subtitle1 MuiTypography-displayBlock" style={{ fontSize: "13px", fontWeight: 550 }}>Inlop 2 plassering fra drivsiden</div> */}
                        <FormLabel style={{ margin: "0", color: "black", fontSize: '13px', fontWeight: "550",wordSpacing:"3px" }}>Inlet Position2</FormLabel>

                              <TextField id="my-input" aria-describedby="my-helper-text" style={{ width: "195px", padding: "0", fontSize: "14px" }} InputProps={{ style: { fontSize: "14px" } }} variant="standard" name="height" onChange={handleChange} />
                            </div>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <FormLabel style={{ margin: "0", color: "black", fontSize: '13px', fontWeight: "550",wordSpacing:"3px" }}>Inlet Position3</FormLabel>
                            
                              {/* <div className="MuiTypography-root jss30 jss38 MuiCardHeader-title MuiTypography-subtitle1 MuiTypography-displayBlock" style={{ fontSize: "13px", fontWeight: 550 }}>Inlop 3 plassering fra drivsiden</div> */}
                              <TextField id="my-input" aria-describedby="my-helper-text" style={{ width: "195px", padding: "0", fontSize: "14px" }} InputProps={{ style: { fontSize: "14px" } }} variant="standard" name="height" onChange={handleChange} />
                            </div>
                          </div>
                        </CardContent>
                      }

                    </Card>
                    <Card style={{ margin: "0px 15px" }}>
                      <div className='acc' onClick={SecondDropdown}>
                        {/* <div className="MuiTypography-root jss30 jss38 MuiCardHeader-title MuiTypography-subtitle1 MuiTypography-displayBlock" style={{ fontSize: "17px", paddingLeft: "15px" }}>Outputs</div> */}
                  <FormLabel style={{ margin: "0", color: "black", fontSize: '14px', fontWeight: "550", color: "white",paddingLeft: "15px" }}>Outlets</FormLabel>

                        <div style={{ paddingRight: "15px" }}>
                          {
                            seconddropdown ? <FaChevronUp /> : <FaChevronDown />
                          }
                        </div>
                      </div>
                      {
                        seconddropdown && <CardContent style={{ padding: "0" }}>
                          <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "20px 15px" }}>
                            {/* <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                              <div className="MuiTypography-root jss30 jss38 MuiCardHeader-title MuiTypography-subtitle1 MuiTypography-displayBlock" style={{ fontSize: "13px", fontWeight: 550 }}>Number Outlet 2</div>
                              <TextField id="my-input" aria-describedby="my-helper-text" style={{ width: "195px", padding: "0", fontSize: "13px" }} InputProps={{ style: { fontSize: "13px" } }} variant="standard" name="width" value={values.width} onChange={handleChange} />
                            </div> */}
                            <div variant="standard" style={{ display: "flex", gap: "10px", justifyContent: "space-between", alignItems: "center" }}>

                              {/* <div className="MuiTypography-root jss30 jss38 MuiCardHeader-title MuiTypography-subtitle1 MuiTypography-displayBlock" style={{ fontSize: "13px", fontWeight: 550 }}>Number Outlet </div> */}
                        <FormLabel style={{ margin: "0", color: "black", fontSize: '13px', fontWeight: "550",wordSpacing:"3px" }}>Number Outlet</FormLabel>


                              <TextField
                                id="standard-select-currency-native"
                                select
                                defaultValue="EUR"
                                variant="standard"
                                SelectProps={{
                                  native: true,
                                }}
                                style={{ width: "195px", padding: "0", fontSize: "13px",fontFamily:"Roboto"}}
                                InputProps={{ style: { fontSize: "13px" } }}
                              >
                                <option value={0} style={{fontSize:"14px",fontFamily: 'Roboto'}}>
                                  1
                                </option>
                                <option value={1} style={{fontSize:"14px",fontFamily: 'Roboto'}}>
                                  2
                                </option>
                                <option value={2} style={{fontSize:"14px",fontFamily: 'Roboto'}}>
                                  3
                                </option>
                                <option value={3} style={{fontSize:"14px",fontFamily: 'Roboto'}}>
                                  4
                                </option>

                              </TextField>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                              {/* <div className="MuiTypography-root jss30 jss38 MuiCardHeader-title MuiTypography-subtitle1 MuiTypography-displayBlock" style={{ fontSize: "13px", fontWeight: 550 }}>Utlop 1 plassering far drivsiden</div> */}
                        <FormLabel style={{ margin: "0", color: "black", fontSize: '13px', fontWeight: "550",wordSpacing:"3px" }}>Outlet Position1</FormLabel>

                              <TextField id="my-input" aria-describedby="my-helper-text" style={{ width: "195px", padding: "0", fontSize: "13px" }} InputProps={{ style: { fontSize: "14px" } }} variant="standard" name="height" onChange={handleChange} />
                            </div>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                              {/* <div className="MuiTypography-root jss30 jss38 MuiCardHeader-title MuiTypography-subtitle1 MuiTypography-displayBlock" style={{ fontSize: "13px", fontWeight: 550 }}>Utlop 2 plassering far drivsiden</div> */}
                        <FormLabel style={{ margin: "0", color: "black", fontSize: '13px', fontWeight: "550",wordSpacing:"3px" }}>Outlet Position2</FormLabel>

                              <TextField id="my-input" aria-describedby="my-helper-text" style={{ width: "195px", padding: "0", fontSize: "13px" }} InputProps={{ style: { fontSize: "14px" } }} variant="standard" name="height" onChange={handleChange} />
                            </div>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                              {/* <div className="MuiTypography-root jss30 jss38 MuiCardHeader-title MuiTypography-subtitle1 MuiTypography-displayBlock" style={{ fontSize: "13px", fontWeight: 550 }}>Utlop 3 plassering far drivsiden</div> */}
                        <FormLabel style={{ margin: "0", color: "black", fontSize: '13px', fontWeight: "550",wordSpacing:"3px" }}>Outlet Position3</FormLabel>

                              <TextField id="my-input" aria-describedby="my-helper-text" style={{ width: "195px", padding: "0", fontSize: "13px" }} InputProps={{ style: { fontSize: "14px" } }} variant="standard" name="height" onChange={handleChange} />
                            </div>
                          </div>
                        </CardContent>
                      }
                    </Card>
                  </div>
                </CardContent>
              </Card>
              <TableContainer component={Paper} style={{marginTop:"20px"}}>
      <Table sx={{ minWidth: 200 }} aria-label="customized table" >
        <TableHead>
          <TableRow>
            <StyledTableCell style={{padding:"10px",fontSize:"13px",fontWeight:"550"}}>Cust Ref</StyledTableCell>
            <StyledTableCell style={{padding:"10px",fontWeight:"550"}} >Daimeter</StyledTableCell>
            <StyledTableCell style={{padding:"10px",fontWeight:"550"}} >Length</StyledTableCell>
            <StyledTableCell style={{padding:"10px",fontWeight:"550"}} >Inlets</StyledTableCell>
            <StyledTableCell style={{padding:"10px",fontWeight:"550"}} >Materail</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         
            <StyledTableRow >
              <StyledTableCell component="th" scope="row" style={{padding:"10px"}}>
            1
              </StyledTableCell>
              <StyledTableCell style={{padding:"10px"}} >500 mm</StyledTableCell>
              <StyledTableCell style={{padding:"10px"}} >1000mm</StyledTableCell>
              <StyledTableCell style={{padding:"10px"}} >23</StyledTableCell>
              <StyledTableCell style={{padding:"10px"}} >Cast-iron</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row" style={{padding:"10px"}}>
            5
              </StyledTableCell>
              
              <StyledTableCell style={{padding:"10px"}} >700mm</StyledTableCell>
              <StyledTableCell style={{padding:"10px"}} >1500mm</StyledTableCell>
              <StyledTableCell style={{padding:"10px"}} >12</StyledTableCell>

              <StyledTableCell style={{padding:"10px"}} >Stainless-steel</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row" style={{padding:"10px"}}>
            2
              </StyledTableCell>
              
              <StyledTableCell style={{padding:"10px"}} >400mm</StyledTableCell>
              <StyledTableCell style={{padding:"10px"}} >1800mm</StyledTableCell>
              <StyledTableCell style={{padding:"10px"}} >20</StyledTableCell>

              <StyledTableCell style={{padding:"10px"}} >Aluminum</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row" style={{padding:"10px"}}>
            3
              </StyledTableCell>
              
              <StyledTableCell style={{padding:"10px"}} >450mm</StyledTableCell>
              <StyledTableCell style={{padding:"10px"}} >1700mm</StyledTableCell>
              <StyledTableCell style={{padding:"10px"}} >13</StyledTableCell>

              <StyledTableCell style={{padding:"10px"}} >Titanium</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row" style={{padding:"10px"}}>
            7
              </StyledTableCell>
              
              <StyledTableCell style={{padding:"10px"}} >850mm</StyledTableCell>
              <StyledTableCell style={{padding:"10px"}} >1300mm</StyledTableCell>
              <StyledTableCell style={{padding:"10px"}} >14</StyledTableCell>

              <StyledTableCell style={{padding:"10px"}} >Aluminum</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row" style={{padding:"10px"}}>
            9
              </StyledTableCell>
              
              <StyledTableCell style={{padding:"10px"}} >1000mm</StyledTableCell>
              <StyledTableCell style={{padding:"10px"}} >1300mm</StyledTableCell>
              <StyledTableCell style={{padding:"10px"}} >17</StyledTableCell>

              <StyledTableCell style={{padding:"10px"}} >Titanium</StyledTableCell>
            </StyledTableRow>
          
        </TableBody>
      </Table>
    </TableContainer>
             
            </div>

          </div>
        </ResizePanel>
      </div>
    </div>
  )
};
export default App;