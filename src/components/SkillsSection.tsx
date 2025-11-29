import { motion } from "framer-motion";

export function SkillsSection() {
  const engineeringSkills = [
    { name: "AutoCAD", level: 85 },
    { name: "Revit", level: 75 },
    { name: "BIM", level: 70 },
    { name: "GIS", level: 80 },
    { name: "Survey", level: 85 },
    { name: "Structural Design", level: 75 },
    { name: "Water Resources", level: 70 },
  ];

  const techSkills = [
    { name: "C Programming", level: 80 },
    { name: "Python", level: 75 },
    { name: "HTML", level: 85 },
    { name: "Git", level: 80 },
    { name: "GitHub", level: 85 },
  ];

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">Skills & Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto glow-purple" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Engineering Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 rounded-2xl space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">🏗️</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-primary">
                Civil Engineering
              </h3>
            </div>
            <div className="space-y-5">
              {engineeringSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-foreground/90">
                      {skill.name}
                    </span>
                    <span className="text-primary font-display">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                      className="h-full bg-gradient-to-r from-primary to-secondary glow-cyan"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tech Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 rounded-2xl space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-secondary">
                Technology & Coding
              </h3>
            </div>
            <div className="space-y-5">
              {techSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-foreground/90">
                      {skill.name}
                    </span>
                    <span className="text-secondary font-display">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                      className="h-full bg-gradient-to-r from-secondary to-primary glow-purple"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
