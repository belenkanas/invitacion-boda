// Todo lo que cambiás para tu boda está acá y en invitados.js
export const boda = {
  novios: "Ana y Martín",
  fecha: "2027-03-20T18:00:00-03:00",
  fechaTexto: "Sábado 20 de marzo de 2027",
  ceremonia: {
    lugar: "Parroquia San José",
    direccion: "Calle Ejemplo 1234, Montevideo",
    hora: "18:00",
    mapa: "https://maps.google.com/?q=Montevideo",
  },
  fiesta: {
    lugar: "Quinta Los Aromos",
    direccion: "Camino Ejemplo km 5, Canelones",
    hora: "20:30",
    mapa: "https://maps.google.com/?q=Canelones",
  },
  vestimenta: "Elegante sport. Evitá el blanco.",
  // Archivos dentro de public/fotos/
  fotos: ["foto1.jpg", "foto2.jpg", "foto3.jpg"],
  // Se lee de la variable VITE_WHATSAPP (ver .env.example)
  whatsapp: import.meta.env.VITE_WHATSAPP || "",
};
