import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useCart } from "../context/InquiryContext";
import logoCropped from "../assets/logo-cropped.png";

function isNavActive(pathname: string, hash: string, href: string): boolean {
  if (href === "/") return pathname === "/" && !hash;
  if (href.startsWith("/#")) return pathname === "/" && hash === href.slice(1);
  if (href === "/shop") return pathname === "/shop" || pathname.startsWith("/category/");
  if (href === "/checkout") return pathname === "/checkout";
  return pathname === href;
}

export function Navbar() {
  const location = useLocation();
  const { pathname, hash } = location;
  const { itemCount, openCart } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(72);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
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
    "rounded-lg px-3 py-2 text-[12px] font-medium uppercase tracking-[0.12em] outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-white";
  const linkIdle = "text-gray-500 hover:bg-gray-50/80 hover:text-primary";
  const linkActive = "text-brand bg-brand/[0.06]";

  return (
    <motion.header
      ref={headerRef}
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 right-0 top-0 z-50 border-b border-gray-200/60 bg-white/90 shadow-[0_1px_20px_rgba(0,0,0,0.04)] backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3.5 lg:px-8 lg:py-4">
        {/* Logo */}
        <Link
          to="/"
          className="group flex shrink-0 items-center self-center rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
        >
          <img
            src={logoCropped}
            alt="Al-Ghani Traders"
            className="block h-11 w-auto shrink-0 object-contain transition-transform duration-300 group-hover:scale-[1.02] lg:h-13"
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active = isNavActive(pathname, hash, link.href);
            return (
              <Link
                key={link.name}
                to={link.href}
                className={`${linkBase} ${active ? linkActive : linkIdle}`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Cart icon — always visible */}
          <button
            type="button"
            onClick={openCart}
            className="relative flex h-10 w-10 items-center justify-center rounded-xl text-gray-600 outline-none transition-colors hover:bg-gray-50 hover:text-primary focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            aria-label={`Cart${itemCount > 0 ? `, ${itemCount} items` : ""}`}
          >
            <ShoppingBag className="h-5 w-5" strokeWidth={1.75} />
            {itemCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4.5 min-w-4.5 items-center justify-center rounded-full bg-brand px-1 text-[9px] font-bold leading-none text-white shadow-sm">
                {itemCount > 99 ? "99+" : itemCount}
              </span>
            )}
          </button>

          {/* Checkout CTA — desktop */}
          <motion.div className="hidden sm:block" whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/checkout"
              className="inline-flex h-10 items-center justify-center rounded-xl bg-primary px-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white shadow-sm transition-all hover:bg-brand lg:px-6"
            >
              Checkout
            </Link>
          </motion.div>

          {/* Hamburger — mobile */}
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

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed bottom-0 left-0 right-0 z-40 bg-black/20 backdrop-blur-[2px] lg:hidden"
              style={{ top: headerHeight }}
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              id="mobile-navigation"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-0 right-0 top-full z-50 border-b border-gray-100 bg-white shadow-lg lg:hidden"
            >
              <div className="mx-auto max-w-7xl overflow-y-auto px-6 py-4 sm:px-8">
                <ul className="divide-y divide-gray-100">
                  {navLinks.map((link) => {
                    const active = isNavActive(pathname, hash, link.href);
                    return (
                      <li key={link.name}>
                        <Link
                          to={link.href}
                          onClick={() => setMobileOpen(false)}
                          className={`flex min-h-[50px] items-center py-3 text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors ${
                            active ? "text-brand" : "text-primary hover:text-brand"
                          }`}
                        >
                          {link.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-4 flex flex-col gap-2.5 border-t border-gray-100 pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setMobileOpen(false);
                      openCart();
                    }}
                    className="flex min-h-[46px] items-center justify-between rounded-xl border border-gray-200 bg-white px-4 text-[13px] font-semibold text-primary transition hover:bg-gray-50"
                  >
                    <span>View cart</span>
                    {itemCount > 0 && (
                      <span className="rounded-full bg-brand px-2.5 py-0.5 text-[11px] font-bold text-white">
                        {itemCount}
                      </span>
                    )}
                  </button>
                  <Link
                    to="/checkout"
                    className="flex min-h-[46px] items-center justify-center rounded-xl bg-primary px-4 text-[13px] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-brand"
                    onClick={() => setMobileOpen(false)}
                  >
                    Checkout
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
