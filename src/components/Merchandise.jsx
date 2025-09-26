import React from 'react';

const merchItems = [
  {
    name: 'Celestial Odyssey Poster',
    img: '/images/merch1.jpg',
    price: '$15',
    link: '#',
  },
  {
    name: 'Neo Samurai Hoodie',
    img: '/images/merch2.jpg',
    price: '$45',
    link: '#',
  },
  {
    name: 'Pixel Hearts Keychain',
    img: '/images/merch3.jpg',
    price: '$8',
    link: '#',
  },
  // Add more items as needed
];

export default function Merchandise() {
  return (
    <div style={{ background: '#0d0d0d', color: '#fff', fontFamily: 'Arial, sans-serif', minHeight: '70vh', padding: '50px 20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px', color: '#ff2e63' }}>Merchandise Store</h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px',
        }}
      >
        {merchItems.map((item) => (
          <div
            key={item.name}
            style={{
              background: '#111',
              borderRadius: '10px',
              overflow: 'hidden',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(255,46,99,0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <img
              src={item.img}
              alt={item.name}
              style={{ width: '100%', height: '250px', objectFit: 'cover' }}
            />
            <div style={{ padding: '15px' }}>
              <h3 style={{ margin: '0 0 10px', color: '#ff2e63' }}>{item.name}</h3>
              <p style={{ margin: '0 0 15px', fontSize: '1rem' }}>{item.price}</p>
              <a
                href={item.link}
                style={{
                  display: 'inline-block',
                  padding: '5px 15px',
                  background: '#ff2e63',
                  color: '#fff',
                  borderRadius: '5px',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                }}
              >
                Buy Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
