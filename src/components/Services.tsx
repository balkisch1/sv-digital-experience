import { useState } from "react";
import {
  Paintbrush, Globe, Camera, Film, Megaphone, Palette, ArrowRight, Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Paintbrush,
    title: "Content Creation",
    description:
      "Scroll-stopping visuals and copy that resonate with your audience and drive engagement.",
    gradient: "from-purple-500 to-pink-500",
    accent: "#a855f7",
    num: "01",
  },
  {
    icon: Globe,
    title: "Web Design",
    description:
      "High-converting websites that look stunning, load fast, and reflect your brand identity.",
    gradient: "from-blue-500 to-cyan-400",
    accent: "#3b82f6",
    num: "02",
  },
  {
    icon: Camera,
    title: "Photo & Video",
    description:
      "Professional photography and cinematic video production tailored for your brand story.",
    gradient: "from-pink-500 to-rose-500",
    accent: "#ec4899",
    num: "03",
  },
  {
    icon: Film,
    title: "Reels & Social Media",
    description:
      "Trending reels and social content designed to maximise reach and build loyal communities.",
    gradient: "from-violet-500 to-purple-600",
    accent: "#8b5cf6",
    num: "04",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Data-driven campaigns across platforms to grow your audience and increase conversions.",
    gradient: "from-cyan-400 to-blue-500",
    accent: "#22d3ee",
    num: "05",
  },
  {
    icon: Palette,
    title: "Branding",
    description:
      "Complete brand identity systems — logos, guidelines, and visual language that stand out.",
    gradient: "from-orange-500 to-pink-500",
    accent: "#f97316",
    num: "06",
  },
];

/* ─── individual service card ─── */
function ServiceCard({ service, index }) {
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        animationDelay: `${index * 80}ms`,
        boxShadow: hovered
          ? `0 0 40px -8px ${service.accent}80, 0 20px 60px -20px #00000080`
          : "0 4px 24px -4px #00000060",
        transform: hovered ? "translateY(-6px) scale(1.01)" : "translateY(0) scale(1)",
        transition: "box-shadow 0.35s ease, transform 0.35s ease",
      }}
      className="relative rounded-2xl bg-white/5 border border-white/10 p-6 overflow-hidden flex flex-col gap-5 cursor-pointer backdrop-blur-sm"
    >
      {/* shimmer border on hover */}
      {hovered && (
        <div
          className={`absolute inset-0 rounded-2xl opacity-20 bg-gradient-to-br ${service.gradient} pointer-events-none`}
        />
      )}

      {/* top row: icon + number */}
      <div className="flex items-start justify-between">
        {/* icon pill */}
        <div
          className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} shadow-lg`}
          style={{ boxShadow: `0 4px 20px -4px ${service.accent}80` }}
        >
          <Icon size={22} color="#fff" strokeWidth={1.8} />
        </div>

        {/* service number */}
        <span className="text-xs font-mono font-bold tracking-widest text-white/20 select-none">
          {service.num}
        </span>
      </div>

      {/* title */}
      <h3 className="text-lg font-bold text-white leading-snug">{service.title}</h3>

      {/* description */}
      <p className="text-sm text-white/55 leading-relaxed flex-1">{service.description}</p>

      {/* learn more */}
      <div className="flex items-center gap-1 mt-auto">
        <span
          className={`text-xs font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
        >
          Learn more
        </span>
        <ArrowRight
          size={13}
          className={`transition-transform duration-300 ${hovered ? "translate-x-1" : ""}`}
          style={{ color: service.accent }}
        />
      </div>
    </div>
  );
}

/* ─── main page ─── */
export default function Services() {
  return (
    <div className="relative min-h-screen bg-[#080b14] text-white overflow-hidden py-24 px-4">
      {/* ── background blobs ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #7c3aed, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full opacity-15 blur-3xl"
          style={{ background: "radial-gradient(circle, #0ea5e9, transparent 70%)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #ec4899, transparent 70%)" }}
        />
      </div>

      {/* ── floating dots ── */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/30 animate-pulse"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 4 + 2}s`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* ── content wrapper ── */}
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* header */}
        <div className="text-center mb-16 flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-white/60 tracking-widest uppercase backdrop-blur-sm">
            <Sparkles size={13} className="text-violet-400" />
            What We Do
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
            Services Built for{" "}
            <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Growth
            </span>
          </h2>

          <p className="max-w-lg text-white/50 text-base leading-relaxed">
            From concept to execution, we craft every detail to help your brand stand out in the
            digital space.
          </p>
        </div>

        {/* services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="inline-block rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-10 py-10 max-w-xl w-full">
            <h3 className="text-2xl font-bold mb-2">Ready to elevate your brand?</h3>
            <p className="text-white/50 text-sm mb-6">
              Let's discuss how we can help you achieve your goals.
            </p>
            <button className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-violet-500 to-pink-500 hover:from-violet-400 hover:to-pink-400 transition-all duration-200 shadow-lg hover:shadow-violet-500/40">
              Get Started
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}