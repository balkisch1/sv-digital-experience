const projects = [
  {
    title: "Luxe Cosmetics Rebrand",
    category: "Branding & Web Design",
    gradient: "from-primary/20 to-electric/10",
  },
  {
    title: "FitPro Social Campaign",
    category: "Reels & Social Media",
    gradient: "from-electric/20 to-primary/10",
  },
  {
    title: "Artisan Café Launch",
    category: "Photo & Video Production",
    gradient: "from-primary/15 to-electric/15",
  },
  {
    title: "TechVault E-Commerce",
    category: "Web Design & Marketing",
    gradient: "from-electric/15 to-primary/20",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding bg-gradient-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-medium tracking-widest uppercase text-primary mb-3 block">
            Our Work
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Selected <span className="text-gradient-gold">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A glimpse into the brands we've helped grow through creative strategy and digital execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-xl border border-border hover:border-primary/30 transition-all duration-500 cursor-pointer opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.15 + i * 0.12}s` }}
            >
              <div className={`aspect-[16/10] bg-gradient-to-br ${project.gradient} flex items-end p-8 transition-transform duration-500 group-hover:scale-[1.03]`}>
                <div className="relative z-10">
                  <span className="text-xs font-medium tracking-wider uppercase text-primary/80 mb-1 block">
                    {project.category}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
                    {project.title}
                  </h3>
                </div>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
