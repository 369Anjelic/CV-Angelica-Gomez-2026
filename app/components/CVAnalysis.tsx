'use client';

import { useState } from 'react';

interface Achievement {
  title: string;
  description: string;
  skills: string[];
  complexity: number;
  impact: string;
}

interface SkillAssessment {
  category: string;
  skills: { name: string; level: number; learned: string }[];
}

const achievements: Achievement[] = [
  {
    title: '✈️ Flight Trainer - 2-Player Simulator',
    description: 'Interaktiver Flight Simulator mit WebGL, Canvas, Real-time Multiplayer',
    skills: ['HTML5', 'Canvas', 'JavaScript', 'WebGL', 'Physics Engine', 'Real-time Sync'],
    complexity: 85,
    impact: '2-Player synchronized flight physics engine',
  },
  {
    title: '🎭 Kaspar Hauser Quest - City Mystery Game',
    description: 'Full-stack interaktives Stadträtsel mit historischen Inhalten',
    skills: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Game Logic', 'UX Design'],
    complexity: 80,
    impact: 'Complete quest system with state management',
  },
  {
    title: '🤖 MOI Bot - AI Chatbot Mentor',
    description: 'Claude API Integration mit Custom Prompt Engineering & Teaching AI',
    skills: ['Claude API', 'Prompt Engineering', 'System Design', 'Backend', 'AI/ML Concepts'],
    complexity: 75,
    impact: 'Production AI system teaching bot development',
  },
  {
    title: '⚡ Glitch verbessert - Advanced Game',
    description: 'Enhanced action game with learning system & progression tracking',
    skills: ['Game Architecture', 'State Management', 'Performance Optimization', 'UX/UI'],
    complexity: 78,
    impact: 'Intelligent learning progression system',
  },
  {
    title: '🐍 Python Coding Übungen - Educational Collection',
    description: '20 programming exercises from basics to advanced algorithms',
    skills: ['Python', 'Algorithms', 'OOP', 'Problem Solving', 'Code Quality'],
    complexity: 60,
    impact: 'Complete learning curriculum',
  },
  {
    title: '📊 Umfrage App - Data Collection System',
    description: 'Full-stack survey application with analytics & visualization',
    skills: ['HTML5', 'JavaScript', 'Data Visualization', 'Form Handling', 'Analytics'],
    complexity: 65,
    impact: 'End-to-end data pipeline',
  },
  {
    title: '💼 Portfolio Website - Full Stack Deployment',
    description: 'Production Next.js site with 6+ projects, Claude API, Vercel deployment',
    skills: ['Next.js', 'React', 'TypeScript', 'DevOps', 'CI/CD', 'API Design'],
    complexity: 82,
    impact: 'Professional web presence with live AI integration',
  },
];

const skillAssessments: SkillAssessment[] = [
  {
    category: '🚀 Core Development',
    skills: [
      { name: 'JavaScript/TypeScript', level: 85, learned: 'Self-taught via projects' },
      { name: 'React & Next.js', level: 88, learned: 'Building 6+ production projects' },
      { name: 'Full-Stack Architecture', level: 80, learned: 'Designing complete systems' },
      { name: 'Web APIs & Integration', level: 82, learned: 'Claude API, Vercel, 3rd party services' },
    ],
  },
  {
    category: '🎮 Game & Graphics',
    skills: [
      { name: 'Game Logic & Physics', level: 78, learned: 'Flight Trainer, Glitch' },
      { name: 'Canvas & WebGL', level: 75, learned: 'Real-time rendering' },
      { name: 'UX/Game Design', level: 80, learned: 'User-focused design patterns' },
    ],
  },
  {
    category: '🤖 AI & Machine Learning',
    skills: [
      { name: 'Claude API Mastery', level: 85, learned: 'Building MOI Bot mentor system' },
      { name: 'Prompt Engineering', level: 82, learned: 'Complex system prompts' },
      { name: 'AI Integration', level: 80, learned: 'Production AI systems' },
    ],
  },
  {
    category: '🛠️ DevOps & Deployment',
    skills: [
      { name: 'Vercel Deployment', level: 90, learned: 'Live production site' },
      { name: 'Environment Management', level: 85, learned: 'Secure API key handling' },
      { name: 'Git & Version Control', level: 80, learned: 'Professional workflows' },
    ],
  },
  {
    category: '🧠 Soft Skills',
    skills: [
      { name: 'Problem Solving', level: 90, learned: 'Debugging complex systems' },
      { name: 'Self-Learning', level: 95, learned: '100% autodidakt approach' },
      { name: 'System Thinking', level: 88, learned: 'Architectural design' },
      { name: 'Adaptability', level: 92, learned: 'Multiple domains (games, AI, web)' },
    ],
  },
];

