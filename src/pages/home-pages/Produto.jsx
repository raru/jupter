import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/business/Header";
import Footer from "../../components/common/footer/Footer";
import Sidebar from "../../components/common/header/sidebar/Sidebar";
import Seo from "../../components/common/seo/Seo";
import FancyBanner from "../../components/service-provider/FancyBanner";
import TextBlockProduto from "../../components/service-provider/TextBlockProduto";
import HeroProduto from "../../components/business/HeroProduto";
import MenuSolucoes from "../../components/common/header/mega-menu/MenuSolucoes";

const Produto = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Produto" />
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
          <Footer />
        </div>
      </footer>


    </div>
    // End .main-page-wrapper
  );
};


export default Produto;
