import React, { useState, useEffect } from "react";
import StickyContacts from "../components/StickyContacts";
import HeroSlider from "../components/HeroSlider";
import { FaUsers, FaGavel, FaFileContract, FaExclamationTriangle } from "react-icons/fa";

export default function Home() {
  const reviews = [
    { name: "Adrian M.", text: "Am primit consultanță clară și completă...", image: "/images/adrian.jpg" },
    { name: "Alex P.", text: "Profesionalism și seriozitate...", image: "/images/alex.jpg" },
    { name: "Ana L.", text: "Servicii excelente, comunicare clară...", image: "/images/ana.jpg" },
    { name: "Maria D.", text: "Am apreciat atenția la detalii...", image: "/images/maria.jpg" },
    { name: "Oleg P.", text: "Soluții eficiente și profesioniste...", image: "/images/oleg.jpg" },
    { name: "Pavel S.", text: "Experiență, seriozitate și rezultate excelente...", image: "/images/pavel.jpg" }
  ];

  const [current, setCurrent] = useState(0);

  // Autoplay adaptiv
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => {
        if (window.innerWidth >= 768) {
          // Desktop: 2 slide-uri (0 sau 1)
          return prev === 1 ? 0 : 1;
        } else {
          // Mobil: câte un slide pentru fiecare recenzie (6 slide-uri)
          return prev === reviews.length - 1 ? 0 : prev + 1;
        }
      });
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) =>
      window.innerWidth >= 768 ? (prev === 0 ? 1 : 0) : prev === 0 ? reviews.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      window.innerWidth >= 768 ? (prev === 1 ? 0 : 1) : prev === reviews.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="bg-gray-50">
     {/* HERO SECTION SLIDER */}
<section className="relative">
  {/** Slide-uri */}
  {/** Folosim state pentru current slide */}
  {/** Fiecare slide va fi absolut poziționat peste celălalt */}
  <HeroSlider />
</section>


  {/* SECȚIUNE SERVICII */}
<section className="max-w-6xl mx-auto px-4 py-16">
  <h2 className="text-3xl font-bold text-blue-950 text-center mb-12">Domenii de activitate</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    {/* Drept familial – primul card */}
    <div className="bg-white p-6 shadow-lg rounded-xl border-t-4 border-amber-600 flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <div className="flex items-center gap-3 mb-2">
        <FaUsers className="text-amber-600 text-xl" />
        <h3 className="text-xl md:text-2xl font-semibold text-blue-950">
          Drept familial
        </h3>
      </div>
      <p className="text-gray-700 text-base md:text-lg">
        Divorțuri, pensii alimentare, partajul averii și alte aspecte legate de familie.
      </p>
    </div>

    {/* Drept civil */}
    <div className="bg-white p-6 shadow-lg rounded-xl border-t-4 border-amber-600 flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <div className="flex items-center gap-3 mb-2">
        <FaFileContract className="text-amber-600 text-xl" />
        <h3 className="text-xl md:text-2xl font-semibold text-blue-950">
          Drept civil
        </h3>
      </div>
      <p className="text-gray-600 text-base md:text-lg">
        Contracte, litigii, recuperarea prejudiciilor, drepturi patrimoniale.
      </p>
    </div>

    {/* Drept penal */}
    <div className="bg-white p-6 shadow-lg rounded-xl border-t-4 border-amber-600 flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <div className="flex items-center gap-3 mb-2">
        <FaGavel className="text-amber-600 text-xl" />
        <h3 className="text-xl md:text-2xl font-semibold text-blue-950">
          Drept penal
        </h3>
      </div>
      <p className="text-gray-600 text-base md:text-lg">
        Asistență și reprezentare în cauze penale, consultanță juridică.
      </p>
    </div>

    {/* Drept contravențional */}
    <div className="bg-white p-6 shadow-lg rounded-xl border-t-4 border-amber-600 flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <div className="flex items-center gap-3 mb-2">
        <FaExclamationTriangle className="text-amber-600 text-xl" />
        <h3 className="text-xl md:text-2xl font-semibold text-blue-950">
          Drept contravențional
        </h3>
      </div>
      <p className="text-gray-600 text-base md:text-lg">
        Contestații, reprezentare în instanță, consiliere în dosare contravenționale.
      </p>
    </div>

  </div>
</section>