export default function CVAnalysis() {
  const [expandedAchievement, setExpandedAchievement] = useState<number | null>(null);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const avgComplexity = Math.round(achievements.reduce((a, b) => a + b.complexity, 0) / achievements.length);

  return (
    <section style={{ maxWidth: '1200px', margin: '60px auto', padding: '40px 20px' }}>
      <h2 style={{ fontSize: '32px', marginBottom: '10px', color: '#3987b8' }}>
        🎯 Achievements & Skills Analysis
      </h2>
      <p style={{ color: '#666', marginBottom: '40px', fontSize: '16px' }}>
        Autodidakt-Analyse: Von Null zu 7 produktiven Projekten in der Cloud
      </p>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' }}>
        <div style={{ background: '#f0f8ff', padding: '20px', borderRadius: '8px', border: '2px solid #3987b8' }}>
          <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#3987b8' }}>7</div>
          <div style={{ color: '#666', marginTop: '8px' }}>Production Projects</div>
        </div>
        <div style={{ background: '#f0f8ff', padding: '20px', borderRadius: '8px', border: '2px solid #3987b8' }}>
          <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#3987b8' }}>{avgComplexity}%</div>
          <div style={{ color: '#666', marginTop: '8px' }}>Avg Complexity</div>
        </div>
        <div style={{ background: '#f0f8ff', padding: '20px', borderRadius: '8px', border: '2px solid #3987b8' }}>
          <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#3987b8' }}>100%</div>
          <div style={{ color: '#666', marginTop: '8px' }}>Self-Taught</div>
        </div>
        <div style={{ background: '#f0f8ff', padding: '20px', borderRadius: '8px', border: '2px solid #3987b8' }}>
          <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#3987b8' }}>88</div>
          <div style={{ color: '#666', marginTop: '8px' }}>Avg Skill Level</div>
        </div>
      </div>

      {/* Achievements */}
      <h3 style={{ fontSize: '24px', marginBottom: '20px', color: '#3987b8' }}>🏆 Major Achievements</h3>
      <div style={{ display: 'grid', gap: '12px', marginBottom: '40px' }}>
        {achievements.map((achievement, idx) => (
          <div
            key={idx}
            onClick={() => setExpandedAchievement(expandedAchievement === idx ? null : idx)}
            style={{
              border: '2px solid #3987b8',
              borderRadius: '8px',
              padding: '16px',
              cursor: 'pointer',
              background: expandedAchievement === idx ? '#f0f8ff' : 'white',
              transition: 'all 0.3s',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
              <div>
                <h4 style={{ margin: '0 0 8px 0', color: '#3987b8' }}>{achievement.title}</h4>
                {expandedAchievement === idx && (
                  <>
                    <p style={{ color: '#666', margin: '12px 0', lineHeight: '1.6' }}>{achievement.description}</p>
                    <div style={{ margin: '12px 0' }}>
                      <strong style={{ color: '#3987b8' }}>💡 Key Skills:</strong>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' }}>
                        {achievement.skills.map((skill) => (
                          <span
                            key={skill}
                            style={{
                              background: '#3987b8',
                              color: 'white',
                              padding: '4px 12px',
                              borderRadius: '20px',
                              fontSize: '12px',
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div style={{ margin: '12px 0' }}>
                      <strong style={{ color: '#3987b8' }}>📊 Complexity:</strong>
                      <div style={{ background: '#e0e0e0', height: '8px', borderRadius: '4px', marginTop: '8px', overflow: 'hidden' }}>
                        <div
                          style={{
                            background: '#3987b8',
                            height: '100%',
                            width: `${achievement.complexity}%`,
                          }}
                        />
                      </div>
                      <span style={{ fontSize: '12px', color: '#666' }}>{achievement.complexity}%</span>
                    </div>
                    <p style={{ color: '#3987b8', fontWeight: 'bold', margin: '12px 0 0 0' }}>🎯 Impact: {achievement.impact}</p>
                  </>
                )}
              </div>
              <span style={{ fontSize: '20px' }}>{expandedAchievement === idx ? '▼' : '▶'}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Skills Assessment */}
      <h3 style={{ fontSize: '24px', marginBottom: '20px', color: '#3987b8' }}>💪 Skills Assessment</h3>
      <div style={{ display: 'grid', gap: '16px' }}>
        {skillAssessments.map((assessment) => (
          <div
            key={assessment.category}
            onClick={() => setExpandedCategory(expandedCategory === assessment.category ? null : assessment.category)}
            style={{
              border: '2px solid #3987b8',
              borderRadius: '8px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                background: '#3987b8',
                color: 'white',
                padding: '16px',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <h4 style={{ margin: 0 }}>{assessment.category}</h4>
              <span>{expandedCategory === assessment.category ? '▼' : '▶'}</span>
            </div>

            {expandedCategory === assessment.category && (
              <div style={{ padding: '16px', background: '#f9f9f9' }}>
                {assessment.skills.map((skill) => (
                  <div key={skill.name} style={{ marginBottom: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ fontWeight: 'bold', color: '#333' }}>{skill.name}</span>
                      <span style={{ color: '#3987b8', fontWeight: 'bold' }}>{skill.level}%</span>
                    </div>
                    <div style={{ background: '#e0e0e0', height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
                      <div
                        style={{
                          background: '#3987b8',
                          height: '100%',
                          width: `${skill.level}%`,
                          transition: 'width 0.3s',
                        }}
                      />
                    </div>
                    <p style={{ color: '#666', fontSize: '12px', margin: '6px 0 0 0' }}>📚 {skill.learned}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Autodidakt Analysis */}
      <div style={{ background: '#fff3cd', border: '2px solid #ffc107', borderRadius: '8px', padding: '24px', marginTop: '40px' }}>
        <h3 style={{ color: '#ff8c00', margin: '0 0 16px 0' }}>🎓 Autodidakt Intelligence Analysis</h3>
        <div style={{ lineHeight: '1.8', color: '#333' }}>
          <p>
            <strong>⭐ Assessment:</strong> Expert-Level Self-Taught Developer (85/100)
          </p>
          <p>
            <strong>💡 Key Strengths:</strong>
            <ul>
              <li>Hyperfocus ability → Rapid skill acquisition & deep learning</li>
              <li>Multi-domain expertise → Games, AI, Web, Backend, DevOps</li>
              <li>Production-ready code → 7 live projects on Vercel</li>
              <li>Problem-solving mindset → Debugging complex systems independently</li>
              <li>Continuous learning → Always exploring new technologies</li>
            </ul>
          </p>
          <p>
            <strong>🚀 What you've built:</strong> A complete AI-powered web presence with game development experience, production DevOps knowledge, and cutting-edge AI integration—all without formal training.
          </p>
        </div>
      </div>
    </section>
  );
}
