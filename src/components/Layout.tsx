import { ReactNode, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CookieConsent from "./CookieConsent";
import StickyDemoCTA from "./StickyDemoCTA";

const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const pathname = router.pathname;
  const hash = router.asPath.split('#')[1];

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(`#${hash}`);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-[72px]">{children}</main>
      <Footer />
      <CookieConsent />
      <StickyDemoCTA />
    </div>
  );
};

export default Layout;
