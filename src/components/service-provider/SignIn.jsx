import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/assets/quem_destaque@2x.png";
import LoginForm from "../common/form/LoginForm";
import Seo from "../common/seo/Seo";

const SignIn = () => {
  return (
    <>
      <Seo title="Sign In" />
      {/* End Seo Related data */}

      <div className="user-data-page clearfix d-md-flex">
        <div
          className="illustration-wrapper d-none d-md-flex align-items-center justify-content-between flex-column"
          style={{ background: "#825BFF" }}
        >
          <div className="illustration-holder">
            <img
              src={img1}
              alt="illustration"
              className="illustration ms-auto"
            />
          </div>
        </div>
        {/* <!-- /.illustration-wrapper --> */}

        <div className="form-wrapper">
          <div className="d-flex justify-content-between align-items-center">
            <div className="logo">
              <Link to="/">
                <img
                  src={
                    require("../../assets/images/logo/jupter_logotipo.svg")
                      .default
                  }
                  alt=""
                  width="127"
                />
              </Link>
            </div>
            <Link to="/" className="go-back-button">
              Voltar
            </Link>
          </div>
          {/* logo and hom route */}

          <div className="user-data-form mt-80 lg-mt-50">
            <h2>
              Olá <span className="verde">cliente</span>, acesse <br /> seu painel!
            </h2>
            <p className="header-info pt-20 pb-50 lg-pb-30">
              Ainda não tem conta? <Link to="/">Cadastre-se</Link>
            </p>

            <LoginForm />

            {/* End form */}
          </div>
          {/* End user-data-from */}
        </div>
        {/* <!-- /.form-wrapper --> */}
      </div>
      {/* <!-- /.user-data-page --> */}
    </>
  );
};

export default SignIn;
