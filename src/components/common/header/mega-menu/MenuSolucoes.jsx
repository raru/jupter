import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";

import Slider from "react-slick";

function refreshPage() { window. location. reload(false); }


const MenuSolucoes = (props) => {


// const location = useLocation();
// const myData = location.state;
// console.log(myData);


const initialslide = useLocation();
const myData = initialslide.state;
console.log(myData);
const { initialSlide = '0' } = initialslide.state || {}
  // console.log(initialslide)

  //   slider settings
    const settings = {
      dots: true,
      arrows: false,
      // myData,
      initialSlide: myData,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
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
            dots: true,
            arrows: false,
          },
        },
      ],
      ...props
    };
  

    const feebackSliderContent = [
      {
        id: 0,
        nome: "",
        chamada: "Da redução do preço da energia à redução do consumo de energia.",
        produto_topic_1: "Redução do preço",
        produto_topic_1_hide: "",
        descriptions: `Possível através da migração para o Mercado Livre (desde que o consumidor atenda aos pré requisitos necessários).`,
        produto_topic_2: "Redução do consumo",
        produto_topic_2_hide: "",
        descriptions2: `Auditoria de faturas`,
        descriptions3: `Implantação de medidores (telemetria) para monitoramento identificação de desperdícios.`,
        descriptions3_hide:'',        
        descriptions4: `Elaboração e implantação de projetos de eficiência energética.`,  
        descriptions4_hide:'',
      },
      {
        id: 1,
        nome: "Consultoria Energética",
        chamada: "Consultoria Energética",
        produto_topic_1: "",
        produto_topic_1_hide: "hide",    
        descriptions: `Levantamento de todas as oportunidades para economia com energia elétrica.`,
        produto_topic_2: "",
        produto_topic_2_hide: "hide",
        descriptions2: `Auditoria das faturas de energia para identificar erros de cobrança e pagamento de multas.`,
        descriptions3: ``,
        descriptions3_hide:'hide',        
        descriptions4: ``,  
        descriptions4_hide:'hide',
      },
      {
        id: 2,
        nome: "Soluções de gestão no mercado livre",
        chamada: "Soluções de gestão no mercado livre",
        produto_topic_1: "Soluções de gestão no mercado livre",
        produto_topic_1_hide: "", 
        descriptions: `Condução do processo de migração do mercado regulado (ACR) para o mercado livre (ACL).`,
        produto_topic_2: "",
        produto_topic_2_hide: "hide",
        descriptions2: `Definição de estratégia de compra e venda de energia no curto e longo prazo.`,
        descriptions3: `Realização do balanço energético.`,
        descriptions3_hide:'',        
        descriptions4: `Identificação de novas oportunidades.`,  
        descriptions4_hide:'',
      },
      {
        id: 3,
        nome: "Soluções de gestão no mercado cativo",
        chamada: "Soluções de gestão no mercado cativo",
        produto_topic_1: "Gestão de consumidores do mercado cativo",
        produto_topic_1_hide: "", 
        descriptions: `Monitoramento em tempo real do consumo de energia e criação de indicadores de performance.`,
        produto_topic_2: "",
        produto_topic_2_hide: "hide",
        descriptions2: `Alertas e acompanhamento dos gastos com energia elétrica.`,
        descriptions3: `Criação de ferramentas personalizadas para cada negócio.`,
        descriptions3_hide:'',        
        descriptions4: `Identificação de oportunidades de redução de gastos com energia elétrica que podem ou não envolver investimentos.`,  
        descriptions4_hide:'',
      },
      {
        id: 4,
        nome: "Projetos de eficiência energética",
        chamada: "Projetos de eficiência energética",
        produto_topic_1: "Para clientes no ACR e ACL",
        produto_topic_1_hide: "", 
        descriptions: `Implantação de sistema de gestão e monitoramento de consumo de energia elétrica através de plataforma online.`,
        produto_topic_2: "",
        produto_topic_2_hide: "hide",
        descriptions2: `Elaboração de projetos de substituição de equipamentos para melhoria de eficiência energética.`,
        descriptions3: `Análise criteriosa da operação para identificar oportunidades de economia com ou sem investimentos adicionais.`,
        descriptions3_hide:'',        
        descriptions4: ``,  
        descriptions4_hide:'hide',
      },   
      {
        id: 5,
        nome: "Projetos de geração de energia",
        chamada: "Projetos de geração de energia",
        produto_topic_1: "",
        produto_topic_1_hide: "hide",    
        descriptions: `Rede de profissionais dedicada para realização de estudos de viabilidade.`,
        produto_topic_2: "",
        produto_topic_2_hide: "hide",
        descriptions2: `Assessoria na estruturação de financiamento destes projetos, através de capital próprio ou de terceiro.`,
        descriptions3: ``,
        descriptions3_hide:'hide',        
        descriptions4: ``,  
        descriptions4_hide:'hide',
      },           
    ];
  
    const [slideIndex, setSlideIndex] = useState(0);
    let sliderRef = useRef(null);

    return (
      <>
            <div className="row menusolucoes">
{/* slice para começar a partir do id:1 */}
{feebackSliderContent.slice(1).map((item, id) => (

                <div key={item + id} className="w20 p-0" data-aos="fade-right" onClick={e => sliderRef.slickGoTo(item.id)}  >
                  <div className="menu-column">
                    <ul className="style-none mega-dropdown-list">
                      <li>
                        {/* Consultoria energética */}
                        {item.nome} 
                        {/* {item.id} */}
                        </li>             
                        <img
                        src={require("../../../../assets/images/icon/nav_icon-off.svg").default}
                        alt={item.nome}
                        width="41"
                        className="off"
                        />
                        <img
                        src={require("../../../../assets/images/icon/nav_icon-on.svg").default}
                        alt={item.nome}
                        width="41"
                        className="on"
                        />
                    </ul>
                  </div>
                </div>
            ))}
            </div>


{/* <input
  onChange={e => sliderRef.slickGoTo(e.target.value)}
  value={slideIndex}
  type="range"
  min={0}
  max={3}
/> */}


<Slider
  ref={slider => {
    sliderRef = slider;
  }}
  {...settings}
>
  
  {feebackSliderContent.map((item) => (
    <div className="item" key={item.id}>



<div id="nossas-solucoes" className="row align-items-start pt-30">
<div className="col-md-4 ms-auto px-5" data-aos="fade-left">
  <div className="text-wrapper">

  <div className="title-style-five white-vr">
    <span className="btn-branco btn-roxo_transp btn-migalha">NOSSAS SOLUÇÕES</span>
    <h2 className="title mt-20">
    {item.chamada} 
    </h2>
  </div>

  </div>
</div>
{/* End col */}

<div className="col-md-7 offset-1 text-left" data-aos="fade-right">
  <div className="img-container position-relative d-inline-block sm-mt-50">

      <div className="row">
          <div className="col-12 p-30">
            <div className="menu-column">
              <ul className="style-none mega-dropdown-list">
                <li>
<span className={`menusolucoes-produto_topico verde mb-10 ${item.produto_topic_1_hide}`}>
                    {item.produto_topic_1}</span>
                  <br/>
<p className="produto-pill mt-10">{item.descriptions}</p>
{/* <span className="menusolucoes-produto_topico verde mb-10">
                    {item.produto_topic_2}   </span>
                  <br/>               
<p className="produto-pill mt-10">{item.descriptions2}</p>
<p className="produto-pill mt-10">{item.descriptions3}</p>
<p className="produto-pill">{item.descriptions4}</p> */}
                </li>                             
              </ul>
            </div>
          </div>

          <div className="col-12 p-0"></div>

          <div className="col-12 pt-10">
            <div className="menu-column">
              <ul className="style-none mega-dropdown-list">
              <li>
                  <span className={`menusolucoes-produto_topico verde mb-10 ${item.produto_topic_2_hide}`}>
                  {item.produto_topic_2}</span>
                  <br/>       
<p className="produto-pill mt-10">{item.descriptions2}</p>
<p className={`produto-pill mt-10 ${item.descriptions3_hide}`}>{item.descriptions3}</p>
<p className={`produto-pill ${item.descriptions4_hide}`}>{item.descriptions4}</p>
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

export default MenuSolucoes;
