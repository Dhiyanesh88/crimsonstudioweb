import React from 'react';

export default function Header() {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'News', path: '/news' },
    { name: 'Clips', path: '/clips' },
    { name: 'Merchandise', path: '/merchandise' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header style={{
      background: '#111',
      padding: '15px 30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: '0',
      zIndex: '1000',
      borderBottom: '2px solid #ff2e63'
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ff2e63' }}>
        Crimson Celest Studios
      </div>

      <nav>
        <ul style={{
          display: 'flex',
          gap: '20px',
          listStyle: 'none',
          margin: '0',
          padding: '0',
        }}>
          {navLinks.map(link => (
            <li key={link.name}>
              <a
                href={link.path}
                style={{
                  textDecoration: 'none',
                  color: '#fff',
                  fontSize: '1rem',
                  transition: '0.3s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#ff2e63'}
                onMouseLeave={e => e.currentTarget.style.color = '#fff'}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
