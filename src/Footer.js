import React from 'react'
import SidePanel from './SidePanel'
const Footer = () => {
  return (
    <div style={{position:"relative"}}>
        <SidePanel/>
        <div style={{ display: "flex", gap: "10px", backgroundColor: "#651e3e", width: "100%", justifyContent: "center", position: "absolute", bottom: 0 }}>
          <span style={{ color: "white" }}>Version :</span>
          <span style={{ color: "white" }}>V1.0</span>
        </div>
    </div>
  )
}

export default Footer