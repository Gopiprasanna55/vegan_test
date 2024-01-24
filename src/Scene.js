import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useGlobalcontext } from './context';
import { useLoader } from 'react-three-fiber';
import { MTLLoader, OBJLoader } from 'three-stdlib'
import * as THREE from 'three'
export const Scene = (props) => {
  const { obj, mtl, position, rotation, hexcolor, name } = props;
  const ref = useRef();
  const cloneref = useRef();
  const { setObjdata, showall, objdata, selection, setInletuuids, inletuuids, setOutletuuids, outletuuids } = useGlobalcontext();
  const materials = useLoader(MTLLoader, mtl);
  const objModal = useLoader(OBJLoader, obj, (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });
  const clonedObj = useMemo(() => {
    const cloned = objModal.clone();
    cloned.traverse((node) => {
      if (node.isMesh) {
        const material = new THREE.MeshStandardMaterial({
          color: hexcolor,
          roughness: 0.3,
          metalness: 0.4,
        });
        node.material = material;
      }
    });
   
    return cloned;
  }, [objModal, selection, hexcolor]);

  useEffect(() => {
    clonedObj.visible = true
  }, [showall])
  const onClickSelection = (event) => {
    event.stopPropagation()
    clonedObj.traverse((node) => {
      if (node.isMesh) {
        const material = new THREE.MeshStandardMaterial({
          color: "#ADD8E6",
          roughness: 0.3,
          metalness: 0.4,
        });
        node.material = material;
      }
    });
    if (clonedObj.visible == true) {
      setObjdata([
        ...objdata,
        clonedObj
      ]);
      if (name == "inletqty") {
        setInletuuids([
          ...inletuuids,
          clonedObj.uuid
        ])
      }
      if (name == "outletqty") {
        setOutletuuids([
          ...outletuuids,
          clonedObj.uuid
        ])
      }

    }
  };
  return (
    <mesh
      ref={ref}
      position={position}
      rotation={rotation}
      onClick={onClickSelection}
    >
      <primitive ref={cloneref} object={clonedObj} scale={1} />
    </mesh>
  );
}

