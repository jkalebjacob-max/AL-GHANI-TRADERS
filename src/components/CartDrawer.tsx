import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "react-router-dom";
import { X, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "../context/InquiryContext";
import { ProductImage } from "./ProductImage";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export function CartDrawer() {
  const {
    cartItems,
    itemCount,
    subtotal,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
  } = useCart();

  useEffect(() => {
    if (!isCartOpen) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isCartOpen, closeCart]);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-[70] bg-black/40 backdrop-blur-[3px]"
            onClick={closeCart}
            aria-label="Close cart drawer"
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed right-0 top-0 z-[80] flex h-dvh w-full max-w-[420px] flex-col bg-white shadow-[−30px_0_80px_rgba(0,0,0,0.15)]"
            aria-label="Shopping cart"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <div className="flex items-center gap-2.5">
                <ShoppingBag className="h-5 w-5 text-primary" strokeWidth={1.75} />
                <div>
                  <h2 className="text-base font-semibold text-primary">Your Cart</h2>
                  {itemCount > 0 && (
                    <p className="text-[11px] text-gray-400 mt-0.5">
                      {itemCount} {itemCount === 1 ? "item" : "items"}
                    </p>
                  )}
                </div>
              </div>
              <button
                type="button"
                onClick={closeCart}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-gray-200 text-gray-500 transition hover:bg-gray-50 hover:text-primary"
                aria-label="Close cart"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Empty state */}
            {cartItems.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-50">
                  <ShoppingBag className="h-7 w-7 text-gray-300" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-base font-semibold text-primary">Your cart is empty</p>
                  <p className="mt-1 text-sm text-gray-500">Discover products you'll love.</p>
                </div>
                <button
                  type="button"
                  onClick={closeCart}
                  className="mt-2 rounded-xl border border-gray-200 px-6 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                >
                  Continue shopping
                </button>
              </div>
            ) : (
              <>
                {/* Items list */}
                <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
                  {cartItems.map(({ product, quantity }) => (
                    <div
                      key={product.id}
                      className="flex gap-3 rounded-2xl border border-gray-100 bg-gray-50/50 p-3"
                    >
                      {/* Thumbnail */}
                      <div className="h-[72px] w-[72px] shrink-0 overflow-hidden rounded-xl bg-white border border-gray-100">
                        <ProductImage
                          fallback={product.fallbackImage}
                          alt={product.name}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      {/* Details */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <p className="line-clamp-2 text-[13px] font-semibold leading-snug text-primary">
                            {product.name}
                          </p>
                          <button
                            type="button"
                            onClick={() => removeFromCart(product.id)}
                            className="mt-0.5 shrink-0 rounded-lg p-1 text-gray-300 transition hover:bg-red-50 hover:text-red-400"
                            aria-label={`Remove ${product.name} from cart`}
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>

                        <div className="mt-2 flex items-center justify-between">
                          {/* Qty stepper */}
                          <div className="inline-flex items-center rounded-lg border border-gray-200 bg-white">
                            <button
                              type="button"
                              onClick={() => updateQuantity(product.id, quantity - 1)}
                              className="flex h-7 w-7 items-center justify-center rounded-l-lg text-gray-500 transition hover:bg-gray-50 hover:text-primary text-base leading-none"
                              aria-label={`Decrease quantity for ${product.name}`}
                            >
                              −
                            </button>
                            <span className="min-w-[28px] px-1 text-center text-[13px] font-semibold text-primary">
                              {quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(product.id, quantity + 1)}
                              className="flex h-7 w-7 items-center justify-center rounded-r-lg text-gray-500 transition hover:bg-gray-50 hover:text-primary text-base leading-none"
                              aria-label={`Increase quantity for ${product.name}`}
                            >
                              +
                            </button>
                          </div>

                          {/* Line total */}
                          <span className="text-[13px] font-semibold text-primary">
                            {currency.format(product.price * quantity)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="border-t border-gray-100 bg-white px-6 pb-8 pt-5">
                  <div className="mb-1 flex items-baseline justify-between">
                    <span className="text-sm text-gray-500">Subtotal</span>
                    <span className="text-xl font-bold text-primary">{currency.format(subtotal)}</span>
                  </div>
                  <p className="mb-5 text-[11px] text-gray-400">Shipping calculated at checkout</p>

                  <Link
                    to="/checkout"
                    onClick={closeCart}
                    className="flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_16px_40px_-16px_rgba(17,24,39,0.55)] transition hover:-translate-y-0.5 hover:bg-brand"
                  >
                    Go to Checkout
                  </Link>

                  <button
                    type="button"
                    onClick={closeCart}
                    className="mt-3 w-full rounded-2xl border border-gray-200 py-3 text-[12px] font-medium text-gray-600 transition hover:bg-gray-50"
                  >
                    Continue shopping
                  </button>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
