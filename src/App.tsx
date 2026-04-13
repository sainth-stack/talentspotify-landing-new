import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import CaseStudy from "./pages/CaseStudy";
import Press from "./pages/Press";
import Resources from "./pages/Resources";
import Toolkit from "./pages/Toolkit";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import GDPR from "./pages/GDPR";
import ROICalculator from "./pages/ROICalculator";
import NotFound from "./pages/NotFound";
import PerformanceManagementIndia from "./pages/seo/PerformanceManagementIndia";
import OKRSoftwareIndia from "./pages/seo/OKRSoftwareIndia";
import OracleFusion from "./pages/seo/OracleFusion";
import EmployeeRewardsPlatform from "./pages/seo/EmployeeRewardsPlatform";
import UAEPerformanceManagement from "./pages/seo/UAEPerformanceManagement";
import Blog from "./pages/blog/Blog";
import BlogPost from "./pages/blog/BlogPost";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/case-study" element={<CaseStudy />} />
              <Route path="/press" element={<Press />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/toolkit" element={<Toolkit />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/gdpr" element={<GDPR />} />
              <Route path="/roi-calculator" element={<ROICalculator />} />
              {/* SEO Landing Pages */}
              <Route path="/performance-management-software-india" element={<PerformanceManagementIndia />} />
              <Route path="/okr-software-india" element={<OKRSoftwareIndia />} />
              <Route path="/oracle-fusion-performance-management" element={<OracleFusion />} />
              <Route path="/employee-rewards-platform" element={<EmployeeRewardsPlatform />} />
              <Route path="/gcc/uae-performance-management" element={<UAEPerformanceManagement />} />
              {/* Blog */}
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
