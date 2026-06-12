'use client';

import { useEffect, useState } from 'react';

export default function KasparPage() {
  const [iframeUrl, setIframeUrl] = useState('/kaspar-game/index.html');

  useEffect(() => {
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      setIframeUrl('http://localhost:3001');
    }
  }, []);

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
