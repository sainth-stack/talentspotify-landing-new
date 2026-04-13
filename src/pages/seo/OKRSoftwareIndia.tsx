import SEOHead from "@/components/SEOHead";
import { breadcrumbSchema, faqSchema, softwareApplicationSchema } from "@/lib/schemas";
import ScrollReveal from "@/components/ScrollReveal";
import CustomerLogosStrip from "@/components/CustomerLogosStrip";
import TrustBadges from "@/components/TrustBadges";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import InternalLinks from "@/components/InternalLinks";
import { Target, Zap, Eye, BarChart3, Brain, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
  { question: "What is OKR software?", answer: "OKR (Objectives and Key Results) software helps organisations set, track, and align goals from leadership to individual contributors. TalentSpotify adds AI-powered OKR writing, health scoring, and real-time visibility." },
  { question: "How does TalentSpotify's OKR module work?", answer: "Set objectives at company, team, or individual level. AI suggests key results, tracks progress automatically, and provides health scores across 5 dimensions." },
  { question: "Can OKRs integrate with performance reviews?", answer: "Yes. TalentSpotify uniquely links OKR progress to review cycles, so performance ratings are backed by measurable outcomes — not just manager opinions." },
  { question: "How long does OKR rollout take?", answer: "Most organisations launch their first OKR cycle within 2 weeks using TalentSpotify's guided setup, templates, and manager training." },
  { question: "Is TalentSpotify suitable for OKR beginners?", answer: "Absolutely. Our OKR Readiness Check and AI-powered OKR Writer help teams new to goal-setting get started quickly." },
];

const OKRSoftwareIndia = () => (
  <>
    <SEOHead
      title="Best OKR Software in India | AI-Powered Goal Tracking | TalentSpotify"
      description="India's leading OKR software with AI goal writing, real-time dashboards, and performance review integration. Trusted by 50+ companies."
      canonical="/okr-software-india"
      keywords="OKR software India, objectives key results tool, goal tracking software, OKR management platform"
      jsonLd={[
        softwareApplicationSchema,
        breadcrumbSchema([{ name: "Home", url: "/" }, { name: "OKR Software India", url: "/okr-software-india" }]),
        faqSchema(faqs),
      ]}
    />

    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-accent/[0.03]" />
      <div className="container relative max-w-4xl text-center">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-4">OKR Software India</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-foreground leading-tight tracking-tight mb-6">
            AI-Powered OKR Software That <span className="text-primary">Aligns Your Entire Organisation</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Set smarter goals, track progress in real-time, and connect OKRs directly to performance reviews — all from one platform built for Indian enterprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#book-demo" className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary-dark transition-all shadow-lg">Request Demo</a>
            <Link to="/roi-calculator" className="px-8 py-4 border-2 border-primary/30 text-foreground font-semibold rounded-lg hover:border-primary hover:bg-primary/5 transition-all">Calculate Your ROI</Link>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <CustomerLogosStrip />

    <section className="py-20 bg-surface-2">
      <div className="container max-w-5xl">
        <ScrollReveal><h2 className="font-display text-3xl font-extrabold text-foreground mb-10 text-center">Why Teams Choose TalentSpotify for OKRs</h2></ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Brain className="w-6 h-6" />, title: "AI OKR Writer", desc: "Generate well-structured OKRs from simple descriptions using AI." },
            { icon: <Eye className="w-6 h-6" />, title: "Real-Time Dashboards", desc: "Track OKR progress across teams with live visual dashboards." },
            { icon: <Target className="w-6 h-6" />, title: "Cascading Alignment", desc: "Align company → team → individual goals with visual cascading." },
            { icon: <BarChart3 className="w-6 h-6" />, title: "Health Scoring", desc: "5-dimension OKR health scores identify at-risk objectives early." },
          ].map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 80}>
              <div className="bg-background rounded-2xl border border-border p-6 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">{f.icon}</div>
                <h3 className="font-display text-base font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container max-w-3xl text-center">
        <ScrollReveal>
          <h2 className="font-display text-3xl font-extrabold text-foreground mb-4">OKRs + Performance Reviews = Better Outcomes</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">Unlike standalone OKR tools, TalentSpotify links goal progress directly to review ratings — so performance decisions are backed by data, not opinions.</p>
          <Link to="/performance-management-software-india" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
            Explore Performance Management <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>
      </div>
    </section>

    <TrustBadges />

    <section className="py-20 bg-surface-2">
      <div className="container max-w-3xl">
        <h2 className="font-display text-3xl font-extrabold text-foreground mb-10 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(f => (
            <details key={f.question} className="bg-background rounded-xl border border-border p-5 group">
              <summary className="font-semibold text-foreground cursor-pointer list-none flex justify-between items-center">
                {f.question}
                <span className="text-primary ml-2 group-open:rotate-45 transition-transform text-xl">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>

    <LeadCaptureForm context="OKR Software India" />
    <InternalLinks exclude="/okr-software-india" />
  </>
);

export default OKRSoftwareIndia;
