import { FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contacto() {
  return (
    <section className="py-16 px-6 bg-white text-center">
      <h3 className="text-3xl font-semibold text-blue-700 mb-8">Contáctame</h3>
      <p className="max-w-xl mx-auto text-gray-700 mb-6">
        ¿Tienes preguntas o quieres agendar una cita? Estoy aquí para ayudarte.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-blue-600 mb-10">
        <div className="flex items-center gap-3">
          <FaPhone className="text-2xl" />
          <span className="text-lg">+57 300 000 0000</span>
        </div>
        <div className="flex items-center gap-3">
          <FaEnvelope className="text-2xl" />
          <span className="text-lg">cristian@email.com</span>
        </div>
      </div>

      <form className="mt-4 max-w-md mx-auto space-y-4">
        <input
          type="text"
          placeholder="Nombre"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <textarea
          placeholder="Escribe tu mensaje..."
          className="w-full border border-gray-300 rounded-lg p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all"
        >
          Enviar mensaje
        </button>
      </form>

      <div className="mt-12 max-w-2xl mx-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15909.046606845406!2d-75.7027911!3d4.8143278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e388744c937b121%3A0x342879aad4b84b26!2sPereira%2C%20Risaralda!5e0!3m2!1ses!2sco!4v1680467328123!5m2!1ses!2sco" // reemplaza con tu link real si lo deseas
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="rounded-lg shadow"
        ></iframe>
      </div>
    </section>
  );
}
