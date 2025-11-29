import { motion } from "framer-motion";
import { Building2, Code, MapPin, GraduationCap } from "lucide-react";

export function AboutSection() {
  const features = [
    {
      icon: <Building2 className="w-6 h-6" />,
      label: "Civil Engineering Focus",
      description: "Dam, Bridge & Hydropower Design",
    },
    {
      icon: <Code className="w-6 h-6" />,
      label: "Tech Enthusiast",
      description: "Programming & Development",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      description: "NPJ, Banke, Nepal",
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      label: "Education",
      description: "IOE Purwanchal Campus",
    },
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background gradient */}
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
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto glow-cyan" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 rounded-2xl space-y-6"
          >
            <p className="text-lg text-foreground/90 leading-relaxed">
              Myself <span className="text-primary font-semibold">Nirdip Sijapati</span> from{" "}
              <span className="text-secondary font-semibold">NPJ, Banke</span>, currently pursuing my bachelor's degree in{" "}
              <span className="text-primary font-semibold">Civil Engineering</span> at{" "}
              <span className="text-secondary font-semibold">IOE (Purwanchal Campus)</span>.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              I am highly enthusiastic about the design of{" "}
              <span className="text-gradient font-semibold">
                dams, reservoirs, bridges, hydropower structures,
              </span>{" "}
              and modern civil engineering systems.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              Alongside engineering, I am passionate about{" "}
              <span className="text-secondary font-semibold">technology and coding</span>. I am currently in my{" "}
              <span className="text-primary font-semibold">second year</span>.
            </p>
          </motion.div>

          {/* Feature cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card p-6 rounded-xl text-center space-y-3 group cursor-pointer"
              >
                <div className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors glow-cyan">
                  {feature.icon}
                </div>
                <h3 className="font-display font-semibold text-sm">
                  {feature.label}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
