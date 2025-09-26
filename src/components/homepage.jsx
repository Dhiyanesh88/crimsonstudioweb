import React, { useEffect, useRef, useState } from "react";

const featuredProjects = [
  {
    title: "Starlight Saga",
    genre: "Anime",
    tagline: "A cosmic journey of hope and heroism.",
    trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    image: "/assets/starlight-saga.jpg",
  },
  {
    title: "Brushstroke Dreams",
    genre: "Manga",
    tagline: "Art comes alive in every panel.",
    trailer: "",
    image: "/assets/brushstroke-dreams.jpg",
  },
  {
    title: "Celestial Quest",
    genre: "Game",
    tagline: "Embark on an epic adventure beyond the stars.",
    trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    image: "/assets/celestial-quest.jpg",
  },
];

const stats = [
  { label: "Projects Completed", value: 48 },
  { label: "Creators Collaborated", value: 23 },
  { label: "Years of Experience", value: 7 },
];

function AnimatedCounter({ end }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end]);
  return <span>{count}</span>;
}

function Homepage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showTrailer, setShowTrailer] = useState(false);

  // Background animation using canvas
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let stars = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = Array.from({ length: 120 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.5,
        dx: (Math.random() - 0.5) * 0.2,
        dy: (Math.random() - 0.5) * 0.2,
      }));
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
        ctx.fillStyle = "rgba(255,255,255,0.8)";
        ctx.shadowColor = "#e23c50";
        ctx.shadowBlur = 8;
        ctx.fill();
        star.x += star.dx;
        star.y += star.dy;
        if (star.x < 0 || star.x > canvas.width) star.dx *= -1;
        if (star.y < 0 || star.y > canvas.height) star.dy *= -1;
      });
      animationFrameId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  // Logo animation
  useEffect(() => {
    const logo = document.querySelector(".hero-logo");
    if (logo) {
      logo.classList.add("fade-in-glow");
    }
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
  const prevSlide = () =>
    setCurrentSlide((prev) =>
      prev === 0 ? featuredProjects.length - 1 : prev - 1
    );

  return (
    <div className="homepage-container" style={{ fontFamily: "Arial, sans-serif", color: "#fff" }}>
      {/* Inline global styles */}
      <style>{`
        body { margin: 0; background: #000; }
        .background-canvas { position: fixed; top:0; left:0; width:100%; height:100%; z-index:-1; }
        .hero-section { text-align:center; padding:80px 20px; }
        .hero-logo { font-size:3rem; font-weight:bold; color:#e23c50; }
        .fade-in-glow { animation: glow 2s ease forwards; }
        @keyframes glow { from {opacity:0;} to {opacity:1; text-shadow:0 0 20px #e23c50;} }
        .hero-tagline { margin:10px 0 20px; font-size:1.2rem; }
        .cta-btn { background:#e23c50; color:#fff; padding:10px 20px; margin:0 10px; text-decoration:none; border-radius:6px; }
        .cta-btn.secondary { background:#444; }
        .projects-slider { padding:40px 20px; text-align:center; }
        .carousel { display:flex; align-items:center; justify-content:center; }
        .carousel-slide { width:80%; height:300px; background-size:cover; background-position:center; border-radius:12px; position:relative; transition:opacity 0.6s ease; }
        .slide-overlay { position:absolute; bottom:0; left:0; right:0; background:rgba(0,0,0,0.6); padding:20px; border-radius:0 0 12px 12px; }
        .genre { font-size:0.9rem; opacity:0.8; }
        .carousel-btn { background:none; border:none; color:#fff; font-size:2rem; cursor:pointer; padding:10px; }
        .trailer-btn { background:#e23c50; border:none; padding:8px 16px; color:#fff; margin-top:10px; border-radius:6px; cursor:pointer; }
        .trailer-modal { position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); display:flex; align-items:center; justify-content:center; }
        .trailer-content { position:relative; }
        .close-btn { position:absolute; top:-30px; right:-30px; background:#e23c50; border:none; color:#fff; font-size:1.2rem; cursor:pointer; border-radius:50%; padding:8px 12px; }
        .studio-highlights { padding:40px 20px; text-align:center; }
        .stats { display:flex; flex-wrap:wrap; justify-content:center; gap:20px; }
        .stat { background:rgba(255,255,255,0.1); padding:20px; border-radius:12px; min-width:120px; }
        .stat-label { display:block; margin-top:6px; font-size:0.9rem; }
        /* Responsive */
        @media(max-width:768px) {
          .hero-logo { font-size:2rem; }
          .carousel-slide { height:200px; width:90%; }
          .cta-btn { display:block; margin:10px auto; }
          .stats { flex-direction:column; align-items:center; }
        }
        @media(max-width:480px) {
          .hero-section { padding:50px 10px; }
          .hero-tagline { font-size:1rem; }
          .stat { min-width:80px; padding:12px; }
        }
      `}</style>

      <canvas ref={canvasRef} className="background-canvas" />

      <div className="hero-section">
        <div className="hero-logo">Crimson Celest Studios</div>
        <div className="hero-tagline">
          Bringing Stories to Life, One Frame at a Time
        </div>
        <div className="hero-cta">
          <a href="#portfolio" className="cta-btn">
            View Projects
          </a>
          <a href="#contact" className="cta-btn secondary">
            Contact Us
          </a>
        </div>
      </div>

      <div className="projects-slider">
        <h2>Featured Projects</h2>
        <div className="carousel">
          <button className="carousel-btn" onClick={prevSlide} aria-label="Previous slide">‹</button>
          {featuredProjects.map((project, idx) => (
            <div
              key={project.title}
              className="carousel-slide"
              style={{
                backgroundImage: `url(${project.image})`,
                opacity: idx === currentSlide ? 1 : 0,
                pointerEvents: idx === currentSlide ? "auto" : "none",
              }}
            >
              <div className="slide-overlay">
                <div className="slide-info">
                  <h3>{project.title}</h3>
                  <span className="genre">{project.genre}</span>
                  <p>{project.tagline}</p>
                  {project.trailer && (
                    <button
                      className="trailer-btn"
                      onClick={() => setShowTrailer(true)}
                    >
                      ▶ Play Trailer
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
          <button className="carousel-btn" onClick={nextSlide} aria-label="Next slide">›</button>
        </div>

        {showTrailer && featuredProjects[currentSlide].trailer && (
          <div
            className="trailer-modal"
            onClick={() => setShowTrailer(false)}
          >
            <div
              className="trailer-content"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                width="560"
                height="315"
                src={featuredProjects[currentSlide].trailer}
                title="Trailer"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
              <button
                className="close-btn"
                onClick={() => setShowTrailer(false)}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="studio-highlights">
        <h2>Studio Highlights</h2>
        <div className="stats">
          {stats.map((stat) => (
            <div key={stat.label} className="stat">
              <AnimatedCounter end={stat.value} />
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
