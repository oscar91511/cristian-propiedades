import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PromoSlider = ({ slides, hero = false }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !slides || slides.length === 0) return null;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <div
      className={`w-full overflow-hidden ${
        hero ? "rounded-none" : "rounded-xl"
      } relative`}
    >
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <div
              className={`w-full ${
                hero
                  ? "h-[220px] sm:h-[300px] md:h-[400px] lg:h-[600px]"
                  : "h-[140px] sm:h-[200px] md:h-[300px] lg:h-[400px]"
              } relative`}
            >
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-center p-4">
                <div>
                  <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold">
                    {slide.title}
                  </h2>
                  <p className="text-xs sm:text-sm md:text-base">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PromoSlider;
