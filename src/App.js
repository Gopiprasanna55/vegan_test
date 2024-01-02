import React from "react";
import ResizePanel from "react-resize-panel";
import './styles.css';
import SidePanel from "./SidePanel";
import logo from "./Images/logo.png";
import Model from "./Model";
const App = () => {
  return (
    <div className='container'>
      <div className='body' style={{ display: "flex", height: "100vh" }}>
        <div className='content' style={{ overflow: "hidden", flex: "1", display: "flex", flexDirection: "column" }}>
          <nav style={{ padding: "5px", borderBottom: "1px solid #ccc" }}>
            <img src={logo} alt="" style={{ marginLeft: "20px", width: "100px" }} />
            <h3 style={{ margin: "0", color: "#4d7f9e" }}>Screw Conveyor Configurator</h3>
          </nav>
          <div className="model" style={{ overflow: "auto", flex: "1" }}>
            <Model />
          </div>
        </div>

        <ResizePanel direction="w" borderClass='customResizeBorder' className="r">
          <SidePanel />
        </ResizePanel>
      </div>
    </div>
  )
};

export default App;


































// import React, { useRef } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';

// const Box = () => {
//   const meshRef = useRef();
//   useFrame(() => {
//     meshRef.current.rotation.x += 0.01;
//     meshRef.current.rotation.y += 0.01;
//   });

//   return (
//     <mesh ref={meshRef}>
//       <boxGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color="orange" />
//     </mesh>
//   );
// };

// const Modal = () => {
//   return (
//     <div>
//       <h1>Simple Box Modal</h1>
//       <Canvas>
//         <Box />
//       </Canvas>
//     </div>
//   );
// };

// const App = () => {
//   return <Modal />;
// };

// export default App;

