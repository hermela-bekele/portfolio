import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hermela-bekele.github.io"),
  title: "Hermela Bekele | Software Engineer — Full-Stack & Mobile Developer",
  description:
    "Portfolio of Hermela Bekele — Software Engineer with experience building full-stack web and mobile applications with React, Next.js, TypeScript, Node.js, NestJS, and PostgreSQL.",
  keywords: [
    "Hermela Bekele",
    "Software Engineer",
    "Full-Stack Developer",
    "Mobile Developer",
    "React Native",
    "Next.js Developer",
    "NestJS Developer",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Addis Ababa Ethiopia",
    "Software Engineer Portfolio"
  ],
  authors: [{ name: "Hermela Bekele" }],
  creator: "Hermela Bekele",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hermela-bekele.github.io/portfolio",
    title: "Hermela Bekele | Software Engineer — Full-Stack & Mobile Developer",
    description:
      "Software Engineer building full-stack web and mobile applications with React, Next.js, TypeScript, Node.js, NestJS, and PostgreSQL.",
    siteName: "Hermela Bekele Portfolio",
    images: [
      {
        url: "/images/hermela.jpg",
        width: 1200,
        height: 1200,
        alt: "Hermela Bekele — Software Engineer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Hermela Bekele | Software Engineer — Full-Stack & Mobile Developer",
    description:
      "Software Engineer building full-stack web and mobile applications with React, Next.js, TypeScript, Node.js, NestJS, and PostgreSQL.",
    images: ["/images/hermela.jpg"]
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('portfolio-theme');
                  var pref = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
                  var theme = saved || pref;
                  document.documentElement.setAttribute('data-theme', theme);
                } catch(e) {}
              })();
            `
          }}
        />
      </head>
      <body id="top">
        {/* Background Ambient Cosmic Orbs */}
        <div className="ambient-bg" aria-hidden="true">
          <div className="ambient-grid"></div>
          <div className="ambient-orb orb-1"></div>
          <div className="ambient-orb orb-2"></div>
          <div className="ambient-orb orb-3"></div>
        </div>

        {children}
      </body>
    </html>
  );
}
