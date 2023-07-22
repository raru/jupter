import React, { useState, useRef } from "react";
import Slider from "react-slick";

const FeedbackSliderTwo = (props) => {
  //   slider settings
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setSlideIndex(next),
    
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          dots: false,
          arrows: false,
        },
      },
    ],
    ...props
  };

  const feebackSliderContent = [
    {
      id: 1,
      descriptions: `Possível através da migração para o Mercado Livre (desde que o consumidor atenda aos pré requisitos necessários).`,
      name: "Da redução do preço da energia à redução do consumo de energia.",
      country: "Redução do preço",
    },
    {
      id: 2,
      descriptions: `Certainly from my perspective been a great success with WP giving us that enterprises
      level assured quality.`,
      name: "Martin Jonas",
      country: "USA",
    },
    {
      id: 3,
      descriptions: `Certainly from my perspective been a great success with WP giving us that enterprises
      level assured quality.`,
      name: "Martin Jonas",
      country: "USA",
    },
    {
      id: 4,
      descriptions: `Certainly from my perspective been a great success with WP giving us that enterprises
      level assured quality.`,
      name: "Martin Jonas",
      country: "USA",
    },
  ];

  const [slideIndex, setSlideIndex] = useState(0);
  let sliderRef = useRef(null);

  return (
    <>
    
    <h2>Slick Go To</h2>
      <input
        onChange={e => sliderRef.slickGoTo(e.target.value)}
        value={slideIndex}
        type="range"
        min={0}
        max={3}
      />

      
      <Slider
        ref={slider => {
          sliderRef = slider;
        }}
        {...settings}
      >
        
        {feebackSliderContent.map((review) => (
          <div className="item" key={review.id}>

            {/* <div className="testimonial-block-one">
              <div className="icon d-flex align-items-center justify-content-center">
                <img
                  src={require("../../assets/images/icon/icon_15.svg").default}
                  alt="icon"
                />
              </div>
              <blockquote>{review.descriptions}</blockquote>
              <div className="name">
                <span></span>
              </div>
            </div> */}

<div className="row align-items-start pt-60">
      <div className="col-md-4 ms-auto px-5" data-aos="fade-left">
        <div className="text-wrapper">

        <div className="title-style-five white-vr">
          <span className="btn-branco btn-roxo_transp btn-migalha">NOSSAS SOLUÇÕES</span>
          <h2 className="title mt-20">
          {review.name} 
          </h2>
        </div>

        </div>
      </div>
      {/* End col */}

      <div className="col-md-7 offset-1 text-left" data-aos="fade-right">
        <div className="img-container position-relative d-inline-block sm-mt-50">
          
          

            <div className="row">

                <div className="col-12 p-30" data-aos="fade">
                  <div className="menu-column">
                    <ul className="style-none mega-dropdown-list">
                      <li>
                        <span className="menusolucoes-produto_topico verde mb-10">{review.country}</span>
                        <br/>
<p className="produto-pill mt-10">{review.descriptions}</p>
                      </li>                             
                    </ul>
                  </div>
                </div>

                <div className="col-12 p-30" data-aos="fade"></div>

                <div className="col-12 p-30" data-aos="fade">
                  <div className="menu-column">
                    <ul className="style-none mega-dropdown-list">
                    <li>
                        <span className="menusolucoes-produto_topico verde mb-10">Redução do consumo</span>
                        <br/>
<p className="produto-pill mt-10">Auditoria de faturas</p>
<p className="produto-pill">Implantação de medidores (telemetria) para monitoramento identificação de desperdícios</p>
<p className="produto-pill">Elaboração e implantação de projetos de eficiência energética</p>
                      </li>  
                    </ul>
                  </div>
                </div>
            </div>
          
        </div>
      </div>
      {/* End .col */}
    </div>            

            {/* <!-- /.testimonial-block-one --> */}
          </div>
        ))}
      </Slider>



    </>
  );
};

export default FeedbackSliderTwo;
