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
    <div style={{ background: '#0d0d0d', color: '#fff', fontFamily: 'Arial, sans-serif', minHeight: '50vh', padding: '50px 20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px', color: '#ff2e63' }}>Latest News</h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px',
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
            <img
              src={news.img}
              alt={news.title}
              style={{ width: '100%', height: '180px', objectFit: 'cover' }}
            />
            <div style={{ padding: '20px' }}>
              <h3 style={{ margin: '0 0 10px', color: '#ff2e63' }}>{news.title}</h3>
              <p style={{ margin: '0 0 10px', fontSize: '0.8rem', color: '#aaa' }}>{news.date}</p>
              <p style={{ margin: '0 0 15px', fontSize: '0.9rem' }}>{news.snippet}</p>
              <a
                href={news.link}
                style={{
                  textDecoration: 'none',
                  color: '#fff',
                  background: '#ff2e63',
                  padding: '5px 15px',
                  borderRadius: '5px',
                  fontSize: '0.9rem',
                }}
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
