import React from "react";
import { Link } from "react-router-dom";


const FooterMenuListTwo = ({ className = "" }) => {
  const footerMenuContent = [
    {
      id: 1,
      title: "Links",
      colClass: "col-lg-2",
      list: [
        { name: "Quem somos", routeLink: "/quem-somos" },
        { name: "Nossas Soluções", routeLink: "/solucoes" },
        { name: "Faça sua análise", routeLink: "/analise" },
        // { name: "Glossário", routeLink: "/" },
        { name: "Carreira", routeLink: "/carreira" },
        { name: "Fale conosco", routeLink: "/fale-conosco" },
      ],
    },
  ];

  return (
    <>
      {footerMenuContent.map((menuItem) => (
        <div
          className={`col-lg-2 col-md-3 col-sm-6 offset-md-4`}
          key={menuItem.id}
        >
          <ul className="footer-list style-none">
            {menuItem.list.map((list, i) => (
              <li key={i}>
                <Link to={list.routeLink}>{list.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="col-lg-2 xs-mt-30 xs-mb-30 sm-mt-0 sm-mb-0 col-md-3">
            <Link to="/sign-in" className="btn-roxo">
              <span>Área do Cliente</span>
            </Link>
      </div>
    </>
  );
};

export default FooterMenuListTwo;
