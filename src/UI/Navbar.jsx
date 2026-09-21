import {
  Brain,
  Briefcase,
  BriefcaseBusiness,
  Folder,
  HomeIcon,
  Mail,
} from "lucide-react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleButtonToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="header-container">
      {/* Navbar */}
      {/* <div className={showMenu ? "mobile-menu" : "web-menu"}> */}
      <div className="navbar">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `group relative flex items-center justify-center ${
                  isActive ? "active-tab" : "inactive-tab"
                }`
              }
            >
              <HomeIcon />
              <span
                className="absolute top-11 left-1/2 -translate-x-1/2 
                 whitespace-nowrap rounded-md bg-[#11131c] px-2 py-1.5 
                 text-[10px] font-semibold text-[#c8d6ff] 
                 opacity-0 transition-opacity duration-200 
                 pointer-events-none group-hover:opacity-100 
                 outline-1 outline-gray-600"
              >
                Home
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/experience"
              className={({ isActive }) =>
                `group relative flex items-center justify-center ${
                  isActive ? "active-tab" : "inactive-tab"
                }`
              }
            >
              <BriefcaseBusiness />
              <span
                className="absolute top-11 left-1/2 -translate-x-1/2 
                 whitespace-nowrap rounded-md bg-[#11131c] px-2 py-1.5 
                 text-[10px] font-semibold text-[#c8d6ff] 
                 opacity-0 transition-opacity duration-200 
                 pointer-events-none group-hover:opacity-100 
                 outline-1 outline-gray-600"
              >
                Experience
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                `group relative flex items-center justify-center ${
                  isActive ? "active-tab" : "inactive-tab"
                }`
              }
            >
              <Brain />
              <span
                className="absolute top-11 left-1/2 -translate-x-1/2 
                 whitespace-nowrap rounded-md bg-[#11131c] px-2 py-1.5 
                 text-[10px] font-semibold text-[#c8d6ff] 
                 opacity-0 transition-opacity duration-200 
                 pointer-events-none group-hover:opacity-100 
                 outline-1 outline-gray-600"
              >
                Skills
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `group relative flex items-center justify-center ${
                  isActive ? "active-tab" : "inactive-tab"
                }`
              }
            >
              <Folder />
              <span
                className="absolute top-11 left-1/2 -translate-x-1/2 
                 whitespace-nowrap rounded-md bg-[#11131c] px-2 py-1.5 
                 text-[10px] font-semibold text-[#c8d6ff] 
                 opacity-0 transition-opacity duration-200 
                 pointer-events-none group-hover:opacity-100 
                 outline-1 outline-gray-600"
              >
                Projects
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `group relative flex items-center justify-center ${
                  isActive ? "active-tab" : "inactive-tab"
                }`
              }
            >
              <Mail />
              <span
                className="absolute top-11 left-1/2 -translate-x-1/2 
                 whitespace-nowrap rounded-md bg-[#11131c] px-2 py-1.5 
                 text-[10px] font-semibold text-[#c8d6ff] 
                 opacity-0 transition-opacity duration-200 
                 pointer-events-none group-hover:opacity-100 
                 outline-1 outline-gray-600"
              >
                Contact
              </span>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Ham Menu */}
      {/* <div className="ham-menu">
        <button onClick={handleButtonToggle}>
          <GiHamburgerMenu className="icon" />
        </button>
      </div> */}
    </div>
  );
};
