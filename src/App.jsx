import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUserTie, FaHome, FaHandshake, FaWhatsapp } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Contacto from "./components/Contact";
import PropertyFilter from "./components/PropertyFilter";
import PromoSlider from "./components/PromoSlider";

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Cristian Propiedades";
    AOS.init({
      duration: 2000,
      once: true,
      offset: 200,
    });
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const bannerSlides = [
    {
      image: "/images/Banner_COMPRA-TU-CASA_2025.jpg",
      title: "Encuentra tu lugar ideal",
      description: "Propiedades exclusivas y atención personalizada",
    },
    {
      image: "/images/banner_vivienda-proyecto-familiar.jpg",
      title: "Compra con confianza",
      description: "Más de 8 años de experiencia en propiedad raíz",
    },
    {
      image: "/images/Banner-integridad-funcion-publica.jpg",
      title: "Asesoría profesional",
      description: "Desde la búsqueda hasta el cierre legal",
    },
  ];

  return (
    <div className="font-sans bg-gray-100 text-gray-800 scroll-smooth">
      {/* Navbar */}
      <nav className="bg-white/80 backdrop-blur-md shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-blue-700 flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" className="w-8 h-8" />
          Cristian Propiedades
        </h1>

        {/* Botón hamburguesa para móviles */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-blue-700 text-3xl focus:outline-none"
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>

        {/* Menú en pantallas grandes */}
        <div className="hidden md:flex space-x-6">
          {["inicio", "biografia", "mas-propiedades", "contacto"].map(
            (section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="relative text-gray-700 hover:text-blue-600 font-bold transition-all after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all after:duration-300"
              >
                {section === "inicio"
                  ? "Inicio"
                  : section === "biografia"
                  ? "Sobre mí"
                  : section === "mas-propiedades"
                  ? "Mas Propiedades"
                  : "Contacto"}
              </button>
            )
          )}
        </div>
      </nav>
      {/* Menú móvil */}
      {menuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-white/90 backdrop-blur-md shadow-md px-6 py-4 flex flex-col items-start space-y-4 z-40 transition-all">
          {["inicio", "biografia", "mas-propiedades", "contacto"].map(
            (section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-lg text-gray-700 font-semibold hover:text-blue-600 transition-all"
              >
                {section === "inicio"
                  ? "Inicio"
                  : section === "biografia"
                  ? "Sobre mí"
                  : section === "mas-propiedades"
                  ? "Mas Propiedades"
                  : "Contacto"}
              </button>
            )
          )}
        </div>
      )}
      {/* Hero con Slider como Background */}
      <section
        id="inicio"
        className="relative w-full h-[25.5vh] sm:h-[34.7vh] md:h-[46vh] lg:h-[52.5vh] overflow-hidden"
      >
        <div className="absolute inset-0 z-0 h-full w-full">
          <div className="h-full w-full">
            <PromoSlider slides={bannerSlides} hero />
          </div>
          <div className="absolute inset-0 bg-black opacity-30 z-10" />
        </div>

        <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-blue-100/40 rounded px-4 py-3 text-rose-700">
            Tu nuevo hogar te espera
          </h2>
          <p className="text-md md:text-xl font-bold bg-blue-100/40 rounded px-4 py-3 text-rose-700">
            Encuentra propiedades exclusivas, asesoría personalizada y el
            respaldo de un experto en propiedad raíz.
          </p>
          <button
            onClick={() => scrollToSection("contacto")}
            className="mt-6 px-6 py-3 bg-white text-blue-600 rounded-lg shadow hover:text-white transition-all hover:scale-105 hover:bg-rose-700"
          >
            ¡Contáctame ahora!
          </button>
        </div>
      </section>
      {/* Biografía */}
      <section
        id="biografia"
        className="py-20 px-6 bg-white text-center"
        data-aos="zoom-in"
      >
        <h2 className="text-3xl font-bold mb-4 text-blue-700">
          ¿Quién es Cristian?
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          <FaUserTie className="inline-block text-blue-600 text-2xl mb-1" />{" "}
          Cristian es un comisionista con más de 8 años de experiencia en
          propiedad raíz, comprometido a encontrar el lugar ideal para cada
          cliente.
        </p>
      </section>
      {/* Servicios */}
      <section className="py-20 px-6 bg-gray-50" data-aos="fade-up">
        <h3 className="text-3xl font-semibold text-center text-blue-700 mb-10">
          Servicios
        </h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          {[
            {
              icon: <FaHandshake />,
              title: "Asesoría Personalizada",
              desc: "Te acompaño en cada paso para elegir la propiedad perfecta.",
            },
            {
              icon: <FaHome />,
              title: "Propiedades Exclusivas",
              desc: "Opciones únicas seleccionadas según tus necesidades.",
            },
            {
              icon: <FaUserTie />,
              title: "Transparencia Legal",
              desc: "Todo el proceso con respaldo legal y claridad total.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all hover:scale-105"
            >
              <div className="text-3xl text-blue-500 mb-4 mx-auto">
                {service.icon}
              </div>
              <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Galería */}
      <section className="bg-white py-16 px-6" data-aos="fade-up">
        <h3 className="text-3xl font-semibold text-center text-blue-700 mb-10">
          Propiedades Destacadas
        </h3>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              img: "/images/img4.jpg",
              title: "Casa Campestre en La Ceja",
              desc: "3 habitaciones · 2 baños · 120 m² · $350 millones",
            },
            {
              img: "/images/img2.jpg",
              title: "Apartamento en Envigado",
              desc: "2 habitaciones · 1 baño · 65 m² · $230 millones",
            },
            {
              img: "/images/img3.jpg",
              title: "Penthouse en El Poblado",
              desc: "4 habitaciones · 3 baños · 200 m² · $890 millones",
            },
          ].map((property, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105"
            >
              <img
                src={property.img}
                alt={property.title}
                className="h-60 w-full object-cover"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold text-blue-700 mb-1">
                  {property.title}
                </h4>
                <p className="text-gray-600">{property.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>{" "}
      <button id="mas-propiedades" className="..."></button>
      <PropertyFilter />
      {/* Testimonios */}
      <section className="bg-gray-50 py-16 px-6" data-aos="fade-up">
        <h3 className="text-3xl font-semibold text-center text-blue-700 mb-10">
          Lo que dicen mis clientes
        </h3>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            {
              quote:
                "Gracias a Cristian encontré el apartamento perfecto para mi familia.",
              name: "Laura G.",
            },
            {
              quote:
                "Transparente, confiable y siempre dispuesto a ayudar. ¡100% recomendado!",
              name: "Jorge M.",
            },
            {
              quote: "Hizo todo muy fácil y rápido. ¡Un excelente profesional!",
              name: "Ana C.",
            },
          ].map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md border border-transparent transform transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:rotate-1 hover:shadow-xl hover:border-blue-500"
            >
              <p className="italic text-gray-600">“{t.quote}”</p>
              <p className="mt-4 font-semibold text-blue-600">– {t.name}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Proceso */}
      <section className="bg-white py-20 px-6" data-aos="fade-up">
        <h3 className="text-3xl font-semibold text-center text-blue-700 mb-10">
          ¿Cómo es el proceso?
        </h3>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 text-center">
          {[
            {
              step: 1,
              title: "Contacto Inicial",
              desc: "Hablamos sobre lo que buscas y tus necesidades específicas.",
            },
            {
              step: 2,
              title: "Búsqueda Personalizada",
              desc: "Te presento opciones filtradas según tu perfil e intereses.",
            },
            {
              step: 3,
              title: "Cierre Seguro",
              desc: "Negociamos y cerramos con respaldo legal y tranquilidad total.",
            },
          ].map((s) => (
            <div key={s.step}>
              <div className="text-4xl font-bold text-blue-500 mb-2">
                {s.step}
              </div>
              <h4 className="font-semibold text-lg mb-2">{s.title}</h4>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* FAQ */}
      <section className="bg-blue-50 py-20 px-6" data-aos="fade-up">
        <h3 className="text-3xl font-semibold text-center text-blue-700 mb-8">
          Preguntas Frecuentes
        </h3>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              q: "¿Qué documentos necesito para alquilar?",
              a: "Generalmente se requiere cédula, certificado laboral y referencias personales.",
            },
            {
              q: "¿Puedo visitar una propiedad antes de decidir?",
              a: "¡Claro! Coordinamos una visita sin compromiso para que la conozcas a fondo.",
            },
            {
              q: "¿Cristian cobra comisión?",
              a: "Sí, pero solo si llegamos a un acuerdo exitoso. Todo es transparente desde el inicio.",
            },
          ].map((faq, idx) => (
            <div key={idx}>
              <h4 className="font-bold text-blue-600">{faq.q}</h4>
              <p className="text-gray-700">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Contacto */}
      <div id="contacto" data-aos="fade-up">
        <Contacto />
      </div>
      {/* WhatsApp */}
      <a
        href="https://wa.me/573000000000"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition z-50 animate-pulse"
        target="_blank"
        rel="noopener noreferrer"
        title="Contáctame por WhatsApp"
      >
        <FaWhatsapp className="text-[50px]" />
      </a>
      {/* Footer */}
      <footer className="bg-gray-500 text-white py-6 px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Cristian Propiedades. Todos los derechos
          reservados. Desarrollado por{" "}
          <a
            href="https://www.codevistax.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-300 transition-colors"
          >
            Codevistax
          </a>
        </p>
      </footer>
    </div>
  );
}
