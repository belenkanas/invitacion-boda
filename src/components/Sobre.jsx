import { useState } from "react";

export default function Sobre({ nombre, onAbrir }) {
  const [abriendo, setAbriendo] = useState(false);

  const abrir = () => {
    if (abriendo) return;
    setAbriendo(true);
    setTimeout(onAbrir, 1500);
  };

  return (
    <div className="escena">
      <div className={`sobre ${abriendo ? "abriendo" : ""}`}>
        <div className="carta">
          <span>{nombre ? `Para ${nombre}` : "Estás invitado"}</span>
        </div>
        <div className="frente" />
        <div className="tapa" />
        <button className="sello" onClick={abrir} aria-label="Abrir la invitación">
          <span>♥</span>
        </button>
      </div>
      <p className="pista">{abriendo ? "" : "Tocá el sello para abrir"}</p>
    </div>
  );
}
