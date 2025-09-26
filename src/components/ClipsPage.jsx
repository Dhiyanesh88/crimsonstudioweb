import React from 'react';

const clips = [
  { title: 'Celestial Odyssey Trailer', src: '/videos/celestial-trailer.mp4', thumbnail: '/images/celestial.jpg' },
  { title: 'Neo Samurai Action Reel', src: '/videos/neo-samurai.mp4', thumbnail: '/images/neo-samurai.jpg' },
  { title: 'Pixel Hearts Teaser', src: '/videos/pixel-hearts.mp4', thumbnail: '/images/pixel-hearts.jpg' },
  // Add more clips as needed
];

export default function ClipsPage() {
  return (
    <div style={{ background: '#0d0d0d', color: '#fff', fontFamily: 'Arial, sans-serif', minHeight: '100vh', padding: '50px 20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px', color: '#ff2e63' }}>Studio Clips & Trailers</h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
        }}
      >
        {clips.map((clip) => (
          <div
            key={clip.title}
            style={{
              background: '#111',
              borderRadius: '10px',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.03)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(255,46,99,0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <video
              src={clip.src}
              poster={clip.thumbnail}
              controls
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <div style={{ padding: '15px', textAlign: 'center' }}>
              <h3 style={{ margin: '0', color: '#ff2e63' }}>{clip.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
