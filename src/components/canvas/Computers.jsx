import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

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
  const mobile = useGLTF("./developer/scene.gltf");

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

    
    mediaQuery.addEventListener("change", handleMediaQueryChange);

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
          maxPolarAngle={Math.PI }
          minPolarAngle={Math.PI / 2}
          autoRotate={true}
          enableRotate={false}
        />
        <Mobiles isMobile={true}/>
      </Suspense>
      <Preload all /> 
      </Canvas>):( 
    //   <Canvas frameloop="demand"
    //     shadows
    //     dpr={[1, 2]}
    //     camera={{ position: [20, 3, 5], fov: 25 }}
    //     gl={{ preserveDrawingBuffer: true }}> 
    //     <Suspense fallback={<CanvasLoader />}>
    //     <OrbitControls
    //       enableZoom={false}
    //       maxPolarAngle={Math.PI / 2 }
    //       minPolarAngle={Math.PI / 2}
        
    //     />
    //  <Computers isMobile={true}/>
    //   </Suspense>
    //   <Preload all /> 
    //   </Canvas>
       <></>
      )):( <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
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
