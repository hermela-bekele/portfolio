"use client";

import React, { useState, useEffect } from "react";
import { personalInfo } from "@/data/portfolioData";
import { 
  ArrowRight, 
  Mail, 
  Layers,
  Database,
  Code2,
  FileDown
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

const ROLES = [
  "Software Engineer",
  "Full-Stack & Mobile Developer",
  "React & Next.js Specialist",
  "NestJS & Node.js Backend Engineer",
  "AI & ERP Solutions Builder"
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
        paddingTop: "4.5rem",
        paddingBottom: "5.5rem",
        position: "relative"
      }}
    >
      <div className="container">
        <div style={{ maxWidth: "980px" }}>
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
            Available for Full-Time &amp; Contract Engineering
          </div>

          {/* Main Greeting */}
          <h1
            style={{
              fontSize: "clamp(2.75rem, 5.5vw, 4.5rem)",
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
              lineHeight: 1.75,
              color: "var(--text-secondary)",
              maxWidth: "820px",
              marginBottom: "2rem"
            }}
          >
            {personalInfo.bio}
          </p>

          {/* Core Specialization Pills */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              marginBottom: "2.5rem"
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.45rem 1rem",
                borderRadius: "var(--radius-full)",
                background: "var(--bg-pill)",
                border: "1px solid var(--border-subtle)",
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "var(--text-primary)"
              }}
            >
              <Layers size={15} color="var(--accent-cyan)" />
              <span>React, Next.js &amp; React Native</span>
            </div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.45rem 1rem",
                borderRadius: "var(--radius-full)",
                background: "var(--bg-pill)",
                border: "1px solid var(--border-subtle)",
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "var(--text-primary)"
              }}
            >
              <Database size={15} color="var(--accent-purple)" />
              <span>NestJS, Node.js &amp; PostgreSQL</span>
            </div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.45rem 1rem",
                borderRadius: "var(--radius-full)",
                background: "var(--bg-pill)",
                border: "1px solid var(--border-subtle)",
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "var(--text-primary)"
              }}
            >
              <Code2 size={15} color="var(--accent-emerald)" />
              <span>Enterprise ERP &amp; AI Integration</span>
            </div>
          </div>

          {/* Action Buttons & Socials */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "1.25rem",
              marginBottom: "3.5rem"
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

            <a
              href="/resume.pdf"
              download="Hermela_Bekele_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              id="hero-download-cv-btn"
            >
              <FileDown size={18} color="var(--accent-cyan)" />
              <span>Download CV</span>
            </a>

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

          {/* Key Metrics Stats Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1.25rem",
              paddingTop: "2rem",
              borderTop: "1px solid var(--border-subtle)"
            }}
          >
            {personalInfo.stats.map((stat, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: "1.35rem 1.5rem",
                  borderRadius: "16px"
                }}
              >
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                    marginBottom: "0.25rem"
                  }}
                  className="gradient-text-cyan"
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--text-secondary)",
                    fontWeight: 500,
                    lineHeight: 1.4
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
