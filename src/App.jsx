import { useState } from "react";
import { boda } from "./config.js";
import { invitados } from "./invitados.js";
import Sobre from "./components/Sobre.jsx";
import Cuenta from "./components/Cuenta.jsx";
import Rsvp from "./components/Rsvp.jsx";
import Galeria from "./components/Galeria.jsx";

const codigo = new URLSearchParams(window.location.search).get("f");
const invitado = invitados[codigo] ?? null;

export default function App() {
  const [abierto, setAbierto] = useState(false);

  if (!abierto) {
    return <Sobre nombre={invitado?.nombre} onAbrir={() => setAbierto(true)} />;
  }

  return (
    <main className="invitacion">
      <header className="portada">
        <p className="para">{invitado ? `Para ${invitado.nombre}` : "Estás invitado"}</p>
        <h1>{boda.novios}</h1>
        <p className="fecha">{boda.fechaTexto}</p>
      </header>

      <Cuenta fecha={boda.fecha} />

      <section className="bloque">
        <h2>Dónde y cuándo</h2>
        <div className="lugares">
          {[
            ["Ceremonia", boda.ceremonia],
            ["Fiesta", boda.fiesta],
          ].map(([titulo, l]) => (
            <article key={titulo}>
              <h3>{titulo}</h3>
              <p className="hora">{l.hora} h</p>
              <p>{l.lugar}</p>
              <p className="dir">{l.direccion}</p>
              <a href={l.mapa} target="_blank" rel="noopener noreferrer">Ver en el mapa</a>
            </article>
          ))}
        </div>
      </section>

      <Galeria fotos={boda.fotos} />

      <section className="bloque">
        <h2>Vestimenta</h2>
        <p>{boda.vestimenta}</p>
      </section>

      <Rsvp invitado={invitado} />
    </main>
  );
}
