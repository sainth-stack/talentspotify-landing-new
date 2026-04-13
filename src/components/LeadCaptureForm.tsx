import { useState } from "react";
import { ArrowRight } from "lucide-react";

const LeadCaptureForm = ({ heading = "See TalentSpotify in Action", context = "" }: { heading?: string; context?: string }) => {
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Demo Request${context ? ` — ${context}` : ""} from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nPhone: ${form.phone}\nContext: ${context}`
    );
    window.location.href = `mailto:contact@talentspotify.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-20 bg-foreground" id="book-demo">
      <div className="container max-w-2xl text-center">
        <h2 className="font-display text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">{heading}</h2>
        <p className="text-primary-foreground/60 mb-8">Book a personalised demo with our team. No commitment required.</p>
        <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4 text-left">
          <input placeholder="Full Name *" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary" />
          <input placeholder="Work Email *" type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary" />
          <input placeholder="Company" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} className="px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary" />
          <input placeholder="Phone" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary" />
          <div className="sm:col-span-2">
            <button type="submit" className="w-full px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
              Request Demo <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LeadCaptureForm;
