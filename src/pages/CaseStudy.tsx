import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import {
  Target, Smartphone, BarChart3, Brain, Globe2, Users, Heart, Award,
  ChevronDown, ChevronUp, ArrowRight, Mic, Languages, TrendingUp
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

/* ─── Animated KPI Counter ─── */
const AnimatedKPI = ({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.round(eased * value);
      setDisplay(start);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, value]);

  return <span ref={ref}>{prefix}{display}{suffix}</span>;
};

/* ─── Hero ─── */
const CaseStudyHero = () => (
  <section className="relative py-24 md:py-32 overflow-hidden bg-dark">
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, hsl(var(--gold) / 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 30%, hsl(var(--teal) / 0.1) 0%, transparent 50%)" }} />
    <div className="container relative z-10 text-center max-w-4xl">
      <ScrollReveal>
        <p className="text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-4">Enterprise Case Study</p>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground mb-5 leading-tight">
          Where Technology Meets Human Values
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto" style={{ color: "hsl(var(--ink) / 0.5)" }}>
          Balancing AI efficiency with ethical human intelligence
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {["Sustainable textile enterprise", "400–500 employees", "India + EU footprint"].map((tag) => (
            <span key={tag} className="px-4 py-2 rounded-full border border-border bg-dark-2/50 text-sm text-primary-foreground/70">{tag}</span>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

/* ─── Challenge Cards ─── */
const challenges = [
  { icon: <Target className="w-6 h-6" />, title: "Low OKR Linkage", desc: "<40% employees linked daily work to OKRs, making goal alignment invisible to leadership." },
  { icon: <Smartphone className="w-6 h-6" />, title: "Desktop-Only Tools Failed", desc: "Field workers on shop floors and farms had zero access to desktop-based performance systems." },
  { icon: <BarChart3 className="w-6 h-6" />, title: "Fragmented Visibility", desc: "WhatsApp groups + spreadsheets blocked real-time visibility across 4 countries." },
  { icon: <Globe2 className="w-6 h-6" />, title: "Scaling Outpaced Systems", desc: "Global expansion into EU markets outpaced existing people management infrastructure." },
];

const ChallengeSection = () => (
  <section className="py-20 bg-surface-3">
    <div className="container max-w-5xl">
      <ScrollReveal>
        <p className="text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-2 text-center">The Challenge</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-12 text-center">What They Were Up Against</h2>
      </ScrollReveal>
      <div className="grid sm:grid-cols-2 gap-6">
        {challenges.map((c, i) => (
          <ScrollReveal key={c.title} delay={i * 100}>
            <div className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg transition-shadow h-full">
              <div className="w-12 h-12 rounded-xl bg-destructive/10 text-destructive flex items-center justify-center mb-4">{c.icon}</div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Solution Split ─── */
const aiFeatures = [
  { icon: <Target className="w-5 h-5" />, label: "OKR Cascade Engine" },
  { icon: <Smartphone className="w-5 h-5" />, label: "Mobile-first Interface" },
  { icon: <BarChart3 className="w-5 h-5" />, label: "Live Dashboards" },
  { icon: <Brain className="w-5 h-5" />, label: "AI Review Summaries" },
];

const humanFeatures = [
  { icon: <Languages className="w-5 h-5" />, label: "Regional Language App" },
  { icon: <Users className="w-5 h-5" />, label: "On-Ground Human Training" },
  { icon: <Heart className="w-5 h-5" />, label: "Purpose-led OKRs" },
  { icon: <Award className="w-5 h-5" />, label: "Dignity in Performance" },
];

const SolutionSection = () => (
  <section className="py-20 bg-background">
    <div className="container max-w-5xl">
      <ScrollReveal>
        <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-2 text-center">The Solution</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-12 text-center">AI Power + Human Wisdom</h2>
      </ScrollReveal>
      <div className="grid md:grid-cols-2 gap-8">
        <ScrollReveal>
          <div className="rounded-2xl border border-primary/20 bg-primary/[0.03] p-8 h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center"><Brain className="w-5 h-5" /></div>
              <h3 className="font-display text-xl font-semibold text-foreground">AI Technology</h3>
            </div>
            <div className="space-y-4">
              {aiFeatures.map((f) => (
                <div key={f.label} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">{f.icon}</div>
                  {f.label}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <div className="rounded-2xl border border-teal/20 bg-teal/[0.03] p-8 h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-teal/10 text-teal flex items-center justify-center"><Heart className="w-5 h-5" /></div>
              <h3 className="font-display text-xl font-semibold text-foreground">Human-Centred Design</h3>
            </div>
            <div className="space-y-4">
              {humanFeatures.map((f) => (
                <div key={f.label} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-8 h-8 rounded-lg bg-teal/10 text-teal flex items-center justify-center shrink-0">{f.icon}</div>
                  {f.label}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

/* ─── Outcomes ─── */
const outcomes = [
  { value: 82, suffix: "%", label: "Monthly Active Platform Usage", color: "text-primary" },
  { value: 90, suffix: "%", label: "Employees with Defined OKRs", color: "text-teal" },
  { value: 87, suffix: "%", label: "Quarterly Review Completion", color: "text-primary" },
  { value: 12, suffix: "%", label: "Lower Voluntary Attrition", color: "text-teal" },
  { value: 28, suffix: "%", label: "Better On-Time Task Completion", color: "text-gold" },
];

const OutcomesSection = () => (
  <section className="py-20 bg-dark">
    <div className="container max-w-5xl">
      <ScrollReveal>
        <p className="text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-2 text-center">Measurable Outcomes</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-foreground mb-12 text-center">Results That Matter</h2>
      </ScrollReveal>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
        {outcomes.map((o, i) => (
          <ScrollReveal key={o.label} delay={i * 100}>
            <div className="text-center p-5 rounded-2xl bg-primary-foreground/[0.06] border border-primary-foreground/10 backdrop-blur-sm">
              <p className={`font-display text-3xl md:text-4xl font-bold ${o.color}`}>
                <AnimatedKPI value={o.value} suffix={o.suffix} />
              </p>
              <p className="text-xs text-muted-foreground mt-2 leading-snug" style={{ color: "hsl(var(--ink) / 0.4)" }}>{o.label}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

/* ─── TARA Roadmap ─── */
const TARASection = () => (
  <section className="py-20 bg-background">
    <div className="container max-w-4xl">
      <ScrollReveal>
        <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/[0.04] to-teal/[0.04] p-8 md:p-12 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-2">Coming Next</p>
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-3">TARA – Talent AI Review Assistant</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6">
            Voice-first multilingual reviews with auto OKR updates — designed for frontline workers who speak, not type.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { icon: <Mic className="w-4 h-4" />, label: "Voice-First Input" },
              { icon: <Languages className="w-4 h-4" />, label: "Multilingual" },
              { icon: <TrendingUp className="w-4 h-4" />, label: "Auto OKR Sync" },
            ].map((f) => (
              <span key={f.label} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                {f.icon} {f.label}
              </span>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

/* ─── Implementation Gallery ─── */
const galleryCards = [
  { title: "Field Training", desc: "On-ground facilitators training field workers on mobile-first OKR tools across rural manufacturing sites." },
  { title: "Shop-Floor Onboarding", desc: "Interactive onboarding sessions for shop-floor supervisors using regional language interfaces." },
  { title: "Regional Language Interface", desc: "App interface adapted for Hindi, Tamil, Telugu, and Dutch — ensuring dignity and accessibility." },
  { title: "Adhoc Task Tracking", desc: "Real-time task tracking for ad-hoc assignments, visible to both field workers and leadership." },
];

const GallerySection = () => (
  <section className="py-20 bg-surface-3">
    <div className="container max-w-5xl">
      <ScrollReveal>
        <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-2 text-center">Real Implementation</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-12 text-center">From Factory Floor to Dashboard</h2>
      </ScrollReveal>
      <Carousel opts={{ align: "start", loop: true }} className="w-full">
        <CarouselContent className="-ml-4">
          {galleryCards.map((card, i) => (
            <CarouselItem key={card.title} className="pl-4 md:basis-1/2">
              <ScrollReveal delay={i * 100}>
                <div className="rounded-2xl border border-border bg-card overflow-hidden h-full shadow-sm hover:shadow-xl transition-shadow">
                  <div className={`h-52 flex items-center justify-center relative overflow-hidden ${
                    ["bg-dark", "bg-dark-2", "bg-cta-dark", "bg-primary-dark"][i]
                  }`}>
                    <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
                    <div className="w-20 h-20 rounded-2xl bg-primary-foreground/15 backdrop-blur-sm text-primary-foreground flex items-center justify-center border border-primary-foreground/20 shadow-lg">
                      {[<Users className="w-10 h-10" />, <Smartphone className="w-10 h-10" />, <Languages className="w-10 h-10" />, <BarChart3 className="w-10 h-10" />][i]}
                    </div>
                    <p className="absolute bottom-3 left-4 text-primary-foreground/60 text-xs font-medium tracking-wider uppercase">{["Training", "Onboarding", "Accessibility", "Tracking"][i]}</p>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">{card.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-4 md:-left-12" />
        <CarouselNext className="-right-4 md:-right-12" />
      </Carousel>
    </div>
  </section>
);

/* ─── Final CTA ─── */
const CaseStudyCTA = () => (
  <section className="py-20 bg-dark">
    <div className="container text-center max-w-2xl">
      <ScrollReveal>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-foreground mb-4">Ready for Your Frontline Workforce?</h2>
        <p className="text-muted-foreground mb-8" style={{ color: "hsl(var(--ink) / 0.5)" }}>See how TalentSpotify works for field teams, factory floors, and distributed workforces.</p>
        <Link
          to="/#book-demo"
          className="inline-flex items-center gap-2 px-8 py-4 bg-cta-dark text-primary-foreground font-semibold rounded-xl transition-all hover:-translate-y-px hover:shadow-lg text-lg hover:bg-primary-dark"
        >
          Book Frontline Workforce Demo <ArrowRight className="w-5 h-5" />
        </Link>
      </ScrollReveal>
    </div>
  </section>
);

/* ─── Page ─── */
const CaseStudy = () => (
  <>
    <CaseStudyHero />
    <ChallengeSection />
    <SolutionSection />
    <OutcomesSection />
    <TARASection />
    <GallerySection />
    <CaseStudyCTA />
  </>
);

export default CaseStudy;
