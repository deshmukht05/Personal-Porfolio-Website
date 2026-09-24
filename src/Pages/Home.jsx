import { HeroSection } from "../UI/HeroSection";
import { About } from "./About";
import { Contact } from "./Contact";
import { Projects } from "./Projects";
import { Skills } from "./Skills";

export const Home = () => {
  return (
    <>
      <section id="home"><HeroSection /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
    </>
  );
};
