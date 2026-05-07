import ScrollReveal from "@/components/ScrollReveal";
import { useState } from "react";
import { BookOpen, FileText, BarChart3, Video, ArrowRight, ExternalLink } from "lucide-react";

const categories = ["All", "Guides", "Templates", "Case Studies", "Webinars"];

const resources = [
  { cat: "Guides", title: "OKR Readiness Check", desc: "Assess if your org is ready for OKR adoption with this comprehensive guide.", icon: <BookOpen className="w-5 h-5 text-primary" />, link: "https://okrreadynesscheck.talentspotify.com/" },
  { cat: "Guides", title: "Gamified OKR Learning", desc: "Master OKRs through interactive, gamified learning modules designed for teams.", icon: <BookOpen className="w-5 h-5 text-violet" />, link: "https://okr.talentspotify.com/" },
  { cat: "Guides", title: "Review Bias Detector", desc: "A framework to identify and address common biases in performance reviews.", icon: <FileText className="w-5 h-5 text-teal" /> },
  { cat: "Templates", title: "Employee Cost Calculator", desc: "Calculate the true cost of an employee including benefits, taxes, and overhead.", icon: <BarChart3 className="w-5 h-5 text-gold" /> },
  { cat: "Templates", title: "Attrition Cost Calculator", desc: "Understand the financial impact of employee turnover on your organisation.", icon: <BarChart3 className="w-5 h-5 text-violet" /> },
  { cat: "Case Studies", title: "OKR Health Score", desc: "Measure the health of your OKR program across alignment, adoption, and impact.", icon: <FileText className="w-5 h-5 text-primary" /> },
  { cat: "Webinars", title: "Building Bias-Free Reviews", desc: "Watch our recorded webinar on implementing fair performance reviews at scale.", icon: <Video className="w-5 h-5 text-teal" /> },
];

const Resources = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? resources : resources.filter((r) => r.cat === filter);

  return (
    <>
      <section className="py-20 bg-surface-2">
        <div className="container text-center">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">Resources</p>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">Resource Hub</h1>
            <p className="text-lg text-ink-3 max-w-xl mx-auto">Guides, templates, calculators, and webinars to help your HR team succeed.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container">
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((c) => (
              <button key={c} onClick={() => setFilter(c)} className={`px-4 py-2 text-sm font-medium rounded-pill transition-colors ${filter === c ? "bg-primary text-primary-foreground" : "bg-surface-2 text-ink-3 hover:bg-surface-3"}`}>
                {c}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {filtered.map((r, i) => (
              <ScrollReveal key={r.title} delay={i * 50}>
                <div className="bg-surface-2 rounded-2xl border border-border p-6 hover:shadow-md transition-shadow h-full flex flex-col">
                  <span className="px-3 py-1 rounded-pill text-xs font-medium bg-primary-light text-primary w-fit mb-3">{r.cat}</span>
                  <div className="w-10 h-10 rounded-xl bg-primary-mid flex items-center justify-center mb-3">{r.icon}</div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{r.title}</h3>
                  <p className="text-sm text-ink-3 mb-4 flex-1">{r.desc}</p>
                  {r.link ? (
                    <a href={r.link} target="_blank" rel="noopener noreferrer" className="text-sm text-primary font-medium hover:underline inline-flex items-center gap-1">
                      Access Resource <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <a href="/contact" className="text-sm text-primary font-medium hover:underline inline-flex items-center gap-1">
                      Request Demo <ArrowRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resources;
