"use client"

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse delay-500" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="animate-fade-in-up opacity-0">
          <p className="text-primary font-mono text-sm mb-4 tracking-wider">
            Hello, I&apos;m
          </p>
        </div>

        <h1 className="animate-fade-in-up opacity-0 delay-100 text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
          <span className="gradient-text">Ismoil Asiliddinov</span>
        </h1>

        <h2 className="animate-fade-in-up opacity-0 delay-200 text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8">
          Junior Backend Developer
        </h2>

        <p className="animate-fade-in-up opacity-0 delay-300 text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed text-pretty">
          I build robust, scalable backend systems that power modern applications.
          Specializing in Django, PostgreSQL, and cloud infrastructure, I transform
          complex requirements into elegant, high-performance solutions.
        </p>

        <div className="animate-fade-in-up opacity-0 delay-400 flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            asChild
            className="glow bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105"
          >
            <a href="#projects">View Projects</a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="glass border-glass-border hover:bg-secondary/50 px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105"
          >
            <a href="#contact">Contact Me</a>
          </Button>
        </div>

        <div className="animate-fade-in-up opacity-0 delay-500 flex items-center justify-center gap-6">
          <a
            href="https://github.com/ismoilasiliddinov"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/ismoil-asiliddinov-258589374/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:ismoilasiliddinov@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>  
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll to about section">
          <ArrowDown className="text-muted-foreground" size={24} />
        </a>
      </div>
    </section>
  )
}
