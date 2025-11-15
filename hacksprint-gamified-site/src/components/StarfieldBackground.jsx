import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

// Rotating stars component using drei
const RotatingStars = () => {
  const starsRef = useRef();
  
  useFrame((state, delta) => {
    if (starsRef.current) {
      starsRef.current.rotation.x += delta * 0.05;
      starsRef.current.rotation.y += delta * 0.02;
    }
  });
  
  return (
    <Stars
      ref={starsRef}
      radius={100}
      depth={50}
      count={5000}
      factor={4}
      saturation={0}
      fade={true}
      speed={1}
    />
  );
};

// Custom twinkling star particles
const TwinklingStars = () => {
  const particlesRef = useRef();
  
  useFrame((state) => {
    if (particlesRef.current) {
      const time = state.clock.getElapsedTime();
      const positions = particlesRef.current.geometry.attributes.position;
      
      // Subtle twinkling effect
      for (let i = 0; i < positions.count; i++) {
        const i3 = i * 3;
        positions.array[i3 + 1] += Math.sin(time + i) * 0.01;
      }
      positions.needsUpdate = true;
    }
  });
  
  // Generate random star positions
  const particlesCount = 1000;
  const positions = new Float32Array(particlesCount * 3);
  
  for (let i = 0; i < particlesCount; i++) {
    const i3 = i * 3;
    positions[i3] = (Math.random() - 0.5) * 200;
    positions[i3 + 1] = (Math.random() - 0.5) * 200;
    positions[i3 + 2] = (Math.random() - 0.5) * 200;
  }
  
  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.5}
        color="#ffffff"
        transparent={true}
        opacity={0.8}
        sizeAttenuation={true}
      />
    </points>
  );
};

const StarfieldBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 1], fov: 75 }}
        className="w-full h-full"
      >
        <color attach="background" args={['#000000']} />
        <RotatingStars />
        <TwinklingStars />
      </Canvas>
    </div>
  );
};

export default StarfieldBackground;
