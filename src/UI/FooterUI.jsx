import { LuGithub } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { RiLinkedinLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

export const FooterUI = () => {
  const emailUrl =
    "https://mail.google.com/mail/?view=cm&fs=1&to=tushardeshmukh354@gmail.com";
  const githubUrl = "https://github.com/deshmukht05";
  const linkedinUrl = "https://www.linkedin.com/in/tushar-deshmukh-3511a0223/";

  return (
    <footer className="container">
      <div>
        <p className="copyright">© 2026 Tushar Deshmukh</p>
      </div>
      <div className="footer-right-side">
        <div className="footer-icons">
          <NavLink
            to={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center"
          >
            <LuGithub className="footer-ind-icon" />
            <span
              className="absolute bottom-8 left-1/2 -translate-x-1/2 
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
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center"
          >
            <RiLinkedinLine className="footer-ind-icon" />
            <span
              className="absolute bottom-8 left-1/2 -translate-x-1/2 
                 whitespace-nowrap rounded-md bg-[#11131c] px-2 py-1.5 
                 text-[10px] font-semibold text-[#c8d6ff] 
                 opacity-0 transition-opacity duration-200 
                 pointer-events-none group-hover:opacity-100 
                 outline-1 outline-gray-600 z-50"
            >
              LinkedIn
            </span>
          </NavLink>
          <NavLink
            to={emailUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center"
          >
            <MdOutlineEmail className="footer-ind-icon" />
            <span
              className="absolute bottom-8 left-1/2 -translate-x-1/2 
                 whitespace-nowrap rounded-md bg-[#11131c] px-2 py-1.5 
                 text-[10px] font-semibold text-[#c8d6ff] 
                 opacity-0 transition-opacity duration-200 
                 pointer-events-none group-hover:opacity-100 
                 outline-1 outline-gray-600 z-50"
            >
              Email
            </span>
          </NavLink>
        </div>
        <span className="text-gray-400">|</span>
        <div className="flex gap-1 md:gap-2">
          <p className="copyright">Developed and designed with care.</p>
        </div>
      </div>
    </footer>
  );
};
