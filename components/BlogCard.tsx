import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/lib/types";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:shadow-md"
    >
      <div className="relative h-44 w-full">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="p-5">
        <p className="text-xs font-medium text-slate-400">
          {new Date(post.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        <h3 className="mt-1 text-base font-bold text-slate-900 group-hover:text-blue-700">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-slate-500">{post.excerpt}</p>
      </div>
    </Link>
  );
}
