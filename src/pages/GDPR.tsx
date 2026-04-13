import ScrollReveal from "@/components/ScrollReveal";

const GDPR = () => (
  <section className="py-20 bg-background">
    <div className="container max-w-4xl">
      <ScrollReveal>
        <h1 className="font-display text-4xl font-semibold text-foreground mb-2">GDPR Compliance</h1>
        <p className="text-sm text-ink-4 mb-10">Your rights under the General Data Protection Regulation</p>
      </ScrollReveal>
      <div className="prose prose-sm max-w-none text-ink-2 font-body">
        {[
          { title: "Your Data Subject Rights", content: "Under GDPR, you have the right to: access your personal data, rectify inaccurate data, erase your data ('right to be forgotten'), restrict processing, data portability, and object to processing. To exercise any of these rights, contact contact@talentspotify.com." },
          { title: "Data Protection Officer", content: "Our DPO can be reached at contact@talentspotify.com. We respond to all data subject requests within 30 days as required by GDPR." },
          { title: "Data Retention", content: "Active account data: retained for the duration of the subscription. Performance review recordings: 24 months after analysis. Account data after termination: deleted within 30 days. Anonymised analytics: retained indefinitely." },
          { title: "Sub-Processors", content: "We use the following sub-processors: AWS (infrastructure, Mumbai region), Google Cloud (AI/ML processing), SendGrid (email delivery), Stripe (payment processing). All sub-processors are GDPR-compliant with appropriate data processing agreements in place." },
          { title: "International Data Transfers", content: "Data is primarily stored in AWS Mumbai. For users in the EEA, data transfers outside the EEA are protected by Standard Contractual Clauses (SCCs) as approved by the European Commission." },
          { title: "Breach Notification", content: "In the event of a personal data breach, we will notify the relevant supervisory authority within 72 hours and affected individuals without undue delay, as required by GDPR Article 33 and 34." },
        ].map((s) => (
          <ScrollReveal key={s.title}>
            <div className="mb-8">
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">{s.title}</h2>
              <p className="text-ink-3 leading-relaxed">{s.content}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default GDPR;
