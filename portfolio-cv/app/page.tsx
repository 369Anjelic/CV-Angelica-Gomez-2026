'use client';

import { useState } from 'react';
import Link from 'next/link';

const PROJECTS = [
  {
    emoji: '🎭',
    name: 'Kaspar Hauser Quest',
    desc: 'Interaktives Stadträtsel-Spiel über die Kaspar Hauser Geschichte.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    link: '/projects/Kaspar%20hauser/kaspar-mittelalter-quest.html',
  },
  {
    emoji: '✈️',
    name: 'Flight Trainer - 2 Player',
    desc: 'Interaktiver Flight Simulator für Piloten-Training.',
    tags: ['HTML5', 'Canvas', 'JavaScript', 'WebGL'],
    link: '/projects/fly%20game/',
  },
  {
    emoji: '⚡',
    name: 'Glitch verbessert',
    desc: 'Verbessertes Action-Game mit neuen Features.',
    tags: ['Next.js', 'React', 'Node.js', 'Docker'],
    link: '/projects/Glitch%20verbessert/',
  },
  {
    emoji: '💬',
    name: 'MOI Bot',
    desc: 'Intelligenter Chatbot mit natürlicher Sprachverarbeitung.',
    tags: ['Claude API', 'React', 'Node.js'],
    link: '/projects/MOI%20bot/index.html',
  },
  {
    emoji: '🐍',
    name: 'Python Coding Übungen',
    desc: 'Sammlung von 20 Python-Programmierübungen.',
    tags: ['Python', 'OOP', 'Algorithms'],
    link: '/projects/python%20coden%20%C3%BCbungen/',
  },
  {
    emoji: '📊',
    name: 'Umfrage App',
    desc: 'Umfrage-Anwendung für Erfassung und Auswertung von Daten.',
    tags: ['HTML5', 'JavaScript', 'CSS'],
    link: '/projects/umfrage/',
  },
];

