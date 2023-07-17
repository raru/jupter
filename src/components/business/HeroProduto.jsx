import React from "react";
import { Link } from "react-router-dom";
import SubscribeForm from "../common/form/SubscribeForm";
import Partners from "./Partners";
import img1 from "../../assets/images/assets/quem_hero-img1@2x.png";
import video from '../../assets/images/media/video.mp4'

const Hero = () => {
  return (
    <>
      <div className="container">
        <div className="row align-items-center">
        <div className="col-md-6">        
        <div className="title-style-five white-vr">
          <h1 className="title mt-20">
          Nossas<br/>
          soluções
          </h1>
          <p>Sempre com a missão de traduzir de forma simples e intuitiva os dados de consumo de energia, encontrando oportunidades de ganhos de eficiência energética e operacional para todos os clientes.</p>
        </div>
      </div>
      <div className="col offset-md-1 pt-100">
<div className="logo_mask">
  <div className="video_holder">
    <video width="960" height="540" controls autoPlay loop muted>
      <source src={video} type="video/mp4"/>
    </video>
  </div>
</div>
              <img
                src={require("../../assets/images/assets/video_bolinha-dark.svg").default}
                alt="video"
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
