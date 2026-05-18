"use client"

import { Code2, Database, Server, Cloud } from "lucide-react"

const skills = [
  { name: "Python", level: 75 },
  { name: "Django / DRF", level: 65 },
  { name: "PostgreSQL", level: 55 },
  { name: "Docker", level: 35 },
  { name: "AWS", level: 40 },
  { name: "Redis", level: 40 },
]

const highlights = [
  { icon: Code2, label: "Clean Code", description: "Writing maintainable, testable code" },
  { icon: Database, label: "Database Design", description: "Optimized schemas & queries" },
  { icon: Server, label: "API Architecture", description: "RESTful & GraphQL APIs" },
  { icon: Cloud, label: "Cloud Infrastructure", description: "Scalable deployments" },
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-18">
          <h1 className="text-primary font-mono text-sm mb-4 tracking-wider">
            GET TO KNOW ME
          </h1>  
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Bio */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg">
              I&apos;m a passionate backend developer with over 6 years of experience
              building scalable web applications. My journey started with a fascination
              for how systems work under the hood, and that curiosity has driven me
              to master the art of backend development.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              I specialize in designing and implementing robust APIs, optimizing
              database performance, and architecting cloud-native solutions. When
              I&apos;m not coding, you&apos;ll find me contributing to open-source
              projects or exploring new technologies.
            </p>

            {/* Highlight cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="glass rounded-xl p-4 hover:glow transition-all duration-300 group"
                >
                  <item.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-foreground mb-1">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6 ">
            <h3 className="text-2xl font-semibold text-foreground mb-8">Core Skills</h3>
            {skills.map((skill, index) => (
              <div key={skill.name} className="group">
                <div className="flex justify-between mb-2">
                  <span className="text-foreground font-medium">{skill.name}</span>
                  <span className="text-primary font-mono text-sm">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out group-hover:glow"
                    style={{
                      width: `${skill.level}%`,
                      animationDelay: `${index * 100}ms`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
