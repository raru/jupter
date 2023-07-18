import React from "react";

const FeatureSection = () => {
  const featureContent = [
    {
      id: 1,
      title: "Mercado Livre de Energia",
      featureList: [
        "O que é o Mercado Livre de Energia?",
        "Como funciona o Mercado Livre de Energia?",
        "Posso migrar minha empresa para o Mercado Livre de Energia?",
        "Quais as vantagens do Mercado Livre de Energia?",
      ],
      delayAnimation: 0,
    },
    {
      id: 2,
      title: "Mercado Livre de Energia",
      featureList: [
        "O que é o Mercado Livre de Energia?",
        "Como funciona o Mercado Livre de Energia?",
        "Posso migrar minha empresa para o Mercado Livre de Energia?",
        "Quais as vantagens do Mercado Livre de Energia?",
      ],
      delayAnimation: 100,
    },
    {
      id: 3,
      title: "Mercado Livre de Energia",
      featureList: [
        "O que é o Mercado Livre de Energia?",
        "Como funciona o Mercado Livre de Energia?",
        "Posso migrar minha empresa para o Mercado Livre de Energia?",
        "Quais as vantagens do Mercado Livre de Energia?",
      ],
      delayAnimation: 200,
    },
  ];
  return (
    <>
      {featureContent.map((feature) => (
        <div
          className="col-lg-4 col-sm-6 pb-200"
          data-aos="fade-up"
          data-aos-delay={feature.delayAnimation}
          key={feature.id}
        >
          <div className="card-style-three mt-50">
            <h4 className="title roxo">{feature.title}</h4>
            <ul className="style-none">
              {feature.featureList.map((list, i) => (
                <li key={i}>{list}</li>
              ))}
            </ul>
          </div>
          {/* <!-- /.card-style-three --> */}
        </div>
      ))}
    </>
  );
};

export default FeatureSection;
