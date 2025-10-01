import React, { useState, useEffect } from "react";

export default function DecentAnimePolicy({ isOpen, onClose }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isOpen) return null; // Don't render if modal is closed

  const backdropStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    overflowY: "auto",
    padding: "20px",
  };

  const modalStyle = {
    background: "#111",
    borderRadius: "12px",
    maxWidth: "900px",
    width: "100%",
    padding: "20px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
    color: "#fff",
    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
    lineHeight: 1.6,
    position: "relative",
  };

  const closeButtonStyle = {
    position: "absolute",
    top: "15px",
    right: "15px",
    background: "#ff0f0f",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    width: "30px",
    height: "30px",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "16px",
  };

  const headingStyle = {
    textAlign: "center",
    color: "#e23c50",
    fontSize: windowWidth > 768 ? "2.2rem" : "1.6rem",
    marginBottom: "20px",
  };

  const sectionBoxStyle = (bg, shadow) => ({
    background: bg,
    padding: "20px 25px",
    borderRadius: "12px",
    margin: "20px auto",
    maxWidth: "800px",
    boxShadow: shadow,
  });

  return (
    <div style={backdropStyle} onClick={onClose}>
      <div style={modalStyle} onClick={e => e.stopPropagation()}>
        <button style={closeButtonStyle} onClick={onClose}>×</button>

        <h2 style={headingStyle}>Decent Anime Policy</h2>
        <p style={{ fontSize: windowWidth > 768 ? "1.1rem" : "1rem", maxWidth: "900px", margin: "20px auto", lineHeight: 1.7 }}>
          Teen & Adult-Friendly Guidelines
        </p>

        <div style={sectionBoxStyle("rgba(14,52,246,0.1)", "0 4px 15px rgba(0,0,0,0.3)")}>
          <h3 style={{ color: "#0e34f6", marginBottom: "12px" }}>Target Audience</h3>
          <ul style={{ textAlign: "left", paddingLeft: "20px", lineHeight: 1.6 }}>
            <li>Anime produced by our studio is intended for viewers aged 12 and above, including adults.</li>
            <li>Content for adults is allowed as long as it is decent and non-disturbing.</li>
          </ul>
        </div>

        <div style={sectionBoxStyle("rgba(255,15,15,0.1)", "0 4px 15px rgba(0,0,0,0.3)")}>
          <h3 style={{ color: "#ff0f0f", marginBottom: "12px" }}>Content Restrictions</h3>
          <ul style={{ textAlign: "left", paddingLeft: "20px", lineHeight: 1.6 }}>
            <li><strong>Sexual Content & Nudity:</strong> No sexual assault, pornography, or nudity. Mild or artistic nudity is strictly prohibited.</li>
            <li><strong>Violence:</strong> Only mild adventure or fantasy fights; no graphic gore, torture, or sadistic revenge.</li>
            <li><strong>Dark/Disturbing Themes:</strong> No extreme revenge, morally disturbing plots, or psychological abuse.</li>
          </ul>
        </div>

        <div style={sectionBoxStyle("rgba(79,172,255,0.1)", "0 4px 15px rgba(0,0,0,0.3)")}>
          <h3 style={{ color: "#4facff", marginBottom: "12px" }}>Allowed Themes</h3>
          <ul style={{ textAlign: "left", paddingLeft: "20px", lineHeight: 1.6 }}>
            <li>Adventure, friendship, fantasy, school life, comedy, and light romance.</li>
            <li>Light, humorous revenge is acceptable if playful or cartoonish.</li>
            <li>Stories should remain positive, uplifting, and entertaining for teens and adults.</li>
          </ul>
        </div>

        <div style={sectionBoxStyle("rgba(226,36,60,0.1)", "0 4px 15px rgba(0,0,0,0.3)")}>
          <h3 style={{ color: "#e2243c", marginBottom: "12px" }}>Forbidden Examples</h3>
          <ul style={{ textAlign: "left", paddingLeft: "20px", lineHeight: 1.6 }}>
            <li>Extreme sexual content or revenge, sexual assault, sexual exploitation.</li>
            <li>Graphic torture, excessive gore, or dark revenge plots (e.g., Redo of Healer).</li>
            <li>Morally disturbing or psychologically abusive storylines.</li>
            <li>All forms of nudity are forbidden.</li>
          </ul>
        </div>

        <div style={sectionBoxStyle("rgba(255,255,255,0.05)", "0 4px 20px rgba(0,0,0,0.3)")}>
          <h3 style={{ color: "#ff2e63", marginBottom: "12px" }}>Studio Policy Statement</h3>
          <p style={{ lineHeight: 1.7 }}>
            “All anime produced by our studio is suitable for viewers aged 12 and above, including adults. Content will avoid sexual assault, pornography, nudity, graphic violence, and dark or disturbing plots. Light, humorous revenge is allowed if playful and cartoonish. All stories will focus on adventure, friendship, comedy, fantasy, or light romance, maintaining a positive and entertaining tone.”
          </p>
        </div>
      </div>
    </div>
  );
}
