import ScrollReveal from "@/components/ScrollReveal";
import { ExternalLink, Download, Mail } from "lucide-react";

const pressItems = [
  { pub: "YourStory", date: "15 Jan 2026", title: "TalentSpotify raises seed round to fight bias in performance reviews", snippet: "The Bengaluru-based startup is using AI voice agents to detect cognitive bias in real-time during performance reviews." },
  { pub: "Inc42", date: "8 Dec 2025", title: "How TARA is changing the way Indian companies review employees", snippet: "An inside look at the AI voice agent that's making performance reviews fairer across 50+ Indian companies." },
  { pub: "People Matters", date: "22 Nov 2025", title: "OKR-linked recognition: the future of employee rewards", snippet: "TalentSpotify's gamified rewards engine ties recognition directly to goal achievement, replacing outdated annual bonus cycles." },
  { pub: "Economic Times HR", date: "5 Oct 2025", title: "TalentSpotify wins NHRD innovation award for AI in HR", snippet: "The startup was recognised for its novel approach to combining NLP bias detection with OKR management." },
];

const Press = () => (
  <>
    <section className="py-20 bg-surface-2">
      <div className="container text-center">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">Press</p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">TalentSpotify in the news</h1>
          <p className="text-lg text-ink-3 max-w-xl mx-auto">Latest coverage, announcements, and media resources.</p>
        </ScrollReveal>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="container max-w-4xl">
        <div className="space-y-4 mb-16">
          {pressItems.map((item, i) => (
            <ScrollReveal key={i} delay={i * 50}>
              <div className="bg-surface-2 rounded-2xl border border-border p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 rounded-pill text-xs font-semibold bg-primary-light text-primary">{item.pub}</span>
                  <span className="text-xs text-ink-4">{item.date}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-ink-3 mb-3">{item.snippet}</p>
                <button className="text-sm text-primary font-medium hover:underline inline-flex items-center gap-1">
                  Read more <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <ScrollReveal>
            <div className="bg-surface-2 rounded-2xl border border-border p-6">
              <Download className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">Press Kit</h3>
              <p className="text-sm text-ink-3 mb-4">Logos, brand guidelines, founder photos, and product screenshots.</p>
              <button className="px-4 py-2 text-sm font-medium border border-primary text-primary rounded-lg hover:bg-primary-light transition-colors">
                Download Press Kit
              </button>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="bg-surface-2 rounded-2xl border border-border p-6">
              <Mail className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">Media Contact</h3>
              <p className="text-sm text-ink-3 mb-4">For press inquiries, interviews, and speaking requests.</p>
              <a href="mailto:contact@talentspotify.com" className="text-sm text-primary font-medium hover:underline">contact@talentspotify.com</a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  </>
);

export default Press;
