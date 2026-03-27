import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Categories } from "./components/Categories";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { Features } from "./components/Features";
import { About } from "./components/About";
import { Trust } from "./components/Trust";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { InquiryProvider } from "./context/InquiryContext";
import { ShopPage } from "./pages/ShopPage";
import { CategoryPage } from "./pages/CategoryPage";
import { ProductPage } from "./pages/ProductPage";
import { InquiryPage } from "./pages/InquiryPage";
import { ScrollToTop } from "./components/ScrollToTop";

function HomePage() {
  return (
    <main>
      <Hero />
      <Trust />
      <Categories />
      <FeaturedProducts />
      <Features />
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <CTA />
      </div>
    </main>
  );
}

export default function App() {
  return (
    <Router>
      <InquiryProvider>
        <ScrollToTop />
        <div className="min-h-screen bg-white font-sans selection:bg-brand/10 selection:text-brand">
          <Navbar />
          
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/category/:name" element={<CategoryPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/inquiry" element={<InquiryPage />} />
          </Routes>

          <Footer />
        </div>
      </InquiryProvider>
    </Router>
  );
}
