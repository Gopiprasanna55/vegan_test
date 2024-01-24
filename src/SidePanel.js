import React, { useState } from 'react'
import {FormLabel,Card} from "@mui/material";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useGlobalcontext } from './context';
import Slider from 'react-input-slider';
import TableData from './TableData';


const SidePanel = () => {
  const { formData, setFormData, setPartname, setShadowVisible, inletpos1, setInletpos1, inletpos2, setInletpos2, outletpos1, setObjdata, setOutletpos1, outletpos2, setOutletpos2, objdata, inletuuids, outletuuids, setOutletuuids, setInletuuids, setMaterial, material } = useGlobalcontext()
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

  const getMinMaxValues = (length, diameter) => {
    if (diameter == 200) {
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
    }
    else {
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



  const handleChange = (e) => {
    const { name, value } = e.target;
    let numberValue = parseInt(value, 10);
    if (name === "length") {
      setShadowVisible(true)
      setPartname("")
      setInletpos1(0)
      setOutletpos1(0)
      setObjdata([])
      setInletuuids([])
      setOutletuuids([])
      if (formData.diameter == 200) {
        setInletpos1(0)
        setOutletpos1(0)
        setInletpos2(245)
        setOutletpos2(245)
      } if (formData.diameter == 300) {
        setInletpos2(352)
        setInletpos1(0)
        setOutletpos1(0)
        setOutletpos2(352)
      }
    }
    if (name == "diameter") {
      setShadowVisible(true)
      setPartname("")
      setObjdata([])
      setInletuuids([])
      setOutletuuids([])
      if (value == 200) {
        setInletpos2(245)
        setInletpos1(0)
        setOutletpos1(0)
        setOutletpos2(245)
      }
      if (value == 300) {
        setInletpos2(352)
        setInletpos1(0)
        setOutletpos1(0)
        setOutletpos2(352)
      }
    }
    if (name == "inletqty") {
      if (value == 1) {
        if (inletuuids.length > 0) {
          inletuuids.map((item) => {
            const data = objdata.filter(value => value.uuid !== item);
            setObjdata(data)
          })
        }

      }
    }
    if (name == "outletqty") {
      if (value == 1) {
        if (outletuuids.length > 0) {
          outletuuids.map((item) => {
            const data = objdata.filter(value => value.uuid !== item);
            setObjdata(data)
          })
        }


      }
    }

    setFormData({
      ...formData,
      [name]: numberValue,
    });

  };

  const data = getMinMaxValues(formData.length, formData.diameter)
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
                <label htmlFor="" className='form-label' >Rotor Material</label>
                <select className="form-select" data-control="select2" data-placeholder="Select an option" name='material' value={material} onChange={(e) => {
                  setMaterial(e.target.value)
                }}>
                  <option value="Carbon Steel">Carbon Steel</option>
                  <option value="Stainless Steel">Stainless Steel</option>
                </select>
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
                  <option value={9000}>9000</option>
                  <option value={10000}>10000</option>
                  <option value={11000}>11000</option>
                  <option value={12000}>12000</option>
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
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <label className="form-label" >Inlet Position1 (mm)</label>
                    <label>{inletpos1}</label>
                  </div>

                  <Slider
                
                    axis="x"
                    x={inletpos1}
                    xmin={data.inletp1.min}
                    xmax={data.inletp1.max}
                    styles={{
                      track: {
                        width: '100%',
                        marginBottom: "10px"
                      }


                    }}
                    onChange={({ x }) => setInletpos1(x)}
                  />

                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <label className="form-label" >Inlet Position2 (mm)</label>
                    <label>{inletpos2}</label>
                  </div>
                  <Slider
                    axis="x"
                    x={inletpos2}
                    xmin={data.inletp2.min}
                    xmax={data.inletp2.max}
                    styles={{
                      track: {
                        width: '100%',
                        marginBottom: "10px"
                      }


                    }}
                    onChange={({ x }) => setInletpos2(x)}
                  />

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
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <label className="form-label" >Outlet Position1 (mm)</label>
                    <label >{outletpos1}</label>
                  </div>
                  <Slider
                    axis="x"
                    x={outletpos1}
                    xmin={data.outletp1.min}
                    xmax={data.outletp1.max}
                    styles={{
                      track: {
                        width: '100%',
                        marginBottom: "10px"
                      }
                    }}
                    onChange={({ x }) => setOutletpos1(x)}
                  />
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <label className="form-label" >Outlet Position2 (mm)</label>
                    <label  >{outletpos2}</label>
                  </div>
                  <Slider
                    axis="x"
                    x={outletpos2}
                    xmin={data.outletp2.min}
                    xmax={data.outletp2.max}
                    styles={{
                      track: {
                        width: '100%',
                        marginBottom: "10px"
                      }
                    }}
                    onChange={({ x }) => setOutletpos2(x)}
                  />
                </div>
              }
            </Card>
          </div>
          <TableData />
        </div>
      </div>
    </div>
  )
}
export default SidePanel




