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


const MenuSolucoes = () => {
  return (
      
            <div className="row menusolucoes">

                <div className="w20 p-0" data-aos="fade-right">
                  <div className="menu-column">
                    <ul className="style-none mega-dropdown-list">
                      <li><a href="#">Consultoria Energética</a></li>       
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
                      <li><a href="#">Soluções de gestão no mercado livre</a></li>       
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
                      <li><a href="#">Soluções de gestão no mercado cativo</a></li>       
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
                      <li><a href="#">Projetos de eficiência energética</a></li>       
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
                      <li><a href="#">Projetos de geração de energia</a></li>       
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

  );
};

export default MenuSolucoes;
