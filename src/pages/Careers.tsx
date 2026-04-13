import ScrollReveal from "@/components/ScrollReveal";
import { useState } from "react";
import { ChevronDown, ChevronUp, Upload } from "lucide-react";

const jobs = [
  {
    title: "Senior AI/ML Engineer — NLP",
    dept: "Engineering",
    location: "Bengaluru / Remote",
    type: "Full-time",
    desc: "Build and fine-tune NLP models that power TARA's bias detection engine.",
    jd: {
      about: "You'll work on the core AI engine that analyses performance review conversations for bias patterns. This role is central to our mission of making reviews fair.",
      tasks: ["Design and train NLP models for bias detection in multilingual conversations", "Build real-time inference pipelines for live review analysis", "Collaborate with the product team to ship new AI features", "Improve model accuracy across Tamil, Telugu, Kannada, and Hindi"],
      requirements: ["3+ years in NLP/ML with production experience", "Strong Python, PyTorch/TensorFlow", "Experience with transformer models and fine-tuning", "Familiarity with speech-to-text systems is a plus"],
      comp: "Competitive salary + equity. ₹30K annual learning budget. Health coverage for you and family.",
    },
  },
  {
    title: "Product Manager — Performance Intelligence",
    dept: "Product",
    location: "Bengaluru / Remote",
    type: "Full-time",
    desc: "Own the product roadmap for our AI-powered performance review platform.",
    jd: {
      about: "Lead product strategy for our core performance intelligence module, working closely with HR leaders and engineering.",
      tasks: ["Define product roadmap based on customer research", "Write detailed PRDs and work with engineering sprints", "Analyse product metrics and iterate", "Conduct user interviews with CHRO/VP-level stakeholders"],
      requirements: ["4+ years product management, preferably B2B SaaS", "Understanding of HR processes and performance management", "Data-driven decision making", "Excellent communication skills"],
      comp: "Competitive salary + equity. Remote-first culture.",
    },
  },
  {
    title: "Enterprise Account Executive",
    dept: "Sales",
    location: "Bengaluru / Remote",
    type: "Full-time",
    desc: "Close enterprise deals and build relationships with India's largest companies.",
    jd: {
      about: "Drive enterprise sales for TalentSpotify, targeting 500+ employee organisations across India.",
      tasks: ["Manage full sales cycle from prospecting to close", "Build relationships with CHRO and VP-level buyers", "Conduct product demos and ROI presentations", "Collaborate with marketing on pipeline generation"],
      requirements: ["3+ years enterprise B2B SaaS sales", "Experience selling to HR/People teams", "Track record of exceeding quotas", "Strong presentation skills"],
      comp: "Competitive base + uncapped commission + equity.",
    },
  },
  {
    title: "HR Science Researcher",
    dept: "Research",
    location: "Bengaluru / Remote",
    type: "Full-time",
    desc: "Research cognitive biases in performance reviews and inform our AI models.",
    jd: {
      about: "Bridge the gap between I/O psychology research and our AI platform. Your work directly shapes how TARA detects and flags bias.",
      tasks: ["Research cognitive biases in workplace evaluations", "Design frameworks for fair performance assessment", "Collaborate with ML engineers on bias detection models", "Publish findings and represent TalentSpotify at conferences"],
      requirements: ["Masters/PhD in I/O Psychology, Organisational Behaviour, or related field", "Published research in performance management or bias", "Quantitative research methods experience", "Interest in AI/ML applications"],
      comp: "Competitive salary + equity. Conference budget included.",
    },
  },
];

