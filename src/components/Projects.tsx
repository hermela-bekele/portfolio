"use client";

import React, { useState } from "react";
import Image from "next/image";
import { projectsData, Project } from "@/data/portfolioData";
import ProjectModal from "./ProjectModal";
import { ExternalLink, Info, Sparkles, ArrowUpRight, Lock } from "lucide-react";
import { GithubIcon } from "./Icons";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", "Full-Stack", "Enterprise & ERP", "Mobile & AI"];

  const filteredProjects = activeCategory === "All"
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Featured Engineering</span>
          </div>
          <h2 className="section-title">
            Crafted for <span className="gradient-text">Impact &amp; Scale</span>
          </h2>
          <p className="section-subtitle">
            A showcase of full-stack web &amp; mobile applications, enterprise ERP and supply chain systems,
            and AI-enabled software solutions.
          </p>

          {/* Filter Pills */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "0.5rem",
              marginTop: "2rem"
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "0.45rem 1.15rem",
                  borderRadius: "var(--radius-full)",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  border: "1px solid",
                  borderColor:
                    activeCategory === cat
                      ? "var(--accent-cyan)"
                      : "var(--border-subtle)",
                  background:
                    activeCategory === cat
                      ? "rgba(0, 242, 254, 0.15)"
                      : "var(--bg-pill)",
                  color:
                    activeCategory === cat ? "var(--accent-cyan)" : "var(--text-secondary)",
                  transition: "all 0.2s ease",
                  outline: "none"
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
            gap: "2rem"
          }}
          className="projects-grid"
        >
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="glass-card"
              style={{
                display: "flex",
                flexDirection: "column",
                borderRadius: "22px"
              }}
            >
              {/* Project Visual Image */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "230px",
                  overflow: "hidden",
                  cursor: "pointer"
                }}
                onClick={() => setSelectedProject(project)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.4s ease"
                  }}
                  className="project-card-image"
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, var(--bg-card) 0%, transparent 60%)"
                  }}
                />

                {/* Category Badge on Top-Left */}
                <div
                  style={{
                    position: "absolute",
                    top: "1rem",
                    left: "1rem",
                    background: "var(--bg-pill)",
                    border: "1px solid var(--border-subtle)",
                    backdropFilter: "blur(8px)",
                    borderRadius: "var(--radius-full)",
                    padding: "0.25rem 0.75rem",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "var(--accent-cyan)"
                  }}
                >
                  {project.category}
                </div>

                {/* Private Repo Indicator on Top-Right */}
                {project.isPrivateRepo && (
                  <div
                    style={{
                      position: "absolute",
                      top: "1rem",
                      right: "1rem",
                      background: "rgba(10, 14, 25, 0.85)",
                      border: "1px solid rgba(245, 158, 11, 0.4)",
                      backdropFilter: "blur(8px)",
                      borderRadius: "var(--radius-full)",
                      padding: "0.25rem 0.65rem",
                      fontSize: "0.725rem",
                      fontWeight: 600,
                      color: "var(--accent-amber)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.35rem"
                    }}
                    title="Enterprise proprietary solution with private source code"
                  >
                    <Lock size={12} />
                    <span>Private Repo</span>
                  </div>
                )}

                {/* Inspect Details Hint */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "1rem",
                    right: "1rem",
                    background: "var(--bg-pill)",
                    border: "1px solid var(--border-subtle)",
                    backdropFilter: "blur(6px)",
                    borderRadius: "var(--radius-full)",
                    padding: "0.3rem 0.75rem",
                    fontSize: "0.75rem",
                    color: "var(--text-primary)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.35rem"
                  }}
                >
                  <Info size={13} color="var(--accent-cyan)" />
                  <span>Deep Dive</span>
                </div>
              </div>

              {/* Card Content */}
              <div
                style={{
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  justifyContent: "space-between"
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: "1.35rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: "0.25rem"
                    }}
                  >
                    {project.title}
                  </h3>
                  <div
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--accent-purple)",
                      fontWeight: 600,
                      marginBottom: "0.75rem"
                    }}
                  >
                    {project.tagline}
                  </div>
                  <p
                    style={{
                      fontSize: "0.9125rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.6,
                      marginBottom: "1.25rem"
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Highlights Mini Snippet */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.4rem",
                      marginBottom: "1.5rem"
                    }}
                  >
                    {project.tags.slice(0, 4).map((tag) => (
                      <span key={tag} className="tech-badge">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="tech-badge">+{project.tags.length - 4} more</span>
                    )}
                  </div>
                </div>

                {/* Footer Actions */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: "1rem",
                    borderTop: "1px solid var(--border-subtle)"
                  }}
                >
                  <button
                    onClick={() => setSelectedProject(project)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "var(--text-primary)",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.35rem",
                      padding: 0
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-cyan)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                  >
                    <span>View Architecture</span>
                    <ArrowUpRight size={15} />
                  </button>

                  <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-icon"
                        style={{ width: "36px", height: "36px" }}
                        aria-label={`${project.title} source code on GitHub`}
                      >
                        <GithubIcon size={16} />
                      </a>
                    ) : (
                      <div
                        className="btn-icon"
                        style={{
                          width: "36px",
                          height: "36px",
                          cursor: "default",
                          opacity: 0.8,
                          borderColor: "rgba(245, 158, 11, 0.3)",
                          color: "var(--accent-amber)"
                        }}
                        title="Private Enterprise Code (Walkthrough available upon request)"
                      >
                        <Lock size={15} />
                      </div>
                    )}

                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-icon"
                        style={{ width: "36px", height: "36px" }}
                        aria-label={`${project.title} live preview`}
                        title="Live Application"
                      >
                        <ExternalLink size={16} />
                      </a>
                    ) : (
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="btn-icon"
                        style={{
                          width: "36px",
                          height: "36px",
                          cursor: "pointer"
                        }}
                        aria-label="View Project Case Study & Architecture"
                        title="Architecture & Case Study Walkthrough"
                      >
                        <Info size={16} color="var(--accent-cyan)" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Deep Dive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <style jsx>{`
        .project-card-image:hover {
          transform: scale(1.05);
        }
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
