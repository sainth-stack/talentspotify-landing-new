import SEOHead from "@/components/SEOHead";
import { breadcrumbSchema, faqSchema, softwareApplicationSchema } from "@/lib/schemas";
import ScrollReveal from "@/components/ScrollReveal";
import CustomerLogosStrip from "@/components/CustomerLogosStrip";
import TrustBadges from "@/components/TrustBadges";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import InternalLinks from "@/components/InternalLinks";
import { Workflow, Database, Shield, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
  { question: "Does TalentSpotify integrate with Oracle Fusion HCM?", answer: "Yes. TalentSpotify provides a native two-way integration with Oracle Fusion HCM for employee data sync, org structures, review workflows, and goal alignment." },
  { question: "Why do companies using Oracle Fusion need TalentSpotify?", answer: "Oracle Fusion HCM handles core HR, but performance management requires AI-powered fairness scoring, voice-based reviews, and OKR tracking that Oracle doesn't provide natively." },
  { question: "How does the integration work technically?", answer: "TalentSpotify connects via Oracle Fusion REST APIs and secure data connectors. Employee records, org hierarchies, and review data sync automatically on a configurable schedule." },
  { question: "Is data secure during integration?", answer: "Yes. All data transfers use TLS 1.3 encryption. TalentSpotify is SOC 2 ready, GDPR compliant, and ISO 27001 aligned." },
  { question: "How long does integration take?", answer: "Oracle Fusion integration is typically completed within 1 week, including testing and validation." },
];

const OracleFusion = () => (
  <>
    <SEOHead
      title="Oracle Fusion Performance Management Integration | TalentSpotify"
      description="Enhance Oracle Fusion HCM with AI-powered performance reviews, OKRs, and fairness scoring. Native integration, no manual data imports."
      canonical="/oracle-fusion-performance-management"
      keywords="Oracle Fusion performance management, Oracle HCM integration, Oracle Fusion alternative, Oracle performance review tool"
      jsonLd={[
        softwareApplicationSchema,
        breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Oracle Fusion Performance Management", url: "/oracle-fusion-performance-management" }]),
        faqSchema(faqs),
      ]}
    />

    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-accent/[0.03]" />
      <div className="container relative max-w-4xl text-center">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-4">Oracle Fusion Integration</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-foreground leading-tight tracking-tight mb-6">
            Supercharge Oracle Fusion HCM with <span className="text-primary">AI-Powered Performance Management</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Keep Oracle Fusion as your HR backbone. Add TalentSpotify for AI reviews, voice-based feedback, OKR alignment, and bias-free calibration — fully integrated.
          </p>
          <a href="#book-demo" className="inline-block px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary-dark transition-all shadow-lg">Request Integration Demo</a>
        </ScrollReveal>
      </div>
    </section>

    <CustomerLogosStrip />

    <section className="py-20 bg-surface-2">
      <div className="container max-w-5xl">
        <ScrollReveal><h2 className="font-display text-3xl font-extrabold text-foreground mb-10 text-center">How TalentSpotify Extends Oracle Fusion</h2></ScrollReveal>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: <Database className="w-6 h-6" />, title: "Automated Data Sync", desc: "Employee records, org hierarchies, and review cycles sync bi-directionally with Oracle Fusion HCM." },
            { icon: <Workflow className="w-6 h-6" />, title: "Unified Workflows", desc: "Trigger TalentSpotify reviews from Oracle Fusion events. No context switching for managers." },
            { icon: <Shield className="w-6 h-6" />, title: "Enterprise Security", desc: "TLS 1.3 encryption, SOC 2 ready, GDPR compliant. Your Oracle data stays protected." },
            { icon: <Zap className="w-6 h-6" />, title: "Fast Deployment", desc: "Go live in 1 week with pre-built Oracle Fusion connectors. No custom development needed." },
          ].map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 80}>
              <div className="bg-background rounded-2xl border border-border p-7 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">{f.icon}</div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <TrustBadges />

    <section className="py-20 bg-surface-2">
      <div className="container max-w-3xl">
        <h2 className="font-display text-3xl font-extrabold text-foreground mb-10 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(f => (
            <details key={f.question} className="bg-background rounded-xl border border-border p-5 group">
              <summary className="font-semibold text-foreground cursor-pointer list-none flex justify-between items-center">{f.question}<span className="text-primary ml-2 group-open:rotate-45 transition-transform text-xl">+</span></summary>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>

    <LeadCaptureForm context="Oracle Fusion Integration" />
    <InternalLinks exclude="/oracle-fusion-performance-management" />
  </>
);

export default OracleFusion;
