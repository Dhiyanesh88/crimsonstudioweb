import React, { useState, useEffect } from 'react';
import { FaTwitter, FaInstagram, FaYoutube, FaDiscord } from 'react-icons/fa';

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

  const isMobile = windowWidth <= 768;

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
    padding: 'clamp(8px, 2vw, 12px)',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #555',
    background: '#222',
    color: '#fff',
    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
  };

  const buttonStyle = {
    padding: 'clamp(10px, 2vw, 12px) clamp(20px, 5vw, 25px)',
    background: buttonHover && !isMobile ? '#e23c50' : '#ff2e63',
    border: 'none',
    borderRadius: '5px',
    color: '#fff',
    cursor: 'pointer',
    fontSize: 'clamp(0.95rem, 2vw, 1rem)',
    transition: 'background 0.3s ease, transform 0.2s ease',
    transform: buttonHover && !isMobile ? 'scale(1.05)' : 'scale(1)',
  };

  const socialIcons = [
    { icon: <FaTwitter />, color: '#1DA1F2', link: '#' },
    { icon: <FaInstagram />, color: '#E1306C', link: '#' },
    { icon: <FaYoutube />, color: '#FF0000', link: '#' },
    { icon: <FaDiscord />, color: '#7289DA', link: '#' },
  ];

  return (
    <div
      style={{
        background: '#0d0d0d',
        color: '#fff',
        fontFamily: 'Arial, sans-serif',
        minHeight: '50vh',
        padding: isMobile ? '40px 20px' : 'clamp(40px, 5vw, 60px) clamp(20px, 4vw, 40px)',
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          marginBottom: '40px',
          color: '#ff2e63',
          fontSize: isMobile ? 'clamp(1.5rem, 6vw, 2rem)' : 'clamp(2rem, 4vw, 2.5rem)',
        }}
      >
        Contact Us
      </h1>

      <div
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          flexWrap: 'wrap',
          gap: 'clamp(20px, 3vw, 30px)',
          justifyContent: 'center',
        }}
      >
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          style={{
            flex: '1 1 400px',
            background: '#111',
            padding: 'clamp(20px, 3vw, 30px)',
            borderRadius: '10px',
          }}
        >
          <h2 style={{ marginBottom: '20px', color: '#ff2e63', fontSize: 'clamp(1.2rem, 4vw, 1.5rem)' }}>
            Get in Touch
          </h2>

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
            padding: 'clamp(20px, 3vw, 30px)',
            borderRadius: '10px',
          }}
        >
          <h2 style={{ marginBottom: '20px', color: '#ff2e63', fontSize: 'clamp(1.2rem, 4vw, 1.5rem)' }}>Studio Info</h2>
          <p style={{ marginBottom: '10px', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>Email: contact@crimsoncelest.com</p>
          <p style={{ marginBottom: '10px', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>Address: 123 Anime Lane, Celest City, Earth</p>

          <h3 style={{ margin: '20px 0 10px', color: '#ff2e63', fontSize: 'clamp(1rem, 3vw, 1.2rem)' }}>Follow Us</h3>
          <div style={{ display: 'flex', gap: 'clamp(10px, 2vw, 15px)' }}>
            {socialIcons.map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: socialHover === idx && !isMobile ? '#fff' : social.color,
                  fontSize: 'clamp(1.3rem, 4vw, 1.5rem)',
                  transition: 'color 0.3s ease, transform 0.2s ease',
                  transform: socialHover === idx && !isMobile ? 'scale(1.2)' : 'scale(1)',
                }}
                onMouseEnter={() => setSocialHover(idx)}
                onMouseLeave={() => setSocialHover(null)}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
