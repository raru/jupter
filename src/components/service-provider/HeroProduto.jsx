import React from "react";
import { Link } from "react-router-dom";
import video from '../../assets/images/media/aerial-top-6s.mp4'

const Hero = () => {
  return (
    <>
      <div className="container">
        <div className="row align-items-center">
        <div className="col-md-6">        
        <div className="title-style-five white-vr">
          <h1 className="title mt-20 mb-40">
          Nossas<br/>
          soluções
          </h1>
          <p className="mt-40">Sempre com a missão de traduzir de forma simples e intuitiva os dados de consumo de energia, encontrando oportunidades de ganhos de eficiência energética e operacional para todos os clientes.</p>
        </div>
      </div>
      <div className="col offset-md-1 pt-100">

      <div className="logo_mask mt-n6">
  <div className="video_holder">
    <div className="video_mask_inside">
    <video muted="muted" autoPlay={"autoplay"} loop>
      <source
        // src="https://creativegigstf.com/video/intro_3.mp4"
        src={video}        
        type="video/mp4"
      />
    </video>
    </div>
  </div>
</div>
<img
                src={require("../../assets/images/assets/video_bolinha.svg").default}
                alt="bolinha"
                className="video_bolinhas"
              />

      </div>

          {/* End .col */}
        </div>
      </div>
      {/* End container */}





    </>
  );
};

export default Hero;
