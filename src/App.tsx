
import Footer from "@/components/Footer"; // New Footer
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout"; // Import Layout
import ContactPage from "./pages/ContactPage"; // New Page
import ExperiencePage from "./pages/ExperiencePage"; // New Page
import HomePage from "./pages/HomePage"; // Renamed Index
import NotFound from "./pages/NotFound";
import ProjectsPage from "./pages/ProjectsPage"; // New Page
import SkillsPage from "./pages/SkillsPage"; // New Page

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Layout> {/* Wrap Routes with Layout */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes> 
           <Footer />
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
 
);

export default App;
