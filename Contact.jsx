import React from "react";
import { useNavigate } from "react-router";

const Contact = () => {
  const navigate = useNavigate();

  return (
      <>
      <h1>Contacto</h1>
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
