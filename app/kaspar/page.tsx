'use client';

import { useEffect, useState } from 'react';

export default function KasparPage() {
  const [iframeUrl, setIframeUrl] = useState('/kaspar-game/index.html');

  useEffect(() => {
    const hostname = window.location.hostname;
    const isLocalhost = hostname === 'localhost' || hostname === '127.0.0.1';

    if (isLocalhost) {
      setIframeUrl('http://localhost:3001');
    } else {
      setIframeUrl('/kaspar-game/index.html');
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
        title="Kaspar Hauser Quest"
        allow="microphone; geolocation"
      />
    </div>
  );
}
