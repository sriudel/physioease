"use client";

import { useState, SubmitEvent } from "react";
import { CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const newErrors: typeof errors = {};
    if (!name.trim()) newErrors.name = "Please enter your name.";
    if (!email.trim() || !email.includes("@")) newErrors.email = "Please enter a valid email.";
    if (!message.trim()) newErrors.message = "Please enter a message.";
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-brand-teal/20 bg-brand-teal/10 p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-teal/15 text-brand-teal">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="mt-4 text-lg font-bold text-brand-plum">Message sent!</h3>
        <p className="mt-2 text-sm text-slate-600">
          Thanks, {name.split(" ")[0]} — we&apos;ll get back to you at {email} within one
          business day.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setName("");
            setEmail("");
            setMessage("");
          }}
          className="mt-5 text-sm font-semibold text-brand-blue hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="contact-name" className="text-sm font-medium text-slate-700">Full name</label>
        <input
          id="contact-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-brand-blue focus:outline-none"
          placeholder="Jane Doe"
        />
        {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="contact-email" className="text-sm font-medium text-slate-700">Email</label>
        <input
          id="contact-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-brand-blue focus:outline-none"
          placeholder="jane@example.com"
        />
        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="contact-message" className="text-sm font-medium text-slate-700">Message</label>
        <textarea
          id="contact-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-brand-blue focus:outline-none"
          placeholder="How can we help?"
        />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-brand-mint py-3 text-sm font-semibold text-brand-navy transition hover:bg-brand-mint-dark"
      >
        Send Message
      </button>
    </form>
  );
}
