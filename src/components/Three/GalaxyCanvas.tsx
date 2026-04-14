"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, PerspectiveCamera } from "@react-three/drei";
import { useRef, useMemo, useEffect } from "react";
import * as THREE from "three";

function SpiderWeb() {
    const count = 40;
    const linesRef = useRef<THREE.Group>(null);
    const mouse = useRef({ x: 0, y: 0 });

    const points = useMemo(() => {
        const p = [];
        for (let i = 0; i < count; i++) {
            p.push(new THREE.Vector3(
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 10
            ));
        }
        return p;
    }, []);

    const lineGeometry = useMemo(() => {
        const geo = new THREE.BufferGeometry();
        const positions = new Float32Array(count * count * 6);
        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        return geo;
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
            mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const timer = useMemo(() => new THREE.Timer(), []);

    useFrame((state) => {
        if (!linesRef.current) return;

        timer.update();
        const time = timer.getElapsed();
        points.forEach((p, i) => {
            p.x += Math.sin(time + i) * 0.002;
            p.y += Math.cos(time + i) * 0.002;
        });

        const positions = lineGeometry.attributes.position.array as Float32Array;
        let index = 0;

        for (let i = 0; i < count; i++) {
            for (let j = i + 1; j < count; j++) {
                const dist = points[i].distanceTo(points[j]);
                const mouseDist = points[i].distanceTo(new THREE.Vector3(mouse.current.x * 10, mouse.current.y * 10, 0));

                if (dist < 3 || (mouseDist < 2 && dist < 5)) {
                    positions[index++] = points[i].x;
                    positions[index++] = points[i].y;
                    positions[index++] = points[i].z;
                    positions[index++] = points[j].x;
                    positions[index++] = points[j].y;
                    positions[index++] = points[j].z;
                } else {
                    positions[index++] = 0; positions[index++] = 0; positions[index++] = 0;
                    positions[index++] = 0; positions[index++] = 0; positions[index++] = 0;
                }
            }
        }
        lineGeometry.attributes.position.needsUpdate = true;
    });

    return (
        <group ref={linesRef}>
            <lineSegments geometry={lineGeometry}>
                <lineBasicMaterial color="#3b82f6" transparent opacity={0.2} />
            </lineSegments>
            {points.map((p, i) => (
                <mesh key={i} position={p}>
                    <sphereGeometry args={[0.02, 8, 8]} />
                    <meshBasicMaterial color="#d4af37" />
                </mesh>
            ))}
        </group>
    );
}

export default function GalaxyCanvas() {
    return (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1, pointerEvents: "none" }}>
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 10]} />
                <ambientLight intensity={0.5} />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                <SpiderWeb />
                <Float speed={2} rotationIntensity={1} floatIntensity={2}>
                    <mesh position={[5, 2, -5]}>
                        <octahedronGeometry args={[0.5, 0]} />
                        <meshStandardMaterial color="#d4af37" emissive="#d4af37" emissiveIntensity={2} />
                    </mesh>
                </Float>
            </Canvas>
        </div>
    );
}
