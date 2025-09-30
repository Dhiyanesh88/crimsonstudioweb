import React, { useState, useEffect } from 'react';

const newsList = [
  // {
  //   title: 'Celestial Odyssey Trailer Released',
  //   date: 'Sep 15, 2025',
  //   snippet: 'Watch the first trailer of our upcoming anime “Celestial Odyssey” and get a glimpse of the adventure across the stars.',
  //   img: '/assets/celestial.png',
  //   link: '#',
  // },
  // {
  //   title: 'Neo Samurai Wins Award',
  //   date: 'Aug 30, 2025',
  //   snippet: 'Our OVA “Neo Samurai” received the Best Action Animation award at the Global Anime Awards 2025.',
  //   img: '/assets/samurai.png',
  //   link: '#',
  // },
  // {
  //   title: 'Pixel Hearts Collaboration',
  //   date: 'Jul 20, 2025',
  //   snippet: 'Exciting collaboration with Pixel Hearts creators for a special web anime short series. Fans will love it!',
  //   img: '/assets/pixheart.png',
  //   link: '#',
  // },
];

export default function News() {
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
        minHeight: '40vh',
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
        Latest News
      </h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: windowWidth < 768 ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'clamp(20px, 3vw, 30px)',
        }}
      >
        {newsList.length === 0 ? (
          <p
            style={{
              textAlign: 'center',
              color: '#ff2e63',        // vibrant pink
              fontSize: windowWidth > 768 ? '2rem' : '2rem',
              fontWeight: '500',
              textShadow: '0 0 8px rgba(255,46,99,0.6), 0 0 20px rgba(79,172,255,0.3)',
              marginTop: '40px',
              animation: 'glowPulse 2.5s infinite alternate',
            }}
          >
            📰 No news yet. Stay tuned!
          </p>
          
        ) : (
          newsList.map((news, idx) => (
            <div
              key={news.title}
              className="newsCard"
              style={{
                background: 'rgba(20,20,30,0.5)',
                backdropFilter: 'blur(6px)',
                borderRadius: '15px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.5s ease, box-shadow 0.5s ease',
                animation: `float ${6 + idx}s ease-in-out infinite`,
              }}
            >
              <img
                src={news.img}
                alt={news.title}
                style={{
                  width: '100%',
                  height: 'clamp(150px, 20vw, 180px)',
                  objectFit: 'cover',
                  filter: 'brightness(0.85)',
                }}
              />
              <div style={{ padding: 'clamp(15px, 2vw, 20px)' }}>
                <h3
                  style={{
                    margin: '0 0 10px',
                    color: '#ff2e63',
                    fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                    textShadow: '0 0 6px rgba(255,46,99,0.6)',
                  }}
                >
                  {news.title}
                </h3>
                <p
                  style={{
                    margin: '0 0 10px',
                    fontSize: 'clamp(0.75rem, 2vw, 0.85rem)',
                    color: '#aaa',
                  }}
                >
                  {news.date}
                </p>
                <p
                  style={{
                    margin: '0 0 15px',
                    fontSize: 'clamp(0.85rem, 2vw, 1rem)',
                  }}
                >
                  {news.snippet}
                </p>
                <a
                  href={news.link}
                  className="newsLink"
                  style={{
                    textDecoration: 'none',
                    color: '#fff',
                    background: '#ff2e63',
                    padding: 'clamp(5px, 1.5vw, 8px) clamp(10px, 3vw, 15px)',
                    borderRadius: '5px',
                    fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
                    transition: 'background 0.3s ease',
                  }}
                >
                  Read More
                </a>
              </div>
            </div>
          ))
        )}

        {/* Inline CSS for hover effects */}
        <style>
          {`
    .newsCard:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 35px rgba(255,46,99,0.4), 0 0 50px rgba(79,172,255,0.2);
    }
    .newsLink:hover {
      background: #e23c50;
    }
  `}
        </style>

      </div>
    </div>
  );
}
