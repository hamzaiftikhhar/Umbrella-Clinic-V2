import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildPageSeo } from "@/lib/page-head";
import { JsonLd } from "@/components/JsonLd";
import { BlogPostPage } from "@/components/site/BlogPostPage";
import { BLOG_POSTS, getBlogPost } from "@/data/blog-posts";
import { articleSchema } from "@/lib/schema";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  const path = `/blog/${slug}`;
  const seo = buildPageSeo({
    title: `${post.title} — Umbrella Health Blog`,
    description: post.excerpt,
    path,
    type: "article",
    ogImage: post.image,
    crumbs: [{ label: "Home", to: "/" }, { label: "Blog", to: "/blog" }, { label: post.title }],
  });
  return seo.metadata;
}

export default async function BlogPostRoute({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const path = `/blog/${slug}`;
  const jsonLd = [
    articleSchema({
      title: post.title,
      excerpt: post.excerpt,
      path,
      image: post.image,
    }),
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <BlogPostPage post={post} />
    </>
  );
}
