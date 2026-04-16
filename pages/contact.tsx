import ScrollReveal from "@/components/ScrollReveal";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { baseURL } from "@/const";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const payload = {
      fullName: form.name,
      firstName: "",
      lastName: "",
      businessEmail: form.email,
      company: form.company,
      jobTitle: "",
      sizeOfOrganization: 10,
      phoneNumber: "",
      message: form.message,
    };

    try {
      const response = await fetch(baseURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => null);
      if (response.ok && data?.success) {
        setSuccess(true);
        setForm({ name: "", email: "", company: "", message: "" });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError(typeof data?.message === "string" ? data.message : "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="py-20 bg-surface-2">
        <div className="container text-center">
          <ScrollReveal>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">Get in touch</h1>
            <p className="text-lg text-ink-3 max-w-xl mx-auto">We'd love to hear from you. Reach out to the right team below.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: <Mail className="w-6 h-6 text-primary" />, title: "Sales", email: "contact@talentspotify.com", desc: "Talk to our sales team about pricing and demos" },
              { icon: <Phone className="w-6 h-6 text-teal" />, title: "Support", email: "contact@talentspotify.com", desc: "Get help with your existing account" },
              { icon: <MapPin className="w-6 h-6 text-violet" />, title: "Partnerships", email: "contact@talentspotify.com", desc: "Explore integration and partnership opportunities" },
            ].map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 100}>
                <div className="bg-surface-2 rounded-2xl border border-border p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary-mid flex items-center justify-center mx-auto mb-4">{c.icon}</div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">{c.title}</h3>
                  <a href={`mailto:${c.email}`} className="text-primary text-sm hover:underline block mb-2">{c.email}</a>
                  <p className="text-xs text-ink-3">{c.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <ScrollReveal>
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Send us a message</h2>
                <input placeholder="Your Name *" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 bg-surface-2 border border-border rounded-lg text-sm text-foreground placeholder:text-ink-4 focus:outline-none focus:ring-2 focus:ring-primary" />
                <input placeholder="Email *" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 bg-surface-2 border border-border rounded-lg text-sm text-foreground placeholder:text-ink-4 focus:outline-none focus:ring-2 focus:ring-primary" />
                <input placeholder="Company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="w-full px-4 py-3 bg-surface-2 border border-border rounded-lg text-sm text-foreground placeholder:text-ink-4 focus:outline-none focus:ring-2 focus:ring-primary" />
                <textarea placeholder="Your Message *" required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 bg-surface-2 border border-border rounded-lg text-sm text-foreground placeholder:text-ink-4 focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
                <button type="submit" disabled={loading} className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary-dark transition-all hover:-translate-y-px hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed">
                  {loading ? "Sending..." : "Send Message →"}
                </button>
                {success && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-sm text-green-800">✓ Message sent successfully! We'll get back to you soon.</p>
                  </div>
                )}
                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-sm text-red-800">{error}</p>
                  </div>
                )}
              </form>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Our Office</h2>
                <div className="bg-surface-2 rounded-2xl border border-border p-6 mb-4">
                  <p className="text-sm text-ink-2 font-medium mb-1">TalentSpotify Technologies Pvt. Ltd.</p>
                  <p className="text-sm text-ink-3 leading-relaxed">Bengaluru, Karnataka, India</p>
                </div>
                <div className="bg-surface-2 rounded-2xl border border-border h-48 flex items-center justify-center">
                  <p className="text-sm text-ink-4">📍 Map embed placeholder</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
