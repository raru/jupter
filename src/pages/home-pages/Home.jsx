import React from "react";
// import { Link } from "react-router-dom";
import Header from "../../components/service-provider/Header";
import Footer from "../../components/common/footer/Footer";
import Sidebar from "../../components/common/header/sidebar/Sidebar";
// import AccordionOne from "../../components/service-provider/AccordionOne";
import FancyBanner from "../../components/service-provider/FancyBanner";
import HeroSlider from "../../components/service-provider/HeroSlider";
import TextBlock from "../../components/service-provider/TextBlock";
import Seo from "../../components/common/seo/Seo";


const Home = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="jupter energy" />
      {/* End Seo Related data */}

      {/* <!-- 
        =============================================
        ============================================== 
        --> */}
      <Sidebar />

      {/* <!--
        =============================================
        ==============================================
        --> */}
      <Header />

      {/* <!-- 
        =============================================
        ============================================== 
        --> */}
      <div>
        <div className="hero-banner-four">
          <div className="hero_slider_two">
            <HeroSlider />
          </div>
        </div>
        {/* <!-- /.hero-banner-four --> */}
      </div>
      {/* <!-- /.box-layout --> */}

      {/* <!-- 
			=============================================
				Vcamp Text Block Three
			============================================== 
			--> */}
      <div className="text-block-three">
        <div className="container">
          <TextBlock />
        </div>
      </div>
      {/* <!-- /.vcamp-text-block-three --> */}



      {/* <!--
			=====================================================
			=====================================================
			--> */}
      {/* <div className="vcamp-text-block-five">
        <div className="container">
          <div className="row align-items-center justify-content-start">
            <div className="col-lg-4">
              <div className="text-wrapper">
                <div className="title-style-five white-vr">
                  <span className="btn-branco btn-branco_transparente btn-migalha">glossário</span>
                  <h2 className="title mt-20">
                  Conheça mais sobre o mercado
                  </h2>
                  <p>A gente explica aqui.</p>
                  <Link to="/" className="btn-roxo btn-roxo_branco">
                      <span className="m-0">Conheça mais</span>
                    </Link>
                </div>                
              </div>
            </div>

            <div className="col-lg-6 offset-md-1">
              <div
                className="accordion accordion-style-one md-mt-30"
                id="accordionOne">
                <AccordionOne />
              </div>
            </div>
          </div>
        </div>
      </div> */}


      {/* <!--
			=====================================================
			=====================================================
			--> */}
      <div className="fancy-banner-one">
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

export default Home;
