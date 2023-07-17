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
import FeatureSection from "../../components/creative-agency/FeatureSection";


const Glossario = ({ className = "quem" }) => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Glossario" />
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
        Vcamp Fancy Banner Two
        =====================================================
        --> */}
<div id="glossario" className="bg-roxo pt-200">
      <div className="container">
        <div className="row align-items-center">
          <div className="align-items-center justify-content-center mb-100">
            <center>
            <span className="btn-branco btn-branco_transparente">glossário</span>
<h3 className="white mt-30">
Quer entender melhor os termos do nosso mercado? A gente explica aqui.
</h3>
<br/>
<Link to="/" className="btn-branco d-inline-flex justify-content-center align-items-center xs-mt-30">
Digite aqui sua dúvida
</Link>
</center>
          </div>
          {/* <!-- /.inner-content --> */}
        </div>
      </div>
</div>      
      {/* <!-- /.fancy-banner-ten --> */}


      <div>
        <div className="container">
        <h4 className="title mt-80">
        Principais tópicos
        </h4>

        <div className="row">
            <FeatureSection />
          </div>

        </div>
      </div>
      {/* <!-- /.partner-slider-one --> */}



      {/* <!--
			=====================================================
				Vcamp Fancy Banner One
			=====================================================
			--> */}
      <div className="fancy-banner-one bg-darkgradient">
        <div className="inner-content position-relative">
          <div className="container">
            <div className="row align-items-center">
              <FancyBanner />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.fancy-banner-one --> */}





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

export default Glossario;
