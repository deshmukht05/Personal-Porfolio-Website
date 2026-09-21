import { Download } from "lucide-react";
import { CgCodeSlash } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { OrbitBackground } from "./OrbitBackground";

export const HeroSection = () => {
  return (
    <OrbitBackground>
      <div className="container">
        <div className="hero-section">
          {/* <div className="bg-circle" /> */}

          {/* Available Online */}
          <div className="available-online">
            <div className="relative">
              <div className="green-dot"></div>
              <div className="ripple-ring"></div>
            </div>
            <span className="available-text">Available for Work</span>
          </div>

          {/* Heading */}
          <div className="flex flex-col gap-2 md:gap-6">
            <p className="heading">
              <span className="hero-span1">Hello, I'm</span>
              <br />
              <span className="hero-span2">Tushar</span>
              <span className="hero-span3"> Deshmukh</span>
            </p>

            {/* Description */}
            <div>
              <p className="hero-desciption">
                React Developer building responsive, user-centric web apps.
                <br />
                Tailwind • Figma • APIs • Vercel/Netlify. Django/MySQL-aware.
                Clean code, Agile team player.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 md:gap-6 items-center">
            <div className="cursor-pointer">
              <NavLink to="/" className="outline-btn">
                <CgCodeSlash className="hero-icon" />
                <span>View Projects</span>
              </NavLink>
            </div>
            <div className="cursor-pointer">
              <NavLink to="/" className="outline-btn">
                <MdEmail className="hero-icon" />
                <span>Contact Me</span>
              </NavLink>
            </div>
            <div className="cursor-pointer">
              <NavLink to="/" className="primary-btn">
                <Download className="hero-resume-icon text-[#090a0f]" />
                <span className="text-[#090a0f]">Resume</span>
              </NavLink>
            </div>
          </div>

          {/* Wrapper */}
          <div className="hero-num-wrapper">
            <div className="num-wrapper">
              <h1 className="hero-num">1+</h1>
              <p className="hero-num-desc">Year Experience</p>
            </div>
            <div className="num-wrapper">
              <h1 className="hero-num">4+</h1>
              <p className="hero-num-desc">Projects Built</p>
            </div>
            <div className="num-wrapper">
              <h1 className="hero-num">100%</h1>
              <p className="hero-num-desc">Commitment</p>
            </div>
          </div>
        </div>
      </div>
    </OrbitBackground>
  );
};
