import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ShieldCheck, CheckCircle2, Package } from "lucide-react";
import { useCart } from "../context/InquiryContext";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const trustBadges = [
  { icon: ShieldCheck, label: "Secure checkout" },
  { icon: Package, label: "Fast shipping" },
];

export function CheckoutPage() {
  const { cartItems, subtotal, clearCart } = useCart();
  const [placed, setPlaced] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const itemCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const orderPayload = {
      customer: formData,
      items: cartItems.map((item) => ({
        id: item.product.id,
        name: item.product.name,
        price: item.product.price,
        quantity: item.quantity,
        lineTotal: Number((item.product.price * item.quantity).toFixed(2)),
      })),
      subtotal: Number(subtotal.toFixed(2)),
      currency: "USD",
      // Designed so payment intent/session can be added later.
      paymentStatus: "pending",
      createdAt: new Date().toISOString(),
    };

    // Placeholder for API integration.
    console.log("Checkout order payload:", orderPayload);
    clearCart();
    setPlaced(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (placed) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 pt-24 pb-28 text-center">
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-green-50">
            <CheckCircle2 className="h-10 w-10 text-green-500" strokeWidth={1.5} />
          </div>
          <h1 className="font-serif text-4xl font-semibold text-primary">Order received!</h1>
          <p className="mt-4 max-w-sm text-base text-gray-500 leading-relaxed">
            Thank you for your order. We'll be in touch shortly to confirm your details and arrange delivery.
          </p>
          <Link
            to="/shop"
            className="mt-10 inline-flex h-12 items-center justify-center rounded-2xl bg-primary px-8 text-[12px] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_16px_40px_-16px_rgba(17,24,39,0.45)] transition hover:-translate-y-0.5 hover:bg-brand"
          >
            Continue shopping
          </Link>
        </motion.div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 pt-24 pb-28 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-50 mb-6">
          <Package className="h-7 w-7 text-gray-300" strokeWidth={1.5} />
        </div>
        <h1 className="font-serif text-3xl font-semibold text-primary">Your cart is empty</h1>
        <p className="mt-3 text-gray-500">Add some products before checking out.</p>
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
    <div className="bg-white pb-28 pt-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Page header */}
        <div className="mb-12">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
            Step 1 of 1
          </p>
          <h1 className="font-serif text-3xl font-semibold text-primary sm:text-4xl">
            Checkout
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left: form */}
          <motion.form
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit}
            className="lg:col-span-7 space-y-7"
          >
            {/* Section card */}
            <div className="rounded-2xl border border-gray-200/80 bg-white p-7 shadow-sm">
              <h2 className="mb-6 text-base font-semibold text-primary">Contact information</h2>

              <div className="space-y-5">
                <Field label="Full name">
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    className="input-field"
                    placeholder="Jane Smith"
                  />
                </Field>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field label="Email">
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      className="input-field"
                      placeholder="you@example.com"
                    />
                  </Field>
                  <Field label="Phone">
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                      className="input-field"
                      placeholder="+1 (555) 000-0000"
                    />
                  </Field>
                </div>

                <Field label="Shipping address">
                  <textarea
                    required
                    rows={3}
                    value={formData.address}
                    onChange={(e) => setFormData((prev) => ({ ...prev, address: e.target.value }))}
                    className="input-field resize-none"
                    placeholder="Street, city, state, zip code"
                  />
                </Field>
              </div>
            </div>

            {/* Trust + submit */}
            <div className="flex flex-wrap gap-4 text-xs text-gray-400 mb-2">
              {trustBadges.map(({ icon: Icon, label }) => (
                <span key={label} className="flex items-center gap-1.5">
                  <Icon className="h-3.5 w-3.5 text-green-500" strokeWidth={2} />
                  {label}
                </span>
              ))}
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center rounded-2xl bg-primary py-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_16px_40px_-16px_rgba(17,24,39,0.55)] transition hover:-translate-y-0.5 hover:bg-brand"
            >
              Place Order
            </button>
          </motion.form>

          {/* Right: order summary */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 rounded-2xl border border-gray-200/80 bg-[#fafbfa] p-7">
              <h2 className="mb-1 text-base font-semibold text-primary">Order summary</h2>
              <p className="mb-6 text-[11px] text-gray-400 uppercase tracking-[0.12em]">
                {itemCount} {itemCount === 1 ? "item" : "items"}
              </p>

              {/* Line items */}
              <div className="space-y-3 pb-5 border-b border-gray-200">
                {cartItems.map((item) => (
                  <div key={item.product.id} className="flex items-baseline justify-between gap-3">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-primary">{item.product.name}</p>
                      <p className="text-[11px] text-gray-400">Qty {item.quantity}</p>
                    </div>
                    <p className="shrink-0 text-sm font-semibold text-primary">
                      {currency.format(item.product.price * item.quantity)}
                    </p>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="mt-5 space-y-2.5">
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Shipping</span>
                  <span className="font-medium text-primary">Calculated later</span>
                </div>
                <div className="flex items-center justify-between text-base font-bold text-primary">
                  <span>Subtotal</span>
                  <span>{currency.format(subtotal)}</span>
                </div>
              </div>

              <p className="mt-5 rounded-xl bg-blue-50 px-4 py-3 text-[11px] leading-relaxed text-blue-700">
                Payment processing will be connected in a future update. Your order details are safely logged.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-400">
        {label}
      </label>
      {children}
    </div>
  );
}
