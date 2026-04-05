import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const LINE_COUNT = 12;
const POINTS_PER_LINE = 200;

function FlowLines() {
  const groupRef = useRef<THREE.Group>(null!);
  const linesData = useMemo(() => {
    const c1 = new THREE.Color("#5b5ef4");
    const c2 = new THREE.Color("#00c6ff");
    return Array.from({ length: LINE_COUNT }, (_, i) => {
      const t = i / (LINE_COUNT - 1);
      const y = (t - 0.5) * 6;
      const freq = 0.3 + Math.random() * 0.7;
      const phase = Math.random() * Math.PI * 2;
      const amplitude = 0.3 + Math.random() * 0.5;
      const z = (Math.random() - 0.5) * 4;
      const opacity = 0.1 + (1 - Math.abs(z) / 2) * 0.3;
      const color = c1.clone().lerp(c2, t);
      return { y, freq, phase, amplitude, z, opacity, color };
    });
  }, []);

  const lineRefs = useRef<THREE.Line[]>([]);

  useFrame((state) => {
    const time = state.clock.elapsedTime * 0.4;
    lineRefs.current.forEach((line, i) => {
      if (!line) return;
      const d = linesData[i];
      const positions = line.geometry.attributes.position.array as Float32Array;
      for (let p = 0; p < POINTS_PER_LINE; p++) {
        const x = (p / (POINTS_PER_LINE - 1)) * 16 - 8;
        const y = d.y + Math.sin(x * d.freq + time + d.phase) * d.amplitude;
        positions[p * 3] = x;
        positions[p * 3 + 1] = y;
        positions[p * 3 + 2] = d.z;
      }
      line.geometry.attributes.position.needsUpdate = true;
    });
  });

  return (
    <group ref={groupRef}>
      {linesData.map((d, i) => {
        const positions = new Float32Array(POINTS_PER_LINE * 3);
        return (
          <line
            key={i}
            ref={(el: any) => { if (el) lineRefs.current[i] = el; }}
          >
            <bufferGeometry>
              <bufferAttribute attach="attributes-position" args={[positions, 3]} count={POINTS_PER_LINE} itemSize={3} />
            </bufferGeometry>
            <lineBasicMaterial color={d.color} transparent opacity={d.opacity} />
          </line>
        );
      })}
    </group>
  );
}

const ProcessFlowLines = () => (
  <div className="absolute inset-0 z-0 pointer-events-none">
    <Canvas camera={{ position: [0, 0, 5], fov: 55 }} dpr={[1, 1.5]} style={{ background: "transparent" }}>
      <FlowLines />
    </Canvas>
  </div>
);

export default ProcessFlowLines;
