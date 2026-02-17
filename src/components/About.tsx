import { Award, Users, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <span className="text-xs font-medium tracking-widest uppercase text-primary mb-3 block">
              About Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              A Creative Studio That
              <br />
              <span className="text-gradient-gold">Means Business</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              SV Digital Studio is a Tunisian creative agency specializing in digital marketing,
              content creation, and web design. We partner with brands, entrepreneurs, and
              businesses to build powerful online presences that convert visitors into loyal
              customers.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team blends creative storytelling with performance marketing strategies,
              ensuring every pixel and every campaign serves your growth objectives.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
            {[
              { icon: Award, stat: "50+", label: "Projects Delivered" },
              { icon: Users, stat: "30+", label: "Happy Clients" },
              { icon: Zap, stat: "3+", label: "Years of Experience" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-5 p-6 rounded-xl bg-gradient-card border border-border"
              >
                <div className="w-14 h-14 rounded-lg bg-electric/10 flex items-center justify-center shrink-0">
                  <item.icon className="text-electric" size={26} />
                </div>
                <div>
                  <div className="font-display text-2xl font-bold text-foreground">{item.stat}</div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
