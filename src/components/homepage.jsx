import React, { useEffect, useState } from "react";

function Homepage() {
  // Logo animation
  useEffect(() => {
    const logo = document.getElementById("hero-logo");
    if (logo) {
      logo.style.opacity = 0;
      logo.style.transition = "opacity 2s ease, text-shadow 2s ease";
      setTimeout(() => {
        logo.style.opacity = 1;
        logo.style.textShadow = "0 0 20px #e23c50";
      }, 100);
    }
  }, []);

  return (
    <div
      style={{
        color: "#fff",
        margin: 0,
        fontFamily: "sans-serif",
        background: "#1c1c1c06",
        minHeight: "100vh",
      }}
    >
      {/* Hero Section */}
      <div
        style={{
          textAlign: "center",
          padding: "80px 20px",
        }}
      >
        <div
          id="hero-logo"
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            color: "#e23c50",
            marginBottom: "10px",
          }}
        >
          Crimson Celest Studios
        </div>
        <div style={{ fontSize: "1.2rem", marginBottom: "20px" }}>
          Transforming Manga & Games into Captivating Anime
        </div>
        <div>
          <a
            href="#projects"
            style={{
              background: "#e23c50",
              color: "#fff",
              padding: "10px 20px",
              margin: "0 10px",
              textDecoration: "none",
              borderRadius: "6px",
              display: "inline-block",
            }}
          >
            Discover Projects
          </a>
          <a
            href="#contact"
            style={{
              background: "#444",
              color: "#fff",
              padding: "10px 20px",
              margin: "0 10px",
              textDecoration: "none",
              borderRadius: "6px",
              display: "inline-block",
            }}
          >
            Collaborate With Us
          </a>
        </div>
      </div>

      {/* Placeholder Projects Section */}
      <div
        id="projects"
        style={{
          padding: "40px 20px",
          textAlign: "center",
        }}
      >
        <h2>Our First Adventures Await</h2>
        <p style={{ color: "#ccc", margin: "20px 0" }}>
          We are currently crafting our first anime adaptations! Stay tuned as we
          bring indie manga and games to life, one frame at a time.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          {[1, 2].map((i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.05)",
                padding: "40px 20px",
                borderRadius: "12px",
                minWidth: "200px",
                textAlign: "center",
              }}
            >
              <h3>Coming Soon</h3>
              <p>
                {i === 1
                  ? "Epic stories from indie creators"
                  : "Original concepts in development"}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Studio Highlights / Stats */}
      <div
        style={{
          padding: "40px 20px",
          textAlign: "center",
        }}
      >
        <h2>Our Journey Begins</h2>
        <p style={{ color: "#ccc", margin: "20px 0" }}>
          CrimsonCelest Studios is just getting started! We're focused on building
          strong collaborations with indie creators and bringing their stories to a
          global audience.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          {[
            { label: "Projects Completed", value: 0 },
            { label: "Creators Collaborated", value: 0 },
            { label: "Years of Experience", value: 0 },
          ].map((stat, idx) => (
            <div
              key={idx}
              style={{
                background: "rgba(255,255,255,0.05)",
                padding: "20px",
                borderRadius: "12px",
                minWidth: "120px",
                textAlign: "center",
              }}
            >
              <span style={{ fontSize: "2rem" }}>{stat.value}</span>
              <div style={{ fontSize: "0.9rem" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
