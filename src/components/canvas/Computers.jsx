import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import StarsCanvas from "./Stars";

const TwinklingStars = () => {
  return (
    <div className="relative w-full h-full">
      {/* Five twinkling stars */}
      {[...Array(15)].map((_, index) => (
        <div
          key={index}
          className="absolute w-1 h-1 bg-white rounded-full animate-twinkling"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${Math.random() * 5 + 5}s`, 
          }}
        />
      ))}
    </div>
  );
}
const Computers = ({ isMobile }) => {
 const computer =useGLTF("./desktop_pc/scene.gltf", null, (err) => {
    if (err) console.error("Error loading computer model:", err);
  });

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.35 : 0.72}
        position={isMobile ? [-3.5, -2, -1.5] : [0, -3, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};
const Mobiles = ({isMobile}) => {
  const mobile = useGLTF("./developer/scene.gltf", null, (err) => {
    if (err) console.error("Error loading computer model:", err);
  });

  return (
    <mesh >
      <hemisphereLight intensity={0.15} />
      <spotLight
        position={[-10, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive 
        object={mobile.scene}
        scale={ [1.5, 1.5, 1.5]}
        position={ [0, -2, -0.2]}
        rotation={[-15, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    
    setIsMobile(mediaQuery.matches);

    
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    
    mediaQuery.addEventListener("change", handleMediaQueryChange, { passive: true });

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  function isIOS() {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(userAgent);
  }
  const renderIOS = isIOS();
  return (
    <>
      {isMobile ? ( renderIOS ? (
      <Canvas frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}> 
        <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          autoRotate={true}
          enableRotate={false}
        />
        <Mobiles isMobile={true}/>
      </Suspense>
      <Preload all /> 
      </Canvas>):( 
        <div className='w-full h-auto absolute inset-0 z-[0]'>
       <StarsCanvas/>
       </div>
  
       
      )):( <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}> 
      
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 4}
          />
          <Computers isMobile={false}/>
        </Suspense>
        <Preload all />
      </Canvas>)}
    </>
  );
};

export default ComputersCanvas;
