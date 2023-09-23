import { Suspense } from "react";
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import CanvasLoader from "../Loader";
import { useState, useEffect } from 'react';

const Ball = (props) => {
  
  const [decal] = useTexture([props.imgUrl])
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial 
          color='#ffffff' 
          polygonOffset
          polygonOffsetUnits={-5}
          flatShading/>
        <Decal 
          map={decal}
          flatShading
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}/>
      </mesh>
    </Float>
  ) 
}

const BallCanvas = ({ icon }) => {
  const [isInViewport, setIsInViewport] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('ball')
      if (!element) return

      const rect = element.getBoundingClientRect()

      // check if element is in the viewport
      const inViewport = (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= window.innerHeight &&
        rect.right <= window.innerWidth
      )
      setIsInViewport(inViewport)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // initial check

    // clean up the event listener and unmount the component
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

  }, [])


  return (
    <>
    {isInViewport && (
    <Canvas id={'ball'}
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}/>
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas> 
    )}
    </>
  )
}

export default BallCanvas