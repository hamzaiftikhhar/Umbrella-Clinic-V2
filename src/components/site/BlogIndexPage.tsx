import { GeoImage } from "./primitives/GeoImage";
import { Link } from "@/components/AppLink";
import { Container } from "./primitives/Container";
import { Reveal } from "./primitives/Reveal";
import { BLOG_POSTS } from "@/data/blog-posts";
import { CTABanner } from "./primitives/CTABanner";

export function BlogIndexPage() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <main>
      <section className="border-b border-border/60 bg-gradient-to-b from-secondary/40 to-background pt-24 pb-16 sm:pt-28 sm:pb-20">
        <Container size="lg">
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-muted-foreground">
            <ol className="flex items-center gap-1.5">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li aria-hidden>/</li>
              <li><span aria-current="page">Blog</span></li>
            </ol>
          </nav>
          <h1 className="font-display max-w-3xl text-balance text-4xl font-medium leading-[1.04] tracking-[-0.02em] text-foreground sm:text-5xl">
            Health insights for{" "}
            <span className="font-light italic text-primary">New Yorkers</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Practical guides on primary care, preventive health, and navigating healthcare in NYC —
            from the physicians at Umbrella Health.
          </p>
        </Container>
      </section>

      {featured && (
        <section className="section-py-compact">
          <Container size="lg">
            <Reveal>
              <Link
                href={`/blog/${featured.slug}` as `/blog/${string}`}
                className="group grid overflow-hidden rounded-[1.75rem] border border-border/60 bg-card shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elegant)] lg:grid-cols-2"
              >
                <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[320px]">
                  <GeoImage
                    src={featured.image}
                    alt={featured.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="flex flex-col justify-center p-8 sm:p-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">
                    {featured.category} · Featured
                  </p>
                  <h2 className="font-display mt-3 text-2xl font-medium leading-tight text-foreground sm:text-3xl">
                    {featured.title}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">{featured.excerpt}</p>
                  <p className="mt-6 text-sm text-muted-foreground">
                    {featured.readTime} · {new Date(featured.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                  </p>
                </div>
              </Link>
            </Reveal>
          </Container>
        </section>
      )}

      <section className="pb-20 sm:pb-28">
        <Container size="lg">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.05}>
                <Link
                  href={`/blog/${post.slug}` as `/blog/${string}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-border/60 bg-card shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <GeoImage
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary/70">
                      {post.category}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold leading-snug text-foreground group-hover:text-primary">
                      {post.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>
                    <p className="mt-4 text-xs text-muted-foreground">{post.readTime}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner eyebrow="Ready for care?" title="Book with" italic="our physicians." />
    </main>
  );
}
