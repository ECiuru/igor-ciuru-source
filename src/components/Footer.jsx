import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-gray-100 pt-12 pb-6 mt-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* LOGO + BRANDING */}
        <div className="flex items-center gap-4">
          <img
            src="/images/Logo3.png"
            alt="Cabinetul Avocatului Igor Ciuru"
            className="h-14 md:h-16 w-auto object-contain"
          />

          <div className="flex flex-col leading-tight">
            <span className="font-bold text-lg tracking-wide">
              Igor <span className="text-amber-600">CIURU</span>
            </span>
            <span className="text-gray-300 text-xs uppercase tracking-widest">
              Cabinetul Avocatului
            </span>
          </div>
        </div>

        {/* MENIU */}
        <div>
          <h4 className="text-amber-600 font-semibold mb-4">Navigare</h4>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-amber-600 transition">Acasă</a></li>
            <li><a href="/servicii" className="hover:text-amber-600 transition">Servicii</a></li>
            <li><a href="/despre" className="hover:text-amber-600 transition">Despre</a></li>
            <li><a href="/contact" className="hover:text-amber-600 transition">Contact</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-amber-600 font-semibold mb-4">Contact</h4>
          <ul className="space-y-3">

            <li className="flex items-start gap-2">
              <FaClock className="text-amber-600 mt-1" />
              <span>
                <strong>Program de lucru:</strong><br />
                Luni – Vineri: 08:00 – 17:00<br />
              </span>
            </li>

            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-amber-600" />
              <a href="tel:+37379774522" className="hover:text-amber-600 transition">
                +373 79 774 522
              </a>
            </li>

            <li className="flex items-center gap-2">
              <FaEnvelope className="text-amber-600" />
              <a href="mailto:igorciuru@gmail.com" className="hover:text-amber-600 transition">
                igorciuru@gmail.com
              </a>
            </li>

            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-amber-600 mt-1" />
              <span>
                Bălți, str. Ștefan cel Mare 90<br />
                Republica Moldova
              </span>
            </li>

          </ul>
        </div>

      </div> {/* 👈 ASTA LIPSEA */}

      {/* COPYRIGHT */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-300 text-sm">
        © {new Date().getFullYear()} Igor Ciuru — Toate drepturile rezervate.
      </div>
    </footer>
  );
}
