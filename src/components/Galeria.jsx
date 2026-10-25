export default function Galeria({ fotos }) {
  const base = import.meta.env.BASE_URL;
  return (
    <section className="bloque">
      <h2>Nuestra historia</h2>
      <div className="galeria">
        {fotos.map((f) => (
          <img
            key={f}
            src={`${base}fotos/${f}`}
            alt=""
            loading="lazy"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        ))}
      </div>
    </section>
  );
}
