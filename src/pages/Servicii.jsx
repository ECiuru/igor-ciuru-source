import React from "react";
import {
  FaBriefcase,
  FaFileAlt,
  FaUniversity,
  FaHandshake,
  FaBalanceScale,
  FaBolt
} from "react-icons/fa";
import StickyContacts from "../components/StickyContacts";

export default function Servicii() {
  // Array cu toate serviciile + iconiță
  const servicii = [
    {
      titlu: "Consultanță juridică personalizată",
      descriere:
        "Ofer soluții clare și adaptate fiecărui caz în parte, pentru ca tu să înțelegi pe deplin drepturile și opțiunile tale înainte de a lua decizii importante.",
      icon: <FaBriefcase className="w-10 h-10 text-amber-500 mb-3" />
    },
    {
      titlu: "Redactare și analiză de documente",
      descriere:
        "Întocmesc, verific și adaptez contracte, cereri, notificări, plângeri și alte acte juridice astfel încât acestea să fie conforme cu legislația și protejate în fața autorităților sau instanțelor.",
      icon: <FaFileAlt className="w-10 h-10 text-amber-500 mb-3" />
    },
    {
      titlu: "Reprezentare în fața autorităților",
      descriere:
        "Asistență și reprezentare în relația cu instituțiile statului sau autoritățile administrative, inclusiv poliție, procuratură, instanțe sau alte entități publice.",
      icon: <FaUniversity className="w-10 h-10 text-amber-500 mb-3" />
    },
    {
      titlu: "Negociere și soluționare amiabilă",
      descriere:
        "Abordăm conflicte juridice pe cale amiabilă ori de câte ori este posibil, economisind timp, resurse și stres.",
      icon: <FaHandshake className="w-10 h-10 text-amber-500 mb-3" />
    },
    {
      titlu: "Reprezentare în instanță",
      descriere:
        "Te reprezint cu fermitate în fața instanțelor de judecată, cu o apărare strategică și argumentată pentru fiecare situație, fie civilă, penală sau contravențională.",
      icon: <FaBalanceScale className="w-10 h-10 text-amber-500 mb-3" />
    },
    {
      titlu: "Asistență în situații urgente",
      descriere:
        "Răspund prompt în cazuri sensibile sau urgente, oferind sprijin rapid și profesionist.",
      icon: <FaBolt className="w-10 h-10 text-amber-500 mb-3" />
    }
  ];

  return (
    <section className="bg-gray-50 min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-4">

        {/* BANNER SERVICII */}
        <div className="mb-10">
          <img
            src="/images/servicii.jpg"
            alt="Servicii juridice"
            className="w-full h-64 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* TITLUL PAGINII */}
        <h1 className="text-4xl font-bold text-blue-950 text-center mb-8">
          Serviciile pe care le ofer
        </h1>
        <p className="text-gray-700 text-lg text-center mb-12">
          Ofer consultanță și reprezentare juridică adaptată fiecărui caz, cu seriozitate, profesionalism și dedicare.
        </p>

        {/* CONTAINER SERVICII */}
        <div className="grid gap-10 md:grid-cols-2 mb-12">
          {servicii.map((serviciu, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-amber-600 hover:shadow-2xl transition-shadow duration-300 text-center"
            >
              {serviciu.icon}
              <h2 className="text-2xl font-semibold text-blue-950 mb-3">
                {serviciu.titlu}
              </h2>
              <p className="text-gray-700">{serviciu.descriere}</p>
            </div>
          ))}
        </div>

        {/* SECȚIUNE CONTACT */}
        <div className="text-center bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-950 mb-4">
            Ai întrebări sau vrei să ne contactezi?
          </h2>
          <p className="text-gray-700 mb-6">
            Ne poți suna, programa o consultație sau ne găsești la birou:
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-6">
            <a
              href="tel:+37379774522"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              ☎️ Apel direct
            </a>

          </div>
          <p className="text-gray-700 mb-4">
            📍 Ștefan cel Mare 90, Bălți
          </p>

          {/* GOOGLE MAPS EMBED */}
          <div className="w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Harta birou avocat"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2737.1585587436687!2d27.927442315638257!3d47.75968407915345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97b8b6a73c861%3A0xbed70c997c16a3dc!2s%C5%9Etefan%20cel%20Mare%2090%2C%20B%C4%83l%C8%9Bi!5e0!3m2!1sro!2smd!4v1700000000000!5m2!1sro!2smd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
              <StickyContacts />
      </div>
    </section>
    
    
  );
}
