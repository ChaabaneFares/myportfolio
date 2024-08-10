import React from 'react';
import { useGLTF } from "@react-three/drei";

const Mobiles = () => {
  const { scene } = useGLTF("./developer/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.15} />
      <spotLight position={[-10, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
      <pointLight intensity={1} />
      <primitive object={scene} scale={[1, 1, 1]} position={[0, -2, -0.2]} rotation={[-15, -0.2, -0.1]} />
    </mesh>
  );
};

export default Mobiles;
