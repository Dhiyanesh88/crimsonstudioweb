import React, { useState, useEffect } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', projectType: '' });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [buttonHover, setButtonHover] = useState(false);
  const [socialHover, setSocialHover] = useState(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! Your message has been sent.');
    setFormData({ name: '', email: '', message: '', projectType: '' });
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #555',
    background: '#222',
    color: '#fff',
  };

  const buttonStyle = {
    padding: '10px 25px',
    background: buttonHover ? '#e23c50' : '#ff2e63',
    border: 'none',
    borderRadius: '5px',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background 0.3s ease, transform 0.2s ease',
    transform: buttonHover ? 'scale(1.05)' : 'scale(1)',
  };

  const socialColors = {
    Twitter: '#1DA1F2',
    Instagram: '#E1306C',
    YouTube: '#FF0000',
    Discord: '#7289DA',
  };

  return (
    <div
      style={{
        background: '#0d0d0d',
        color: '#fff',
        fontFamily: 'Arial, sans-serif',
        minHeight: '50vh',
        padding: windowWidth > 768 ? '60px 40px' : '40px 20px',
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          marginBottom: '40px',
          color: '#ff2e63',
          fontSize: windowWidth > 768 ? '2rem' : '1.5rem',
        }}
      >
        Contact Us
      </h1>

      <div
        style={{
          display: 'flex',
          flexDirection: windowWidth > 768 ? 'row' : 'column',
          flexWrap: 'wrap',
          gap: '30px',
          justifyContent: 'center',
        }}
      >
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          style={{
            flex: '1 1 400px',
            background: '#111',
            padding: '30px',
            borderRadius: '10px',
          }}
        >
          <h2 style={{ marginBottom: '20px', color: '#ff2e63' }}>Get in Touch</h2>

          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required style={inputStyle} />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required style={inputStyle} />
          <input type="text" name="projectType" placeholder="Project Type (Optional)" value={formData.projectType} onChange={handleChange} style={inputStyle} />
          <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required rows="5" style={{ ...inputStyle, resize: 'none' }} />

          <button
            type="submit"
            style={buttonStyle}
            onMouseEnter={() => setButtonHover(true)}
            onMouseLeave={() => setButtonHover(false)}
          >
            Send Message
          </button>
        </form>

        {/* Studio Info & Socials */}
        <div
          style={{
            flex: '1 1 300px',
            background: '#111',
            padding: '30px',
            borderRadius: '10px',
          }}
        >
          <h2 style={{ marginBottom: '20px', color: '#ff2e63' }}>Studio Info</h2>
          <p style={{ marginBottom: '10px' }}>Email: contact@crimsoncelest.com</p>
          <p style={{ marginBottom: '10px' }}>Address: 123 Anime Lane, Celest City, Earth</p>

          <h3 style={{ margin: '20px 0 10px', color: '#ff2e63' }}>Follow Us</h3>
          <div style={{ display: 'flex', gap: '15px' }}>
            {Object.keys(socialColors).map((platform, idx) => (
              <a
                key={platform}
                href="#"
                style={{
                  color: socialHover === idx ? '#fff' : socialColors[platform],
                  fontSize: '1.5rem',
                  transition: 'color 0.3s ease, transform 0.2s ease',
                  transform: socialHover === idx ? 'scale(1.2)' : 'scale(1)',
                }}
                onMouseEnter={() => setSocialHover(idx)}
                onMouseLeave={() => setSocialHover(null)}
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
