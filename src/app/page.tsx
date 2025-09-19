import AboutMe from "@/components/AboutMe";
import HeroHeading from "@/components/HeroHeading";
import Profile3D from "@/components/Profile3D";
import Projects from "@/components/Projects";
import SkillsCanvas from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <HeroHeading />
      <p className="text-base sm:text-lg md:text-xl mb-8 text-center max-w-xl">
        Full Stack Web Developer | Specialized in MERN & Modern Web Stacks
      </p>
      <Profile3D />
      <AboutMe />
      <SkillsCanvas />
      <Projects />
    </main>
  );
}
