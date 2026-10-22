"use client";

import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = (localStorage.getItem("portfolio-theme") as "dark" | "light") ||
      (document.documentElement.getAttribute("data-theme") as "dark" | "light") ||
      "dark";
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    try {
      localStorage.setItem("portfolio-theme", nextTheme);
    } catch (e) {}
  };

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="btn-icon theme-toggle-btn"
        style={{ width: "38px", height: "38px", visibility: "hidden" }}
      >
        <Moon size={18} />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="btn-icon theme-toggle-btn"
      id="theme-toggle-btn"
      style={{
        width: "38px",
        height: "38px",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--input-bg)",
        border: "1px solid var(--border-subtle)",
        color: "var(--text-primary)",
        transition: "all 0.25s ease"
      }}
    >
      {theme === "dark" ? (
        <Sun size={17} color="#f59e0b" style={{ transition: "transform 0.3s ease" }} />
      ) : (
        <Moon size={17} color="#7c3aed" style={{ transition: "transform 0.3s ease" }} />
      )}
    </button>
  );
}
