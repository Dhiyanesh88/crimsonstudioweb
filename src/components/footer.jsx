import React, { useState, useEffect } from "react";
import { BsTelegram } from "react-icons/bs";
import { FaTwitter, FaInstagram, FaYoutube, FaDiscord } from "react-icons/fa";

// Contact Info
const contactInfo = {
  email: "crimsonceleststudio@gmail.com",
  Telegram: "https://t.me/CrimsonCelestStudio",
};

// Social links
const socialLinks = [
  { icon: <BsTelegram />, color: "#0088cc", link: "https://t.me/CrimsonCelestStudio" },
  { icon: <FaInstagram />, color: "#E1306C", link: "https://www.instagram.com/crimsonceleststudio/" },
  { icon: <FaYoutube />, color: "#FF0000", link: "https://www.youtube.com/@crimsonceleststudio" },
  // { icon: <FaDiscord />, color: "#7289DA", link: "#" },
];

export default function ContactAndTeam() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [socialHover, setSocialHover] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(""); // message text
  const [statusType, setStatusType] = useState(""); // "success" or "error"


  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 768;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true); // show loading spinner or disable button

    const formDataObj = new FormData(e.target);
    try {
      const response = await fetch("http://localhost/crimson_celest/api/email.php", {
        method: "POST",
        body: formDataObj,
      });
      const text = await response.text();
      if (text.toLowerCase().includes("success")) {
        setStatusMessage("Message sent successfully!");
        setStatusType("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const errorMsg = "Message could not be sent. Please provide proper Details!!";
        setStatusMessage(errorMsg);
        setStatusType("error");
      }

    } catch (err) {
      setStatusMessage("Error sending message: " + err.message);
      setStatusType("error");
    } finally {
      setSubmitting(false);
    }
  };


  return (
    <div
      style={{
        background: "transparent",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
        minHeight: "50vh",
        padding: isMobile ? "30px 15px" : "60px 40px",
        zIndex: 1,
      }}
    >
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-6px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>

      <h1
        style={{
          textAlign: "center",
          marginBottom: "40px",
          color: "#ff2e63",
          fontSize: isMobile ? "2rem" : "2.5rem",
          textShadow: "0 0 10px rgba(255,46,99,0.7)",
        }}
      >
        Contact
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: "30px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          style={{
            flex: "1 1 400px",
            background: "rgba(20,20,30,0.5)",
            backdropFilter: "blur(6px)",
            borderRadius: "15px",
            padding: "25px",
            animation: "float 6s ease-in-out infinite",
          }}
        >
          <h2 style={{ color: "#ff2e63", marginBottom: "20px", textAlign: "center" }}>Get in Touch</h2>

          {["name", "email"].map((field) => (
            <input
              key={field}
              type={field === "email" ? "email" : "text"}
              name={field}
              placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
              value={formData[field]}
              onChange={handleChange}
              style={{
                width: "90%",
                padding: "12px",
                margin: "10px auto",
                display: "block",
                borderRadius: "12px",
                border: "2px solid #d6070799",
                background: "#28020285",
                color: "#bcd0ffff",
                fontWeight: "500",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onFocus={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
              onBlur={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          ))}

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            style={{
              width: "90%",
              padding: "12px",
              margin: "10px auto",
              display: "block",
              borderRadius: "12px",
              border: "2px solid #d6070799",
              background: "#28020285",
              color: "#fff",
              resize: "none",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onFocus={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onBlur={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />

          <button
            type="submit"
            disabled={submitting} // disable while sending
            style={{
              width: "90%",
              padding: "12px",
              margin: "15px auto",
              display: "block",
              background: submitting ? "#aaa" : "#ff2e63", // gray if sending
              border: "none",
              borderRadius: "12px",
              color: "#fff",
              cursor: submitting ? "not-allowed" : "pointer",
              fontSize: "1rem",
              transition: "all 0.3s ease",
              boxShadow: submitting
                ? "0 0 4px #aaa, 0 0 8px #888"
                : "0 0 8px #ff2e63, 0 0 16px #e23c50",
            }}
            onMouseEnter={(e) => {
              if (!submitting) e.currentTarget.style.boxShadow = "0 0 16px #ff2e63, 0 0 24px #e23c50";
            }}
            onMouseLeave={(e) => {
              if (!submitting) e.currentTarget.style.boxShadow = "0 0 8px #ff2e63, 0 0 16px #e23c50";
            }}
          >
            {submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
        {statusMessage && (
          <div
            style={{
              position: "fixed",
              top: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 9999,
              padding: "12px 24px",
              borderRadius: "8px",
              textAlign: "center",
              color: statusType === "success" ? "#28a745" : "#ff2e63",
              backgroundColor: statusType === "success" ? "#d4edda" : "#f8d7da",
              border: statusType === "success" ? "1px solid #c3e6cb" : "1px solid #f5c6cb",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              transition: "all 0.3s ease-in-out",
            }}
          >
            {statusMessage}
          </div>
        )}


        {/* Contact Info & Socials */}
        <div
          style={{
            flex: "1 1 300px",
            background: "rgba(20,20,30,0.5)",
            backdropFilter: "blur(6px)",
            borderRadius: "15px",
            padding: "25px",
            animation: "float 7s ease-in-out infinite",
          }}
        >
          <h2 style={{ color: "#ff2e63", marginBottom: "20px", textAlign: "center" }}>Company Info</h2>

          {/* Dynamic contact info */}
          {Object.entries(contactInfo).map(([key, value], idx) => (
            <p key={idx} style={{ marginBottom: "10px", fontSize: "clamp(0.9rem, 2vw, 1rem)" }}>
              {`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`}
            </p>
          ))}

          <h3 style={{ color: "#ff2e63", margin: "20px 0 10px", textAlign: "center" }}>Follow Us</h3>
          <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setSocialHover(idx)}
                onMouseLeave={() => setSocialHover(null)}
                style={{
                  color: socialHover === idx && !isMobile ? "#fff" : social.color,
                  fontSize: "1.5rem",
                  transition: "color 0.3s ease, transform 0.2s ease",
                  transform: socialHover === idx && !isMobile ? "scale(1.2)" : "scale(1)",
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
