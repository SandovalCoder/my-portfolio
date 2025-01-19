
import SandovalCoder from "../assets/SandovalCoder.jpg";

const About = () => {
    return (
      <div className="bg-black text-white py-20" id="about">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <h2 className="text-4xl font-bold text-center mb-12">Sobre Mi</h2>
          <div className="flex flex-col md:flex-row items-center md:space-x-12">
            <img
              src={SandovalCoder}
              alt=""
              className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
            />
            <div className="flex-1">
              <p className="text-lg mb-8">
                Soy un estudiante del octavo ciclo de Ingeniería de Sistemas de Información, 
                apasionado por la tecnología y el desarrollo full-stack que se centra en la creación de
                aplicaciones web modernas y responsivas. Con una sólida base
                en tecnologías frontend y backend, me esfuerzo por crear
                experiencias de usuario fluidas y eficientes.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <label htmlFor="htmlandcss" className="w-2/12">
                    HTML & CSS
                  </label>
                  <div className="grow bg-gray-800 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                      transform transition-transform duration-300 hover:scale-105 w-10/12"
                    ></div>
                  </div>
                </div>
                <div className="flex items-center">
                  <label htmlFor="htmlandcss" className="w-2/12">
                    React
                  </label>
                  <div className="grow bg-gray-800 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                      transform transition-transform duration-300 hover:scale-105 w-6/12"
                    ></div>
                  </div>
                </div>
                <div className="flex items-center">
                  <label htmlFor="htmlandcss" className="w-2/12">
                  Angular
                  </label>
                  <div className="grow bg-gray-800 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                      transform transition-transform duration-300 hover:scale-105 w-3/12"
                    ></div>
                  </div>
                </div>
                <div className="flex items-center">
                  <label htmlFor="htmlandcss" className="w-2/12">
                  Spring Boot
                  </label>
                  <div className="grow bg-gray-800 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                      transform transition-transform duration-300 hover:scale-105 w-5/12"
                    ></div>
                  </div>
                </div>
              </div>
              <div className="mt-12 flex justify-center space-x-12 text-center">
                  <div>
                      <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                  bg-gradient-to-r from-green-400 to-blue-500">
                          1
                      </h3>
                      <p>Años de experiencia</p>
                  </div>
                  <div>
                      <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                  bg-gradient-to-r from-green-400 to-blue-500">
                          10+
                      </h3>
                      <p>Proyectos completados</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;