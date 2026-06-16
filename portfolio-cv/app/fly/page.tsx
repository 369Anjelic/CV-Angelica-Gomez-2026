'use client';

import { useEffect, useState } from 'react';

export default function FlyPage() {
  const [iframeUrl, setIframeUrl] = useState('/fly-game/index.html');

  useEffect(() => {
    const hostname = window.location.hostname;
    const isLocalhost = hostname === 'localhost' || hostname === '127.0.0.1';

    if (isLocalhost) {
      setIframeUrl('http://localhost:3002');
    } else {
      setIframeUrl('/fly-game/index.html');
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
        title="Flight Trainer - 2 Player"
        allow="fullscreen"
      />
    </div>
  );
}
