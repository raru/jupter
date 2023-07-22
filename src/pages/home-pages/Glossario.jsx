import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/service-provider/Header";
import Footer from "../../components/common/footer/Footer";
import Sidebar from "../../components/common/header/sidebar/Sidebar";
import Seo from "../../components/common/seo/Seo";
import FancyBanner from "../../components/service-provider/FancyBanner";
import FeatureSection from "../../components/service-provider/FeatureSection";


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
          <Footer />
        </div>
      </footer>


    </div>
    // End .main-page-wrapper
  );
};

export default Glossario;
