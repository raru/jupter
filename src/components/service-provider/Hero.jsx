import React from "react";
import { Link } from "react-router-dom";
// import img1 from "../../assets/images/assets/quem_hero-img1@2x.png";
import video from '../../assets/images/media/solar-energy-6s.mp4'


const Hero = () => {
  return (
    <>
      <div className="container">
        <div className="row align-items-center">
        <div className="col-md-6">
          <Link to="/" className="btn-branco btn-migalha">
              <span className="m-0">quem somos</span>
            </Link>          
        <div className="title-style-five white-vr">
          <h2 className="title mt-20">
          Energia <br/>
          é o que move o mundo.<br/>
          É o que move as pessoas.<br/>
          <br/>
          E, claro, <br/>
          <span className="verde"> move a sua empresa.</span>
          </h2>

        </div>
      </div>
      <div className="col offset-md-1">
      {/* <img
                src={img1}
                alt="hero"
                width="90%"
              />     */}

<div className="logo_mask mt-n6">
  <div className="video_holder">
    <div className="video_mask_inside">
    <video muted="muted" autoPlay={"autoplay"} loop muted playsInline>
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
src={require("../../assets/images/assets/quem_bolinha-dir.svg").default}
alt="bolinha"
className="video_bolinhas  video_bolinhas-verde"
/>
          {/* End .col */}



                  
      </div>

          {/* End .col */}
        </div>
      </div>
      {/* End container */}


    </>
  );
};

export default Hero;
