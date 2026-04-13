import ScrollReveal from "@/components/ScrollReveal";

const Terms = () => (
  <section className="py-20 bg-background">
    <div className="container max-w-4xl">
      <ScrollReveal>
        <h1 className="font-display text-4xl font-semibold text-foreground mb-2">Terms & Conditions</h1>
        <p className="text-sm text-ink-4 mb-10">Last updated: 1 March 2025</p>
      </ScrollReveal>
      <div className="prose prose-sm max-w-none text-ink-2 font-body">
        {[
          { title: "1. Acceptance of Terms", content: "By accessing or using TalentSpotify's services, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our services." },
          { title: "2. Services", content: "TalentSpotify provides AI-powered performance review analysis, OKR management, and employee recognition services through our web platform. Features vary by subscription plan." },
          { title: "3. User Accounts", content: "You must provide accurate information when creating an account. You are responsible for maintaining the confidentiality of your login credentials and for all activities under your account." },
          { title: "4. Subscription & Payments", content: "Subscription fees are billed monthly or annually as selected. All prices are in INR and exclude applicable taxes. Refunds are available within 14 days of initial purchase." },
          { title: "5. Data Ownership", content: "You retain ownership of all data you upload to TalentSpotify. We process your data solely to provide our services. Upon account termination, your data will be deleted within 30 days." },
          { title: "6. Intellectual Property", content: "All TalentSpotify software, algorithms, designs, and content are owned by TalentSpotify Technologies Pvt. Ltd. You may not copy, modify, or reverse-engineer our platform." },
          { title: "7. Limitation of Liability", content: "TalentSpotify's total liability shall not exceed the fees paid by you in the preceding 12 months. We are not liable for indirect, incidental, or consequential damages." },
          { title: "8. Governing Law", content: "These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of Bengaluru, Karnataka." },
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

export default Terms;
