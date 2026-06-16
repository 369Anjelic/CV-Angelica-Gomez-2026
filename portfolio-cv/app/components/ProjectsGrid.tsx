'use client';

import { useState } from 'react';

interface Project {
  id: number;
  icon: string;
  title: string;
  description: string;
  fullDescription?: string;
  status: 'active' | 'wip' | 'planning';
  tech: string[];
  url?: string;
  demo?: string;
  github?: string;
  exercises?: Array<{ name: string; folder: string }>;
}

export default function ProjectsGrid({ filter = 'all' }: { filter?: string }) {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const [projects] = useState<Project[]>([
    {
      id: 1,
      icon: '✈️',
      title: 'Flight Trainer',
      description: 'Interaktiver Flight Simulator für Piloten-Training. Zwei Spieler können gemeinsam trainieren.',
      fullDescription: 'Ein interaktives 3D Flight Simulator Spiel, in dem zwei Spieler gemeinsam Flugszenarien trainieren können. Mit realistischen Flugphysiken, Umgebungen und Missions-Modi.',
      status: 'active',
      tech: ['HTML5', 'Canvas', 'JavaScript', 'WebGL'],
      url: '/fly%20game/index.html',
    },
    {
      id: 2,
      icon: '🎭',
      title: 'Kaspar Hauser Quest',
      description: 'Interaktives Stadträtsel-Spiel über die Kaspar Hauser Geschichte mit mittelalterlichem Setting.',
      fullDescription: 'Ein innovatives 3-phasen Stadträtsel-Spiel basierend auf der historischen Figur Kaspar Hauser. Immersives Gameplay mit mittelalterlichem Setting, historischen Fakten und rätselhaften Herausforderungen.',
      status: 'active',
      tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      url: '/Kaspar%20hauser/index.html',
    },
    {
      id: 3,
      icon: '⚡',
      title: 'Glitch verbessert',
      description: 'IHK Anwendungsentwickler bot',
      fullDescription: 'Ein vollständig überarbeitetes Action-Game mit verbesserten Mechaniken, neuen Features wie erweiterte Levels, besserer Performance-Optimierung, und erweitertem Gameplay.',
      status: 'active',
      tech: ['Next.js', 'React', 'Node.js', 'Docker'],
      url: '/Glitch%20verbessert/index.html',
    },
    {
      id: 7,
      icon: '💬',
      title: 'MOI Bot',
      description: 'Intelligenter Chatbot mit natürlicher Sprachverarbeitung und Context Management.',
      fullDescription: 'Ein fortgeschrittener Chatbot mit NLP-Fähigkeiten, das Kontexte verwaltet und natürliche Unterhaltungen führt. Mit vollständiger Context-Verwaltung und intelligenten Antworten.',
      status: 'active',
      tech: ['Claude API', 'React', 'Node.js', 'MongoDB'],
      url: '/MOI%20bot/index.html',
    },
    {
      id: 9,
      icon: '🐍',
      title: 'Python Coding Übungen',
      description: 'Umfangreiche Sammlung von 20 Python-Programmierübungen für Anfänger bis Fortgeschrittene.',
      fullDescription: 'Eine strukturierte Sammlung von 20 verschiedenen Python-Übungen, die von einfachen Konzepten bis zu fortgeschrittenen Algorithmien reichen. Perfekt zum Lernen und Üben.',
      status: 'active',
      tech: ['Python', 'OOP', 'Algorithms', 'Data Structures'],
      url: '/python%20coden%20%C3%BCbungen/index.html',
      exercises: [
        { name: '01 - Calculator', folder: '01_calculator' },
        { name: '02 - Mad Libs', folder: '02_madlibs' },
        { name: '03 - Number Guessing', folder: '03_number_guessing' },
        { name: '04 - Coin Flip', folder: '04_coin_flip' },
        { name: '05 - Rock Paper Scissors', folder: '05_rock_paper_scissors' },
        { name: '06 - Temperature Converter', folder: '06_temperature_converter' },
        { name: '07 - Todo List', folder: '07_todo_list' },
        { name: '08 - Simple Quiz', folder: '08_simple_quiz' },
        { name: '09 - Password Generator', folder: '09_password_generator' },
        { name: '10 - BMI Calculator', folder: '10_bmi_calculator' },
        { name: '11 - Dice Roller', folder: '11_dice_roller' },
        { name: '12 - Random Quote', folder: '12_random_quote' },
        { name: '13 - Text Analyzer', folder: '13_text_analyzer' },
        { name: '14 - Word Counter', folder: '14_word_counter' },
        { name: '15 - Age Calculator', folder: '15_age_calculator' },
        { name: '16 - Fibonacci', folder: '16_fibonacci' },
        { name: '17 - Palindrome Checker', folder: '17_palindrome_checker' },
        { name: '18 - Hangman', folder: '18_hangman' },
        { name: '19 - Pyramid Patterns', folder: '19_pyramid_patterns' },
        { name: '20 - Simple Stopwatch', folder: '20_simple_stopwatch' },
      ],
    },
    {
      id: 10,
      icon: '📊',
      title: 'Umfrage',
      description: 'Interaktive Umfrage-Anwendung mit Datenerfassung und Auswertung.',
      fullDescription: 'Eine umfangreiche Umfrage-Anwendung für die Erfassung, Verwaltung und Auswertung von Umfragedaten mit benutzerfreundlicher Oberfläche.',
      status: 'active',
      tech: ['HTML5', 'JavaScript', 'CSS', 'Data Collection'],
      url: '/umfrage/index.html',
    },
  ]);

  const filtered = filter === 'all'
    ? projects
    : projects.filter(p => p.status === filter);

  const toggleExpand = (id: number) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <section className="projects-section">
      <div className="projects-grid">
        {filtered.map((project) => (
          <div key={project.id}>
            <article className="project-card">
              <div className="project-header">
                <span className="project-icon">{project.icon}</span>
                <span className={`project-status ${project.status}`}>
                  {project.status === 'active' && '✅ Aktiv'}
                  {project.status === 'wip' && '🟡 In Progress'}
                  {project.status === 'planning' && '🔵 Planung'}
                </span>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-meta">
                {project.tech.map((t) => (
                  <span key={t} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={`/projects/${project.id}`}
                className="project-link"
                style={{
                  background: 'var(--primary)',
                  color: 'white',
                  border: 'none',
                  cursor: 'pointer',
                  width: '100%',
                  display: 'block',
                  padding: '10px',
                  textAlign: 'center',
                  textDecoration: 'none',
                }}
              >
                🚀 Details anschauen
              </a>
              {!project.url && (
                <button
                  onClick={() => toggleExpand(project.id)}
                  className="project-link"
                  style={{
                    background: 'var(--primary)',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',
                    width: '100%',
                  }}
                >
                  {expandedProject === project.id ? '▼ Einklappen' : '▶ Details anschauen'}
                </button>
              )}
            </article>

            {/* EXPANDED DETAILS */}
            {expandedProject === project.id && (
              <div className="project-details">
                <div className="details-container">
                  <h4>📖 Projekt Details</h4>
                  <p className="details-description">
                    {project.fullDescription || project.description}
                  </p>

                  {/* LINKS */}
                  {(project.demo || project.github || project.url) && (
                    <div className="project-links">
                      <h4>🔗 Links & Zugang</h4>
                      <div className="links-grid">
                        {project.demo && (
                          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="detail-button demo">
                            🌐 Live Demo
                          </a>
                        )}
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="detail-button github">
                            🐙 GitHub
                          </a>
                        )}
                        {project.url && !project.demo && !project.github && (
                          <a href={project.url} target="_blank" rel="noopener noreferrer" className="detail-button">
                            🚀 Öffnen
                          </a>
                        )}
                      </div>
                    </div>
                  )}

                  {/* PYTHON EXERCISES */}
                  {project.exercises && (
                    <div className="exercises-list">
                      <h4>📚 20 Python-Übungen</h4>
                      <div className="exercises-grid">
                        {project.exercises.map((exercise, idx) => (
                          <div key={idx} className="exercise-item">
                            <div className="exercise-number">{idx + 1}</div>
                            <div className="exercise-name">{exercise.name}</div>
                            <div className="exercise-folder">📁 {exercise.folder}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
