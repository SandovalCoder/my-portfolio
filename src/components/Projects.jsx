import RidenOn from "../assets/RidenOn.png";
import Calculator from "../assets/Calculator.png";
import UniTrack from "../assets/UniTrack.png";

const projects = [
    {
      id: 1,
      name: "RidenOn",
      technologies: "HTML5, CSS3, Bootstrap",
      image: RidenOn,
      description: "RideOn es una plataforma de compra de autos en línea con diseño responsivo, construida con HTML5, CSS3 y Bootstrap.",
      github: "https://github.com/SandovalCoder/RideOn_Landing_Page",
    },
    {
      id: 2,
      name: "Calculator",
      technologies: "HTML5, CSS3, Bootstrap 5, JavaScript",
      image: Calculator ,
      description: "Calculadora simple con operaciones básicas y diseño responsivo, construida con HTML, CSS, Bootstrap 5 y JavaScript.",
      github: "https://github.com/SandovalCoder/Calculator",
    },
    {
      id: 3,
      name: "UniTrack",
      technologies: "HTML5, CSS3, Bootstrap 5, JavaScript",
      image: UniTrack,
      description: "UniTrack es una plataforma para gestionar y hacer seguimiento de tu rendimiento académico. Registra tus cursos, calcula tu promedio ponderado y más.",
      github: "https://github.com/SandovalCoder/PoderadoUniversitario",
    },
  ];
  
  const Projects = () => {
    return (
      <div className="bg-black text-white py-20" id="project">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <h2 className="text-4xl font-bold text-center mb-12">Mi Proyectos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
              transform transition-transform duration-300 hover:scale-105">
                <img src={project.image} alt={project.name} className="rounded-lg mb-4 
                w-full h-auto object-cover" />
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                <p className="text-blue-400 mb-4 font-medium">{project.technologies}</p>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex justify-center">
                <a href={project.github} className="inline-block bg-gradient-to-r 
                from-green-400 to-blue-500 text-white px-10 py-2 rounded-full" target="_blank" 
                rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Projects;