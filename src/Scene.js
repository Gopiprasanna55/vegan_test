import React, { useEffect, useMemo, useRef, useState, Suspense } from 'react'
import { useGlobalcontext } from './context';
import { useLoader } from 'react-three-fiber';
import { MTLLoader, OBJLoader } from 'three-stdlib'
import * as THREE from 'three'

const SceneLoading = ({ instanceId }) => {
  const { addLoadingId, removeLoadingId } = useGlobalcontext();

  useEffect(() => {
    addLoadingId(instanceId);
    return () => {
      removeLoadingId(instanceId);
    };
  }, [instanceId, addLoadingId, removeLoadingId]);

  return null;
};

const SceneInner = (props) => {
  const { obj, mtl, position, rotation, hexcolor, name } = props;
  const ref = useRef();
  const cloneref = useRef();
  const { setObjdata, showall, objdata, setInletuuids, inletuuids, setOutletuuids, outletuuids, material } = useGlobalcontext();
  const materials = useLoader(MTLLoader, mtl);
  const objModal = useLoader(OBJLoader, obj, (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });
  const clonedObj = useMemo(() => {
    const cloned = objModal.clone();
    cloned.traverse((node) => {
      if (node.isMesh) {
        node.userData.isConveyorMesh = true;
        node.castShadow = true;
        node.receiveShadow = true;
        const roughness = material === "Carbon Steel" ? 0.45 : 0.22;
        const metalness = material === "Carbon Steel" ? 0.75 : 0.90;
        
        let nodeColor = hexcolor;
        if (material === "Stainless Steel") {
          nodeColor = new THREE.Color(hexcolor).lerp(new THREE.Color(0.85, 0.88, 0.92), 0.2);
        }

        const standardMat = new THREE.MeshStandardMaterial({
          color: nodeColor,
          roughness: roughness,
          metalness: metalness,
        });
        node.material = standardMat;
      }
    });
    return cloned;
  }, [objModal, hexcolor, material]);

  useEffect(() => {
    clonedObj.visible = true
  }, [showall, clonedObj])

  const onClickSelection = (event) => {
    event.stopPropagation()
    if (clonedObj.visible === true) {
      setObjdata([
        ...objdata,
        clonedObj
      ]);
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
      if (name === "inletqty") {
        setInletuuids([
          ...inletuuids,
          clonedObj.uuid
        ])
      }
      if (name === "outletqty") {
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

export const Scene = (props) => {
  const [instanceId] = useState(() => Math.random().toString(36).substring(2, 9));

  return (
    <Suspense fallback={<SceneLoading instanceId={instanceId} />}>
      <SceneInner {...props} />
    </Suspense>
  );
};
