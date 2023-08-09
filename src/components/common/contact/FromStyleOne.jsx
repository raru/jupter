import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';


const FromStyleOne = ({ className = "theme-btn-one-roxo" }) => {

  const [formValues, setFormValues] = useState({
    formNome: "",
    formTel: "",
    formEmail: "",
    formMensagem: ""
  });
  const [records, setRecords] = useState([]);
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    setRecords([...records, formValues]);
    setFormValues({
      formNome: "",
      formTel: "",
      formEmail: "",
      formMensagem: ""
    });    

    emailjs.sendForm('service_w7z9kgf', 'template_6s8rpw4', form.current, 'OO5_zj_97Ev4i-GVE')
    .then((result) => {
      console.log(result.text);
      Swal.fire({
        icon: 'success',
        title: 'Mensagem Enviada'
      })
    }, (error) => {
      console.log(error.text);
      Swal.fire({
        icon: 'error',
        title: 'Ooops, algo deu errado',
        text: error.text,
      })

      e.target.reset()

    });
   
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

                value={formValues.formNome}
                onChange={(e) =>
                  setFormValues({ ...formValues, formNome: e.target.value })
                }                
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

                value={formValues.formTel}
                onChange={(e) =>
                  setFormValues({ ...formValues, formTel: e.target.value })
                }                
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

                value={formValues.formEmail}
                onChange={(e) =>
                  setFormValues({ ...formValues, formEmail: e.target.value })
                }                     
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

                value={formValues.formMensagem}
                onChange={(e) =>
                  setFormValues({ ...formValues, formMensagem: e.target.value })
                }                     
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
