// components/WhatsappButton.jsx
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = ({ propiedad }) => {
  const numero = "+573007901757";
  const mensaje = `Hola, estoy interesado(a) en la propiedad "${
    propiedad.nombre
  }" ubicada en ${
    propiedad.ubicacion
  }, con un precio de $${new Intl.NumberFormat().format(
    propiedad.precio
  )}. ¿Está disponible?`;

  const url = `https://wa.me/${numero.replace(
    /\D/g,
    ""
  )}?text=${encodeURIComponent(mensaje)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
    >
      <FaWhatsapp size={24} />
    </a>
  );
};

export default WhatsappButton;
