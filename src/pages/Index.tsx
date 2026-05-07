import Head from "next/head";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import sunonixLogo from "@/assets/clients/sunonix.png";
import oromoLogo from "@/assets/clients/oromo.png";
import grameenaLogo from "@/assets/clients/grameena.png";
import raddisLogo from "@/assets/clients/raddis.png";
import kenaiLogo from "@/assets/clients/kenai.png";
import vihangaLogo from "@/assets/clients/vihanga.png";
import aiCalibrationImg from "@/assets/screenshots/ai-calibration.jpg";
import okrDashboardImg from "@/assets/screenshots/okr-dashboard.jpg";
import rewardsEngineImg from "@/assets/screenshots/rewards-engine.jpg";
import taraHeroImg from "@/assets/screenshots/tara-voice-agent.jpg";
import { useState, useEffect, useCallback } from "react";
import { baseURL } from "@/const";
import { organizationSchema } from "@/lib/schemas";
import {
  Target, Shield, Trophy, Zap, Users, BarChart3, ChevronDown, ChevronRight,
  Star, Award, CheckCircle2, ArrowRight, Clock, Eye, TrendingUp, Lock,
  FileCheck, Headphones, MessageSquare, Settings, LayoutDashboard, UserCheck,
  Bell, Brain, LineChart, Layers, ShieldCheck, Database, KeyRound, Server,
  Workflow, AlertTriangle, Gauge, CalendarCheck, Download, ExternalLink,
  Scale, Lightbulb, Heart, Link2, Play, Mic, BarChart, Globe, CheckCircle
} from "lucide-react";

