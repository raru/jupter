import React from "react";
import { Link } from "react-router-dom";
import CounterUp from "../../components/service-provider/CounterUp";
import Header from "../../components/service-provider/Header";
import Footer from "../../components/common/footer/Footer";
import Hero from "../../components/service-provider/Hero";
import Sidebar from "../../components/common/header/sidebar/Sidebar";
import TextBlockVideo from "../../components/service-provider/TextBlockVideo";
import FeatureSectionTwo from "../../components/service-provider/FeatureSectionTwo";
import Seo from "../../components/common/seo/Seo";
import img2 from "../../assets/images/assets/quem_hero-img2@2x.png";
import FancyBanner from "../../components/service-provider/FancyBanner";
import quem_video2 from '../../assets/images/media/top-view-6s.mp4'


const QuemSomos = ({ className = "quem" }) => {
  return (
    <div className={`main-page-wrapper ${className}`}>
      <Seo title="QuemSomos" />
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
      <div className="hero-banner-one mt-110">
        <Hero />
      </div>
      {/* <!-- /.hero-banner-one --> */}



      <div className="partner-slider-one mt-n2">
        <div className="container">
        {/* <img
                src={img2}
                alt="hero"
                width="40%"
              />  
 */}

<div className="logo_mask mt-n6">
  <div className="video_holder">
    <div className="video_mask_inside">
    <video muted="muted" autoPlay={"autoplay"} loop>
      <source
        // src="https://creativegigstf.com/video/intro_3.mp4"
        src={quem_video2}        
        type="video/mp4"
      />
    </video>
    </div>
  </div>
</div>

<img
src={require("../../assets/images/assets/quem_bolinha-esq.svg").default}
alt="bolinha"
className="video_bolinhas  video_bolinhas-branca"
/>

</div>

      </div>
      {/* <!-- /.partner-slider-one --> */}

      {/* <!-- 
			=============================================
				Vcamp Text Block One
			============================================== 
			--> */}
      <div className="vcamp-text-block-one mt-60 lg-mt-30 position-static d-none d-sm-block">
        <div className="container">
          <TextBlockVideo />
        </div>
      </div>
      {/* <!-- /.vcamp-text-block-one --> */}

      {/* <!-- 
			=============================================
				Vcamp Feature Section Two
			============================================== 
			--> */}
      <div className="bg-darkroxo xs-mt-30 md-mt-110">
        <div className="container">
          <div className="row gx-5">
            <div className="col-xxl-11 m-auto">
              <div className="row gx-5">
                <h1 className="title">Nossos números</h1>
                <FeatureSectionTwo />
                <CounterUp />                
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.vcamp-feature-section-two --> */}



      {/* <!--
        =====================================================
        Vcamp Fancy Banner Two
        =====================================================
        --> */}
      <div className="container">
        <div className="fancy-banner-ten">
          <div className="inner-content h-100 align-items-center justify-content-center">
<h3 className="white">Tudo para que no final do dia, <br/>
o que você enxerga como custo, possa <br/>
passar a ser visto como solução.<br/>
</h3>
<br/>
<Link to="/blog-v2" className="btn-branco d-inline-flex justify-content-center align-items-center xs-mt-30">
Conheça nossas soluções
<img
                      src={
                        require("../../assets/images/icon/arrow-right.svg").default
                      }
                      alt="icon"
                      height="16px"
                      className="px-2"
                    />
</Link>
          </div>
          {/* <!-- /.inner-content --> */}
        </div>
      </div>
      {/* <!-- /.fancy-banner-ten --> */}


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

export default QuemSomos;
