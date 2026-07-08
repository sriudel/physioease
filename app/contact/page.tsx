import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — PhysioEase",
  description: "Get in touch with the PhysioEase team.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-extrabold text-slate-900">Contact Us</h1>
      <p className="mt-3 max-w-2xl text-slate-500">
        Questions about a service, insurance coverage, or booking? Send us a message and a member
        of our team will follow up.
      </p>

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <div className="space-y-6">
          <div className="flex items-start gap-3">
            <Mail className="mt-0.5 h-5 w-5 text-teal-600" />
            <div>
              <p className="text-sm font-semibold text-slate-900">Email</p>
              <p className="text-sm text-slate-500">hello@physioease.example</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="mt-0.5 h-5 w-5 text-teal-600" />
            <div>
              <p className="text-sm font-semibold text-slate-900">Phone</p>
              <p className="text-sm text-slate-500">(555) 123-4567</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 text-teal-600" />
            <div>
              <p className="text-sm font-semibold text-slate-900">Service Area</p>
              <p className="text-sm text-slate-500">
                Virtual and home-visit physiotherapy across Ontario
              </p>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
