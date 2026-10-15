"use client";

import React from "react";
import { personalInfo } from "@/data/portfolioData";
import { ArrowUp, Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        background: "#05070c",
        paddingTop: "3.5rem",
        paddingBottom: "3rem",
        position: "relative",
        zIndex: 10
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "2rem",
            marginBottom: "2.5rem"
          }}
        >
          {/* Brand Col */}
          <div>
            <div
              style={{
                fontSize: "1.25rem",
                fontWeight: 800,
                color: "var(--text-primary)",
                marginBottom: "0.4rem"
              }}
            >
              Hermela Bekele
            </div>
            <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", maxWidth: "360px" }}>
              Full-Stack Software Engineer passionate about architecting scalable, resilient web platforms and cloud systems.
            </p>
          </div>

          {/* Socials & Scroll Top */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="btn-icon"
              aria-label="Direct Email"
            >
              <Mail size={18} />
            </a>
            <button
              onClick={scrollToTop}
              className="btn-icon"
              aria-label="Scroll back to top"
              style={{
                marginLeft: "0.5rem",
                background: "rgba(0, 242, 254, 0.1)",
                borderColor: "rgba(0, 242, 254, 0.3)",
                color: "var(--accent-cyan)"
              }}
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Bottom Line */}
        <div
          style={{
            paddingTop: "1.75rem",
            borderTop: "1px solid rgba(255, 255, 255, 0.05)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            fontSize: "0.8125rem",
            color: "var(--text-muted)"
          }}
        >
          <div>
            &copy; 2026 Hermela Bekele. All rights reserved.
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
            <span>Engineered with Next.js 16, React 19 &amp; modern styling</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
