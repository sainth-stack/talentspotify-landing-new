import { useState, useEffect } from "react";

const CookieConsent = () => {
  const [show, setShow] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [prefs, setPrefs] = useState({ analytics: true, personalisation: true, marketing: false });

  useEffect(() => {
    const consent = localStorage.getItem("ts_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = (type: "all" | "necessary" | "custom") => {
    const val = type === "all" ? "all" : type === "necessary" ? "necessary" : JSON.stringify(prefs);
    localStorage.setItem("ts_cookie_consent", val);
    setShow(false);
    setSettingsOpen(false);
  };

  if (!show) return null;

  return (
    <>
      {/* Overlay for settings */}
      {settingsOpen && (
        <div className="fixed inset-0 bg-foreground/30 z-[60]" onClick={() => setSettingsOpen(false)} />
      )}

      {/* Settings Modal */}
      {settingsOpen && (
        <div className="fixed inset-0 z-[61] flex items-center justify-center p-4">
          <div className="bg-background rounded-3xl shadow-lg max-w-md w-full p-6">
            <h3 className="font-display text-lg font-semibold text-foreground mb-4">Cookie Settings</h3>
            <div className="space-y-4">
              {[
                { key: "necessary", label: "Strictly Necessary", desc: "Required for the site to function", disabled: true, checked: true },
                { key: "analytics", label: "Analytics", desc: "Help us understand usage patterns", disabled: false, checked: prefs.analytics },
                { key: "personalisation", label: "Personalisation", desc: "Remember your preferences", disabled: false, checked: prefs.personalisation },
                { key: "marketing", label: "Marketing", desc: "Show relevant ads", disabled: false, checked: prefs.marketing },
              ].map((item) => (
                <div key={item.key} className="flex items-center justify-between py-2">
                  <div>
                    <p className="text-sm font-medium text-foreground">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                  <button
                    disabled={item.disabled}
                    onClick={() => !item.disabled && setPrefs(p => ({ ...p, [item.key]: !p[item.key as keyof typeof p] }))}
                    className={`w-10 h-6 rounded-full transition-colors relative ${
                      item.checked ? "bg-primary" : "bg-border2"
                    } ${item.disabled ? "opacity-60" : "cursor-pointer"}`}
                  >
                    <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-background shadow-sm transition-transform ${
                      item.checked ? "left-[18px]" : "left-0.5"
                    }`} />
                  </button>
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={() => accept("custom")} className="flex-1 px-4 py-2 text-sm font-medium border border-border2 rounded-lg hover:bg-surface-2 transition-colors">
                Save Preferences
              </button>
              <button onClick={() => accept("all")} className="flex-1 px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors">
                Accept All ✓
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border shadow-lg animate-in slide-in-from-bottom duration-500">
        <div className="container py-4 flex flex-col sm:flex-row items-center gap-4">
          <div className="flex items-center gap-3 flex-1">
            <span className="text-2xl">🍪</span>
            <div>
              <p className="text-sm font-medium text-foreground">We use cookies</p>
              <p className="text-xs text-muted-foreground">
                To improve your experience.{" "}
                <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setSettingsOpen(true)} className="px-4 py-2 text-xs font-medium border border-border2 rounded-lg hover:bg-surface-2 transition-colors">
              Cookie Settings
            </button>
            <button onClick={() => accept("necessary")} className="px-4 py-2 text-xs font-medium bg-surface-3 text-ink-2 rounded-lg hover:bg-border transition-colors">
              Necessary Only
            </button>
            <button onClick={() => accept("all")} className="px-4 py-2 text-xs font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors">
              Accept All ✓
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookieConsent;
