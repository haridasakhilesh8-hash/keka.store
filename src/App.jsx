import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Roadmaps from "./pages/Roadmaps";
import RoleRoadmapPage from "./pages/RoleRoadmapPage";
import TechnologyRoadmapPage from "./pages/TechnologyRoadmapPage";
import StageRoadmapPage from "./pages/StageRoadmapPage";
import GrowthRoadmapPage from "./pages/GrowthRoadmapPage";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
}

function Layout() {
  const { pathname } = useLocation();
  const isRoadmaps   = pathname.startsWith("/roadmaps");

  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/roadmaps" element={<Roadmaps />} />
          <Route path="/roadmaps/technology/:slug" element={<TechnologyRoadmapPage />} />
          <Route path="/roadmaps/stage/:slug" element={<StageRoadmapPage />} />
          <Route path="/roadmaps/growth/:slug" element={<GrowthRoadmapPage />} />
          <Route path="/roadmaps/:slug" element={<RoleRoadmapPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      {isRoadmaps ? (
        <footer style={{ borderTop:"1px solid rgba(255,255,255,0.06)", background:"#04040e", padding:"1.25rem 1.5rem", textAlign:"center" }}>
          <p style={{ color:"#3A3850", fontSize:"0.78rem" }}>© 2026 Keka Store</p>
        </footer>
      ) : (
        <Footer />
      )}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
