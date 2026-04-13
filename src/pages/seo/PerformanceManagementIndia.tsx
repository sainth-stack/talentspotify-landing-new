import SEOHead from "@/components/SEOHead";
import { breadcrumbSchema, faqSchema, softwareApplicationSchema } from "@/lib/schemas";
import ScrollReveal from "@/components/ScrollReveal";
import CustomerLogosStrip from "@/components/CustomerLogosStrip";
import TrustBadges from "@/components/TrustBadges";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import InternalLinks from "@/components/InternalLinks";
import { Target, Zap, BarChart3, Shield, Brain, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
  { question: "What is performance management software?", answer: "Performance management software automates employee reviews, goal tracking, feedback, and calibration. TalentSpotify adds AI-powered fairness scoring and voice-based reviews via TARA AI to eliminate bias." },
  { question: "How does TalentSpotify compare to other performance management tools in India?", answer: "TalentSpotify is built specifically for Indian enterprises with Oracle Fusion integration, multilingual support, and TARA — an AI voice agent that conducts fair, consistent reviews." },
  { question: "Does TalentSpotify integrate with Oracle Fusion HCM?", answer: "Yes. TalentSpotify provides a native Oracle Fusion integration for seamless employee data sync, review workflows, and OKR alignment." },
  { question: "How quickly can we deploy TalentSpotify?", answer: "Most organisations go live within 2 weeks, including data migration, SSO setup, and manager training." },
  { question: "Is TalentSpotify suitable for large enterprises?", answer: "Yes. TalentSpotify is designed for mid-to-large enterprises with 200–10,000+ employees across India and GCC markets." },
];

const PerformanceManagementIndia = () => (
  <>
    <SEOHead
      title="Best Performance Management Software in India | TalentSpotify"
      description="TalentSpotify is India's #1 AI-powered performance management software. Eliminate bias, automate reviews, and align OKRs — trusted by 50+ companies."
      canonical="/performance-management-software-india"
      keywords="performance management software India, employee performance review tool, AI performance management, HR software India"
      jsonLd={[
        softwareApplicationSchema,
        breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Performance Management Software India", url: "/performance-management-software-india" },
        ]),
        faqSchema(faqs),
      ]}
    />

    {/* Hero */}
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-accent/[0.03]" />
      <div className="container relative max-w-4xl text-center">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-4">Performance Management Software India</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-foreground leading-tight tracking-tight mb-6">
            The AI Platform That Makes Performance Reviews <span className="text-primary">Fair, Fast & Actionable</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            TalentSpotify helps India's top companies eliminate review bias, cut cycle times by 60%, and drive measurable performance outcomes — all in one unified platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#book-demo" className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary-dark transition-all shadow-lg">Request Demo</a>
            <Link to="/roi-calculator" className="px-8 py-4 border-2 border-primary/30 text-foreground font-semibold rounded-lg hover:border-primary hover:bg-primary/5 transition-all">Calculate Your ROI</Link>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <CustomerLogosStrip />

    {/* Problem Statement */}
    <section className="py-20 bg-surface-2">
      <div className="container max-w-4xl">
        <ScrollReveal>
          <h2 className="font-display text-3xl font-extrabold text-foreground mb-6 text-center">Why Traditional Performance Reviews Fail in India</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { stat: "65%", problem: "of reviews are affected by manager bias", icon: <Shield className="w-6 h-6 text-primary" /> },
              { stat: "40+ hrs", problem: "spent per manager on annual review cycles", icon: <Zap className="w-6 h-6 text-primary" /> },
              { stat: "72%", problem: "of employees don't trust their review scores", icon: <Target className="w-6 h-6 text-primary" /> },
            ].map(p => (
              <div key={p.problem} className="bg-background rounded-2xl border border-border p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">{p.icon}</div>
                <p className="text-3xl font-extrabold text-foreground font-display mb-2">{p.stat}</p>
                <p className="text-sm text-muted-foreground">{p.problem}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Measurable Outcomes */}
    <section className="py-20 bg-background">
      <div className="container max-w-4xl">
        <ScrollReveal>
          <h2 className="font-display text-3xl font-extrabold text-foreground mb-4 text-center">Measurable Outcomes</h2>
          <p className="text-muted-foreground text-center mb-10">What our customers achieve within the first quarter.</p>
        </ScrollReveal>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { metric: "60%", label: "Faster review cycles" },
            { metric: "85%", label: "Platform adoption in Q1" },
            { metric: "70%", label: "Improvement in engagement" },
            { metric: "₹12L+", label: "Saved per 100 employees/year" },
          ].map((o, i) => (
            <ScrollReveal key={o.label} delay={i * 80}>
              <div className="text-center p-6 rounded-2xl bg-surface-2 border border-border">
                <p className="text-3xl font-extrabold text-accent font-display mb-2">{o.metric}</p>
                <p className="text-sm text-muted-foreground">{o.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Use Cases */}
    <section className="py-20 bg-surface-2">
      <div className="container max-w-5xl">
        <ScrollReveal>
          <h2 className="font-display text-3xl font-extrabold text-foreground mb-10 text-center">Use Cases</h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Annual & Quarterly Reviews", desc: "Run bias-free 360° reviews with TARA voice agent, auto-calibration, and multi-rater feedback.", icon: <BarChart3 className="w-6 h-6" /> },
            { title: "OKR-Driven Performance", desc: "Cascade OKRs from leadership to individual contributors with real-time progress tracking.", icon: <Target className="w-6 h-6" /> },
            { title: "AI Calibration & Fairness", desc: "Identify and correct rating bias using AI-powered calibration across teams and departments.", icon: <Brain className="w-6 h-6" /> },
            { title: "Employee Recognition", desc: "Peer-to-peer recognition, rewards, and gamified engagement integrated into daily workflows.", icon: <CheckCircle2 className="w-6 h-6" /> },
          ].map((uc, i) => (
            <ScrollReveal key={uc.title} delay={i * 80}>
              <div className="bg-background rounded-2xl border border-border p-7 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">{uc.icon}</div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{uc.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{uc.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Oracle Fusion */}
    <section className="py-20 bg-background">
      <div className="container max-w-3xl text-center">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Enterprise Integration</p>
          <h2 className="font-display text-3xl font-extrabold text-foreground mb-4">Seamless Oracle Fusion HCM Integration</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">Sync employee data, org structures, and review workflows between Oracle Fusion HCM and TalentSpotify — no manual imports required.</p>
          <Link to="/oracle-fusion-performance-management" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary-dark transition-all">
            Learn About Oracle Integration <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>
      </div>
    </section>

    <TrustBadges />

    {/* FAQ */}
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

    <LeadCaptureForm context="Performance Management Software India" />
    <InternalLinks exclude="/performance-management-software-india" />
  </>
);

export default PerformanceManagementIndia;
