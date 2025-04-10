import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { data } from "../Data";
import { motion } from "framer-motion";
import {
  BedDouble,
  Bath,
  Ruler,
  ChevronLeft,
  Sun,
  Moon,
  MessageCircle,
} from "lucide-react";

export default function PropiedadesPage() {
  const navigate = useNavigate();

  const [tipo, setTipo] = useState("");
  const [transaccion, setTransaccion] = useState("");
  const [cuartos, setCuartos] = useState("");
  const [baños, setBaños] = useState("");
  const [tamañoMin, setTamañoMin] = useState("");
  const [tamañoMax, setTamañoMax] = useState("");
  const [modoOscuro, setModoOscuro] = useState(false);

  const propiedadesFiltradas = data.filter((prop) => {
    return (
      (tipo ? prop.tipo === tipo : true) &&
      (transaccion ? prop.transaccion === transaccion : true) &&
      (cuartos ? prop.cuartos === parseInt(cuartos) : true) &&
      (baños ? prop.baños === parseInt(baños) : true) &&
      (tamañoMin ? prop.tamaño >= parseInt(tamañoMin) : true) &&
      (tamañoMax ? prop.tamaño <= parseInt(tamañoMax) : true)
    );
  });

  const propiedadesDestacadas = data.filter((prop) => prop.destacada);
  const cardStyle = modoOscuro
    ? "bg-gray-800 text-white"
    : "bg-white text-gray-900";

  return (
    <div
      className={`${
        modoOscuro ? "dark bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      } p-4 max-w-7xl mx-auto min-h-screen transition-colors duration-500`}
    >
      {/* Navegación y Modo Oscuro */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 rounded-lg border shadow-md hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-white dark:hover:text-white transition flex items-center gap-2"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="text-lg">Volver</span>
        </button>
        <button
          onClick={() => setModoOscuro(!modoOscuro)}
          className="px-4 py-2 rounded-lg border shadow-md flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-white transition"
        >
          {modoOscuro ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
          {modoOscuro ? "Modo Día" : "Modo Noche"}
        </button>
      </div>

      <h1 className="text-4xl font-bold mb-10 text-center border-b-2 border-blue-500 pb-4">
        Propiedades Disponibles <span className="text-blue-600">🏡</span>
      </h1>

      {/* Filtros */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <select
          onChange={(e) => setTransaccion(e.target.value)}
          value={transaccion}
          className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-black dark:bg-gray-800 dark:text-white"
        >
          <option value="">Venta / Alquiler</option>
          <option value="Venta">Venta</option>
          <option value="Alquiler">Alquiler</option>
        </select>

        <select
          onChange={(e) => setTipo(e.target.value)}
          value={tipo}
          className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-black dark:bg-gray-800 dark:text-white"
        >
          <option value="">Tipo</option>
          <option value="Casa">Casa</option>
          <option value="Apartamento">Apartamento</option>
          <option value="Apartaestudio">Apartaestudio</option>
        </select>

        <input
          type="number"
          placeholder="Cuartos"
          value={cuartos}
          onChange={(e) => setCuartos(e.target.value)}
          className="p-2 border rounded-lg bg-white text-black dark:bg-gray-800 dark:text-white"
        />
        <input
          type="number"
          placeholder="Baños"
          value={baños}
          onChange={(e) => setBaños(e.target.value)}
          className="p-2 border rounded-lg bg-white text-black dark:bg-gray-800 dark:text-white"
        />
        <input
          type="number"
          placeholder="Tamaño min"
          value={tamañoMin}
          onChange={(e) => setTamañoMin(e.target.value)}
          className="p-2 border rounded-lg bg-white text-black dark:bg-gray-800 dark:text-white"
        />
        <input
          type="number"
          placeholder="Tamaño max"
          value={tamañoMax}
          onChange={(e) => setTamañoMax(e.target.value)}
          className="p-2 border rounded-lg bg-white text-black dark:bg-gray-800 dark:text-white"
        />
      </motion.div>

      {/* Slider Destacadas */}
      {propiedadesDestacadas.length > 0 && (
        <motion.div
          className="mb-10 overflow-hidden rounded-xl relative h-60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="flex w-[300%] h-full"
            animate={{ x: ["0%", "-100%", "-200%", "0%"] }}
            transition={{
              repeat: Infinity,
              duration: 12,
              ease: "linear",
            }}
          >
            {propiedadesDestacadas.map((prop, idx) => (
              <img
                key={idx}
                src={prop.imagen}
                alt={prop.titulo}
                className="w-full h-full object-cover"
                onError={(e) => (e.target.src = "/fallback.jpg")}
              />
            ))}
          </motion.div>
        </motion.div>
      )}

      {/* Listado general */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        {propiedadesFiltradas.map((prop) => (
          <div
            key={prop.id}
            className={`border rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition-transform duration-300 ${cardStyle}`}
          >
            <img
              src={
                prop.imagen?.startsWith("http")
                  ? prop.imagen
                  : `/images/${prop.imagen}`
              }
              alt={prop.titulo}
              loading="lazy"
              onError={(e) => (e.target.src = "/fallback.jpg")}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-1">{prop.titulo}</h2>
              <p className="text-sm">
                {prop.tipo} • {prop.transaccion}
              </p>
              <div className="flex items-center gap-4 text-sm mt-1">
                <span className="flex items-center gap-1">
                  <BedDouble className="w-4 h-4" /> {prop.cuartos}
                </span>
                <span className="flex items-center gap-1">
                  <Bath className="w-4 h-4" /> {prop.baños}
                </span>
                <span className="flex items-center gap-1">
                  <Ruler className="w-4 h-4" /> {prop.tamaño} m²
                </span>
              </div>
              <p className="text-green-500 font-bold text-lg mt-2">
                ${prop.precio.toLocaleString()}
              </p>
              {/* 👉 Botón de detalle */}
              <button
                onClick={() => navigate(`/propiedades/${prop.id}`)}
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Ver Detalle
              </button>
            </div>
          </div>
        ))}
      </motion.div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/573001112233"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-4 shadow-lg hover:scale-110 transform transition-all z-50"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
