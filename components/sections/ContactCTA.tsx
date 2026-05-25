import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";

export function ContactCTA() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="rounded-3xl border border-border bg-surface p-8 sm:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-muted">
                Start a project
              </p>
              <h2 className="text-3xl font-semibold sm:text-4xl">
                Let us shape your next release.
              </h2>
              <p className="max-w-xl text-sm text-muted">{siteConfig.contactBlurb}</p>
            </div>
            <Button href="/contact" size="lg">
              Plan a call
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
