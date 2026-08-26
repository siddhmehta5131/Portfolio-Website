import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Siddh Mehta | Mechanical Engineer",
  description: "Portfolio of Siddh Mehta - Mechanical Engineering undergraduate at IIT Jodhpur.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground selection:bg-accent selection:text-white`}>
        {/* Minimal Navigation */}
        <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
          <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between text-sm">
            <a href="#" className="font-semibold tracking-tight hover:opacity-70 transition-opacity">
              Siddh Mehta
            </a>
            <div className="flex items-center gap-6 text-text-secondary">
              <a href="#about" className="hover:text-foreground transition-colors hidden sm:block">About</a>
              <a href="#projects" className="hover:text-foreground transition-colors hidden sm:block">Projects</a>
              <a href="#experience" className="hover:text-foreground transition-colors hidden sm:block">Experience</a>
              <a href="/assets/resume.pdf" target="_blank" className="text-foreground font-medium hover:text-accent transition-colors">Resume</a>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
