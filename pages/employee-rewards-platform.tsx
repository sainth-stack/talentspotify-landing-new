import SEOHead from "@/components/SEOHead";
import { breadcrumbSchema, faqSchema, softwareApplicationSchema } from "@/lib/schemas";
import ScrollReveal from "@/components/ScrollReveal";
import CustomerLogosStrip from "@/components/CustomerLogosStrip";
import TrustBadges from "@/components/TrustBadges";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import InternalLinks from "@/components/InternalLinks";
import { Trophy, Heart, Star, Users, Zap, ArrowRight } from "lucide-react";
import Link from 'next/link';

const faqs = [
  { question: "What is an employee rewards and recognition platform?", answer: "It's software that enables peer-to-peer recognition, manager awards, milestone celebrations, and gamified engagement — integrated into daily work to boost morale and retention." },
  { question: "How does TalentSpotify handle employee recognition?", answer: "TalentSpotify offers peer recognition, manager spot awards, milestone badges, and a points-based rewards engine — all integrated with OKRs and performance reviews." },
  { question: "Can recognition be tied to performance goals?", answer: "Yes. TalentSpotify links recognition to OKR achievements, so rewards are data-driven and meaningful — not arbitrary." },
  { question: "Does TalentSpotify support rewards redemption?", answer: "Yes. Employees earn points that can be redeemed for gift cards, experiences, or company-specific perks." },
  { question: "Is the platform suitable for distributed teams?", answer: "Absolutely. TalentSpotify's recognition features work across geographies with multi-language and multi-currency support." },
];

const EmployeeRewardsPlatform = () => (
  <>
    <SEOHead
      title="Employee Rewards & Recognition Software | TalentSpotify"
      description="Boost engagement with AI-powered employee rewards, peer recognition, and gamified experiences. Integrated with OKRs and performance reviews."
      canonical="/employee-rewards-platform"
      keywords="employee rewards software, recognition platform India, employee engagement tool, peer recognition software"
      jsonLd={[
        softwareApplicationSchema,
        breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Employee Rewards Platform", url: "/employee-rewards-platform" }]),
        faqSchema(faqs),
      ]}
    />

    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-accent/[0.03]" />
      <div className="container relative max-w-4xl text-center">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-4">Employee Rewards & Recognition</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-foreground leading-tight tracking-tight mb-6">
            Recognition That <span className="text-primary">Drives Real Engagement</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Peer recognition, rewards, and gamified engagement — integrated with OKRs and performance reviews for maximum impact.
          </p>
          <a href="#book-demo" className="inline-block px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary-dark transition-all shadow-lg">Request Demo</a>
        </ScrollReveal>
      </div>
    </section>

    <CustomerLogosStrip />

    <section className="py-20 bg-surface-2">
      <div className="container max-w-5xl">
        <ScrollReveal><h2 className="font-display text-3xl font-extrabold text-foreground mb-10 text-center">How TalentSpotify Powers Recognition</h2></ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Star className="w-6 h-6" />, title: "Peer Recognition", desc: "Kudos, shoutouts, and value-based badges from any team member." },
            { icon: <Trophy className="w-6 h-6" />, title: "Rewards Engine", desc: "Points-based system with gift cards, experiences, and custom perks." },
            { icon: <Heart className="w-6 h-6" />, title: "Milestone Celebrations", desc: "Automated celebrations for work anniversaries and achievements." },
            { icon: <Users className="w-6 h-6" />, title: "Team Leaderboards", desc: "Gamified leaderboards that drive healthy competition and engagement." },
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

    <LeadCaptureForm context="Employee Rewards Platform" />
    <InternalLinks exclude="/employee-rewards-platform" />
  </>
);

export default EmployeeRewardsPlatform;
