import img1 from "../assets/images/assets/analise.png";


const productData = [
  {
    id: 1,
    img: img1,
    title: "Quilted Gilet With Hood",
    trending:true,
    serial:new Date().getTime(),
    product_v1:true,
    ratings: (
      <>
        <ul className="style-none d-flex rating">
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star"></i>
          </li>
        </ul>
      </>
    ),
    price: 17.99,
  },
  
]

export default productData;