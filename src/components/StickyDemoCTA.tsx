import { useState, useEffect } from "react";
import { X } from "lucide-react";

const StickyDemoCTA = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible || dismissed) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-xl shadow-2xl animate-fade-in">
      <a href="#book-demo" className="text-sm font-bold whitespace-nowrap">Book a Demo →</a>
      <button onClick={() => setDismissed(true)} className="ml-1 opacity-70 hover:opacity-100"><X className="w-4 h-4" /></button>
    </div>
  );
};

export default StickyDemoCTA;
