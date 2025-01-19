
import {Code2, Database, Cpu, } from 'lucide-react';

function Skills() {
    const technologies = {
        languages: [
          { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
          { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
          { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
          { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' }
        ],
        frameworks: [
          { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
          { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
          { name: 'Spring', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
          { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' }
        ],
        databases: [
          { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
          { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
          { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
          { name: 'SQL Server', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg' }
        ]
      };
  return (
    <div className="bg-black text-white py-20" id="skills">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Habilidades</h2>
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Languages */}
            <div className="animate-fadeInUp">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Code2 className="text-blue-400" size={24} />
                Lenguajes de Programación
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {technologies.languages.map((tech) => (
                  <div key={tech.name} className="bg-gray-800/50 p-6 rounded-lg shadow-xl border border-gray-700/50 hover:border-blue-500/30 transition-all tech-icon">
                    <img src={tech.icon} alt={tech.name} className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-center text-gray-300">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div className="animate-fadeInUp">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Cpu className="text-blue-400" size={24} />
                Frameworks y Runtime
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {technologies.frameworks.map((tech) => (
                  <div key={tech.name} className="bg-gray-800/50 p-6 rounded-lg shadow-xl border border-gray-700/50 hover:border-blue-500/30 transition-all tech-icon">
                    <img src={tech.icon} alt={tech.name} className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-center text-gray-300">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="animate-fadeInUp">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Database className="text-blue-400" size={24} />
                Bases de Datos
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {technologies.databases.map((tech) => (
                  <div key={tech.name} className="bg-gray-800/50 p-6 rounded-lg shadow-xl border border-gray-700/50 hover:border-blue-500/30 transition-all tech-icon">
                    <img src={tech.icon} alt={tech.name} className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-center text-gray-300">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Skills