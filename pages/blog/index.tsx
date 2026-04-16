import SEOHead from "@/components/SEOHead";
import { breadcrumbSchema, articleSchema } from "@/lib/schemas";
import ScrollReveal from "@/components/ScrollReveal";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import InternalLinks from "@/components/InternalLinks";
import Link from 'next/link';
import { ArrowRight, Clock } from "lucide-react";

const blogPosts = [
  {
    slug: "performance-management-trends-2026",
    title: "Top Performance Management Trends for 2026",
    excerpt: "From AI-powered fairness scoring to voice-based reviews, here are the trends reshaping how organisations manage employee performance.",
    date: "2026-03-15",
    readTime: "8 min read",
    category: "Performance Management",
  },
  {
    slug: "okr-implementation-guide-india",
    title: "The Complete OKR Implementation Guide for Indian Companies",
    excerpt: "A step-by-step guide to rolling out OKRs in your organisation — from readiness assessment to first-quarter review.",
    date: "2026-03-01",
    readTime: "12 min read",
    category: "OKRs",
  },
  {
    slug: "eliminate-bias-performance-reviews",
    title: "How to Eliminate Bias in Performance Reviews Using AI",
    excerpt: "65% of performance reviews are affected by unconscious bias. Learn how AI calibration and voice-based reviews create fairer outcomes.",
    date: "2026-02-20",
    readTime: "6 min read",
    category: "AI & Fairness",
  },
  {
    slug: "oracle-fusion-performance-management-gap",
    title: "Why Oracle Fusion Alone Isn't Enough for Performance Management",
    excerpt: "Oracle Fusion HCM is great for core HR. But performance management needs AI fairness, OKR alignment, and real-time feedback.",
    date: "2026-02-10",
    readTime: "7 min read",
    category: "Enterprise Integration",
  },
  {
    slug: "employee-recognition-roi",
    title: "The ROI of Employee Recognition Programs",
    excerpt: "Companies with strong recognition programs see 31% lower turnover. Here's how to build a recognition strategy that delivers measurable ROI.",
    date: "2026-01-25",
    readTime: "5 min read",
    category: "Recognition",
  },
  {
    slug: "gcc-hrtech-landscape",
    title: "HRTech in the GCC: What UAE Enterprises Need in 2026",
    excerpt: "The GCC HR technology market is evolving fast. Here's what UAE and Saudi enterprises should look for in performance management software.",
    date: "2026-01-15",
    readTime: "9 min read",
    category: "GCC",
  },
];

export { blogPosts };

const Blog = () => (
  <>
    <SEOHead
      title="Blog — HR Insights & Performance Management | TalentSpotify"
      description="Expert insights on performance management, OKRs, AI in HR, employee recognition, and HRTech trends for India and GCC markets."
      canonical="/blog"
      keywords="HR blog, performance management insights, OKR best practices, HRTech India"
      jsonLd={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Blog", url: "/blog" }])}
    />

    <section className="py-20 bg-surface-2">
      <div className="container text-center">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">Blog</p>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-4">Insights for HR Leaders</h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">Expert insights on performance management, OKRs, AI fairness, and building great workplaces.</p>
        </ScrollReveal>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {blogPosts.map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 60}>
              <Link href={`/blog/${post.slug}`} className="block bg-surface-2 rounded-2xl border border-border p-6 hover:shadow-lg hover:border-primary/20 transition-all h-full">
                <span className="inline-block text-[10px] uppercase tracking-wider text-primary font-bold mb-3 bg-primary/10 px-2 py-1 rounded">{post.category}</span>
                <h2 className="font-display text-lg font-bold text-foreground mb-3 leading-snug">{post.title}</h2>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                  <span>{new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <LeadCaptureForm heading="Stay Updated" context="Blog Subscription" />
    <InternalLinks exclude="/blog" />
  </>
);

export default Blog;
