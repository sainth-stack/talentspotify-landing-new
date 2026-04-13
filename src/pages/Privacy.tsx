import ScrollReveal from "@/components/ScrollReveal";

const Privacy = () => (
  <section className="py-20 bg-background">
    <div className="container max-w-4xl">
      <ScrollReveal>
        <h1 className="font-display text-4xl font-semibold text-foreground mb-2">Privacy Policy</h1>
        <p className="text-sm text-ink-4 mb-10">Last updated: 1 March 2025</p>
      </ScrollReveal>
      <div className="prose prose-sm max-w-none text-ink-2 font-body">
        {[
          { title: "1. Data We Collect", content: "We collect personal information you provide when creating an account, including name, email, company, and job title. Usage data such as page views, feature usage, and session duration is collected automatically. Performance review data processed by TARA is stored securely and used only for bias analysis." },
          { title: "2. How We Use Your Data", content: "Your data is used to provide and improve our services, analyse performance reviews for bias, generate OKR insights, manage reward programs, and communicate product updates. We never sell your personal data to third parties." },
          { title: "3. Cookies", content: "We use strictly necessary cookies for authentication and session management. Analytics cookies (optional) help us understand usage patterns. Marketing cookies (optional) are used for relevant advertising. You can manage your preferences via our cookie settings." },
          { title: "4. DPDPA 2023 Compliance", content: "As an Indian company, we comply with the Digital Personal Data Protection Act, 2023. We act as a Data Fiduciary and process data only for legitimate purposes. You have the right to access, correct, and erase your personal data." },
          { title: "5. GDPR Compliance", content: "For users in the European Economic Area, we comply with GDPR requirements. We process data under legitimate interest and consent bases. You can exercise your data subject rights by contacting our DPO." },
          { title: "6. Data Security", content: "All data is encrypted at rest (AES-256) and in transit (TLS 1.3). We host on AWS Mumbai with SOC 2 Type II compliance. Regular security audits and penetration testing are conducted." },
          { title: "7. Contact", content: "For privacy-related inquiries, contact our Data Protection Officer at contact@talentspotify.com. TalentSpotify Private Limited, Bengaluru, Karnataka, India." },
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

export default Privacy;
