import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "./CustomLink";
import logo from "../../../../assets/images/logo/jupter_logotipo.svg";
import homeDropdownData from "./dropdown-data/homeMegaMenuData";
import elementsMegaMenuData from "./dropdown-data/elementsMegaMenuData";
import portfolioMegaMenuData from "./dropdown-data/portfolioMegaMenuData";
import pagesMegaMenuData from "./dropdown-data/pagesMegaMenuData";
import shopDropdownData from "./dropdown-data/shopDropdownData";
import blogDropdownData from "./dropdown-data/blogDropdownData";


const MegaMenuOne = () => {
  return (
    <ul className="navbar-nav">
      <li className="d-block d-lg-none">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="jupter energy" width="127" />
          </Link>
        </div>
      </li>
      {/* End Brnad */}



      <li className="nav-item">
        <button
          className="nav-link"
        >
          Quem somos
        </button>
      </li>
      {/* End elements dropdown */}            

      <li className="nav-item">
      <button
          className="nav-link"
        >
          Soluções
        </button>
        
      </li>
      {/* End portfolio dropdown */}


      <li className="nav-item">
        <button
          className="nav-link"
        >
          Faça sua análise
        </button>
      </li>
      {/* End Faça sua análise dropdown */}

      <li className="nav-item">
        <button
          className="nav-link"
        >
          Glossário
        </button>
      </li>
      {/* End Glossário dropdown */}

      <li className="nav-item">
        <button
          className="nav-link"
        >
          Carreira
        </button>
      </li>
      {/* End Carreira dropdown */}

      <li className="nav-item">
        <button
          className="nav-link"
        >
          Fale conosco
        </button>
      </li>
      {/* End Fale conosco dropdown */}            


    </ul>
    //   {/* End navbar-nav */}
  );
};

export default MegaMenuOne;
