import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Categories } from "./components/Categories";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { Features } from "./components/Features";
import { PromoBanner } from "./components/PromoBanner";
import { NewArrivals } from "./components/NewArrivals";
import { About } from "./components/About";
import { Trust } from "./components/Trust";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { CartProvider } from "./context/InquiryContext";
import { ShopPage } from "./pages/ShopPage";
import { CategoryPage } from "./pages/CategoryPage";
import { ProductPage } from "./pages/ProductPage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { ScrollToTop } from "./components/ScrollToTop";
import { CartDrawer } from "./components/CartDrawer";

function HomePage() {
  return (
    <main>
      {/* 1. Hero — first impression, shop now CTA */}
      <Hero />

      {/* 2. Trust bar — shipping, returns, quality, support */}
      <Features />

      {/* 3. Category grid — immediate navigation to departments */}
      <Categories />

      {/* 4. Best sellers — top 8 products */}
      <FeaturedProducts />

      {/* 5. Promotional lifestyle banner — visual break, drives category pages */}
      <PromoBanner />

      {/* 6. New arrivals — second product row, different products */}
      <NewArrivals />

      {/* 7. Why us — compact trust pillars */}
      <Trust />

      {/* 8. About — consumer-facing brand story */}
      <div id="about">
        <About />
      </div>

      {/* 9. CTA — checkout prompt */}
      <div id="contact">
        <CTA />
      </div>
    </main>
  );
}

export default function App() {
  return (
    <Router>
      <CartProvider>
        <ScrollToTop />
        <div className="min-h-screen bg-white font-sans selection:bg-brand/10 selection:text-brand">
          <Navbar />
          <CartDrawer />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/category/:name" element={<CategoryPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>

          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}
