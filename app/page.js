import Hero from "./components/Hero";
import SkillRadar from "./components/SkillRadar";
import ProjectsLab from "./components/ProjectsLab";
import Experience from "./components/Experience";
import TechConsole from "./components/TechConsole";
import Contact from "./components/Contact";

import ThemeSwitcher from "./components/ThemeSwitcher";

export default function Home() {
  return (
    <main style={{ maxWidth: "1200px", margin: "0 auto", overflow: "hidden" }}>
      <Hero />
      <SkillRadar />
      <ProjectsLab />
      <Experience />
      <TechConsole />
      <Contact />
      <ThemeSwitcher />
    </main>
  );
}
