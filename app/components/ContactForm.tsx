'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setSubmitted(false);
          setIsOpen(false);
        }, 2000);
      }
    } catch (error) {
      console.error('Fehler beim Senden:', error);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        style={{
          display: 'inline-block',
          padding: '10px 20px',
          backgroundColor: '#3987b8',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          fontWeight: 'bold',
          fontSize: '14px',
          marginTop: '8px',
          cursor: 'pointer',
          transition: 'background 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#2a6690';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#3987b8';
        }}
      >
        ✉️ Email schreiben
      </button>

      {isOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '40px',
            borderRadius: '8px',
            maxWidth: '500px',
            width: '90%',
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h2 style={{ margin: 0, color: '#3987b8', fontSize: '24px' }}>Email schreiben</h2>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '28px',
                  cursor: 'pointer',
                  color: '#666',
                }}
              >
                ✕
              </button>
            </div>

            {submitted ? (
              <div style={{
                padding: '20px',
                backgroundColor: '#d4edda',
                borderRadius: '4px',
                color: '#155724',
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
                ✓ Email erfolgreich versendet!
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#333' }}>
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: '1px solid #ddd',
                      borderRadius: '4px',
                      fontSize: '14px',
                      boxSizing: 'border-box',
                    }}
                    placeholder="Dein Name"
                  />
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#333' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: '1px solid #ddd',
                      borderRadius: '4px',
                      fontSize: '14px',
                      boxSizing: 'border-box',
                    }}
                    placeholder="deine@email.com"
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#333' }}>
                    Nachricht
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: '1px solid #ddd',
                      borderRadius: '4px',
                      fontSize: '14px',
                      boxSizing: 'border-box',
                      minHeight: '120px',
                      fontFamily: 'Arial, sans-serif',
                    }}
                    placeholder="Deine Nachricht..."
                  />
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    type="submit"
                    style={{
                      flex: 1,
                      padding: '12px',
                      backgroundColor: '#3987b8',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      fontSize: '14px',
                    }}
                  >
                    Senden
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    style={{
                      flex: 1,
                      padding: '12px',
                      backgroundColor: '#e0e0e0',
                      color: '#333',
                      border: 'none',
                      borderRadius: '4px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      fontSize: '14px',
                    }}
                  >
                    Abbrechen
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
