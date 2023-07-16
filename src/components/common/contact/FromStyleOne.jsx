import React from "react";

const FromStyleOne = ({ className = "theme-btn-one-roxo" }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <form onClick={handleSubmit}>
        <div className="row controls">
          <div className="col-12">
            <div className="input-group-meta form-group mb-25">
              <label>Nome Completo*</label>
              <input
                type="text"
                placeholder="Seu nome"
                name="name"
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
                name="email"
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
                name="email"
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
            <button className={`theme-btn-one  ripple-btn w-100 ${className}`}>
              Enviar
            </button>
          </div>
          {/* End .col */}
        </div>
      </form>
    </>
  );
};

export default FromStyleOne;
