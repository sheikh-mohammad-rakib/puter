import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";

export function AboutPreview() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">About</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Designing calm, clear product journeys.
          </h2>
          <p className="text-muted">{siteConfig.about}</p>
          <Button href="/about" variant="ghost">
            Read the full story
          </Button>
        </div>
        <div className="space-y-4">
          {siteConfig.highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-surface p-5"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
