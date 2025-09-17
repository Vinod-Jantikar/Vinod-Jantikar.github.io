'use client';

import React, { FC, Suspense, useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import {
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaNodeJs,
    FaBootstrap,
    FaDatabase,
    FaEnvelope,
    FaMoneyBillWave,
    FaBell,
    FaGithub,
    FaGitAlt
} from 'react-icons/fa';
import { SiRedux, SiJavascript, SiExpress, SiMongodb, SiMui, SiTypescript, SiPostman, SiNextdotjs, SiSocketdotio, SiRedis, SiJsonwebtokens } from 'react-icons/si';
import { VscDebugRestart } from 'react-icons/vsc';

type Skill = { name: string; icon: React.ReactNode };

interface SkillCardProps {
    title: string;
    skills: Skill[];
    position?: [number, number, number];
}

const SkillCard: FC<SkillCardProps> = ({ title, skills, position = [0, 0, 0] }) => {
    const ref = useRef<THREE.Group | null>(null);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        const s = typeof window !== 'undefined' ? window.scrollY / window.innerHeight : 0;
        if (!ref.current) return;
        ref.current.rotation.y = Math.sin(t / 1.5) * 0.12 + s * 0.08;
        ref.current.position.y = Math.sin(t) * 0.15;
    });

    return (
        <group position={position} ref={ref} scale={[4, 4, 4]}>
            <mesh>
                {/* bigger plane to host the card */}
                <planeGeometry args={[6, 4]} />
                <meshBasicMaterial transparent opacity={0} />
            </mesh>

            <Html center distanceFactor={1.2} transform>
                <div className="w-96 bg-gradient-to-br from-gray-900/90 to-gray-800/70 backdrop-blur-md border border-gray-700 rounded-2xl p-8 shadow-2xl">
                    <h2 className="text-3xl font-bold text-indigo-300 mb-6 text-center">{title}</h2>
                    <div className="grid grid-cols-2 gap-6">
                        {skills.map((skill, i) => (
                            <div key={i} className="flex flex-col items-center gap-3 text-gray-200">
                                <div className="text-4xl">{skill.icon}</div>
                                <span className="text-base text-center">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Html>
        </group>
    );
};


export default function SkillsCanvas() {
    const categories: { title: string; skills: Skill[] }[] = [
        {
            title: 'Frontend Skills',
            skills: [
                { name: 'React', icon: <FaReact className="text-cyan-400" /> },
                { name: 'Redux', icon: <SiRedux className="text-purple-400" /> },
                { name: 'Redux Toolkit', icon: <SiRedux className="text-indigo-400" /> },
                { name: 'Next JS', icon: <SiNextdotjs className="text-white" /> },
                { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
                { name: 'TypeScript', icon: <SiTypescript className="text-blue-400" /> },
                { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
                { name: 'CSS', icon: <FaCss3Alt className="text-blue-400" /> },
                { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-500" /> },
                { name: 'Material UI', icon: <SiMui className="text-blue-500" /> },
            ],
        },
        {
            title: 'Backend Skills',
            skills: [
                { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
                { name: 'Express', icon: <SiExpress className="text-gray-300" /> },
                { name: 'MongoDB', icon: <SiMongodb className="text-green-400" /> },
                { name: 'Mongoose', icon: <FaDatabase className="text-amber-400" /> },
                { name: 'Nodemailer', icon: <FaEnvelope className="text-emerald-400" /> },
                { name: 'Razorpay', icon: <FaMoneyBillWave className="text-indigo-400" /> },
                { name: 'OneSignal', icon: <FaBell className="text-red-500" /> },
                { name: 'Socket io', icon: <SiSocketdotio className="text-white" /> },
                { name: 'Redis', icon: <SiRedis className="text-red-400" /> },
                { name: 'Cron', icon: <VscDebugRestart className="text-blue-400" /> },
                { name: 'JWT', icon: <SiJsonwebtokens className="text-green-500" /> },
            ],
        },
        {
            title: 'Other Services',
            skills: [
                { name: 'Git', icon: <FaGitAlt className="text-gray-300" /> },
                { name: 'GitHub', icon: <FaGithub className="text-gray-300" /> },
                { name: 'REST APIs', icon: <FaDatabase className="text-green-300" /> },
                { name: 'POSTMAN', icon: <SiPostman className="text-orange-500" /> },
                { name: 'Agile / Teamwork', icon: <span className="text-pink-400">🤝</span> },
            ],
        },
    ];

    const positions: [number, number, number][] = [
        [-6, 0, 0],
        [0, 0, 0],
        [6, 0, 0],
    ];

    return (
        <section className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center px-4 py-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
                My <span className="text-indigo-400">Skills</span>
            </h1>

            {/* Full width 3D Canvas for desktop/tablet */}
            <div className="hidden md:block w-full h-[600px]">
                <Canvas camera={{ position: [0, 0, 8], fov: 55 }}>
                    <ambientLight intensity={0.6} />
                    <directionalLight position={[5, 5, 5]} intensity={0.8} />
                    <Suspense fallback={null}>
                        <OrbitControls enablePan={false} enableZoom={false} />
                        {categories.map((cat, i) => (
                            <SkillCard
                                key={cat.title}
                                title={cat.title}
                                skills={cat.skills}
                                position={positions[i]}
                            />
                        ))}
                    </Suspense>
                </Canvas>
            </div>

            {/* Mobile fallback */}
            <div className="md:hidden w-full max-w-2xl space-y-6">
                {categories.map((cat) => (
                    <div
                        key={cat.title}
                        className="bg-gray-900/80 backdrop-blur-md border border-gray-700 rounded-2xl p-5 shadow"
                    >
                        <h2 className="text-xl font-semibold text-indigo-300 mb-3">{cat.title}</h2>
                        <div className="grid grid-cols-3 gap-3">
                            {cat.skills.map((s) => (
                                <div
                                    key={s.name}
                                    className="flex flex-col items-center text-gray-200 gap-1"
                                >
                                    <div className="text-2xl">{s.icon}</div>
                                    <span className="text-xs text-center">{s.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <p className="text-gray-400 text-sm mt-8 text-center px-4">
                Tip: drag (or touch) the cards to explore — on mobile the component renders an
                accessible list.
            </p>
        </section>
    );
}
