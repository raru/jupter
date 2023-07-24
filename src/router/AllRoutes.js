import React from "react";
import { Routes, Route } from "react-router-dom";

// All Home Version
import ScrollTopBehaviour from "../components/elements/ScrollTopBehaviour";
import QuemSomos from "../pages/home-pages/QuemSomos";
// import Solucao from "../pages/home-pages/Solucao";
import Analise from "../pages/home-pages/Analise";
import Carreira from "../pages/home-pages/Carreira";
import FaleConosco from "../pages/home-pages/FaleConosco";
import Glossario from "../pages/home-pages/Glossario";
import Home from "../pages/home-pages/Home";
import Solucoes from "../pages/home-pages/Solucoes";
import NotFound from "../pages/NotFound";
import ComingSoon from "../pages/ComingSoon";
import SignIn from "../components/service-provider/SignIn";
import SignUp from "../components/service-provider/SignUp";


const AllRoutes = () => {
  return (
    <>
      <ScrollTopBehaviour />
      <Routes>
        {/* All home */}
        <Route path="/" element={<Home />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        {/* <Route path="/solucao" element={<Solucao />} /> */}
        <Route path="/analise" element={<Analise />} />
        <Route path="/carreira" element={<Carreira />} />
        <Route path="/fale-conosco" element={<FaleConosco />} />
        <Route path="/solucoes" element={<Solucoes />} />

        <Route path="/glossario" element={<Glossario />} />
        <Route path="/coming-soon" element={<ComingSoon />} />

        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />

        <Route path="/404" element={<NotFound />} />

        {/* <Route path="*" element={<NotFound />} /> */}
        <Route path="*" element={<Home />} />


      </Routes>
    </>
  );
};

export default AllRoutes;
