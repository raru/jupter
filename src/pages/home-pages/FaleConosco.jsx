import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/business/Header";
import Footer from "../../components/common/footer/Footer";
import Sidebar from "../../components/common/header/sidebar/Sidebar";
import FromStyleOne from "../../components/common/contact/FromStyleOne";
import Seo from "../../components/common/seo/Seo";


const FaleConosco = ({ className = "fale" }) => {
  return (
    <div className="main-page-wrapper">
      <Seo title="FaleConosco" />
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
      <div className="contact-section-one box-layout mt-200 mb-80 lg-mt-130 sm-mb-40">
          <div className="container">
            <div className="row align-items-top">
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

export default FaleConosco;
