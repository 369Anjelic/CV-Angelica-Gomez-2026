'use client';

export default function MOIPage() {
  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <iframe
        src="/moi-bot/index.html"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          display: 'block'
        }}
        title="MOI - AI Bot Experte"
        allow="fullscreen"
      />
    </div>
  );
}
