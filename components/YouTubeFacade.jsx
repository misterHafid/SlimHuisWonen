"use client";

import { useState } from "react";

/**
 * Lazy YouTube embed — toont thumbnail tot de gebruiker klikt.
 * Voorkomt dat YouTube-scripts en -iframes al laden bij het openen van de pagina.
 *
 * @param {string} embedUrl  - https://www.youtube.com/embed/VIDEO_ID
 * @param {string} title     - alt-tekst / iframe title
 */
export default function YouTubeFacade({ embedUrl, title }) {
  const [active, setActive] = useState(false);

  // Haal video-ID op uit embed-URL
  const videoId = embedUrl?.match(/embed\/([^?]+)/)?.[1];
  if (!videoId) return null;

  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  const autoplayUrl = `${embedUrl}${embedUrl.includes("?") ? "&" : "?"}autoplay=1&rel=0`;

  if (active) {
    return (
      <div
        style={{
          position: "relative",
          paddingBottom: "56.25%",
          height: 0,
          overflow: "hidden",
          borderRadius: "12px",
          marginTop: "1rem",
          background: "#000",
        }}
      >
        <iframe
          src={autoplayUrl}
          title={title}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => setActive(true)}
      aria-label={`Speel video af: ${title}`}
      style={{
        display: "block",
        position: "relative",
        width: "100%",
        aspectRatio: "16/9",
        marginTop: "1rem",
        padding: 0,
        border: "none",
        borderRadius: "12px",
        overflow: "hidden",
        cursor: "pointer",
        background: "#000",
      }}
    >
      {/* Thumbnail */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={thumbnail}
        alt={title}
        loading="lazy"
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />

      {/* Play-knop overlay */}
      <span
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(0,0,0,0.25)",
          transition: "background 0.15s",
        }}
      >
        <svg
          width="68"
          height="48"
          viewBox="0 0 68 48"
          style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.5))" }}
        >
          <rect width="68" height="48" rx="12" fill="#ff0000" />
          <polygon points="27,14 50,24 27,34" fill="#fff" />
        </svg>
      </span>
    </button>
  );
}
