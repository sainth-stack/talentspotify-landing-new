import ScrollReveal from "@/components/ScrollReveal";
import { Heart, MapPin, ArrowRight, Shield, Handshake, Trophy, ShieldCheck, Award, AlertTriangle } from "lucide-react";
import founderAneel from "@/assets/founder-aneel.jpg";
import founderPrashanth from "@/assets/founder-prashanth.jpg";

const leaders = [
  {
    title: "Founder",
    name: "Aneel",
    thesis: "Building AI systems that make performance decisions fair, measurable, and trusted.",
    trust: "Driving product vision, customer outcomes, and the future of fair performance systems.",
    image: founderAneel,
  },
  {
    title: "Co-Founder",
    name: "Prashanth",
    thesis: "Architecting scalable AI and workflow systems that convert people signals into business intelligence.",
    trust: "Building secure, scalable AI systems that transform people decisions into measurable business outcomes.",
    image: founderPrashanth,
  },
];

const values = [
  { icon: <Heart className="w-5 h-5 text-primary" />, title: "Empathy", desc: "We design around manager and employee realities.", border: "border-t-primary/60" },
  { icon: <Shield className="w-5 h-5 text-primary" />, title: "Trustworthy", desc: "Every workflow is built for transparency and fairness.", border: "border-t-primary/40" },
  { icon: <Handshake className="w-5 h-5 text-primary" />, title: "Customer First", desc: "We prioritize adoption, simplicity, and measurable outcomes.", border: "border-t-primary/50" },
  { icon: <Trophy className="w-5 h-5 text-primary" />, title: "Winning Together", desc: "We help HR leaders align people goals with business growth.", border: "border-t-primary/45" },
];

const visionPillars = [
  { icon: <ShieldCheck className="w-6 h-6 text-primary" />, label: "Bias-free reviews", desc: "AI-powered calibration that eliminates unconscious bias from every review cycle." },
  { icon: <Award className="w-6 h-6 text-primary" />, label: "Outcome-based rewards", desc: "Recognition and rewards tied to measurable impact, not subjective opinion." },
  { icon: <AlertTriangle className="w-6 h-6 text-primary" />, label: "Early risk intelligence", desc: "Predictive signals that identify attrition risk before it becomes turnover." },
];

const About = () => (
  <>
    {/* Hero */}
    <section className="py-24 md:py-32 bg-background">
      <div className="container text-center">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-4">About Us</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-5">Build the future of fair work</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">We're a Bengaluru-based team on a mission to make every performance review fair, every goal meaningful, and every recognition timely.</p>
        </ScrollReveal>
      </div>
    </section>

    {/* Mission */}
    <section className="py-20 bg-muted/30 border-y border-border">
      <div className="container max-w-3xl">
        <ScrollReveal>
          <div className="rounded-2xl p-10 bg-foreground">
            <p className="text-xl md:text-2xl italic leading-relaxed text-background/90">
              "We are not building HR software. We are building the infrastructure for organisational trust."
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Founding Story */}
    <section className="py-24 bg-background">
      <div className="container max-w-3xl">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-4">Our Story</p>
          <h2 className="text-3xl font-extrabold text-foreground tracking-tight mb-5">Founding Story</h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            TalentSpotify was born from a simple observation: performance reviews are broken. Managers carry unconscious biases, employees feel unheard, and great work goes unrecognised.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Founded in Bengaluru in 2022, we set out to build an AI-first platform that detects bias before it becomes a decision. Today, we serve 50+ companies across India, with expansion into the UAE and GCC markets.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Leadership — YC / Stripe inspired */}
    <section className="py-28 bg-muted/30 border-y border-border">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-4">Leadership</p>
            <h2 className="text-3xl font-extrabold text-foreground tracking-tight mb-4">Founder-led by deep HRTech and enterprise product expertise</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Built by operators who understand performance systems, people decisions, and scalable AI infrastructure.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {leaders.map((leader, i) => (
            <ScrollReveal key={leader.name} delay={i * 150}>
              <div className="group bg-background rounded-[20px] border border-border p-8 md:p-10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-250 h-full flex flex-col items-center text-center relative overflow-hidden">
                {/* Subtle top gradient glow */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />

                {/* Portrait */}
                <div className="w-[130px] h-[130px] rounded-full overflow-hidden border-2 border-border/60 mb-6 ring-4 ring-primary/5">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    width={140}
                    height={140}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-300"
                  />
                </div>

                {/* Name & role */}
                <h3 className="text-xl font-bold text-foreground mb-1">{leader.name}</h3>
                <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-4">{leader.title}</p>

                {/* Thesis */}
                <p className="text-sm italic text-muted-foreground leading-relaxed mb-5 max-w-xs">"{leader.thesis}"</p>


                {/* Trust line */}
                <p className="text-xs text-muted-foreground leading-relaxed mt-auto">{leader.trust}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>

    {/* Values Strip */}
    <section className="py-20 bg-background">
      <div className="container">
        <ScrollReveal>
          <h2 className="text-3xl font-extrabold text-foreground tracking-tight text-center mb-14">The values behind every product decision</h2>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {values.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 80}>
              <div className={`bg-background rounded-xl border border-border border-t-[3px] ${v.border} p-6 text-center hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 h-full`}>
                <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center mx-auto mb-4">{v.icon}</div>
                <h3 className="text-sm font-bold text-foreground mb-1.5">{v.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={400}>
          <p className="text-center text-sm text-muted-foreground mt-10">
            Trusted by growing companies across IT, SaaS, manufacturing, hospitality, and social enterprises.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Vision — 2-column split */}
    <section className="py-24 bg-muted/30 border-y border-border">
      <div className="container max-w-5xl">
        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-4">Our Vision</p>
              <h2 className="text-3xl font-extrabold text-foreground tracking-tight mb-6">The future of talent decisions, built on fairness and trust</h2>
              <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                <p>In the next decade, every company will need talent decisions powered by data, fairness, and real business outcomes.</p>
                <p>We envision a future where performance reviews are free from bias, rewards reflect measurable impact, and leaders can identify employee risk before it becomes attrition.</p>
                <p className="font-semibold text-foreground">TalentSpotify exists to help companies make better people decisions that improve retention, trust, and business performance.</p>
              </div>
            </div>
            <div className="space-y-4 md:mt-12">
              {visionPillars.map((pillar, i) => (
                <ScrollReveal key={pillar.label} delay={i * 100}>
                  <div className="bg-background rounded-xl border border-border p-5 hover:shadow-sm transition-all duration-200">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        {pillar.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-foreground mb-1">{pillar.label}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">{pillar.desc}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Backers */}
    <section className="py-24 bg-background border-t border-border">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-4">Our Backers</p>
            <h2 className="text-3xl font-extrabold text-foreground tracking-tight">Investors</h2>
          </div>
        </ScrollReveal>
        <div className="max-w-md mx-auto">
          <ScrollReveal>
            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6 text-center">
              <p className="text-base font-bold text-foreground mb-1">STPI Next Gen</p>
              <p className="text-xs text-muted-foreground">Institutional Backing</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* HQ */}
    <section className="py-20 bg-muted/30 border-t border-border">
      <div className="container text-center">
        <ScrollReveal>
          <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-bold text-foreground mb-2">Headquartered in Bengaluru</h3>
        </ScrollReveal>
      </div>
    </section>
  </>
);

export default About;
