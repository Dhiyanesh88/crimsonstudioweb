import React from 'react';

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
  return (
    <div style={{ 
      background: '#0d0d0d', 
      color: '#fff', 
      fontFamily: 'Arial, sans-serif', 
      minHeight: '50vh', 
      padding: 'clamp(40px, 5vw, 60px) 20px' 
    }}>
      <h1 style={{ 
        textAlign: 'center', 
        marginBottom: '40px', 
        color: '#ff2e63', 
        fontSize: 'clamp(2rem, 5vw, 2.5rem)' 
      }}>
        Our Services
      </h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: 'clamp(20px, 3vw, 30px)',
      }}>
        {services.map((service) => (
          <div
            key={service.title}
            style={{
              background: '#111',
              borderRadius: '10px',
              padding: 'clamp(20px, 3vw, 30px)',
              textAlign: 'center',
              position: 'relative',
              cursor: 'pointer',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(255,46,99,0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <h3 style={{ 
              marginBottom: '15px', 
              color: '#ff2e63', 
              fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)' 
            }}>
              {service.title}
            </h3>
            <p style={{ 
              fontSize: 'clamp(0.85rem, 2vw, 1rem)', 
              lineHeight: '1.4' 
            }}>
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
