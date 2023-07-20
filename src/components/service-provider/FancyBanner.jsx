import React from "react";
import { Link } from "react-router-dom";
import video from '../../assets/images/media/video.mp4'

const FancyBanner = () => {
  return (
    <>
      <div className="col-md-5">
        <div className="title-style-five white-vr">
          <span className="btn-branco btn-migalha">análise de viabilidade</span>
          <h2 className="title mt-20">
          A Jupter Energy pode gerar até 30% de economia com seu gasto de energia elétrica.
          </h2>
          <p>Envie sua fatura mais recente e receba um estudo personalizado.</p>
          <Link to="/sign-in" className="btn-roxo">
              <span className="m-0">Vem com a gente</span>
            </Link>
        </div>
      </div>
      {/* End .col */}

      <div className="col-xl-5 col-md-6 ms-auto">

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
    </>
  );
};

export default FancyBanner;
