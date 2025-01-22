import { Code2, Database, Cpu, Terminal, TrendingUp, Layers } from 'lucide-react';

function Experience() {
  return (
    <div className="bg-black text-white py-20" id="experience">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Experiencia Profesional</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800/50 rounded-lg p-8 shadow-xl border border-gray-700/50 hover:border-blue-500/30 transition-colors animate-fadeInUp">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="p-4 bg-blue-500/10 rounded-lg">
                <Code2 size={36} className="text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Desarrollador Web Jr - NeonHouseLed</h3>
                <p className="text-blue-400 mb-4">Noviembre 2024 - Presente</p>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start gap-3">
                    <Database className="flex-shrink-0 mt-1 text-blue-400" size={20} />
                    <span>Desarrollo y optimización de módulos administrativos para la plataforma "ContigoVoy", utilizando <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>Bootstrap</strong> y <strong>JavaScript</strong>.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Terminal className="flex-shrink-0 mt-1 text-blue-400" size={20} />
                    <span>Implementación y depuración del backend con <strong>PHP</strong> y <strong>MySQL</strong>, mejorando la estabilidad del sistema en un 30%.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Cpu className="flex-shrink-0 mt-1 text-blue-400" size={20} />
                    <span>Optimización de rendimiento y accesibilidad, logrando un puntaje del 90% en <strong>Google Lighthouse</strong>.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="flex-shrink-0 mt-1 text-blue-400" size={20} />
                    <span>Mejoras en SEO, aumentando la visibilidad de la plataforma en motores de búsqueda.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Layers className="flex-shrink-0 mt-1 text-blue-400" size={20} />
                    <span>Colaboración en la migración tecnológica hacia <strong>Next.js</strong>, <strong>TypeScript</strong>, <strong>Tailwind CSS</strong>, <strong>PostgreSQL</strong> y <strong>Supabase</strong>, diseñando componentes frontend clave.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
