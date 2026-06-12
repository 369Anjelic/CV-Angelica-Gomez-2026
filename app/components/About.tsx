'use client';

export default function About() {
  return (
    <section style={{
      maxWidth: '1200px',
      margin: '60px auto',
      padding: '40px 20px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '40px',
      alignItems: 'start',
    }}>
      {/* Bild */}
      <div style={{
        textAlign: 'center',
      }}>
        <img
          src="/cv-profile-image.jpeg"
          alt="Angelica Gomez"
          style={{
            width: '100%',
            maxWidth: '350px',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(57, 135, 184, 0.2)',
          }}
        />
      </div>

      {/* CV Inhalt */}
      <div style={{ color: '#333' }}>
        <h1 style={{ fontSize: '36px', margin: '0 0 8px 0', color: '#3987b8' }}>
          Angelica Gomez
        </h1>
        <p style={{ fontSize: '14px', color: '#3987b8', margin: '0 0 8px 0', fontWeight: 'bold' }}>
          hyperfocus • out of the box denken • visionär
        </p>
        <p style={{ fontSize: '18px', color: '#666', margin: '0 0 24px 0' }}>
          IT/AI-Quereinsteigerin
        </p>

        {/* Kontakt */}
        <div style={{ marginBottom: '24px' }}>
          <p style={{ margin: '8px 0', fontSize: '16px' }}>📞 0157 3923 1128</p>
          <p style={{ margin: '8px 0', fontSize: '14px', color: '#666' }}>✉️ anjelicgomez@hotmail.com</p>
          <a
            href="mailto:anjelicgomez@hotmail.com"
            style={{
              display: 'inline-block',
              padding: '12px 24px',
              background: '#3987b8',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
              fontWeight: 'bold',
              marginTop: '8px',
            }}
          >
            ✉️ Email schreiben
          </a>
        </div>

        {/* Kurzprofil */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ color: '#3987b8', marginBottom: '12px' }}>Kurzprofil</h3>
          <p style={{ lineHeight: '1.6' }}>
            Als neurodivergente, analytisch denkende Persönlichkeit bringe ich Neugier, IT-Begeisterung
            und eine lösungsorientierte Arbeitsweise in Teams ein. Ich nutze KI-Tools effektiv zur
            Entwicklung praxisnaher Lösungen. Durch meine freiberufliche Tätigkeit sowie meine vielseitige
            berufliche Ausbildung verfüge ich über ein ausgeprägtes Maß an Präzision, Kreativität und
            Verantwortungsbewusstsein.
          </p>
        </div>

        {/* Soft Skills */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ color: '#3987b8', marginBottom: '12px' }}>Soft Skills</h3>
          <ul style={{ lineHeight: '1.8', margin: 0, paddingLeft: '20px' }}>
            <li>Systemdenken & Projektmanagement (80/20-Prinzip)</li>
            <li>Resilienz & Lernhunger</li>
            <li>Neurodivergente Stärken: Hyperfokus, schnelle Mustererkennung</li>
            <li>Schnelle Auffassungsgabe und praxisorientiertes Arbeiten</li>
            <li>Zielstrebigkeit und Lösungsorientierung</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
