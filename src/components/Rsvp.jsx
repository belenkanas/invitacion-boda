import { boda } from "../config.js";

export default function Rsvp({ invitado }) {
  const mensaje = invitado
    ? `Hola! Somos ${invitado.nombre}. Confirmamos asistencia (hasta ${invitado.lugares} lugares).`
    : "Hola! Quiero confirmar mi asistencia a la boda.";
  const url = `https://wa.me/${boda.whatsapp}?text=${encodeURIComponent(mensaje)}`;

  return (
    <section className="bloque rsvp">
      <h2>¿Nos acompañás?</h2>
      {invitado && <p>Tenés {invitado.lugares} {invitado.lugares === 1 ? "lugar reservado" : "lugares reservados"}.</p>}
      {boda.whatsapp ? (
        <a className="boton" href={url} target="_blank" rel="noopener noreferrer">
          Confirmar por WhatsApp
        </a>
      ) : (
        <p className="aviso">Falta configurar VITE_WHATSAPP (ver .env.example).</p>
      )}
    </section>
  );
}
