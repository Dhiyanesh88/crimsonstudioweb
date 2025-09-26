import React, { useState, useEffect } from "react";

export default function Header() {
  const navLinksLeft = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
  ];
  const navLinksRight = [
    { name: "News", path: "/news" },
    { name: "Clips", path: "/clips" },
    { name: "Merchandise", path: "/merchandise" },
    { name: "Contact", path: "/contact" },
  ];

const [showLogo, setShowLogo] = useState(false);
const [isVisible, setIsVisible] = useState(true);

useEffect(() => {
  const interval = setInterval(() => {
    setIsVisible(false);

    setTimeout(() => {
      setShowLogo((prev) => !prev); 
      setIsVisible(true);           
    }, 1000); 
  }, 8000);   

  return () => clearInterval(interval);
}, []);


  const linkStyle = {
    color: "#fff",
    position: "relative",
    textDecoration: "none",
    fontWeight: 500,
    transition: "0.6s",
    cursor: "pointer",
  };

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0px 30px",
        height: "70px",
        background: "transparent",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Left Links */}
      <nav style={{ display: "flex", gap: "20px" }}>
        {navLinksLeft.map((link) => (
          <a
            key={link.name}
            href={link.path}
            style={linkStyle}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ff2e63")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* Center Logo & Title with fade animation */}
      <div
        style={{
          position: "relative",
          width: "120px", // reserve space to prevent jumping
          height: "70px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Text */}
        <div
          style={{
            position: "absolute",
            opacity: isVisible ? 0 : 1,
            transition: "opacity 1s ease",
            fontSize: "1.8rem",
            fontWeight: "bold",
            display: "flex",
            gap: "5px",
          }}
        >
          <span style={{ color: "#ff2e63" }}>Crimson</span>
          <span style={{ color: "#007BFF" }}>Celest</span>
        </div>

        {/* Logo */}
        <img
          src="/assets/logo.png"
          alt="Logo"
          style={{
            position: "absolute",
            opacity: isVisible ? 1 : 0,
            transition: "opacity 1s ease",
            width: "90px",
            height: "90px",
            objectFit: "contain",
          }}
        />
      </div>

      {/* Right Links */}
      <nav style={{ display: "flex", gap: "20px" }}>
        {navLinksRight.map((link) => (
          <a
            key={link.name}
            href={link.path}
            style={linkStyle}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ff2e63")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
          >
            {link.name}
          </a>
        ))}
      </nav>
    </header>
  );
}
