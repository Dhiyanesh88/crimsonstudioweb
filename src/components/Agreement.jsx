import React from "react";

export default function AnimeAgreement({ isOpen, onClose }) {
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
    background: "#fdfdfd",
    borderRadius: "12px",
    maxWidth: "900px",
    width: "100%",
    padding: "20px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    color: "#222",
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

  const sectionStyle = {
    borderLeft: "6px solid #0e34f6",
    paddingLeft: "15px",
    marginBottom: "10px",
    background: "linear-gradient(90deg, rgba(14,52,246,0.05), rgba(255,15,15,0.05))",
    borderRadius: "6px",
    padding: "15px 20px",
  };

  const headerStyle = {
    textAlign: "center",
    padding: "20px 0",
    background: "linear-gradient(90deg, #0e34f6, #ff0f0f)",
    color: "white",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    marginBottom: "40px",
    width: "100%",
  };

  const headerTitleStyle = {
    margin: 0,
    fontSize: "2em",
    letterSpacing: "1px",
    textShadow: "1px 1px 2px rgba(0,0,0,0.4)",
  };

  const signatureBoxStyle = {
    padding: "25px",
    background: "linear-gradient(90deg, rgba(14,52,246,0.05), rgba(255,15,15,0.05))",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    marginBottom: "30px",
  };

  const signatureStyle = {
    textAlign: "center",
  };

  const signatureLineStyle = {
    borderTop: "2px solid #222",
    width: "250px",
    marginBottom: "5px",
  };

  return (
    <div style={backdropStyle} onClick={onClose}>
      <div style={modalStyle} onClick={e => e.stopPropagation()}>
        <button style={closeButtonStyle} onClick={onClose}>×</button>

        <header style={headerStyle}>
          <h1 style={headerTitleStyle}>Anime Script Adaptation Agreement</h1>
        </header>

        <p style={{ textAlign: "right", fontWeight: "bold", color: "#0e34f6", fontSize: "1.1em", marginBottom: "20px" }}>
          Date: ___ day of __, 2025
        </p>

        <p style={{ fontSize: "1.1em", lineHeight: 1.6, color: "#222" }}>
          This Agreement is made between <span style={{ fontWeight: "bold", color: "#0e34f6" }}>CrimsonCelest Studios</span> ("Studio") and <span style={{ fontWeight: "bold", color: "#ff0f0f" }}>[Creator’s Name]</span> ("Creator") for adaptation of the Creator’s manga/game into an anime script.
        </p>

        <div style={sectionStyle}>
          <h2 style={{ color: "#0e34f6", marginTop: 0 }}>1. Scope</h2>
          <p>This Agreement covers only script adaptation, not animation, production, or full screenplay rights.</p>
        </div>

        <div style={sectionStyle}>
          <h2>2. No Financial Obligation</h2>
          <p>The Creator is not required to provide any budget. The Studio covers all costs related to script adaptation.</p>
        </div>

        <div style={sectionStyle}>
          <h2>3. Copyright & Ownership</h2>
          <p>The Creator retains full ownership of the original work. The Studio has rights only for the script adaptation.</p>
        </div>

        <div style={sectionStyle}>
          <h2>4. Profit Sharing</h2>
          <p>Profit from story rights purchase/licensing will be shared. Other revenues (anime, streaming, merchandise) require separate agreement.</p>
        </div>

        <div style={sectionStyle}>
          <h2>5. Creative Collaboration</h2>
          <p>The Creator is credited and may provide input during adaptation.</p>
        </div>

        <div style={sectionStyle}>
          <h2>6. Trailer & Popularity Evaluation</h2>
          <p>A trailer will be created before full production. Creator approval is needed; next steps depend on reception.</p>
        </div>

        <div style={sectionStyle}>
          <h2>7. Good Faith & Partnership</h2>
          <p>Both parties agree to collaborate openly and fairly.</p>
        </div>

        <div style={sectionStyle}>
          <h2>8. Legal Binding</h2>
          <p>This Agreement is legally binding upon the official launch of CrimsonCelest Studios.</p>
        </div>

        <div style={signatureBoxStyle}>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "60px" }}>
            <div style={signatureStyle}>
              <div style={signatureLineStyle}></div>
              <p style={{ margin: 0, fontWeight: "bold", color: "#0e34f6" }}>CrimsonCelest Studios</p>
              <p style={{ margin: 0, color: "#555" }}>Signature</p>
            </div>
            <div style={signatureStyle}>
              <div style={signatureLineStyle}></div>
              <p style={{ margin: 0, fontWeight: "bold", color: "#ff0f0f" }}>[Creator’s Name]</p>
              <p style={{ margin: 0, color: "#555" }}>Signature</p>
            </div>
          </div>
          <p style={{ fontSize: "0.9em", color: "#555", textAlign: "center", marginTop: "60px" }}>
            CrimsonCelest Studios – Anime Script Adaptation Agreement | © 2025
          </p>
        </div>
      </div>
    </div>
  );
}
