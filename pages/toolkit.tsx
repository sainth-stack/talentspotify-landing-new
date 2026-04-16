import ScrollReveal from "@/components/ScrollReveal";
import { Sparkles, ArrowRight } from "lucide-react";

const tools = [
  { title: "AI-Assisted Goal Writing", desc: "Let AI help you write clear, measurable OKRs in seconds." },
  { title: "Review-to-OKR Alignment", desc: "Map review feedback to specific objectives and key results." },
  { title: "Real-Time Progress Visibility", desc: "Track OKR progress across teams in a single dashboard." },
  { title: "Employee Cost Calculator", desc: "Calculate the full cost of an employee — salary, benefits, taxes." },
  { title: "Attrition Cost Calculator", desc: "Quantify the financial impact of losing an employee." },
  { title: "OKR Health Score", desc: "Get a health score for your OKR program across 5 dimensions." },
  { title: "OKR Readiness Check", desc: "Assess if your organisation is ready for OKR adoption." },
  { title: "Review Bias Detector", desc: "Analyse review text for common cognitive biases." },
  { title: "OKR Writer", desc: "Generate well-structured OKRs from a simple description." },
  { title: "Feedback Rewriter", desc: "Transform vague feedback into actionable, bias-free language." },
];

const Toolkit = () => (
  <>
    <section className="py-20 bg-surface-2">
      <div className="container text-center">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">HR Toolkit</p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">Free tools for HR leaders</h1>
          <p className="text-lg text-ink-3 max-w-xl mx-auto">Interactive tools to help you set better goals, detect bias, and calculate costs.</p>
        </ScrollReveal>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, i) => (
            <ScrollReveal key={tool.title} delay={i * 50}>
              <div className="bg-surface-2 rounded-2xl border border-border p-6 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-primary-mid flex items-center justify-center mb-3">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-base font-semibold text-foreground mb-2">{tool.title}</h3>
                <p className="text-sm text-ink-3 mb-4">{tool.desc}</p>
                <a href="/contact" className="text-sm text-primary font-medium hover:underline inline-flex items-center gap-1">
                  Try it <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Toolkit;
