import React, { useState, useEffect } from "react";

const teamMembers = [
   { name: 'Dhiyanesh R', role: 'CreLead & Founder',  bio: 'Creative direction, storytelling, art, design' },
  { name: 'Akash', role: 'OpsLead & Founder', bio: 'Operations, production, finance, management' },
];

const values = ["Creativity", "Respect for Source Material", "Diversity in Genres"];

export default function About() {
  const [hovered, setHovered] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Handle window resize for responsiveness
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Dynamic styles based on window width
  const headingStyle = {
    textAlign: "center",
    color: "#e23c50",
    fontSize: windowWidth > 768 ? "2rem" : "1.5rem",
  };

  const paragraphStyle = {
    fontSize: windowWidth > 768 ? "1.1rem" : "1rem",
    lineHeight: 1.7,
    textAlign: "center",
    maxWidth: "800px",
    margin: "10px auto",
    color: "#fff",
  };

  const imgSize = windowWidth > 768 ? "100px" : "80px";

  return (
    <div
      style={{
        padding: windowWidth > 768 ? "60px 40px" : "40px 20px",
        maxWidth: "1200px",
        margin: "0 auto",
        color: "#fff",
        background: "#111",
      }}
    >
      {/* Studio Overview */}
      <section style={{ marginBottom: "50px" }}>
        <h2 style={headingStyle}>Studio Overview</h2>
        <p style={paragraphStyle}>
          <strong>Mission:</strong> “Our goal is to adapt stories into captivating anime for all audiences.”
        </p>
        <p style={paragraphStyle}>
          We envision a studio where imagination meets tradition, blending innovative animation techniques
          with heartfelt storytelling. Our passion is to bring diverse tales to life, making anime
          accessible and engaging for everyone.
        </p>
      </section>

      {/* Team */}
      <section style={{ marginBottom: "50px" }}>
        <h2 style={headingStyle}>Our Team</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px",
            marginTop: "30px",
          }}
        >
          {teamMembers.map((member, idx) => (
            <div
              key={member.name}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: "#1a1a1a",
                borderRadius: "12px",
                padding: "20px",
                textAlign: "center",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                boxShadow:
                  hovered === idx
                    ? "0 0 20px rgba(226,60,80,0.6)"
                    : "0 0 10px rgba(0,0,0,0.5)",
                transform: hovered === idx ? "translateY(-8px)" : "none",
              }}
            >
              {/* <img
                src={member.photo}
                alt={member.name}
                style={{
                  width: imgSize,
                  height: imgSize,
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginBottom: "15px",
                }}
              /> */}
              <h3 style={{ margin: "10px 0", color: "#fff", fontSize: windowWidth > 768 ? "1.2rem" : "1rem" }}>
                {member.name}
              </h3>
              <p style={{ margin: "5px 0", color: "#aaa", fontSize: windowWidth > 768 ? "1rem" : "0.9rem" }}>
                {member.role}
              </p>
              <p
                style={{
                  marginTop: "10px",
                  color: "#e23c50",
                  opacity: hovered === idx ? 1 : 0,
                  height: hovered === idx ? "auto" : 0,
                  transition: "opacity 0.3s ease",
                  fontSize: windowWidth > 768 ? "0.95rem" : "0.85rem",
                }}
              >
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Studio Values / Culture */}
      <section>
        <h2 style={headingStyle}>Studio Values & Culture</h2>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            marginTop: "20px",
            textAlign: "center",
          }}
        >
          {values.map((value) => (
            <li
              key={value}
              style={{
                marginBottom: "10px",
                fontSize: windowWidth > 768 ? "1.1rem" : "1rem",
                color: "#fff",
              }}
            >
              ✅ {value}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
