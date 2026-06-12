'use client';

import { useState } from 'react';
import ProjectsGrid from './ProjectsGrid';

type FilterType = 'all' | 'active' | 'wip' | 'planning';

export default function FilterTabs() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const handleFilter = (filter: FilterType) => {
    setActiveFilter(filter);
  };

  return (
    <>
      <div className="filter-tabs">
        <button
          className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
          onClick={() => handleFilter('all')}
        >
          📂 Alle
        </button>
        <button
          className={`filter-btn ${activeFilter === 'active' ? 'active' : ''}`}
          onClick={() => handleFilter('active')}
        >
          🟢 Aktiv
        </button>
        <button
          className={`filter-btn ${activeFilter === 'wip' ? 'active' : ''}`}
          onClick={() => handleFilter('wip')}
        >
          🟡 In Progress
        </button>
        <button
          className={`filter-btn ${activeFilter === 'planning' ? 'active' : ''}`}
          onClick={() => handleFilter('planning')}
        >
          🔵 Planung
        </button>
      </div>
      <ProjectsGrid filter={activeFilter} />
    </>
  );
}
