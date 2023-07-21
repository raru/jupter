import React from "react";
import { Link } from "react-router-dom";


const TextBlock = () => {
  return (
    <div className="row align-items-start">
      <div className="col-md-4 ms-auto" data-aos="fade-left">
        <div className="text-wrapper">

        <div className="title-style-five white-vr">
          <span className="btn-branco btn-migalha btn-migalha-roxo">NOSSAS SOLUÇÕES</span>
          <h2 className="title mt-20 pr30">
          Da redução do preço da energia à redução do consumo de energia.
          </h2>

          <label className="switch mt-40">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>

        </div>

        </div>
      </div>
      {/* End col */}

      <div className="col-md-7 text-left" data-aos="fade-right">
        <div className="img-container position-relative d-inline-block sm-mt-50">
          
          

            <div className="row">

                <div className="col-6 col-lg-4 box-solucao" data-aos="fade">
                  <div className="menu-column">
                    <ul className="style-none mega-dropdown-list">
                      <li><Link to="/solucoes" className="mb-40">Consultoria Energética</Link></li>       
                      <br/><br/><br/>           
                        <img
                        src={require("../../assets/images/icon/nav_icon-on.svg").default}
                        alt="Consultoria Energética"
                        width="41"
                        className="off"
                        />
                        <img
                        src={require("../../assets/images/icon/nav_icon-off.svg").default}
                        alt="Consultoria Energética"
                        width="41"
                        className="on"
                        />
                    </ul>
                  </div>
                </div>

                <div className="col-6 col-lg-4 box-solucao" data-aos="fade">
                  <div className="menu-column">
                    <ul className="style-none mega-dropdown-list">
                      <li><Link to="/solucoes" className="mb-40">Soluções de gestão no mercado livre</Link></li>       
                      <br/>    <br/>       
                        <img
                        src={require("../../assets/images/icon/nav_icon-on.svg").default}
                        alt="Soluções de gestão no mercado livre"
                        width="41"
                        className="off"
                        />
                        <img
                        src={require("../../assets/images/icon/nav_icon-off.svg").default}
                        alt="Soluções de gestão no mercado livre"
                        width="41"
                        className="on"
                        />
                    </ul>
                  </div>
                </div>

                <div className="w100"></div>

                <div className="col-6 col-lg-4 box-solucao" data-aos="fade">
                  <div className="menu-column">
                    <ul className="style-none mega-dropdown-list">
                      <li><Link to="/solucoes" className="mb-40">Soluções de gestão no mercado cativo</Link></li>       
                      <br/>    <br/>       
                        <img
                        src={require("../../assets/images/icon/nav_icon-on.svg").default}
                        alt="Soluções de gestão no mercado cativo"
                        width="41"
                        className="off"
                        />
                        <img
                        src={require("../../assets/images/icon/nav_icon-off.svg").default}
                        alt="Soluções de gestão no mercado cativo"
                        width="41"
                        className="on"
                        />
                    </ul>
                  </div>
                </div>

                <div className="col-6 col-lg-4 box-solucao" data-aos="fade">
                  <div className="menu-column">
                    <ul className="style-none mega-dropdown-list">
                      <li><Link to="/solucoes" className="mb-40">Projetos de eficiência energética</Link></li>       
                      <br/>     <br/>      
                        <img
                        src={require("../../assets/images/icon/nav_icon-on.svg").default}
                        alt="Projetos de eficiência energética"
                        width="41"
                        className="off"
                        />
                        <img
                        src={require("../../assets/images/icon/nav_icon-off.svg").default}
                        alt="Projetos de eficiência energética"
                        width="41"
                        className="on"
                        />
                    </ul>
                  </div>
                </div>

                <div className="w100"></div>

                <div className="col-6 col-lg-4 box-solucao" data-aos="fade">
                  <div className="menu-column">
                    <ul className="style-none mega-dropdown-list">
                      <li><Link to="/solucoes" className="mb-20">Projetos de geração de energia</Link></li>       
                      <br/>       <br/>    
                        <img
                        src={require("../../assets/images/icon/nav_icon-on.svg").default}
                        alt="Projetos de geração de energia"
                        width="41"
                        className="off"
                        />
                        <img
                        src={require("../../assets/images/icon/nav_icon-off.svg").default}
                        alt="Projetos de geração de energia"
                        width="41"
                        className="on"
                        />
                    </ul>
                  </div>
                </div>                                                

            </div>

          
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default TextBlock;
