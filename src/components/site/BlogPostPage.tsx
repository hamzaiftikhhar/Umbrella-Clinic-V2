import { GeoImage } from "./primitives/GeoImage";
import { Link } from "@/components/AppLink";
import { Container } from "./primitives/Container";
import { BookButton } from "./primitives/BookButton";
import type { BlogPost } from "@/data/blog-posts";

export function BlogPostPage({ post }: { post: BlogPost }) {
  return (
    <main>
      <article>
        <header className="border-b border-border/60 bg-secondary/25 pt-24 pb-12 sm:pt-28 sm:pb-16">
          <Container size="lg">
            <nav aria-label="Breadcrumb" className="mb-6 text-xs text-muted-foreground">
              <ol className="flex flex-wrap items-center gap-1.5">
                <li><Link href="/" className="hover:underline">Home</Link></li>
                <li aria-hidden>/</li>
                <li><Link href="/blog" className="hover:underline">Blog</Link></li>
                <li aria-hidden>/</li>
                <li><span aria-current="page">{post.title}</span></li>
              </ol>
            </nav>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">
              {post.category}
            </p>
            <h1 className="font-display mt-4 max-w-3xl text-balance text-3xl font-medium leading-[1.06] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{post.excerpt}</p>
            <p className="mt-6 text-sm text-muted-foreground">
              {post.author} · {post.readTime} ·{" "}
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </Container>
        </header>

        <div className="relative mx-auto aspect-[21/9] max-w-5xl overflow-hidden">
          <GeoImage
            src={post.image}
            alt={post.imageAlt}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>

        <Container size="lg" className="py-16 sm:py-20">
          <div className="prose-custom mx-auto max-w-2xl space-y-6">
            {post.body.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-lg leading-relaxed text-foreground/85">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-border/60 bg-secondary/30 p-8 text-center">
            <p className="font-display text-xl font-medium text-foreground">
              Ready to establish care in NYC?
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Book with our board-certified primary care physicians in Lower Manhattan.
            </p>
            <div className="mt-6">
              <BookButton>Schedule an appointment</BookButton>
            </div>
          </div>
        </Container>
      </article>
    </main>
  );
}
