import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/assets/ils_02.png";
import video from '../../assets/images/media/video.mp4'

const TextBlockVideo = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
    {/* End ModalVideo */}
    <div className="row align-items-center">
    <div className="col-xxl-5 col-lg-5" data-aos="fade-left">
    <div className="text-wrapper ps-xxl-5 pt-0 md-pb-40">

    <div className="title-style-five white-vr">
    <h2 className="title mt-20">
    A Jupter Energy é uma empresa que já está no mercado de energia há 
    <span className="roxo"> mais de 6 anos. </span>
    </h2>
    </div>
    <p className="mt-30">
    E nesse tempo, atendemos clientes de diversos setores, como industrial, hoteleiro, comércio varejista, shopping centers, supermercados, entre outros, sempre com excelência no atendimento, oferecendo soluções personalizadas e ferramentas online para o acompanhamento dos dados de consumo de energia em tempo real.
    </p>
    </div>
    </div>
    {/* End .col */}
    
    <div className="col-xxl-6 col-lg-4 offset-1" data-aos="fade-right">
    <div className="logo_mask mt-n6">
<div className="video_holder">
    <video width="960" height="540" controls autoPlay loop muted>
      <source src={video} type="video/mp4"/>
    </video>
  </div>
</div>
    </div>
    {/* End .col */}
    

    <div className="col-8" data-aos="fade">
    <div className="text-wrapper ps-xxl-5 pt-0 md-pb-40 mt-30">
    <p><span className="roxo">Tudo isso, porque enxergamos a energia elétrica como um insumo essencial, mas também um aliado poderoso na hora de reduzir os custos do seu negócio.</span>
    Para isso, identificamos padrões no consumo de energia, criamos indicadores de performance e rotinas de acompanhamento a fim de alcançar melhorias operacionais. Ou melhor, reduzir o possível desperdício da energia elétrica.
    A Jupter Energy é muito mais do que uma consultoria e comercializadora de energia elétrica, pois possui um time inteiramente dedicado a buscar soluções e resultados que promovam a expansão dos negócios de todos os seus clientes.
    </p>
    </div>
    </div>        
    </div>
    </>
    );
  };
  
  export default TextBlockVideo;
  