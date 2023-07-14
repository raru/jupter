import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import useProducts from "../../hooks/use-products";
import { cart_product } from "../../redux/features/cart-slice";

const Trending = () => {
  const { products } = useProducts();
  const dispatch = useDispatch();

  const settings = {
    dots: false,
    arrows: true,
    centerPadding: "0px",
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  const allCollection = products.filter((prd) => prd.trending);

  const handleAddToCart = (item) => {
    dispatch(cart_product(item));
  };

  return (
    <>
      <Slider {...settings}>
        {allCollection.map((item) => (
          <div className="item" key={item.id}>
            <div className="product-block-two">
              <div className="img-holder">
                <Link
                  to={`/product-details/${item.id}`}
                  className="d-flex align-items-center justify-content-center h-100"
                >
                  <img
                    src={item.img}
                    alt="product"
                    className="product-img tran4s"
                  />
                </Link>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="cart-icon"
                  title="Add To Cart"
                >
                  <i className="bi bi-cart-check"></i>
                </button>
              </div>
              {/* <!-- /.img-holder --> */}

              <div className="product-meta">
                <div className="d-lg-flex align-items-center justify-content-between">
                  <Link
                    to={`/product-details/${item.id}`}
                    className="product-title"
                  >
                    {item.title}
                  </Link>
                  {item.ratings}
                </div>
                <div className="price">${item.price}</div>
              </div>
              {/* <!-- /.product-meta --> */}
            </div>
            {/* <!-- /.product-block-two --> */}
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Trending;
