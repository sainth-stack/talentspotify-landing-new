import { Shield, Globe, Lock, ShieldCheck } from "lucide-react";

const badges = [
  { icon: <Shield className="w-5 h-5" />, label: "SOC 2 Ready" },
  { icon: <Lock className="w-5 h-5" />, label: "GDPR Compliant" },
  { icon: <ShieldCheck className="w-5 h-5" />, label: "ISO 27001 Aligned" },
  { icon: <Globe className="w-5 h-5" />, label: "India & GCC Compliant" },
];

const TrustBadges = () => (
  <div className="flex flex-wrap justify-center gap-4 py-8">
    {badges.map(b => (
      <div key={b.label} className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-xs font-semibold text-accent">
        {b.icon} {b.label}
      </div>
    ))}
  </div>
);

export default TrustBadges;
