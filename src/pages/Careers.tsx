import ScrollReveal from "@/components/ScrollReveal";
import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, Upload } from "lucide-react";
import { landingApiBase, companyIdForLanding } from "@/const";

type ApiJob = {
  _id: string;
  title: string;
  location?: string;
  description?: string;
};

const emptyForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  notice: "",
  experience: "",
  linkedin: "",
  portfolio: "",
  why: "",
};

const Careers = () => {
  const [jobs, setJobs] = useState<ApiJob[]>([]);
  const [jobsLoading, setJobsLoading] = useState(true);
  const [openJob, setOpenJob] = useState<string | null>(null);
  const [applyForm, setApplyForm] = useState(emptyForm);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(`${landingApiBase}/jobs`)
      .then((res) => res.json())
      .then((json) => {
        if (cancelled) return;
        if (json?.success && Array.isArray(json.data)) {
          setJobs(json.data);
        } else {
          setJobs([]);
        }
      })
      .catch(() => {
        if (!cancelled) setJobs([]);
      })
      .finally(() => {
        if (!cancelled) setJobsLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const handleApply = async (e: React.FormEvent, jobId: string) => {
    e.preventDefault();
    setSubmitting(true);
    const url = `${landingApiBase}/jobs/${jobId}/apply`;
    const payload = {
      name: `${applyForm.firstName} ${applyForm.lastName}`.trim(),
      email: applyForm.email,
      phone: applyForm.phone,
      company: applyForm.company,
      linkedinURL: applyForm.linkedin,
      cvURL: "",
      ...(companyIdForLanding ? { companyId: companyIdForLanding } : {}),
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json().catch(() => null);
      if (response.ok && data?.success) {
        alert("Application submitted successfully!");
        setApplyForm(emptyForm);
        setOpenJob(null);
      } else {
        alert(typeof data?.message === "string" ? data.message : "Something went wrong.");
      }
    } catch {
      alert("An error occurred while submitting the form. Please try again.");
    } finally {
      setSubmitting(false);
    }
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

      {/* Open Roles — same API as legacy talent-spotify-landing (GET /jobs, POST /jobs/:id/apply) */}
      <section className="py-24 bg-muted/30 border-t border-border">
        <div className="container max-w-4xl">
          <ScrollReveal><h2 className="text-3xl font-extrabold text-foreground tracking-tight text-center mb-16">Open Roles</h2></ScrollReveal>
          <div className="space-y-4">
            {jobsLoading ? (
              <p className="text-center text-muted-foreground py-8">Loading jobs...</p>
            ) : jobs.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">No open positions at the moment. Check back later.</p>
            ) : (
              jobs.map((job, i) => (
                <ScrollReveal key={job._id} delay={i * 50}>
                  <div className="bg-background rounded-2xl border border-border overflow-hidden">
                    <button type="button" onClick={() => setOpenJob(openJob === job._id ? null : job._id)} className="w-full p-6 flex items-start gap-4 text-left">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-foreground mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {job.location ? (
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">{job.location}</span>
                          ) : null}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-primary text-sm font-medium flex-shrink-0 mt-1">
                        {openJob === job._id ? <>Close <ChevronUp className="w-4 h-4" /></> : <>View & Apply <ChevronDown className="w-4 h-4" /></>}
                      </div>
                    </button>

                    {openJob === job._id && (
                      <div className="border-t border-border p-6">
                        <div className="grid md:grid-cols-2 gap-10">
                          <div>
                            <h4 className="text-base font-bold text-foreground mb-3">About the role</h4>
                            <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap">{job.description || ""}</div>
                          </div>

                          <div className="bg-muted/30 rounded-2xl p-6">
                            <h4 className="text-base font-bold text-foreground mb-5">Apply for this role</h4>
                            <form onSubmit={(e) => handleApply(e, job._id)} className="space-y-3">
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
                              <button type="submit" disabled={submitting} className="w-full py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all disabled:opacity-60">
                                {submitting ? "Submitting..." : "Submit Application →"}
                              </button>
                              <p className="text-xs text-muted-foreground text-center">We review every application within 5 business days.</p>
                            </form>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;
