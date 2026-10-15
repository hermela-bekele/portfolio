"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { personalInfo } from "@/data/portfolioData";
import { 
  ArrowRight, 
  Mail, 
  Terminal, 
  Sparkles,
  Code2,
  Database,
  Layers,
  Cpu
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

const ROLES = [
  "Full-Stack Software Engineer",
  "Next.js & React 19 Specialist",
  "Cloud & Distributed Systems Architect",
  "High-Throughput API Developer"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullRole = ROLES[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullRole.slice(0, displayText.length + 1));
        if (displayText.length + 1 === currentFullRole.length) {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentFullRole.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const scrollTo = (targetId: string) => {
    const el = document.querySelector(targetId);
    if (el) {
      const navHeight = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      style={{
        paddingTop: "4rem",
        paddingBottom: "5.5rem",
        position: "relative"
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.9fr",
            gap: "3.5rem",
            alignItems: "center"
          }}
          className="hero-grid"
        >
          {/* Left Column: Text & CTAs */}
          <div>
            {/* Status Pill */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.45rem 1.15rem",
                borderRadius: "var(--radius-full)",
                background: "rgba(16, 185, 129, 0.08)",
                border: "1px solid rgba(16, 185, 129, 0.25)",
                color: "var(--accent-emerald)",
                fontSize: "0.85rem",
                fontWeight: 600,
                marginBottom: "1.5rem"
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#10b981",
                  boxShadow: "0 0 10px #10b981",
                  animation: "pulseGlow 2s infinite"
                }}
              />
              Available for Full-Time & Contract Engineering
            </div>

            {/* Main Greeting */}
            <h1
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                marginBottom: "1.25rem"
              }}
            >
              Hello, I&apos;m{" "}
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            {/* Dynamic Typewriter Subtitle */}
            <div
              style={{
                minHeight: "2.75rem",
                display: "flex",
                alignItems: "center",
                marginBottom: "1.5rem"
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "clamp(1.15rem, 2.5vw, 1.65rem)",
                  fontWeight: 600,
                  color: "var(--accent-cyan)",
                  display: "inline-flex",
                  alignItems: "center"
                }}
              >
                &gt; {displayText}
                <span
                  style={{
                    display: "inline-block",
                    width: "3px",
                    height: "1.4em",
                    backgroundColor: "var(--accent-cyan)",
                    marginLeft: "4px",
                    animation: "pulseGlow 1s infinite"
                  }}
                />
              </span>
            </div>

            {/* Bio Paragraph */}
            <p
              style={{
                fontSize: "1.125rem",
                lineHeight: 1.7,
                color: "var(--text-secondary)",
                maxWidth: "580px",
                marginBottom: "2.5rem"
              }}
            >
              {personalInfo.bio}
            </p>

            {/* Action Buttons & Socials */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "1.25rem",
                marginBottom: "3rem"
              }}
            >
              <button
                onClick={() => scrollTo("#projects")}
                className="btn btn-primary"
                id="hero-view-projects-btn"
              >
                <span>Explore Projects</span>
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => scrollTo("#contact")}
                className="btn btn-secondary"
                id="hero-contact-btn"
              >
                <Mail size={18} color="var(--accent-cyan)" />
                <span>Get In Touch</span>
              </button>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginLeft: "0.5rem"
                }}
              >
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="btn-icon"
                >
                  <GithubIcon size={19} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="btn-icon"
                >
                  <LinkedinIcon size={19} />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Send direct email"
                  className="btn-icon"
                >
                  <Mail size={19} />
                </a>
              </div>
            </div>

            {/* Key Metrics Strip */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))",
                gap: "1.25rem",
                paddingTop: "2rem",
                borderTop: "1px solid var(--border-subtle)"
              }}
            >
              {personalInfo.stats.map((stat, idx) => (
                <div key={idx}>
                  <div
                    style={{
                      fontSize: "1.75rem",
                      fontWeight: 800,
                      color: "var(--text-primary)",
                      letterSpacing: "-0.02em"
                    }}
                    className="gradient-text-cyan"
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.8125rem",
                      color: "var(--text-muted)",
                      fontWeight: 500,
                      marginTop: "0.15rem"
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Visual Portrait with floating tech badges */}
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {/* Glowing Backdrop Ring */}
            <div
              style={{
                position: "absolute",
                width: "360px",
                height: "360px",
                borderRadius: "50%",
                background: "var(--gradient-aurora)",
                filter: "blur(50px)",
                opacity: 0.35,
                zIndex: 0
              }}
            />

            {/* Circular Frame */}
            <div
              style={{
                position: "relative",
                width: "340px",
                height: "340px",
                borderRadius: "32px",
                padding: "8px",
                background: "linear-gradient(135deg, rgba(0, 242, 254, 0.4), rgba(168, 85, 247, 0.2), rgba(255, 255, 255, 0.05))",
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.6)",
                zIndex: 1
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  borderRadius: "26px",
                  overflow: "hidden",
                  border: "1px solid rgba(255, 255, 255, 0.12)"
                }}
              >
                <Image
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  fill
                  sizes="(max-width: 768px) 280px, 340px"
                  style={{
                    objectFit: "cover"
                  }}
                  priority
                />
              </div>

              {/* Floating Pill: Next.js 16 */}
              <div
                style={{
                  position: "absolute",
                  top: "-15px",
                  right: "-20px",
                  background: "rgba(13, 17, 28, 0.9)",
                  border: "1px solid rgba(0, 242, 254, 0.4)",
                  borderRadius: "var(--radius-full)",
                  padding: "0.5rem 1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.5)",
                  backdropFilter: "blur(12px)"
                }}
              >
                <Layers size={16} color="var(--accent-cyan)" />
                <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#fff" }}>
                  Next.js 16 &amp; React 19
                </span>
              </div>

              {/* Floating Pill: Distributed Systems */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-20px",
                  left: "-25px",
                  background: "rgba(13, 17, 28, 0.9)",
                  border: "1px solid rgba(168, 85, 247, 0.4)",
                  borderRadius: "var(--radius-full)",
                  padding: "0.55rem 1.1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.5)",
                  backdropFilter: "blur(12px)"
                }}
              >
                <Database size={16} color="var(--accent-purple)" />
                <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#fff" }}>
                  High-Throughput APIs
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
            text-align: center;
          }
          .hero-grid > div:first-child {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-grid p {
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>
    </section>
  );
}
