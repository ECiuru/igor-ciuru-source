import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // dacă folosești react-router

export default function HeroSlider() {
  const slides = [
    {
      image: "/images/geanta.jpg",
      title: "Servicii juridice profesionale",
      text: "Protejăm drepturile tale cu seriozitate, profesionalism și dedicație.",
      button: "/contact"
    },
    {
      image: "/images/despre.jpg",
      title: "Experiență și profesionalism",
      text: "Avocat Igor Ciuru oferă consultanță și reprezentare legală personalizată.",
      button: "/contact"
    },
    {
      image: "/images/servicii.jpg",
      title: "Domenii variate de activitate",
      text: "Drept civil, penal și contravențional – protejăm drepturile clienților noștri.",
      button: "/contact"
    }
  ];

  const [current, setCurrent] = useState(0);

  // Automat schimbă slide-ul la fiecare 5 secunde
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[60vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
              {slide.title}
            </h1>
            <p className="text-gray-200 text-lg md:text-xl mt-3 max-w-2xl">
              {slide.text}
            </p>
            <a
              href={slide.button}
              className="mt-6 bg-amber-600 hover:bg-amber-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition"
            >
              Programează o consultație
            </a>
          </div>
        </div>
      ))}

      {/* Butoane navigare manuală */}
      <button
        onClick={() =>
          setCurrent(current === 0 ? slides.length - 1 : current - 1)
        }
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-blue-950 text-white p-2 rounded-full hover:bg-blue-700 transition"
      >
        &#10094;
      </button>
      <button
        onClick={() =>
          setCurrent(current === slides.length - 1 ? 0 : current + 1)
        }
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-950 text-white p-2 rounded-full hover:bg-blue-700 transition"
      >
        &#10095;
      </button>
    </div>
  );
}
