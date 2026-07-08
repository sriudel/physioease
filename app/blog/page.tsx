import type { Metadata } from "next";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog — PhysioEase",
  description: "Recovery tips and physiotherapy insights from the PhysioEase team.",
};

export default function BlogPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-extrabold text-slate-900">Blog</h1>
      <p className="mt-3 max-w-2xl text-slate-500">
        Recovery tips, explainers, and insights from our physiotherapists.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
