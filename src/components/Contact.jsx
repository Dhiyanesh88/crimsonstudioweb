import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', projectType: '' });

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

  return (
    <div style={{ background: '#0d0d0d', color: '#fff', fontFamily: 'Arial, sans-serif', minHeight: '50vh', padding: '50px 20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px', color: '#ff2e63' }}>Contact Us</h1>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '50px',
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

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '15px',
              borderRadius: '5px',
              border: '1px solid #555',
              background: '#222',
              color: '#fff',
            }}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '15px',
              borderRadius: '5px',
              border: '1px solid #555',
              background: '#222',
              color: '#fff',
            }}
          />

          <input
            type="text"
            name="projectType"
            placeholder="Project Type (Optional)"
            value={formData.projectType}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '15px',
              borderRadius: '5px',
              border: '1px solid #555',
              background: '#222',
              color: '#fff',
            }}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '15px',
              borderRadius: '5px',
              border: '1px solid #555',
              background: '#222',
              color: '#fff',
              resize: 'none',
            }}
          />

          <button
            type="submit"
            style={{
              padding: '10px 25px',
              background: '#ff2e63',
              border: 'none',
              borderRadius: '5px',
              color: '#fff',
              cursor: 'pointer',
              fontSize: '1rem',
            }}
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
            <a href="#" style={{ color: '#1DA1F2', fontSize: '1.5rem' }}>Twitter</a>
            <a href="#" style={{ color: '#E1306C', fontSize: '1.5rem' }}>Instagram</a>
            <a href="#" style={{ color: '#FF0000', fontSize: '1.5rem' }}>YouTube</a>
            <a href="#" style={{ color: '#7289DA', fontSize: '1.5rem' }}>Discord</a>
          </div>
        </div>
      </div>
    </div>
  );
}
