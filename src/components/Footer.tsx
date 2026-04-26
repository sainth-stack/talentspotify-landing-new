import Link from "next/link";
import logo from "@/assets/logo.png";
import { Award } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "TalentSpotify Core", href: "/#product-core" },
    { label: "TalentSpotify Perform", href: "/#product-perform" },
    { label: "TARA AI", href: "/#product-tara" },
    { label: "Pricing", href: "/#pricing" },
    { label: "ROI Calculator", href: "/roi-calculator" },
  ],
  Solutions: [
    { label: "Performance Management", href: "/performance-management-software-india" },
    { label: "OKR Software", href: "/okr-software-india" },
    { label: "Oracle Fusion Integration", href: "/oracle-fusion-performance-management" },
    { label: "Employee Rewards", href: "/employee-rewards-platform" },
    { label: "UAE & GCC", href: "/gcc/uae-performance-management" },
  ],
  Resources: [
    { label: "Blog", href: "/blog" },
    { label: "Customer Stories", href: "/case-study" },
    { label: "HR Toolkit", href: "/toolkit" },
    { label: "Resources", href: "/resources" },
    { label: "Press", href: "/press" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact Sales", href: "/contact" },
  ],
  Legal: [
    { label: "Security", href: "/#security" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "GDPR", href: "/gdpr" },
  ],
};

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container py-20">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-5">
            <img src={logo.src} alt="TalentSpotify" className="h-20 w-auto brightness-0 invert" />
          </div>
          <p className="text-sm leading-relaxed mb-5 text-primary-foreground/60">
            AI-powered performance management built for fairness. Reviews, OKRs, and recognition in one platform.
          </p>
          <a
            href="https://wa.me/918247716036?text=Hi%2C%20I%27d%20like%20to%20speak%20with%20an%20HR%20expert%20about%20TalentSpotify"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary-foreground/80 border border-primary-foreground/20 rounded-lg hover:border-primary-foreground/40 transition-colors"
          >
            💬 WhatsApp Us
          </a>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="text-xs font-bold uppercase tracking-wider mb-5 text-primary-foreground/40">
              {title}
            </h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    {/* STPI + credentials */}
    <div className="border-t border-primary-foreground/10">
      <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-primary-foreground/5 rounded-lg border border-primary-foreground/10">
            <Award className="w-3.5 h-3.5 text-primary-foreground/50" />
            <span className="text-xs font-bold text-primary-foreground/70">STPI Next Gen</span>
          </div>
        </div>
        <div className="text-center md:text-left">
          <p className="text-xs text-primary-foreground/40">
            © 2026 TalentSpotify Private Limited. All rights reserved.
          </p>
          <p className="text-[10px] text-primary-foreground/30 mt-0.5">CIN: U72900KA2022PTC157845</p>
        </div>
        <div className="flex gap-6">
          {["Privacy", "Terms", "GDPR"].map((l) => (
            <Link
              key={l}
              href={`/${l.toLowerCase()}`}
              className="text-xs text-primary-foreground/40 transition-colors hover:text-primary-foreground/70"
            >
              {l}
            </Link>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
