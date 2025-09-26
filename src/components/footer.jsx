import React from 'react';

const team = [
  { name: 'Dhiyanesh R', role: 'Founder & Director', photo: '/images/team1.jpg', bio: 'Loves storytelling, anime production, and mentoring new creators.' },
  { name: 'Akash', role: 'Co-Director', photo: '/images/team2.jpg', bio: 'Expert in 2D animation and character design with a passion for fantasy worlds.' },
  { name: 'Jayanithi', role: 'CEO', photo: '/images/team3.jpg', bio: 'Visual storyteller focused on dynamic action and compelling narratives.' },
  // Add more team members as needed
];

const values = ['Creativity', 'Respect for Source Material', 'Diversity in Genres', 'Collaboration', 'Innovation'];

export default function About() {
  return (
    <div style={{ background: '#0d0d0d', color: '#fff', fontFamily: 'Arial, sans-serif', minHeight: '50vh', padding: '50px 20px' }}>
      
      {/* Studio Overview */}
      <section style={{ maxWidth: '900px', margin: '0 auto 60px', textAlign: 'center' }}>
        <h1 style={{ color: '#ff2e63', marginBottom: '20px' }}>About Crimson Celest Studios</h1>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
          Our goal is to adapt stories into captivating anime for all audiences. We bring passion, creativity, and respect for source material to every project we undertake.
        </p>
      </section>

      {/* Studio Values */}
      <section style={{ maxWidth: '900px', margin: '0 auto 60px', textAlign: 'center' }}>
        <h2 style={{ color: '#ff2e63', marginBottom: '20px' }}>Our Values</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px' }}>
          {values.map((value) => (
            <span key={value} style={{
              background: '#111',
              padding: '10px 20px',
              borderRadius: '20px',
              border: '1px solid #ff2e63',
              color: '#ff2e63',
              fontWeight: 'bold',
              fontSize: '0.9rem',
            }}>
              {value}
            </span>
          ))}
        </div>
      </section>

      {/* Team */}
      <section style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ color: '#ff2e63', textAlign: 'center', marginBottom: '40px' }}>Meet the Team</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px',
        }}>
          {team.map((member) => (
            <div
              key={member.name}
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '10px',
                cursor: 'pointer',
                transition: 'transform 0.3s, box-shadow 0.3s',
                background: '#111'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(255,46,99,0.5)';
                const bio = e.currentTarget.querySelector('.bio');
                if(bio) bio.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
                const bio = e.currentTarget.querySelector('.bio');
                if(bio) bio.style.opacity = '0';
              }}
            >
              <img
                src={member.photo}
                alt={member.name}
                style={{ width: '100%', height: '300px', objectFit: 'cover' }}
              />
              <div style={{ padding: '15px', textAlign: 'center' }}>
                <h3 style={{ margin: '0 0 5px', color: '#ff2e63' }}>{member.name}</h3>
                <p style={{ margin: '0 0 10px', fontSize: '0.9rem', color: '#aaa' }}>{member.role}</p>
                <p className="bio" style={{
                  fontSize: '0.85rem',
                  color: '#fff',
                  opacity: '0',
                  transition: 'opacity 0.3s',
                  marginTop: '10px'
                }}>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
