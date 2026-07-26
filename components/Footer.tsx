import Link from "next/link";
import { Activity } from "lucide-react";
import { FacebookIcon, InstagramIcon, XIcon } from "@/components/SocialIcons";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-100 bg-brand-bg">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 text-lg font-bold text-brand-blue">
            <Activity className="h-6 w-6 text-brand-teal" />
            PhysioEase
          </div>
          <p className="mt-3 text-sm text-slate-500">
            Virtual care, home care, and aquatic therapy designed to support you through every
            stage of your recovery.
          </p>
          <div className="mt-4 flex gap-3 text-slate-500">
            <FacebookIcon className="h-5 w-5" />
            <InstagramIcon className="h-5 w-5" />
            <XIcon className="h-5 w-5" />
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-800">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-500">
            <li><Link href="/services" className="hover:text-brand-blue">Services</Link></li>
            <li><Link href="/team" className="hover:text-brand-blue">Our Team</Link></li>
            <li><Link href="/testimonials" className="hover:text-brand-blue">Testimonials</Link></li>
            <li><Link href="/blog" className="hover:text-brand-blue">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-800">Company</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-500">
            <li><Link href="/how-it-works" className="hover:text-brand-blue">How It Works</Link></li>
            <li><Link href="/contact" className="hover:text-brand-blue">Contact</Link></li>
            <li><Link href="/#faq" className="hover:text-brand-blue">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-800">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-500">
            <li>hello@physioease.example</li>
            <li>(555) 123-4567</li>
            <li>Serving all of Ontario, virtually</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200 py-6 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} PhysioEase. Demo site with synthetic data — not a real
        clinic.
      </div>
    </footer>
  );
}
