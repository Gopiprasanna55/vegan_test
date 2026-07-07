import * as THREE from 'three'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Stage, OrbitControls, Html } from '@react-three/drei'
import { FaPlus, FaMinus, FaArrowRotateLeft } from "react-icons/fa6";
import { useGlobalcontext } from './context'
import Length2000 from './Models/Length2000'
import Length3000 from './Models/Length3000'
import Length4000 from './Models/Length4000'
import Length5000 from './Models/Length5000'
import Length6000 from './Models/Length6000'
import Length7000 from './Models/Length7000'
import Length8000 from './Models/Length8000'
import Length9000 from './Models/Length9000'
import Length10000 from './Models/Length10000'
import Length11000 from './Models/Length11000'
import Length12000 from './Models/Length12000'
import PropagateLoader from "react-spinners/PropagateLoader";
import { Menu, Separator, useContextMenu } from 'react-contexify';
import 'react-contexify/ReactContexify.css';

const CANVAS_ID = "canvas-context-menu";

const LoadingIndicator = () => {
  return (
    <Html center>
      <PropagateLoader
        color={"#FFFFFF"}
        loading={true}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </Html>
  );
};

const ConfigurationStatusBar = () => {
  const { formData, material } = useGlobalcontext();
  return (
    <div style={{
      position: 'absolute',
      bottom: '24px',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: 'rgba(23, 25, 30, 0.75)',
      backdropFilter: 'blur(8px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '20px',
      padding: '8px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      color: '#E2E8F0',
      fontFamily: 'Lato, sans-serif',
      fontSize: '13px',
      fontWeight: '600',
      pointerEvents: 'none',
      userSelect: 'none',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
      zIndex: 10
    }}>
      <span style={{
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        backgroundColor: '#10B981',
        display: 'inline-block'
      }}></span>
      <span>{`Ø${formData.diameter}mm · L${formData.length}mm · ${material}`}</span>
    </div>
  );
};

