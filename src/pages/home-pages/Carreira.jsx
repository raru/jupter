import React, { useRef } from 'react';
// import { Link } from "react-router-dom";
import Header from "../../components/service-provider/Header";
import Footer from "../../components/common/footer/Footer";
import Sidebar from "../../components/common/header/sidebar/Sidebar";
import Seo from "../../components/common/seo/Seo";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';


const Carreira = ({ className = "carreira" }) => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w7z9kgf', 'template_tmjm459', form.current, 'OO5_zj_97Ev4i-GVE')
    
    .then((result) => {
      console.log(result.text);
      Swal.fire({
        icon: 'success',
        title: 'Mensagem Enviada'
      })
    }, (error) => {
      console.log(error.text);
      Swal.fire({
        icon: 'error',
        title: 'Ooops, algo deu errado',
        text: error.text,
      })

      e.target.reset()

    });
   
  };    

  return (
    <div className={`main-page-wrapper ${className}`}>
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
      <div className="box-layout mb-80 sm-mb-40 bg-darkgradient pt-300">
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
                    className="carreira-img"
                  />
              </div>
              {/* End .col */}

              <div className="col-lg-6 order-lg-first contact-section-one mb-80" data-aos="fade-right">
              <div className="title-style-five">
                    <h1 className="title white mb-20">
                    Quer trabalhar aqui?
                    </h1>
                  </div>
                  <h3 className="white mb-80 mt-20">
                  Mande seu Curriculum, queremos te conhecer.
                  </h3>
                <div className="md-mt-120 upload-box">

                {/* <form enctype="multipart/form-data" method="post" onsubmit="formSubmit()"> */}
                <form ref={form} onSubmit={sendEmail}>

                  <center>
<label for="cv"><img
                    src={
                      require("../../assets/images/icon/icon_upload.svg").default
                    }
                    alt="jupter energy"
                    width="35"

                  />      
                  <input type="file" name="cv" id="cv" className='cv'></input>         
</label>                 
<button type="submit"><strong>Envie seu CV aqui para enviar</strong><br/>
                  (formato pdf, doc ou jpg)</button>
                  
                  </center>

</form>
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

export default Carreira;
