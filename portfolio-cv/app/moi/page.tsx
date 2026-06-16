'use client';

import { useState, useEffect, useRef } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function MoiPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    initializeBot();
  }, []);

  const initializeBot = async () => {
    try {
      const response = await fetch('/api/moi/health');
      if (response.ok) {
        setError('');
        setMessages([
          {
            role: 'assistant',
            content: `🤖 MOI Bot:\n\n"Hallo! Ich bin dein persönlicher KI-Assistent. Ich kann dir bei verschiedenen Aufgaben helfen. Was möchtest du wissen oder tun?"`,
          },
        ]);
      } else {
        setError('⚠️ MOI-Server nicht erreichbar');
      }
    } catch (err) {
      setError('⚠️ Verbindung zum Server fehlgeschlagen');
    }
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');
    setLoading(true);

    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);

    try {
      const response = await fetch('/api/moi/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage,
          history: messages,
        }),
      });

      const result = await response.json();

      if (result.error) {
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            content: `❌ Fehler: ${result.error}`,
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            content: result.response,
          },
        ]);
      }
      setError('');
    } catch (err: any) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: `❌ Fehler: ${err.message}`,
        },
      ]);
      setError('Server-Fehler: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const resetChat = () => {
    setMessages([]);
    setError('');
    initializeBot();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-black text-white">
      {/* Header */}
      <div className="border-b border-blue-600 bg-black/50 backdrop-blur">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold mb-2">🤖 MOI Bot</h1>
              <p className="text-blue-300">Dein persönlicher KI-Assistent</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8 h-[calc(100vh-200px)] flex flex-col">
        {/* Error Message */}
        {error && (
          <div className="mb-4 p-4 bg-red-900/50 border border-red-600 rounded">
            {error}
          </div>
        )}

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto mb-6 space-y-4 bg-black/30 rounded-lg p-4 border border-blue-600/30">
          {messages.length === 0 ? (
            <div className="flex items-center justify-center h-full text-gray-500">
              <div className="text-center">
                <div className="text-4xl mb-4">🤖</div>
                <p>Warte auf die erste Nachricht...</p>
              </div>
            </div>
          ) : (
            messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                    msg.role === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-800 text-gray-100'
                  }`}
                >
                  <p className="whitespace-pre-wrap text-sm">
                    {msg.content}
                  </p>
                </div>
              </div>
            ))
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Form */}
        <form onSubmit={sendMessage} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Deine Nachricht eingeben..."
            disabled={loading}
            className="flex-1 px-4 py-3 bg-gray-900 border border-blue-600 rounded text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded font-bold hover:from-blue-700 hover:to-cyan-700 disabled:opacity-50 transition"
          >
            {loading ? '⏳' : '📤'}
          </button>
          <button
            type="button"
            onClick={resetChat}
            className="px-4 py-3 bg-gray-700 rounded hover:bg-gray-600 transition"
            title="Chat zurücksetzen"
          >
            🔄
          </button>
        </form>
      </div>
    </div>
  );
}
