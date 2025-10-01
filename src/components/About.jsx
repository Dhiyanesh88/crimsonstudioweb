// src/components/AboutWithCosmic.jsx
import React, { useRef, useEffect, useState } from "react";
import Agreement from "./Agreement.jsx";
import Policy from "./policy.jsx";
const teamMembers = [
  { name: "Dhiyanesh R", role: "CreLead & Founder", bio: "Creative direction, storytelling, art, design" },
  { name: "Akash", role: "OpsLead & Founder", bio: "Operations, production, finance, management" },
];

const policies = [
  "All content created respects copyright and intellectual property laws.",
  "The studio maintains transparency in collaborations and partnerships.",
  "User data and privacy are respected according to legal regulations.",
  "Creative contributions from team members are credited appropriately.",
];

export default function AboutWithCosmic() {

  const canvasRef = useRef(null);
  const [hovered, setHovered] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [Agreementopen, setAgreementopen] = useState(false);
  const [policyOpen, setPolicyOpen] = useState(false);


  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  

  const headingStyle = {
    textAlign: "center",
    color: "#ff2e63",
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

        {/* Terms & Policy Section */}
        <section style={{ marginTop: "60px", textAlign: "center" }}>
          <h2 style={headingStyle}>Terms & Agreement</h2>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "30px",
              marginTop: "40px",
            }}
          >
            {/* Terms Box */}
            <div
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                padding: "30px 25px",
                borderRadius: "16px",
                minWidth: "250px",
                maxWidth: "300px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                textAlign: "center",
              }}
            >
              <h3 style={{ color: "#e23c50", marginBottom: "15px" }}>Terms</h3>
              <p style={{ color: "#fff", marginBottom: "20px" }}>
                Read the terms of collaboration, usage, and agreements for our studio.
              </p>
              <a
                href="./assets/Agreement.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "10px 20px",
                  background: "linear-gradient(90deg, #e23c50)",
                  color: "#fff",
                  borderRadius: "12px",
                  fontWeight: "bold",
                  textDecoration: "none",
                  display: "inline-block",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(255,46,99,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";
                }}
              >
                Check Terms
              </a>
              <Agreement Agreementopen={setAgreementopen} onClose={() => setAgreementopen(false)} />
            </div>

            {/* Policy Box */}
            <div
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                padding: "30px 25px",
                borderRadius: "16px",
                minWidth: "250px",
                maxWidth: "300px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                textAlign: "center",
              }}
            >
              <h3 style={{ color: "#e23c50", marginBottom: "15px" }}>Policy</h3>
              <p style={{ color: "#fff", marginBottom: "20px" }}>
                Access our studio’s policy details including privacy and collaboration guidelines.
              </p>
              <a
                href="./assets/Policy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "10px 20px",
                  background: "linear-gradient(90deg, #e23c50)",
                  color: "#fff",
                  borderRadius: "12px",
                  fontWeight: "bold",
                  textDecoration: "none",
                  display: "inline-block",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(255,46,99,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";
                }}
              >
                Check Policy
              </a>
              <Policy Agreementopen={policyOpen} onClose={() => setPolicyOpen(false)} />
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
