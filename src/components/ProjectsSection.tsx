import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

export function ProjectsSection() {
  const projects = [
    {
      title: "Bridge Design Analysis",
      category: "Civil Engineering",
      description: "Comprehensive structural analysis and design of a steel truss bridge using advanced BIM modeling and AutoCAD drafting.",
      tools: ["AutoCAD", "Revit", "Structural Analysis"],
      icon: "🌉",
      color: "primary",
    },
    {
      title: "Hydropower Site Survey",
      category: "Civil Engineering",
      description: "Topographic survey and feasibility study for micro-hydropower installation using GIS and modern surveying techniques.",
      tools: ["GIS", "Survey Equipment", "Water Resources"],
      icon: "⚡",
      color: "primary",
    },
    {
      title: "Engineering Calculator",
      category: "Tech Project",
      description: "Python-based engineering calculator for structural load calculations and material strength analysis.",
      tools: ["Python", "NumPy", "Git"],
      github: "https://github.com/sijapatisankalp-ship-it",
      icon: "🔢",
      color: "secondary",
    },
    {
      title: "Portfolio Website",
      category: "Tech Project",
      description: "Modern 3D portfolio website built with React, Three.js, and WebGL for immersive user experience.",
      tools: ["HTML", "React", "Three.js", "GitHub"],
      github: "https://github.com/sijapatisankalp-ship-it",
      icon: "🌐",
      color: "secondary",
    },
  ];

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto glow-cyan" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A showcase of engineering designs and tech implementations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-card p-6 rounded-2xl group cursor-pointer overflow-hidden relative"
            >
              {/* Animated gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                {/* Icon and category */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-lg bg-${project.color}/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}
                    >
                      {project.icon}
                    </div>
                    <div>
                      <span
                        className={`text-xs uppercase tracking-wider text-${project.color} font-display`}
                      >
                        {project.category}
                      </span>
                    </div>
                  </div>
                  {project.github && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </Button>
                  )}
                </div>

                {/* Title and description */}
                <h3 className="text-xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tools/Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-muted/50 border border-border/30 text-foreground/80"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Hover indicator */}
                <div className="mt-4 flex items-center gap-2 text-primary text-sm font-display opacity-0 group-hover:opacity-100 transition-opacity">
                  View Details <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
