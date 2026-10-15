import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hermela-bekele.github.io"),
  title: "Hermela Bekele | Full-Stack Software Engineer",
  description:
    "Portfolio of Hermela Bekele — Full-Stack Software Engineer crafting resilient cloud architectures, real-time distributed platforms, and high-performance web applications.",
  keywords: [
    "Hermela Bekele",
    "Full-Stack Engineer",
    "Next.js Developer",
    "React Specialist",
    "Node.js Microservices",
    "TypeScript",
    "Distributed Systems",
    "Cloud Observability",
    "Software Portfolio"
  ],
  authors: [{ name: "Hermela Bekele" }],
  creator: "Hermela Bekele",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hermela-bekele.github.io/portfolio",
    title: "Hermela Bekele | Full-Stack Software Engineer",
    description:
      "Crafting resilient cloud architectures, real-time distributed platforms, and high-performance web applications.",
    siteName: "Hermela Bekele Portfolio",
    images: [
      {
        url: "/images/hermela.jpg",
        width: 1200,
        height: 1200,
        alt: "Hermela Bekele — Full-Stack Software Engineer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Hermela Bekele | Full-Stack Software Engineer",
    description:
      "Crafting resilient cloud architectures, real-time distributed platforms, and high-performance web applications.",
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
    <html lang="en">
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
