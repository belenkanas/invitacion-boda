import { useEffect, useState } from "react";

function calcular(fecha) {
  const ms = Math.max(0, new Date(fecha) - new Date());
  return {
    dias: Math.floor(ms / 86400000),
    horas: Math.floor((ms / 3600000) % 24),
    minutos: Math.floor((ms / 60000) % 60),
    segundos: Math.floor((ms / 1000) % 60),
  };
}

export default function Cuenta({ fecha }) {
  const [t, setT] = useState(() => calcular(fecha));

  useEffect(() => {
    const id = setInterval(() => setT(calcular(fecha)), 1000);
    return () => clearInterval(id);
  }, [fecha]);

  return (
    <section className="cuenta" aria-label="Cuenta regresiva">
      {Object.entries(t).map(([unidad, valor]) => (
        <div key={unidad}>
          <strong>{String(valor).padStart(2, "0")}</strong>
          <span>{unidad}</span>
        </div>
      ))}
    </section>
  );
}
