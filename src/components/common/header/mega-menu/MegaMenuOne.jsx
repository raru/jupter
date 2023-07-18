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
          <Link to="/quem-somos ">         
          Quem somos
          </Link>
        </button>
      </li>
      {/* End elements dropdown */}            

      <li className="nav-item dropdown mega-dropdown">
        <button
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
          aria-expanded="false"
        >
          Soluções
        </button>
        <ul className="dropdown-menu align-items-center">
          <li>
            <div className="row">

                <div className="w20 p-0" data-aos="fade-right">
                  <div className="menu-column">
                    <ul className="style-none mega-dropdown-list">
                      <li>          <Link to="/produto">Consultoria Energética</Link></li>       
                      <br/><br/><br/>           
                        <img
                        src={require("../../../../assets/images/icon/nav_icon-off.svg").default}
                        alt="Consultoria Energética"
                        width="41"
                        className="off"
                        />
                        <img
                        src={require("../../../../assets/images/icon/nav_icon-on.svg").default}
                        alt="Consultoria Energética"
                        width="41"
                        className="on"
                        />
                    </ul>
                  </div>
                </div>

                <div className="w20 p-0" data-aos="fade-right">
                  <div className="menu-column">
                    <ul className="style-none mega-dropdown-list">
                      <li>          <Link to="/produto">Soluções de gestão no mercado livre</Link></li>       
                      <br/>    <br/>       
                        <img
                        src={require("../../../../assets/images/icon/nav_icon-off.svg").default}
                        alt="Soluções de gestão no mercado livre"
                        width="41"
                        className="off"
                        />
                        <img
                        src={require("../../../../assets/images/icon/nav_icon-on.svg").default}
                        alt="Soluções de gestão no mercado livre"
                        width="41"
                        className="on"
                        />
                    </ul>
                  </div>
                </div>

                <div className="w20 p-0" data-aos="fade-right">
                  <div className="menu-column">
                    <ul className="style-none mega-dropdown-list">
                      <li>          <Link to="/produto">Soluções de gestão no mercado cativo</Link></li>       
                      <br/>    <br/>       
                        <img
                        src={require("../../../../assets/images/icon/nav_icon-off.svg").default}
                        alt="Soluções de gestão no mercado cativo"
                        width="41"
                        className="off"
                        />
                        <img
                        src={require("../../../../assets/images/icon/nav_icon-on.svg").default}
                        alt="Soluções de gestão no mercado cativo"
                        width="41"
                        className="on"
                        />
                    </ul>
                  </div>
                </div>

                <div className="w20 p-0" data-aos="fade-right">
                  <div className="menu-column">
                    <ul className="style-none mega-dropdown-list">
                      <li>          <Link to="/produto">Projetos de eficiência energética</Link></li>       
                      <br/>     <br/>      
                        <img
                        src={require("../../../../assets/images/icon/nav_icon-off.svg").default}
                        alt="Projetos de eficiência energética"
                        width="41"
                        className="off"
                        />
                        <img
                        src={require("../../../../assets/images/icon/nav_icon-on.svg").default}
                        alt="Projetos de eficiência energética"
                        width="41"
                        className="on"
                        />
                    </ul>
                  </div>
                </div>

                <div className="w20 p-0" data-aos="fade-right">
                  <div className="menu-column">
                    <ul className="style-none mega-dropdown-list">
                      <li>          <Link to="/produto">Projetos de geração de energia</Link></li>       
                      <br/>       <br/>    
                        <img
                        src={require("../../../../assets/images/icon/nav_icon-off.svg").default}
                        alt="Projetos de geração de energia"
                        width="41"
                        className="off"
                        />
                        <img
                        src={require("../../../../assets/images/icon/nav_icon-on.svg").default}
                        alt="Projetos de geração de energia"
                        width="41"
                        className="on"
                        />
                    </ul>
                  </div>
                </div>                                                

            </div>
          </li>
        </ul>
      </li>
      {/* End portfolio dropdown */}


      <li className="nav-item pl-15 pl-md-15">
        <button
          className="nav-link"
        >
        <Link to="/analise ">  
          Faça sua análise
          </Link>
        </button>
      </li>
      {/* End Faça sua análise dropdown */}

      {/* <li className="nav-item">
        <button
          className="nav-link"
        >
        <Link to="/glossario ">  
          Glossário
          </Link>
        </button>
      </li> */}
      {/* End Glossário dropdown */}

      <li className="nav-item">
        <button
          className="nav-link"
        >
          <Link to="/carreira">
          Carreira
          </Link>
        </button>
      </li>
      {/* End Carreira dropdown */}

      <li className="nav-item">
        <button
          className="nav-link"
        >
        <Link to="/fale-conosco">  
          Fale conosco
          </Link>
        </button>
      </li>
      {/* End Fale conosco dropdown */}            


    </ul>
    //   {/* End navbar-nav */}
  );
};

export default MegaMenuOne;
