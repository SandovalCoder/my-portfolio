

function Navbar() {
  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
        <div className="container py-2 flex justify-center md:justify-between items-center">
            <div className="text-2xl font-bold hidden md:inline bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">SandovalCoder</div>
            <div className="space-x-6">
                <a href="#Home" className="nav-link hover:text-blue-400 transition-colors">Inicio</a>
                <a href="#about" className='nav-link hover:text-blue-400 transition-colors'>Sobre Mi</a>
                <a href="#experience" className='nav-link hover:text-blue-400 transition-colors'>Experiencia</a>
                <a href="#education" className='nav-link hover:text-blue-400 transition-colors'>Educación</a>
                <a href="#skills" className='nav-link hover:text-blue-400 transition-colors'>Habilidades</a>
                <a href="#project" className='nav-link hover:text-blue-400 transition-colors'>Proyectos</a>
                <a href="#contact" className='nav-link hover:text-blue-400 transition-colors'>Contacto</a>
            </div>
            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
            onClick={() => window.open('https://wa.me/51900899586', '_blank')}>Contáctame</button>
        </div>
    </nav>
  )
}

export default Navbar