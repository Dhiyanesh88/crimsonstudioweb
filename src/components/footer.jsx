import React, { useState, useEffect } from 'react';
import { FaTwitter, FaInstagram, FaYoutube, FaDiscord } from 'react-icons/fa';

const team = [
  { name: 'Dhiyanesh R', role: 'CreLead & Founder', bio: 'Creative direction, storytelling, art, design' },
  { name: 'Akash', role: 'OpsLead & Founder', bio: 'Operations, production, finance, management' },
];

export default function ContactAndTeam() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [hoveredButton, setHoveredButton] = useState(false);
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
    setFormData({ name: '', email: '', message: '' });
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
        background: 'transparent',
        color: '#fff',
        fontFamily: 'Arial, sans-serif',
        minHeight: '50vh',
        padding: isMobile ? '30px 15px' : '60px 40px',
        zIndex: 1,
      }}
    >
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-6px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>

      <h1 style={{ textAlign: 'center', marginBottom: '40px', color: '#ff2e63', fontSize: isMobile ? '2rem' : '2.5rem', textShadow: '0 0 10px rgba(255,46,99,0.7)' }}>
        Contact & Team
      </h1>

      <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '30px', justifyContent: 'center', flexWrap: 'wrap' }}>

        {/* Contact Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);

            const button = e.currentTarget.querySelector("button");
            button.innerText = "Sent to the Multiverse!";

            // Create rocket
            const rocket = document.createElement("div");
            rocket.style.position = "fixed";
            rocket.style.bottom = "30px";
            rocket.style.left = "50%";
            rocket.style.transform = "translateX(-50%)";
            rocket.style.width = "12px";
            rocket.style.height = "24px";
            rocket.style.background = "linear-gradient(45deg, #ff6600, #ffcc00)";
            rocket.style.borderRadius = "6px";
            rocket.style.boxShadow = "0 0 8px #ff6600, 0 0 16px #ffcc00";
            rocket.style.zIndex = 10000;
            rocket.style.transition = "transform 2s ease-in, opacity 2s ease-in";
            document.body.appendChild(rocket);

            setTimeout(() => {
              rocket.style.transform = "translateX(-50%) translateY(-120vh) rotate(10deg)";
              rocket.style.opacity = 0;
            }, 50);

            setTimeout(() => {
              document.body.removeChild(rocket);
              button.innerText = "Send Message";
            }, 2100);
          }}
          style={{
            flex: "1 1 400px",
            background: "rgba(20,20,30,0.5)",
            backdropFilter: "blur(6px)",
            borderRadius: "15px",
            padding: "25px",
            animation: "float 6s ease-in-out infinite",
          }}
        >
          <h2 style={{ color: "#ff2e63", marginBottom: "20px", textAlign: "center" }}>
            Get in Touch
          </h2>

          {/* Lively input fields */}
          {["name", "email"].map((field) => (
            <input
              key={field}
              type={field === "email" ? "email" : "text"}
              name={field}
              placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
              value={formData[field]}
              onChange={handleChange}
              style={{
                width: "90%",
                padding: "12px",
                margin: "10px auto",
                display: "block",
                borderRadius: "12px",
                border: "2px solid #d6070799",
                background: "#28020285",
                color: "#bcd0ffff",
                fontWeight: "500",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onFocus={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
              onBlur={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          ))}

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            style={{
              width: "90%",
              padding: "12px",
              margin: "10px auto",
              display: "block",
              borderRadius: "12px",
              border: "2px solid #d6070799",
                background: "#28020285",
              color: "#fff",
              resize: "none",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onFocus={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onBlur={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />

          <button
            type="submit"
            style={{
              width: "90%",
              padding: "12px",
              margin: "15px auto",
              display: "block",
              background: "#ff2e63",
              border: "none",
              borderRadius: "12px",
              color: "#fff",
              cursor: "pointer",
              fontSize: "1rem",
              transition: "all 0.3s ease",
              boxShadow: "0 0 8px #ff2e63, 0 0 16px #e23c50",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow = "0 0 16px #ff2e63, 0 0 24px #e23c50")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow = "0 0 8px #ff2e63, 0 0 16px #e23c50")
            }
          >
            Send Message
          </button>
        </form>

        {/* Contact Info & Socials */}
        <div
          style={{
            flex: '1 1 300px',
            background: 'rgba(20,20,30,0.5)',
            backdropFilter: 'blur(6px)',
            borderRadius: '15px',
            padding: '25px',
            animation: 'float 7s ease-in-out infinite',
          }}
        >
          <h2 style={{ color: '#ff2e63', marginBottom: '20px', textAlign: 'center' }}>Company Info</h2>
          <p style={{ marginBottom: '10px', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>Email: contact@crimsoncelest.com</p>
          <p style={{ marginBottom: '10px', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>Phone: +91-123-456-7890</p>

          <h3 style={{ color: '#ff2e63', margin: '20px 0 10px', textAlign: 'center' }}>Follow Us</h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
            {socialIcons.map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setSocialHover(idx)}
                onMouseLeave={() => setSocialHover(null)}
                style={{
                  color: socialHover === idx && !isMobile ? '#fff' : social.color,
                  fontSize: '1.5rem',
                  transition: 'color 0.3s ease, transform 0.2s ease',
                  transform: socialHover === idx && !isMobile ? 'scale(1.2)' : 'scale(1)',
                }}
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
