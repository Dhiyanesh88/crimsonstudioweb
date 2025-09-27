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
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Logo fade effect
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

  // Detect mobile screen
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // check initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: 500,
    transition: "0.3s",
    cursor: "pointer",
  };

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0px 20px",
        height: "70px",
        background: "transparent",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Left Links (Desktop only) */}
      {!isMobile && (
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
      )}

      {/* Center Logo & Title */}
      <div
        style={{
          position: "relative",
          width: "120px",
          height: "70px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            opacity: isVisible ? 0 : 1,
            transition: "opacity 1s ease",
            fontSize: "1.8rem",
            fontWeight: "bold",
            display: "flex",
            gap: "5px",
            marginLeft: isMobile ? "65px" : "0",
          }}
        >
          <span style={{ color: "#ff2e63" }}>Crimson</span>
          <span style={{ color: "#007BFF" }}>Celest</span>
        </div>

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

      {/* Right Links (Desktop only) */}
      {!isMobile && (
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
      )}

      {/* Hamburger Icon (Mobile only) */}
      {isMobile && (
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "flex",
            flexDirection: "column",
            cursor: "pointer",
            gap: "5px",
          }}
        >
          <span style={{ width: "25px", height: "3px", background: "#fff" }}></span>
          <span style={{ width: "25px", height: "3px", background: "#fff" }}></span>
          <span style={{ width: "25px", height: "3px", background: "#fff" }}></span>
        </div>
      )}

      {/* Mobile Dropdown Menu */}
      {isMobile && menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "70px",
            left: 0,
            right: 0,
            background: "#111",
            padding: "20px 0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "15px",
            zIndex: 999,
          }}
        >
          {[...navLinksLeft, ...navLinksRight].map((link) => (
            <a
              key={link.name}
              href={link.path}
              style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ff2e63")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
