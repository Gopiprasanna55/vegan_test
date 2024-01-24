import * as THREE from 'three'
import React, { Suspense, } from 'react'
import { Canvas } from '@react-three/fiber'
import { Stage, OrbitControls, Html } from '@react-three/drei'
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
export default function App() {
  const { show, hideAll } = useContextMenu({
    id: CANVAS_ID,
  });
  const { setShowall, showall, objdata, setObjdata, setShadowVisible, setPartname, setOutletuuids, setInletuuids } = useGlobalcontext()
  return (
    <>
      <Canvas style={{ position: "relative" }}
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
          position={[-50, -50, 100]}
          intensity={0.6}
          shadow-mapSize={1024}
        />
        <directionalLight
          position={[50, -50, 100]}
          intensity={0.6}
          shadow-mapSize={1024}
        />
        <directionalLight
          position={[-50, -50, -100]}
          intensity={0.6}
          shadow-mapSize={1024}
        />
        <directionalLight
          position={[50, -50, -100]}
          intensity={0.6}
          shadow-mapSize={1024}
        />
        <color attach="background" args={['#6D6D6D']} />
        <OrbitControls enableZoom={true} enablePan={true} minPolarAngle={0} maxPolarAngle={Math.PI / 2.25} makeDefault minDistance={10} maxDistance={200} />
        <Model />
      </Canvas>
      <Menu id={CANVAS_ID} animation={false} theme='light' style={{ minWidth: "130px", padding: "5px" }}>
        {
          objdata.length > 0 && <>
            <p className='item remove-hover' onClick={() => {
              objdata.map((item) => {
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
        }}>Show all</p>
        {
          objdata.length > 0 && <>
            <Separator />
            <p className='item remove-hover' onClick={() => {
              objdata.map((item) => {
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
    </>
  )
}
const Model = () => {
  const { formData, showall, shadowvisible } = useGlobalcontext()
  var shadowheight = formData.diameter == 200 ? 0 : -85
  
  return (
    <Suspense key={showall} fallback={<LoadingIndicator />}  >
      <Stage
        shadows={{ type: 'contact', position: [0, shadowheight, 0], opacity: shadowvisible ? 2.4 : 0, scale: 24000 }}
        adjustCamera
        environment={'city'}
      >
        <>
          {/* Screw Length-2000 */}
          {
            formData.length == 2000 && <Length2000 />
          }
          {/* Screw Length-3000 */}
          {
            formData.length == 3000 && <Length3000 />
          }
          {/* Screw Length-4000 */}
          {
            formData.length == 4000 && <Length4000 />
          }
          {/* Screw Length-5000 */}
          {
            formData.length == 5000 && <Length5000 />
          }
          {/* Screw Length-6000 */}
          {
            formData.length == 6000 && <Length6000 />
          }
          {/* Screw Length-7000 */}
          {
            formData.length == 7000 && <Length7000 />
          }
          {/* Screw Length-8000 */}
          {
            formData.length == 8000 && <Length8000 />
          }
          {/* Screw Length-9000 */}
          {
            formData.length == 9000 && <Length9000 />
          }
          {/* Screw Length-10000 */}
          {
            formData.length == 10000 && <Length10000 />
          }
          {/* Screw Length-11000 */}
          {
            formData.length == 11000 && <Length11000 />
          }
          {/* Screw Length-12000 */}
          {
            formData.length == 12000 && <Length12000 />
          }
        </>
      </Stage>
    </Suspense>
  )
}





