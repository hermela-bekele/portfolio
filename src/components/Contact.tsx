"use client";

import React, { useState } from "react";
import { personalInfo } from "@/data/portfolioData";
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  MapPin, 
  Sparkles, 
  Clock,
  ArrowRight,
  Phone,
  FileDown
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="section-wrapper" style={{ background: "var(--bg-section-alt)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Mail size={14} />
            <span>Connect &amp; Collaborate</span>
          </div>
          <h2 className="section-title">
            Let&apos;s Build Something <span className="gradient-text">Exceptional</span>
          </h2>
          <p className="section-subtitle">
            Whether you have an ambitious full-stack project, a high-throughput systems opportunity,
            or simply want to connect — my inbox is always open.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.3fr",
            gap: "3rem",
            maxWidth: "1050px",
            margin: "0 auto"
          }}
          className="contact-grid"
        >
          {/* Left Column: Direct Info Card */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div
              className="glass-card"
              style={{
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.75rem"
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "0.5rem"
                  }}
                >
                  Contact Information
                </h3>
                <p style={{ fontSize: "0.9125rem", color: "var(--text-secondary)" }}>
                  Feel free to send a direct message or reach out via email. I generally respond within 24 hours.
                </p>
              </div>

              {/* Email Copy Card */}
              <div
                style={{
                  background: "var(--input-bg)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "14px",
                  padding: "1rem 1.25rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "0.75rem"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", overflow: "hidden" }}>
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "10px",
                      background: "rgba(0, 242, 254, 0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--accent-cyan)",
                      flexShrink: 0
                    }}
                  >
                    <Mail size={18} />
                  </div>
                  <div style={{ overflow: "hidden" }}>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
                      Direct Email
                    </div>
                    <div
                      style={{
                        fontSize: "0.9375rem",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: "nowrap"
                      }}
                    >
                      {personalInfo.email}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="btn-icon"
                  style={{
                    flexShrink: 0,
                    width: "36px",
                    height: "36px",
                    background: copied ? "rgba(16, 185, 129, 0.2)" : undefined,
                    color: copied ? "var(--accent-emerald)" : undefined,
                    borderColor: copied ? "rgba(16, 185, 129, 0.4)" : undefined
                  }}
                  title={copied ? "Copied!" : "Copy email address"}
                  id="copy-email-btn"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>

              {/* Details List */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <Phone size={18} color="var(--accent-cyan)" />
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                    style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", textDecoration: "none" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-cyan)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                  >
                    {personalInfo.phone}
                  </a>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <MapPin size={18} color="var(--accent-purple)" />
                  <span style={{ fontSize: "0.9375rem", color: "var(--text-secondary)" }}>
                    {personalInfo.location}
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <Clock size={18} color="var(--accent-emerald)" />
                  <span style={{ fontSize: "0.9375rem", color: "var(--text-secondary)" }}>
                    Timezone: EAT (UTC+3) / Flexible Remote Hours
                  </span>
                </div>
              </div>

              {/* Social Channels */}
              <div style={{ paddingTop: "1rem", borderTop: "1px solid var(--border-subtle)" }}>
                <div
                  style={{
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    color: "var(--text-muted)",
                    marginBottom: "0.75rem"
                  }}
                >
                  Profiles &amp; Code
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ padding: "0.5rem 1rem", fontSize: "0.875rem" }}
                  >
                    <GithubIcon size={16} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ padding: "0.5rem 1rem", fontSize: "0.875rem" }}
                  >
                    <LinkedinIcon size={16} />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="/resume.pdf"
                    download="Hermela_Bekele_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ padding: "0.5rem 1rem", fontSize: "0.875rem" }}
                  >
                    <FileDown size={16} color="var(--accent-cyan)" />
                    <span>Download CV</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div
            className="glass-card"
            style={{
              padding: "2.25rem",
              background: "var(--bg-card)",
              border: "1px solid var(--border-medium)"
            }}
          >
            <h3
              style={{
                fontSize: "1.35rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: "0.5rem"
              }}
            >
              Send a Message
            </h3>
            <p
              style={{
                fontSize: "0.9125rem",
                color: "var(--text-secondary)",
                marginBottom: "1.75rem"
              }}
            >
              Have a project or opportunity? Drop your details and message below.
            </p>

            {isSubmitted ? (
              <div
                style={{
                  padding: "2rem",
                  textAlign: "center",
                  background: "rgba(16, 185, 129, 0.1)",
                  border: "1px solid rgba(16, 185, 129, 0.3)",
                  borderRadius: "16px",
                  animation: "fadeIn 0.3s ease"
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: "rgba(16, 185, 129, 0.2)",
                    color: "var(--accent-emerald)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1rem auto"
                  }}
                >
                  <Check size={24} />
                </div>
                <h4 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#fff", marginBottom: "0.5rem" }}>
                  Message Sent Successfully!
                </h4>
                <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)" }}>
                  Thank you for reaching out, Hermela will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem"
                  }}
                  className="form-row"
                >
                  <div>
                    <label
                      htmlFor="contact-name"
                      style={{
                        display: "block",
                        fontSize: "0.8125rem",
                        fontWeight: 600,
                        color: "var(--text-secondary)",
                        marginBottom: "0.4rem"
                      }}
                    >
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "0.8rem 1rem",
                        borderRadius: "12px",
                        background: "var(--input-bg)",
                        border: "1px solid var(--input-border)",
                        color: "var(--text-primary)",
                        fontSize: "0.9375rem",
                        outline: "none",
                        transition: "border-color 0.2s ease"
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--accent-cyan)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--input-border)")}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      style={{
                        display: "block",
                        fontSize: "0.8125rem",
                        fontWeight: 600,
                        color: "var(--text-secondary)",
                        marginBottom: "0.4rem"
                      }}
                    >
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "0.8rem 1rem",
                        borderRadius: "12px",
                        background: "var(--input-bg)",
                        border: "1px solid var(--input-border)",
                        color: "var(--text-primary)",
                        fontSize: "0.9375rem",
                        outline: "none",
                        transition: "border-color 0.2s ease"
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--accent-cyan)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--input-border)")}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    style={{
                      display: "block",
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      color: "var(--text-secondary)",
                      marginBottom: "0.4rem"
                    }}
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.8rem 1rem",
                      borderRadius: "12px",
                      background: "var(--input-bg)",
                      border: "1px solid var(--input-border)",
                      color: "var(--text-primary)",
                      fontSize: "0.9375rem",
                      outline: "none",
                      transition: "border-color 0.2s ease"
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--accent-cyan)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--input-border)")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    style={{
                      display: "block",
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      color: "var(--text-secondary)",
                      marginBottom: "0.4rem"
                    }}
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Hi Hermela, we are building a distributed application and would love to collaborate..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.8rem 1rem",
                      borderRadius: "12px",
                      background: "var(--input-bg)",
                      border: "1px solid var(--input-border)",
                      color: "var(--text-primary)",
                      fontSize: "0.9375rem",
                      outline: "none",
                      resize: "vertical",
                      fontFamily: "inherit",
                      transition: "border-color 0.2s ease"
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--accent-cyan)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--input-border)")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  style={{
                    width: "100%",
                    padding: "0.95rem",
                    borderRadius: "12px",
                    marginTop: "0.5rem"
                  }}
                  id="contact-submit-btn"
                >
                  {isSubmitting ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <Send size={17} />
                      <span>Send Direct Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 860px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 580px) {
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