const ViewerControls = ({ controlsRef }) => {
  const handleZoomIn = (e) => {
    e.stopPropagation();
    const controls = controlsRef.current;
    if (controls) {
      const camera = controls.object;
      const target = controls.target;
      if (camera && target) {
        camera.position.lerp(target, 0.15);
        controls.update();
      }
    }
  };

  const handleZoomOut = (e) => {
    e.stopPropagation();
    const controls = controlsRef.current;
    if (controls) {
      const camera = controls.object;
      const target = controls.target;
      if (camera && target) {
        const direction = new THREE.Vector3().subVectors(camera.position, target).normalize();
        camera.position.addScaledVector(direction, 100);
        controls.update();
      }
    }
  };

  const handleReset = (e) => {
    e.stopPropagation();
    const controls = controlsRef.current;
    if (controls) {
      controls.reset();
    }
  };

  return (
    <div style={{
      position: 'absolute',
      bottom: '24px',
      right: '24px',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'rgba(23, 25, 30, 0.75)',
      backdropFilter: 'blur(8px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '20px',
      padding: '4px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
      zIndex: 10
    }}>
      <button
        onClick={handleZoomIn}
        style={{
          width: '36px',
          height: '36px',
          border: 'none',
          background: 'none',
          color: '#E2E8F0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          borderRadius: '50%',
          transition: 'background-color 0.2s',
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        title="Zoom In"
      >
        <FaPlus size={14} />
      </button>
      <button
        onClick={handleZoomOut}
        style={{
          width: '36px',
          height: '36px',
          border: 'none',
          background: 'none',
          color: '#E2E8F0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          borderRadius: '50%',
          transition: 'background-color 0.2s',
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        title="Zoom Out"
      >
        <FaMinus size={14} />
      </button>
      <button
        onClick={handleReset}
        style={{
          width: '36px',
          height: '36px',
          border: 'none',
          background: 'none',
          color: '#E2E8F0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          borderRadius: '50%',
          transition: 'background-color 0.2s',
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        title="Reset View"
      >
        <FaArrowRotateLeft size={13} />
      </button>
    </div>
  );
};

const CanvasBgColorPicker = ({ bgColor, setBgColor }) => {
  const handleColorChange = (e) => {
    const selectedColor = e.target.value;
    setBgColor(selectedColor.slice(0, 7)); // Slice to 7 characters to ensure Three.js compatibility
  };
  return (
    <div style={{
      position: 'absolute',
      bottom: '24px',
      left: '24px',
      backgroundColor: 'rgba(23, 25, 30, 0.75)',
      backdropFilter: 'blur(8px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '20px',
      padding: '8px 14px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      color: '#E2E8F0',
      fontFamily: 'Lato, sans-serif',
      fontSize: '13px',
      fontWeight: '600',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
      zIndex: 10,
      userSelect: 'none'
    }}>
      <span style={{ color: '#94A3B8' }}>Bg:</span>
      <div
        style={{
          position: 'relative',
          width: '20px',
          height: '20px',
        }}
      >
        <div
          style={{
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            backgroundColor: bgColor,
            border: '2px solid #FFFFFF',
            boxShadow: '0 0 4px rgba(0, 0, 0, 0.5)',
            cursor: 'pointer',
            transition: 'transform 0.15s ease-in-out'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
        />
        <input
          type="color"
          value={bgColor}
          onChange={handleColorChange}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 0,
            cursor: 'pointer',
            border: 'none',
            padding: 0
          }}
        />
      </div>
      <span style={{ fontSize: '12px', fontFamily: 'monospace', letterSpacing: '0.5px' }}>
        {bgColor.toUpperCase()}
      </span>
    </div>
  );
};

export default function App() {
  const [bgColor, setBgColor] = useState(() => {
    const savedColor = localStorage.getItem('conveyorBgColor');
    return savedColor ? savedColor.slice(0, 7) : '#e0f3faff'.slice(0, 7);
  });

  useEffect(() => {
    localStorage.setItem('conveyorBgColor', bgColor);
  }, [bgColor]);

  const { show, hideAll } = useContextMenu({
    id: CANVAS_ID,
  });
  const {
    setShowall,
    showall,
    objdata,
    setObjdata,
    setShadowVisible,
    setPartname,
    setOutletuuids,
    setInletuuids,
    setHighlightingText,
    loadingSet
  } = useGlobalcontext()

  const controlsRef = useRef(null);
  const isCurrentlyLoading = loadingSet && loadingSet.size > 0;
  const hasStartedLoadingRef = useRef(false);
  const saveStateTimeoutRef = useRef(null);

  if (isCurrentlyLoading) {
    hasStartedLoadingRef.current = true;
  }

  useEffect(() => {
    if (saveStateTimeoutRef.current) {
      clearTimeout(saveStateTimeoutRef.current);
    }

    if (!isCurrentlyLoading && controlsRef.current) {
      const delay = hasStartedLoadingRef.current ? 500 : 1500;
      saveStateTimeoutRef.current = setTimeout(() => {
        if (controlsRef.current) {
          controlsRef.current.saveState();
        }
      }, delay);
    }

    return () => {
      if (saveStateTimeoutRef.current) {
        clearTimeout(saveStateTimeoutRef.current);
      }
    };
  }, [isCurrentlyLoading]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Canvas
        shadows
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.15,
          outputColorSpace: THREE.SRGBColorSpace
        }}
        style={{
          position: "relative",
          // background: "radial-gradient(circle, #2E3340 0%, #15181F 100%)"
        }}
        onContextMenu={(event) => {
          show({
            event,
            props: {
              key: 'value'
            }
          })
        }}
      >
        <directionalLight
          position={[-100, 150, 100]}
          intensity={1.2}
          shadow-mapSize={2048}
        />
        <directionalLight
          position={[100, 120, 100]}
          intensity={0.6}
          shadow-mapSize={1024}
        />
        <directionalLight
          position={[0, 100, -100]}
          intensity={0.8}
          shadow-mapSize={1024}
        />
        <directionalLight
          position={[0, -100, 0]}
          intensity={0.3}
        />
        <color attach="background" args={[bgColor]} />
        <ambientLight intensity={0.4} />
        <OrbitControls
          ref={controlsRef}
          enableZoom={true}
          enablePan={true}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2.25}
          makeDefault
          minDistance={1.5}
          maxDistance={8}
        />
        <Model />
      </Canvas>
      <Menu id={CANVAS_ID} animation={false} theme='light' style={{ minWidth: "130px", padding: "5px" }}>
        {
          objdata.length > 0 && <>
            <p className='item remove-hover' onClick={() => {
              objdata.forEach((item) => {
                item.visible = false
              })
              setObjdata([])
              setOutletuuids([])
              setInletuuids([])
              hideAll()
              setShadowVisible(false)
            }}>Hide</p>
            <Separator />
          </>
        }
        <p className='item remove-hover' onClick={() => {
          setShowall(!showall)
          setShadowVisible(true)
          setPartname("")
          setObjdata([])
          setOutletuuids([])
          setInletuuids([])
          setHighlightingText('')
        }}>Show all</p>
        {
          objdata.length > 0 && <>
            <Separator />
            <p className='item remove-hover' onClick={() => {
              objdata.forEach((item) => {
                item.traverse((node) => {
                  if (node.isMesh) {
                    const material = new THREE.MeshStandardMaterial({
                      roughness: 0.3,
                      metalness: 0.4,
                      transparent: true,
                      opacity: 0.4,
                      depthWrite: false,
                    });
                    node.material = material;
                  }
                });
              })
              setObjdata([])
              hideAll()
              setShadowVisible(false)
              setOutletuuids([])
              setInletuuids([])
            }}>Transparent</p>
          </>
        }
      </Menu>
      <ConfigurationStatusBar />
      <ViewerControls controlsRef={controlsRef} />
      <CanvasBgColorPicker bgColor={bgColor} setBgColor={setBgColor} />
    </div>
  )
}

const getConveyorPhysicalBounds = (length, diameter) => {
  let minX = -length - 810;
  let maxX = 2210;

  if (diameter === 200) {
    if (length === 2000) {
      minX = -2810;
      maxX = 1213;
    } else if (length === 3000) {
      minX = -2810;
      maxX = 2210;
    }
  } else { // diameter === 300
    if (length === 2000) {
      minX = -2430;
      maxX = 768;
    } else if (length === 3000) {
      minX = -2701;
      maxX = 1500;
    } else if (length === 4000) {
      minX = -3430;
      maxX = 1770;
    } else if (length === 5000) {
      minX = -3900;
      maxX = 2300;
    } else if (length === 6000) {
      minX = -4901;
      maxX = 2300;
    } else {
      minX = -length - 1900;
      maxX = 2300;
    }
  }
  return { minX, maxX };
};

const PlaceholderBox = ({ length, diameter, shadowheight }) => {
  const { minX, maxX } = getConveyorPhysicalBounds(length, diameter);
  const centerX = (minX + maxX) / 2;
  const sizeX = maxX - minX;
  return (
    <mesh name="placeholder-box" position={[centerX, shadowheight, 0]} visible={false}>
      <boxGeometry args={[sizeX, 400, 400]} />
      <meshBasicMaterial transparent opacity={0} depthWrite={false} />
    </mesh>
  );
};

const Model = () => {
  const { formData, showall, shadowvisible, loadingSet } = useGlobalcontext()
  var shadowheight = formData.diameter === 200 ? -50 : -85
  const isCurrentlyLoading = loadingSet && loadingSet.size > 0

  const length = formData.length;
  const diameter = formData.diameter;
  const { minX, maxX } = getConveyorPhysicalBounds(length, diameter);
  const conveyorLength = maxX - minX;
  const shadowWidth = conveyorLength + 1200;
  const shadowDepth = diameter === 200 ? 850 : 1000;




  return (
    <>
      {isCurrentlyLoading && <LoadingIndicator />}
      <Suspense key={`${showall}-${formData.length}-${formData.diameter}`} fallback={<LoadingIndicator />}>
        <Stage
          adjustCamera={0.75}
          environment={'city'}
          shadows={{
            type: 'contact',
            position: [0, 0, 0],
            opacity: shadowvisible ? 0.75 : 0,
            scale: [shadowWidth, shadowDepth],
            blur: 1.5,
            far: 1000,
            resolution: 2048
          }}
        >
          <>
            <PlaceholderBox length={length} diameter={diameter} shadowheight={shadowheight} />
            {/* Screw Length-2000 */}
            {
              formData.length === 2000 && <Length2000 />
            }
            {/* Screw Length-3000 */}
            {
              formData.length === 3000 && <Length3000 />
            }
            {/* Screw Length-4000 */}
            {
              formData.length === 4000 && <Length4000 />
            }
            {/* Screw Length-5000 */}
            {
              formData.length === 5000 && <Length5000 />
            }
            {/* Screw Length-6000 */}
            {
              formData.length === 6000 && <Length6000 />
            }
            {/* Screw Length-7000 */}
            {
              formData.length === 7000 && <Length7000 />
            }
            {/* Screw Length-8000 */}
            {
              formData.length === 8000 && <Length8000 />
            }
            {/* Screw Length-9000 */}
            {
              formData.length === 9000 && <Length9000 />
            }
            {/* Screw Length-10000 */}
            {
              formData.length === 10000 && <Length10000 />
            }
            {/* Screw Length-11000 */}
            {
              formData.length === 11000 && <Length11000 />
            }
            {/* Screw Length-12000 */}
            {
              formData.length === 12000 && <Length12000 />
            }
          </>
        </Stage>
      </Suspense>
    </>
  )
}
