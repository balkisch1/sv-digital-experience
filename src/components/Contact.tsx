import { Button } from "@/components/ui/button";
import { useState } from "react";

import {
  Mail,
  Instagram,
  ArrowRight,
  Sparkles,
  Facebook,
  Linkedin,
  Twitter,
  MapPin,
  Phone,
  Heart,
} from "lucide-react";


const Contact = () => {
  const [showForm, setShowForm] = useState(false);
const [submitted, setSubmitted] = useState(false);  
  const socialLinks = [
    { icon: Instagram, label: "Instagram", link: "https://instagram.com", gradient: "from-pink-500 to-purple-500" },
    { icon: Facebook, label: "Facebook", link: "https://facebook.com", gradient: "from-blue-500 to-cyan-500" },
    { icon: Linkedin, label: "LinkedIn", link: "https://linkedin.com", gradient: "from-blue-600 to-blue-400" },

  ];

  const quickLinks = [
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const contactItems = [
    { icon: Mail, label: "Email", value: "hello@svdigital.tn", link: "mailto:hello@svdigital.tn" },
    { icon: Phone, label: "Phone", value: "+216 XX XXX XXX", link: "tel:+216XXXXXXXX" },
    { icon: MapPin, label: "Location", value: "Sousse, Tunisia", link: "https://maps.google.com" },
  ];

  return (
    <section id="contact" className="relative section-padding overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* CTA Section */}
        <div className="text-center mb-20">

          <div className="inline-block mb-6 opacity-0 animate-fade-up">
            <div className="relative px-6 py-2 rounded-full border-2 border-purple-500/40 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-lg animate-pulse" />
              <span className="relative flex items-center gap-2 text-sm font-bold tracking-widest uppercase">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                  Let's Work Together
                </span>
              </span>
            </div>
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 opacity-0 animate-fade-up">
            Ready to Elevate Your Brand?
          </h2>

          <p className="text-sm md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-12 opacity-0 animate-fade-up">
            Get in touch and let's discuss how we can bring your vision to life.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16 opacity-0 animate-fade-up">
        <Button
  variant="electric" // change 'gold' to 'purple' or whatever variant you want
  size="lg"
  onClick={() => setShowForm(!showForm)}
>
  <span className="flex items-center gap-2">
    <Mail className="w-5 h-5" />
    Get a Quote
    <ArrowRight className="w-5 h-5" />
  </span>
</Button>

{showForm && (
  <div className="max-w-xl mx-auto mt-10 p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md animate-fade-up">
    
    {!submitted ? (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
        className="space-y-5"
      >
        <input
          type="text"
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 focus:border-purple-500 outline-none text-white placeholder-gray-400"
        />

        <input
          type="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 focus:border-purple-500 outline-none text-white placeholder-gray-400"
        />

        <textarea
          placeholder="Tell us about your project..."
          rows={4}
          required
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 focus:border-purple-500 outline-none text-white placeholder-gray-400"
        />

        <Button type="submit" variant="electric" className="w-full">
          Send Message
        </Button>
      </form>
    ) : (
      <div className="text-center py-6">
        <h4 className="text-xl font-semibold text-green-400 mb-2">
          Message Sent Successfully ✨
        </h4>
        <p className="text-gray-400 text-sm">
          We’ll get back to you very soon.
        </p>
      </div>
    )}

  </div>
)}


            <Button variant="outline" size="lg" asChild>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <span className="flex items-center gap-2">
                  <Instagram className="w-5 h-5" />
                  Follow Us
                </span>
              </a>
            </Button>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16 opacity-0 animate-fade-up">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-500 mb-1">{item.label}</div>
                    <div className="text-sm font-semibold text-white">
                      {item.value}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 pt-12">

          <div className="grid md:grid-cols-3 gap-12 mb-12">

            <div>
              <h3 className="text-2xl font-bold text-white mb-3">
                SV Digital Studio
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                Creative digital agency specializing in branding and marketing.
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <MapPin className="w-3 h-3" />
                Based in Sousse, Tunisia
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-purple-400 transition-colors inline-flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold text-white mb-4">Stay Connected</h4>
              <div className="flex gap-3 mb-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition"
                  >
                    <social.icon className="w-5 h-5 text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-white/10 flex justify-between">
            <p className="text-sm text-gray-500 flex items-center gap-2">
              © {new Date().getFullYear()} SV Digital Studio. Made 
              in Tunisia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
