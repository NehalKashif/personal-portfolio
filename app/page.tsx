export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-900 to-black">
      <nav className="fixed top-0 w-full bg-linear-to-r from-blue-900/40 to-black/40 backdrop-blur-md z-10 transition-all duration-500 ease-in-out">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-white font-bold text-xl transition-all duration-300 hover:text-blue-400">Nehal Kashif</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">Home</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">About</a>
              <a href="#projects" className="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">Projects</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">Contact</a>
            </div>
            <div className="md:hidden">
              <button className="text-gray-300 hover:text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main className="flex flex-col items-center justify-center min-h-screen px-4 py-16 pt-24" style={{perspective: '1000px', transformStyle: 'preserve-3d'}}>
        <div className="text-center max-w-4xl mx-auto transform rotateX-6 rotateY-6 hover:rotateX-0 hover:rotateY-0 transition-transform duration-700 ease-out">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Hi, I'm{" "}
            <span className="bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Nehal Kashif
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            A passionate Software Engineer and Frontend web developer
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-linear-to-r from-blue-800 to-black text-white font-semibold rounded-full hover:from-blue-900 hover:to-gray-900 transition-all duration-300 transform hover:scale-105 hover:rotateY-12 hover:shadow-2xl">
              View My Work
            </button>
            <button className="px-8 py-3 border-2 border-gray-600 text-gray-300 font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:rotateY-12 hover:shadow-2xl">
              Get In Touch
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
