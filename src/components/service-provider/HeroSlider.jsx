import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
import Slider from "react-slick";
import img1 from "../../assets/images/assets/hero_banner-01.jpg";
// import video1 from "../../assets/images/media/aerial-top-down-view-of-water.mp4";
import video1 from "../../assets/images/media/aerial-top-down-view-of-water.mp4";

const HeroSlider = () => {
  const [isOpen, setOpen] = useState(false);

  // slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
  };

  const sliderContent = [
    {
      id: 1,
      largeImg: img1,
      title: "Soluções em energia. Energia em soluções.",
      descriptions: ` Uma empresa pensada para cuidar da energia da sua empresa, com soluções personalizadas.
      E sempre cheias de energia.`,
    },
    // {
    //   id: 2,
    //   largeImg: img2,
    //   title: "Think Design & Start",
    //   descriptions: ` We helpingclient to create WordPress with our talented expert.`,
    // },
  ];
  return (
    <>

      <Slider {...settings} arrows={false}>
        {sliderContent.map((item) => (
          <div className="item" key={item.id}>
            <div className="content-wrapper">
              {/* <img
                src={item.largeImg}
                alt="slider avatar"
                className="hero-img"
              /> */}
        

<video muted="muted" autoPlay={"autoplay"} loop>
      <source
        // src="https://creativegigstf.com/video/intro_3.mp4"
        src={video1}        
        type="video/mp4"
      />
    </video>
    
              <div className="row  align-items-center  slider-inner">
                <div className="row  hero-content">

               



      <div className=" col-12 col-md-6">
        <div className="title-style-five white-vr">
          <h1 className="title mt-20">
          {item.title}
          </h1>
          <p className="xs-mt-0 md-mt-30">{item.descriptions}</p>
          <Link to="/sign-in" className="btn-branco btn-branco_transparente">
              <span className="m-0">Fale com a gente</span>
            </Link>
        </div>
      </div>
      <div className="col-4 d-none d-sm-block offset-md-1">
      <img
                src={require("../../assets/images/assets/hero_img.svg").default}
                alt="hero"
                width="70%"
              />        
      </div>

                    

                </div>
                {/* <!-- /.hero-content --> */}
              </div>
              {/* <!-- /.slider-inner --> */}
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default HeroSlider;
