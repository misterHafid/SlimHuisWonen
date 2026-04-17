"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookieConsent");
    if (!accepted) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("cookieConsent", "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("cookieConsent", "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookiemelding"
      style={{
        position: "fixed",
        bottom: "1rem",
        left: "50%",
        transform: "translateX(-50%)",
        width: "min(540px, calc(100vw - 2rem))",
        background: "#1e2433",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "14px",
        padding: "1.25rem 1.5rem",
        zIndex: 9999,
        boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
      }}
    >
      <p style={{ margin: "0 0 0.75rem", fontSize: "0.95rem", lineHeight: 1.5, color: "#f1f5f9" }}>
        Wij gebruiken Google Analytics voor anonieme bezoekersstatistieken en
        affiliate-links naar webshops voor productaanbevelingen.{" "}
        <Link href="/cookies" style={{ color: "#818cf8" }}>
          Meer info
        </Link>
      </p>

      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
        <button
          onClick={accept}
          style={{
            padding: "0.5rem 1.25rem",
            borderRadius: "8px",
            border: "none",
            background: "#6366f1",
            color: "#fff",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: "0.9rem",
          }}
        >
          Accepteren
        </button>

        <button
          onClick={decline}
          style={{
            padding: "0.5rem 1.25rem",
            borderRadius: "8px",
            border: "1px solid rgba(255,255,255,0.15)",
            background: "transparent",
            color: "#9ca3af",
            cursor: "pointer",
            fontSize: "0.9rem",
          }}
        >
          Alleen noodzakelijk
        </button>
      </div>
    </div>
  );
}
