"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import {
    Float,
    OrbitControls,
    Stars,
    Html,
    Effects,
} from "@react-three/drei";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projectData } from "@/data/ProjectData";
import { motion } from "framer-motion";

const ProjectPreview3D = () => {
    return (
        <Canvas className="absolute inset-0">
            {/* Lights */}
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1.2} />
            <pointLight position={[-5, -5, -5]} intensity={0.8} />

            {/* Background Stars */}
            <Stars radius={80} depth={30} count={3000} factor={4} fade />

            {/* Floating Glassy Shape */}
            {/* <Float speed={2.5} rotationIntensity={1.8} floatIntensity={2}>
                <mesh>
                    <boxGeometry args={[2.8, 1.8, 0.4]} />
                    <meshStandardMaterial
                        color="#6366f1"
                        metalness={0.9}
                        roughness={0.15}
                        transparent
                        opacity={0.8}
                        emissive="#818cf8"
                        emissiveIntensity={0.4}
                    />
                </mesh>
            </Float> */}

            {/* Controls */}
            <OrbitControls
                enableZoom={false}
                autoRotate
                autoRotateSpeed={2}
                enablePan={false}
            />
        </Canvas>
    );
};

const ProjectCard = ({ project }: { project: any }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="relative rounded-2xl overflow-hidden border border-gray-700 
                       bg-gradient-to-br from-gray-900/70 via-gray-800/50 to-gray-900/30 
                       backdrop-blur-xl shadow-lg hover:shadow-indigo-500/40 transition-all duration-300"
        >
            {/* 3D Background */}
            <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden">
                <ProjectPreview3D />

                {/* Overlay Project Image */}
                <img
                    src={project.imgUrl}
                    alt={project.projectName}
                    className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-overlay rounded-t-2xl"
                />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-grow">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text mb-2">
                    {project.projectName}
                </h2>
                <p className="text-sm sm:text-base text-gray-300 flex-grow leading-relaxed">
                    {project.summary}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-3">
                    {project.techStacks.map((tech: string, i: number) => (
                        <span
                            key={i}
                            className="px-3 py-1 text-xs sm:text-sm rounded-full 
                                       bg-gradient-to-r from-indigo-600/80 to-purple-600/80 
                                       border border-indigo-500/40 text-white shadow-sm"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-4">
                    {project.githubLink && (
                        <a
                            href={project.githubLink}
                            target="_blank"
                            className="flex items-center gap-2 px-3 py-1.5 rounded-lg 
                                       bg-gray-800/60 border border-gray-600 text-gray-300 
                                       hover:bg-gray-700/80 hover:text-white transition-colors"
                        >
                            <FaGithub /> Code
                        </a>
                    )}
                    {project.deployedLink && (
                        <a
                            href={project.deployedLink}
                            target="_blank"
                            className="flex items-center gap-2 px-3 py-1.5 rounded-lg 
                                       bg-indigo-600/80 border border-indigo-500 text-white 
                                       hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/30 transition"
                        >
                            <FaExternalLinkAlt /> Live
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const Projects: React.FC = () => {
    return (
        <section
            id="projects"
            className="w-full min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black 
                       py-16 px-4 sm:px-6 lg:px-12 text-white"
        >
            <div className="max-w-7xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center 
                               bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text 
                               mb-14 drop-shadow-lg"
                >
                    My Projects
                </motion.h1>

                {/* Responsive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projectData.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
