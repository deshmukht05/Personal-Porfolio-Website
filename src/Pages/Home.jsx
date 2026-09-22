import { HeroSection } from "../UI/HeroSection";
import { About } from "./About";
import { Projects } from "./Projects";
import { Skills } from "./Skills";

export const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Skills />
      <Projects />
    </>
  );
};