const Careers = () => {
  const [openJob, setOpenJob] = useState<number | null>(null);
  const [applyForm, setApplyForm] = useState({
    firstName: "", lastName: "", email: "", phone: "", company: "", notice: "", experience: "", linkedin: "", portfolio: "", why: "",
  });

  const handleApply = (e: React.FormEvent, jobTitle: string) => {
    e.preventDefault();
    console.log(`Application for ${jobTitle}:`, applyForm);
    alert("Thank you! We review every application within 5 business days.");
  };

  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container text-center">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-4">Careers at TalentSpotify</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-5">
              Build the future of <span className="text-primary">fair work.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">A small team solving a large problem — making every performance review honest, every goal clear, and every reward deserved.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission Quote */}
      <section className="py-16 bg-muted/30 border-y border-border">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <div className="rounded-2xl p-10 bg-foreground">
              <p className="text-lg md:text-xl italic leading-relaxed text-background/90">
                "We are not building HR software. We are building the infrastructure for organisational trust — and we want people who feel the difference."
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Perks */}
      <section className="py-24 bg-background">
        <div className="container">
          <ScrollReveal><h2 className="text-3xl font-extrabold text-foreground tracking-tight text-center mb-16">Why join us</h2></ScrollReveal>
          <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              { emoji: "🧠", title: "Hard problems", desc: "AI bias detection, multilingual NLP, real-time analysis" },
              { emoji: "🌍", title: "Remote-first", desc: "Bengaluru HQ, India-wide remote" },
              { emoji: "📈", title: "Equity & ownership", desc: "Meaningful equity for early team members" },
              { emoji: "📚", title: "₹30K learning budget", desc: "Annual budget for courses, conferences, books" },
              { emoji: "🏥", title: "Health coverage", desc: "You + family + mental health support" },
              { emoji: "🤝", title: "Direct access", desc: "No bureaucracy — talk to founders daily" },
            ].map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 50}>
                <div className="bg-muted/30 rounded-2xl border border-border p-6">
                  <span className="text-2xl mb-3 block">{p.emoji}</span>
                  <h3 className="text-base font-bold text-foreground mb-1">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-24 bg-muted/30 border-t border-border">
        <div className="container max-w-4xl">
          <ScrollReveal><h2 className="text-3xl font-extrabold text-foreground tracking-tight text-center mb-16">Open Roles</h2></ScrollReveal>
          <div className="space-y-4">
            {jobs.map((job, i) => (
              <ScrollReveal key={job.title} delay={i * 50}>
                <div className="bg-background rounded-2xl border border-border overflow-hidden">
                  <button onClick={() => setOpenJob(openJob === i ? null : i)} className="w-full p-6 flex items-start gap-4 text-left">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/8 text-primary">{job.dept}</span>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">{job.location}</span>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">{job.type}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{job.desc}</p>
                    </div>
                    <div className="flex items-center gap-2 text-primary text-sm font-medium flex-shrink-0 mt-1">
                      {openJob === i ? <>Close <ChevronUp className="w-4 h-4" /></> : <>View & Apply <ChevronDown className="w-4 h-4" /></>}
                    </div>
                  </button>

                  {openJob === i && (
                    <div className="border-t border-border p-6">
                      <div className="grid md:grid-cols-2 gap-10">
                        <div>
                          <h4 className="text-base font-bold text-foreground mb-3">About the role</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-5">{job.jd.about}</p>
                          <h4 className="text-base font-bold text-foreground mb-3">What you'll do</h4>
                          <ul className="space-y-2 mb-5">
                            {job.jd.tasks.map((t) => <li key={t} className="text-sm text-muted-foreground flex gap-2"><span className="text-primary">•</span>{t}</li>)}
                          </ul>
                          <h4 className="text-base font-bold text-foreground mb-3">What we're looking for</h4>
                          <ul className="space-y-2 mb-5">
                            {job.jd.requirements.map((r) => <li key={r} className="text-sm text-muted-foreground flex gap-2"><span className="text-primary">•</span>{r}</li>)}
                          </ul>
                          <h4 className="text-base font-bold text-foreground mb-3">Compensation</h4>
                          <p className="text-sm text-muted-foreground">{job.jd.comp}</p>
                        </div>

                        <div className="bg-muted/30 rounded-2xl p-6">
                          <h4 className="text-base font-bold text-foreground mb-5">Apply for this role</h4>
                          <form onSubmit={(e) => handleApply(e, job.title)} className="space-y-3">
                            <div className="grid grid-cols-2 gap-3">
                              <input placeholder="First Name *" required value={applyForm.firstName} onChange={(e) => setApplyForm({ ...applyForm, firstName: e.target.value })} className="px-4 py-3 bg-background border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                              <input placeholder="Last Name *" required value={applyForm.lastName} onChange={(e) => setApplyForm({ ...applyForm, lastName: e.target.value })} className="px-4 py-3 bg-background border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                            </div>
                            <input placeholder="Email *" type="email" required value={applyForm.email} onChange={(e) => setApplyForm({ ...applyForm, email: e.target.value })} className="w-full px-4 py-3 bg-background border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                            <input placeholder="Phone *" required value={applyForm.phone} onChange={(e) => setApplyForm({ ...applyForm, phone: e.target.value })} className="w-full px-4 py-3 bg-background border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                            <input value={job.title} readOnly className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-sm text-muted-foreground cursor-not-allowed" />
                            <div className="grid grid-cols-2 gap-3">
                              <input placeholder="Current Company" value={applyForm.company} onChange={(e) => setApplyForm({ ...applyForm, company: e.target.value })} className="px-4 py-3 bg-background border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                              <select value={applyForm.notice} onChange={(e) => setApplyForm({ ...applyForm, notice: e.target.value })} className="px-4 py-3 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                                <option value="">Notice Period</option>
                                <option>Immediate</option><option>15 days</option><option>30 days</option><option>60 days</option><option>90 days</option>
                              </select>
                            </div>
                            <select required value={applyForm.experience} onChange={(e) => setApplyForm({ ...applyForm, experience: e.target.value })} className="w-full px-4 py-3 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                              <option value="">Total Experience *</option>
                              <option>Fresher / Intern</option><option>1–3 years</option><option>3–5 years</option><option>5–8 years</option><option>8–12 years</option><option>12+ years</option>
                            </select>
                            <input placeholder="LinkedIn Profile URL *" required value={applyForm.linkedin} onChange={(e) => setApplyForm({ ...applyForm, linkedin: e.target.value })} className="w-full px-4 py-3 bg-background border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                            <input placeholder="Portfolio / GitHub URL (optional)" value={applyForm.portfolio} onChange={(e) => setApplyForm({ ...applyForm, portfolio: e.target.value })} className="w-full px-4 py-3 bg-background border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                            <textarea placeholder="Why TalentSpotify? (optional)" rows={3} value={applyForm.why} onChange={(e) => setApplyForm({ ...applyForm, why: e.target.value })} className="w-full px-4 py-3 bg-background border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
                            <div className="border-2 border-dashed border-border rounded-lg p-5 text-center cursor-pointer hover:border-primary transition-colors">
                              <Upload className="w-5 h-5 text-muted-foreground mx-auto mb-1" />
                              <p className="text-xs text-muted-foreground">Drop your resume here (PDF/DOCX, 5MB max)</p>
                            </div>
                            <button type="submit" className="w-full py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all">
                              Submit Application →
                            </button>
                            <p className="text-xs text-muted-foreground text-center">We review every application within 5 business days.</p>
                          </form>
                        </div>
                      </div>
                    </div>
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

export default Careers;
