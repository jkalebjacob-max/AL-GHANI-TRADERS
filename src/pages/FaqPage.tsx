import type { ReactNode } from "react";
import { Link } from "react-router-dom";

const email = "info@alghanitrader.com";
const mailto = `mailto:${email}`;

const items: { q: string; a: ReactNode }[] = [
  {
    q: "What products do you offer?",
    a: (
      <>
        Al-Ghani Traders carries curated essentials across{" "}
        <strong className="font-medium text-primary">kitchen, home, beauty and personal care</strong>, and{" "}
        <strong className="font-medium text-primary">fitness and lifestyle</strong>. Browse by category on the
        shop page to see the full range.
      </>
    ),
  },
  {
    q: "How do I place an order?",
    a: (
      <>
        Add items to your cart from any product page, then proceed to checkout and complete the required
        contact and shipping details. You&apos;ll receive confirmation as part of the order flow.
      </>
    ),
  },
  {
    q: "Do you offer bulk or larger orders?",
    a: (
      <>
        Yes — <strong className="font-medium text-primary">larger or bulk quantities</strong> may be
        available depending on the product. Email{" "}
        <a href={mailto} className="font-medium text-brand underline underline-offset-2 hover:text-primary">
          {email}
        </a>{" "}
        with what you need and we&apos;ll help you from there.
      </>
    ),
  },
  {
    q: "How long does shipping take?",
    a: (
      <>
        <strong className="font-medium text-primary">Shipping times can vary</strong> by destination,
        carrier, and season. We&apos;ll share the most accurate estimate we can when your order is confirmed
        or when you contact us before ordering.
      </>
    ),
  },
  {
    q: "What is your returns policy?",
    a: (
      <>
        We generally accept returns within{" "}
        <strong className="font-medium text-primary">14 days</strong> for unused items in original condition,
        with approval before you ship anything back. Some items may be non-refundable. For full details, see our{" "}
        <Link to="/returns" className="font-medium text-brand underline underline-offset-2 hover:text-primary">
          Returns policy
        </Link>
        .
      </>
    ),
  },
  {
    q: "What if my item arrives damaged?",
    a: (
      <>
        Contact us at{" "}
        <a href={mailto} className="font-medium text-brand underline underline-offset-2 hover:text-primary">
          {email}
        </a>{" "}
        within <strong className="font-medium text-primary">48 hours</strong> of delivery with your order
        information and photos if possible. We&apos;ll work with you to resolve it.
      </>
    ),
  },
  {
    q: "How can I reach you before I order?",
    a: (
      <>
        We&apos;re happy to answer product or order questions by email at{" "}
        <a href={mailto} className="font-medium text-brand underline underline-offset-2 hover:text-primary">
          {email}
        </a>
        . That&apos;s the best way to reach us before you check out.
      </>
    ),
  },
  {
    q: "How do I contact customer support?",
    a: (
      <>
        Customer support is <strong className="font-medium text-primary">email only</strong>. Write to{" "}
        <a href={mailto} className="font-medium text-brand underline underline-offset-2 hover:text-primary">
          {email}
        </a>{" "}
        and we&apos;ll respond as soon as we can.
      </>
    ),
  },
];

export function FaqPage() {
  return (
    <div className="bg-white pt-32 pb-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
          Help
        </p>
        <h1 className="font-serif text-3xl font-semibold text-primary sm:text-4xl">
          Frequently asked questions
        </h1>
        <p className="mt-4 text-base text-gray-500 leading-relaxed">
          Quick answers about shopping, shipping, returns, and how to reach us.
        </p>

        <div className="mt-12 divide-y divide-gray-100 border-t border-gray-100">
          {items.map(({ q, a }) => (
            <div key={q} className="py-8 first:pt-0">
              <h2 className="text-base font-semibold text-primary">{q}</h2>
              <p className="mt-3 text-base leading-relaxed text-gray-600">{a}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-gray-100 pt-10">
          <Link
            to="/shop"
            className="text-sm font-semibold text-brand transition-colors hover:text-primary"
          >
            ← Back to shop
          </Link>
        </div>
      </div>
    </div>
  );
}
