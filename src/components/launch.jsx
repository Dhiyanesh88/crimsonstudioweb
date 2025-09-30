import React from "react";

// Spark colors
const SPARK_COLORS = ["#ff0f0fff", "#0e34f6ff"]; // Cyan & Magenta

// Generate spark data
const SPARKS = Array.from({ length: 2000 }, (_, i) => ({
    id: i,
    color: SPARK_COLORS[i % SPARK_COLORS.length],
    size: Math.random() * 4 + 2,       // 2px to 8px
    angle: Math.random() * 360,        // initial rotation
    distance: Math.random() * 90 + 140,// distance from center
    speed: Math.random() * 4 + 2,      // rotation speed
    direction: i % 2 === 0 ? 1 : -1   // alternate direction
}));
// Glow pulse keyframes
const GLOW_PULSE = `
  @keyframes glowPulse {
    0% { 
      box-shadow: 
        0 0 40px 15px rgba(255,0,0,0.6),   /* Red glow */
        0 0 80px 30px rgba(0,0,255,0.4);   /* Blue glow */
    }
    50% {
      box-shadow: 
        0 0 80px 30px rgba(0,0,255,0.4),   /* Blue glow first */
        0 0 40px 15px rgba(255,0,0,0.6);   /* Red glow second */
    }
    100% { 
      box-shadow: 
        0 0 60px 25px rgba(255,0,0,0.8),   /* Red glow brighter */
        0 0 120px 50px rgba(0,0,255,0.6);  /* Blue glow brighter */
    }
  }
`;

// Vortex swirl keyframes
const VORTEX_SWIRL = `
  @keyframes vortexSwirl {
    0% { transform: translate(-50%, -50%) rotate(0deg); }
    100% { transform: translate(-50%, -50%) rotate(360deg); }
  }
`;
const CONTAINER_FADE = `
@keyframes containerAppearStayFade {
  0% { 
    opacity: 0; 
    transform: scale(0);   /* start tiny */
  }
  20% { 
    opacity: 1; 
    transform: scale(1.2); /* slightly overshoot */
  }
  80% { 
    opacity: 1; 
    transform: scale(1);   /* settle at final size */
  }
  100% { 
    opacity: 0; 
    transform: scale(1);   /* fade out without shrinking */
  }
}
`;


const SPARKS_KEYFRAMES = SPARKS.map(spark => `
  @keyframes sparkRotate${spark.id} {
    0% { transform: rotate(${spark.angle}deg) translate(${spark.distance}px); }
    100% { transform: rotate(${spark.angle + 360 * spark.direction}deg) translate(${spark.distance}px); }
  }`).join("");
const SPARKS_APPEAR = SPARKS.map(spark => `
    @keyframes sparkAppear {
  0% { opacity: 0; transform: scale(0); }
  100% { opacity: 1; transform: scale(1); }
}`).join("");

const Portal = () => {
    return (
        <div style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            boxSizing: "border-box",
        }}>
            <div style={{
                width: "clamp(200px, 50vw, 500px)",  // responsive width
                height: "clamp(200px, 50vw, 500px)", // responsive height
                display: "flex",
            }}>
                <div style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    animation: "containerAppearStayFade 5s forwards",
                    animationDelay: "0.5s"

                }}>
                    {/* Portal ring */}
                    <div style={{
                        position: "absolute",
                        width: "60%",
                        height: "60%",
                        borderRadius: "50%",
                        transform: "translate(-50%, -50%)",
                        top: "50%",
                        left: "50%",
                        animation: "glowPulse 2s infinite alternate",
                        animationDelay: "0.6s"
                    }} />

                    {/* Outer sparks */}
                    {SPARKS.map((spark, i) => (
                        <div key={`outer-${spark.id}`} style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            width: `${spark.size}px`,
                            height: `${spark.size}px`,
                            backgroundColor: spark.color,
                            borderRadius: "50%",
                            transformOrigin: "0 0",
                            transform: `rotate(${spark.angle}deg) translate(${spark.distance}px) scale(0)`,
                            animation: `sparkRotate${spark.id} ${spark.speed}s linear infinite, sparkAppear 0.5s forwards`,
                            animationDelay: "0.7s"

                        }} />
                    ))}
                </div>
                {/* Inline keyframes */}
                <style>
                    {GLOW_PULSE + VORTEX_SWIRL + SPARKS_KEYFRAMES + CONTAINER_FADE}
                </style>
            </div>
        </div>
    );
};

export default Portal;
