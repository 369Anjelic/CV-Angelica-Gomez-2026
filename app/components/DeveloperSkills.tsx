'use client';

import { useState } from 'react';

interface Skill {
  name: string;
  category: string;
  level: number;
  codeExample?: string;
  description: string;
}

const skills: Skill[] = [
  {
    name: 'API Development',
    category: 'Backend',
    level: 37,
    codeExample: `// Python Flask API
from flask import Flask, request, jsonify
import requests

@app.route('/api/messages', methods=['POST'])
def create_message():
  data = request.json
  response = requests.post('https://api.anthropic.com/messages',
    headers={'Authorization': f'Bearer {API_KEY}'},
    json={'message': data.get('message')}
  )
  return jsonify(response.json())`,
    description: 'REST APIs, Backend Integration, Error Handling, Server Architecture',
  },
  {
    name: 'State Management',
    category: 'Architecture',
    level: 39,
    codeExample: `// Redux Store Management
import { createStore, combineReducers } from 'redux';

const userReducer = (state = null, action) => {
  switch(action.type) {
    case 'SET_USER':
      return action.payload;
    default:
      return state;
  }
};

const store = createStore(combineReducers({ user: userReducer }));
export default store;`,
    description: 'Data Flow Architecture, Reducer Pattern, Store Management, Synchronization',
  },
  {
    name: 'Game Development',
    category: 'Specialized',
    level: 35,
    codeExample: `// Canvas Animation Loop
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  updateGameState();
  renderGame();
  requestAnimationFrame(gameLoop);
}`,
    description: 'Canvas API, Physics Engine, Game Logic, WebGL',
  },
  {
    name: 'DevOps & Deployment',
    category: 'Infrastructure',
    level: 41,
    codeExample: `// vercel.json Configuration
{
  "buildCommand": "npm run build",
  "env": {
    "ANTHROPIC_API_KEY": "@anthropic_api_key"
  },
  "crons": [{
    "path": "/api/cleanup",
    "schedule": "0 0 * * *"
  }]
}`,
    description: 'Vercel Deployment, Environment Variables, CI/CD',
  },
  {
    name: 'AI & Claude API',
    category: 'Emerging Tech',
    level: 55,
    codeExample: `// Claude API Integration
const response = await anthropic.messages.create({
  model: 'claude-opus-4-7',
  max_tokens: 2048,
  system: 'Du bist ein AI Mentor...',
  messages: [
    { role: 'user', content: userMessage }
  ]
});`,
    description: 'Anthropic Claude API, Prompt Engineering, AI Integration',
  },
  {
    name: 'Git & GitHub',
    category: 'Tools & Version Control',
    level: 37,
    codeExample: `// Git Workflow
git clone https://github.com/user/project.git
git checkout -b feature/new-feature
git add .
git commit -m "feat: add new feature"
git push origin feature/new-feature
// Create Pull Request on GitHub`,
    description: 'Git Version Control, GitHub Repositories, Collaboration, CI/CD',
  },
  {
    name: 'Blender 3D',
    category: 'Tools & Design',
    level: 30,
    codeExample: `// Blender Python Script
import bpy

# Create a cube
bpy.ops.mesh.primitive_cube_add(size=2, location=(0, 0, 0))

# Apply material
obj = bpy.context.active_object
mat = bpy.data.materials.new("Material")
obj.data.materials.append(mat)`,
    description: '3D Modeling, Animation, Rendering, Visual Effects',
  },
  {
    name: 'PyCharm IDE',
    category: 'Tools & Development',
    level: 35,
    codeExample: `# PyCharm Development Setup
# Configure Python Interpreter
# Set up Virtual Environment
# Use Built-in Terminal for Git
# Debug Python Scripts
# Run Unit Tests
# Integrate with Version Control`,
    description: 'Python IDE, Debugging, Testing, Project Management',
  },
  {
    name: 'Android Studio',
    category: 'Tools & Mobile',
    level: 33,
    codeExample: `// Android Development Setup
// Create Android Project
// Configure Gradle Build System
// Design UI with XML/Jetpack Compose
// Debug on Emulator
// Build APK for Testing
// Publish to Play Store`,
    description: 'Android Development, Kotlin/Java, Mobile Apps',
  },
  {
    name: 'Obsidian',
    category: 'Tools & Organization',
    level: 43,
    codeExample: `# Obsidian Vault Structure
## Daily Notes
[[Project Notes]]
#project #learning #tracking

## Linked Notes
- Backlinks für Knowledge Graph
- Tags für Kategorisierung
- Dataview Queries für Automation`,
    description: 'Knowledge Management, Note-taking, PKM System, Organization',
  },
  {
    name: 'LLMs & AI Models',
    category: 'Emerging Tech',
    level: 40,
    codeExample: `// Working with LLMs
const response = await fetch('https://api.openai.com/v1/chat/completions', {
  method: 'POST',
  headers: { 'Authorization': \`Bearer \${API_KEY}\` },
  body: JSON.stringify({
    model: 'gpt-4',
    messages: [{ role: 'user', content: prompt }]
  })
});`,
    description: 'Large Language Models, GPT, Claude, Prompt Engineering',
  },
  {
    name: 'Machine Learning',
    category: 'Emerging Tech',
    level: 31,
    codeExample: `# Machine Learning with Python
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier

X_train, X_test, y_train, y_test = train_test_split(X, y)
model = RandomForestClassifier()
model.fit(X_train, y_train)
accuracy = model.score(X_test, y_test)`,
    description: 'ML Models, Python Scikit-learn, Data Analysis, Predictions',
  },
];

