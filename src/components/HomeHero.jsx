import { useState } from "react";
import "keen-slider/keen-slider.min.css";
import hero1 from "../assets/img/home/hero-1.jpeg";
import hero2 from "../assets/img/home/hero-2.jpeg";
import hero3 from "../assets/img/home/hero-3.jpeg";
import hero4 from "../assets/img/home/hero-4.jpeg";
import { useKeenSlider } from "keen-slider/react"; // import from 'keen-slider/react.es' for to get an ES module
import "./home-hero.css";

const HomeHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    vertical: true,
    loop: true,
    slides: {
      origin: "center",
      perView: 1,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const heros = [
    {
      src: hero1,
      title: "Room to Grow,<br> Space to Thrive",
    },
    {
      src: hero2,
      title: "Built for Everyday Luxury",
      subtitle: "3 Bedroom + Den Townhouse",
    },
    {
      src: hero3,
      title: "A striking vision of modern living",
      subtitle: "Future Condos & Commercial",
    },
    {
      src: hero4,
      title: "A Welcoming Community Where You'll Truly Feel At Home",
      fpo: "FPO. Exterior amenity building East Elevation",
    },
  ];

  return (
    <div className="relative">
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider h-[400px] relative">
          {heros.map(({ src, title, subtitle, fpo }, i) => (
            <div key={i} className={`keen-slider__slide h-full number-slide${i}`}>
              <img className="h-full w-full object-cover" src={src} alt="" />
              <div className="absolute top-0 left-0 h-full flex items-center">
                <div className="p-10">
                  <h2
                    className="text-white"
                    dangerouslySetInnerHTML={{ __html: title }}
                  ></h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default HomeHero;
