"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Project } from "@/data/portfolioData";
import { X, ExternalLink, CheckCircle2, Zap, Layers, Sparkles, Lock, Mail } from "lucide-react";
import { GithubIcon } from "./Icons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.25rem",
        backgroundColor: "var(--bg-modal-overlay)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        animation: "fadeIn 0.2s ease"
      }}
      onClick={onClose}
    >
      <div
        className="glass-card"
        style={{
          width: "100%",
          maxWidth: "840px",
          maxHeight: "90vh",
          overflowY: "auto",
          background: "var(--bg-modal)",
          border: "1px solid var(--border-medium)",
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.4), 0 0 40px rgba(0, 242, 254, 0.15)",
          borderRadius: "24px"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Media */}
        <div style={{ position: "relative", width: "100%", height: "320px", background: "var(--bg-card-solid)" }}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 840px) 100vw, 840px"
            style={{ objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, var(--bg-modal) 0%, transparent 70%)"
            }}
          />

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close details modal"
            style={{
              position: "absolute",
              top: "1.25rem",
              right: "1.25rem",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "var(--bg-pill)",
              border: "1px solid var(--border-subtle)",
              color: "var(--text-primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              backdropFilter: "blur(8px)",
              transition: "transform 0.2s ease"
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: "2rem" }}>
          {/* Header Row */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: "1rem",
              marginBottom: "1rem"
            }}
          >
            <div>
              <span
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  color: "var(--accent-cyan)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em"
                }}
              >
                {project.category}
              </span>
              <h2
                style={{
                  fontSize: "2rem",
                  fontWeight: 800,
                  color: "var(--text-primary)",
                  marginTop: "0.25rem"
                }}
              >
                {project.title}
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem" }}>
                {project.tagline}
              </p>
            </div>

            {/* Quick Action Links */}
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", alignItems: "center" }}>
              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ padding: "0.6rem 1.25rem", fontSize: "0.875rem" }}
                >
                  <ExternalLink size={16} />
                  <span>Live Application</span>
                </a>
              ) : (
                <a
                  href={`mailto:hermelabekeleabebe@gmail.com?subject=Demo%20Walkthrough%20Request:%20${encodeURIComponent(project.title)}`}
                  className="btn btn-primary"
                  style={{ padding: "0.6rem 1.25rem", fontSize: "0.875rem" }}
                  id="modal-request-demo-btn"
                >
                  <Mail size={16} />
                  <span>Request Demo Walkthrough</span>
                </a>
              )}

              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ padding: "0.6rem 1.25rem", fontSize: "0.875rem" }}
                >
                  <GithubIcon size={16} />
                  <span>Repository</span>
                </a>
              ) : (
                <div
                  className="btn btn-secondary"
                  style={{
                    padding: "0.6rem 1.25rem",
                    fontSize: "0.875rem",
                    cursor: "default",
                    borderColor: "rgba(245, 158, 11, 0.35)",
                    color: "var(--accent-amber)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.45rem",
                    background: "rgba(245, 158, 11, 0.08)"
                  }}
                  title="Proprietary Enterprise Repository protected under employment NDA"
                >
                  <Lock size={15} />
                  <span>Private Enterprise Repo</span>
                </div>
              )}
            </div>
          </div>

          {/* Private Repository Notice */}
          {project.isPrivateRepo && (
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.75rem",
                padding: "0.9rem 1.15rem",
                background: "var(--input-bg)",
                border: "1px solid rgba(245, 158, 11, 0.25)",
                borderRadius: "14px",
                marginBottom: "1.5rem"
              }}
            >
              <Lock
                size={16}
                color="var(--accent-amber)"
                style={{ flexShrink: 0, marginTop: "2px" }}
              />
              <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                <strong style={{ color: "var(--text-primary)" }}>Private Enterprise Solution: </strong>
                The source code and database schemas are proprietary enterprise IP. This modal serves as an architecture case study. Live demonstrations and code walkthroughs are available upon request during interviews.
              </div>
            </div>
          )}

          {/* Metrics Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "1rem",
              padding: "1.25rem",
              background: "var(--bg-pill)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "16px",
              margin: "1.5rem 0"
            }}
          >
            {project.metrics.map((metric, i) => (
              <div key={i}>
                <div
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    color: "var(--accent-cyan)"
                  }}
                >
                  {metric.value}
                </div>
                <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Deep Dive Description */}
          <div style={{ marginBottom: "1.75rem" }}>
            <h3
              style={{
                fontSize: "1.125rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: "0.6rem"
              }}
            >
              Overview &amp; Architecture
            </h3>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "0.95rem" }}>
              {project.longDescription}
            </p>
          </div>

          {/* Key Engineering Highlights */}
          <div style={{ marginBottom: "1.75rem" }}>
            <h3
              style={{
                fontSize: "1.125rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: "0.75rem"
              }}
            >
              Key Solutions &amp; Technical Feats
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              {project.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem"
                  }}
                >
                  <CheckCircle2
                    size={18}
                    color="var(--accent-emerald)"
                    style={{ flexShrink: 0, marginTop: "2px" }}
                  />
                  <span style={{ fontSize: "0.9375rem", color: "var(--text-secondary)" }}>
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h3
              style={{
                fontSize: "1.125rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: "0.75rem"
              }}
            >
              Technologies Used
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {project.tags.map((tag) => (
                <span key={tag} className="tech-badge">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
