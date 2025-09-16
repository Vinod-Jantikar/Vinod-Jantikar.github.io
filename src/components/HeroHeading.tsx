"use client"

import { Typewriter } from "react-simple-typewriter"

const HeroHeading = () => {
    return (
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center">
            <Typewriter
                words={["Hi, I’m Vinod Jantikar 👋"]}
                loop={1} // type once
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={50}
                delaySpeed={1000}
            />
        </h1>
    )
}

export default HeroHeading
