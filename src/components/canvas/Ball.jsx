import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame, useLoader, extend } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { Decal, Float, Preload, OrbitControls, shaderMaterial } from '@react-three/drei';
import CanvasLoader from '../Loader';
import { vertexShader, fragmentShader } from '../../shaders';
import * as THREE from 'three';
// Create a custom shader material
const BallShaderMaterial = shaderMaterial(
  { uTexture: new THREE.Texture() },
  vertexShader,
  fragmentShader
);

// Extend the material so that it can be used in JSX
extend({ BallShaderMaterial });

const Ball = ({ iconTexture }) => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={0.5} />
      <mesh ref={meshRef} castShadow receiveShadow scale={2.75}>
        <sphereGeometry args={[1, 64, 64]} />
        
        <Decal
          position={[0, 0, 1]}
          rotation={[0, 0, 0]}
          scale={0.5}
          map={iconTexture}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const iconTexture = useLoader(TextureLoader, icon);

  return (
    <Canvas frameloop="demand" dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <Preload all />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball iconTexture={iconTexture} />
      </Suspense>
    </Canvas>
  );
};

export default BallCanvas;
