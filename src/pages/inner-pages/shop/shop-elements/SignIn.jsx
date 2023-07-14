import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../../../assets/images/assets/ils_05.png";
import LoginForm from "../../../../components/common/form/LoginForm";
import Seo from "../../../../components/common/seo/Seo";

const SignIn = () => {
  return (
    <>
      <Seo title="Sign In" />
      {/* End Seo Related data */}

      <div className="user-data-page clearfix d-md-flex">
        <div
          className="illustration-wrapper d-none d-md-flex align-items-center justify-content-between flex-column"
          style={{ background: "#F9F5F0" }}
        >
          <div className="row">
            <div className="col-xxl-8 col-xl-11 m-auto">
              <blockquote>
                "It is better to fail in originality than to succeed in
                imitation."
              </blockquote>
              <span className="bio">— Herman Melville</span>
            </div>
          </div>
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
                    require("../../../../assets/images/logo/vCamp_01.svg")
                      .default
                  }
                  alt=""
                  width="127"
                />
              </Link>
            </div>
            <Link to="/" className="go-back-button">
              Go to home
            </Link>
          </div>
          {/* logo and hom route */}

          <div className="user-data-form mt-80 lg-mt-50">
            <h2 className="font-recoleta">
              Hi <span>buddy</span>, welcome <br /> Back!
            </h2>
            <p className="header-info pt-20 pb-50 lg-pb-30">
              Still don't have an account? <Link to="/sign-up">Sign up</Link>
            </p>

            <LoginForm />
            <p className="text-center copyright-text">
              Copyright @2022 vcamp inc.
            </p>
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
