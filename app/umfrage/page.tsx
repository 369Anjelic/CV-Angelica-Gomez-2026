'use client';

export default function UmfragePage() {
  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <iframe
        src="/umfrage-app/index.html"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          display: 'block'
        }}
        title="Umfrage App"
        allow="fullscreen"
      />
    </div>
  );
}
