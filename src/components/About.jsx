// src/components/AboutWithCosmic.jsx
import React, { useRef, useEffect, useState } from "react";

const teamMembers = [
  { name: "Dhiyanesh R", role: "CreLead & Founder", bio: "Creative direction, storytelling, art, design" },
  { name: "Akash", role: "OpsLead & Founder", bio: "Operations, production, finance, management" },
];

const values = ["Creativity", "Respect for Source Material", "Diversity in Genres"];

export default function AboutWithCosmic() {
  const canvasRef = useRef(null);
  const [hovered, setHovered] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Responsive handling
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Cosmic animated background
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let stars = [];
    let nebulaParticles = [];
    let rays = [];

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);

      // Stars
      stars = Array.from({ length: 150 }, () => ({
        x: Math.random() * canvas.width / dpr,
        y: Math.random() * canvas.height / dpr,
        r: Math.random() * 1.5 + 0.5,
        dx: (Math.random() - 0.5) * 0.2,
        dy: (Math.random() - 0.5) * 0.2,
        opacity: Math.random(),
        color: Math.random() > 0.5 ? "#e23c50" : "#4facff",
      }));

      // Nebula glows
      nebulaParticles = Array.from({ length: 40 }, () => ({
        x: Math.random() * canvas.width / dpr,
        y: Math.random() * canvas.height / dpr,
        r: Math.random() * 200 + 100,
        color: Math.random() > 0.5 ? "255,36,60" : "79,172,255",
        dx: (Math.random() - 0.5) * 0.05,
        dy: (Math.random() - 0.5) * 0.05,
      }));

      // Crimson rays
      rays = Array.from({ length: 12 }, () => ({
        x: Math.random() * canvas.width / dpr,
        y: Math.random() * canvas.height / dpr,
        length: Math.random() * 600 + 400,
        angle: Math.random() * Math.PI * 2,
        width: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.1,
        dy: (Math.random() - 0.5) * 0.1,
      }));
    };

    const animate = () => {
      // Fading cosmic background
      ctx.fillStyle = "rgba(10, 10, 20, 0.25)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Nebula glows
      nebulaParticles.forEach((neb) => {
        neb.x += neb.dx;
        neb.y += neb.dy;
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          neb.x,
          neb.y,
          0,
          neb.x,
          neb.y,
          neb.r
        );
        gradient.addColorStop(0, `rgba(${neb.color},0.15)`);
        gradient.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = gradient;
        ctx.arc(neb.x, neb.y, neb.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Crimson cosmic rays
      rays.forEach((ray) => {
        ray.x += ray.dx;
        ray.y += ray.dy;

        ctx.save();
        ctx.translate(ray.x, ray.y);
        ctx.rotate(ray.angle);
        const gradient = ctx.createLinearGradient(0, 0, ray.length, 0);
        gradient.addColorStop(0, "rgba(226,36,60,0.2)");
        gradient.addColorStop(1, "rgba(226,36,60,0)");
        ctx.strokeStyle = gradient;
        ctx.lineWidth = ray.width;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(ray.length, 0);
        ctx.stroke();
        ctx.restore();

        if (ray.x < -ray.length) ray.x = canvas.width;
        if (ray.x > canvas.width + ray.length) ray.x = 0;
        if (ray.y < -ray.length) ray.y = canvas.height;
        if (ray.y > canvas.height + ray.length) ray.y = 0;
      });

      // Stars
      stars.forEach((star) => {
        star.opacity += (Math.random() - 0.5) * 0.02;
        star.opacity = Math.max(0.3, Math.min(1, star.opacity));
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(${
          star.color === "#e23c50" ? "226,60,80" : "79,172,255"
        },${star.opacity})`;
        ctx.shadowColor = star.color;
        ctx.shadowBlur = 6;
        ctx.fill();

        star.x += star.dx;
        star.y += star.dy;
        if (star.x < 0 || star.x > canvas.width) star.dx *= -1;
        if (star.y < 0 || star.y > canvas.height) star.dy *= -1;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  const headingStyle = {
    textAlign: "center",
    color: "#e23c50",
    fontSize: windowWidth > 768 ? "2.2rem" : "1.6rem",
    marginBottom: "20px",
  };

  const paragraphStyle = {
    fontSize: windowWidth > 768 ? "1.1rem" : "1rem",
    lineHeight: 1.7,
    textAlign: "center",
    maxWidth: "900px",
    margin: "10px auto",
    color: "#fff",
  };

  const imgSize = windowWidth > 768 ? "110px" : "90px";

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />

      <div
        style={{
          padding: windowWidth > 768 ? "60px 60px" : "40px 20px",
          maxWidth: "1400px",
          margin: "0 auto",
          color: "#fff",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Studio Overview */}
        <section style={{ marginBottom: "60px" }}>
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
        <section style={{ marginBottom: "60px" }}>
          <h2 style={headingStyle}>Our Team</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "40px",
              marginTop: "40px",
            }}
          >
            {teamMembers.map((member, idx) => (
              <div
                key={member.name}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: "16px",
                  padding: "30px 20px",
                  textAlign: "center",
                  transition: "transform 0.4s ease, box-shadow 0.4s ease",
                  boxShadow:
                    hovered === idx
                      ? "0 0 50px 15px rgba(239, 18, 44, 0.5), 0 0 70px 25px rgba(79,172,255,0.3)"
                      : "0 0 15px rgba(0,0,0,0.5)",
                  transform: hovered === idx ? "translateY(-10px)" : "none",
                  backdropFilter: "blur(6px)",
                }}
              >
                <h3 style={{ margin: "10px 0", color: "#fff", fontSize: windowWidth > 768 ? "1.3rem" : "1.1rem" }}>
                  {member.name}
                </h3>
                <p style={{ margin: "5px 0", color: "#aaa", fontSize: windowWidth > 768 ? "1rem" : "0.9rem" }}>
                  {member.role}
                </p>
                <p
                  style={{
                    marginTop: "12px",
                    color: "#dcd9d9ff",
                    opacity: hovered === idx ? 1 : 0,
                    height: hovered === idx ? "auto" : 0,
                    transition: "opacity 0.4s ease",
                    fontSize: windowWidth > 768 ? "1rem" : "1rem",
                  }}
                >
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Studio Values */}
        <section>
          <h2 style={headingStyle}>Studio Values & Culture</h2>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              marginTop: "25px",
              textAlign: "center",
            }}
          >
            {values.map((value) => (
              <li
                key={value}
                style={{
                  marginBottom: "12px",
                  fontSize: windowWidth > 768 ? "1.2rem" : "1rem",
                  color: "#fff",
                }}
              >
                ✅ {value}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
