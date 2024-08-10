import React, { useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import Loader from "../Loader.jsx";
import Mobiles from './Mobile.jsx';
import Computers from './Computer.jsx';

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 800px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange, { passive: true });

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className="w-full h-auto absolute inset-0 z-[0]">
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<Loader />}>
          <OrbitControls enableZoom={false} autoRotate={isMobile} enableRotate={!isMobile}/>
          {isMobile ? <Mobiles /> : <Computers />}
        </Suspense>
        <Preload all />
      </Canvas>
      <div className="absolute inset-0 z-[1] bg-transparent" style={{ pointerEvents: 'none' }}></div>
    </div>
  );
};
<style>
  
</style>

export default ComputersCanvas;
