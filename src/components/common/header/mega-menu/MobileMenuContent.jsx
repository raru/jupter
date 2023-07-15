import React from "react";

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

      <div className="address-block mt-40">
        <h4 className="title">Endereçø</h4>
        <p>
        Address Address Address Address <br />
        Address,  Address
        </p>
        <p>
          Fale Conosco <br />
          <a href="tel:11.841.5500">11.841.5500</a>
        </p>
      </div>
      {/* End .address-block */}
    </>
  );
};

export default MobileMenuContent;
