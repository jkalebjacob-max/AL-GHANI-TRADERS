import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft, Trash2 } from "lucide-react";
import { useCart } from "../context/InquiryContext";
import { ProductImage } from "../components/ProductImage";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, clearCart, subtotal, itemCount } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 pt-24 pb-28 text-center">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-50">
          <svg className="h-7 w-7 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </div>
        <h1 className="font-serif text-3xl font-semibold text-primary">Your cart is empty</h1>
        <p className="mt-3 text-gray-500">Start browsing and add products you love.</p>
        <Link
          to="/shop"
          className="mt-8 inline-flex h-12 items-center justify-center rounded-2xl bg-primary px-8 text-[12px] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_16px_40px_-16px_rgba(17,24,39,0.45)] transition hover:-translate-y-0.5 hover:bg-brand"
        >
          Browse products
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white pt-32 pb-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <h1 className="font-serif text-3xl font-semibold text-primary sm:text-4xl">
            Shopping Cart
          </h1>
          <p className="mt-2 text-sm text-gray-400">
            {itemCount} {itemCount === 1 ? "item" : "items"} in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
          {/* Items */}
          <div className="lg:col-span-7 space-y-4">
            <AnimatePresence mode="popLayout">
              {cartItems.map(({ product, quantity }) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: 20, transition: { duration: 0.2 } }}
                  className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm"
                >
                  {/* Thumb */}
                  <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-gray-50 border border-gray-100">
                    <ProductImage
                      fallback={product.fallbackImage}
                      alt={product.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-primary leading-snug truncate">
                      {product.name}
                    </h3>
                    <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-widest text-gray-400">
                      {product.category}
                    </p>
                    <p className="mt-1 text-sm font-medium text-gray-500">
                      {currency.format(product.price)} each
                    </p>

                    {/* Qty controls */}
                    <div className="mt-3 inline-flex items-center rounded-lg border border-gray-200 bg-white">
                      <button
                        type="button"
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                        className="flex h-8 w-8 items-center justify-center rounded-l-lg text-gray-500 transition hover:bg-gray-50 hover:text-primary text-base"
                        aria-label={`Decrease quantity for ${product.name}`}
                      >
                        −
                      </button>
                      <span className="min-w-[32px] px-1 text-center text-sm font-semibold text-primary">
                        {quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                        className="flex h-8 w-8 items-center justify-center rounded-r-lg text-gray-500 transition hover:bg-gray-50 hover:text-primary text-base"
                        aria-label={`Increase quantity for ${product.name}`}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Line total + remove */}
                  <div className="flex flex-col items-end gap-3">
                    <p className="text-sm font-bold text-primary">
                      {currency.format(product.price * quantity)}
                    </p>
                    <button
                      type="button"
                      onClick={() => removeFromCart(product.id)}
                      className="rounded-lg p-1.5 text-gray-300 transition hover:bg-red-50 hover:text-red-400"
                      aria-label={`Remove ${product.name}`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            <Link
              to="/shop"
              className="mt-2 inline-flex items-center gap-1.5 text-sm text-gray-400 transition hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Continue shopping
            </Link>
          </div>

          {/* Summary */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 rounded-2xl border border-gray-100 bg-[#fafbfa] p-7">
              <h2 className="mb-1 text-base font-semibold text-primary">Order Summary</h2>
              <p className="mb-6 text-[11px] uppercase tracking-[0.12em] text-gray-400">
                {itemCount} {itemCount === 1 ? "item" : "items"}
              </p>

              <div className="space-y-3 border-b border-gray-200 pb-5 text-sm text-gray-500">
                <div className="flex items-center justify-between">
                  <span>Items ({itemCount})</span>
                  <span>{currency.format(subtotal)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Shipping</span>
                  <span className="text-primary font-medium">Calculated at checkout</span>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between text-base font-bold text-primary">
                <span>Subtotal</span>
                <span>{currency.format(subtotal)}</span>
              </div>

              <Link
                to="/checkout"
                className="mt-6 flex w-full items-center justify-center rounded-2xl bg-primary py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_16px_40px_-16px_rgba(17,24,39,0.55)] transition hover:-translate-y-0.5 hover:bg-brand"
              >
                Proceed to checkout
              </Link>
              <button
                type="button"
                onClick={clearCart}
                className="mt-3 w-full rounded-2xl border border-gray-200 py-3 text-[12px] font-medium text-gray-400 transition hover:border-gray-300 hover:text-gray-600"
              >
                Clear cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
