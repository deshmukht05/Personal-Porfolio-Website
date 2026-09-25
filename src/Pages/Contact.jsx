import { NavLink } from "react-router-dom";
import { ContactForm } from "../UI/ContactForm";
import { SquareArrowOutUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Contact = () => {
  const emailUrl =
    "https://mail.google.com/mail/?view=cm&fs=1&to=tushardeshmukh354@gmail.com";
  const githubUrl = "https://github.com/deshmukht05";
  const linkedinUrl = "https://www.linkedin.com/in/tushar-deshmukh-3511a0223/";

  return (
    <div className="contact">
      <div className="container">
        <div className="contact-section">
          {/* Heading */}
          <div className="about-heading">
            <h1>- LET'S CONNECT</h1>
          </div>

          {/* Sub Heading */}
          <div className="contact-grid">
            <div className="flex flex-col gap-5">
              <p className="contact-span1">
                Let's make something{" "}
                <span className="skills-span1">remarkable.</span>
              </p>
              <p className="contact-description">
                Have a project, an idea, or a role you think we should talk
                about? My inbox is open.
              </p>

              {/* Email */}
              <NavLink
                to={emailUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-email group relative flex items-center justify-center"
              >
                <p className="contact-email-description">
                  tushardeshmukh354@gmail.com
                  <span
                    className="absolute top-8 left-1/2 -translate-x-1/2 
                 whitespace-nowrap rounded-md bg-[#11131c] px-2 py-1.5 
                 text-[10px] font-semibold text-[#c8d6ff] 
                 opacity-0 transition-opacity duration-200 
                 pointer-events-none group-hover:opacity-100 
                 outline-1 outline-gray-600 z-50"
                  >
                    tushardeshmukh354@gmail.com
                  </span>
                </p>
                <SquareArrowOutUpRight className="icon" />
              </NavLink>

              {/* Contact Icons */}
              <div className="flex gap-4">
                <NavLink
                  to={githubUrl}
                  className="group relative flex items-center justify-center"
                >
                  <FaGithub className="link-icon" />
                  <span
                    className="absolute top-8 left-1/2 -translate-x-1/2 
                 whitespace-nowrap rounded-md bg-[#11131c] px-2 py-1.5 
                 text-[10px] font-semibold text-[#c8d6ff] 
                 opacity-0 transition-opacity duration-200 
                 pointer-events-none group-hover:opacity-100 
                 outline-1 outline-gray-600 z-50"
                  >
                    GitHub
                  </span>
                </NavLink>
                <NavLink
                  to={linkedinUrl}
                  className="group relative flex items-center justify-center"
                >
                  <FaLinkedin className="link-icon" />
                  <span
                    className="absolute top-8 left-1/2 -translate-x-1/2 
                 whitespace-nowrap rounded-md bg-[#11131c] px-2 py-1.5 
                 text-[10px] font-semibold text-[#c8d6ff] 
                 opacity-0 transition-opacity duration-200 
                 pointer-events-none group-hover:opacity-100 
                 outline-1 outline-gray-600 z-50"
                  >
                    LinkedIn
                  </span>
                </NavLink>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};
