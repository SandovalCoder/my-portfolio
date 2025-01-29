import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
              SandovalCoder
            </h3>
            <p className="text-gray-400">
              Apasionado por crear soluciones tecnológicas innovadoras y
              eficientes, enfocadas en mejorar la experiencia del usuario
              mediante aplicaciones web modernas, responsivas y de alto
              rendimiento
            </p>
          </div>
        </div>

        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} SandovalCoder. Todos los derechos
            reservados.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a
              href="https://www.linkedin.com/in/vilder-luis-sandoval-verde-19230b305/"
              className="text-gray-400 hover:text-white"
              title="Visita mi perfil de LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/SandovalCoder"
              className="text-gray-400 hover:text-white"
              title="Visita mi perfil de GitHub"
            >
              <FaGithub />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacidad
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Condiciones de servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
