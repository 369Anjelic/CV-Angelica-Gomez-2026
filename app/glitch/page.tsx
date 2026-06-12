'use client';

export default function GlitchPage() {
  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <iframe
        src="/glitch-game/index.html"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          display: 'block'
        }}
        title="Glitch verbessert"
        allow="fullscreen"
      />
    </div>
  );
}
