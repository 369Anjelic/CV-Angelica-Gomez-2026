'use client';

import { useState, useEffect, useRef } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface QuestInfo {
  id: number;
  name: string;
  answer: string;
}

const QUESTS: QuestInfo[] = [
  { id: 1, name: 'Handwerkerhof', answer: 'gold' },
  { id: 2, name: 'St. Lorenz Kirche', answer: 'verkündigung' },
  { id: 3, name: 'Nassauer Haus', answer: 'geschlechterturm' },
  { id: 4, name: 'Schöner Brunnen', answer: 'wunsch' },
  { id: 5, name: 'Frauenkirche', answer: 'männleinlaufen' },
  { id: 6, name: 'Altes Rathaus', answer: 'eiserne jungfrau' },
  { id: 7, name: 'St. Sebald', answer: 'sebaldus' },
  { id: 8, name: 'Kaiserburg', answer: 'reichskleinodien' },
  { id: 9, name: 'Weinstadel', answer: 'lepra' },
  { id: 10, name: 'Henkersteg', answer: 'folter' },
];

export default function KasparPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState('0/10');
  const [error, setError] = useState('');
  const [currentQuestIndex, setCurrentQuestIndex] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = async () => {
    try {
      const response = await fetch('/api/kaspar/health');
      if (response.ok) {
        setError('');
        setMessages([
          {
            role: 'assistant',
            content: `✨ Kaspar Hauser:\n\n"Willkommen in meiner Welt. 10 Rätsel der Geschichte Nürnbergs warten auf dich. Kannst du sie lösen?"\n\n📍 Station 1: ${QUESTS[0].name}`,
          },
        ]);
      } else {
        setError('⚠️ Kaspar-Server nicht erreichbar');
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
      const response = await fetch('/api/kaspar/bot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage,
          history: messages,
          userId: 'player',
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
        if (result.progress) {
          setProgress(result.progress);
        }
        if (result.correct) {
          setCurrentQuestIndex(
            Math.min(currentQuestIndex + 1, QUESTS.length - 1)
          );
        }
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

  const resetGame = async () => {
    setMessages([]);
    setProgress('0/10');
    setCurrentQuestIndex(0);
    initializeGame();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-black text-white">
      {/* Header */}
      <div className="border-b border-purple-600 bg-black/50 backdrop-blur">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold mb-2">✨ Kaspar Hauser's Quest</h1>
              <p className="text-purple-300">Löse die 10 Rätsel der Geschichte Nürnbergs</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-purple-400">{progress}</div>
              <div className="text-sm text-gray-400">Rätsel gelöst</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-4 bg-gray-800 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all"
              style={{
                width: `${(parseInt(progress.split('/')[0]) / 10) * 100}%`,
              }}
            />
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

        {/* Current Quest Info */}
        {currentQuestIndex < QUESTS.length && (
          <div className="mb-4 p-4 bg-gradient-to-r from-purple-600/30 to-pink-600/30 border border-purple-500 rounded">
            <div className="flex items-center gap-3">
              <div className="text-2xl">📍</div>
              <div>
                <div className="text-sm text-gray-400">
                  Station {currentQuestIndex + 1}
                </div>
                <div className="text-lg font-bold">
                  {QUESTS[currentQuestIndex].name}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto mb-6 space-y-4 bg-black/30 rounded-lg p-4 border border-purple-600/30">
          {messages.length === 0 ? (
            <div className="flex items-center justify-center h-full text-gray-500">
              <div className="text-center">
                <div className="text-4xl mb-4">👻</div>
                <p>Warte auf Kaspar's erste Nachricht...</p>
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
                      ? 'bg-purple-600 text-white'
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
            placeholder="Deine Antwort eingeben..."
            disabled={loading}
            className="flex-1 px-4 py-3 bg-gray-900 border border-purple-600 rounded text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded font-bold hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 transition"
          >
            {loading ? '⏳' : '📤'}
          </button>
          <button
            type="button"
            onClick={resetGame}
            className="px-4 py-3 bg-gray-700 rounded hover:bg-gray-600 transition"
            title="Spiel zurücksetzen"
          >
            🔄
          </button>
        </form>
      </div>
    </div>
  );
}
