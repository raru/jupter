import React from "react";
import icon1 from "../../assets/images/icon/quem_icon-varejista.svg";
import icon2 from "../../assets/images/icon/quem_icon-mercado.svg";
import icon3 from "../../assets/images/icon/quem_icon-hotel.svg";
 
const FeatureSectionTwo = () => {
  const featureContent = [
    {
      id: 1,
      icon: icon1,
      title: "Rede de comércio varejista",
      descriptions: `Economia de mais de`,
      delayAnimationTime: 0,
    },
    {
      id: 2,
      icon: icon2,
      title: "Rede de supermercados",
      descriptions: `Economia de mais de`,
      delayAnimationTime: 100,
    },
    {
      id: 3,
      icon: icon3,
      title: "Rede de hotéis",
      descriptions: `Economia de mais de`,
      delayAnimationTime: 200,
    },
  ];

  return (
    <>
      {featureContent.map((item) => (
        <div
          className="col-lg-4 col-sm-6"
          data-aos="fade-up"
          data-aos-delay={item.delayAnimationTime}
          key={item.id}
        >
          <div className="card-style-two">
            <div className="icon d-flex align-items-center justify-content-center">
              <img src={item.icon} alt="" className="tran3s" />
            </div>
            <h4 className="verde">{item.title}</h4>
            <p className="pe-xxl-5">{item.descriptions}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default FeatureSectionTwo;