{/* SECȚIUNE DESPRE MINE */}
<section className="bg-gray-50 py-20 border-t border-gray-200">
  <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-14">

    {/* Imagine avocat */}
    <div className="w-full md:w-1/3 flex justify-center md:justify-start">
      <img
        src="/images/IgorCiuru.jpeg"
        alt="Igor Ciuru"
        className="w-72 h-96 object-cover object-top rounded-lg shadow-xl"
      />
    </div>

    {/* Text poveste */}
    <div className="w-full md:w-2/3 text-blue-950">

      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Despre mine
      </h2>

      {/* Poveste cu ghilimele */}
      <div className="relative pl-6 border-l-4 border-amber-600">

        <span className="absolute -top-6 -left-6 text-6xl text-amber-300 opacity-40 font-serif">
          “
        </span>

        <div className="space-y-4 text-gray-700 leading-relaxed text-base md:text-lg">
          <p className="text-gray-700 mb-4">
                Am absolvit în 1998 Liceul Teoretic „Vasile Alecsandri” din municipiul Bălți, unde am fost profund pasionat de istorie și geografie, o dragoste pe care am moștenit-o de la bunicul meu, Moțoc Filip. Pe parcursul anilor de liceu, am participat la olimpiada orășenească de istorie, unde am obținut un loc de frunte, evidențiindu-mă prin cunoștințele și pasiunea pentru aceste domenii.
            </p>

            <p className="text-gray-700 mb-4">
               În același an, am devenit student la Universitatea de Stat din Bălți „Alecu Russo”, la Facultatea de Drept. În perioada studiilor, am fost șef de grup și am absolvit facultatea cu note foarte bune. Activitatea mea extracurriculară a fost extrem de activă, devenind membru al organizației de tineret „Noua Generație” din cadrul PPCD, iar ulterior am ajuns să fiu unul dintre liderii acestei organizații.
            </p>

            <p className="text-gray-700 mb-4">
               După finalizarea studiilor universitare, am continuat să îmi aprofundez cunoștințele și abilitățile prin studii postuniversitare la Universitatea „Alexandru Ioan Cuza” din Iași, unde am obținut diploma de Master în perioada 2004-2006.
            </p>

            <p className="text-gray-700 mb-4">
              În perioada 2004-2011, am fost ales Consilier Municipal în cadrul Consiliului municipiului Bălți. În această funcție, am participat activ la viața publică a orașului natal, contribuind la diverse inițiative și proiecte comunitare.
            </p>

            <p className="text-gray-700 mb-4">
              În 2012, am promovat examenul pentru admiterea la stagiere în avocatură, având ca mentor pe Maestrul Igor Țurcanu din cadrul Baroului Bălți, sub îndrumarea căruia am dobândit o experiență vastă și pregătirea necesară pentru admiterea în profesie. 
            </p>

            <p className="text-gray-700 mb-4">
              În 2013, am promovat examenul de admitere în profesie și am fondat Cabinetul Avocatului „Igor Ciuru”, în cadrul căruia activez până în prezent. În anul 2022, am fost ales în funcția de prodecan al Baroului Bălți-Nord din cadrul Uniunii Avocaților din Republica Moldova, rol în care am contribuit la dezvoltarea și coordonarea politicilor profesionale.
            </p>

        </div>
      </div>

      {/* Semnătură */}
      <p className="mt-8 font-semibold text-blue-950">
        Avocat Igor CIURU <br />
        <span className="text-gray-600 text-sm">
          Baroul Bălți-Nord, Republica Moldova
        </span>
      </p>

      {/* Buton CTA */}
      <a
        href="/contact"
        className="inline-block mt-8 bg-blue-950 text-white hover:bg-blue-900 px-8 py-3 rounded-lg font-semibold shadow-md transition-transform duration-300 hover:scale-105"
      >
        Programează o consultație
      </a>
    </div>
  </div>
</section>



      {/* SECȚIUNE RECENZII */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-950 text-center mb-12">Ce spun clienții noștri</h2>

          <div className="overflow-hidden relative">
            <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${current * 100}%)` }}>
              {/* Desktop: câte 3 recenzii per slide */}
              <div className="flex-shrink-0 w-full hidden md:flex justify-center gap-6">
                {reviews.slice(0, 3).map((r, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center w-full sm:w-1/2 md:w-1/3">
                    <img src={r.image} alt={r.name} className="w-24 h-24 rounded-full object-cover mb-4 shadow-md" />
                    <p className="text-gray-700 mb-4">{r.text}</p>
                    <span className="font-semibold text-blue-950">{r.name}</span>
                  </div>
                ))}
              </div>

              <div className="flex-shrink-0 w-full hidden md:flex justify-center gap-6">
                {reviews.slice(3, 6).map((r, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center w-full sm:w-1/2 md:w-1/3">
                    <img src={r.image} alt={r.name} className="w-24 h-24 rounded-full object-cover mb-4 shadow-md" />
                    <p className="text-gray-700 mb-4">{r.text}</p>
                    <span className="font-semibold text-blue-950">{r.name}</span>
                  </div>
                ))}
              </div>

              {/* Mobil: fiecare card câte un slide */}
              {reviews.map((r, i) => (
                <div key={i} className="flex-shrink-0 w-full md:hidden flex justify-center">
                  <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center w-11/12 sm:w-5/6">
                    <img src={r.image} alt={r.name} className="w-24 h-24 rounded-full object-cover mb-4 shadow-md" />
                    <p className="text-gray-700 mb-4">{r.text}</p>
                    <span className="font-semibold text-blue-950">{r.name}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Butoane navigare */}
            <button onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 bg-blue-950 text-white p-2 rounded-full hover:bg-blue-700 transition">&#10094;</button>
            <button onClick={nextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-950 text-white p-2 rounded-full hover:bg-blue-700 transition">&#10095;</button>
          </div>

          {/* Indicatori */}
          <div className="flex justify-center mt-6 space-x-2">
            {(window.innerWidth >= 768 ? [0, 1] : reviews.map((_, i) => i)).map((index) => (
              <span key={index} onClick={() => setCurrent(index)} className={`w-3 h-3 rounded-full cursor-pointer ${index === current ? "bg-blue-950" : "bg-gray-400"}`}></span>
            ))}
          </div>
        </div>
      </section>

      {/* SECȚIUNE HARTĂ */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-950 text-center mb-8">Unde ne poți găsi?</h2>
          <p className="text-center text-gray-700 mb-6">Ne găsești la biroul nostru din Bălți, pe strada Ștefan cel Mare 90.</p>
          <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Locația biroului"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2682.221003965536!2d27.91441307598614!3d47.75776747120415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cb67310fe407eb%3A0xc778267977cba576!2sStrada%20%C8%98tefan%20cel%20Mare%2090%2C%20MD-3121%2C%20B%C4%83l%C8%9Bi%2C%20Moldova!5e0!3m2!1sro!2s!4v1765528655836!5m2!1sro!2s"
              width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <StickyContacts />
    </div>
  );
}
