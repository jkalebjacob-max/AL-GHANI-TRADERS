import { Link } from "react-router-dom";
import logoCropped from "../assets/logo-cropped.png";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-24 pb-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          <div className="md:col-span-4">
            <Link to="/" className="mb-8 flex items-center self-start group">
              <img 
                src={logoCropped}
                alt="Al-Ghani Traders Logo" 
                className="h-11 w-auto object-contain opacity-95 transition-opacity group-hover:opacity-100 sm:h-12"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-gray-400 text-base leading-relaxed max-w-sm">
              The premier global sourcing partner for businesses seeking reliability, quality, and scalable wholesale solutions.
            </p>
            <div className="mt-8 flex gap-4">
              {/* Placeholder for social icons if needed, but keeping it minimal */}
              <div className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition cursor-pointer">
                <span className="text-xs font-bold">IN</span>
              </div>
              <div className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition cursor-pointer">
                <span className="text-xs font-bold">TW</span>
              </div>
              <div className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition cursor-pointer">
                <span className="text-xs font-bold">FB</span>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-8">Solutions</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Kitchen Tools</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Home Essentials</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Storage Systems</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Custom Sourcing</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-8">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Quality Control</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Global Network</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-8">Global Inquiries</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex flex-col gap-1">
                <span className="text-white font-medium">Email</span>
                <span>sourcing@alghanitraders.com</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-white font-medium">Phone</span>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-white font-medium">Headquarters</span>
                <span>123 Global Trade Way, Suite 500</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">
          <p>© 2026 Al-Ghani Traders. All rights reserved.</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
