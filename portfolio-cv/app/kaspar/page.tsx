'use client';

import { useEffect, useState } from 'react';

export default function KasparPage() {
  const [iframeUrl, setIframeUrl] = useState('/kaspar-game/index.html');
  const [isLocalhost, setIsLocalhost] = useState(false);

  useEffect(() => {
    const hostname = window.location.hostname;
    const local = hostname === 'localhost' || hostname === '127.0.0.1';
    setIsLocalhost(local);

    if (local) {
      setIframeUrl('http://localhost:3001');
    } else {
      setIframeUrl('/kaspar-game/index.html');
    }
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
      {!isLocalhost && (
        <div style={{
          padding: '20px',
          background: '#fff9e6',
          borderBottom: '3px solid #ffc107',
          textAlign: 'center'
        }}>
          <p style={{ margin: 0, color: '#333', fontWeight: 'bold' }}>
            ⚠️ Kaspar Hauser läuft lokal auf deinem Computer
          </p>
          <p style={{ margin: '8px 0 0 0', color: '#666', fontSize: '14px' }}>
            Starte <code style={{ background: '#f0f0f0', padding: '2px 6px', borderRadius: '3px' }}>START.bat</code> im Projektordner um den Server zu starten
          </p>
        </div>
      )}
      <iframe
        src={iframeUrl}
        style={{
          width: '100%',
          height: isLocalhost ? '100vh' : 'calc(100vh - 80px)',
          border: 'none',
          display: 'block'
        }}
        title="Kaspar Hauser Quest"
        allow="microphone; geolocation"
      />
    </div>
  );
}
