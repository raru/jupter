import React from "react";
import { Link } from "react-router-dom";
import imgMedia from "../../assets/images/media/img_29.jpg";
import Header from "../../components/business/Header";
import CopyrightFooter from "../../components/common/footer/CopyrightFooter";
import FooterMenuListTwo from "../../components/common/footer/FooterMenuListTwo";
import Sidebar from "../../components/common/header/sidebar/Sidebar";
import Seo from "../../components/common/seo/Seo";
import FeatureSection from "../../components/creative-agency/FeatureSection";
import AccordionOne from "../../components/service-provider/AccordionOne";
import Blog from "../../components/service-provider/Blog";
import CaseSliderOne from "../../components/service-provider/CaseSliderOne";
import Counter from "../../components/service-provider/Counter";
import FancyBanner from "../../components/service-provider/FancyBanner";
import FeedbackSlider from "../../components/service-provider/FeedbackSlider";
import HeroSlider from "../../components/service-provider/HeroSlider";
import TeamSlider from "../../components/service-provider/TeamSlider";
import TextBlockProduto from "../../components/service-provider/TextBlockProduto";
import TextBlockTitle from "../../components/service-provider/TextBlockTitle";
import TextBlockTwo from "../../components/service-provider/TextBlockTwo";
import HeroProduto from "../../components/business/HeroProduto";
import MenuSolucoes from "../../components/common/header/mega-menu/MenuSolucoes";

const Produtos = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Produtos" />
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
			=============================================
			Theme Hero Banner
			============================================== 
			--> */}
      <div className="hero-banner-one bg-darkroxo mt-110">
        <HeroProduto />
      </div>
      {/* <!-- /.hero-banner-one --> */}




      {/* <!-- 
			=============================================
				Vcamp Text Block Three
			============================================== 
			--> */}
      <div className="text-block-three produto">
        <div className="container">
          <MenuSolucoes />

          <TextBlockProduto />
        </div>
        <img
          src={require("../../assets/images/shape/shape_22.svg").default}
          alt=""
          className="shapes shape-one"
        />
      </div>
      {/* <!-- /.vcamp-text-block-three --> */}



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


export default Produtos;
