import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/business/Header";
import Sidebar from "../../components/common/header/sidebar/Sidebar";
import Seo from "../../components/common/seo/Seo";
import FooterMenuListTwo from "../../components/common/footer/FooterMenuListTwo";


const Analise = ({ className = "quem" }) => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Analise" />
      {/* End Seo Related data */}

      {/* <!-- 
      =============================================
      Sidebar Nav
      ============================================== 
        --> */}
      <Sidebar />

      {/* <!--
      =============================================
        Theme Main Menu
      ==============================================
      --> */}
      <Header />


      {/* <!--
			=====================================================
			Contact Section One
			=====================================================
			--> */}
      <div className="box-layout bg-darkgradient pt-300 pb-200">
          <div className="container">
            <div className="row align-items-center">


              <div className="col-lg-6 contact-section-one mb-80" data-aos="fade-right">
              <div className="title-style-five">
                    <h1 className="title white mb-20">
                    Quer uma solução Jupter?
                    </h1>
                  </div>
                  <p className="text-lg white">
                  Nós estamos prontos para atender você ou a sua empresa. Faça o upload da sua fatura e receba uma análise de viabilidade de um projeto ou migração para o mercado livre. Vem com a gente.
                  </p>
                  <p className="text-lg verde mb-40">
                  Envie sua fatura mais recente e receba um estudo personalizado
                  </p>

                  <div className="md-mt-120 upload-box">
                  <center>
                  <img
                    src={
                      require("../../assets/images/icon/icon_upload.svg").default
                    }
                    alt="jupter energy"
                    width="35"
                  />                    
                  <strong>Arraste sua fatura aqui para enviar</strong><br/>
                  (formato pdf)
                  </center>
                </div>
              </div>

              <div
                className="col-xl-5 col-lg-6 ms-auto contact-section-one"
                data-aos="fade-left"
              >
                  <img
                    src={
                      require("../../assets/images/assets/analise@2x.png")
                    }
                    alt="jupter energy"
                    width="365"
                  />
              </div>
              {/* End .col */}              

              {/* End .col */}
            </div>
          </div>
        {/* <!-- /.bg-wrapper --> */}
      </div>
      {/* <!-- /.contact-section-one --> */}




      {/* <!--
			=====================================================
				Footer
			=====================================================
			--> */}
      <footer className="vcamp-footer-two dark-footer pt-50 lg-pt-30">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-3 mb-40">
              <div className="logo">
                <Link to="/">
                  <img
                    src={
                      require("../../assets/images/logo/jupter_logotipo-branco.svg").default
                    }
                    alt="jupter energy"
                    width="165"
                  />
                </Link>
                <br/>
                <small className="mt-10">R. Desembargador Eliseu Guilherme, 53/69 - Cj. 62 <br/>CEP 04004-030 – Paraíso – São Paulo – SP</small>
              </div>
            </div>
            {/* End .col */}

            <FooterMenuListTwo />
          </div>
        </div>
        {/* End .container */}

        <div className="container">
          <div className="bottom-footer">
            {/* <CopyrightFooter /> */}

            <div className="row  align-items-center">
              <div className="col-md-auto mb-15">Soluções em energia.</div>
              <div className="col mb-15"> 
                    <div className="barra">
                      <div id="barra_bolinha">
                        <img
                        src={
                          require("../../assets/images/assets/footer_bolinha-roxa.svg").default
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
        {/* End .container */}
      </footer>


    </div>
    // End .main-page-wrapper
  );
};

export default Analise;
