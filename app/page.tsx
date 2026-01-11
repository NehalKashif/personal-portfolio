export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-900 to-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500/20 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-cyan-500/10 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-yellow-500/30 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-indigo-500/20 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-pink-500/15 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
        
        {/* Additional Bubbles */}
        <div className="absolute top-10 right-1/4 w-18 h-18 bg-green-500/15 rounded-full animate-pulse" style={{animationDelay: '0.8s'}}></div>
        <div className="absolute bottom-1/3 left-16 w-22 h-22 bg-orange-500/12 rounded-full animate-bounce" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute top-3/4 right-32 w-14 h-14 bg-teal-500/18 rounded-full animate-ping" style={{animationDelay: '1.2s'}}></div>
        <div className="absolute bottom-10 left-1/3 w-26 h-26 bg-violet-500/14 rounded-full animate-pulse" style={{animationDelay: '3.2s'}}></div>
        <div className="absolute top-1/4 left-2/3 w-12 h-12 bg-rose-500/20 rounded-full animate-bounce" style={{animationDelay: '0.3s'}}></div>
        <div className="absolute bottom-2/3 right-1/4 w-30 h-30 bg-emerald-500/10 rounded-full animate-pulse" style={{animationDelay: '1.8s'}}></div>
        <div className="absolute top-2/3 left-10 w-16 h-16 bg-amber-500/16 rounded-full animate-ping" style={{animationDelay: '2.8s'}}></div>
        <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-lime-500/13 rounded-full animate-bounce" style={{animationDelay: '0.6s'}}></div>
      </div>
      <nav className="fixed top-0 w-full bg-linear-to-r from-blue-900/40 to-black/40 backdrop-blur-md z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-white font-bold text-xl transition-all duration-300 hover:text-yellow-400">Nehal Kashif</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-300 hover:text-yellow-400">Home</a>
              <a href="#about" className="text-gray-300 hover:text-yellow-400">About</a>
              <a href="#projects" className="text-gray-300 hover:text-yellow-400">Projects</a>
              <a href="#contact" className="text-gray-300 hover:text-yellow-400">Contact</a>
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
            <span className="bg-linear-to-r from-yellow-300 via-yellow-400 to-orange-600 bg-clip-text text-transparent drop-shadow-lg">
              Nehal Kashif
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            A passionate <span className="bg-linear-to-r from-yellow-300 via-yellow-400 to-orange-600 bg-clip-text text-transparent font-bold">Software Engineer</span> and <span className="bg-linear-to-r from-yellow-300 via-yellow-400 to-orange-600 bg-clip-text text-transparent font-bold">Frontend web developer</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-linear-to-r from-blue-800 to-black text-white font-semibold rounded-full hover:bg-linear-to-r hover:from-yellow-300 hover:via-yellow-400 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 hover:rotateY-12 hover:shadow-2xl">
              View My Work
            </button>
            <button className="px-8 py-3 border-2 border-gray-600 text-gray-300 font-semibold rounded-full hover:bg-linear-to-r hover:from-yellow-300 hover:via-yellow-400 hover:to-orange-600 hover:text-white transition-all duration-300 transform hover:scale-105 hover:rotateY-12 hover:shadow-2xl">
              Get In Touch
            </button>
          </div>
        </div>
      </main>
      <section id="about" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
            <p className="text-xl text-gray-300">Get to know me better</p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-shrink-0">
              <img
                src="public/aboutImg.jpeg"
                alt="Nehal Kashif"
                className="w-64 h-64 rounded-full object-cover border-4 border-blue-500 shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Hi! I'm Nehal Kashif, a passionate developer with a love for creating innovative digital solutions.
                I specialize in web development, bringing ideas to life through clean code and beautiful designs.
                When I'm not coding, you can find me exploring new technologies or contributing to open-source projects.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                My journey in tech started with curiosity and has evolved into a career dedicated to building
                meaningful applications that make a difference. I believe in continuous learning and staying
                up-to-date with the latest trends in technology.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <span className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium">React</span>
                <span className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium">Next.js</span>
                <span className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium">TypeScript</span>
                <span className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium">Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
