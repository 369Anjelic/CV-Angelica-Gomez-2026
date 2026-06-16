'use client';

export default function KasparGame() {
  return (
    <iframe
      src="/kaspar-game/index.html"
      style={{
        width: '100%',
        height: '100vh',
        border: 'none',
        display: 'block'
      }}
      title="Kaspar Hauser - Das größte Rätsel Deutschlands"
      allow="geolocation; microphone; camera"
      sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation"
    />
  );
}
