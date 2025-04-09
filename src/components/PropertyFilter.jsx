import { useState } from "react";

const properties = [
  {
    img: "/images/img4.jpg",
    title: "Casa Campestre en La Ceja",
    location: "La Ceja",
    type: "Casa",
    price: 350,
    desc: "3 habitaciones · 2 baños · 120 m² · $350 millones",
  },
  {
    img: "/images/img2.jpg",
    title: "Apartamento en Envigado",
    location: "Envigado",
    type: "Apartamento",
    price: 230,
    desc: "2 habitaciones · 1 baño · 65 m² · $230 millones",
  },
  {
    img: "/images/img3.jpg",
    title: "Penthouse en El Poblado",
    location: "El Poblado",
    type: "Apartamento",
    price: 890,
    desc: "4 habitaciones · 3 baños · 200 m² · $890 millones",
  },
  {
    img: "/images/img1.jpg",
    title: "Lote en Cerritos",
    location: "Cerritos",
    type: "Lote",
    price: 150,
    desc: "1.500 m² · $150 millones",
  },
];

export default function PropertyFilter() {
  const [filters, setFilters] = useState({ type: "", location: "", price: "" });

  const filtered = properties.filter((p) => {
    const matchesType = filters.type ? p.type === filters.type : true;
    const matchesLocation = filters.location
      ? p.location === filters.location
      : true;
    const matchesPrice =
      filters.price === "low"
        ? p.price < 300
        : filters.price === "mid"
        ? p.price >= 300 && p.price <= 600
        : filters.price === "high"
        ? p.price > 600
        : true;

    return matchesType && matchesLocation && matchesPrice;
  });

  return (
    <section
      className="bg-white py-20 px-6"
      id="filtro-propiedades"
      data-aos="fade-up"
    >
      <h3 className="text-3xl font-semibold text-center text-blue-700 mb-8">
        Filtra Propiedades
      </h3>
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-4 mb-8">
        <select
          onChange={(e) => setFilters({ ...filters, type: e.target.value })}
          className="p-3 rounded-lg border"
          value={filters.type}
        >
          <option value="">Tipo</option>
          <option value="Casa">Casa</option>
          <option value="Apartamento">Apartamento</option>
          <option value="Lote">Lote</option>
        </select>
        <select
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          className="p-3 rounded-lg border"
          value={filters.location}
        >
          <option value="">Ubicación</option>
          <option value="La Ceja">La Ceja</option>
          <option value="Envigado">Envigado</option>
          <option value="El Poblado">El Poblado</option>
          <option value="Cerritos">Cerritos</option>
        </select>
        <select
          onChange={(e) => setFilters({ ...filters, price: e.target.value })}
          className="p-3 rounded-lg border"
          value={filters.price}
        >
          <option value="">Precio</option>
          <option value="low">Menos de $300 millones</option>
          <option value="mid">$300 - $600 millones</option>
          <option value="high">Más de $600 millones</option>
        </select>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filtered.length > 0 ? (
          filtered.map((property, idx) => (
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
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-500">
            No hay propiedades que coincidan.
          </p>
        )}
      </div>
    </section>
  );
}
