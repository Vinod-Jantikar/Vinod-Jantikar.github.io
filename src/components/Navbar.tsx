"use client"
import Link from "next/link"
import { useState } from "react";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-slate-900 shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo / Name */}
                    <Link href="/" className="text-2xl font-bold text-sky-400">
                        Vinod Jantikar
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6 text-slate-50">
                        <Link href="#about" className="hover:text-sky-400 transition">About</Link>
                        <Link href="#projects" className="hover:text-sky-400 transition">Projects</Link>
                        <Link href="#skills" className="hover:text-sky-400 transition">Skills</Link>
                        <Link href="#skills" className="hover:text-sky-400 transition">Skills</Link>
                        <Link href="#contact" className="hover:text-sky-400 transition">Contact</Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-50 hover:text-sky-400 focus:outline-none"
                        >
                            {isOpen ? "✖" : "☰"}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden bg-slate-800 px-4 pb-4 space-y-2 shadow-md text-slate-50">
                    <Link href="#about" className="block hover:text-sky-400">About</Link>
                    <Link href="#projects" className="block hover:text-sky-400">Projects</Link>
                    <Link href="#skills" className="block hover:text-sky-400">Skills</Link>
                    <Link href="#contact" className="block hover:text-sky-400">Contact</Link>
                </div>
            )}
        </nav>
    )
}

export default Navbar
