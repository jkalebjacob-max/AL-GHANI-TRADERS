import { Link } from "react-router-dom";
import logoCropped from "../assets/logo-cropped.png";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link to="/" className="mb-6 inline-block">
              <img
                src={logoCropped}
                alt="Al-Ghani Traders"
                className="h-10 w-auto object-contain opacity-90 transition-opacity hover:opacity-100 sm:h-11"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Your trusted destination for quality essentials across kitchen, home, beauty, and lifestyle.
            </p>
          </div>

          {/* Shop */}
          <div className="md:col-span-2">
            <h4 className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-accent">Shop</h4>
            <ul className="space-y-3.5 text-sm text-gray-400">
              <li><Link to="/shop" className="hover:text-white transition-colors">All products</Link></li>
              <li><Link to="/category/Kitchen" className="hover:text-white transition-colors">Kitchen</Link></li>
              <li><Link to="/category/Home" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/category/Beauty" className="hover:text-white transition-colors">Beauty</Link></li>
              <li><Link to="/category/Fitness" className="hover:text-white transition-colors">Fitness</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h4 className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-accent">Company</h4>
            <ul className="space-y-3.5 text-sm text-gray-400">
              <li><a href="/#about" className="hover:text-white transition-colors">About us</a></li>
              <li><a href="/#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-accent">Get in touch</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex flex-col gap-0.5">
                <span className="text-white font-medium text-xs uppercase tracking-wider">Email</span>
                <a href="mailto:support@alghanitraders.com" className="hover:text-white transition-colors">
                  support@alghanitraders.com
                </a>
              </li>
              <li className="flex flex-col gap-0.5">
                <span className="text-white font-medium text-xs uppercase tracking-wider">Phone</span>
                <a href="tel:+15551234567" className="hover:text-white transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row justify-between items-center gap-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-500">
          <p>© 2026 Al-Ghani Traders. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
