// src/components/StarBackground.jsx
import React, { useRef, useEffect } from "react";

export default function StarBackground() {
  const canvasRef = useRef(null);

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
        color: Math.random() > 0.5 ? "#e23c50" : "#4facff", // red/blue stars
      }));

      // Nebula particles
      nebulaParticles = Array.from({ length: 40 }, () => ({
        x: Math.random() * canvas.width / dpr,
        y: Math.random() * canvas.height / dpr,
        r: Math.random() * 200 + 100,
        color: Math.random() > 0.5 ? "255,36,60" : "79,172,255", // RGB for red/blue
        dx: (Math.random() - 0.5) * 0.05,
        dy: (Math.random() - 0.5) * 0.05,
      }));

      // Crimson cosmic rays
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
      // Faint cosmic trail background
      ctx.fillStyle = "rgba(10, 10, 20, 0.25)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw nebula glows
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

      // Draw crimson cosmic rays
      rays.forEach((ray) => {
        ray.x += ray.dx;
        ray.y += ray.dy;

        ctx.save();
        ctx.translate(ray.x, ray.y);
        ctx.rotate(ray.angle);
        const gradient = ctx.createLinearGradient(0, 0, ray.length, 0);
        gradient.addColorStop(0, "rgba(226, 36, 61, 0.22)");
        gradient.addColorStop(1, "rgba(226,36,60,0)");
        ctx.strokeStyle = gradient;
        ctx.lineWidth = ray.width;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(ray.length, 0);
        ctx.stroke();
        ctx.restore();

        // Keep rays moving slowly
        if (ray.x < -ray.length) ray.x = canvas.width;
        if (ray.x > canvas.width + ray.length) ray.x = 0;
        if (ray.y < -ray.length) ray.y = canvas.height;
        if (ray.y > canvas.height + ray.length) ray.y = 0;
      });

      // Draw stars
      stars.forEach((star) => {
        star.opacity += (Math.random() - 0.5) * 0.02; // twinkle
        star.opacity = Math.max(0.3, Math.min(1, star.opacity));
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(${
          star.color === "#e23c50" ? "226,60,80" : "79,172,255"
        },${star.opacity})`;
        ctx.shadowColor = star.color;
        ctx.shadowBlur = 6;
        ctx.fill();

        // Move stars
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

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -10,
      }}
    />
  );
}
