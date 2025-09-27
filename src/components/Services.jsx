import React, { useState, useEffect } from 'react';

const services = [
  {
    title: 'Animation Production',
    description: '2D, 3D, CGI, Stop-Motion animation for anime and games.',
  },
  {
    title: 'Adaptation Services',
    description: 'Manga or Game stories adapted into captivating anime.',
  },
  {
    title: 'Consultation & Collaboration',
    description: 'Storyboarding, character design, production guidance.',
  },
  {
    title: 'Merchandise & Fan Engagement',
    description: 'Creation of merchandise and engagement campaigns.',
  },
];

export default function Services() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      style={{
        background: 'transparent',
        color: '#fff',
        fontFamily: 'Arial, sans-serif',
        minHeight: '50vh',
        padding: 'clamp(40px, 5vw, 60px) 20px',
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
          fontSize: 'clamp(2rem, 5vw, 2.5rem)',
          textShadow: '0 0 10px rgba(255,46,99,0.7)',
        }}
      >
        Our Services
      </h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: windowWidth < 768 ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 'clamp(20px, 3vw, 30px)',
        }}
      >
        {services.map((service, idx) => (
          <div
            key={service.title}
            style={{
              background: 'rgba(20,20,30,0.5)',
              backdropFilter: 'blur(6px)',
              borderRadius: '15px',
              padding: 'clamp(20px, 3vw, 30px)',
              textAlign: 'center',
              position: 'relative',
              cursor: 'pointer',
              transition: 'transform 0.5s ease, box-shadow 0.5s ease',
              animation: `float ${6 + idx}s ease-in-out infinite`, // staggered slow float
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow =
                '0 15px 35px rgba(255,46,99,0.4), 0 0 50px rgba(79,172,255,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <h3
              style={{
                marginBottom: '15px',
                color: '#ff2e63',
                fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
                textShadow: '0 0 6px rgba(255,46,99,0.6)',
              }}
            >
              {service.title}
            </h3>
            <p style={{ fontSize: 'clamp(0.85rem, 2vw, 1rem)', lineHeight: '1.5' }}>
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
