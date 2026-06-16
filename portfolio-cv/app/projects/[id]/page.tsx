'use client';

import { useState } from 'react';
import Link from 'next/link';

const projects: Record<number, any> = {
  1: {
    id: 1,
    icon: '✈️',
    title: 'Flight Trainer - 2 Player',
    description: 'Interaktiver Flight Simulator für Piloten-Training.',
    fullDescription: 'Ein interaktives 3D Flight Simulator Spiel, in dem zwei Spieler gemeinsam Flugszenarien trainieren können. Mit realistischen Flugphysiken, Umgebungen und Missions-Modi.',
    status: 'active',
    tech: ['HTML5', 'Canvas', 'JavaScript', 'WebGL'],
  },
  2: {
    id: 2,
    icon: '🎭',
    title: 'Kaspar Hauser Quest',
    description: 'Interaktives Stadträtsel-Spiel über die Kaspar Hauser Geschichte.',
    fullDescription: 'Ein innovatives 3-phasen Stadträtsel-Spiel basierend auf der historischen Figur Kaspar Hauser. Immersives Gameplay mit mittelalterlichem Setting.',
    status: 'active',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
  },
  3: {
    id: 3,
    icon: '⚡',
    title: 'Glitch verbessert',
    description: 'Verbessertes Action-Game mit neuen Features.',
    fullDescription: 'Ein vollständig überarbeitetes Action-Game mit verbesserten Mechaniken, neuen Features und besserer Performance-Optimierung.',
    status: 'active',
    tech: ['Next.js', 'React', 'Node.js', 'Docker'],
  },
  7: {
    id: 7,
    icon: '💬',
    title: 'MOI Bot',
    description: 'Intelligenter Chatbot mit natürlicher Sprachverarbeitung.',
    fullDescription: 'Ein fortgeschrittener Chatbot mit NLP-Fähigkeiten und vollständiger Context-Verwaltung.',
    status: 'active',
    tech: ['Claude API', 'React', 'Node.js', 'MongoDB'],
  },
  9: {
    id: 9,
    icon: '🐍',
    title: 'Python Coding Übungen',
    description: 'Sammlung von 20 Python-Programmierübungen.',
    fullDescription: 'Eine strukturierte Sammlung von 20 verschiedenen Python-Übungen, die von einfachen Konzepten bis zu fortgeschrittenen Algorithmien reichen.',
    status: 'active',
    tech: ['Python', 'OOP', 'Algorithms', 'Data Structures'],
  },
};

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projects[parseInt(params.id)];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Projekt nicht gefunden</h1>
          <Link href="/" className="text-blue-600 hover:underline">
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <Link href="/" className="text-blue-600 hover:underline mb-8 block">
          ← Zurück
        </Link>

        <div className="mb-8">
          <div className="text-6xl mb-4">{project.icon}</div>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-gray-600 mb-4">{project.description}</p>
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            {project.status}
          </span>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Übersicht</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {project.fullDescription}
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Technologien</h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech: string) => (
              <span
                key={tech}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
