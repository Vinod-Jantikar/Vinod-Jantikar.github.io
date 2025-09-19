"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

const Contact = () => {
    return (
        <section
            id="contact"
            className="w-full min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black py-20 px-6 flex items-center justify-center text-white"
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
                viewport={{ once: true }}
                className="max-w-4xl w-full text-center"
            >
                <motion.h1
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text mb-12"
                >
                    Get in Touch
                </motion.h1>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} scale={1.05} transitionSpeed={1000}>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/60 via-gray-700/40 to-gray-900/40 
                         border border-gray-600 shadow-lg hover:shadow-indigo-500/30 transition-all flex flex-col items-center gap-3"
                        >
                            <FaPhone className="text-3xl text-indigo-400" />
                            <h3 className="text-lg font-semibold">Phone</h3>
                            <a href="tel:+919483977282" className="text-gray-300 hover:text-indigo-400">
                                +91 9483977282
                            </a>
                        </motion.div>
                    </Tilt>

                    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} scale={1.05} transitionSpeed={1000}>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/60 via-gray-700/40 to-gray-900/40 
                         border border-gray-600 shadow-lg hover:shadow-indigo-500/30 transition-all flex flex-col items-center gap-3"
                        >
                            <FaEnvelope className="text-3xl text-purple-400" />
                            <h3 className="text-lg font-semibold">Email</h3>
                            <a href="mailto:vinodjantikar999@gmail.com" className="text-gray-300 hover:text-purple-400">
                                vinodjantikar999@gmail.com
                            </a>
                        </motion.div>
                    </Tilt>

                    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} scale={1.05} transitionSpeed={1000}>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/60 via-gray-700/40 to-gray-900/40 
                         border border-gray-600 shadow-lg hover:shadow-indigo-500/30 transition-all flex flex-col items-center gap-3"
                        >
                            <FaLinkedin className="text-3xl text-blue-400" />
                            <h3 className="text-lg font-semibold">LinkedIn</h3>
                            <a
                                href="https://www.linkedin.com/in/vinod-jantikar/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-blue-400"
                            >
                                https://www.linkedin.com/in/vinod-jantikar/
                            </a>
                        </motion.div>
                    </Tilt>

                    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} scale={1.05} transitionSpeed={1000}>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/60 via-gray-700/40 to-gray-900/40 
                         border border-gray-600 shadow-lg hover:shadow-indigo-500/30 transition-all flex flex-col items-center gap-3"
                        >
                            <FaGithub className="text-3xl text-gray-300" />
                            <h3 className="text-lg font-semibold">GitHub</h3>
                            <a
                                href="https://github.com/Vinod-Jantikar"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white"
                            >
                                https://github.com/Vinod-Jantikar
                            </a>
                        </motion.div>
                    </Tilt>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
