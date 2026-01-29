import { FaWhatsapp, FaViber, FaFacebookMessenger} from "react-icons/fa";

export default function StickyContacts() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/37379774522"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition"
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={26} />
      </a>

      <a
        href="viber://chat?number=%2B37379774522"
        className="flex items-center justify-center w-14 h-14 bg-violet-600 hover:bg-violet-700 text-white rounded-full shadow-lg transition"
        aria-label="Viber"
      >
        <FaViber size={26} />
      </a>
            <a
        href="https://m.me/USERNAME_TAU"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition"
        aria-label="Messenger"
      >
        <FaFacebookMessenger size={26} />
      </a>
    </div>
  );
}
