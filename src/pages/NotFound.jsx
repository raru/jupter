import notFoundImg from "../assets/images/assets/ils_07.png";
import { Link } from "react-router-dom";
import Seo from "../components/common/seo/Seo";

function NotFound() {
  return (
    <>
      <Seo title="jupter - 404 " />
      {/* End Seo Related data */}

      <div className="error-page d-flex align-items-center">
        <div className="content-wrapper">
          <h6>404</h6>
          <h1 className="font-recoleta">Página não encontrada </h1>
          <p className="text-lg">
            Não perca energia procurando <br /> algo que não está aqui.
          </p>
          <Link to="/" className="theme-btn-four">
            HOME
          </Link>
        </div>
        {/* <!-- /.content-wrapper --> */}
        <img src={notFoundImg} alt="" className="shapes illustration" />
      </div>
      {/* <!-- /.error-page --> */}
    </>
  );
}

export default NotFound;
