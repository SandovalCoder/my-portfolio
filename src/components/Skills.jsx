import { Code2, Database, Cpu } from 'lucide-react';

function Skills() {
  const technologies = {
    languages: [
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', level: 'Intermedio' },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', level: 'Intermedio' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', level: 'Intermedio' },
      { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', level: 'Básico' }
    ],
    frameworks: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: 'Intermedio' },
      { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', level: 'Intermedio' },
      { name: 'Spring', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', level: 'Intermedio' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', level: 'Básico' }
    ],
    databases: [
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', level: 'Intermedio' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', level: 'Intermedio' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', level: 'Intermedio' },
      { name: 'SQL Server', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg', level: 'Intermedio' }
    ]
  };

  return (
    <div className="bg-black text-white py-20" id="skills">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Habilidades</h2>
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Languages */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Code2 className="text-blue-400" size={24} />
              Lenguajes de Programación
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {technologies.languages.map((tech) => (
                <div
                  key={tech.name}
                  className="relative group bg-gray-800 rounded-lg shadow-lg hover:shadow-blue-500/50 overflow-hidden"
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-16 h-16 mx-auto mt-4"
                  />
                  <p className="text-center text-gray-300 mt-2">{tech.name}</p>
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-lg font-bold text-white">{tech.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Cpu className="text-blue-400" size={24} />
              Frameworks y Runtime
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {technologies.frameworks.map((tech) => (
                <div
                  key={tech.name}
                  className="relative group bg-gray-800 rounded-lg shadow-lg hover:shadow-blue-500/50 overflow-hidden"
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-16 h-16 mx-auto mt-4"
                  />
                  <p className="text-center text-gray-300 mt-2">{tech.name}</p>
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-lg font-bold text-white">{tech.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Databases */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Database className="text-blue-400" size={24} />
              Bases de Datos
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {technologies.databases.map((tech) => (
                <div
                  key={tech.name}
                  className="relative group bg-gray-800 rounded-lg shadow-lg hover:shadow-blue-500/50 overflow-hidden"
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-16 h-16 mx-auto mt-4"
                  />
                  <p className="text-center text-gray-300 mt-2">{tech.name}</p>
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-lg font-bold text-white">{tech.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
