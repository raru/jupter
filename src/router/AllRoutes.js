import React from "react";
import { Routes, Route } from "react-router-dom";

// All Home Version
import ScrollTopBehaviour from "../components/elements/ScrollTopBehaviour";
import QuemSomos from "../pages/home-pages/QuemSomos";
import Solucao from "../pages/home-pages/Solucao";
import Analise from "../pages/home-pages/Analise";
import Carreira from "../pages/home-pages/Carreira";
import FaleConosco from "../pages/home-pages/FaleConosco";
import Glossario from "../pages/home-pages/Glossario";
import Home from "../pages/home-pages/Home";
import Produto from "../pages/home-pages/Produto";
import NotFound from "../pages/NotFound";
import ComingSoon from "../pages/ComingSoon";
import SignIn from "../components/service-provider/SignIn";
import SignUp from "../components/service-provider/SignUp";
import AgencyMinimal from "../pages/home-pages/AgencyMinimal";

// All Elements  dropdown Heading inner pages
import UiHeaderV1 from "../pages/inner-pages/elements/header/UiHeaderV1";

// All Elements  dropdown Menu inner pages
import UiMenuV1 from "../pages/inner-pages/elements/basic/UiMenuV1";

// All Pages dropdown inner pages
import AboutUsV1 from "../pages/inner-pages/pages/essentials/AboutUsV1";
import TeamV1 from "../pages/inner-pages/pages/essentials/TeamV1";


const AllRoutes = () => {
  return (
    <>
      <ScrollTopBehaviour />
      <Routes>
        {/* All home */}
        <Route path="/" element={<Home />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/solucao" element={<Solucao />} />
        <Route path="/analise" element={<Analise />} />
        <Route path="/carreira" element={<Carreira />} />
        <Route path="/fale-conosco" element={<FaleConosco />} />
        <Route path="/produto" element={<Produto />} />
        <Route path="/glossario" element={<Glossario />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/agency" element={<AgencyMinimal />} />

        {/* elements dropdown Header pages */}
        <Route path="/ui-header-v1" element={<UiHeaderV1 />} />

        {/* elements dropdown Basic pages */}
        <Route path="/ui-menu-v1" element={<UiMenuV1 />} />

        {/* pages dropdown Essentials pages */}
        {/* Essentials */}
        <Route path="/about-v1" element={<AboutUsV1 />} />
        <Route path="/team-v1" element={<TeamV1 />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />


        {/* <Route path="*" element={<NotFound />} /> */}
        <Route path="*" element={<Home />} />

      </Routes>
    </>
  );
};

export default AllRoutes;
