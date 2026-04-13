import { useParams, Navigate } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { articleSchema, breadcrumbSchema } from "@/lib/schemas";
import ScrollReveal from "@/components/ScrollReveal";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import InternalLinks from "@/components/InternalLinks";
import { blogPosts } from "./Blog";
import { Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const blogContent: Record<string, string[]> = {
  "performance-management-trends-2026": [
    "The performance management landscape is undergoing a radical transformation. In 2026, AI-powered tools are no longer optional — they're essential for organisations that want fair, efficient, and data-driven reviews.",
    "**1. AI-Powered Fairness Scoring** — Tools like TalentSpotify's AI calibration engine analyse review text and ratings for unconscious bias, ensuring every employee gets a fair assessment regardless of their manager.",
    "**2. Voice-Based Reviews** — TARA, TalentSpotify's voice agent, conducts structured review conversations that capture nuanced feedback while maintaining consistency across the organisation.",
    "**3. OKR-Linked Performance** — The era of subjective ratings is ending. Leading companies now tie performance scores directly to measurable OKR outcomes.",
    "**4. Continuous Feedback Loops** — Annual reviews are being replaced by quarterly check-ins, real-time feedback, and peer recognition integrated into daily workflows.",
    "**5. Predictive Attrition Analytics** — AI models now predict flight risk based on engagement signals, review sentiment, and goal progress — giving HR teams time to intervene.",
  ],
  "okr-implementation-guide-india": [
    "Implementing OKRs in an Indian organisation requires understanding the unique cultural and operational context. This guide walks you through a proven approach.",
    "**Step 1: Readiness Assessment** — Use TalentSpotify's OKR Readiness Check to evaluate your organisation's goal-setting maturity across 5 dimensions.",
    "**Step 2: Leadership Alignment** — OKRs must start from the top. Work with C-suite to define 3–5 company-level objectives for the quarter.",
    "**Step 3: Cascading Goals** — Use TalentSpotify's visual cascading tool to align team and individual OKRs to company objectives.",
    "**Step 4: Manager Training** — Provide 2-hour workshops on writing effective key results, checking in weekly, and using the OKR dashboard.",
    "**Step 5: First Quarter Review** — After 90 days, review OKR health scores, completion rates, and alignment gaps. Iterate and improve.",
  ],
  "eliminate-bias-performance-reviews": [
    "Unconscious bias in performance reviews costs organisations their best talent. Research shows 65% of reviews contain some form of cognitive bias — from recency bias to halo effect.",
    "**The Problem** — Managers unknowingly rate employees based on personal affinity, recent events, or demographic stereotypes rather than actual performance.",
    "**AI Calibration** — TalentSpotify's AI engine analyses rating distributions across teams, flags statistical anomalies, and suggests calibration adjustments.",
    "**Voice-Based Consistency** — TARA AI conducts structured review conversations using the same framework for every employee, eliminating interviewer variability.",
    "**Bias Detection** — TalentSpotify's review text analyser flags common cognitive biases in written feedback, helping managers rewrite more objectively.",
    "**Measurable Impact** — Companies using TalentSpotify's fairness tools report 60% improvement in perceived review fairness and 40% reduction in review-related grievances.",
  ],
};

const defaultContent = [
  "This article is coming soon. In the meantime, request a demo to learn more about how TalentSpotify can transform your HR processes.",
  "**Key Takeaways:**",
  "• AI-powered performance management eliminates bias and saves time",
  "• OKR alignment ensures every employee understands their contribution",
  "• Employee recognition drives measurable engagement improvements",
  "• Oracle Fusion integration means no disruption to existing HR workflows",
];

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const content = blogContent[slug!] || defaultContent;

  return (
    <>
      <SEOHead
        title={`${post.title} | TalentSpotify Blog`}
        description={post.excerpt}
        canonical={`/blog/${post.slug}`}
        ogType="article"
        jsonLd={[
          articleSchema({ title: post.title, description: post.excerpt, url: `/blog/${post.slug}`, datePublished: post.date }),
          breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Blog", url: "/blog" }, { name: post.title, url: `/blog/${post.slug}` }]),
        ]}
      />

      <section className="py-20 bg-surface-2">
        <div className="container max-w-3xl">
          <ScrollReveal>
            <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline mb-6">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
            <span className="inline-block text-[10px] uppercase tracking-wider text-primary font-bold mb-3 bg-primary/10 px-2 py-1 rounded">{post.category}</span>
            <h1 className="font-display text-3xl md:text-4xl font-extrabold text-foreground mb-4 leading-tight">{post.title}</h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {post.readTime}</span>
              <span>{new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container max-w-3xl">
          <article className="prose prose-slate max-w-none">
            {content.map((para, i) => (
              <ScrollReveal key={i} delay={i * 40}>
                <p className="text-base text-foreground/80 leading-relaxed mb-6" dangerouslySetInnerHTML={{
                  __html: para.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>')
                }} />
              </ScrollReveal>
            ))}
          </article>
        </div>
      </section>

      <LeadCaptureForm context={`Blog: ${post.title}`} />
      <InternalLinks exclude="/blog" />
    </>
  );
};

export default BlogPost;