/* ─── Hero ─── */
const Hero = () => (
  <section className="relative overflow-hidden bg-background">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-accent/[0.03]" />
    <div className="container relative py-28 md:py-36 lg:py-44">
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <div>
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-8 bg-accent/10 text-accent border border-accent/20">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot" />
              AI-POWERED PERFORMANCE PLATFORM
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="font-display text-[2.75rem] md:text-[3.5rem] lg:text-[3.75rem] font-extrabold text-foreground leading-[1.08] tracking-tight mb-6">
              Eliminate Bias.{" "}
              <span className="text-primary">Empower Performance.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed mb-3 max-w-xl font-body">
              AI-Powered Reviews Built for Fairness
            </p>
            <p className="text-base text-muted-foreground mb-10 max-w-xl leading-relaxed">
              TalentSpotify combines TARA voice agent + OKR alignment to deliver fair, transparent performance management. Trusted by 50+ India's leading companies.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={250}>
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <a href="#book-demo" className="px-8 py-4 bg-primary text-primary-foreground text-base font-bold rounded-lg hover:bg-primary-dark transition-all duration-200 shadow-lg hover:shadow-xl text-center">
                Request Demo
              </a>
              <a href="#book-demo" className="px-8 py-4 bg-accent text-accent-foreground text-base font-bold rounded-lg hover:bg-accent/90 transition-all duration-200 shadow-md hover:shadow-lg text-center">
                Start Free Trial
              </a>
              <Link href="/roi-calculator" className="px-8 py-4 text-foreground font-semibold rounded-lg border-2 border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-200 text-center">
                Calculate Your ROI
              </Link>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={350}>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-2xl" />
            <img
              src={taraHeroImg}
              alt="TalentSpotify — AI-powered performance reviews, OKR dashboard, and fairness scoring"
              className="relative w-full rounded-2xl shadow-xl border border-border"
              width={1280}
              height={800}
            />
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

/* ─── Recognition & Trust Badge Ribbon ─── */
const CredentialBadges = () => {
  const badges = [
    { emoji: "🚀", name: "STPI Seed Funded", subtitle: "Govt-backed innovation", variant: "highlight" as const },
    { emoji: "🏆", name: "Best Engagement Product", subtitle: "National HR Awards 2024", variant: "default" as const },
    { emoji: "🏆", name: "Startup of the Year", subtitle: "HackerNoon Winner 2024", variant: "default" as const },
    { emoji: "🏅", name: "Top Karnataka Startup", subtitle: "EIILM Awards 2025", variant: "gold" as const },
    { emoji: "🎓", name: "HR Summit 2026", subtitle: "EI Edge Case Study", variant: "default" as const },
    { emoji: "📍", name: "Bengaluru HRTech", subtitle: "AI OKRs, Rewards & Reviews", variant: "default" as const },
  ];

  const variantStyles = {
    highlight: "bg-indigo-50 border-indigo-200",
    gold: "bg-amber-50 border-amber-200",
    default: "bg-white border-slate-200",
  };

  return (
    <section className="py-10 bg-surface-3 border-y border-border">
      <div className="max-w-7xl mx-auto px-4">
        {/* Mobile: horizontal scroll | Tablet+: flex wrap centered */}
        <div className="flex gap-3 sm:gap-4 overflow-x-auto sm:overflow-visible sm:flex-wrap sm:justify-center pb-2 sm:pb-0 snap-x snap-mandatory scrollbar-hide">
          {badges.map((b) => (
            <div
              key={b.name}
              className={`flex items-center gap-3 px-5 py-4 min-h-[88px] min-w-[240px] max-w-[260px] sm:min-w-[190px] sm:max-w-[220px] shrink-0 sm:shrink rounded-2xl border shadow-[0_1px_3px_rgba(0,0,0,0.04)] snap-start sm:hover:-translate-y-0.5 sm:transition-transform ${variantStyles[b.variant]}`}
            >
              <span className="text-xl flex-shrink-0 leading-none" aria-hidden="true">{b.emoji}</span>
              <div className="min-w-0">
                <p className="text-[15px] font-semibold leading-5 text-slate-900 line-clamp-2">{b.name}</p>
                <p className="text-[13px] leading-5 text-slate-500 line-clamp-2">{b.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── Trust Logo Bar ─── */
const TrustLogoBar = () => (
  <section className="py-16 bg-background">
    <div className="container">
      <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium text-center mb-10">Trusted by HR leaders across industries</p>
      <div className="flex flex-wrap justify-center gap-12 md:gap-16 items-center mb-10">
        {[
          { src: sunonixLogo, alt: "Sunonix" },
          { src: oromoLogo, alt: "Oromo Legacy Leadership & Advocacy Association" },
          { src: grameenaLogo, alt: "Grameena Vikas Kendram" },
          { src: raddisLogo, alt: "Raddis Cotton" },
          { src: kenaiLogo, alt: "Kenai" },
          { src: vihangaLogo, alt: "Vihanga" },
        ].map((client) => (
          <img
            key={client.alt}
            src={client.src}
            alt={client.alt}
            className="h-9 w-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          />
        ))}
      </div>
    </div>
  </section>
);

/* ─── KPI Proof Strip ─── */
const KPIProofStrip = () => (
  <section className="py-20 bg-foreground">
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
        {[
          { num: "50+", label: "Companies Served" },
          { num: "850+", label: "Employees Onboarded" },
          { num: "60%", label: "Faster Review Cycles" },
          { num: "85%", label: "Adoption Rate in Q1" },
        ].map((m) => (
          <div key={m.label} className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-extrabold text-background tracking-tight font-display">{m.num}</span>
            <span className="text-sm text-background/50 mt-1">{m.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Pain Point Solution Cards ─── */
const PainPointCards = () => (
  <section className="py-28 bg-background">
    <div className="container">
      <ScrollReveal>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-4">The Problems We Solve</p>
          <h2 className="font-display text-3xl md:text-[2.5rem] font-extrabold text-foreground tracking-tight mb-4">
            5 HR Challenges That Cost You Talent & Revenue
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">Every feature is designed to drive measurable business outcomes.</p>
        </div>
      </ScrollReveal>
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
        {[
          { icon: <Scale className="w-6 h-6" />, problem: "Bias in Reviews", desc: "Manager bias skews ratings; affects 65% of reviews", solution: "AI-powered fairness scoring eliminates bias automatically", metric: "60% improvement in fairness" },
          { icon: <Zap className="w-6 h-6" />, problem: "Slow Review Cycles", desc: "Annual reviews take 40+ manager hours", solution: "TARA voice agent reduces time by 60%", metric: "85% adoption rate" },
          { icon: <Target className="w-6 h-6" />, problem: "OKR Misalignment", desc: "Teams don't understand strategy alignment", solution: "Visual OKR cascading with real-time tracking", metric: "85% adoption in Q1" },
          { icon: <Heart className="w-6 h-6" />, problem: "Low Engagement", desc: "Reviews feel like compliance, not growth", solution: "Continuous feedback + recognition in workflow", metric: "70% engagement lift" },
          { icon: <Link2 className="w-6 h-6" />, problem: "Data Silos", desc: "Reviews, goals, engagement data scattered", solution: "Unified platform: Performance + OKRs + Recognition", metric: "4 modules, 1 platform" },
        ].map((card, i) => (
          <ScrollReveal key={card.problem} delay={i * 80}>
            <div className="bg-background rounded-2xl border border-border p-7 h-full flex flex-col hover:shadow-lg hover:border-primary/20 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mb-5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">{card.icon}</div>
              <h3 className="text-sm font-bold text-foreground mb-2">{card.problem}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3 flex-1">{card.desc}</p>
              <div className="pt-4 border-t border-border">
                <p className="text-xs text-foreground/70 mb-2">{card.solution}</p>
                <p className="text-sm font-bold text-accent">{card.metric}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Product Cards (3 Core Products) ─── */
const ProductCards = () => (
  <section id="products" className="py-28 bg-surface-3">
    <div className="container">
      <ScrollReveal>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-4">Our Products</p>
          <h2 className="font-display text-3xl md:text-[2.5rem] font-extrabold text-foreground tracking-tight">
            Three Products. One Platform.
          </h2>
        </div>
      </ScrollReveal>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          {
            id: "product-core",
            name: "TalentSpotify Core",
            tagline: "HR Operations",
            desc: "Unified HR operations platform covering Employee Information, Leave Management, Time & Attendance, and basic ATS.",
            icon: <LayoutDashboard className="w-7 h-7" />,
            metrics: ["4 modules unified", "Single sign-on", "Integrated analytics"],
            img: rewardsEngineImg,
          },
          {
            id: "product-perform",
            name: "TalentSpotify Perform",
            tagline: "Performance Management",
            desc: "Bias-free performance reviews powered by AI fairness scoring, OKR alignment with real-time cascading, continuous feedback loops, and Rewards & Recognition.",
            icon: <BarChart3 className="w-7 h-7" />,
            metrics: ["60% faster reviews", "Real-time fairness score", "85% adoption in Q1"],
            img: aiCalibrationImg,
          },
          {
            id: "product-tara",
            name: "TARA AI",
            tagline: "Voice Agent for Fair Reviews",
            desc: "AI voice agent for fair reviews that captures spoken feedback, converts it into structured performance insights, and reduces manager effort from minutes to seconds.",
            icon: <Mic className="w-7 h-7" />,
            metrics: ["60-second reviews", "92% satisfaction", "85% adoption rate"],
            img: taraHeroImg,
          },
        ].map((product, i) => (
          <ScrollReveal key={product.id} delay={i * 100}>
            <a
              href="#book-demo"
              id={product.id}
              className="bg-background rounded-2xl border border-border overflow-hidden h-full flex flex-col hover:shadow-xl hover:border-primary/40 hover:-translate-y-1.5 transition-all duration-300 group scroll-mt-24 cursor-pointer no-underline"
            >
              <div className="relative overflow-hidden">
                <img src={product.img} alt={product.name} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {product.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{product.name}</h3>
                    <p className="text-xs text-muted-foreground">{product.tagline}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{product.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.metrics.map((m) => (
                    <span key={m} className="px-3 py-1.5 bg-primary/8 text-primary text-xs font-semibold rounded-full">{m}</span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:text-primary-dark transition-colors">
                  See Product <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Feature Showcase Tabs ─── */
const featureTabs = [
  {
    id: "tara",
    label: "TARA Voice Agent",
    headline: "Performance Reviews. Just Speak Them.",
    desc: "Record your feedback. TARA transcribes it into a structured review. No forms. No bias. 60-second demo of voice waveform → transcription → structured review.",
    metrics: ["60% faster reviews", "85% adoption", "92% manager satisfaction"],
    cta: "See TARA in Action",
    img: taraHeroImg,
  },
  {
    id: "bias",
    label: "Bias-Free Reviews",
    headline: "Fair by Design. Fair by Default.",
    desc: "See your fairness metrics in real-time. AI removes unconscious bias from scoring with Gallup India research-backed methodology.",
    metrics: ["Eliminates unconscious bias", "Real-time fairness score", "Gallup India research"],
    cta: "Explore Bias-Free Reviews",
    img: aiCalibrationImg,
  },
  {
    id: "okr",
    label: "OKR Alignment",
    headline: "Strategy to Daily Execution.",
    desc: "Set company goals. Cascade to teams. Align individual goals. Track progress together with real-time visual cascading.",
    metrics: ["85% adoption rate", "Real-time visibility", "Automatic celebration"],
    cta: "See OKR Dashboard",
    img: okrDashboardImg,
  },
  {
    id: "unified",
    label: "Unified Platform",
    headline: "Everything in One Place.",
    desc: "Performance reviews + OKRs + 1:1s + recognition + engagement surveys. One platform, unified data, single sign-on.",
    metrics: ["4 modules unified", "Single sign-on", "Integrated analytics"],
    cta: "Explore Platform",
    img: rewardsEngineImg,
  },
];

const FeatureShowcase = () => {
  const [activeTab, setActiveTab] = useState("tara");
  const tab = featureTabs.find((t) => t.id === activeTab) || featureTabs[0];

  return (
    <section className="py-28 bg-background">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-4">Product</p>
            <h2 className="font-display text-3xl md:text-[2.5rem] font-extrabold text-foreground tracking-tight">
              See How It Works
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {featureTabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  activeTab === t.id
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-background text-muted-foreground hover:text-foreground border border-border"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <ScrollReveal>
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-extrabold text-foreground tracking-tight mb-4">{tab.headline}</h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">{tab.desc}</p>
              <div className="flex flex-wrap gap-3 mb-8">
                {tab.metrics.map((m) => (
                  <span key={m} className="px-3 py-1.5 bg-primary/8 text-primary text-xs font-semibold rounded-full">{m}</span>
                ))}
              </div>
              <a href="#book-demo" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-bold rounded-lg hover:bg-primary-dark transition-all shadow-md">
                {tab.cta} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl blur-xl" />
              <img src={tab.img} alt={tab.headline} className="relative w-full rounded-2xl shadow-xl border border-border" loading="lazy" width={1280} height={800} />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

/* ─── Use Case Grid (4 Roles) ─── */
const useCases = [
  {
    role: "For CEOs",
    icon: <Target className="w-6 h-6" />,
    headline: "Drive Performance. Align Strategy. Build Retention.",
    benefits: ["Real-time visibility across the org", "Analytics dashboard for data-driven decisions", "Retention risk scoring before it's too late"],
    cta: "See CEO Dashboard",
  },
  {
    role: "For HR Leaders",
    icon: <Users className="w-6 h-6" />,
    headline: "Enable Culture of Fairness & Growth",
    benefits: ["Bias elimination in reviews", "Compliance risk reduction", "Automated workflows end-to-end"],
    cta: "Explore HR Features",
  },
  {
    role: "For Managers",
    icon: <MessageSquare className="w-6 h-6" />,
    headline: "Coach Your Team Effectively",
    benefits: ["TARA voice for effortless reviews", "Continuous feedback tools", "Manager coaching & time savings"],
    cta: "Try TARA",
  },
  {
    role: "For Employees",
    icon: <TrendingUp className="w-6 h-6" />,
    headline: "Grow With Clarity & Purpose",
    benefits: ["Goal alignment visibility", "Real-time feedback & recognition", "Celebrate wins as they happen"],
    cta: "See Your Dashboard",
  },
];

const UseCaseGrid = () => (
  <section className="py-28 bg-background">
    <div className="container">
      <ScrollReveal>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-4">Built for Every Stakeholder</p>
          <h2 className="font-display text-3xl md:text-[2.5rem] font-extrabold text-foreground tracking-tight">
            One Platform, Tailored for Your Role
          </h2>
        </div>
      </ScrollReveal>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {useCases.map((uc, i) => (
          <ScrollReveal key={uc.role} delay={i * 80}>
            <div className="bg-background rounded-2xl border border-border p-8 h-full flex flex-col hover:shadow-lg hover:border-primary/20 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mb-5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">{uc.icon}</div>
              <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">{uc.role}</p>
              <h3 className="text-base font-bold text-foreground mb-4 leading-snug">{uc.headline}</h3>
              <ul className="space-y-2.5 mb-6 flex-1">
                {uc.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
                    {b}
                  </li>
                ))}
              </ul>
              <a href="#book-demo" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                {uc.cta} <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Success Stories (3-column case studies) ─── */
const SuccessStories = () => (
  <section id="success-stories" className="py-28 bg-surface-3">
    <div className="container">
      <ScrollReveal>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-4">Success Stories</p>
          <h2 className="font-display text-3xl md:text-[2.5rem] font-extrabold text-foreground tracking-tight">Real Results from Real Companies</h2>
        </div>
      </ScrollReveal>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {[
          {
            metric: "60% reduction in review time",
            metric2: "92% manager satisfaction",
            metric3: "85% goal alignment adoption",
            quote: "TalentSpotify transformed how we do reviews. TARA saves us 80 hours per cycle.",
            role: "CHRO, Enterprise Tech",
            cta: "Read Full Case Study →",
          },
          {
            metric: "40% improvement in fairness",
            metric2: "Gender bias: 12% → 2%",
            metric3: "Data-driven compensation",
            quote: "For the first time, our performance data reflects actual performance.",
            role: "HR Director, BFSI",
            cta: "Explore Fairness Impact →",
          },
          {
            metric: "85% adoption in Q1",
            metric2: "500+ employees aligned",
            metric3: "2 weeks vs 4 months",
            quote: "OKR rollout that took 4 months now takes 2 weeks.",
            role: "VP People, SaaS Startup",
            cta: "See OKR Success Story →",
          },
        ].map((story, i) => (
          <ScrollReveal key={i} delay={i * 100}>
            <div className="bg-background rounded-2xl border border-border p-8 h-full flex flex-col hover:shadow-lg transition-shadow">
              <div className="space-y-2 mb-6">
                <p className="text-xl font-extrabold text-foreground tracking-tight font-display">{story.metric}</p>
                <p className="text-sm font-semibold text-accent">{story.metric2}</p>
                <p className="text-sm text-muted-foreground">{story.metric3}</p>
              </div>
              <p className="text-sm text-foreground/70 leading-relaxed italic mb-6 flex-1">"{story.quote}"</p>
              <p className="text-xs font-semibold text-muted-foreground mb-4">— {story.role}</p>
              <Link href="/case-study" className="inline-flex items-center text-sm font-semibold text-primary hover:underline">
                {story.cta}
              </Link>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Testimonial Carousel ─── */
const testimonials = [
  {
    quote: 'TalentSpotify reduced our review cycle time by <strong>58%</strong> and gave managers clear, bias-free inputs. Adoption was fast because the workflow felt natural.',
    name: 'HR Director',
    company: 'IT Services Company',
    size: '820 employees',
    badge: 'Verified customer · 2+ review cycles',
  },
  {
    quote: 'We finally brought fairness and transparency into feedback conversations across field teams and program staff. The recognition workflows improved morale noticeably.',
    name: 'People & Culture Lead',
    company: 'Social Enterprise',
    size: '540 employees',
    badge: 'Verified customer · 2+ review cycles',
  },
  {
    quote: 'From plant supervisors to leadership teams, OKR cascading created visibility we never had before. Reviews became faster, clearer, and action-oriented.',
    name: 'VP HR',
    company: 'Manufacturing Company',
    size: '760 employees',
    badge: 'Verified customer · 2+ review cycles',
  },
  {
    quote: 'Continuous feedback and Rewards & Recognition improved manager participation dramatically. Our quarterly review completion is now above <strong>90% consistently</strong>.',
    name: 'HRBP',
    company: 'SaaS Company',
    size: '680 employees',
    badge: 'Verified customer · 2+ review cycles',
  },
  {
    quote: 'With distributed hotel teams, real-time recognition and simplified reviews helped us improve engagement without adding HR overhead.',
    name: 'HR Manager',
    company: 'Hospitality Group',
    size: '590 employees',
    badge: 'Verified customer · 2+ review cycles',
  },
  {
    quote: 'The platform helped us unify performance conversations across programs, operations, and fundraising teams while keeping the experience simple for managers.',
    name: 'CHRO',
    company: 'NGO',
    size: '430 employees',
    badge: 'Verified customer · 2+ review cycles',
  },
];

const TestimonialCard = ({ t, i }: { t: typeof testimonials[number]; i: number }) => (
  <ScrollReveal key={i} delay={i * 100}>
    <div className="bg-background rounded-2xl border border-border p-8 h-full flex flex-col hover:shadow-lg hover:border-primary/40 hover:-translate-y-1 transition-all duration-200">
      <div className="flex gap-1 mb-4">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star key={s} className="w-4 h-4 fill-gold text-gold" />
        ))}
      </div>
      <p
        className="text-sm text-foreground/80 leading-[1.8] mb-6 italic flex-1"
        dangerouslySetInnerHTML={{ __html: `"${t.quote}"` }}
      />
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-primary/8 flex items-center justify-center text-primary font-bold text-sm">
          {t.name[0]}
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">{t.name}</p>
          <p className="text-xs text-muted-foreground">{t.company} · <span className="text-muted-foreground/70">{t.size}</span></p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <CheckCircle className="w-3.5 h-3.5 text-primary/70" />
        <span className="text-[11px] text-muted-foreground/80">{t.badge}</span>
      </div>
    </div>
  </ScrollReveal>
);

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-28 bg-background">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-4">Testimonials</p>
            <h2 className="font-display text-3xl md:text-[2.5rem] font-extrabold text-foreground tracking-tight">What HR Leaders Say</h2>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.slice(0, 3).map((t, i) => (
            <TestimonialCard key={i} t={t} i={i} />
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-6">
          {testimonials.slice(3).map((t, i) => (
            <TestimonialCard key={i} t={t} i={i + 3} />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── CEO / CXO Section ─── */
const CXOSection = () => (
  <section className="py-28 bg-foreground">
    <div className="container">
      <ScrollReveal>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-4">For the C-Suite</p>
          <h2 className="font-display text-3xl md:text-[2.5rem] font-extrabold text-background tracking-tight mb-4">
            Drive Performance. Align Strategy. Build Retention.
          </h2>
          <p className="text-base text-background/50 leading-relaxed">Three value drivers that help CEOs justify the investment.</p>
        </div>
      </ScrollReveal>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {[
          { title: "Strategy Execution", desc: "Cascade vision to daily execution. Real-time visibility into goal progress across every team.", metric: "85% goal alignment adoption in Q1", cta: "See Strategy Module" },
          { title: "Performance Analytics", desc: "Uncover insights. Eliminate bias. Make data-driven talent decisions with confidence.", metric: "60% improvement in fairness scores", cta: "Explore Analytics" },
          { title: "Retention & Growth", desc: "Develop future leaders. Reduce attrition. Build bench strength with succession planning.", metric: "70% high-performer engagement lift", cta: "View Succession Planning" },
        ].map((v, i) => (
          <ScrollReveal key={v.title} delay={i * 100}>
            <div className="bg-background/5 rounded-2xl border border-background/10 p-8 h-full flex flex-col backdrop-blur-sm hover:bg-background/10 transition-colors">
              <h3 className="text-lg font-bold text-background mb-3">{v.title}</h3>
              <p className="text-sm text-background/60 leading-relaxed mb-4 flex-1">{v.desc}</p>
              <p className="text-sm font-bold text-accent mb-4">{v.metric}</p>
              <a href="#book-demo" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                {v.cta} <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Integrations ─── */
import googleSheetsLogo from "@/assets/logos/google-sheets.png";
import jiraLogo from "@/assets/logos/jira.png";
import salesforceLogo from "@/assets/logos/salesforce.png";
import microsoftTeamsLogo from "@/assets/logos/microsoft-teams.png";
import slackLogo from "@/assets/logos/slack.png";
import zohoLogo from "@/assets/logos/zoho.png";
import oracleLogo from "@/assets/logos/oracle.png";
import sapLogo from "@/assets/logos/sap-successfactors.png";

const integrations = [
  { name: "Google Sheets", logo: googleSheetsLogo },
  { name: "Jira", logo: jiraLogo },
  { name: "Salesforce", logo: salesforceLogo },
  { name: "Microsoft Teams", logo: microsoftTeamsLogo },
  { name: "Slack", logo: slackLogo },
  { name: "Zoho", logo: zohoLogo },
  { name: "Oracle", logo: oracleLogo },
  { name: "SAP SuccessFactors", logo: sapLogo },
];

const Integrations = () => (
  <section id="integrations" className="py-28 bg-surface-3 border-y border-border">
    <div className="container">
      <ScrollReveal>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-4">Ecosystem</p>
          <h2 className="font-display text-3xl md:text-[2.5rem] font-extrabold text-foreground tracking-tight mb-3">Works With Your Tools</h2>
          <p className="text-base text-muted-foreground">Connect TalentSpotify with the platforms your team already uses.</p>
        </div>
      </ScrollReveal>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
        {integrations.map((item, i) => (
          <ScrollReveal key={item.name} delay={i * 40}>
            <a
              href="#book-demo"
              className="group flex flex-col items-center justify-center bg-background rounded-2xl border border-border p-6 h-full cursor-pointer no-underline hover:shadow-lg hover:border-primary/40 hover:-translate-y-1 transition-all duration-200"
            >
              <div className="h-16 flex items-center justify-center mb-3">
                <img
                  src={item.logo}
                  alt={`${item.name} logo`}
                  loading="lazy"
                  className="max-h-16 max-w-[120px] w-auto object-contain group-hover:scale-[1.03] transition-transform duration-200"
                />
              </div>
              <p className="text-sm font-medium text-foreground text-center">{item.name}</p>
            </a>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Security Section ─── */
const Security = () => (
  <section id="security" className="py-28 bg-background">
    <div className="container">
      <ScrollReveal>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-4">Enterprise Security</p>
          <h2 className="font-display text-3xl md:text-[2.5rem] font-extrabold text-foreground tracking-tight mb-4">
            Enterprise Grade Security
          </h2>
          <p className="text-base text-muted-foreground">Your employee data deserves responsible stewardship. Built with privacy-first architecture.</p>
        </div>
      </ScrollReveal>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {[
          { icon: <ShieldCheck className="w-6 h-6 text-primary" />, title: "DPDPA Privacy Design", desc: "Built with consent-aware data practices, retention controls, and privacy-first workflows." },
          { icon: <Lock className="w-6 h-6 text-primary" />, title: "Data Encryption", desc: "AES-256 encryption at rest and TLS 1.3 in transit. AWS Mumbai hosted." },
          { icon: <KeyRound className="w-6 h-6 text-primary" />, title: "Secure Access Controls", desc: "Role-based permissions, controlled data visibility, and enterprise identity integrations." },
          { icon: <FileCheck className="w-6 h-6 text-primary" />, title: "Activity Audit Logs", desc: "Track every review update, approval, and workflow event with clear historical visibility." },
          { icon: <Brain className="w-6 h-6 text-primary" />, title: "Transparent AI", desc: "AI suggestions include visible rationale, confidence indicators, and review context." },
          { icon: <Headphones className="w-6 h-6 text-primary" />, title: "Guided Onboarding", desc: "Structured onboarding support, workflow setup, and implementation guidance." },
        ].map((card, i) => (
          <ScrollReveal key={card.title} delay={i * 60}>
            <div className="bg-surface-3 rounded-2xl border border-border p-8 h-full hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mb-5">{card.icon}</div>
              <h3 className="text-base font-bold text-foreground mb-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Pricing ─── */
const Pricing = () => {
  const [annual, setAnnual] = useState(true);

  const plans = [
    {
      name: "Basic",
      sub: "Mid-Market",
      price: annual ? 76 : 95,
      note: "Up to 500 employees",
      featured: false,
      features: ["Maintain foundation data", "OKR Management (basic cascading)", "Recognition Engine", "Leave & Attendance", "Email Support"],
    },
    {
      name: "Performance",
      sub: "Mid-Market+",
      price: annual ? 95 : 119,
      note: "Up to 2,000 employees",
      featured: true,
      features: ["Performance Reviews + TARA Voice", "Everything in Basic", "Advanced OKR cascading", "Engagement Surveys + Pulse", "Recognition & Celebration", "360° Reviews + Calibration", "Priority Support + CSM"],
    },
    {
      name: "Enterprise",
      sub: "Full Platform",
      price: null,
      note: "Unlimited employees",
      featured: false,
      features: ["Everything in Performance", "Custom integrations", "White-label branding", "SSO / SCIM / RBAC", "Dedicated CSM + onboarding", "SLA + 24/7 Support"],
    },
  ];

  return (
    <section id="pricing" className="py-28 bg-surface-3">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-4">Pricing</p>
            <h2 className="font-display text-3xl md:text-[2.5rem] font-extrabold text-foreground tracking-tight mb-6">Simple, Transparent Pricing</h2>
            <div className="inline-flex items-center bg-background border border-border rounded-full p-1">
              <button onClick={() => setAnnual(false)} className={`px-5 py-2.5 text-sm font-semibold rounded-full transition-all ${!annual ? "bg-primary text-primary-foreground shadow-md" : "text-muted-foreground"}`}>Monthly</button>
              <button onClick={() => setAnnual(true)} className={`px-5 py-2.5 text-sm font-semibold rounded-full transition-all ${annual ? "bg-primary text-primary-foreground shadow-md" : "text-muted-foreground"}`}>Annual <span className="text-xs opacity-70">(-20%)</span></button>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 100}>
              <div className={`rounded-2xl p-8 h-full flex flex-col relative ${
                plan.featured
                  ? "bg-foreground text-background border-2 border-foreground shadow-xl scale-[1.02]"
                  : "bg-background border border-border"
              }`}>
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-accent text-accent-foreground text-xs font-bold rounded-full">Recommended</span>
                )}
                <h3 className={`text-lg font-bold font-display ${plan.featured ? "" : "text-foreground"}`}>{plan.name}</h3>
                <p className={`text-xs mb-5 ${plan.featured ? "opacity-60" : "text-muted-foreground"}`}>{plan.sub}</p>
                <div className="mb-2">
                  {plan.price ? (
                    <>
                      <span className={`text-4xl font-extrabold tracking-tight font-display ${plan.featured ? "" : "text-foreground"}`}>₹{plan.price}</span>
                      <span className={`text-sm ${plan.featured ? "opacity-60" : "text-muted-foreground"}`}>/employee/mo</span>
                    </>
                  ) : (
                    <span className={`text-3xl font-extrabold tracking-tight font-display ${plan.featured ? "" : "text-foreground"}`}>Custom</span>
                  )}
                </div>
                <p className={`text-xs mb-6 ${plan.featured ? "opacity-50" : "text-muted-foreground"}`}>{plan.note}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm">
                      <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${plan.featured ? "text-accent" : "text-accent"}`} />
                      <span className={plan.featured ? "opacity-80" : "text-foreground/80"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href="#book-demo" className={`w-full py-3.5 rounded-lg font-bold text-sm transition-all text-center block ${
                  plan.featured
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md"
                    : "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}>
                  {plan.price ? "Start Free Trial" : "Request Demo"}
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── FAQ ─── */
const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    { q: "How does AI reduce bias in reviews?", a: "TARA, our AI voice agent, joins performance review conversations and analyses them in real-time for recency bias, halo effect, and affinity bias. It provides managers with coaching prompts and flags patterns before final ratings are submitted. Every recommendation is explainable and auditable." },
    { q: "Can managers override AI recommendations?", a: "Absolutely. TARA provides suggestions and flags — it never overrides human judgment. Managers retain full control over ratings and feedback, with AI serving as a coaching and fairness layer." },
    { q: "How fast is onboarding?", a: "Most teams go live within 2 weeks with our dedicated onboarding specialist. Enterprise deployments with SSO, custom integrations, and data migration typically take 3–5 weeks." },
    { q: "Do you integrate with Oracle / SAP / Workday?", a: "Yes. We offer pre-built integrations with Oracle, SAP SuccessFactors, Workday, Zoho People, and greytHR. Custom API integrations are available for Enterprise customers." },
    { q: "Is employee data secure?", a: "All data is hosted on AWS Mumbai, encrypted at rest and in transit. We follow DPDP Act 2023 privacy principles, and support SSO with SCIM provisioning. Complete audit logs are maintained for every action." },
    { q: "How does pricing work for 500+ employees?", a: "For organisations with 500+ employees, we offer custom Enterprise pricing that includes dedicated implementation, SLA guarantees, white-label options, and volume discounts. Contact our sales team for a tailored quote." },
    { q: "Do you support calibration workflows?", a: "Yes. TalentSpotify supports multi-level calibration sessions where HR and leadership can review performance distributions, adjust ratings collaboratively, and ensure consistency across teams before final approvals." },
    { q: "What industries do you serve?", a: "TalentSpotify is designed for organizations across IT, SaaS, retail, manufacturing, BFSI, healthcare, services, and GCC groups. Our platform adapts to the unique review cycles and performance frameworks of each industry." },
    { q: "What is the TARA voice agent?", a: "TARA is our AI voice agent that lets managers record performance feedback by simply speaking. TARA transcribes, structures, and analyses the review for bias — making reviews 60% faster with 85% adoption rates." },
    { q: "How is TalentSpotify different from Lattice or Profit.co?", a: "TalentSpotify is the only platform that combines AI-powered bias detection (TARA voice agent) with OKR alignment and gamified recognition in a single platform. No competitor emphasizes fairness-first performance management the way we do." },
  ];

  return (
    <section id="faq" className="py-28 bg-background">
      <div className="container max-w-3xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-4">FAQ</p>
            <h2 className="font-display text-3xl md:text-[2.5rem] font-extrabold text-foreground tracking-tight">Frequently Asked Questions</h2>
          </div>
        </ScrollReveal>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 20}>
              <div className="bg-surface-3 rounded-xl border border-border overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="text-sm font-semibold text-foreground pr-4">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
                </button>
                {open === i && (
                  <div className="px-5 pb-5">
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── Event Participation ─── */
const EventParticipation = () => (
  <section className="py-20 bg-surface-3 border-y border-border">
    <div className="container">
      <ScrollReveal>
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-4">Industry Presence</p>
          <h2 className="font-display text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">Where We've Been</h2>
        </div>
      </ScrollReveal>
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {[
          { name: "HR Technology Conference", detail: "Las Vegas 2023 — Booth #314BL" },
          { name: "GITEX Global Dubai", detail: "2024 — Hall 1, B-44" },
          { name: "Indian Startup Festival", detail: "2023 — Participant" },
        ].map((e, i) => (
          <ScrollReveal key={e.name} delay={i * 60}>
            <div className="bg-background rounded-xl border border-border px-6 py-4 text-center hover:shadow-sm transition-shadow">
              <p className="text-sm font-bold text-foreground">{e.name}</p>
              <p className="text-xs text-muted-foreground mt-1">{e.detail}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Final CTA ─── */
const FinalCTA = () => (
  <section className="py-28 bg-primary">
    <div className="container text-center">
      <ScrollReveal>
        <h2 className="font-display text-3xl md:text-[2.5rem] font-extrabold text-primary-foreground tracking-tight mb-4">
          Ready to Make Performance Management Fair?
        </h2>
        <p className="text-base text-primary-foreground/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          In 15 minutes, we'll show you how TalentSpotify eliminates bias, aligns goals, and rewards real performance.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#book-demo" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-background text-primary text-base font-bold rounded-lg hover:bg-background/90 transition-all shadow-lg">
            Request Demo <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#book-demo" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground text-base font-bold rounded-lg hover:bg-accent/90 transition-all shadow-lg">
            Start Free Trial
          </a>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

/* ─── Book Demo Form ─── */
const BookDemo = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    businessEmail: "",
    company: "",
    jobTitle: "",
    sizeOfOrganization: "",
    phoneNumber: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const fullName = `${form.firstName} ${form.lastName}`.trim();
    const payload = {
      fullName,
      firstName: "",
      lastName: "",
      businessEmail: form.businessEmail,
      company: form.company,
      jobTitle: form.jobTitle,
      sizeOfOrganization: form.sizeOfOrganization,
      phoneNumber: form.phoneNumber,
    };

    try {
      const response = await fetch(baseURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => null);
      if (response.ok && data?.success) {
        alert("Schedule Demo Sent Successfully!");
        setForm({
          firstName: "",
          lastName: "",
          businessEmail: "",
          company: "",
          jobTitle: "",
          sizeOfOrganization: "",
          phoneNumber: "",
        });
      } else {
        setError(typeof data?.message === "string" ? data.message : "Something went wrong in network");
      }
    } catch {
      setError("Something went wrong in network");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="book-demo" className="py-28 bg-foreground">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          <ScrollReveal>
            <div>
              <span className="inline-block px-3 py-1.5 rounded-full text-xs font-bold mb-6 bg-primary/15 text-primary uppercase tracking-wider">Book a Live Demo</span>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-background tracking-tight mb-4">
                See <span className="text-primary">TARA</span> in Action.
              </h2>
              <p className="text-base text-background/50 leading-relaxed mb-8">
                We'll walk you through a live review analysis, show OKR setup, and help you understand your pricing in under 20 minutes.
              </p>
              <div className="space-y-3">
                {[
                  "Watch TARA analyse a real conversation",
                  "Get a personalised OKR roadmap",
                  "Understand your pricing in 5 minutes",
                  "Go live in under 2 weeks",
                ].map((text) => (
                  <div key={text} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-sm text-background/70">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <form onSubmit={handleSubmit} className="bg-background rounded-2xl shadow-2xl p-8">
              <h3 className="text-lg font-bold text-foreground mb-1 font-display">Request Your Free Demo</h3>
              <p className="text-sm text-muted-foreground mb-6">Sales team will call within 4 hours</p>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <input placeholder="First Name" required value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} className="px-4 py-3 bg-surface-3 border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                <input placeholder="Last Name" required value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} className="px-4 py-3 bg-surface-3 border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <input placeholder="Work Email" type="email" required value={form.businessEmail} onChange={(e) => setForm({ ...form, businessEmail: e.target.value })} className="w-full px-4 py-3 bg-surface-3 border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary mb-3" />
              <div className="grid grid-cols-2 gap-3 mb-3">
                <input placeholder="Company" required value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="px-4 py-3 bg-surface-3 border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                <input placeholder="Job Title" value={form.jobTitle} onChange={(e) => setForm({ ...form, jobTitle: e.target.value })} className="px-4 py-3 bg-surface-3 border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <select
                required
                value={form.sizeOfOrganization}
                onChange={(e) => setForm({ ...form, sizeOfOrganization: e.target.value })}
                className="w-full px-4 py-3 bg-surface-3 border border-border rounded-lg text-sm text-foreground mb-3 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Team Size</option>
                <option value="1-50">1–50</option>
                <option value="51-200">51–200</option>
                <option value="201-500">201–500</option>
                <option value="500+">500+</option>
              </select>
              <input placeholder="Phone (optional)" value={form.phoneNumber} onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })} className="w-full px-4 py-3 bg-surface-3 border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary mb-5" />
              <button type="submit" className="w-full py-4 bg-primary text-primary-foreground text-base font-bold rounded-lg hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl">
                {loading ? "Sending..." : "Schedule My Demo →"}
              </button>
              {error && (
                <p className="text-xs text-red-500 text-center mt-3">{error}</p>
              )}
              <p className="text-xs text-muted-foreground text-center mt-3">
                By submitting, you agree to our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>. No spam, ever.
              </p>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

/* ─── Sticky Mobile CTA ─── */
const StickyMobileCTA = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-background/98 backdrop-blur-xl border-t border-border px-4 py-3">
    <a href="#book-demo" className="block w-full py-3.5 bg-primary text-primary-foreground font-bold rounded-lg text-sm text-center shadow-lg">
      Request Demo
    </a>
  </div>
);

/* ─── Home Page ─── */
const Index = () => (
  <>
    <Head>
      <title>TalentSpotify — AI-Powered Performance Reviews & OKR Management</title>
      <meta name="description" content="Eliminate bias. Empower performance. AI-powered reviews, OKRs, and recognition built for fairness. Trusted by 50+ leading companies." />
      <meta property="og:title" content="TalentSpotify — AI-Powered Performance Reviews & OKR Management" />
      <meta name="twitter:title" content="TalentSpotify — AI-Powered Performance Reviews & OKR Management" />
      <meta property="og:description" content="TalentSpotify detects bias in performance reviews before they become decisions. AI-powered OKRs, TARA voice agent, and gamified recognition." />
      <meta name="twitter:description" content="TalentSpotify detects bias in performance reviews before they become decisions. AI-powered OKRs, TARA voice agent, and gamified recognition." />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
    </Head>
    <Hero />
    <CredentialBadges />
    <TrustLogoBar />
    <KPIProofStrip />
    <PainPointCards />
    <ProductCards />
    <FeatureShowcase />
    <UseCaseGrid />
    <SuccessStories />
    <CXOSection />
    <TestimonialCarousel />
    <Integrations />
    <Security />
    <Pricing />
    <EventParticipation />
    <FAQ />
    <FinalCTA />
    <BookDemo />
    <StickyMobileCTA />
  </>
);

export default Index;
