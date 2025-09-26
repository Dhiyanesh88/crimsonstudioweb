import React, { useState, useEffect } from 'react';

const clips = [
  { title: 'Celestial Odyssey Trailer', src: '/videos/celestial-trailer.mp4', thumbnail: '/images/celestial.jpg' },
  { title: 'Neo Samurai Action Reel', src: '/videos/neo-samurai.mp4', thumbnail: '/images/neo-samurai.jpg' },
  { title: 'Pixel Hearts Teaser', src: '/videos/pixel-hearts.mp4', thumbnail: '/images/pixel-hearts.jpg' },
  // Add more clips as needed
];

export default function ClipsPage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const videoHeight = windowWidth > 768 ? '200px' : '150px';
  const headingFontSize = windowWidth > 768 ? '2rem' : '1.5rem';

  return (
    <div
      style={{
        background: '#0d0d0d',
        color: '#fff',
        fontFamily: 'Arial, sans-serif',
        minHeight: '50vh',
        padding: windowWidth > 768 ? '60px 40px' : '40px 20px',
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          marginBottom: '40px',
          color: '#ff2e63',
          fontSize: headingFontSize,
        }}
      >
        Studio Clips & Trailers
      </h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '25px',
        }}
      >
        {clips.map((clip) => (
          <ClipCard key={clip.title} clip={clip} videoHeight={videoHeight} />
        ))}
      </div>
    </div>
  );
}

// Separate component for individual clip cards with hover effect
function ClipCard({ clip, videoHeight }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#111',
        borderRadius: '10px',
        overflow: 'hidden',
        cursor: 'pointer',
        transform: hovered ? 'scale(1.03)' : 'scale(1)',
        boxShadow: hovered ? '0 10px 25px rgba(255,46,99,0.5)' : '0 0 10px rgba(0,0,0,0.3)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      <video
        src={clip.src}
        poster={clip.thumbnail}
        controls
        style={{
          width: '100%',
          height: videoHeight,
          objectFit: 'cover',
          display: 'block',
        }}
      />
      <div style={{ padding: '15px', textAlign: 'center' }}>
        <h3
          style={{
            margin: 0,
            color: '#ff2e63',
            fontSize: videoHeight === '200px' ? '1.2rem' : '1rem',
          }}
        >
          {clip.title}
        </h3>
      </div>
    </div>
  );
}
