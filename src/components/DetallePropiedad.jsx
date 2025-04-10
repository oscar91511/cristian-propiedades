import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { data } from "../Data";
import {
  BedDouble,
  Bath,
  Ruler,
  ChevronLeft,
  MapPin,
  Home,
  X,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function DetallePropiedad() {
  const { id } = useParams();
  const navigate = useNavigate();
  const propiedad = data.find((p) => p.id === parseInt(id));

  const [imagenAmpliada, setImagenAmpliada] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setImagenAmpliada(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!propiedad) {
    return (
      <div className="p-4 text-center text-red-600">
        Propiedad no encontrada.
      </div>
    );
  }

  const mensajeWhatsApp = encodeURIComponent(
    `Hola, estoy interesad@ en la propiedad "${
      propiedad.titulo
    }".\n\nDetalles:\n- Tipo: ${propiedad.tipo}\n- Transacción: ${
      propiedad.transaccion
    }\n- Cuartos: ${propiedad.cuartos}\n- Baños: ${
      propiedad.baños
    }\n- Tamaño: ${
      propiedad.tamaño
    } m²\n- Precio: $${propiedad.precio.toLocaleString()}\n\n¿Podrías brindarme más información?`
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 rounded-lg border shadow-sm hover:bg-gray-100 flex items-center gap-2"
      >
        <ChevronLeft className="w-4 h-4" /> Volver
      </button>

      <h1 className="text-4xl font-bold mb-2">{propiedad.titulo}</h1>
      <p className="text-gray-600 mb-4 flex items-center gap-2">
        <MapPin className="w-4 h-4" />
        {propiedad.ubicacion}
      </p>

      <img
        src={
          propiedad.imagen?.startsWith("http")
            ? propiedad.imagen
            : `/images/${propiedad.imagen}`
        }
        alt={propiedad.titulo}
        className="w-full h-80 object-cover rounded-xl mb-6 shadow cursor-pointer"
        onClick={() =>
          setImagenAmpliada(
            propiedad.imagen?.startsWith("http")
              ? propiedad.imagen
              : `/images/${propiedad.imagen}`
          )
        }
      />

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="space-y-3 text-lg">
            <p className="flex items-center gap-2">
              <Home className="w-5 h-5 text-blue-500" />
              <strong>Tipo:</strong> {propiedad.tipo}
            </p>
            <p className="flex items-center gap-2">
              <strong>Transacción:</strong> {propiedad.transaccion}
            </p>
            <p className="flex items-center gap-2">
              <strong>Precio:</strong> ${propiedad.precio.toLocaleString()}
            </p>
            <div className="flex flex-wrap gap-4 mt-4 text-md">
              <span className="flex items-center gap-1">
                <BedDouble className="w-5 h-5 text-purple-500" />
                {propiedad.cuartos} cuartos
              </span>
              <span className="flex items-center gap-1">
                <Bath className="w-5 h-5 text-pink-500" />
                {propiedad.baños} baños
              </span>
              <span className="flex items-center gap-1">
                <Ruler className="w-5 h-5 text-yellow-500" />
                {propiedad.tamaño} m²
              </span>
            </div>
          </div>

          <a
            href={`https://wa.me/573007901757?text=${mensajeWhatsApp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-all duration-200 w-full"
          >
            <FaWhatsapp className="w-5 h-5" />
            Contáctame por WhatsApp
          </a>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Descripción</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {propiedad.descripcion || "Descripción no disponible."}
          </p>

          {propiedad.galeria?.length > 1 && (
            <div>
              <h3 className="text-lg font-medium mb-2">Galería</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {propiedad.galeria.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Imagen ${index + 1}`}
                    className="rounded-lg object-cover h-40 w-full shadow-sm cursor-pointer"
                    onClick={() => setImagenAmpliada(img)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 💡 Modal para previsualizar la imagen */}
      {imagenAmpliada && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setImagenAmpliada(null)}
        >
          <button
            className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2"
            onClick={() => setImagenAmpliada(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={imagenAmpliada}
            alt="Vista ampliada"
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl border-4 border-white"
          />
        </div>
      )}
    </div>
  );
}
