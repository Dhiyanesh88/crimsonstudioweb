import React, { useState, useEffect } from 'react';

const clips = [
  { title: 'Celestial Odyssey Trailer', src: '/assets/trailer.mp4', thumbnail: '/assets/celestial.png' },
  { title: 'Neo Samurai Action Reel', src: '/assets/trailer.mp4', thumbnail: '/assets/samurai.png' },
  { title: 'Pixel Hearts Teaser', src: '/assets/trailer.mp4', thumbnail: '/assets/pixheart.png' },
];

export default function ClipsPage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [selectedClip, setSelectedClip] = useState(null); // for dialog

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 768;
  const videoHeight = isMobile ? 'clamp(120px, 20vw, 150px)' : 'clamp(180px, 25vw, 200px)';
  const headingFontSize = isMobile ? 'clamp(1.5rem, 5vw, 2rem)' : 'clamp(2rem, 4vw, 2.5rem)';
  const padding = isMobile ? '20px 15px' : '60px 40px';

  return (
    <div
      style={{
        background: 'transparent',
        color: '#fff',
        fontFamily: 'Arial, sans-serif',
        minHeight: '50vh',
        padding,
        position: 'relative',
        zIndex: 1,
      }}
    >
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>

      <h1
        style={{
          textAlign: 'center',
          marginBottom: '40px',
          color: '#ff2e63',
          fontSize: headingFontSize,
          textShadow: '0 0 10px rgba(255,46,99,0.7)',
        }}
      >
        Studio Clips & Trailers
      </h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '25px',
        }}
      >
        {clips.map((clip, idx) => (
          <ClipCard
            key={clip.title}
            clip={clip}
            videoHeight={videoHeight}
            isMobile={isMobile}
            idx={idx}
            onClick={() => setSelectedClip(clip)}
          />
        ))}
      </div>

      {/* Trailer Dialog */}
      {selectedClip && (
        <div
          onClick={() => setSelectedClip(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 999,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
            style={{
              background: '#111',
              padding: '15px',
              borderRadius: '12px',
              maxWidth: '90%',
              width: isMobile ? '95%' : '70%',
              boxShadow: '0 0 25px rgba(255,46,99,0.7)',
              position: 'relative',
            }}
          >
            <button
              onClick={() => setSelectedClip(null)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'transparent',
                border: 'none',
                fontSize: '1.8rem',
                color: '#fff',
                cursor: 'pointer',
              }}
            >
              ✖
            </button>
            <h2 style={{ color: '#ff2e63', marginBottom: '10px' }}>{selectedClip.title}</h2>
            <video
              src={selectedClip.src}
              poster={selectedClip.thumbnail}
              controls
              autoPlay
              style={{
                width: '100%',
                maxHeight: '70vh',
                borderRadius: '10px',
                outline: 'none',
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

function ClipCard({ clip, videoHeight, isMobile, idx, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'rgba(20,20,30,0.5)',
        backdropFilter: 'blur(6px)',
        borderRadius: '15px',
        overflow: 'hidden',
        cursor: 'pointer',
        transform: hovered && !isMobile ? 'translateY(-10px)' : 'translateY(0)',
        boxShadow:
          hovered && !isMobile
            ? '0 15px 35px rgba(255,46,99,0.4), 0 0 50px rgba(79,172,255,0.2)'
            : '0 0 10px rgba(0,0,0,0.3)',
        transition: 'transform 0.5s ease, box-shadow 0.5s ease',
        animation: `float ${6 + idx}s ease-in-out infinite`,
      }}
    >
      <img
        src={clip.thumbnail}
        alt={clip.title}
        style={{
          width: '100%',
          height: videoHeight,
          objectFit: 'cover',
          display: 'block',
          filter: 'brightness(0.85)',
        }}
      />
      <div style={{ padding: '15px', textAlign: 'center' }}>
        <h3
          style={{
            margin: 0,
            color: '#ff2e63',
            fontSize: isMobile ? 'clamp(1rem, 3vw, 1.2rem)' : 'clamp(1.2rem, 2vw, 1.5rem)',
            textShadow: '0 0 6px rgba(255,46,99,0.6)',
          }}
        >
          {clip.title}
        </h3>
      </div>
    </div>
  );
}
