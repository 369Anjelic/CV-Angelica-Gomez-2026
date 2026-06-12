export default function KasparPage() {
  const iframeUrl = typeof window !== 'undefined' && window.location.hostname === 'localhost'
    ? 'http://localhost:3001'
    : '/kaspar-game/index.html';

  return (
    <iframe
      src={iframeUrl}
      style={{
        width: '100%',
        height: '100vh',
        border: 'none',
        display: 'block'
      }}
      title="Kaspar Hauser Quest"
    />
  );
}
