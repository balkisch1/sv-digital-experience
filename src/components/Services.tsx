import { Paintbrush, Globe, Camera, Film, Megaphone, Palette } from "lucide-react";

const services = [
  {
    icon: Paintbrush,
    title: "Content Creation",
    description: "Scroll-stopping visuals and copy that resonate with your audience and drive engagement.",
  },
  {
    icon: Globe,
    title: "Web Design",
    description: "High-converting websites that look stunning, load fast, and reflect your brand identity.",
  },
  {
    icon: Camera,
    title: "Photo & Video",
    description: "Professional photography and cinematic video production tailored for your brand story.",
  },
  {
    icon: Film,
    title: "Reels & Social Media",
    description: "Trending reels and social content designed to maximize reach and build loyal communities.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Data-driven campaigns across platforms to grow your audience and increase conversions.",
  },
  {
    icon: Palette,
    title: "Branding",
    description: "Complete brand identity systems — logos, guidelines, and visual language that stand out.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gradient-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-medium tracking-widest uppercase text-primary mb-3 block">
            What We Do
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Services Built for <span className="text-gradient-gold">Growth</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From concept to execution, we craft every detail to help your brand stand out in the digital space.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group relative p-8 rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 hover:glow-gold-sm opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.1 + i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
