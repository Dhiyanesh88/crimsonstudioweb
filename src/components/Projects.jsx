import React, { useState } from 'react';

const projects = [
  {
    title: 'Celestial Odyssey',
    year: 2024,
    genre: 'Fantasy',
    thumbnail: '/images/celestial.jpg',
    tagline: 'A journey through the stars and beyond.',
    trailer: '#',
    format: 'TV Series',
  },
  {
    title: 'Neo Samurai',
    year: 2023,
    genre: 'Action',
    thumbnail: '/images/neo-samurai.jpg',
    tagline: 'Honor, blades, and cybernetic battles.',
    trailer: '#',
    format: 'OVA',
  },
  {
    title: 'Pixel Hearts',
    year: 2022,
    genre: 'Comedy/Romance',
    thumbnail: '/images/pixel-hearts.jpg',
    tagline: 'Love in a digital world.',
    trailer: '#',
    format: 'Web Anime',
  },
];

const filters = ['All', 'TV Series', 'OVA', 'Web Anime', 'Short Film'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((proj) => proj.format === activeFilter);

  return (
    <div style={{ background: '#0d0d0d', color: '#fff', fontFamily: 'Arial, sans-serif', minHeight: '50vh', padding: 'clamp(40px, 5vw, 60px) 20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px', color: '#ff2e63', fontSize: 'clamp(2rem, 5vw, 2.5rem)' }}>Our Projects</h1>

      {/* Filters */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            style={{
              margin: '0 10px',
              padding: 'clamp(8px, 1.5vw, 10px) clamp(15px, 3vw, 20px)',
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              borderRadius: '5px',
              border: activeFilter === filter ? '2px solid #ff2e63' : '1px solid #555',
              background: activeFilter === filter ? '#ff2e63' : '#222',
              color: '#fff',
              cursor: 'pointer',
              transition: '0.3s',
            }}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 'clamp(20px, 3vw, 30px)',
        }}
      >
        {filteredProjects.map((proj) => (
          <div
            key={proj.title}
            style={{
              position: 'relative',
              borderRadius: '10px',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(255,46,99,0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <img
              src={proj.thumbnail}
              alt={proj.title}
              style={{ width: '100%', height: 'clamp(250px, 30vw, 300px)', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                width: '100%',
                padding: 'clamp(10px, 2vw, 15px)',
                background: 'rgba(0,0,0,0.7)',
                color: '#fff',
                transition: '0.3s',
              }}
            >
              <h3 style={{ margin: '0 0 5px', fontSize: 'clamp(1rem, 2.5vw, 1.2rem)' }}>{proj.title} ({proj.year})</h3>
              <p style={{ margin: '0 0 5px', fontSize: 'clamp(0.85rem, 2vw, 1rem)', color: '#ff2e63' }}>{proj.genre}</p>
              <p style={{ margin: '0', fontSize: 'clamp(0.8rem, 1.8vw, 0.95rem)' }}>{proj.tagline}</p>
              {proj.trailer && (
                <a
                  href={proj.trailer}
                  style={{
                    display: 'inline-block',
                    marginTop: '10px',
                    padding: 'clamp(5px, 1.5vw, 8px) clamp(10px, 3vw, 15px)',
                    background: '#ff2e63',
                    color: '#fff',
                    borderRadius: '5px',
                    textDecoration: 'none',
                    fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
                    transition: 'background 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#e23c50')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = '#ff2e63')}
                >
                  Play Trailer
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
