// src/components/Footer.jsx
import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-8 pb-4 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Navegación */}
        <nav>
          <ul className="space-y-2">
            {["Indicadores","Nosotros","Estatus","Programación","RE","BACKLOG","Inspecciones"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-blue-400">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Redes Sociales */}
        <div className="space-y-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-2 hover:text-blue-400" aria-label="Facebook de CHM">
            <FaFacebookF /> Facebook
          </a>

          <a href="https://www.linkedin.com/company/chm-sas" target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-2 hover:text-blue-400" aria-label="LinkedIn de CHM">
            <FaLinkedin /> LinkedIn
          </a>

          <a href="https://www.instagram.com/chmmineria" target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-2 hover:text-pink-400" aria-label="Instagram de CHM">
            <FaInstagram /> Instagram
          </a>

          <a href="https://wa.me/573167543109" target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-2 hover:text-green-400" aria-label="WhatsApp de CHM">
            <FaWhatsapp /> WhatsApp
          </a>
        </div>
      </div>

      {/* Botón flotante de WhatsApp */}
      <a href="https://wa.me/573167543109" target="_blank" rel="noopener noreferrer"
         className="fixed bottom-4 right-4 bg-green-500 rounded-full p-3 shadow-lg hover:scale-105 transition-transform"
         aria-label="Chatea por WhatsApp">
        <FaWhatsapp className="text-white text-xl" />
      </a>

      {/* Leyenda de crédito */}
      <div className="mt-6 text-center text-sm text-gray-400">
        <p>
          <strong>Powered by HD SOFTWARE SOLUTIONS</strong> &copy; 2025 | Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
