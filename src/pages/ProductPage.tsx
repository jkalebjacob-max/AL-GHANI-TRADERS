import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ShieldCheck, Truck, RotateCcw, ChevronRight } from "lucide-react";
import { products } from "../data/products";
import { ProductImage } from "../components/ProductImage";
import { useCart } from "../context/InquiryContext";

const currency = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

const trustPoints = [
  { icon: Truck, text: "Fast shipping" },
  { icon: RotateCcw, text: "Easy returns" },
  { icon: ShieldCheck, text: "Quality guaranteed" },
];

export function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const { addToCart, getQuantity, openCart } = useCart();

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-white p-6 text-center">
        <h1 className="font-serif text-3xl font-semibold text-primary">Product not found</h1>
        <p className="mt-3 text-gray-500">This product doesn't exist or has been removed.</p>
        <Link
          to="/shop"
          className="mt-8 inline-flex h-11 items-center rounded-xl bg-primary px-6 text-sm font-semibold text-white transition hover:bg-brand"
        >
          Back to shop
        </Link>
      </div>
    );
  }

  const quantity = getQuantity(product.id);
  const categorySlug = product.category
    .toLowerCase()
    .replace(/\s\/\s/g, "-")
    .replace(/\s/g, "-");

  const handleAddToCart = () => {
    addToCart(product);
    openCart();
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-24 lg:pt-28">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-6 pb-6 lg:px-8">
        <nav className="flex items-center gap-1.5 text-[11px] text-gray-400">
          <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to={`/category/${categorySlug}`} className="hover:text-primary transition-colors capitalize">
            {product.category}
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="truncate text-gray-500">{product.name}</span>
        </nav>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">

          {/* ── Image column ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            {/* Main image */}
            <div className="overflow-hidden rounded-3xl bg-[#f4f6f5]">
              <div className="relative aspect-square">
                <ProductImage
                  fallback={product.fallbackImage}
                  alt={product.name}
                  objectFit={product.id.startsWith("f-") ? "contain" : "cover"}
                />
              </div>
            </div>
          </motion.div>

          {/* ── Info column ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="flex flex-col lg:pt-2"
          >
            {/* Category crumb */}
            <Link
              to={`/category/${categorySlug}`}
              className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-brand hover:text-primary transition-colors"
            >
              {product.category}
            </Link>

            {/* Product name */}
            <h1 className="font-serif text-3xl font-semibold leading-tight text-primary sm:text-4xl">
              {product.name}
            </h1>

            {/* Price — shown early, prominent */}
            <div className="mt-5 flex items-baseline gap-3">
              <span className="text-3xl font-bold text-primary">
                {currency.format(product.price)}
              </span>
              <span className="inline-flex items-center rounded-full bg-green-50 px-2.5 py-0.5 text-[11px] font-semibold text-green-700">
                In stock
              </span>
            </div>

            {/* Short description */}
            <p className="mt-5 text-base leading-relaxed text-gray-500">
              {product.description}
            </p>

            {/* ── Buy actions ── */}
            <div className="mt-8 space-y-3">
              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToCart}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-4 text-sm font-semibold text-white shadow-[0_16px_40px_-16px_rgba(17,24,39,0.55)] transition hover:-translate-y-0.5 hover:bg-brand"
              >
                {quantity > 0
                  ? `Add again · ${quantity} in cart`
                  : "Add to cart"}
              </motion.button>

              <Link
                to="/checkout"
                className="flex w-full items-center justify-center rounded-2xl border border-gray-200 py-4 text-sm font-semibold text-primary transition hover:border-gray-300 hover:bg-gray-50"
              >
                Buy now
              </Link>
            </div>

            {/* In cart indicator */}
            {quantity > 0 && (
              <p className="mt-3 text-center text-sm text-gray-500">
                <span className="font-semibold text-brand">{quantity}</span> in your cart —{" "}
                <button
                  type="button"
                  onClick={openCart}
                  className="font-semibold text-primary underline underline-offset-2 hover:text-brand"
                >
                  view cart
                </button>
              </p>
            )}

            {/* Trust row */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-gray-100 pt-6">
              {trustPoints.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-xs text-gray-500">
                  <Icon className="h-4 w-4 text-brand" strokeWidth={1.75} />
                  {text}
                </div>
              ))}
            </div>

            {/* Product details accordion-style */}
            <div className="mt-8 space-y-px overflow-hidden rounded-2xl border border-gray-100">
              <div className="flex items-start gap-4 bg-white px-5 py-4">
                <span className="w-24 shrink-0 text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-400">
                  Material
                </span>
                <span className="text-sm text-primary">{product.material}</span>
              </div>
              <div className="flex items-start gap-4 bg-white px-5 py-4 border-t border-gray-100">
                <span className="w-24 shrink-0 text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-400">
                  Best for
                </span>
                <span className="text-sm text-primary">{product.usage}</span>
              </div>
              <div className="flex items-start gap-4 bg-white px-5 py-4 border-t border-gray-100">
                <span className="w-24 shrink-0 text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-400">
                  Status
                </span>
                <span className="text-sm font-medium text-green-600">{product.status}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
