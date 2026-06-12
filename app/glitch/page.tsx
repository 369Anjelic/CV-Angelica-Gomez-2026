'use client';

import { useEffect, useState } from 'react';

export default function GlitchPage() {
  const [iframeUrl, setIframeUrl] = useState('/glitch-game/index.html');

  useEffect(() => {
    const hostname = window.location.hostname;
    const isLocalhost = hostname === 'localhost' || hostname === '127.0.0.1';

    if (isLocalhost) {
      setIframeUrl('http://localhost:3003');
    } else {
      setIframeUrl('/glitch-game/index.html');
    }
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <iframe
        src={iframeUrl}
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
