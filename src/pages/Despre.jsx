import React from "react";
import StickyContacts from "../components/StickyContacts";

export default function Despre() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO SECTION */}
      <section className="relative">
        <img
          src="/images/despre.jpg"
          alt="Imagine juridică"
          className="w-full h-[50vh] object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
            Despre avocatul Igor CIURU
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mt-3 max-w-2xl">
            Experiență, profesionalism și seriozitate în domeniul juridic.
          </p>
        </div>
      </section>

      {/* SECȚIUNE DESPRE */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center md:space-x-12">

          {/* Imagine avocat */}
          <div className="flex justify-center md:justify-start -mt-8 md:-mt-16 mb-6 md:mb-0">
            <div className="h-48 w-48 sm:h-56 sm:w-56 md:h-72 md:w-72 rounded-full overflow-hidden border-2 border-amber-600 shadow-lg">
              <img
                src="/images/IgorCiuru.jpeg"
                alt="Igor Ciuru"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>

          {/* Text + butoane */}
          <div className="text-center md:text-left mt-8 md:mt-0">
            <h2 className="text-3xl font-bold text-blue-950 mb-4">Despre Igor Ciuru</h2>

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

            <p className="mt-4 font-semibold">
              Avocat Igor CIURU<br />
              Baroul Bălți-Nord, Republica Moldova
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-6">
              <a
                href="/contact"
                className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-center"
              >
                Contactează-ne
              </a>
             
            </div>
          </div>

        </div>
      </section>

      {/* SECȚIUNE VALORI */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-blue-950 text-center mb-12">
          Valorile mele
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-white p-6 shadow-lg rounded-xl border-l-4 border-amber-600 hover:bg-amber-50 transition">
            <h3 className="text-xl font-semibold mb-2">Integritate</h3>
            <p className="text-gray-700">
              Onestitate și transparență în fiecare acțiune, cu respectarea strictă a legii.
            </p>
          </div>

          <div className="bg-white p-6 shadow-lg rounded-xl border-l-4 border-amber-600 hover:bg-amber-50 transition">
            <h3 className="text-xl font-semibold mb-2">Profesionalism</h3>
            <p className="text-gray-700">
              Calitate juridică ridicată, atenție la detalii și seriozitate în reprezentare.
            </p>
          </div>

          <div className="bg-white p-6 shadow-lg rounded-xl border-l-4 border-amber-600 hover:bg-amber-50 transition">
            <h3 className="text-xl font-semibold mb-2">Respect față de client</h3>
            <p className="text-gray-700">
              Tratarea fiecărui client cu empatie, confidențialitate și respect pentru drepturile sale.
            </p>
          </div>

          <div className="bg-white p-6 shadow-lg rounded-xl border-l-4 border-amber-600 hover:bg-amber-50 transition">
            <h3 className="text-xl font-semibold mb-2">Dedicare</h3>
            <p className="text-gray-700">
              Implicare deplină în cazuri, timp și efort pentru a atinge cele mai bune rezultate.
            </p>
          </div>
        </div>
      </section>
      
      {/* SECȚIUNE HARTĂ */}
<section className="bg-white py-16">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-blue-950 text-center mb-8">
      Unde ne poți găsi?
    </h2>

    <p className="text-center text-gray-700 mb-6">
      Ne găsești la biroul nostru din Bălți, pe strada Ștefan cel Mare 90.
    </p>

    <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
      <iframe
        title="Locația biroului"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2682.221003965536!2d27.91441307598614!3d47.75776747120415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cb67310fe407eb%3A0xc778267977cba576!2sStrada%20%C8%98tefan%20cel%20Mare%2090%2C%20MD-3121%2C%20B%C4%83l%C8%9Bi%2C%20Moldova!5e0!3m2!1sro!2s!4v1765528655836!5m2!1sro!2s"
        width="100%"
        height="100%"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</section>


      <StickyContacts />
    </div>
  );
}