const categories = ['Backend', 'Architecture', 'Specialized', 'Infrastructure', 'Emerging Tech', 'Tools & Version Control', 'Tools & Design', 'Tools & Development', 'Tools & Mobile', 'Tools & Organization'];

export default function DeveloperSkills() {
  const [expandedSkill, setExpandedSkill] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredSkills = selectedCategory
    ? skills.filter(s => s.category === selectedCategory)
    : skills;

  const avgLevel = Math.round(skills.reduce((a, b) => a + b.level, 0) / skills.length);

  return (
    <section style={{ maxWidth: '1200px', margin: '60px auto', padding: '40px 20px' }}>
      <h2 style={{ fontSize: '32px', marginBottom: '10px', color: '#3987b8' }}>
        💻 Developer Skills & Code Knowledge
      </h2>
      <p style={{ color: '#666', marginBottom: '30px', fontSize: '16px' }}>
        Praktische Skills für Anwendungsentwicklung mit Code-Beispielen
      </p>

      {/* Category Filter */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '30px' }}>
        <button
          onClick={() => setSelectedCategory(null)}
          style={{
            padding: '8px 16px',
            borderRadius: '20px',
            border: '2px solid #3987b8',
            background: selectedCategory === null ? '#3987b8' : 'white',
            color: selectedCategory === null ? 'white' : '#3987b8',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Alle
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              padding: '8px 16px',
              borderRadius: '20px',
              border: '2px solid #3987b8',
              background: selectedCategory === cat ? '#3987b8' : 'white',
              color: selectedCategory === cat ? 'white' : '#3987b8',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '12px',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
        {filteredSkills.map((skill, idx) => (
          <div
            key={idx}
            onClick={() => setExpandedSkill(expandedSkill === idx ? null : idx)}
            style={{
              border: '2px solid #3987b8',
              borderRadius: '8px',
              padding: '16px',
              cursor: 'pointer',
              background: expandedSkill === idx ? '#f0f8ff' : 'white',
              transition: 'all 0.3s',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '8px' }}>
              <div>
                <h4 style={{ margin: '0', color: '#3987b8' }}>{skill.name}</h4>
                <p style={{ margin: '4px 0', fontSize: '12px', color: '#666' }}>{skill.category}</p>
              </div>
              <span style={{ fontSize: '18px' }}>{expandedSkill === idx ? '▼' : '▶'}</span>
            </div>

            {/* Progress Bar */}
            <div style={{ background: '#e0e0e0', height: '6px', borderRadius: '3px', overflow: 'hidden', marginBottom: '8px' }}>
              <div
                style={{
                  background: '#3987b8',
                  height: '100%',
                  width: `${skill.level}%`,
                  transition: 'width 0.3s',
                }}
              />
            </div>
            <span style={{ fontSize: '12px', color: '#3987b8', fontWeight: 'bold' }}>{skill.level}%</span>

            {/* Expanded Content */}
            {expandedSkill === idx && (
              <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #e0e0e0' }}>
                <p style={{ color: '#666', margin: '0 0 12px 0', lineHeight: '1.6' }}>
                  {skill.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
