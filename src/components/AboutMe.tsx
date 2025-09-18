"use client"

import { Float, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Typewriter } from "react-simple-typewriter";

const AboutMe: React.FC = () => {
    return (
        <div className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
            {/* 3D Background */}
            <Canvas className="absolute inset-0">
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1.2} />
                <Float speed={2} rotationIntensity={2} floatIntensity={2}>
                    <mesh>
                        <icosahedronGeometry args={[2, 1]} />
                        <meshStandardMaterial
                            color="#6366f1"
                            roughness={0.3}
                            metalness={0.7}
                            wireframe
                        />
                    </mesh>
                </Float>
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
            </Canvas>

            {/* Content Card */}
            <div className="relative z-10 max-w-3xl mx-auto p-8 bg-black/50 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-700">
                <h1 className="text-4xl font-bold mb-4 text-indigo-400">
                    <Typewriter
                        words={["About Me", "Full-Stack Developer", "MERN Enthusiast"]}
                        loop={true}
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={40}
                        delaySpeed={1500}
                    />
                </h1>
                <p className="text-lg leading-relaxed text-gray-200">
                    I am a <span className="text-indigo-400 font-semibold">Full-Stack Developer</span>
                    with over 3+ years of hands-on experience specializing in the{" "}
                    <span className="text-indigo-400 font-semibold">MERN stack</span>.
                    Based in <span className="italic">Bidar, Karnataka, India</span>,
                    I thrive on building scalable and user-focused web applications.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-gray-200">
                    My expertise spans{" "}
                    <span className="font-semibold">MongoDB, Express.js, React, and Node.js</span>,
                    covering both front-end and back-end development. I have a strong
                    foundation in designing <span className="font-semibold">RESTful APIs</span>
                    and crafting responsive, intuitive user interfaces.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-gray-200">
                    Driven by <span className="font-semibold">curiosity</span> and
                    <span className="font-semibold"> self-motivation</span>, I am
                    committed to continuous learning and professional growth. I’m eager
                    to contribute to a dynamic team, developing impactful digital
                    solutions while advancing my journey in web development.
                </p>
            </div>
        </div>
    );
};


export default AboutMe
