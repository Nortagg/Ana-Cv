import { Link, useLocation } from "react-router-dom";
import "./header.styles.scss";
import { GoMail } from "react-icons/go";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isAbout = location.pathname === "/about-page";
  const isContact = location.pathname === "/contact-page";

  const email = "aannccee.2001@gmail.com";

  return (
    <div className="header-container">
      <div className="mail-container">
        <span className="mail-svg">
          <GoMail />
        </span>
        <a className="mail-to" href={`mailto:${email}`}>
          aannccee.2001@gmail.com
        </a>
      </div>
      <div className="link-container">
        <Link className={`links ${isHome ? "links-active" : ""}`} to={"/"}>
          Home
        </Link>
        <span>/</span>
        <Link
          className={`links ${isAbout ? "links-active" : ""}`}
          to={"/about-page"}
        >
          About
        </Link>
        <span>/</span>
        <Link
          className={`links ${isContact ? "links-active" : ""}`}
          to={"/contact-page"}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
