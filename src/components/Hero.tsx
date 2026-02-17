import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Creative studio workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      {/* Glow accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-electric/5 blur-[120px] animate-glow-pulse" style={{ animationDelay: "0s" }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-primary/5 blur-[100px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <span className="text-xs font-medium tracking-widest uppercase text-primary">
            Digital Marketing & Creative Studio — Tunisia
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.25s" }}>
          We Build Digital Experiences
          <br />
          <span className="text-gradient-gold">That Convert</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 opacity-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          Creative content, digital marketing & web design solutions crafted to
          elevate your brand and drive real results.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.55s" }}>
          <Button variant="gold" size="lg" className="text-base px-8" asChild>
            <a href="#contact">
              Get a Quote <ArrowRight className="ml-1" size={18} />
            </a>
          </Button>
          <Button variant="ghost-light" size="lg" className="text-base px-8" asChild>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-1" size={18} /> DM for Business
            </a>
          </Button>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
