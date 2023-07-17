import React from "react";
import { Link } from "react-router-dom";


const MobileMenuContent = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      {/* <form onClick={handleSubmit} className="search-form">
        <input type="text" placeholder="Search here.." />
        <button>
          <i className="bi bi-search"></i>
        </button>
      </form> */}
      {/* End Search Form */}


      <div className="right-widget d-flex align-items-center d-none d-sm-block">
            {/* <Link to="/sign-in" className="d-flex align-items-center login-btn"> */}
            <Link to="/area-cliente" className="d-flex align-items-center login-btn">
                <span>Área do Cliente</span>
            </Link>
            {/* End .sidebar-nav-button */}
      </div>

      <div className="address-block mt-40">
        <p>
        Address Address Address Address <br />
        Address,  Address
        </p>
          <a href="tel:11.841.5500">11.841.5500</a>
      </div>
      {/* End .address-block */}
    </>
  );
};

export default MobileMenuContent;
