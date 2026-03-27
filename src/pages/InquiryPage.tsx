import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useInquiry } from "../context/InquiryContext";
import { Link } from "react-router-dom";
import { ProductImage } from "../components/ProductImage";

export function InquiryPage() {
  const { inquiryList, removeFromInquiry, clearInquiry } = useInquiry();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    orderVolume: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log("Submitting Inquiry:", {
      ...formData,
      products: inquiryList.map((p) => p.name),
    });
    
    setSubmitted(true);
    clearInquiry();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (submitted) {
    return (
      <div className="flex min-h-[80vh] flex-col items-center justify-center bg-white p-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md"
        >
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-brand/10 text-brand">
            <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-primary font-serif">Inquiry Submitted</h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Thank you for your interest in Al-Ghani Traders. Our sourcing team will review your request and contact you within 24-48 business hours.
          </p>
          <Link to="/" className="mt-10 inline-block rounded-xl bg-primary px-8 py-4 text-sm font-bold text-white shadow-lg shadow-primary/10 transition hover:bg-brand">
            Return to Home
          </Link>
        </motion.div>
      </div>
    );
  }

  if (inquiryList.length === 0) {
    return (
      <div className="flex min-h-[80vh] flex-col items-center justify-center bg-white p-6 text-center">
        <h1 className="text-4xl font-bold text-primary font-serif">Your Inquiry List is Empty</h1>
        <p className="mt-4 text-gray-600">Browse our catalog and add products to your inquiry list to request a custom quote.</p>
        <Link to="/shop" className="mt-8 rounded-xl bg-primary px-8 py-4 text-sm font-bold text-white shadow-lg shadow-primary/10 transition hover:bg-brand">
          Browse Catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-20 max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl font-serif">
            Wholesale Inquiry
          </h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Review your selected products and provide your business details. Our team will prepare a custom sourcing proposal for you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 items-start">
          {/* Left: Product List */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-8">Selected Products ({inquiryList.length})</h2>
            <AnimatePresence mode="popLayout">
              {inquiryList.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="group relative flex items-center gap-6 rounded-[32px] border border-gray-100 bg-white p-4 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="h-24 w-24 overflow-hidden rounded-2xl bg-gray-50">
                    <ProductImage
                      fallback={product.fallbackImage}
                      alt={product.name}
                      className="h-full w-full"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-primary">{product.name}</h3>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-1">{product.category}</p>
                    <p className="text-sm text-gray-500 mt-2">MOQ: {product.moq}</p>
                  </div>
                  <button
                    onClick={() => removeFromInquiry(product.id)}
                    className="mr-4 rounded-full p-2 text-gray-400 hover:bg-red-50 hover:text-red-500 transition-all"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
            
            <Link to="/shop" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-accent transition-colors">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add more products
            </Link>
          </div>

          {/* Right: Inquiry Form */}
          <div className="lg:col-span-5">
            <div className="rounded-[40px] bg-gray-50 p-10 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-primary mb-8 font-serif">Business Details</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
                  <input
                    required
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full rounded-2xl border border-gray-200 bg-white px-6 py-4 text-sm focus:border-brand focus:outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Business Name</label>
                  <input
                    required
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    className="w-full rounded-2xl border border-gray-200 bg-white px-6 py-4 text-sm focus:border-brand focus:outline-none transition-all"
                    placeholder="Global Trade Inc."
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Email</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full rounded-2xl border border-gray-200 bg-white px-6 py-4 text-sm focus:border-brand focus:outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Phone</label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full rounded-2xl border border-gray-200 bg-white px-6 py-4 text-sm focus:border-brand focus:outline-none transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Estimated Order Volume</label>
                  <input
                    required
                    type="text"
                    name="orderVolume"
                    value={formData.orderVolume}
                    onChange={handleInputChange}
                    className="w-full rounded-2xl border border-gray-200 bg-white px-6 py-4 text-sm focus:border-brand focus:outline-none transition-all"
                    placeholder="e.g. 500 units / month"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full rounded-2xl border border-gray-200 bg-white px-6 py-4 text-sm focus:border-brand focus:outline-none transition-all resize-none"
                    placeholder="Tell us about your sourcing requirements..."
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full rounded-2xl bg-primary py-5 text-sm font-bold uppercase tracking-widest text-white shadow-xl hover:bg-brand transition-all mt-4"
                >
                  Submit Inquiry
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
