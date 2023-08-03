import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import Header from "../../components/service-provider/Header";
import Footer from "../../components/common/footer/Footer";
import Sidebar from "../../components/common/header/sidebar/Sidebar";
import Seo from "../../components/common/seo/Seo";
import emailjs from '@emailjs/browser';

const Analise = ({ className = "analise" }) => {



  function formSubmit(event) {
    event.preventDefault();
    emailjs.sendForm('service_w7z9kgf', 'template_yl7ot7c', this);
    
    alert('Envio feito com sucesso!')
   
  }


  return (
    <div className={`main-page-wrapper ${className}`}>
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
      <div className="box-layout bg-darkgradient pt-200 pb-200">
          <div className="container">
            <div className="row align-items-center">


              <div className="col-lg-5 contact-section-one" data-aos="fade-right">
              <div className="title-style-five">
                    <h1 className="title white">
                    Quer uma solução Jupter?
                    </h1>
                  </div>
                  <p className="text-lg white mt-30">
                  Nós estamos prontos para atender você ou a sua empresa. Faça o upload da sua fatura e receba uma análise de viabilidade de um projeto ou migração para o mercado livre. Vem com a gente.
                  </p>
                  <p className="text-lg verde text-lg verde mt-40 mb-60">
                  Envie sua fatura mais recente e receba um estudo personalizado
                  </p>

              </div>

              <div
                className="col-xl-5 col-lg-6 offset-1 ms-auto contact-section-one"
                data-aos="fade"
              >
                  <img
                    src={
                      require("../../assets/images/assets/analise@2x.png")
                    }
                    alt="jupter energy"
                    width="465"
                    className="img-n3"
                  />
              </div>
              {/* End .col */}              

              {/* End .col */}
            </div>



            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6 md-offset-3 mt-10 upload-box"
                data-aos="fade-right">

<form enctype="multipart/form-data" method="post" onsubmit="formSubmit()">
 
<div className="row controls form-style-one">

                  <center>
{/* 
          <input type="file" onChange={handleChange}/> */}

            <div className="input-group-meta form-group mt-20 mb-25">
              <input
                type="text"
                placeholder="Seu nome"
                name="from_name" 
                required
              />
              <div className="help-block with-errors"></div>
            </div>


            <div className="input-group-meta form-group mb-25">
              <input
                type="email"
                placeholder="seuemail@gmail.com"
                name="from_email"
                required
              />
              <div className="help-block with-errors"></div>
            </div>

<label for="upload"><img
                    src={
                      require("../../assets/images/icon/icon_upload.svg").default
                    }
                    alt="jupter energy"
                    width="35"

                  />      
                  <input type="file" id="upload" className='upload'></input>         
</label>


<button type="submit"><strong>Clique e suba sua fatura aqui para enviar</strong><br/>
                  (formato pdf)</button>

                  </center>

                  </div>

</form>

                </div>  
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
          <Footer />
        </div>
      </footer>


    </div>
    // End .main-page-wrapper
  );
};

export default Analise;
