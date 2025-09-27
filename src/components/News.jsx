import React from 'react';

const newsList = [
  {
    title: 'Celestial Odyssey Trailer Released',
    date: 'Sep 15, 2025',
    snippet: 'Watch the first trailer of our upcoming anime “Celestial Odyssey” and get a glimpse of the adventure across the stars.',
    img: '/images/news1.jpg',
    link: '#',
  },
  {
    title: 'Neo Samurai Wins Award',
    date: 'Aug 30, 2025',
    snippet: 'Our OVA “Neo Samurai” received the Best Action Animation award at the Global Anime Awards 2025.',
    img: '/images/news2.jpg',
    link: '#',
  },
  {
    title: 'Pixel Hearts Collaboration',
    date: 'Jul 20, 2025',
    snippet: 'Exciting collaboration with Pixel Hearts creators for a special web anime short series. Fans will love it!',
    img: '/images/news3.jpg',
    link: '#',
  },
];

export default function News() {
  return (
    <div style={{ background: '#0d0d0d', color: '#fff', fontFamily: 'Arial, sans-serif', minHeight: '50vh', padding: 'clamp(40px, 5vw, 60px) 20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px', color: '#ff2e63', fontSize: 'clamp(2rem, 5vw, 2.5rem)' }}>Latest News</h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'clamp(20px, 3vw, 30px)',
        }}
      >
        {newsList.map((news) => (
          <div
            key={news.title}
            style={{
              background: '#111',
              borderRadius: '10px',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
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
            <img
              src={news.img}
              alt={news.title}
              style={{ width: '100%', height: 'clamp(150px, 20vw, 180px)', objectFit: 'cover' }}
            />
            <div style={{ padding: 'clamp(15px, 2vw, 20px)' }}>
              <h3 style={{ margin: '0 0 10px', color: '#ff2e63', fontSize: 'clamp(1rem, 2.5vw, 1.2rem)' }}>{news.title}</h3>
              <p style={{ margin: '0 0 10px', fontSize: 'clamp(0.75rem, 2vw, 0.85rem)', color: '#aaa' }}>{news.date}</p>
              <p style={{ margin: '0 0 15px', fontSize: 'clamp(0.85rem, 2vw, 1rem)' }}>{news.snippet}</p>
              <a
                href={news.link}
                style={{
                  textDecoration: 'none',
                  color: '#fff',
                  background: '#ff2e63',
                  padding: 'clamp(5px, 1.5vw, 8px) clamp(10px, 3vw, 15px)',
                  borderRadius: '5px',
                  fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
                  transition: 'background 0.3s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#e23c50'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#ff2e63'}
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
