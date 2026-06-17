'use client';

import { useState } from 'react';

export default function FullCV() {
  const [activeTab, setActiveTab] = useState('anschreiben');

  const tabs = [
    { id: 'anschreiben', label: 'Anschreiben' },
    { id: 'beruf', label: 'Berufserfahrung' },
    { id: 'ausbildung', label: 'Schulische Ausbildung' },
    { id: 'zusatz', label: 'Zusatzqualifikationen' },
    { id: 'skills', label: 'Fachliche Skills' },
    { id: 'kompetenzen', label: 'Zusatz Kompetenzen' },
    { id: 'softskills', label: 'Softskills' },
    { id: 'sprachen', label: 'Sprachen' },
    { id: 'hobbies', label: 'Hobbies' },
  ];


  return (
    <section style={{
      maxWidth: '1000px',
      margin: '60px auto',
      padding: '40px 20px',
      backgroundColor: '#fff',
      color: '#000',
      fontFamily: 'Arial, sans-serif',
      lineHeight: '1.6',
    }}>
      {/* Header mit Bild */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '200px 1fr',
        gap: '30px',
        marginBottom: '40px',
        alignItems: 'start',
      }}>
        <div>
          <img
            src="/cv-images/image1.jpeg"
            alt="Angelica Gomez"
            style={{
              width: '100%',
              maxWidth: '200px',
              borderRadius: '4px',
            }}
          />
        </div>

        <div>
          <h1 style={{ margin: '0 0 12px 0', fontSize: '36px', color: '#000', fontWeight: '700' }}>
            Angelica Gomez
          </h1>
          <p style={{ margin: '0 0 16px 0', fontSize: '22px', color: '#3987b8', fontWeight: 'bold' }}>
            IT-/KI-Quereinsteigerin
          </p>
          <p style={{ margin: '0 0 8px 0', fontSize: '15px', color: '#333', fontWeight: '500' }}>
            Königswarterstraße 38, 90762 Fürth | 0157 3923 1128 | anjelicgomez@hotmail.com
          </p>

          <div style={{ marginTop: '20px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 14px 0', color: '#3987b8' }}>Kurzprofil</h3>
            <p style={{ fontSize: '15px', fontWeight: '600', lineHeight: '1.8', margin: '0 0 10px 0', color: '#333' }}>
              Als neurodivergente (ADHS) und analytisch denkende Persönlichkeit bringe ich ausgeprägte Mustererkennung, kreative Problemlösung und die Fähigkeit zum fokussierten Arbeiten in Teams ein.
            </p>
            <p style={{ fontSize: '15px', fontWeight: '600', lineHeight: '1.8', margin: '0 0 10px 0', color: '#333' }}>
              Ich erfasse komplexe Zusammenhänge schnell und nutze KI-Tools gezielt, um effiziente und praxisnahe Lösungen zu entwickeln.
            </p>
            <p style={{ fontSize: '15px', fontWeight: '600', lineHeight: '1.8', margin: '0', color: '#333' }}>
              Geprägt durch meine Ausbildung als Goldschmiedin verbinde ich Präzision und Kreativität mit Technologie und strebe danach, in einer Zeit, in der Science-Fiction Realität wird, aktiv an der Entwicklung des Codes der Zukunft mitzuwirken.
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ marginBottom: '30px', display: 'flex', flexWrap: 'wrap', gap: '8px', borderBottom: '2px solid #ccc' }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '12px 24px',
              border: 'none',
              backgroundColor: activeTab === tab.id ? '#3987b8' : '#f0f0f0',
              color: activeTab === tab.id ? '#fff' : '#333',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 'bold',
              borderRadius: '4px 4px 0 0',
              marginRight: '8px',
              transition: 'all 0.3s',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{ minHeight: '300px', fontSize: '13px', lineHeight: '1.8' }}>

        {/* ANSCHREIBEN */}
        {activeTab === 'anschreiben' && (
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 20px 0', color: '#3987b8' }}>
              Bewerbung als Quereinsteigerin als Softwareentwicklerin
            </h2>

            <div style={{ marginBottom: '24px', backgroundColor: '#f9f9f9', padding: '16px', borderRadius: '4px', borderLeft: '4px solid #3987b8' }}>
              <p style={{ margin: '0 0 12px 0', fontWeight: 'bold', fontSize: '14px' }}>Motivation & Leidenschaft</p>
              <p style={{ margin: '0 0 12px 0' }}>
                Ich möchte nicht isoliert Code schreiben, sondern eng mit echten Kunden zusammenarbeiten und ihre Probleme verstehen. Das "Teams as a Service"-Modell begeistert mich daher sehr. Besonders hat mich das KI-Projekt Vectorsphere darin bestärkt, dass meine Eigenschaften und Fähigkeiten hervorragend zu einem innovativen Team passen. Zu den beschriebenen Aha-Momenten möchte ich in zukünftigen Projekten aktiv beitragen – insbesondere durch meine Erfahrung mit KI, API-Integrationen und meine ausgeprägte Kommunikationsstärke.
              </p>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '14px', fontWeight: 'bold', margin: '0 0 12px 0', color: '#3987b8' }}>Meine Fachkompetenzen</h3>
              <p style={{ margin: '0 0 12px 0' }}>
                Mit meinem Wissen in Python und Machine Learning sowie meiner Erfahrung mit LLM-APIs kann ich in Projekten wie Vectorsphere schnell produktiv werden und KI-Integrationen entwickeln, die echten Mehrwert schaffen. Als Lern-Bot-Spezialistin bei Unwritten habe ich Projekte von der Konzeptionsphase bis zum produktionsreifen Launch begleitet – inklusive Feature-Architektur, Teamkoordination, Testing und Deployment. Diese Erfahrung stellt eine wertvolle Ergänzung für Ihr Team dar.
              </p>
              <p style={{ margin: '0 0 12px 0' }}>
                Durch meine Selbstständigkeit als Goldschmiedin und Videografin habe ich ein hohes Maß an Präzision und Kreativität entwickelt, das ich gezielt in die IT-Welt einbringe. Mit meinem analytischen Denken erkenne ich Zusammenhänge, die andere oft übersehen. Dies habe ich unter anderem im Projekt Kaspar-Hauser-Chatbot bewiesen, bei dem ich nicht nur Features umgesetzt, sondern auch die gesamte Feature-Architektur neu konzipiert habe.
              </p>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '14px', fontWeight: 'bold', margin: '0 0 12px 0', color: '#3987b8' }}>Meine Charakterstärken</h3>
              <p style={{ margin: '0 0 12px 0' }}>
                Ich arbeite gerne mit Menschen zusammen, hole sie auf ihrem Standpunkt ab und entwickle gemeinsam mit ihnen sinnvolle Lösungen. Mit meinem Hyperfokus kann ich mich intensiv auf Aufgaben und Projekte konzentrieren. Dabei setze ich mir eigenständig SMART-Ziele und löse Probleme hartnäckig durch Trial-and-Error.
              </p>
              <p style={{ margin: '0 0 12px 0' }}>
                Meine Begeisterungsfähigkeit sowie meine Sprachkenntnisse (Deutsch und Spanisch als Muttersprache, Englisch B2) machen mich zu einer starken Brückenbauerin zwischen verschiedenen Stakeholdern. Ich habe mich bewusst für Ihr Unternehmen entschieden, da Ihre Philosophie, Ihre Projekte und Ihre Unternehmenskultur hervorragend zu meinen Werten passen.
              </p>
            </div>

            <div style={{ marginBottom: '24px', backgroundColor: '#e8f4f8', padding: '16px', borderRadius: '4px' }}>
              <p style={{ margin: '0', fontStyle: 'italic', color: '#333' }}>
                Ich freue mich auf ein persönliches Gespräch, in dem ich Ihnen zeigen kann, dass ich den richtigen Code mitbringe.
              </p>
            </div>
          </div>
        )}

        {/* BERUFSERFAHRUNG */}
        {activeTab === 'beruf' && (
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 20px 0', color: '#3987b8' }}>
              Berufserfahrung
            </h2>

            <div style={{ marginBottom: '24px' }}>
              <p style={{ margin: '0 0 4px 0', fontWeight: 'bold' }}>01/2026 – 06/2026: Lern-Bot-Spezialist</p>
              <p style={{ margin: '0 0 8px 0', color: '#666' }}>Unwritten Studio, Nürnberg</p>
              <ul style={{ margin: '0', paddingLeft: '20px' }}>
                <li>Spezialisierung auf die Anwendung von Claude code und Vercel-Deployment</li>
                <li>Tech Stack: React, Python Backend, Full-Stack API-Integration, GitHub</li>
                <li>Projektleitung des Kaspar-Hauser-Chatbots: Konzeption der Feature-Architektur, Teamkoordination sowie Durchführung eines produktionsreifen Launchs inklusive Testing.</li>
                <li>Konzeption und Entwicklung von Website-Umfragen sowie des Lernbots „Glitch" zur Unterstützung der Prüfungsvorbereitung (IHK Anwendungsentwicklung).</li>
                <li>Team- und Projektmanagement, IT-Architekturverständnis, eigenständige Problemlösung</li>
              </ul>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <p style={{ margin: '0 0 4px 0', fontWeight: 'bold' }}>10/2025 – 12/2025: Bauzeichnerin / CAD-Spezialistin</p>
              <p style={{ margin: '0 0 8px 0', color: '#666' }}>Alexander Flügge Ingenieurbüro, Nürnberg</p>
              <ul style={{ margin: '0', paddingLeft: '20px' }}>
                <li>Vertiefung CAD-Planung: Baupläne, Baueingabepläne, Detailzeichnungen</li>
                <li>Eigenständige Teamkoordination und Qualitätssicherung technischer Dokumentation</li>
                <li>Anwendung präziser Arbeitsweise, Systemdenken, technische Dokumentation</li>
              </ul>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <p style={{ margin: '0 0 4px 0', fontWeight: 'bold' }}>01/2022 – 09/2025: Freiberufliche Videografin (Eigene Firma)</p>
              <p style={{ margin: '0 0 8px 0', color: '#666' }}>Deutschlandweit, Remote und vor Ort</p>
              <ul style={{ margin: '0', paddingLeft: '20px' }}>
                <li>Konzeption, Planung und Umsetzung zielgruppenorientierter Videoprojekte für Unternehmen, politische Kampagnen, Kunstausstellungen und Social Media</li>
                <li>Beratung von Kunden bei digitalen Content-Strategien</li>
                <li>KI-gestützte Videobearbeitung, z. B. Color Grading in DaVinci</li>
                <li>Nutzung von 3D-Animationen in Blender und Fusion für Logoanimationen</li>
                <li>Eigenständige Umsetzung von IT- und KI-bezogenen Projekten: Websitenerstellung mit KI sowie Design- und 3D-Projekte mit Coding und Blender</li>
              </ul>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <p style={{ margin: '0 0 4px 0', fontWeight: 'bold' }}>10/2009 – 05/2011: Freiberufliche Goldschmiedin</p>
              <p style={{ margin: '0 0 8px 0', color: '#666' }}>Diverse Goldschmiede, Deutschland</p>
              <ul style={{ margin: '0', paddingLeft: '20px' }}>
                <li>Vertrieb und Herstellung eigener Schmuckstücke und -designs</li>
                <li>Annahme und Auslieferung von Kundenaufträgen</li>
                <li>Kooperation in Luxusschmuckdesign &amp; Reparaturen mit diversen Juwelieren</li>
              </ul>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <p style={{ margin: '0 0 4px 0', fontWeight: 'bold' }}>07/2005 – 05/2011: Freiberufliche Goldschmiedin</p>
              <p style={{ margin: '0 0 8px 0', color: '#666' }}>Diverse Goldschmiede, Deutschland und Spanien</p>
              <ul style={{ margin: '0', paddingLeft: '20px' }}>
                <li>6 Jahre Praxis-Vertiefung in unterschiedlichen Goldschmiedebetrieben</li>
                <li>Vertrieb und Herstellung eigener Schmuckstücke und -designs</li>
                <li>Kooperation in Luxusschmuckdesign &amp; Reparaturen mit diversen Juwelieren</li>
              </ul>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <p style={{ margin: '0 0 4px 0', fontWeight: 'bold' }}>06/2004 – 07/2005: Administrator</p>
              <p style={{ margin: '0 0 8px 0', color: '#666' }}>Familieneigene Rechtsanwaltskanzlei, Kolumbien</p>
              <ul style={{ margin: '0', paddingLeft: '20px' }}>
                <li>Scanning, Dateneingabe, Dokumentenverwaltung</li>
                <li>Digitalisierungs- &amp; Administrative Assistenz</li>
              </ul>
            </div>
          </div>
        )}

        {/* SCHULISCHE AUSBILDUNG */}
        {activeTab === 'ausbildung' && (
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 20px 0', color: '#3987b8' }}>
              Schulische Ausbildung
            </h2>

            <div style={{ marginBottom: '20px' }}>
              <p style={{ margin: '0 0 4px 0', fontWeight: 'bold' }}>09/2016 – 05/2019: Ausbildung zur Goldschmiedin</p>
              <p style={{ margin: '0 0 4px 0', color: '#666' }}><strong>Ausbildungsstätte:</strong> Goldschmiede Dötzer, Forchheim</p>
              <p style={{ margin: '0 0 4px 0', color: '#666' }}><strong>Berufsschule:</strong> Franz-Oberthür-Schule, Würzburg</p>
              <p style={{ margin: '0 0 4px 0', color: '#666' }}><strong>Abschlussnote:</strong> 1,0 (summa cum laude)</p>
              <p style={{ margin: '0 0 4px 0', color: '#666' }}><strong>Abschluss:</strong> Fachoberschulreife / Mittlere Reife</p>
              <p style={{ margin: '0 0 4px 0', color: '#666' }}><strong>Spezialgebiet:</strong> Design mit technischen Bauteilen, CAD, Schmuckherstellung</p>
              <p style={{ margin: '0', color: '#666' }}><strong>Zusatz:</strong> Erasmus-Programm in Finnland</p>
            </div>

            <div>
              <p style={{ margin: '0 0 4px 0', fontWeight: 'bold' }}>09/1992 – 09/2001: Grund- und Hauptschule Bad Abbach</p>
              <p style={{ margin: '0 0 4px 0', color: '#666' }}>Abschlussnote: 3,5</p>
              <p style={{ margin: '0', color: '#666' }}><strong>Außerschulische Aktivitäten:</strong> Kampfsport und Aushilfe im Elektrogeschäft</p>
            </div>
          </div>
        )}

        {/* ZUSATZQUALIFIKATIONEN */}
        {activeTab === 'zusatz' && (
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 20px 0', color: '#3987b8' }}>
              Zusatzqualifikationen
            </h2>

            <div>
              <p style={{ margin: '0 0 12px 0', fontWeight: 'bold' }}>01/2025 – heute: Selbststudium mit Online-Kursen</p>
              <ul style={{ margin: '0', paddingLeft: '20px', lineHeight: '2' }}>
                <li><strong>Python für Machine Learning und Data Science:</strong> Regression, Klassifikation, NLP, Neuronale Netze</li>
                <li><strong>Mit Python zum Data Scientist:</strong> Deep Learning, Machine Learning & KI</li>
                <li><strong>Complete AI Engineer Training:</strong> Python, NLP, Transformers, LLMs, LangChain, Hugging Face, APIs</li>
                <li><strong>KI-Agentur & Automation:</strong> Baue KI-Agenten & automatisiere alles mit n8n, Retell AI, MCP, OpenAI</li>
                <li><strong>Praxisorientierte Projekte:</strong> Lerne Python am Beispiel von unzähligen, praxisorientierten Projekten. Schritt für Schritt zum Python-Profi</li>
              </ul>
            </div>
          </div>
        )}

        {/* SKILLS */}
        {activeTab === 'skills' && (
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 20px 0', color: '#3987b8' }}>
              Fachliche Skills
            </h2>

            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ fontSize: '14px', fontWeight: 'bold', margin: '0 0 8px 0', color: '#000' }}>Software-Kenntnisse</h3>
              <p style={{ margin: '0 0 4px 0' }}>Claude Code</p>
              <p style={{ margin: '0 0 4px 0' }}>Windows + Microsoft</p>
              <p style={{ margin: '0 0 4px 0' }}>Python</p>
              <p style={{ margin: '0 0 4px 0' }}>Visual Studio</p>
              <p style={{ margin: '0' }}>HTML, CSS, Java</p>
            </div>
          </div>
        )}

        {/* KOMPETENZEN */}
        {activeTab === 'kompetenzen' && (
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 20px 0', color: '#3987b8' }}>
              Zusatz Kompetenzen
            </h2>

            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ fontSize: '14px', fontWeight: 'bold', margin: '0 0 8px 0', color: '#000' }}>Design & Multimedia</h3>
              <p style={{ margin: '0 0 4px 0' }}>CAD (Professional – AutoCAD, technische Zeichnungen)</p>
              <p style={{ margin: '0 0 4px 0' }}>DaVinci Resolve (Color Grading, Video Editing, Professional Grading)</p>
              <p style={{ margin: '0 0 4px 0' }}>Blender (3D Animation, Logoanimationen, 3D-Projekte, Modelling)</p>
              <p style={{ margin: '0 0 4px 0' }}>Fusion (Motion Graphics, VFX, Compositing)</p>
              <p style={{ margin: '0 0 4px 0' }}><strong>Adobe Creative Cloud:</strong> Premiere Pro, After Effects, Premiere Rush, Character Animator, Photoshop, Substance 3D, Adobe Express</p>
              <p style={{ margin: '0 0 4px 0' }}>Animation & Motion Design (Keyframe Animation, Motion Tracking)</p>
              <p style={{ margin: '0' }}>GIMP, Video Production & Post-Production</p>
            </div>

            <div>
              <h3 style={{ fontSize: '14px', fontWeight: 'bold', margin: '0 0 8px 0', color: '#000' }}>Weitere Kompetenzen</h3>
              <p style={{ margin: '0 0 4px 0' }}>Schmuckdesign & CAD (Goldschmiedin-Erfahrung)</p>
              <p style={{ margin: '0 0 4px 0' }}>Digitalisierungs- & Administrative Assistenz</p>
              <p style={{ margin: '0 0 4px 0' }}>Team- und Projektmanagement</p>
              <p style={{ margin: '0' }}>IT-Architekturverständnis, Systemdenken</p>
            </div>
          </div>
        )}

