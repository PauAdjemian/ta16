import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

const Contact = () => {
  const navigate = useNavigate();

  return (
      <>
      <h1>Acerca de Mí</h1>
      <button
          onClick={() => {
              navigate("/");
          } } >
            Volver a página inicial
          </button>
    </>
  );
};

export default Contact;
