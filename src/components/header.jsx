import React, { useState, useEffect, useRef } from "react";

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

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

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
    const handleResize = () => setIsMobile(window.innerWidth <= 900);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Swipe to close handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // swipe left
      setMenuOpen(false);
    }
  };
  const renderCosmicLink = (link) => (
    <a
      key={link.name}
      href={link.path}
      style={{
        ...linkStyle,
        position: "relative",
        padding: "8px 15px",
        borderRadius: "9999px",
        color: "#e0f7ff",
        textShadow: "0 0 4px rgba(0, 170, 255, 0.5)",
        background: "radial-gradient(circle, rgba(0,170,255,0.2) 0%, transparent 80%)",
        boxShadow: "inset 0 0 12px rgba(0,170,255,0.6), 0 0 8px rgba(0,170,255,0.3)",
        transition: "box-shadow 0.3s ease, background 0.3s ease, color 0.3s ease",
      }}
      ref={(el) => {
        if (!el) return;

        // Floating blue bubble + vertical drift
        if (!el._floatPulse) {
          let flow = Math.random() * 80;
          el._floatPulse = setInterval(() => {
            flow = (flow + 1) % 80;
            const size = 6 + Math.abs(40 - flow) / 2;
            const driftY = Math.sin(flow / 10) * 4; // vertical floating
            el.style.transform = `translateY(${driftY}px)`;
            el.style.boxShadow = `
            inset 0 0 ${6 + (flow % 20) / 2}px rgba(0,170,255,0.6),
            0 0 ${size * 1.2}px rgba(0,170,255,0.4)
          `;
          }, 70);
        }
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        let flame = 0;
        if (el._firePulse) clearInterval(el._firePulse);

        el._firePulse = setInterval(() => {
          flame = (flame + 1) % 100;

          // Fire aura offsets
          const offsetX1 = Math.sin(flame / 5) * 8;
          const offsetX2 = Math.sin((flame + 20) / 6) * 12;
          const offsetX3 = Math.sin((flame + 40) / 7) * 16;

          // Random bi-directional rays
          const ray1 = Math.sin((flame + 10) / 4) * 25;
          const ray2 = -Math.sin((flame + 30) / 5) * 35; // negative = opposite side
          const ray3 = Math.sin((flame + 50) / 6) * 30;
          const ray4 = -Math.sin((flame + 70) / 8) * 40;

          // Layer sizes
          const size1 = 10 + Math.abs(50 - flame) / 2;
          const size2 = 15 + Math.abs(45 - flame) / 2;
          const size3 = 20 + Math.abs(40 - flame) / 2;

          el.style.boxShadow = `
          inset 0 0 12px rgba(0,170,255,0.6), 
          ${offsetX1}px 0 ${size1}px rgba(255,100,0,0.6),
          ${offsetX2}px 0 ${size2}px rgba(255,150,0,0.4),
          ${offsetX3}px 0 ${size3}px rgba(255,200,50,0.3),
          ${ray1}px 0 ${size2}px rgba(255,255,200,0.3),
          ${ray2}px 0 ${size2}px rgba(255,255,220,0.3),
          ${ray3}px 0 ${size3}px rgba(255,255,180,0.2),
          ${ray4}px 0 ${size3}px rgba(255,255,210,0.2)
        `;

          // Background gradient shift
          el.style.background = `radial-gradient(circle at ${50 + Math.sin(flame / 8) * 20}% 50%, rgba(0,170,255,0.25) 0%, rgba(255,150,0,0.1) 80%)`;
        }, 60);
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        if (el._firePulse) {
          clearInterval(el._firePulse);
          el._firePulse = null;
        }
        el.style.background = "radial-gradient(circle, rgba(0,170,255,0.2) 0%, transparent 80%)";
        el.style.boxShadow = "inset 0 0 12px rgba(0,170,255,0.6), 0 0 8px rgba(0,170,255,0.3)";
      }}
    >
      {link.name}
    </a>
  );

  const linkStyle = {
    textDecoration: "none",
    fontWeight: 500,
    cursor: "pointer",
  };

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center",
        // padding: "0px 20px",
        height: "70px",
        background: "transparent",
        top: 0,
        zIndex: 1000,
        marginX: "auto",
      }}
    >
      {/* Left Links (Desktop only) */}
      {!isMobile && (
        <nav style={{ display: "flex", justifyContent: "space-evenly", width: "100%", }}>
          {navLinksLeft.map(renderCosmicLink)}
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
        {/* <div
          style={{
            position: "absolute",
            opacity: isVisible ? 0 : 1,
            transition: "opacity 1s ease",
            fontSize: "1.8rem",
            fontWeight: "bold",
            display: "flex",
            gap: "5px",
            marginLeft: isMobile ? "65px" : "0",
            marginBottom: isMobile ? "10px" : "0"
          }}
        >
          <span style={{ color: "#ff2e63" }}>Crimson</span>
          <span style={{ color: "#007BFF" }}>Celest</span>
        </div> */}

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
            marginLeft: isMobile ? "-35px" : "0",
          }}
        />
      </div>

      {/* Right Links (Desktop only) */}
      {!isMobile && (
        <nav style={{ display: "flex", justifyContent: "space-evenly", width: "100%", }}>
          {navLinksRight.map(renderCosmicLink)}
        </nav>
      )}

      {/* Hamburger Icon (Mobile only) */}
      {isMobile && (
        <div
          onClick={() => {
            const el = document.getElementById("galaxyButton");
            if (!el) return;

            // Trigger explosion
            el.classList.add("explode");

            // Delay menu opening
            setTimeout(() => setMenuOpen(!menuOpen), 800); // menu opens slowly after 0.8s
            setTimeout(() => el.classList.remove("explode"), 1200); // reset animation
          }}
          id="galaxyButton"
          style={{
            position: "relative",
            width: "40px",
            height: "40px",
            cursor: "pointer",
            marginRight: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Center Star */}
          <span
            style={{
              position: "absolute",
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              background: "radial-gradient(circle, #fff, #66ccff)",
              boxShadow: "0 0 8px #66ccff, 0 0 16px #33aaff",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 0 20px #ffffff, 0 0 40px #66ccff, 0 0 60px #33aaff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "0 0 8px #66ccff, 0 0 16px #33aaff";
            }}
          ></span>

          {/* Orbiting Orbs */}
          {[...Array(3)].map((_, i) => (
            <span
              key={i}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "10px",
                height: "10px",
                margin: "-5px 0 0 -5px",
                borderRadius: "50%",
                background: "radial-gradient(circle, #66ccff, #3399ff)",
                boxShadow: "0 0 8px rgba(0,170,255,0.6), 0 0 12px rgba(0,170,255,0.4)",
                transformOrigin: "12px 0px",
                animation: `orbit${i} 2s linear infinite`,
              }}
            />
          ))}

          {/* Inline Keyframes */}
          <style>
            {`
        @keyframes orbit0 { 0% { transform: rotate(0deg) translateX(12px) rotate(0deg); } 100% { transform: rotate(360deg) translateX(12px) rotate(-360deg); } }
        @keyframes orbit1 { 0% { transform: rotate(120deg) translateX(12px) rotate(-120deg); } 100% { transform: rotate(480deg) translateX(12px) rotate(-480deg); } }
        @keyframes orbit2 { 0% { transform: rotate(240deg) translateX(12px) rotate(-240deg); } 100% { transform: rotate(600deg) translateX(12px) rotate(-600deg); } }

        /* Multiverse Explosion */
        #galaxyButton.explode span {
          animation: explodeAnim 1s forwards;
        }

        @keyframes explodeAnim {
          0% { transform: scale(1) translate(0,0); opacity:1; }
          30% { transform: scale(1.5) translate(0,0); opacity:1; }
          60% { transform: scale(3) translate(var(--dx,0px), var(--dy,0px)); opacity:0.5; }
          100% { transform: scale(5) translate(var(--dx,0px), var(--dy,0px)); opacity:0; }
        }

        /* Smooth menu transition */
        #mobileMenu {
          transition: right 0.8s ease-in-out;
        }
      `}
          </style>
        </div>
      )}

      {/* Mobile Side Menu */}

      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          position: "fixed",
          top: 0,
          right: menuOpen ? 0 : "-350px",
          width: "250px",
          height: "100vh",
          background: "radial-gradient(circle at 50% 50%, #0a0a2a, #000014 90%)",
          backgroundImage: `
          radial-gradient(2px 2px at 10% 20%, #ffffff44, transparent),
          radial-gradient(1.5px 1.5px at 50% 30%, #66ccff44, transparent),
          radial-gradient(1px 1px at 80% 70%, #ff66cc33, transparent) `,
          display: "flex",
          flexDirection: "column",
          padding: "70px 20px",
          gap: "25px",
          transition: "right 0.8s ease-in-out, background 1.5s ease",
          boxShadow: "0 0 20px rgba(0,170,255,0.5), inset 0 0 40px rgba(102,204,255,0.3)",
          borderLeft: "2px solid rgba(102,204,255,0.3)",
          zIndex: 999,
          overflow: "hidden",
        }}
      >
        {[...navLinksLeft, ...navLinksRight].map((link) => (
          <a
            key={link.name}
            href={link.path}
            style={{
              ...linkStyle,
              color: "#e0f7ff",
              fontWeight: 600,
              textShadow: "0 0 4px #00aaff, 0 0 8px #3399ff",
              position: "relative",
              transition: "color 0.3s ease, text-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#66ccff";
              e.currentTarget.style.textShadow = "0 0 10px #66ccff, 0 0 20px #33aaff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#e0f7ff";
              e.currentTarget.style.textShadow = "0 0 4px #00aaff, 0 0 8px #3399ff";
            }}
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}

        {/* Optional: animated floating stars inside menu */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            backgroundImage: `
        radial-gradient(1px 1px at 20% 10%, #fff, transparent),
        radial-gradient(2px 2px at 80% 40%, #66ccff, transparent),
        radial-gradient(1px 1px at 60% 70%, #ff99ff, transparent)
      `,
            animation: "starsDrift 20s linear infinite",
            zIndex: 0,
          }}
        />

        <style>
          {`
      @keyframes starsDrift {
        0% { background-position: 0 0, 0 0, 0 0; }
        100% { background-position: -200px 200px, 150px -150px, 100px 100px; }
      }
    `}
        </style>
      </div>


      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.5)",
            zIndex: 998,
          }}
        />
      )}
    </header>
  );
}
