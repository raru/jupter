import React from "react";
import { Link } from "react-router-dom";
import useProducts from "../../../../hooks/use-products";

const ProductV2 = () => {
  const {products} = useProducts();
  const productItems = products.filter(prd => prd.product_v1)
  return (
    <>
      {productItems.map((item) => (
        <div
          className="col-xl-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay={item.animationTime}
          key={item.id}
        >
          <div className="product-block-three mb-45">
            <div className="img-holder">
              <Link
                to={`/product-details/${item.id}`}
                className="d-flex align-items-center justify-content-center h-100"
              >
                <img
                  src={item.img}
                  alt="filtering product"
                  className="product-img tran4s"
                />
              </Link>
              <div className={item.tagClass}>{item.tag}</div>
            </div>
            {/* <!-- /.img-holder --> */}
            <div className="product-meta">
              <ul className="style-none d-flex justify-content-center rating">
                {item.ratings}
              </ul>
              <Link to={`/product-details/${item.id}`} className="product-title">
                {item.title}
              </Link>
              <div className="price">${item.price}</div>
            </div>
            {/* <!-- /.product-meta --> */}
          </div>
          {/* <!-- /.product-block-two --> */}
        </div>
      ))}
    </>
  );
};

export default ProductV2;
