import React from "react";
import StickyContacts from "../components/StickyContacts";

export default function Contacte() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* SECȚIUNE CONTACT */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-950 text-center mb-12">
          Contactează-ne
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Coloana stânga: Poza avocatului + hook */}
          <div className="flex-1 flex flex-col justify-center items-center md:items-start">
            <img
              src="/images/IgorCiuru.jpeg"
              alt="Avocat Igor Ciuru"
              className="w-full max-w-xs h-auto object-cover rounded-lg shadow-lg"
            />
            <p className="text-center md:text-left text-lg md:text-xl font-semibold text-gray-800 mt-6">
              Ai nevoie de consultanță juridică profesionistă? Igor Ciuru oferă expertiză și soluții clare pentru fiecare caz.
            </p>
          </div>

          {/* Coloana dreapta: Formular */}
          <div className="flex-1 w-full">
<form className="bg-white p-8 rounded-lg shadow-lg flex flex-col gap-4">
  <label className="text-gray-700 font-medium">Nume</label>
  <input
    type="text"
    placeholder="Numele tău"
    className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
  />

  <label className="text-gray-700 font-medium">Email</label>
  <input
    type="email"
    placeholder="Email-ul tău"
    className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
  />

  <label className="text-gray-700 font-medium">Telefon</label>
  <input
    type="tel"
    placeholder="Numărul tău de telefon"
    className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
  />

  <label className="text-gray-700 font-medium">Mesaj</label>
  <textarea
    placeholder="Scrie mesajul tău"
    className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
    rows={5}
  ></textarea>

  <button
    type="submit"
    className="bg-amber-600 text-white font-semibold py-3 rounded-lg hover:bg-amber-500 transition"
  >
    Trimite mesaj
  </button>
</form>

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
