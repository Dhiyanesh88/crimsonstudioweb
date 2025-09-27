import React from 'react';

const team = [
  { name: 'Dhiyanesh R', role: 'CreLead & Founder', bio: 'Creative direction, storytelling, art, design', photo: '' },
  { name: 'Akash', role: 'OpsLead & Founder', bio: 'Operations, production, finance, management', photo: '' },
];

const values = ['Creativity', 'Respect for Source Material', 'Diversity in Genres', 'Collaboration', 'Innovation'];

export default function About() {
  return (
    <div style={{ background: '#0d0d0d', color: '#fff', fontFamily: 'Arial, sans-serif', minHeight: '50vh', padding: 'clamp(40px, 5vw, 60px) 20px' }}>
      
      {/* Studio Overview */}
      <section style={{ maxWidth: '900px', margin: '0 auto 60px', textAlign: 'center' }}>
        <h1 style={{ color: '#ff2e63', marginBottom: '20px', fontSize: 'clamp(2rem, 5vw, 2.5rem)' }}>
          About Crimson Celest Studios
        </h1>
        <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', lineHeight: '1.6' }}>
          Our goal is to adapt stories into captivating anime for all audiences. We bring passion, creativity, and respect for source material to every project we undertake.
        </p>
      </section>

      {/* Studio Values */}
      <section style={{ maxWidth: '900px', margin: '0 auto 60px', textAlign: 'center' }}>
        <h2 style={{ color: '#ff2e63', marginBottom: '20px', fontSize: 'clamp(1.5rem, 4vw, 1.8rem)' }}>Our Values</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px' }}>
          {values.map((value) => (
            <span
              key={value}
              style={{
                background: '#111',
                padding: 'clamp(8px, 1.5vw, 10px) clamp(15px, 2.5vw, 20px)',
                borderRadius: '20px',
                border: '1px solid #ff2e63',
                color: '#ff2e63',
                fontWeight: 'bold',
                fontSize: 'clamp(0.8rem, 2vw, 0.95rem)',
              }}
            >
              {value}
            </span>
          ))}
        </div>
      </section>

      {/* Team */}
      <section style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ color: '#ff2e63', textAlign: 'center', marginBottom: '40px', fontSize: 'clamp(1.5rem, 4vw, 1.8rem)' }}>
          Meet the Team
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px',
          }}
        >
          {team.map((member) => (
            <div
              key={member.name}
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '10px',
                cursor: 'pointer',
                transition: 'transform 0.3s, box-shadow 0.3s',
                background: '#111',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(255,46,99,0.5)';
                const bio = e.currentTarget.querySelector('.bio');
                if (bio) bio.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
                const bio = e.currentTarget.querySelector('.bio');
                if (bio) bio.style.opacity = '0';
              }}
            >
              {member.photo ? (
                <img
                  src={member.photo}
                  alt={member.name}
                  style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                />
              ) : (
                <div
                  style={{
                    width: '100%',
                    height: '300px',
                    background: '#222',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#aaa',
                    fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                  }}
                >
                  Photo Coming Soon
                </div>
              )}

              <div style={{ padding: '15px', textAlign: 'center' }}>
                <h3 style={{ margin: '0 0 5px', color: '#ff2e63', fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)' }}>
                  {member.name}
                </h3>
                <p style={{ margin: '0 0 10px', fontSize: 'clamp(0.85rem, 2vw, 1rem)', color: '#aaa' }}>{member.role}</p>
                <p
                  className="bio"
                  style={{
                    fontSize: 'clamp(0.8rem, 1.8vw, 0.95rem)',
                    color: '#fff',
                    opacity: '0',
                    transition: 'opacity 0.3s',
                    marginTop: '10px',
                  }}
                >
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
