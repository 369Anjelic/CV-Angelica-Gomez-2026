'use client';

export default function CV() {
  return (
    <section style={{
      maxWidth: '1200px',
      margin: '60px auto',
      padding: '40px 20px',
      display: 'grid',
      gridTemplateColumns: '1fr 2fr',
      gap: '40px',
      alignItems: 'start',
    }}>
      {/* Bild */}
      <div style={{ textAlign: 'center' }}>
        <img
          src="/cv-profile.jpeg"
          alt="Angelica Gomez"
          style={{
            width: '100%',
            maxWidth: '300px',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(57, 135, 184, 0.2)',
          }}
        />
      </div>

      {/* CV Text */}
      <div style={{ color: '#333', lineHeight: '1.8' }}>
        <h2 style={{ color: '#3987b8', fontSize: '28px', margin: '0 0 20px 0', borderBottom: '2px solid #3987b8', paddingBottom: '10px' }}>
          Berufserfahrung
        </h2>

        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ color: '#333', fontSize: '18px', margin: '0 0 8px 0' }}>01/2026 – 06/2026: Praktikum als Lern-Bot-Spezialist</h3>
          <p style={{ margin: '0 0 12px 0', color: '#666', fontWeight: 'bold' }}>Unwritten Studio, Nürnberg</p>
          <ul style={{ marginLeft: '20px', marginBottom: '12px' }}>
            <li>Spezialisierung auf die Anwendung von Claude code und Vercel-Deployment</li>
            <li>Tech Stack: React, Python Backend, Full-Stack API-Integration, GitHub</li>
            <li>Projektleitung des Kaspar-Hauser-Chatbots: Konzeption der Feature-Architektur, Teamkoordination sowie Durchführung eines produktionsreifen Launchs inklusive Testing.</li>
            <li>Eigenständige Konzeption und Entwicklung von Website-Umfragen sowie des Lernbots „Glitch" zur Unterstützung der Prüfungsvorbereitung (IHK Anwendungsentwicklung).</li>
            <li>Stärkung von Soft-Skills: Team-Management, Projektmanagement, IT-Architekturverständnis, eigenständige Konzeption und effektive Kommunikation in der Projektumsetzungsphase.</li>
          </ul>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ color: '#333', fontSize: '18px', margin: '0 0 8px 0' }}>10/2025 – 12/2025: Freiberufliche Bauzeichnerin / CAD-Spezialistin</h3>
          <p style={{ margin: '0 0 12px 0', color: '#666', fontWeight: 'bold' }}>Alexander Flügge Ingenieurbüro, Nürnberg</p>
          <ul style={{ marginLeft: '20px', marginBottom: '12px' }}>
            <li>Vertiefung CAD-Planung: Baupläne, Baueingabepläne, Detailzeichnungen.</li>
            <li>Eigenständige Teamkoordination und Qualitätssicherung technischer Dokumentation</li>
            <li>Anwendung präziser Arbeitsweise, Systemdenken, technische Dokumentation</li>
          </ul>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ color: '#333', fontSize: '18px', margin: '0 0 8px 0' }}>01/2022 – 09/2025: Freiberufliche Videografin</h3>
          <p style={{ margin: '0 0 12px 0', color: '#666', fontWeight: 'bold' }}>Deutschlandweit, Remote und vor Ort</p>
          <ul style={{ marginLeft: '20px', marginBottom: '12px' }}>
            <li>Konzeption, Planung und Umsetzung zielgruppenorientierter Videoprojekte für Unternehmen, politische Kampagnen, Kunstausstellungen und Social Media.</li>
            <li>Beratung von Kunden bei digitalen Content-Strategien.</li>
            <li>KI-gestützte Videobearbeitung, z. B. Color Grading in DaVinci.</li>
            <li>Nutzung von 3D-Animationen in Blender und Fusion für Logoanimationen.</li>
            <li>Eigenständige Umsetzung von IT- und KI-bezogenen Projekten, z. B. Websitenerstellung mit KI sowie Design- und 3D-Projekte mit Coding und Blender.</li>
          </ul>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ color: '#333', fontSize: '18px', margin: '0 0 8px 0' }}>10/2009 – 05/2011: Freiberufliche Goldschmiedin</h3>
          <p style={{ margin: '0 0 12px 0', color: '#666', fontWeight: 'bold' }}>Diverse Goldschmiede, Deutschland</p>
          <ul style={{ marginLeft: '20px', marginBottom: '12px' }}>
            <li>Vertrieb und Herstellung eigener Schmuckstücke und -designs.</li>
            <li>Annahme und Auslieferung von Kundenaufträgen.</li>
            <li>Kooperation in Luxusschmuckdesign & Reparaturen mit diversen Juwelieren</li>
          </ul>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ color: '#333', fontSize: '18px', margin: '0 0 8px 0' }}>07/2005 – 07/2009: Freiberufliche Goldschmiedin</h3>
          <p style={{ margin: '0 0 12px 0', color: '#666', fontWeight: 'bold' }}>Diverse Goldschmiede, Spanien</p>
          <ul style={{ marginLeft: '20px', marginBottom: '12px' }}>
            <li>4 Jahre Praxis-Vertiefung in unterschiedlichen Goldschmiedebetrieben</li>
            <li>Digitalisierungs- & Administrative Assistenz</li>
          </ul>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ color: '#333', fontSize: '18px', margin: '0 0 8px 0' }}>06/2004 – 07/2005: Administrator</h3>
          <p style={{ margin: '0 0 12px 0', color: '#666', fontWeight: 'bold' }}>Familieneigene Rechtsanwaltskanzlei, Kolumbien</p>
          <ul style={{ marginLeft: '20px', marginBottom: '12px' }}>
            <li>Scanning, Dateneingabe, Dokumentenverwaltung.</li>
            <li>Eigenverantwortung, detailliertes Arbeiten und selbstständige Einarbeitung</li>
          </ul>
        </div>

        <h2 style={{ color: '#3987b8', fontSize: '28px', margin: '40px 0 20px 0', borderBottom: '2px solid #3987b8', paddingBottom: '10px' }}>
          Schulische Ausbildung
        </h2>

        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ color: '#333', fontSize: '18px', margin: '0 0 8px 0' }}>09/2016 – 05/2019: Goldschmiede-Ausbildung und Mittlere Reife</h3>
          <p style={{ margin: '0 0 8px 0', color: '#666' }}><strong>Ausbildungsstätte:</strong> Goldschmiede Dötzer Forchheim</p>
          <p style={{ margin: '0 0 8px 0', color: '#666' }}><strong>Berufsschule:</strong> Franz-Oberthür-Schule, Würzburg</p>
          <p style={{ margin: '0 0 8px 0', color: '#666' }}><strong>Abschlussnote:</strong> 1,0 (summa cum laude)</p>
          <p style={{ margin: '0 0 8px 0', color: '#666' }}><strong>Spezialgebiet:</strong> Design mit technischen Bauteilen, CAD, Schmuckherstellung</p>
          <p style={{ margin: '0', color: '#666' }}>Erasmus-Programm in Finnland</p>
        </div>

        <h2 style={{ color: '#3987b8', fontSize: '28px', margin: '40px 0 20px 0', borderBottom: '2px solid #3987b8', paddingBottom: '10px' }}>
          Zusatzqualifikationen
        </h2>

        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ color: '#333', fontSize: '18px', margin: '0 0 8px 0' }}>01/2025 – heute: Selbststudium mit Online-Kursen</h3>
          <ul style={{ marginLeft: '20px' }}>
            <li>Python für Machine Learning und Data Science: Regression, Klassifikation, NLP, Neuronale Netze.</li>
            <li>Complete AI Engineer Training: Python, NLP, Transformers, LLMs, LangChain, Hugging Face, APIs</li>
          </ul>
        </div>

        <h2 style={{ color: '#3987b8', fontSize: '28px', margin: '40px 0 20px 0', borderBottom: '2px solid #3987b8', paddingBottom: '10px' }}>
          Soft-Skills
        </h2>

        <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
          <li>Kreativität und analytisches Denken</li>
          <li>Strukturierte Problemlösungsfähigkeit</li>
          <li>Schnelle Auffassungsgabe und praxisorientiertes Arbeiten</li>
          <li>Eigeninitiative und proaktives Handeln</li>
          <li>Interkulturelle Kompetenz</li>
        </ul>
      </div>
    </section>
  );
}
