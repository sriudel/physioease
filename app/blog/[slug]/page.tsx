import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  return {
    title: post ? `${post.title} — PhysioEase Blog` : "Blog — PhysioEase",
    description: post?.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Link href="/blog" className="flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-900">
        <ChevronLeft className="h-4 w-4" /> Back to blog
      </Link>

      <div className="relative mt-6 h-64 w-full overflow-hidden rounded-2xl sm:h-80">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(min-width: 640px) 768px, 100vw"
          className="object-cover"
        />
      </div>

      <p className="mt-6 text-xs font-medium text-slate-400">
        {new Date(post.date).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}{" "}
        · By {post.author}
      </p>
      <h1 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">{post.title}</h1>

      <div className="mt-6 space-y-4 text-slate-600">
        {post.content.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
