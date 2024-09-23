import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1>Mi página web</h1>
      <Link to={"../contact"}>Ver Contacto</Link>
      <Link to={"../about"}>Acerca de mí</Link>
    </div>
  );
};

export default Home;
