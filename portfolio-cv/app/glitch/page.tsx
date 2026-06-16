export default function GlitchPage() {
  return (
    <div>
      <iframe
        src="/glitch/index.html"
        style={{
          width: '100%',
          height: '100vh',
          border: 'none',
          display: 'block'
        }}
        title="Glitch - IHK Lernbegleiter"
        allow="fullscreen"
      />
    </div>
  );
}
