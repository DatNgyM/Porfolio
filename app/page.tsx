import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import SkillsAnime from "@/components/sections/SkillsAnime";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import GradientBackground from "@/components/background/GradientBackground";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <GradientBackground />
      <Navbar />
      <Hero />
      <SkillsAnime />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
