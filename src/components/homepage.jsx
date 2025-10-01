import React, { useEffect, useState } from "react";

function Homepage() {
  const [active, setActive] = useState("projects");

  // Hero logo animation
  useEffect(() => {
    const logo = document.getElementById("hero-logo");
    if (logo) {
      logo.style.opacity = 0;
      logo.style.transform = "translateY(-20px)";
      logo.style.transition =
        "opacity 1.5s ease, transform 1.5s ease, text-shadow 2s ease";
      setTimeout(() => {
        logo.style.opacity = 1;
        logo.style.transform = "translateY(0)";
        logo.style.textShadow = "0 0 25px #e23c50";
      }, 200);
    }
  }, []);

  // Reusable switch-style link
  const linkStyle = (isActive, bg) => ({
    background: isActive ? bg : "rgba(255,255,255,0.08)",
    color: isActive ? "#fff" : "#aaa",
    padding: "12px 24px",
    margin: "0 10px",
    textDecoration: "none",
    borderRadius: "8px",
    display: "inline-block",
    cursor: "pointer",
    transition: "all 0.3s ease",
    border: isActive ? "2px solid transparent" : "2px solid rgba(255,255,255,0.15)",
    boxShadow: isActive ? "0 0 15px rgba(226,60,80,0.7)" : "none",
  });

  return (
    <div style={{ color: "#fff", fontFamily: "system-ui, sans-serif" }}>
      {/* Hero Section */}
      <div
        style={{
          textAlign: "center",
          padding: "60px 20px",
        }}
      >
        <div
          id="hero-logo"
          style={{
            fontSize: "4rem",
            fontWeight: "bold",
            color: "#e23c50",
            marginBottom: "15px",
            letterSpacing: "1px",
          }}
        >
          Crimson Celest Studios
        </div>
        <div style={{ fontSize: "1.5rem", marginBottom: "30px", color: "#ffffffff" }}>
          Transforming Manga & Games into Captivating Anime
        </div>
        <div>
          <span
            onClick={() => setActive("projects")}
            style={linkStyle(active === "projects", "#e23c50")}
          >
            Discover Projects
          </span>
          <span
            onClick={() => setActive("contact")}
            style={linkStyle(active === "contact", "#e23c50")}
          >
            Collaborate With Us
          </span>
        </div>
      </div>

      {/* Switchable Section */}
      <div
        style={{
          padding: "20px 20px",
          textAlign: "center",
          minHeight: "300px",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        {active === "projects" && (
          <div style={{ animation: "fadeIn 0.6s" }}>
            <h2 style={{ fontSize: "2.0rem", marginBottom: "10px", color:"#ff2e63" }}>
              Our First Adventures Await
            </h2>
            <p style={{ fontSize: "1.1rem", margin: "20px auto", maxWidth: "600px",color:"white" }}>
              We are currently crafting our first anime adaptations! Stay tuned as we
              bring indie manga and games to life, one frame at a time.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                flexWrap: "wrap",
                marginTop: "30px",
              }}
            >
              {[1, 2].map((i) => (
                <div
                  key={i}
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    padding: "40px 25px",
                    borderRadius: "12px",
                    minWidth: "220px",
                    textAlign: "center",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow =
                      "0 0 20px rgba(255,255,255,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <h3 style={{ marginBottom: "10px" }}>Coming Soon</h3>
                  <p style={{ color: "#aaa" }}>
                    {i === 1
                      ? "Epic stories from indie creators"
                      : "Original concepts in development"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {active === "contact" && (
          <div style={{ animation: "fadeIn 0.6s" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "10px",color:"#e23c50" }}>
              Our Journey Begins
            </h2>
            <p style={{ fontSize: "1.1rem", margin: "20px auto", maxWidth: "600px",color:"white" }}>
              CrimsonCelest Studios is just getting started! We're focused on
              building strong collaborations with indie creators and bringing their
              stories to a global audience.
            </p>
            {/* <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                flexWrap: "wrap",
                marginTop: "30px",
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
                    padding: "25px",
                    borderRadius: "12px",
                    minWidth: "140px",
                    textAlign: "center",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow =
                      "0 0 20px rgba(226,60,80,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <span
                    style={{
                      fontSize: "2.2rem",
                      display: "block",
                      marginBottom: "6px",
                    }}
                  >
                    {stat.value}
                  </span>
                  <div style={{ fontSize: "0.95rem", color: "#ddd" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
}

export default Homepage;
