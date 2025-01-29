import { Github, Linkedin, Mail } from "lucide-react";
import SandovalCoder from "../assets/SandovalCoder.jpg";

function Hero() {
  return (
    <div className="bg-black text-white text-center py-16">
      <img
        src={SandovalCoder}
        alt=""
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform
        transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4xl font-bold">
        Hola, Soy{" "}
        <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
          SandovalCoder
        </span>
      </h1>

      <p className="mt-4 text-lg text-gray-300">
        Desarrollador Web | Enfocado en Tecnología y Soluciones Innovadoras
      </p>
      <div className="mt-8 space-x-4">
        <button
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white
              transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
          onClick={() => window.open("https://wa.me/51900899586", "_blank")}
        >
          Contáctame
        </button>
      </div>
      <div className="mt-8 space-x-4 flex justify-center">
        <a
          href="https://github.com/SandovalCoder"
          className="p-3 bg-blue-500/10 rounded-lg hover:bg-blue-500/20 transition-colors"
        >
          <Github size={24} className="text-blue-400" />
        </a>
        <a
          href="https://www.linkedin.com/in/vilder-luis-sandoval-verde-19230b305/"
          className="p-3 bg-blue-500/10 rounded-lg hover:bg-blue-500/20 transition-colors"
        >
          <Linkedin size={24} className="text-blue-400" />
        </a>
        <a
          href="mailto:luisvilders@gmail.com"
          className="p-3 bg-blue-500/10 rounded-lg hover:bg-blue-500/20 transition-colors"
        >
          <Mail size={24} className="text-blue-400" />
        </a>
      </div>
    </div>
  );
}

export default Hero;
