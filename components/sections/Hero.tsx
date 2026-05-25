import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="space-y-10">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">
            {siteConfig.availability}
          </p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-6xl">
            {siteConfig.heroHeadline}
          </h1>
          <p className="max-w-2xl text-lg text-muted">
            {siteConfig.heroSubhead}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/projects">View projects</Button>
          <Button href="/contact" variant="outline">
            Start a project
          </Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {siteConfig.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-surface px-5 py-4"
            >
              <p className="text-2xl font-semibold">{stat.value}</p>
              <p className="text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
