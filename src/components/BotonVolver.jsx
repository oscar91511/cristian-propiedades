import { useNavigate } from "react-router-dom";

export default function BotonVolver({ modoOscuro }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className={`flex items-center gap-2 px-4 py-2 rounded-full shadow border transition-all
        ${
          modoOscuro
            ? "bg-gray-800 text-white border-white hover:bg-white hover:text-black"
            : "bg-white text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white"
        }`}
    >
      <span className="text-2xl">&#8592;</span>
      <span className="text-lg font-semibold">Volver</span>
    </button>
  );
}
