import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="relative">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="relative py-8 border-t border-border/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Nirdip Sijapati. Built with passion for engineering & technology.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
