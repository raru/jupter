import React, { useState } from "react";
import { Link } from "react-router-dom";
import MegaMenuOne from "../common/header/mega-menu/MegaMenuOne";
import MobileMenuContent from "../common/header/mega-menu/MobileMenuContent";

const Header = ({ className = "" }) => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 95) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <header
      className={`theme-main-menu sticky-menu theme-menu-one ${
        navbar ? "fixed " : ""
      } ${className}`}
    >

      <div className="header-top d-flex  align-items-center justify-content-end"> 
          {/* <img
                    src={require("../../assets/images/icon/header_icon-on.svg").default}
                    alt="brand"
                    width="27"
                    height="30"
                  /> */}

          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>

          <p className="px-2 pb-0 m-0">Soluções em energia. Energia em soluções.</p>
      </div>
      <div className="inner-content">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo  pt-2">
            <Link to="/">
              <img
                src={require("../../assets/images/logo/jupter_logotipo.svg").default}
                alt="brand"
                width="180"
              />
            </Link>
          </div>
          {/* End .logo */}

          <nav className="navbar navbar-expand-lg">
            <button
              className="navbar-toggler d-block d-lg-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span></span>
            </button>
            {/* End navbar-toggler */}

            <div className="collapse navbar-collapse" id="navbarNav">
              <MegaMenuOne />
              {/* End MegaMenuOne */}
              <div className="mobile-content d-block d-lg-none">
                <MobileMenuContent />
                {/* <!-- /.mobile-content --> */}
              </div>
            </div>
            {/* End .collapse */}
          </nav>
          {/* End .navbar */}

          <div className="right-widget d-flex align-items-center">
            {/* <Link to="/sign-in" className="d-flex align-items-center login-btn"> */}
            <Link to="/" className="d-flex align-items-center login-btn">
                <span>Área do Cliente</span>
            </Link>
            {/* End .sidebar-nav-button */}
          </div>
          {/* <!-- /.right-widget --> */}
        </div>
      </div>
      {/* <!-- /.inner-content --> */}
    </header>
    // {/* <!-- /.theme-main-menu --> */}
  );
};

export default Header;
