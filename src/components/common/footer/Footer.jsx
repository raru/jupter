import React from "react";
import { Link } from "react-router-dom";
import FooterMenuListTwo from "../../../components/common/footer/FooterMenuListTwo";

const Footer = () => {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-3">
              <div className="logo">
                <Link to="/">
                  <img
                    src={
                      require("../../../assets/images/logo/jupter_logotipo-branco.svg").default
                    }
                    alt="jupter energy"
                    width="165"
                  />
                </Link>
                <br/>
                <small className="mt-10">R. Desembargador Eliseu Guilherme, 53/69 - Cj. 62 <br/>CEP 04004-030 – Paraíso – São Paulo – SP</small>
              </div>
            </div>
            <FooterMenuListTwo />
          </div>
        </div>
        <div className="container">
          <div className="bottom-footer">
            <div className="row  align-items-center">
              <div className="col-md-auto mb-15">Soluções em energia.</div>
              <div className="col mb-15"> 
                    <div className="barra">
                      <div id="barra_bolinha">
                        <img
                        src={
                          require("../../../assets/images/assets/footer_bolinha-roxa.svg").default
                        }
                        alt="jupter energy"
                        width="15px"
                        />
                      </div>
                    </div>
              </div>
              <div className="col-md-auto mb-15">Energia em soluções.</div>      
            </div>
          </div>
          </div>
          </>
    );
};

export default Footer;