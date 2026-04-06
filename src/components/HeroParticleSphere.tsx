import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const mouse = new THREE.Vector2(0, 0);
const PARTICLE_COUNT_DESKTOP = 1200;
const PARTICLE_COUNT_MOBILE = 600;

function Sphere({ count }: { count: number }) {
  const ref = useRef<THREE.Points>(null!);
  const { basePositions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const c1 = new THREE.Color("#00c6ff");
    const c2 = new THREE.Color("#5b5ef4");
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;
      const r = 2.2;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
      const mix = Math.random();
      const c = c1.clone().lerp(c2, mix);
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return { basePositions: pos, colors: col };
  }, [count]);

  const currentPos = useMemo(() => new Float32Array(basePositions), [basePositions]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.003 * 60;

    const arr = ref.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      const bx = basePositions[i * 3];
      const by = basePositions[i * 3 + 1];
      const bz = basePositions[i * 3 + 2];
      // Project to screen-ish coords for mouse repulsion
      const dx = bx - mouse.x * 3;
      const dy = by - mouse.y * 3;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const repulse = dist < 1.5 ? (1.5 - dist) * 0.15 : 0;
      const nx = dx / (dist || 1);
      const ny = dy / (dist || 1);
      arr[i * 3] = bx + nx * repulse;
      arr[i * 3 + 1] = by + ny * repulse;
      arr[i * 3 + 2] = bz;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref} position={[1.5, 0, 0]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[currentPos, 3]} count={count} itemSize={3} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} count={count} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.02} vertexColors transparent opacity={0.85} sizeAttenuation />
    </points>
  );
}

function SceneContent({ count }: { count: number }) {
  const { gl } = useThree();
  useEffect(() => {
    const el = gl.domElement;
    const handler = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    el.addEventListener("mousemove", handler);
    return () => el.removeEventListener("mousemove", handler);
  }, [gl]);

  return <Sphere count={count} />;
}

const HeroParticleSphere = ({ isMobile }: { isMobile: boolean }) => {
  const count = isMobile ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT_DESKTOP;
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 55 }}
        dpr={[1, 1.5]}
        style={{ background: "transparent", pointerEvents: "auto" }}
      >
        <SceneContent count={count} />
      </Canvas>
    </div>
  );
};

export default HeroParticleSphere;