{/* SOFTSKILLS */}
        {activeTab === 'softskills' && (
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 20px 0', color: '#3987b8' }}>
              Softskills & Kompetenzen
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              <div style={{ padding: '16px', background: '#f0f8ff', borderLeft: '4px solid #3987b8', borderRadius: '4px' }}>
                <h3 style={{ margin: '0 0 8px 0', color: '#3987b8', fontSize: '14px' }}>🚀 Out of the Box Denken</h3>
                <p style={{ margin: '0', fontSize: '13px', color: '#666' }}>Nicht-lineares Denken durch ADHS-Perspektive: Sprünge zwischen Ideen, unerwartete Verbindungen und innovative Lösungsansätze, die anderen nicht sichtbar sind</p>
              </div>

              <div style={{ padding: '16px', background: '#f0f8ff', borderLeft: '4px solid #3987b8', borderRadius: '4px' }}>
                <h3 style={{ margin: '0 0 8px 0', color: '#3987b8', fontSize: '14px' }}>🧠 Analytisches Denken</h3>
                <p style={{ margin: '0', fontSize: '13px', color: '#666' }}>Fähigkeit, komplexe Probleme zu analysieren und Muster schnell zu erkennen</p>
              </div>

              <div style={{ padding: '16px', background: '#f0f8ff', borderLeft: '4px solid #3987b8', borderRadius: '4px' }}>
                <h3 style={{ margin: '0 0 8px 0', color: '#3987b8', fontSize: '14px' }}>🎨 Kreativität</h3>
                <p style={{ margin: '0', fontSize: '13px', color: '#666' }}>Innovative Ideenfindung und kreative Lösungsansätze</p>
              </div>

              <div style={{ padding: '16px', background: '#f0f8ff', borderLeft: '4px solid #3987b8', borderRadius: '4px' }}>
                <h3 style={{ margin: '0 0 8px 0', color: '#3987b8', fontSize: '14px' }}>💡 Innovativität</h3>
                <p style={{ margin: '0', fontSize: '13px', color: '#666' }}>Denken über den Tellerrand hinaus und Neuerungen vorantreiben</p>
              </div>

              <div style={{ padding: '16px', background: '#f0f8ff', borderLeft: '4px solid #3987b8', borderRadius: '4px' }}>
                <h3 style={{ margin: '0 0 8px 0', color: '#3987b8', fontSize: '14px' }}>🔧 Problemlösungsfähigkeit</h3>
                <p style={{ margin: '0', fontSize: '13px', color: '#666' }}>Schnelle und effektive Lösung von Herausforderungen</p>
              </div>

              <div style={{ padding: '16px', background: '#f0f8ff', borderLeft: '4px solid #3987b8', borderRadius: '4px' }}>
                <h3 style={{ margin: '0 0 8px 0', color: '#3987b8', fontSize: '14px' }}>💻 IT-Affinität</h3>
                <p style={{ margin: '0', fontSize: '13px', color: '#666' }}>Hohe Technologiekompetenzen und schnelle Lernfähigkeit</p>
              </div>

              <div style={{ padding: '16px', background: '#f0f8ff', borderLeft: '4px solid #3987b8', borderRadius: '4px' }}>
                <h3 style={{ margin: '0 0 8px 0', color: '#3987b8', fontSize: '14px' }}>📊 Projektmanagement</h3>
                <p style={{ margin: '0', fontSize: '13px', color: '#666' }}>Strukturierte Planung und erfolgreiche Projektdurchführung</p>
              </div>

              <div style={{ padding: '16px', background: '#f0f8ff', borderLeft: '4px solid #3987b8', borderRadius: '4px' }}>
                <h3 style={{ margin: '0 0 8px 0', color: '#3987b8', fontSize: '14px' }}>🗣️ Kommunikationsstärke</h3>
                <p style={{ margin: '0', fontSize: '13px', color: '#666' }}>Klare und effektive Kommunikation mit verschiedenen Stakeholdern</p>
              </div>

              <div style={{ padding: '16px', background: '#f0f8ff', borderLeft: '4px solid #3987b8', borderRadius: '4px' }}>
                <h3 style={{ margin: '0 0 8px 0', color: '#3987b8', fontSize: '14px' }}>🌍 Interkulturelle Kompetenz</h3>
                <p style={{ margin: '0', fontSize: '13px', color: '#666' }}>Verständnis für kulturelle Unterschiede und globale Perspektiven</p>
              </div>

              <div style={{ padding: '16px', background: '#f0f8ff', borderLeft: '4px solid #3987b8', borderRadius: '4px' }}>
                <h3 style={{ margin: '0 0 8px 0', color: '#3987b8', fontSize: '14px' }}>⚙️ Technisches Verständnis</h3>
                <p style={{ margin: '0', fontSize: '13px', color: '#666' }}>Tiefes Verständnis für technische Zusammenhänge und Architektur</p>
              </div>
            </div>
          </div>
        )}

        {/* SPRACHEN */}
        {activeTab === 'sprachen' && (
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 30px 0', color: '#3987b8' }}>
              Sprachen & Sprachniveaus
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
              {/* Spanisch */}
              <div style={{ textAlign: 'center' }}>
                <svg width="150" height="150" style={{ margin: '0 auto 12px' }}>
                  <circle cx="75" cy="75" r="60" fill="none" stroke="#e0e0e0" strokeWidth="12" />
                  <circle cx="75" cy="75" r="60" fill="none" stroke="#3987b8" strokeWidth="12" strokeDasharray="377 377" strokeDashoffset="0" />
                </svg>
                <p style={{ margin: '0 0 4px 0', fontWeight: 'bold', fontSize: '16px' }}>🇪🇸 Spanisch</p>
                <p style={{ margin: '0 0 4px 0', color: '#666', fontSize: '14px' }}>Muttersprache</p>
                <p style={{ margin: '0', color: '#3987b8', fontWeight: 'bold', fontSize: '16px' }}>100%</p>
              </div>

              {/* Deutsch */}
              <div style={{ textAlign: 'center' }}>
                <svg width="150" height="150" style={{ margin: '0 auto 12px' }}>
                  <circle cx="75" cy="75" r="60" fill="none" stroke="#e0e0e0" strokeWidth="12" />
                  <circle cx="75" cy="75" r="60" fill="none" stroke="#3987b8" strokeWidth="12" strokeDasharray="377 377" strokeDashoffset="0" />
                </svg>
                <p style={{ margin: '0 0 4px 0', fontWeight: 'bold', fontSize: '16px' }}>🇩🇪 Deutsch</p>
                <p style={{ margin: '0 0 4px 0', color: '#666', fontSize: '14px' }}>Muttersprache</p>
                <p style={{ margin: '0', color: '#3987b8', fontWeight: 'bold', fontSize: '16px' }}>100%</p>
              </div>

              {/* Englisch */}
              <div style={{ textAlign: 'center' }}>
                <svg width="150" height="150" style={{ margin: '0 auto 12px' }}>
                  <circle cx="75" cy="75" r="60" fill="none" stroke="#e0e0e0" strokeWidth="12" />
                  <circle cx="75" cy="75" r="60" fill="none" stroke="#3987b8" strokeWidth="12" strokeDasharray="245.05 377" strokeDashoffset="0" />
                </svg>
                <p style={{ margin: '0 0 4px 0', fontWeight: 'bold', fontSize: '16px' }}>🇬🇧 Englisch</p>
                <p style={{ margin: '0 0 4px 0', color: '#666', fontSize: '14px' }}>B2/C1 - Fortgeschritten</p>
                <p style={{ margin: '0', color: '#3987b8', fontWeight: 'bold', fontSize: '16px' }}>65%</p>
              </div>

              {/* Katalanisch */}
              <div style={{ textAlign: 'center' }}>
                <svg width="150" height="150" style={{ margin: '0 auto 12px' }}>
                  <circle cx="75" cy="75" r="60" fill="none" stroke="#e0e0e0" strokeWidth="12" />
                  <circle cx="75" cy="75" r="60" fill="none" stroke="#3987b8" strokeWidth="12" strokeDasharray="113.1 377" strokeDashoffset="0" />
                </svg>
                <p style={{ margin: '0 0 4px 0', fontWeight: 'bold', fontSize: '16px' }}>🇨🇦 Katalanisch</p>
                <p style={{ margin: '0 0 4px 0', color: '#666', fontSize: '14px' }}>A2 Niveau</p>
                <p style={{ margin: '0', color: '#3987b8', fontWeight: 'bold', fontSize: '16px' }}>30%</p>
              </div>
            </div>
          </div>
        )}

        {/* HOBBIES */}
        {activeTab === 'hobbies' && (
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 20px 0', color: '#3987b8' }}>
              Hobbies & Persönliche Interessen
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              <div>
                <h3 style={{ fontSize: '14px', fontWeight: 'bold', margin: '0 0 12px 0', color: '#000' }}>Leidenschaftliche Interessen</h3>
                <ul style={{ margin: '0', paddingLeft: '20px', fontSize: '14px', lineHeight: '1.8' }}>
                  <li>🤖 KI & Technologie-Entwicklung</li>
                  <li>💻 Coding & Software Design</li>
                  <li>🎨 Kreative Projekte & Design</li>
                  <li>📚 Kontinuierliches Lernen neuer Technologien</li>
                  <li>🎮 Videospiele & Game Development</li>
                </ul>
              </div>

              <div>
                <h3 style={{ fontSize: '14px', fontWeight: 'bold', margin: '0 0 12px 0', color: '#000' }}>Persönliche & Soziale Aktivitäten</h3>
                <ul style={{ margin: '0', paddingLeft: '20px', fontSize: '14px', lineHeight: '1.8' }}>
                  <li>🕸️ Networking & Community Building</li>
                  <li>💪 Kampfsport & Fitnessstudio</li>
                  <li>💃 Tanzen & Bewegung</li>
                  <li>🌍 Interkulturelle Erfahrungen & Reisen</li>
                  <li>🎭 Künstlerische & kulturelle Aktivitäten</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
