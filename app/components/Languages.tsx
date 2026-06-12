'use client';

import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip);

const languages = [
  { name: 'Deutsch', level: 100, color: '#FF6B6B', borderColor: '#C92A2A' },
  { name: 'Spanisch', level: 100, color: '#4ECDC4', borderColor: '#0B9B8A' },
  { name: 'Englisch', level: 75, color: '#45B7D1', borderColor: '#0A7BA7' },
  { name: 'Catalan', level: 30, color: '#FFA07A', borderColor: '#FF7A45' },
];

export default function Languages() {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return context.parsed + '%';
          },
        },
      },
    },
  };

  return (
    <section className="languages">
      <h2>Sprachkenntnisse</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
        {languages.map((lang) => {
          const data = {
            datasets: [
              {
                data: [lang.level, 100 - lang.level],
                backgroundColor: [lang.color, '#e0e0e0'],
                borderColor: [lang.borderColor, '#e0e0e0'],
                borderWidth: 2,
              },
            ],
          };

          return (
            <div key={lang.name} style={{ textAlign: 'center' }}>
              <div style={{ width: '120px', height: '120px' }}>
                <Doughnut data={data} options={chartOptions} />
              </div>
              <p style={{ marginTop: '0.5rem', fontSize: '14px' }}>{lang.name}</p>
              <p style={{ fontSize: '12px', color: '#666' }}>{lang.level}%</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
