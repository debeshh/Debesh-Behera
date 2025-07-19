import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useMotionValue, useSpring } from "motion/react";
import { useFrame } from "@react-three/fiber";
import { MeshStandardMaterial } from "three";

export function Spider(props) {
  const group = useRef();
  const { nodes } = useGLTF("/models/spiderman_logo.glb"); // Still using Spider-Man model name
  const yPosition = useMotionValue(5);
  const ySpring = useSpring(yPosition, { damping: 30 });

  useEffect(() => {
    ySpring.set(-1);
  }, [ySpring]);

  useFrame(() => {
    group.current.position.y = ySpring.get();
  });

  return (
    <>
      {/* Lighting to make model visible */}
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />

      <group
        ref={group}
        {...props}
        dispose={null}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={props.scale || 0.4} // Bigger size
        position={props.position || [0.9, 4, 1]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_0.geometry}
          rotation={[Math.PI / 2, 0, 0]}
        >
          {/* Hulk Colors: green body + purple tint */}
          <meshStandardMaterial
            color={"brown"} // Hulk green
            roughness={0.5}
            metalness={0.1}
          />
        </mesh>
      </group>
    </>
  );
}

useGLTF.preload("/models/spiderman_logo.glb");