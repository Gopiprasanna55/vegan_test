import * as THREE from 'three'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { Stage, OrbitControls, OrthographicCamera } from '@react-three/drei'
import { MTLLoader, OBJLoader } from 'three-stdlib'
import { useGlobalcontext } from './context'
import Length2000 from './Models/Length2000'
import Length3000 from './Models/Length3000'
import Length4000 from './Models/Length4000'
import Length5000 from './Models/Length5000'
import Length6000 from './Models/Length6000'
import Length7000 from './Models/Length7000'
import Length8000 from './Models/Length8000'
export const Scene = (props) => {
  const { obj, mtl, position, rotation, hexcolor } = props
  console.log(hexcolor);
  const materials = useLoader(MTLLoader, mtl);
  const objModal = useLoader(OBJLoader, obj, (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });
  const clonedObj = objModal.clone();
  clonedObj.traverse((node) => {
    if (node.isMesh) {
      const material = new THREE.MeshStandardMaterial({
        color: node.material.color = hexcolor,
        roughness: 0.3,
        metalness: 0.4,
      });
      // console.log(node);
      node.material = material;
      // node.castShadow = true;
      // node.receiveShadow = true;
    }
  });
  return (
    <mesh position={position} rotation={rotation} >
      <primitive object={clonedObj} scale={1} />
    </mesh>
  );
};


export default function App() {
  const { formData } = useGlobalcontext()
  return (
    <>
      <Canvas style={{ height: "100vh", position: "relative" }}>
        <directionalLight
          position={[300, 160, -10]}
          intensity={0.1}
          shadow-mapSize={1024}
        />
        <directionalLight
          position={[-300, 100, -50]}
          intensity={0.1}
          shadow-mapSize={1024}
        />
        <color attach="background" args={['skyblue']} />
        <OrbitControls enableZoom={true} enablePan={true} minPolarAngle={0} maxPolarAngle={Math.PI / 2.25} makeDefault minDistance={10} maxDistance={200} />
        <Model />
        <axesHelper args={[500]} />
        <OrbitControls />
      </Canvas>
    </>

  )
}
const Model = () => {
  const { formData } = useGlobalcontext()


  return (
    <Suspense fallback={null}>
      <Stage>
        <>

          {/* Screw Length-2000 */}
          {

formData.length == 2000 &&<Length2000/>
            
          }


          {/* Screw Length-3000 */}
          {
            formData.length == 3000 && <Length3000/>
           
          }


          {/* Screw Length-4000 */}
          {
            formData.length == 4000 && <Length4000/>
          }


          {/* Screw Length-5000 */}
          {
            formData.length == 5000 && <Length5000/>
           
          }


          {/* Screw Length-6000 */}
          {
            formData.length == 6000 && <Length6000/>
           
          }


          {/* Screw Length-7000 */}
          {
            formData.length == 7000 && <Length7000/>
           
          }

          {/* Screw Length-8000 */}
          {
            formData.length == 8000 && <Length8000/>
           
          }


        </>
        {/* </Selection> */}

      </Stage>

    </Suspense>


  )


}
