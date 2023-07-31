import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const FromStyleOne = ({ className = "theme-btn-one-roxo" }) => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w7z9kgf', 'template_6s8rpw4', form.current, 'OO5_zj_97Ev4i-GVE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      alert('Envio feito com sucesso!')
  };

  return (
    <>




<form ref={form} onSubmit={sendEmail}>
        <div className="row controls">
          <div className="col-12">
            <div className="input-group-meta form-group mb-25">
              <label>Nome Completo*</label>
              <input
                type="text"
                placeholder="Seu nome"
                name="from_name" 
                required
              />
              <div className="help-block with-errors"></div>
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <div className="input-group-meta form-group mb-25">
              <label>Telefone*</label>
              <input
                type="text"
                placeholder="+55 DDD 1234-4321"
                name="from_telefone"
                required
              />
              <div className="help-block with-errors"></div>
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <div className="input-group-meta form-group mb-25">
              <label>E-mail*</label>
              <input
                type="email"
                placeholder="seuemail@gmail.com"
                name="from_email"
                required
              />
              <div className="help-block with-errors"></div>
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <div className="input-group-meta form-group mb-35">
            <label>Mensagem*</label>
              <textarea
                placeholder="Mensagem*"
                name="message"
                required
              ></textarea>
              <div className="help-block with-errors"></div>
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <button type="submit"  className={`theme-btn-one  ripple-btn w-100 ${className}`}>
              Enviar
            </button >
          </div>
          {/* End .col */}
        </div>
</form>

    </>
  );
};

export default FromStyleOne;
