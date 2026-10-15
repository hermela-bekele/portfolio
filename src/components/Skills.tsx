"use client";

import React, { useState } from "react";
import { skillCategories } from "@/data/portfolioData";
import { 
  Code2, 
  Layers, 
  Palette, 
  Cpu, 
  Radio, 
  Zap, 
  Server, 
  Network, 
  Terminal, 
  Lock, 
  Boxes, 
  Workflow, 
  Database, 
  HardDrive, 
  GitBranch, 
  BarChart3, 
  Box, 
  GitCommit, 
  Cloud, 
  Globe, 
  Activity,
  Sparkles
} from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  Layers: <Layers size={18} />,
  Code2: <Code2 size={18} />,
  Palette: <Palette size={18} />,
  Cpu: <Cpu size={18} />,
  Radio: <Radio size={18} />,
  Zap: <Zap size={18} />,
  Server: <Server size={18} />,
  Network: <Network size={18} />,
  Terminal: <Terminal size={18} />,
  Lock: <Lock size={18} />,
  Boxes: <Boxes size={18} />,
  Workflow: <Workflow size={18} />,
  Database: <Database size={18} />,
  HardDrive: <HardDrive size={18} />,
  GitBranch: <GitBranch size={18} />,
  BarChart3: <BarChart3 size={18} />,
  Box: <Box size={18} />,
  GitCommit: <GitCommit size={18} />,
  Cloud: <Cloud size={18} />,
  Globe: <Globe size={18} />,
  Activity: <Activity size={18} />
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  return (
    <section id="skills" className="section-wrapper" style={{ background: "rgba(10, 13, 22, 0.4)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of tools, frameworks, and architectural paradigms I utilize
            to deliver resilient, scalable software systems.
          </p>
        </div>

        {/* Category Tab Selector for Desktop / Mobile */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1rem",
            marginBottom: "3rem"
          }}
        >
          {skillCategories.map((category, index) => {
            const isSelected = selectedCategory === index;
            return (
              <button
                key={category.title}
                onClick={() => setSelectedCategory(index)}
                style={{
                  padding: "1.25rem",
                  borderRadius: "18px",
                  background: isSelected
                    ? "linear-gradient(135deg, rgba(0, 242, 254, 0.12), rgba(139, 92, 246, 0.08))"
                    : "rgba(16, 21, 36, 0.6)",
                  border: isSelected
                    ? "1px solid var(--accent-cyan)"
                    : "1px solid var(--border-subtle)",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.25s ease",
                  boxShadow: isSelected ? "0 0 25px rgba(0, 242, 254, 0.15)" : "none",
                  outline: "none"
                }}
              >
                <div
                  style={{
                    fontSize: "1.0625rem",
                    fontWeight: 700,
                    color: isSelected ? "var(--text-primary)" : "var(--text-secondary)",
                    marginBottom: "0.35rem"
                  }}
                >
                  {category.title}
                </div>
                <div
                  style={{
                    fontSize: "0.8125rem",
                    color: isSelected ? "var(--accent-cyan)" : "var(--text-muted)",
                    lineHeight: 1.4
                  }}
                >
                  {category.skills.length} core competencies
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Category Skills Detail Card */}
        <div
          className="glass-card"
          style={{
            padding: "2.5rem",
            background: "rgba(13, 17, 28, 0.85)",
            border: "1px solid rgba(255, 255, 255, 0.12)"
          }}
        >
          <div style={{ marginBottom: "2rem" }}>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: "0.35rem"
              }}
            >
              {skillCategories[selectedCategory].title}
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
              {skillCategories[selectedCategory].description}
            </p>
          </div>

          {/* Grid of skills with progress bars */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "1.5rem"
            }}
          >
            {skillCategories[selectedCategory].skills.map((skill) => (
              <div
                key={skill.name}
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  borderRadius: "14px",
                  padding: "1.25rem",
                  transition: "all 0.2s ease"
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "0.75rem"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
                    <span style={{ color: "var(--accent-cyan)" }}>
                      {ICON_MAP[skill.icon] || <Zap size={18} />}
                    </span>
                    <span
                      style={{
                        fontSize: "0.9375rem",
                        fontWeight: 600,
                        color: "var(--text-primary)"
                      }}
                    >
                      {skill.name}
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      color: "var(--accent-cyan)"
                    }}
                  >
                    {skill.level}%
                  </span>
                </div>

                {/* Progress bar */}
                <div
                  style={{
                    width: "100%",
                    height: "6px",
                    background: "rgba(255, 255, 255, 0.08)",
                    borderRadius: "999px",
                    overflow: "hidden"
                  }}
                >
                  <div
                    style={{
                      width: `${skill.level}%`,
                      height: "100%",
                      background: "linear-gradient(90deg, #00f2fe 0%, #a855f7 100%)",
                      borderRadius: "999px",
                      transition: "width 0.8s cubic-bezier(0.16, 1, 0.3, 1)"
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
