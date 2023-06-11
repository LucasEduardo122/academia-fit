import React, { useRef } from "react";
import "./Join.css";
const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    alert("Desativado");
  };

  return (
    <div className="Join" id="join-id">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">PRONTO PARA</span>
          <span> SUBIR DE NÍVEL</span>
        </div>
        <div>
          <span>SEU CORPO</span>
          <span className="stroke-text"> CONOSCO?</span>
        </div>
      </div>

      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input
            type="email"
            name="user_email"
            placeholder="Insira seu e-mail"
          />
          <button className="btn btn-j">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
