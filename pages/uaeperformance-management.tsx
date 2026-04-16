import SEOHead from "@/components/SEOHead";
import { breadcrumbSchema, faqSchema, softwareApplicationSchema } from "@/lib/schemas";
import ScrollReveal from "@/components/ScrollReveal";
import CustomerLogosStrip from "@/components/CustomerLogosStrip";
import TrustBadges from "@/components/TrustBadges";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import InternalLinks from "@/components/InternalLinks";
import { Globe, Shield, Users, Building2, Zap, ArrowRight } from "lucide-react";
import Link from 'next/link';

const faqs = [
  { question: "Does TalentSpotify support UAE labour law compliance?", answer: "Yes. TalentSpotify is designed to meet UAE Federal Labour Law requirements for performance documentation, review cycles, and employee records retention." },
  { question: "Can TalentSpotify handle multi-country deployments?", answer: "Yes. TalentSpotify supports multi-language, multi-currency, and multi-timezone configurations for GCC organisations operating across UAE, Saudi Arabia, and other markets." },
  { question: "Is TalentSpotify available in Arabic?", answer: "RTL Arabic language support is on our roadmap. Currently, the platform supports English with Arabic content input for reviews and feedback." },
  { question: "How does TalentSpotify serve GCC companies?", answer: "TalentSpotify is built for enterprises in India and GCC markets. We provide localised onboarding, GCC-compliant data handling, and dedicated account management for UAE-based clients." },
  { question: "What security standards does TalentSpotify meet?", answer: "SOC 2 ready, GDPR compliant, ISO 27001 aligned, with TLS 1.3 encryption and data residency options for GCC markets." },
];

const UAEPerformanceManagement = () => (
  <>
    <SEOHead
      title="Performance Management Software UAE & GCC | TalentSpotify"
      description="AI-powered performance management for UAE & GCC enterprises. Fair reviews, OKRs, and employee recognition — compliant with local regulations."
      canonical="/gcc/uae-performance-management"
      keywords="performance management software UAE, HRTech GCC, UAE HR software, performance review UAE, OKR software GCC"
      jsonLd={[
        softwareApplicationSchema,
        breadcrumbSchema([{ name: "Home", url: "/" }, { name: "GCC", url: "/gcc/uae-performance-management" }, { name: "UAE Performance Management", url: "/gcc/uae-performance-management" }]),
        faqSchema(faqs),
      ]}
    />

    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-accent/[0.03]" />
      <div className="container relative max-w-4xl text-center">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-4">UAE & GCC Performance Management</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-foreground leading-tight tracking-tight mb-6">
            AI Performance Management Built for <span className="text-primary">UAE & GCC Enterprises</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Fair, AI-powered reviews, OKR alignment, and employee recognition — designed for the regulatory and cultural needs of the Gulf region.
          </p>
          <a href="#book-demo" className="inline-block px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary-dark transition-all shadow-lg">Request GCC Demo</a>
        </ScrollReveal>
      </div>
    </section>

    <CustomerLogosStrip />

    <section className="py-20 bg-surface-2">
      <div className="container max-w-5xl">
        <ScrollReveal><h2 className="font-display text-3xl font-extrabold text-foreground mb-10 text-center">Why GCC Enterprises Choose TalentSpotify</h2></ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Globe className="w-6 h-6" />, title: "Multi-Region Ready", desc: "Multi-language, multi-currency, and multi-timezone support across GCC markets." },
            { icon: <Shield className="w-6 h-6" />, title: "Compliant by Design", desc: "Meets UAE Federal Labour Law requirements for performance documentation." },
            { icon: <Building2 className="w-6 h-6" />, title: "Enterprise Scale", desc: "Built for 200–10,000+ employees with SSO, role-based access, and audit trails." },
            { icon: <Zap className="w-6 h-6" />, title: "Fast Deployment", desc: "Go live in 2 weeks with dedicated GCC onboarding and account management." },
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
          <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Enterprise Integration</p>
          <h2 className="font-display text-3xl font-extrabold text-foreground mb-4">Works with Oracle Fusion HCM</h2>
          <p className="text-muted-foreground mb-8">Many GCC enterprises run Oracle Fusion. TalentSpotify integrates natively for seamless data sync and unified workflows.</p>
          <Link href="/oracle-fusion-performance-management" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
            Learn about Oracle Integration <ArrowRight className="w-4 h-4" />
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
              <summary className="font-semibold text-foreground cursor-pointer list-none flex justify-between items-center">{f.question}<span className="text-primary ml-2 group-open:rotate-45 transition-transform text-xl">+</span></summary>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>

    <LeadCaptureForm context="UAE & GCC Performance Management" />
    <InternalLinks exclude="/gcc/uae-performance-management" />
  </>
);

export default UAEPerformanceManagement;
