import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Angelica Gomez
        </h1>
        <p className="text-xl text-purple-300 mb-12">
          Full-Stack Developer | Game Developer | AI Integration Specialist
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-4xl font-bold text-white mb-12">Projekte</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Glitch Project */}
          <Link href="/glitch">
            <div className="group cursor-pointer bg-slate-800 rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 h-40 flex items-center justify-center">
                <h3 className="text-white text-3xl font-bold">GLITCH</h3>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Glitch verbessert</h3>
                <p className="text-gray-300 mb-4">
                  Verbessertes Action-Game mit neuen Features.
                </p>
                <div className="text-purple-400 font-semibold group-hover:text-purple-300">
                  Projekt anschauen →
                </div>
              </div>
            </div>
          </Link>

          {/* IHK Bot Project */}
          <Link href="/kaspar">
            <div className="group cursor-pointer bg-slate-800 rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 h-40 flex items-center justify-center">
                <h3 className="text-white text-3xl font-bold">BOT</h3>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">IHK Anwendungsentwickler Lern Bot</h3>
                <p className="text-gray-300 mb-4">
                  KI-gestützter Lernbegleiter für die IHK-Prüfung.
                </p>
                <div className="text-blue-400 font-semibold group-hover:text-blue-300">
                  Projekt anschauen →
                </div>
              </div>
            </div>
          </Link>

          {/* MOI Bot Project */}
          <Link href="/moi">
            <div className="group cursor-pointer bg-slate-800 rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300">
              <div className="bg-gradient-to-br from-cyan-600 to-teal-600 h-40 flex items-center justify-center">
                <h3 className="text-white text-3xl font-bold">MOI</h3>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">MOI Bot</h3>
                <p className="text-gray-300 mb-4">
                  Persönlicher KI-Assistent für verschiedene Aufgaben.
                </p>
                <div className="text-cyan-400 font-semibold group-hover:text-cyan-300">
                  Projekt anschauen →
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
