import technologies from "../types/technologies";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Sobre Mi</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Description */}
          <div className="space-y-8">
            <div>
              <p className="text-lg mb-8 text-justify">
                Estudiante de 8vo ciclo de Ingeniería de Sistemas de Información
                y{" "}
                <span
                  className=" font-bold text-transparent bg-clip-text 
                  bg-gradient-to-r from-green-400 to-blue-500 "
                >
                  Desarrollador Web
                </span>{" "}
                apasionado por crear soluciones tecnológicas innovadoras y
                eficientes. Con experiencia en{" "}
                <span
                  className=" font-bold text-transparent bg-clip-text 
                  bg-gradient-to-r from-green-400 to-blue-500"
                >
                  frontend
                </span>{" "}
                y{" "}
                <span
                  className=" font-bold text-transparent bg-clip-text 
                  bg-gradient-to-r from-green-400 to-blue-500"
                >
                  backend
                </span>
                , me especializo en aplicaciones web modernas, responsivas y de
                alto rendimiento. Mi objetivo es combinar tecnología y
                creatividad para resolver problemas y mejorar la experiencia del
                usuario. ¡Siempre listo para nuevos desafíos!
              </p>
              {/* Download CV */}
              <div className="mt-8 text-center">
                <button className="px-6 py-2 border border-white rounded-full hover:bg-gradient-to-r from-green-400 to-blue-500 hover:text-white transition-colors">
                  Descargar CV
                </button>
              </div>

              {/* Experience y projects */}
              <div className="mt-12 flex justify-center space-x-12 text-center">
                <div>
                  <h3
                    className="text-2xl font-bold text-transparent bg-clip-text 
                  bg-gradient-to-r from-green-400 to-blue-500"
                  >
                    1
                  </h3>
                  <p>Años de experiencia</p>
                </div>
                <div>
                  <h3
                    className="text-2xl font-bold text-transparent bg-clip-text 
                  bg-gradient-to-r from-green-400 to-blue-500"
                  >
                    10+
                  </h3>
                  <p>Proyectos completados</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div>
            <div className="space-y-12">
              {/* Frontend */}
              <div>
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                  Front-End
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-8">
                  {technologies.frontend.map((tech, index) => (
                    <div key={index} className="group relative">
                      <div className="w-16 h-16 mx-auto bg-gray-900 rounded-lg p-3 hover:bg-gray-800 transition-all duration-300">
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div>
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                  Back-End
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-8">
                  {technologies.backend.map((tech, index) => (
                    <div key={index} className="group relative">
                      <div className="w-16 h-16 mx-auto bg-gray-900 rounded-lg p-3 hover:bg-gray-800 transition-all duration-300">
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* programming languages */}
              <div>
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                  Lenguajes de Programación
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-8">
                  {technologies.languages.map((tech, index) => (
                    <div key={index} className="group relative">
                      <div className="w-16 h-16 mx-auto bg-gray-900 rounded-lg p-3 hover:bg-gray-800 transition-all duration-300">
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
