import { Link } from "react-router-dom";

const email = "info@alghanitrader.com";
const mailto = `mailto:${email}`;

export function ReturnsPage() {
  return (
    <div className="bg-white pt-32 pb-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
          Customer service
        </p>
        <h1 className="font-serif text-3xl font-semibold text-primary sm:text-4xl">
          Returns policy
        </h1>
        <p className="mt-4 text-base text-gray-500 leading-relaxed">
          We want you to shop with confidence. Please read the following terms before
          requesting a return.
        </p>

        <div className="mt-12 space-y-10 text-base leading-relaxed text-gray-600">
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
              Return window
            </h2>
            <p className="mt-3">
              You may request a return within <strong className="font-medium text-primary">14 days</strong>{" "}
              of delivery, subject to the conditions below.
            </p>
          </section>

          <section>
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
              Condition of items
            </h2>
            <p className="mt-3">
              Items must be <strong className="font-medium text-primary">unused</strong> and in{" "}
              <strong className="font-medium text-primary">original condition and packaging</strong> where
              applicable. We reserve the right to refuse returns that do not meet these standards.
            </p>
          </section>

          <section>
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
              Non-returnable items
            </h2>
            <p className="mt-3">
              Some products may be <strong className="font-medium text-primary">non-returnable</strong> due to
              hygiene, safety, or other restrictions. If an item is excluded, we will note it on the product
              page or at checkout when applicable.
            </p>
          </section>

          <section>
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
              Damaged or incorrect orders
            </h2>
            <p className="mt-3">
              If your order arrives damaged or incorrect, please contact us at{" "}
              <a href={mailto} className="font-medium text-brand underline underline-offset-2 hover:text-primary">
                {email}
              </a>{" "}
              within <strong className="font-medium text-primary">48 hours</strong> of delivery and include your
              order details and photos when possible.
            </p>
          </section>

          <section>
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
              Approval before sending back
            </h2>
            <p className="mt-3">
              Returns must be <strong className="font-medium text-primary">approved by us before you ship</strong>{" "}
              anything back. We will provide instructions once your request is reviewed.
            </p>
          </section>

          <section>
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
              Shipping and refunds
            </h2>
            <p className="mt-3">
              Original shipping charges may be <strong className="font-medium text-primary">non-refundable</strong>.
              Refunds, when approved, are processed <strong className="font-medium text-primary">after we receive and inspect</strong>{" "}
              the returned item.
            </p>
          </section>

          <section>
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
              Contact
            </h2>
            <p className="mt-3">
              For return requests or questions about this policy, email{" "}
              <a href={mailto} className="font-medium text-brand underline underline-offset-2 hover:text-primary">
                {email}
              </a>
              .
            </p>
          </section>
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
