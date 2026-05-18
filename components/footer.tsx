"use client";

import { Github, Linkedin, Twitter, Heart, Instagram } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a
            href="#"
            className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity"
          >
            IA
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {[
              {
                icon: Github,
                href: "https://github.com/ismoilasiliddinov",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/ismoil-asiliddinov-258589374/",
                label: "LinkedIn",
              },
              {
                icon: Instagram,
                href: "https://instagram.com/ismoil_asiliddinov",
                label: "Instagram",
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Made in {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
