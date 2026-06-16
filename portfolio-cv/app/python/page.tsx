'use client';

export default function PythonPage() {
  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <iframe
        src="/python-ubungen/index.html"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          display: 'block'
        }}
        title="Python Coding Übungen"
        allow="fullscreen"
      />
    </div>
  );
}
