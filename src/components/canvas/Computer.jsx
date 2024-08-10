import React from 'react';
import { useGLTF } from "@react-three/drei";

const Computers = () => {
  const { scene } = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
      <pointLight intensity={1} />
      <primitive object={scene} scale={0.72} position={[0, -3, -1.5]} rotation={[-0.01, -0.2, -0.1]} />
    </mesh>
  );
};

export default Computers;
