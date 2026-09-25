import { Brain, Folder, HomeIcon, Info, Mail } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const [activeTab, setActiveTab] = useState("home");
  // const [showMenu, setShowMenu] = useState(false);

  // const handleButtonToggle = () => {
  //   setShowMenu(!showMenu);
  // };

  return (
    <div className="header-container">
      {/* Navbar */}
      {/* <div className={showMenu ? "mobile-menu" : "web-menu"}> */}
      <div className="navbar">
        <ul>
          <li>
            <NavLink
              to="/#home"
              onClick={() => setActiveTab("home")}
              className={`group relative flex items-center justify-center ${
                activeTab === "home" ? "active-tab" : "inactive-tab"
              }`}
            >
              <HomeIcon />
              <span
                className="absolute top-11 left-1/2 -translate-x-1/2 
                 whitespace-nowrap rounded-md bg-[#11131c] px-2 py-1.5 
                 text-[10px] font-semibold text-[#c8d6ff] 
                 opacity-0 transition-opacity duration-200 
                 pointer-events-none group-hover:opacity-100 
                 outline-1 outline-gray-600 z-50"
              >
                Home
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/#about"
              onClick={() => setActiveTab("about")}
              className={`group relative flex items-center justify-center ${
                activeTab === "about" ? "active-tab" : "inactive-tab"
              }`}
            >
              <Info />
              <span
                className="absolute top-11 left-1/2 -translate-x-1/2 
                 whitespace-nowrap rounded-md bg-[#11131c] px-2 py-1.5 
                 text-[10px] font-semibold text-[#c8d6ff] 
                 opacity-0 transition-opacity duration-200 
                 pointer-events-none group-hover:opacity-100 
                 outline-1 outline-gray-600 z-50"
              >
                About
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/#skills"
              onClick={() => setActiveTab("skills")}
              className={`group relative flex items-center justify-center ${
                activeTab === "skills" ? "active-tab" : "inactive-tab"
              }`}
            >
              <Brain />
              <span
                className="absolute top-11 left-1/2 -translate-x-1/2 
                 whitespace-nowrap rounded-md bg-[#11131c] px-2 py-1.5 
                 text-[10px] font-semibold text-[#c8d6ff] 
                 opacity-0 transition-opacity duration-200 
                 pointer-events-none group-hover:opacity-100 
                 outline-1 outline-gray-600 z-50"
              >
                Skills
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/#projects"
              onClick={() => setActiveTab("projects")}
              className={`group relative flex items-center justify-center ${
                activeTab === "projects" ? "active-tab" : "inactive-tab"
              }`}
            >
              <Folder />
              <span
                className="absolute top-11 left-1/2 -translate-x-1/2 
                 whitespace-nowrap rounded-md bg-[#11131c] px-2 py-1.5 
                 text-[10px] font-semibold text-[#c8d6ff] 
                 opacity-0 transition-opacity duration-200 
                 pointer-events-none group-hover:opacity-100 
                 outline-1 outline-gray-600 z-50"
              >
                Projects
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/#contact"
              onClick={() => setActiveTab("contact")}
              className={`group relative flex items-center justify-center ${
                activeTab === "contact" ? "active-tab" : "inactive-tab"
              }`}
            >
              <Mail />
              <span
                className="absolute top-11 left-1/2 -translate-x-1/2 
                 whitespace-nowrap rounded-md bg-[#11131c] px-2 py-1.5 
                 text-[10px] font-semibold text-[#c8d6ff] 
                 opacity-0 transition-opacity duration-200 
                 pointer-events-none group-hover:opacity-100 
                 outline-1 outline-gray-600 z-50"
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
