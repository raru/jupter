import React from "react";
import screen01 from "../../assets/images/assets/screen_01.jpg";
import { Link } from "react-router-dom";
import CounterUp from "../../components/business/CounterUp";
import FeatureSectionOne from "../../components/business/FeatureSectionOne";
import FeedbackSliderOne from "../../components/business/FeedbackSliderOne";
import Header from "../../components/business/Header";
import Footer from "../../components/common/footer/Footer";
import Hero from "../../components/business/Hero";
import TextBlockOne from "../../components/business/TextBlockOne";
import Sidebar from "../../components/common/header/sidebar/Sidebar";
import TextBlockVideo from "../../components/business/TextBlockVideo";
import FeatureSectionTwo from "../../components/business/FeatureSectionTwo";
import FeedbackSliderTwo from "../../components/business/FeedbackSliderTwo";
import Blog from "../../components/business/Blog";
import FromStyleOne from "../../components/common/contact/FromStyleOne";
import Seo from "../../components/common/seo/Seo";
import img2 from "../../assets/images/assets/quem_hero-img2@2x.png";
import FancyBanner from "../../components/service-provider/FancyBanner";
import FooterMenuListTwo from "../../components/common/footer/FooterMenuListTwo";


const Business = ({ className = "quem" }) => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Business" />
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
        <img
                src={img2}
                alt="hero"
                width="40%"
              />  
        </div>
      </div>
      {/* <!-- /.partner-slider-one --> */}


      {/* <!-- 
			=============================================
				Vcamp Feature Section One
			============================================== 
			--> */}
      <div className="vcamp-feature-section-one box-layout mt-75">
        <div className="bg-wrapper">
          <img
            src={require("../../assets/images/shape/shape_01.svg").default}
            alt="shape"
            className="shapes shape-one"
          />
          <div className="container">
            <div className="row">
              <div className="col-xxl-4 col-lg-5" data-aos="fade-right">
                <div className="title-style-one">
                  <div className="upper-title">What we do</div>
                  <h2 className="title">
                    Our <span>included</span> service.
                  </h2>
                </div>
                <p className="meta-info-text text-lg">
                  We helping client to create with our talented expert.
                </p>
                <Link to="/service-v1" className="theme-btn-one ripple-btn">
                  Discover More{" "}
                  <img
                    src={
                      require("../../assets/images/icon/icon_03.svg").default
                    }
                    alt="icon"
                  />
                </Link>
              </div>
              {/* End .col */}

              <div className="col-lg-7 ms-auto" data-aos="fade-left">
                <div className="row">
                  <FeatureSectionOne />
                </div>
              </div>
              {/* End .col */}
            </div>
          </div>
        </div>
        {/* <!-- /.bg-wrapper --> */}
      </div>
      {/* <!-- /.vcamp-feature-section-one --> */}

      {/* <!-- 
			=============================================
				Vcamp Text Block One
			============================================== 
			--> */}
      <div className="vcamp-text-block-one mt-150 md-mt-80 position-static">
        <div className="container">
          <TextBlockOne />
        </div>
        {/* End TextBlockOne */}
        <div className="position-relative">
          <img
            src={require("../../assets/images/shape/shape_05.svg").default}
            alt="shape"
            className="shapes shape-two"
          />
        </div>
      </div>
      {/* <!-- /.vcamp-text-block-one --> */}



      {/* <!--
			=====================================================
				Feedback Slider One
			=====================================================
			--> */}
      <div className="feedback-section-one box-layout mt-140 lg-mt-80">
        <div className="bg-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-8 col-md-9" data-aos="fade-right">
                <div className="inner-content position-relative">
                  <div className="icon d-flex align-items-center justify-content-center mb-20">
                    <img
                      src={
                        require("../../assets/images/icon/icon_11.svg").default
                      }
                      alt="icon"
                    />
                  </div>
                  <div className="feedback_slider_one slick-long-arrow">
                    <FeedbackSliderOne />
                  </div>
                  {/* <!-- /.feedback_slider_one --> */}
                </div>
                {/* <!-- /.inner-content --> */}
              </div>
            </div>
          </div>
          {/* <!-- /.container --> */}
          <img
            src={screen01}
            alt="screen"
            className="shapes screen-one"
            data-aos="fade-left"
          />
        </div>
        {/* <!-- /.bg-wrapper --> */}
      </div>
      {/* <!-- /.feedback-section-one --> */}

      {/* <!-- 
			=============================================
				Vcamp Text Block One
			============================================== 
			--> */}
      <div className="vcamp-text-block-one mt-200 lg-mt-120 position-static">
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
      <div className="bg-darkroxo mt-130 md-mt-110">
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
				Counter Section One
			=====================================================
			--> */}
      <div className="counter-section-one mt-170 md-mt-120">
        <div className="inner-container">
          <div className="row">

          </div>
        </div>
      </div>
      {/* End .counter-section-one */}




      {/* <!--
			=====================================================
				Vcamp Fancy Banner One
			=====================================================
			--> */}
      <div className="fancy-banner-one bg-darkgradient mt-200 lg-mt-120">
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
				Feedback Slider Two
			=====================================================
			--> */}
      <div className="feedback-section-two box-layout mt-110 lg-mt-50">
        <div className="bg-wrapper">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-xl-7 col-md-6">
                <div className="title-style-one text-center text-md-start">
                  <h2 className="title">
                    What’s our <span>client</span> say about us.
                  </h2>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /.container --> */}

          <div className="feedback_slider_two slick-rounded-arrow arrow-top-right">
            <FeedbackSliderTwo />
          </div>
          {/* <!-- /.feedback_slider_two --> */}
        </div>
        {/* <!-- /.bg-wrapper --> */}
      </div>
      {/* <!-- /.feedback-section-two --> */}

      {/* <!--
			=====================================================
				Blog Section One
			=====================================================
			--> */}
      <div className="blog-section-one mt-130 lg-mt-40">
        <div className="container">
          <div className="row gx-xl-5">
            <div className="col-lg-4 d-flex order-lg-0">
              <div className="mt-75 md-mb-40">
                <div className="title-style-one">
                  <h2 className="title">
                    Our <span>inside</span> News
                  </h2>
                </div>
                <Link to="/blog-v1" className="theme-btn-three mt-50 md-mt-30">
                  Check our all news <i className="fas fa-angle-right"></i>
                </Link>
              </div>
            </div>
            {/* End .col */}

            <Blog />
            {/* End Blog */}
          </div>
        </div>
      </div>
      {/* <!-- /.blog-section-one --> */}

      {/* <!--
			=====================================================
			Contact Section One
			=====================================================
			--> */}
      <div className="contact-section-one box-layout mt-200 mb-80 lg-mt-130 sm-mb-40">
          <div className="container">
            <div className="row align-items-center">
              <div
                className="col-xl-5 col-lg-6 order-lg-last ms-auto"
                data-aos="fade-left"
              >
                  <img
                    src={
                      require("../../assets/images/assets/fale_img.svg").default
                    }
                    alt="jupter energy"
                    width="365"
                  />
              </div>
              {/* End .col */}

              <div className="col-lg-6 order-lg-first" data-aos="fade-right">
              <div className="title-style-one">
                    <h3 className="title  mb-20">
                    Fale com a gente.
                    </h3>
                  </div>
                  <p className="text-lg mb-40">
                  A gente quer falar com você.
                  </p>
                <div className="form-style-one md-mt-120">
                  <FromStyleOne />
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
			Contact Section One
			=====================================================
			--> */}
      <div className="box-layout mb-80 sm-mb-40 bg-darkgradient pt-100">
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
			Contact Section One
			=====================================================
			--> */}
      <div className="box-layout mb-80 sm-mb-40 bg-darkgradient pt-100">
          <div className="container">
            <div className="row align-items-center">


              <div className="col-lg-6 contact-section-one mb-80" data-aos="fade-right">
              <div className="title-style-one">
                    <h4 className="title white mb-20">
                    Quer uma solução Jupter?
                    </h4>
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

export default Business;
