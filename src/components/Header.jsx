import React, { useState } from "react";
import { FaWhatsapp, 
  FaEnvelope, 
  FaFacebookMessenger, 
  FaViber,
  FaFacebook } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-50 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-32 md:h-36">

        {/* LOGO + TEXT */}
        <a href="/" className="flex items-center gap-4 md:gap-5">
          {/* LOGO IMAGINE – CHEIȚA */}
          <img
            src="/images/Logo3.png"
            alt="Cabinetul Avocatului Igor Ciuru"
            className="h-14 md:h-16 lg:h-18 w-auto object-contain"
          />

          {/* TEXT LOGO */}
          <div className="flex flex-col leading-tight">
            <span className="text-blue-950 font-bold text-lg md:text-2xl lg:text-3xl tracking-wide">
              Igor <span className="text-amber-600">CIURU</span>
            </span>
            <span className="text-gray-600 text-xs md:text-sm lg:text-base uppercase tracking-widest">
              Cabinetul Avocatului
            </span>
          </div>
        </a>

        {/* MENIU DESKTOP */}
        <nav className="hidden md:flex space-x-10 text-lg font-medium">
          <a href="/" className="text-blue-950 hover:text-amber-600 transition">
            Acasă
          </a>
          <a href="/servicii" className="text-blue-950 hover:text-amber-600 transition">
            Servicii
          </a>
          <a href="/despre" className="text-blue-950 hover:text-amber-600 transition">
            Despre
          </a>
          <a href="/contact" className="text-blue-950 hover:text-amber-600 transition">
            Contact
          </a>
        </nav>

        {/* CONTACT DESKTOP */}
        <div className="hidden md:flex flex-col items-end leading-tight">
          <a
            href="tel:+37379774522"
            className="text-blue-950 hover:text-amber-600 transition font-semibold text-lg"
          >
            📞 +373 79 774 522
          </a>
         <a
  href="mailto:igorciuru@gmail.com"
  className="flex items-center gap-2 hover:text-amber-600 transition font-medium"
>
  <FaEnvelope className="text-amber-600" />
  igorciuru@gmail.com
</a>

{/* ICONIȚE CONTACT */}
<div className="flex items-center gap-4 mt-2">
  <a
    href="https://wa.me/37379774522"
    target="_blank"
    rel="noopener noreferrer"
    className="text-green-500 hover:text-green-600 transition text-2xl"
    aria-label="WhatsApp"
  >
    <FaWhatsapp />
  </a>

  <a
    href="viber://chat?number=%2B37379774522"
    className="text-violet-600 hover:text-violet-700 transition text-2xl"
    aria-label="Viber"
  >
    <FaViber />
  </a>

  <a
    href="https://www.facebook.com/igor.ciuru.9"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:text-blue-700 transition text-2xl"
    aria-label="Messenger"
  >
    <FaFacebookMessenger />
  </a>

  <a
    href="https://www.facebook.com/igor.ciuru.9"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-700 hover:text-blue-800 transition text-2xl"
    aria-label="Facebook"
  >
    <FaFacebook />
  </a>
</div>

        </div>

        {/* HAMBURGER MOBIL */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Meniu mobil"
          >
            <svg
              className="w-9 h-9 text-blue-950"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  menuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* MENIU MOBIL */}
{menuOpen && (
  <div className="md:hidden bg-gray-50 shadow-md">
    <nav className="flex flex-col px-4 py-6 space-y-5 text-lg">
      <a href="/" className="text-blue-950 hover:text-amber-600 transition">
        Acasă
      </a>
      <a href="/servicii" className="text-blue-950 hover:text-amber-600 transition">
        Servicii
      </a>
      <a href="/despre" className="text-blue-950 hover:text-amber-600 transition">
        Despre
      </a>
      <a href="/contact" className="text-blue-950 hover:text-amber-600 transition">
        Contact
      </a>

      <div className="pt-4 border-t">
        {/* Telefon */}
        <a
          href="tel:+37379774522"
          className="text-blue-950 hover:text-amber-600 transition font-semibold block mb-2"
        >
          📞 +373 79 774 522
        </a>

        {/* Email */}
        <a
          href="mailto:igorciuru@gmail.com"
          className="flex items-center gap-2 text-blue-950 hover:text-amber-600 transition font-medium mb-2"
        >
          <FaEnvelope className="text-amber-600" /> igorciuru@gmail.com
        </a>

        {/* Iconițe contact */}
        <div className="flex items-center gap-4 mt-2">
          <a
            href="https://wa.me/37379774522"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-600 transition text-2xl"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>

          <a
            href="viber://chat?number=%2B37379774522"
            className="text-violet-600 hover:text-violet-700 transition text-2xl"
            aria-label="Viber"
          >
            <FaViber />
          </a>

          <a
            href="https://m.me/USERNAME_TAU"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 transition text-2xl"
            aria-label="Messenger"
          >
            <FaFacebookMessenger />
          </a>

          <a
            href="https://www.facebook.com/igor.ciuru.9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-800 transition text-2xl"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </nav>
  </div>
)}

    </header>
  );
}
