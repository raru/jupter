import React from "react";
import screen01 from "../../assets/images/assets/screen_01.jpg";
import footerImage from "../../assets/images/assets/ils_03.png";
import { Link } from "react-router-dom";
import CounterUp from "../../components/business/CounterUp";
import FeatureSectionOne from "../../components/business/FeatureSectionOne";
import FeedbackSliderOne from "../../components/business/FeedbackSliderOne";
import Header from "../../components/business/Header";
import Hero from "../../components/business/Hero";
import TextBlockOne from "../../components/business/TextBlockOne";
import Sidebar from "../../components/common/header/sidebar/Sidebar";
import TextBlockVideo from "../../components/business/TextBlockVideo";
import FeatureSectionTwo from "../../components/business/FeatureSectionTwo";
import FeedbackSliderTwo from "../../components/business/FeedbackSliderTwo";
import Blog from "../../components/business/Blog";
import ContactMeta from "../../components/common/contact/ContactMeta";
import FromStyleOne from "../../components/common/contact/FromStyleOne";
import Address from "../../components/business/Address";
import FooterSubscribe from "../../components/creative-agency/FooterSubscribe";
import CopyrightFooter from "../../components/common/footer/CopyrightFooter";
import FooterMenuList from "../../components/common/footer/FooterMenuList";
import Seo from "../../components/common/seo/Seo";
import img2 from "../../assets/images/assets/quem_hero-img2@2x.png";
import FancyBanner from "../../components/service-provider/FancyBanner";
import FooterMenuListTwo from "../../components/common/footer/FooterMenuListTwo";


const Carreira = ({ className = "carreira" }) => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Carreira" />
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
      <div className="box-layout mb-80 sm-mb-40 bg-darkgradient pt-200">
          <div className="container">
            <div className="row align-items-center">
              <div
                className="col-xl-5 col-lg-6 order-lg-last ms-auto contact-section-one"
                data-aos="fade-left"
              >
                  <img
                    src={
                      require("../../assets/images/assets/trabalhe_img.svg").default
                    }
                    alt="jupter energy"
                    width="365"
                  />
              </div>
              {/* End .col */}

              <div className="col-lg-6 order-lg-first contact-section-one mb-80" data-aos="fade-right">
              <div className="title-style-one">
                    <h4 className="title white mb-20">
                    Quer trabalhar aqui?
                    </h4>
                  </div>
                  <p className="text-lg white mb-40">
                  Mande seu Curriculum, queremos te conhecer.
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
                  <strong>Arraste seu CV aqui para enviar</strong><br/>
                  (formato pdf, doc ou jpg)
                  </center>
                </div>
              </div>
              {/* End .col */}
            </div>
          </div>
        {/* <!-- /.bg-wrapper --> */}
      </div>
      {/* <!-- /.contact-section-one --> */}

      <div className={`bkgimg-section ${className}`} data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-lg-9 m-auto">

              {/* <!-- /.feedback_slider_nine --> */}
            </div>
          </div>
        </div>
        </div>
        {/* <!-- /.container --> */}






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

export default Carreira;
