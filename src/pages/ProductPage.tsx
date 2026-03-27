import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { products } from "../data/products";
import { ProductImage } from "../components/ProductImage";
import { useInquiry } from "../context/InquiryContext";

export function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const { addToInquiry, isInInquiry } = useInquiry();

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-white p-6 text-center">
        <h1 className="text-4xl font-bold text-primary font-serif">Product Not Found</h1>
        <p className="mt-4 text-gray-600">The product you are looking for does not exist or has been removed.</p>
        <Link to="/shop" className="mt-8 rounded-xl bg-primary px-8 py-4 text-sm font-bold text-white shadow-lg shadow-primary/10 transition hover:bg-brand">
          Back to Shop
        </Link>
      </div>
    );
  }

  const alreadyInInquiry = isInInquiry(product.id);

  return (
    <div className="bg-white pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-start">
          {/* Left: Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-br from-brand/5 to-accent/5 blur-3xl" />
            <div className="relative aspect-square overflow-hidden rounded-[40px] bg-[#F9FAFB] shadow-2xl border border-gray-100">
              <ProductImage
                fallback={product.fallbackImage}
                alt={product.name}
                className="h-full w-full"
              />
              <div className="absolute top-8 right-8">
                <div className="rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary backdrop-blur-md shadow-sm">
                  {product.status}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col"
          >
            <div className="mb-6">
              <Link to={`/category/${product.category.toLowerCase().replace(/\s\/\s/g, "-").replace(/\s/g, "-")}`} className="text-xs font-bold uppercase tracking-widest text-brand hover:text-accent transition-colors">
                {product.category}
              </Link>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl font-serif">
                {product.name}
              </h1>
            </div>

            <p className="text-lg leading-8 text-gray-600 mb-10">
              {product.description}
            </p>

            <div className="grid grid-cols-2 gap-8 mb-12 border-y border-gray-100 py-10">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">Material</p>
                <p className="text-lg font-bold text-primary">{product.material}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">Usage</p>
                <p className="text-lg font-bold text-primary">{product.usage}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">MOQ</p>
                <p className="text-lg font-bold text-primary">{product.moq}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">Availability</p>
                <p className="text-lg font-bold text-primary">Global Sourcing</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => addToInquiry(product)}
                disabled={alreadyInInquiry}
                className={`flex-1 rounded-2xl px-8 py-5 text-sm font-bold uppercase tracking-widest text-white shadow-xl transition-all ${
                  alreadyInInquiry ? "bg-brand/50 cursor-not-allowed" : "bg-primary hover:bg-brand"
                }`}
              >
                {alreadyInInquiry ? "Added to Inquiry" : "Add to Inquiry"}
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="flex-1 rounded-2xl border border-gray-200 bg-white px-8 py-5 text-sm font-bold uppercase tracking-widest text-primary text-center shadow-sm hover:bg-gray-50 transition-all"
              >
                Request Pricing
              </motion.a>
            </div>

            <div className="mt-12 flex items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              Ready for Export
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
