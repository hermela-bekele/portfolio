"use client";

import React, { useState } from "react";
import { experienceData, certificationsData, ExperienceItem } from "@/data/portfolioData";
import { Briefcase, GraduationCap, Calendar, MapPin, Sparkles, CheckCircle2, Award } from "lucide-react";

export default function Experience() {
  const [filterType, setFilterType] = useState<"all" | "work" | "education">("all");

  const filteredItems = experienceData.filter((item) => {
    if (filterType === "all") return true;
    return item.type === filterType;
  });

  return (
    <section id="experience" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Career Journey</span>
          </div>
          <h2 className="section-title">
            Experience &amp; <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle">
            A track record of full-stack engineering delivery, enterprise ERP solutions, and continuous technical growth.
          </p>

          {/* Type Filter Buttons */}
          <div
            style={{
              display: "inline-flex",
              background: "var(--bg-pill)",
              padding: "4px",
              borderRadius: "var(--radius-full)",
              border: "1px solid var(--border-subtle)",
              marginTop: "2rem"
            }}
          >
            <button
              onClick={() => setFilterType("all")}
              style={{
                padding: "0.45rem 1.25rem",
                borderRadius: "var(--radius-full)",
                fontSize: "0.85rem",
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
                background: filterType === "all" ? "var(--accent-cyan)" : "transparent",
                color: filterType === "all" ? "#08090e" : "var(--text-secondary)",
                transition: "all 0.2s ease"
              }}
            >
              All Timeline
            </button>
            <button
              onClick={() => setFilterType("work")}
              style={{
                padding: "0.45rem 1.25rem",
                borderRadius: "var(--radius-full)",
                fontSize: "0.85rem",
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
                background: filterType === "work" ? "var(--accent-cyan)" : "transparent",
                color: filterType === "work" ? "#08090e" : "var(--text-secondary)",
                transition: "all 0.2s ease"
              }}
            >
              Work Experience
            </button>
            <button
              onClick={() => setFilterType("education")}
              style={{
                padding: "0.45rem 1.25rem",
                borderRadius: "var(--radius-full)",
                fontSize: "0.85rem",
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
                background: filterType === "education" ? "var(--accent-cyan)" : "transparent",
                color: filterType === "education" ? "#08090e" : "var(--text-secondary)",
                transition: "all 0.2s ease"
              }}
            >
              Education
            </button>
          </div>
        </div>

        {/* Timeline Container */}
        <div
          style={{
            maxWidth: "860px",
            margin: "0 auto",
            position: "relative",
            paddingLeft: "2rem"
          }}
        >
          {/* Vertical Spine */}
          <div
            style={{
              position: "absolute",
              top: "10px",
              bottom: "10px",
              left: "7px",
              width: "2px",
              background: "linear-gradient(to bottom, #00f2fe, #a855f7 60%, rgba(255, 255, 255, 0.05))"
            }}
          />

          {/* Timeline Items */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {filteredItems.map((item) => (
              <div
                key={item.id}
                style={{
                  position: "relative"
                }}
              >
                {/* Node Marker */}
                <div
                  style={{
                    position: "absolute",
                    top: "22px",
                    left: "-2.4rem",
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    background: item.current ? "var(--accent-cyan)" : "var(--bg-card-solid)",
                    border: "3px solid var(--bg-primary)",
                    boxShadow: item.current
                      ? "0 0 12px #00f2fe"
                      : "0 0 8px rgba(168, 85, 247, 0.5)",
                    zIndex: 2
                  }}
                />

                {/* Card */}
                <div
                  className="glass-card"
                  style={{
                    padding: "2rem"
                  }}
                >
                  {/* Header Row */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: "0.75rem",
                      marginBottom: "1rem"
                    }}
                  >
                    <div>
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.35rem",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          color: item.type === "work" ? "var(--accent-cyan)" : "var(--accent-purple)",
                          marginBottom: "0.35rem"
                        }}
                      >
                        {item.type === "work" ? <Briefcase size={13} /> : <GraduationCap size={13} />}
                        <span>{item.type === "work" ? "Professional Role" : "Academic Degree"}</span>
                      </div>
                      <h3
                        style={{
                          fontSize: "1.35rem",
                          fontWeight: 700,
                          color: "var(--text-primary)"
                        }}
                      >
                        {item.role}
                      </h3>
                      <div
                        style={{
                          fontSize: "1.05rem",
                          fontWeight: 600,
                          color: "var(--text-secondary)",
                          marginTop: "0.2rem"
                        }}
                      >
                        {item.company}
                      </div>
                    </div>

                    {/* Metadata pill */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        gap: "0.35rem"
                      }}
                    >
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.4rem",
                          fontSize: "0.8125rem",
                          fontFamily: "var(--font-mono)",
                          background: item.current ? "rgba(0, 242, 254, 0.12)" : "var(--bg-pill)",
                          color: item.current ? "var(--accent-cyan)" : "var(--text-secondary)",
                          border: item.current ? "1px solid rgba(0, 242, 254, 0.3)" : "1px solid var(--border-subtle)",
                          padding: "0.25rem 0.75rem",
                          borderRadius: "var(--radius-full)"
                        }}
                      >
                        <Calendar size={13} />
                        <span>{item.period}</span>
                      </div>
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.35rem",
                          fontSize: "0.75rem",
                          color: "var(--text-muted)"
                        }}
                      >
                        <MapPin size={12} />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bullet points */}
                  <ul
                    style={{
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.6rem",
                      marginBottom: "1.5rem"
                    }}
                  >
                    {item.description.map((point, idx) => (
                      <li
                        key={idx}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "0.65rem",
                          fontSize: "0.9375rem",
                          color: "var(--text-secondary)",
                          lineHeight: 1.6
                        }}
                      >
                        <CheckCircle2
                          size={16}
                          color="var(--accent-emerald)"
                          style={{ flexShrink: 0, marginTop: "4px" }}
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technology Pills */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
                    {item.technologies.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Showcase */}
        <div style={{ marginTop: "5rem", maxWidth: "980px", margin: "5rem auto 0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.45rem",
                padding: "0.35rem 0.95rem",
                borderRadius: "var(--radius-full)",
                background: "rgba(168, 85, 247, 0.1)",
                border: "1px solid rgba(168, 85, 247, 0.25)",
                color: "var(--accent-purple)",
                fontSize: "0.8rem",
                fontWeight: 600,
                marginBottom: "0.75rem"
              }}
            >
              <Award size={14} />
              <span>Verified Qualifications</span>
            </div>
            <h3
              style={{
                fontSize: "1.85rem",
                fontWeight: 700,
                color: "var(--text-primary)"
              }}
            >
              Professional <span className="gradient-text">Certifications</span>
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginTop: "0.5rem" }}>
              Continuous professional learning and industry-recognized certifications across modern full-stack development and AI.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.25rem"
            }}
          >
            {certificationsData.map((cert) => (
              <div
                key={cert.id}
                className="glass-card"
                style={{
                  padding: "1.5rem",
                  borderRadius: "18px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.25s ease",
                  border: "1px solid var(--border-subtle)"
                }}
              >
                <div>
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "12px",
                      background: "rgba(0, 242, 254, 0.1)",
                      border: "1px solid rgba(0, 242, 254, 0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--accent-cyan)",
                      marginBottom: "1rem"
                    }}
                  >
                    <Award size={22} />
                  </div>
                  <h4
                    style={{
                      fontSize: "1.0625rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: "0.35rem",
                      lineHeight: 1.35
                    }}
                  >
                    {cert.title}
                  </h4>
                  <div
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "var(--accent-purple)",
                      marginBottom: "0.75rem"
                    }}
                  >
                    {cert.issuer}
                  </div>
                </div>

                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    fontSize: "0.75rem",
                    fontFamily: "var(--font-mono)",
                    color: "var(--text-muted)",
                    paddingTop: "0.75rem",
                    borderTop: "1px solid var(--border-subtle)"
                  }}
                >
                  <Calendar size={12} />
                  <span>{cert.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
