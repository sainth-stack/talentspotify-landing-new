import ScrollReveal from "@/components/ScrollReveal";
import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronDown, ChevronUp, Upload } from "lucide-react";
import {
  landingApiBase,
  companyIdForLanding,
  cloudinaryUploadUrl,
  cloudinaryUploadPreset,
} from "@/const";

type ApiJob = {
  _id: string;
  title: string;
  location?: string;
  description?: string;
};

/** Matches landing `POST .../jobs/:id/apply` body (see legacy Careers.js + API) */
const emptyApplyForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  linkedinURL: "",
  cvURL: "",
};

const MAX_CV_BYTES = 5 * 1024 * 1024;

const Careers = () => {
  const [jobs, setJobs] = useState<ApiJob[]>([]);
  const [jobsLoading, setJobsLoading] = useState(true);
  const [openJob, setOpenJob] = useState<string | null>(null);
  const [applyForm, setApplyForm] = useState(emptyApplyForm);
  const [submitting, setSubmitting] = useState(false);
  const [uploadingCv, setUploadingCv] = useState(false);
  const [cvUploadError, setCvUploadError] = useState("");
  const [applyError, setApplyError] = useState("");
  const [dragCv, setDragCv] = useState(false);
  const cvFileInputRef = useRef<HTMLInputElement>(null);

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

  useEffect(() => {
    if (openJob) {
      setApplyForm(emptyApplyForm);
      setApplyError("");
      setCvUploadError("");
    }
  }, [openJob]);

  const uploadCvToCloudinary = useCallback(async (file: File) => {
    if (file.size > MAX_CV_BYTES) {
      setCvUploadError("File must be 5MB or smaller.");
      return;
    }
    setUploadingCv(true);
    setCvUploadError("");
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", cloudinaryUploadPreset);
    try {
      const res = await fetch(cloudinaryUploadUrl, {
        method: "POST",
        body: formData,
      });
      const data = await res.json().catch(() => null);
      if (data?.secure_url) {
        setApplyForm((f) => ({ ...f, cvURL: data.secure_url }));
      } else {
        setCvUploadError(
          typeof data?.error?.message === "string" ? data.error.message : "Upload failed."
        );
      }
    } catch {
      setCvUploadError("Upload failed. Please try again.");
    } finally {
      setUploadingCv(false);
    }
  }, []);

  const onCvFile = (file: File | undefined) => {
    if (!file) return;
    uploadCvToCloudinary(file);
  };

  const handleApply = async (e: React.FormEvent, jobId: string) => {
    e.preventDefault();
    setApplyError("");
    if (!applyForm.cvURL?.trim()) {
      setApplyError("Please upload your CV (resume).");
      return;
    }
    setSubmitting(true);
    const url = `${landingApiBase}/jobs/${jobId}/apply`;
    const payload = {
      name: applyForm.name.trim(),
      email: applyForm.email.trim(),
      phone: applyForm.phone.trim(),
      company: applyForm.company.trim(),
      linkedinURL: applyForm.linkedinURL.trim(),
      cvURL: applyForm.cvURL.trim(),
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
        setApplyForm(emptyApplyForm);
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
                            <h4 className="text-base font-bold text-foreground mb-2">Apply for this role</h4>
                            <p className="text-xs text-muted-foreground mb-5">{job.title}</p>
                            <form onSubmit={(e) => handleApply(e, job._id)} className="space-y-3">
                              <input
                                placeholder="Full name *"
                                required
                                name="name"
                                autoComplete="name"
                                value={applyForm.name}
                                onChange={(e) => setApplyForm({ ...applyForm, name: e.target.value })}
                                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                              />
                              <input
                                placeholder="Email *"
                                type="email"
                                required
                                name="email"
                                autoComplete="email"
                                value={applyForm.email}
                                onChange={(e) => setApplyForm({ ...applyForm, email: e.target.value })}
                                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                              />
                              <input
                                placeholder="Phone number *"
                                required
                                name="phone"
                                autoComplete="tel"
                                value={applyForm.phone}
                                onChange={(e) => setApplyForm({ ...applyForm, phone: e.target.value })}
                                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                              />
                              <input
                                placeholder="Role *"
                                required
                                name="company"
                                value={applyForm.company}
                                onChange={(e) => setApplyForm({ ...applyForm, company: e.target.value })}
                                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                              />
                              <input
                                placeholder="LinkedIn URL *"
                                required
                                name="linkedinURL"
                                value={applyForm.linkedinURL}
                                onChange={(e) => setApplyForm({ ...applyForm, linkedinURL: e.target.value })}
                                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                              />

                              <input
                                ref={cvFileInputRef}
                                type="file"
                                className="sr-only"
                                accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                disabled={uploadingCv || submitting}
                                onChange={(e) => {
                                  onCvFile(e.target.files?.[0]);
                                  e.target.value = "";
                                }}
                              />
                              <div
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                  if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    if (!uploadingCv && !submitting) cvFileInputRef.current?.click();
                                  }
                                }}
                                onClick={() => !uploadingCv && !submitting && cvFileInputRef.current?.click()}
                                onDragOver={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  setDragCv(true);
                                }}
                                onDragLeave={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  setDragCv(false);
                                }}
                                onDrop={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  setDragCv(false);
                                  if (uploadingCv || submitting) return;
                                  const file = e.dataTransfer.files?.[0];
                                  if (file) onCvFile(file);
                                }}
                                className={`border-2 border-dashed rounded-lg p-5 text-center transition-colors ${
                                  dragCv ? "border-primary bg-primary/5" : "border-border hover:border-primary cursor-pointer"
                                } ${uploadingCv || submitting ? "opacity-60 pointer-events-none" : ""}`}
                              >
                                <Upload className="w-5 h-5 text-muted-foreground mx-auto mb-2" />
                                <p className="text-sm font-medium text-foreground">
                                  {uploadingCv ? "Uploading…" : "Drag your resume here or click to upload"}
                                </p>
                                <p className="text-xs text-muted-foreground mt-1">PDF, DOCX — 5MB max (required)</p>
                                {applyForm.cvURL ? (
                                  <p className="text-xs text-primary font-medium mt-2 truncate" title={applyForm.cvURL}>
                                    Resume attached ✓
                                  </p>
                                ) : null}
                              </div>
                              {cvUploadError ? <p className="text-xs text-destructive">{cvUploadError}</p> : null}
                              {applyError ? <p className="text-xs text-destructive">{applyError}</p> : null}

                              <button
                                type="submit"
                                disabled={submitting || uploadingCv}
                                className="w-full py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all disabled:opacity-60"
                              >
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
