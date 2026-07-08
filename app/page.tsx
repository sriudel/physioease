import Link from "next/link";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import BlogCard from "@/components/BlogCard";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { blogPosts } from "@/data/blog";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-extrabold text-slate-900">Our Services</h2>
          <Link href="/services" className="border-b border-slate-900 text-sm font-semibold text-slate-900">
            Explore services
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <HowItWorks />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-extrabold text-slate-900">What Our Patients Say</h2>
          <Link href="/testimonials" className="border-b border-slate-900 text-sm font-semibold text-slate-900">
            Read more
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-end justify-between">
            <h2 className="text-3xl font-extrabold text-slate-900">Blog</h2>
            <Link href="/blog" className="border-b border-slate-900 text-sm font-semibold text-slate-900">
              Explore blog
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
