import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { products } from "../data/products";
import { ProductCard } from "../components/ProductCard";

export function CategoryPage() {
  const { name } = useParams<{ name: string }>();
  
  // Normalize category name for comparison (e.g. "Kitchen" or "Beauty / Personal Care")
  // The URL might be "kitchen" or "beauty-personal-care"
  const filteredProducts = products.filter((p) => {
    const normalizedParam = name?.toLowerCase().replace(/-/g, " ");
    const normalizedCategory = p.category.toLowerCase().replace(/\s\/\s/g, " ");
    return normalizedCategory === normalizedParam;
  });

  const categoryTitle = name?.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

  return (
    <div className="bg-white pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-20 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Link to="/shop" className="text-xs font-bold uppercase tracking-widest text-brand hover:text-accent transition-colors mb-4 inline-block">
              &larr; Back to Shop
            </Link>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold tracking-tight text-primary sm:text-6xl font-serif"
            >
              {categoryTitle}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-lg text-gray-600 leading-relaxed"
            >
              Explore our curated selection of {categoryTitle} products. High-quality sourcing for your business growth.
            </motion.p>
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-lg text-gray-500">No products found in this category.</p>
            <Link to="/shop" className="mt-6 inline-block rounded-xl bg-primary px-8 py-4 text-sm font-bold text-white shadow-lg shadow-primary/10 transition hover:bg-brand">
              Browse All Products
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
