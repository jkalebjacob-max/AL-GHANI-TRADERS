import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useInquiry } from "../context/InquiryContext";
import logoCropped from "../assets/logo-cropped.png";

function isNavActive(pathname: string, hash: string, href: string): boolean {
  if (href === "/") return pathname === "/" && !hash;
  if (href.startsWith("/#")) return pathname === "/" && hash === href.slice(1);
  if (href === "/shop") return pathname === "/shop" || pathname.startsWith("/category/");
  if (href === "/inquiry") return pathname === "/inquiry";
  return pathname === href;
}

export function Navbar() {
  const location = useLocation();
  const { pathname, hash } = location;
  const { inquiryList } = useInquiry();
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(72);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Catalog", href: "/shop" },
    { name: "Inquiry", href: "/inquiry" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
  ];

  useLayoutEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const update = () => setHeaderHeight(el.offsetHeight);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname, hash]);

  useEffect(() => {
    if (!mobileOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  const linkBase =
    "rounded-lg px-3 py-2 text-[12px] font-semibold uppercase tracking-[0.12em] transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-white";
  const linkIdle = "text-gray-600 hover:bg-gray-50 hover:text-primary";
  const linkActive = "text-brand bg-brand/[0.06]";

  return (
    <motion.header
      ref={headerRef}
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100/90 bg-white/85 shadow-soft backdrop-blur-xl supports-[backdrop-filter]:bg-white/72"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3.5 lg:px-8 lg:py-4">
        <Link
          to="/"
          className="group flex shrink-0 items-center self-center rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
        >
          <img
            src={logoCropped}
            alt="Al-Ghani Traders"
            className="block h-12 w-auto shrink-0 object-contain transition-transform duration-300 group-hover:scale-[1.02] lg:h-14"
            referrerPolicy="no-referrer"
          />
        </Link>

        <nav
          className="hidden items-center gap-0.5 lg:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => {
            const active = isNavActive(pathname, hash, link.href);
            return (
              <Link
                key={link.name}
                to={link.href}
                className={`${linkBase} flex items-center gap-1.5 ${
                  active ? linkActive : linkIdle
                }`}
              >
                {link.name}
                {link.name === "Inquiry" && inquiryList.length > 0 && (
                  <span className="inline-flex min-h-[1.125rem] min-w-[1.125rem] items-center justify-center rounded-full bg-brand px-1 text-[10px] font-bold tabular-nums text-white">
                    {inquiryList.length}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            to="/inquiry"
            className="relative rounded-lg p-2 text-primary outline-none transition-colors hover:bg-gray-50 hover:text-brand focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 lg:hidden"
            aria-label={`Inquiry list${inquiryList.length > 0 ? `, ${inquiryList.length} items` : ""}`}
          >
            <svg
              className="h-5 w-5 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            {inquiryList.length > 0 && (
              <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-brand px-1 text-[9px] font-bold text-white">
                {inquiryList.length}
              </span>
            )}
          </Link>

          <motion.div
            className="hidden sm:block"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to="/inquiry"
              className="inline-flex min-h-[44px] items-center justify-center rounded-2xl bg-primary px-5 py-2.5 text-center text-[12px] font-semibold uppercase tracking-[0.14em] text-white shadow-sm transition-colors hover:bg-brand lg:px-6"
            >
              Request a quote
            </Link>
          </motion.div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200/90 bg-white text-primary shadow-sm transition hover:border-gray-300 hover:bg-gray-50/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" strokeWidth={1.75} aria-hidden />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.75} aria-hidden />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed bottom-0 left-0 right-0 z-40 bg-primary/25 backdrop-blur-[2px] lg:hidden"
              style={{ top: headerHeight }}
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              id="mobile-navigation"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-0 right-0 top-full z-50 max-h-[min(78vh,32rem)] border-b border-gray-100 bg-white/98 shadow-premium backdrop-blur-xl lg:hidden"
            >
              <div className="mx-auto max-w-7xl overflow-y-auto px-6 py-5 sm:px-8">
                <ul className="divide-y divide-gray-100">
                  {navLinks.map((link) => {
                    const active = isNavActive(pathname, hash, link.href);
                    return (
                      <li key={link.name}>
                        <Link
                          to={link.href}
                          onClick={() => setMobileOpen(false)}
                          className={`flex min-h-[52px] items-center justify-between py-3 text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors first:pt-1 last:pb-1 ${
                            active ? "text-brand" : "text-primary"
                          } ${!active ? "hover:text-brand" : ""}`}
                        >
                          <span>{link.name}</span>
                          {link.name === "Inquiry" && inquiryList.length > 0 && (
                            <span className="rounded-full bg-brand/10 px-2.5 py-0.5 text-[11px] font-bold tabular-nums text-brand">
                              {inquiryList.length}
                            </span>
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-6 flex flex-col gap-3 border-t border-gray-100 pt-6 sm:hidden">
                  <Link
                    to="/shop"
                    className="flex min-h-[48px] items-center justify-center rounded-2xl border border-gray-200 bg-white px-4 text-[13px] font-semibold uppercase tracking-[0.12em] text-primary transition hover:border-brand/25 hover:bg-[#fafbfa]"
                    onClick={() => setMobileOpen(false)}
                  >
                    Browse catalog
                  </Link>
                  <Link
                    to="/inquiry"
                    className="flex min-h-[48px] items-center justify-center rounded-2xl bg-primary px-4 text-[13px] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-brand"
                    onClick={() => setMobileOpen(false)}
                  >
                    Request a quote
                  </Link>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
