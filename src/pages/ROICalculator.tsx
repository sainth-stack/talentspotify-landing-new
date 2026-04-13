import ScrollReveal from "@/components/ScrollReveal";
import { useState } from "react";
import { ArrowRight, TrendingUp, Trophy, ShieldCheck, Clock, AlertTriangle, Target, CalendarCheck, ChevronRight } from "lucide-react";
import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const AnimatedNumber = ({ value, prefix = "", suffix = "", className = "" }: { value: number; prefix?: string; suffix?: string; className?: string }) => {
  const spring = useSpring(value, { stiffness: 80, damping: 20 });
  const display = useTransform(spring, (v) => `${prefix}${Math.round(v).toLocaleString("en-IN")}${suffix}`);
  useEffect(() => { spring.set(value); }, [value, spring]);
  return <motion.span className={className}>{display}</motion.span>;
};

const ROICalculator = () => {
  const [employees, setEmployees] = useState(500);
  const [avgCTC, setAvgCTC] = useState(1200000);
  const [attritionPct, setAttritionPct] = useState(15);
  const [topPerformerExits, setTopPerformerExits] = useState(5);
  const [scenario, setScenario] = useState<"conservative" | "expected" | "aggressive">("expected");
  const [showAssumptions, setShowAssumptions] = useState(false);

  const scenarioMultiplier = { conservative: 0.2, expected: 0.35, aggressive: 0.5 }[scenario];
  const replacementCostMultiplier = 1.5;
  const biasCostPerExit = avgCTC * replacementCostMultiplier;
  const annualBiasCost = topPerformerExits * biasCostPerExit;
  const subscriptionCostAnnual = employees * 95 * 12;
  const recoverableValue = Math.round(annualBiasCost * scenarioMultiplier);
  const roiMultiple = recoverableValue > 0 ? Math.round((recoverableValue / subscriptionCostAnnual) * 10) / 10 : 0;
  const paybackMonths = recoverableValue > 0 ? Math.round((subscriptionCostAnnual / recoverableValue) * 12 * 10) / 10 : 0;

  const fmt = (v: number) => `₹${v.toLocaleString("en-IN")}`;

  const scenarioOptions = [
    { key: "conservative" as const, label: "Conservative", pct: "20%" },
    { key: "expected" as const, label: "Expected", pct: "35%" },
    { key: "aggressive" as const, label: "Aggressive", pct: "50%" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-4">ROI Calculator</p>
              <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-5">
                The Hidden Cost of Biased Reviews
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Biased performance reviews silently drain revenue through avoidable attrition, poor promotion decisions, disengagement, and legal risk.
              </p>
              <p className="text-base text-foreground/80 leading-relaxed">
                For a 500-employee company, even 5 regrettable exits of high performers caused by unfair reviews can cost{" "}
                <span className="font-bold">₹75L–₹1.5Cr annually</span> in replacement costs, lost productivity, and delayed execution.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why CFOs Care */}
      <section className="py-20 bg-muted/30 border-y border-border">
        <div className="container">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight text-center mb-10">Why CFOs Care</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              { icon: <TrendingUp className="w-5 h-5 text-primary" />, text: "Lower attrition cost — retain top performers before they disengage" },
              { icon: <Trophy className="w-5 h-5 text-primary" />, text: "Better reward allocation — ensure bonus budgets go to true impact" },
              { icon: <ShieldCheck className="w-5 h-5 text-primary" />, text: "Reduced legal & compliance exposure — audit-ready review trails" },
              { icon: <Clock className="w-5 h-5 text-primary" />, text: "Higher manager productivity — less time on correction cycles & disputes" },
            ].map((item) => (
              <ScrollReveal key={item.text}>
                <div className="flex items-start gap-4 bg-background rounded-xl border border-border p-5">
                  <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center flex-shrink-0">{item.icon}</div>
                  <p className="text-sm text-foreground/80 leading-relaxed">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3-Card ROI Strip */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: <AlertTriangle className="w-6 h-6 text-primary" />, title: "Attrition Leakage", metric: "₹15L–₹30L", detail: "Average cost of replacing one high performer" },
              { icon: <Clock className="w-6 h-6 text-primary" />, title: "Review Disputes", metric: "30–40% less admin time", detail: "Spent resolving feedback conflicts and escalations" },
              { icon: <Target className="w-6 h-6 text-primary" />, title: "Promotion Accuracy", metric: "Better reward ROI", detail: "Compensation linked to evidence, not manager bias" },
            ].map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 80}>
                <div className="bg-muted/30 rounded-2xl border border-border p-8 text-center hover:shadow-md transition-shadow h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mx-auto mb-4">{card.icon}</div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-2">{card.title}</p>
                  <p className="text-2xl font-extrabold text-foreground tracking-tight mb-2">{card.metric}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.detail}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Calculator */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-3">Calculate Your Bias Cost</h2>
              <p className="text-base text-muted-foreground">Enter your numbers to see the annual cost of biased reviews vs. TalentSpotify's subscription.</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Inputs */}
            <ScrollReveal>
              <div className="bg-background rounded-2xl border border-border p-8 space-y-6">
                {[
                  { label: "Employee Count", value: employees, set: setEmployees, min: 50, max: 5000, step: 50, display: employees.toLocaleString("en-IN"), minLabel: "50", maxLabel: "5,000" },
                  { label: "Average CTC (Annual)", value: avgCTC, set: setAvgCTC, min: 300000, max: 5000000, step: 100000, display: fmt(avgCTC), minLabel: "₹3L", maxLabel: "₹50L" },
                  { label: "Annual Attrition Rate", value: attritionPct, set: setAttritionPct, min: 5, max: 40, step: 1, display: `${attritionPct}%`, minLabel: "5%", maxLabel: "40%" },
                  { label: "Top Performer Exits (Bias-driven)", value: topPerformerExits, set: setTopPerformerExits, min: 1, max: 30, step: 1, display: `${topPerformerExits}`, minLabel: "1", maxLabel: "30" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-medium text-foreground">{s.label}</label>
                      <span className="text-base font-bold text-primary">{s.display}</span>
                    </div>
                    <input type="range" min={s.min} max={s.max} step={s.step} value={s.value} onChange={(e) => s.set(Number(e.target.value))} className="w-full h-2 bg-border rounded-full appearance-none cursor-pointer accent-primary" />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1"><span>{s.minLabel}</span><span>{s.maxLabel}</span></div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Results */}
            <ScrollReveal delay={100}>
              <div className="bg-background rounded-2xl border border-border p-8 flex flex-col">
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-4">Your Estimated Annual Impact</p>

                <div className="flex items-center gap-1 bg-muted rounded-lg p-1 mb-6">
                  {scenarioOptions.map((s) => (
                    <button
                      key={s.key}
                      onClick={() => setScenario(s.key)}
                      className={`flex-1 text-xs font-semibold py-2.5 px-3 rounded-md transition-all ${
                        scenario === s.key
                          ? "bg-foreground text-background shadow-sm"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {s.label} ({s.pct})
                    </button>
                  ))}
                </div>

                <div className="space-y-4 flex-1">
                  <div className="bg-destructive/5 rounded-xl border border-destructive/20 p-5">
                    <p className="text-[10px] text-destructive font-semibold mb-1 uppercase tracking-widest">Annual Bias Cost</p>
                    <p className="text-2xl font-extrabold text-destructive tracking-tight"><AnimatedNumber value={annualBiasCost} prefix="₹" /></p>
                    <p className="text-xs text-muted-foreground mt-1">{topPerformerExits} exits × {fmt(biasCostPerExit)} replacement cost</p>
                  </div>
                  <div className="bg-primary/5 rounded-xl border border-primary/20 p-5">
                    <p className="text-[10px] text-primary font-semibold mb-1 uppercase tracking-widest">TalentSpotify Subscription</p>
                    <p className="text-2xl font-extrabold text-primary tracking-tight"><AnimatedNumber value={subscriptionCostAnnual} prefix="₹" /></p>
                    <p className="text-xs text-muted-foreground mt-1">{employees.toLocaleString("en-IN")} × ₹95/mo × 12</p>
                  </div>
                  <div className="bg-teal/5 rounded-xl border border-teal/20 p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] text-teal font-semibold mb-1 uppercase tracking-widest">Recoverable Annual Value</p>
                        <p className="text-2xl font-extrabold text-teal tracking-tight">{recoverableValue > 0 ? <AnimatedNumber value={recoverableValue} prefix="₹" /> : "—"}</p>
                      </div>
                      {roiMultiple > 0 && (
                        <div className="text-center bg-teal/10 rounded-xl px-4 py-2">
                          <p className="text-xl font-extrabold text-teal"><AnimatedNumber value={roiMultiple} suffix="×" /></p>
                          <p className="text-[10px] text-teal font-semibold">ROI</p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="bg-muted/50 rounded-xl border border-border p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] text-muted-foreground font-semibold mb-1 uppercase tracking-widest">Payback Period</p>
                        <p className="text-2xl font-extrabold text-foreground tracking-tight">
                          {paybackMonths > 0 && paybackMonths <= 12 ? <><AnimatedNumber value={paybackMonths} /> months</> : paybackMonths > 12 ? ">12 months" : "—"}
                        </p>
                      </div>
                      <CalendarCheck className="w-5 h-5 text-muted-foreground" />
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setShowAssumptions(!showAssumptions)}
                  className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground font-medium mt-5 transition-colors"
                >
                  <ChevronRight className={`w-3.5 h-3.5 transition-transform ${showAssumptions ? "rotate-90" : ""}`} />
                  View Financial Assumptions
                </button>
                {showAssumptions && (
                  <div className="mt-3 bg-muted/30 rounded-lg p-4 space-y-1.5 text-xs text-muted-foreground border border-border">
                    <p>• Replacement cost = 1.5× CTC (industry standard)</p>
                    <p>• Savings assumption based on selected scenario: Conservative 20%, Expected 35%, Aggressive 50%</p>
                    <p>• Subscription = employee count × ₹95 × 12 months</p>
                    <p>• Excludes legal dispute costs and productivity drag</p>
                  </div>
                )}

                <a href="/#book-demo" className="mt-6 w-full py-4 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-primary/90 transition-all shadow-md hover:shadow-lg text-center flex items-center justify-center gap-2">
                  Build CFO Business Case <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default ROICalculator;
