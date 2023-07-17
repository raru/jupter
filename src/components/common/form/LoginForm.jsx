import React, { useState } from "react";

const LoginForm = () => {
  const [password, setPassword] = useState(false);
  const passwordHandler = () => setPassword(!password);

  return (
    <form>
      <div className="row">
        <div className="col-12">
          <div className="input-group-meta mb-30">
            <label>E-mail</label>
            <input type="email" placeholder="seuemail@gmail.com" required />
          </div>
        </div>

        <div className="col-12">
          <div className="input-group-meta mb-25">
            <label>Senha</label>
            <input
              type={password ? "password text" : "password"}
              placeholder="insira sua senha"
              className="pass_log_id"
              required
            />
            <span className="placeholder_icon">
              <span
                className={password ? "passVicon eye-slash" : "passVicon"}
                onClick={passwordHandler}
              >
                <img
                  src={
                    require("../../../assets/images/icon/icon_67.svg").default
                  }
                  alt="icon"
                />
              </span>
            </span>
          </div>
        </div>

        <div className="col-12">
          <div className="agreement-checkbox d-flex justify-content-between align-items-center">
            <div>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">manter logado</label>
            </div>
            <a href="#">Esqueci a senha?</a>
          </div>
          {/* <!-- /.agreement-checkbox --> */}
        </div>

        <div className="col-12">
          <button className="theme-btn-one w-100 mt-50 mb-50 btn-roxo">Login</button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
