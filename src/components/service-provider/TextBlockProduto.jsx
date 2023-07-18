import React from "react";
import img1 from "../../assets/images/media/img_22.jpg";

const TextBlock = () => {
  return (
    <div className="row align-items-start">
      <div className="col-md-4 ms-auto px-5" data-aos="fade-left">
        <div className="text-wrapper">

        <div className="title-style-five white-vr">
          <span className="btn-branco btn-branco_transparente btn-roxo_transp">NOSSAS SOLUÇÕES</span>
          <h2 className="title mt-20">
          Da redução do preço da energia à redução do consumo de energia.
          </h2>
        </div>

        </div>
      </div>
      {/* End col */}

      <div className="col-md-8 text-left" data-aos="fade-right">
        <div className="img-container position-relative d-inline-block sm-mt-50">
          
          

            <div className="row">

                <div className="col-12 p-30" data-aos="fade">
                  <div className="menu-column">
                    <ul className="style-none mega-dropdown-list">
                      <li>
                        <span className="verde mb-10">Redução do preço</span>
                        <br/>
<p className="produto-pill mt-10">Possível através da migração para o Mercado Livre (desde que o consumidor atenda aos pré requisitos necessários).</p>
                      </li>                             
                    </ul>
                  </div>
                </div>

                <div className="col-12 p-30" data-aos="fade"></div>

                <div className="col-12 p-30" data-aos="fade">
                  <div className="menu-column">
                    <ul className="style-none mega-dropdown-list">
                    <li>
                        <span className="verde mb-10">Redução do consumo</span>
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
  );
};

export default TextBlock;
