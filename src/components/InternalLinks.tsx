import Link from "next/link";
import { ArrowRight } from "lucide-react";

const allLinks = [
  { label: "Performance Management Software India", href: "/performance-management-software-india" },
  { label: "OKR Software India", href: "/okr-software-india" },
  { label: "Oracle Fusion Performance Management", href: "/oracle-fusion-performance-management" },
  { label: "Employee Rewards Platform", href: "/employee-rewards-platform" },
  { label: "UAE Performance Management", href: "/gcc/uae-performance-management" },
  { label: "ROI Calculator", href: "/roi-calculator" },
  { label: "Customer Stories", href: "/case-study" },
  { label: "Blog", href: "/blog" },
];

const InternalLinks = ({ exclude = "" }: { exclude?: string }) => (
  <section className="py-16 bg-surface-2">
    <div className="container">
      <h2 className="font-display text-2xl font-bold text-foreground mb-8 text-center">Explore More</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {allLinks.filter(l => l.href !== exclude).map(l => (
          <Link key={l.href} href={l.href} className="flex items-center justify-between px-5 py-4 bg-background rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all group">
            <span className="text-sm font-medium text-foreground">{l.label}</span>
            <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default InternalLinks;
