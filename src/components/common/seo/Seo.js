import React from "react";
import { Helmet } from "react-helmet-async";

const Seo = ({ title }) => {
  return (
    <Helmet>
      <title>{title} || jupter energy - soluções em energia. energia em soluções.</title>
      <meta
        name="description"
        content=" Uma empresa pensada para cuidar da energia da sua empresa, com soluções personalizadas. E sempre cheias de energia."
      />
      <link rel="canonical" href="https://jupter.com" />
      <meta property="og:title" content="soluções em energia. energia em soluções" />
    </Helmet>
  );
};

export default Seo;