const SKILLS = [
  { name: 'API Development', category: 'Backend', progress: 37 },
  { name: 'State Management', category: 'Architecture', progress: 39 },
  { name: 'Game Development', category: 'Specialized', progress: 35 },
  { name: 'DevOps & Deployment', category: 'Infrastructure', progress: 41 },
  { name: 'AI & Claude API', category: 'Emerging Tech', progress: 55 },
  { name: 'Git & GitHub', category: 'Tools & Version Control', progress: 37 },
  { name: 'Blender 3D', category: 'Tools & Design', progress: 30 },
  { name: 'PyCharm IDE', category: 'Tools & Development', progress: 35 },
  { name: 'Android Studio', category: 'Tools & Mobile', progress: 33 },
  { name: 'Obsidian', category: 'Tools & Organization', progress: 43 },
  { name: 'LLMs & AI Models', category: 'Emerging Tech', progress: 40 },
  { name: 'Machine Learning', category: 'Emerging Tech', progress: 31 },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 p-6">
        <div className="max-w-5xl mx-auto flex items-center gap-4">
          <span className="text-4xl">💻</span>
          <div>
            <h1 className="text-3xl font-bold text-black">Angelica Gomez</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Profile Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Photo */}
          <div className="md:col-span-1">
            <img
              src="/cv-images/image1.jpeg"
              alt="Angelica Gomez"
              className="w-full rounded-md"
              onError={(e) => {
                const img = e.target as HTMLImageElement;
                img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23ddd" width="200" height="200"/%3E%3C/svg%3E';
              }}
            />
          </div>

          {/* Profile Info */}
          <div className="md:col-span-3">
            <h1 className="text-4xl font-bold text-black mb-2">Angelica Gomez</h1>
            <p className="text-2xl font-bold text-blue-600 mb-4">IT-/KI-Quereinsteigerin</p>
            <p className="text-sm text-gray-700 mb-6">
              Königswarterstraße 38, 90762 Fürth | 0157 3923 1128 | anjelicgomez@hotmail.com
            </p>

            <h3 className="text-lg font-bold text-blue-600 mb-3">Kurzprofil</h3>
            <p className="text-sm font-semibold text-gray-800 leading-relaxed">
              Als neurodivergente, analytisch denkende Persönlichkeit bringe ich Neugier, IT-Begeisterung und eine lösungsorientierte Arbeitsweise in Teams ein. Meine Stärke liegt darin, komplexe Probleme schnell zu durchdringen und KI-Tools effektiv zur Entwicklung praxisnaher Lösungen einzusetzen.
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-12 border-b border-gray-300">
          <div className="flex flex-wrap gap-2 mb-0">
            <TabButton
              label="Berufserfahrung"
              active={activeTab === 'experience'}
              onClick={() => setActiveTab('experience')}
            />
            <TabButton
              label="Schulische Ausbildung"
              active={activeTab === 'education'}
              onClick={() => setActiveTab('education')}
            />
            <TabButton
              label="Zusatzqualifikationen"
              active={activeTab === 'additional'}
              onClick={() => setActiveTab('additional')}
            />
            <TabButton
              label="Developer Skills & Code"
              active={activeTab === 'developer'}
              onClick={() => setActiveTab('developer')}
            />
            <TabButton
              label="Fachliche Skills"
              active={activeTab === 'skills'}
              onClick={() => setActiveTab('skills')}
            />
            <TabButton
              label="Softskills"
              active={activeTab === 'softskills'}
              onClick={() => setActiveTab('softskills')}
            />
            <TabButton
              label="Sprachen"
              active={activeTab === 'languages'}
              onClick={() => setActiveTab('languages')}
            />
            <TabButton
              label="Hobbies"
              active={activeTab === 'hobbies'}
              onClick={() => setActiveTab('hobbies')}
            />
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'experience' && (
          <div className="mb-12 text-sm">
            <h2 className="text-lg font-bold text-blue-600 mb-6">Berufserfahrung</h2>
            <ExperienceItem
              period="01/2026 – 06/2026"
              title="Praktikum als Lern-Bot-Spezialist"
              company="Unwritten Studio, Nürnberg"
              items={[
                'Spezialisierung auf die Anwendung von Claude code und Vercel-Deployment',
                'Tech Stack: React, Python Backend, Full-Stack API-Integration, GitHub',
                'Projektleitung des Kaspar-Hauser-Chatbots: Konzeption der Feature-Architektur, Teamkoordination sowie Durchführung eines produktionsreifen Launchs inklusive Testing.'
              ]}
            />
            <ExperienceItem
              period="10/2025 – 12/2025"
              title="Freiberufliche Bauzeichnerin / CAD-Spezialistin"
              company="Alexander Flügge Ingenieurbüro, Nürnberg"
              items={[
                'Vertiefung CAD-Planung: Baupläne, Baueingabepläne, Detailzeichnungen.',
                'Eigenständige Teamkoordination und Qualitätssicherung technischer Dokumentation'
              ]}
            />
            <ExperienceItem
              period="01/2022 – 09/2025"
              title="Freiberufliche Videografin"
              company="Deutschlandweit, Remote und vor Ort"
              items={[
                'Konzeption, Planung und Umsetzung zielgruppenorientierter Videoprojekte',
                'KI-gestützte Videobearbeitung, z. B. Color Grading in DaVinci',
                'Nutzung von 3D-Animationen in Blender und Fusion für Logoanimationen'
              ]}
            />
            <ExperienceItem
              period="10/2009 – 05/2011"
              title="Freiberufliche Goldschmiedin"
              company="Diverse Goldschmiede, Deutschland"
              items={[
                'Vertrieb und Herstellung eigener Schmuckstücke und -designs',
                'Annahme und Auslieferung von Kundenaufträgen',
                'Kooperation in Luxusschmuckdesign & Reparaturen mit diversen Juwelieren'
              ]}
            />
            <ExperienceItem
              period="07/2005 – 07/2009"
              title="Freiberufliche Goldschmiedin"
              company="Diverse Goldschmiede, Spanien"
              items={[
                '4 Jahre Praxis-Vertiefung in unterschiedlichen Goldschmiedebetrieben'
              ]}
            />
          </div>
        )}

        {activeTab === 'education' && (
          <div className="mb-12 text-sm text-gray-600">
            <p className="font-bold">Schulische Ausbildung wird geladen...</p>
          </div>
        )}

        {activeTab === 'additional' && (
          <div className="mb-12 text-sm text-gray-600">
            <p className="font-bold">Zusatzqualifikationen werden geladen...</p>
          </div>
        )}

        {activeTab === 'softskills' && (
          <div className="mb-12 text-sm text-gray-600">
            <p className="font-bold">Softskills werden geladen...</p>
          </div>
        )}

        {activeTab === 'developer' && (
          <div className="mb-12 text-sm text-gray-600">
            <p className="font-bold">Developer Skills & Code Knowledge werden geladen...</p>
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="mb-12 text-sm text-gray-600">
            <p className="font-bold">Fachliche Skills werden geladen...</p>
          </div>
        )}

        {activeTab === 'languages' && (
          <div className="mb-12 text-sm text-gray-600">
            <p className="font-bold">Sprachen werden geladen...</p>
          </div>
        )}

        {activeTab === 'hobbies' && (
          <div className="mb-12 text-sm text-gray-600">
            <p className="font-bold">Hobbies werden geladen...</p>
          </div>
        )}
      </div>

      {/* Projects Section */}
      <section className="bg-white py-12 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-black mb-8">Projekte</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((project, idx) => (
              <a
                key={idx}
                href={project.link}
                className="block border-2 border-blue-600 rounded-lg p-5 bg-white hover:shadow-lg transition"
              >
                <div className="mb-3">
                  <span className="text-4xl mr-3">{project.emoji}</span>
                  <span className="inline-block bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">
                    ✅ completed
                  </span>
                </div>
                <h3 className="text-lg font-bold text-black mb-2">{project.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="w-full py-3 bg-blue-600 text-white text-center rounded font-bold text-sm">
                  🚀 Projekt öffnen
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Skills Section */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-black mb-2">💻 Developer Skills & Code Knowledge</h2>
          <p className="text-gray-600 mb-8">Praktische Skills für Anwendungsentwicklung mit Code-Beispielen</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {SKILLS.map((skill, idx) => (
              <div
                key={idx}
                className="border-2 border-blue-600 rounded-lg p-4 bg-white hover:shadow-md transition"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold text-blue-600 text-sm">{skill.name}</h4>
                    <p className="text-xs text-gray-600">{skill.category}</p>
                  </div>
                  <span className="text-lg">▶</span>
                </div>
                <div className="bg-gray-300 h-1.5 rounded overflow-hidden mb-2">
                  <div
                    className="bg-blue-600 h-full"
                    style={{ width: `${skill.progress}%` }}
                  />
                </div>
                <span className="text-xs font-bold text-blue-600">{skill.progress}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-8 text-center text-sm text-gray-700">
        <p className="font-bold mb-2">Angelica Gomez</p>
        <p className="mb-1">Königswarterstraße 38</p>
        <p className="mb-1">90762 Fürth</p>
        <p className="mb-2">📞 0157 3923 1128</p>
        <p className="mb-4">✉️ anjelicgomez@hotmail.com</p>
        <p className="border-t border-gray-300 pt-4 text-xs">© 2026 Angelica Gomez. Alle Rechte vorbehalten.</p>
      </footer>
    </main>
  );
}

function TabButton({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 font-bold text-sm rounded-t transition ${
        active
          ? 'bg-blue-600 text-white'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
    >
      {label}
    </button>
  );
}

function ExperienceItem({
  period,
  title,
  company,
  items,
}: {
  period: string;
  title: string;
  company: string;
  items: string[];
}) {
  return (
    <div className="mb-6">
      <p className="font-bold">{period}: {title}</p>
      <p className="text-gray-600 mb-2">{company}</p>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
