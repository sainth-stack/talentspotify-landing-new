import { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

const productLinks = [
  { label: "TalentSpotify Core", desc: "HR Operations", href: "/#product-core" },
  { label: "TalentSpotify Perform", desc: "Performance Management", href: "/#product-perform" },
  { label: "TARA AI", desc: "Voice Agent for Fair Reviews", href: "/#product-tara" },
];

const whyUsLinks = [
  { label: "Integrations", desc: "Works with your tools", href: "/#integrations" },
  { label: "Security & Compliance", desc: "Enterprise-grade protection", href: "/#security" },
  { label: "Success Stories", desc: "Real customer outcomes", href: "/#success-stories" },
  { label: "ROI Calculator", desc: "See your savings", href: "/roi-calculator" },
];

const resourceLinks = [
  { label: "Customer Stories", href: "/case-study" },
  { label: "HR Toolkit", href: "/toolkit" },
  { label: "Resources", href: "/resources" },
  { label: "Press", href: "/press" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Sales", href: "/contact" },
];

const navLinks = [
  { label: "Product", href: "/#products", dropdown: productLinks },
  { label: "Why Us", href: "/#integrations", dropdown: whyUsLinks },
  { label: "Resources", href: "/resources", dropdown: resourceLinks },
  { label: "Pricing", href: "/#pricing" },
  { label: "Company", href: "/about", dropdown: companyLinks },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleHashLink = useCallback((href: string) => {
    setOpenDropdown(null);
    setMobileOpen(false);
    if (href.startsWith("/#")) {
      const hash = href.substring(1);
      if (location.pathname === "/") {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/" + hash);
      }
    } else {
      navigate(href);
    }
  }, [location.pathname, navigate]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-300 border-b ${
        scrolled ? "bg-background shadow-sm border-border" : "bg-background/95 backdrop-blur-xl border-transparent"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="TalentSpotify" className="h-14 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
          {navLinks.map((link) => (
            <div key={link.label} className="relative">
              {link.dropdown ? (
                <button
                  onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                  className="px-3 py-2 text-[13px] font-medium text-foreground/70 hover:text-foreground rounded-lg transition-colors flex items-center gap-1"
                >
                  {link.label}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`} />
                </button>
              ) : (
                <Link
                  to={link.href}
                  className="px-3 py-2 text-[13px] font-medium text-foreground/70 hover:text-foreground rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              )}

              {link.dropdown && openDropdown === link.label && (
                <div className="absolute top-full left-0 mt-2 w-60 bg-background border border-border rounded-xl shadow-lg py-2 z-50">
                  {link.dropdown.map((sub: any) => (
                    <button
                      key={sub.label}
                      onClick={() => handleHashLink(sub.href)}
                      className="block w-full text-left px-4 py-2.5 hover:bg-surface-3 transition-colors"
                    >
                      <span className="text-sm font-medium text-foreground">{sub.label}</span>
                      {sub.desc && <span className="block text-xs text-muted-foreground mt-0.5">{sub.desc}</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/#book-demo"
            className="px-4 py-2 text-[13px] font-medium text-foreground/70 hover:text-foreground transition-colors"
          >
            Login
          </Link>
          <Link
            to="/#book-demo"
            className="px-5 py-2.5 text-[13px] font-bold text-primary-foreground bg-primary rounded-lg hover:bg-primary-dark transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Request Demo
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-[72px] left-0 right-0 bg-background border-b border-border shadow-lg lg:hidden max-h-[80vh] overflow-y-auto">
          <div className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                      className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-foreground/70 hover:text-foreground rounded-lg transition-colors"
                    >
                      {link.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`} />
                    </button>
                    {openDropdown === link.label && (
                      <div className="ml-4 border-l-2 border-border pl-2">
                        {link.dropdown.map((sub: any) => (
                          <button
                            key={sub.label}
                            onClick={() => handleHashLink(sub.href)}
                            className="block w-full text-left px-4 py-2.5 text-sm text-foreground/60 hover:text-foreground transition-colors"
                          >
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.href}
                    className="block px-4 py-3 text-sm font-medium text-foreground/70 hover:text-foreground rounded-lg transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="flex flex-col gap-3 mt-3 pt-3 border-t border-border">
              <Link
                to="/#book-demo"
                className="px-4 py-3 text-sm font-bold text-primary-foreground bg-primary rounded-lg text-center"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
