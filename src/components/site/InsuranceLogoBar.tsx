import { Container } from "./primitives/Container";

const items = [
  {
    name: "Aetna",
    src: "https://cdn.prod.website-files.com/671689b64db775dfa0909ffe/6717f73a7db6b20963494b44_aetna-logo.svg",
  },
  {
    name: "Blue Cross Blue Shield",
    src: "https://cdn.prod.website-files.com/671689b64db775dfa0909ffe/6717f73a5799a3a0e3973b9e_blue-cross-blueshield-logo.svg",
  },
  {
    name: "Cigna",
    src: "https://cdn.prod.website-files.com/671689b64db775dfa0909ffe/6717f73a8f79d6bf6a47cee8_cigna-logo.svg",
  },
  {
    name: "United Healthcare",
    src: "https://cdn.prod.website-files.com/671689b64db775dfa0909ffe/6717f73a9e64826d7d172c17_united-healthcare-logo.svg",
  },
  {
    name: "EmblemHealth",
    src: "https://cdn.prod.website-files.com/671689b64db775dfa0909ffe/6717f73a739b76071499f949_emblem-health-logo.svg",
  },
  {
    name: "Medicare",
    src: "https://cdn.prod.website-files.com/671689b64db775dfa0909ffe/6717f73a8d1a144876308656_medicare-logo.svg",
  },
];

export function InsuranceLogoBar() {
  return (
    <section aria-label="Accepted insurance" className="py-12 sm:py-16">
      <Container>
        <p className="mb-8 text-center text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
          We accept most major insurance
        </p>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
          {items.map((item) => (
            <li
              key={item.name}
              className="flex h-20 sm:h-24 items-center justify-center rounded-2xl border border-border/60 bg-card px-4 py-4 transition-colors hover:bg-muted/50"
            >
              <img
                src={item.src}
                alt={`${item.name} logo`}
                className="h-10 sm:h-14 w-auto object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
