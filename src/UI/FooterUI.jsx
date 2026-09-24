import { CgCodeSlash, CgProfile } from "react-icons/cg";
import { MdOutlineEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";

export const FooterUI = () => {
  return (
    <footer className="container">
      <div>
        <p className="copyright">© 2026 Tushar Deshmukh</p>
      </div>
      <div className="footer-right-side">
        <div className="footer-icons">
          <NavLink to="/">
            <CgCodeSlash className="footer-ind-icon" />
          </NavLink>
          <NavLink to="/">
            <CgProfile className="footer-ind-icon" />
          </NavLink>
          <NavLink to="/">
            <MdOutlineEmail className="footer-ind-icon" />
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
