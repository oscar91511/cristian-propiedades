// PromoSlider.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PromoSlider({ hero = false }) {
  const settings = {
    dots: hero ? false : true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };

  const promociones = [
    {
      titulo: "Banner 1",
      desc: "Promoción para Banner 1",
      img: "/images/Banner_COMPRA-TU-CASA_2025.jpg",
    },
    {
      titulo: "Banner 2",
      desc: "Promoción para Banner 2",
      img: "/images/banner_vivienda-proyecto-familiar.jpg",
    },
    {
      titulo: "Banner 3",
      desc: "Promoción para Banner 3",
      img: "/images/Banner-integridad-funcion-publica.jpg",
    },
  ];

  if (hero) {
    return (
      <Slider {...settings}>
        {promociones.map((promo, idx) => (
          <div key={idx} className="h-full">
            <img
              src={promo.img}
              alt={promo.titulo}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </Slider>
    );
  }

  return (
    <section
      id="promociones"
      className="py-16 px-6 bg-blue-50"
      data-aos="fade-up"
    >
      <h3 className="text-3xl font-semibold text-center text-blue-700 mb-10">
        Promociones
      </h3>
      <Slider {...settings}>
        {promociones.map((promo, idx) => (
          <div key={idx} className="px-4">
            <div className="relative">
              <img
                src={promo.img}
                alt={promo.titulo}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center rounded-lg">
                <h4 className="text-2xl text-white font-bold mb-2">
                  {promo.titulo}
                </h4>
                <p className="text-white text-lg">{promo.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default PromoSlider;
