import { BookOpen } from 'lucide-react'

function Education() {
  return (
    <div className="bg-black text-white py-20" id="education">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Educación</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800/50 rounded-lg p-8 shadow-xl border border-gray-700/50 hover:border-blue-500/30 transition-colors animate-fadeInUp">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="p-4 bg-blue-500/10 rounded-lg">
                <BookOpen size={36} className="text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Universidad Peruana de Ciencias Aplicadas</h3>
                <p className="text-xl text-gray-300 mt-2">Ingeniería de Sistemas de Información</p>
                <p className="text-blue-400 mt-4 font-medium">Becario Pronabec Beca 18</p>
                <p className="text-gray-400 mt-2">Octavo ciclo - Tercio superior</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
