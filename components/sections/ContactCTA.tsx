import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";
import { typographyScale } from "@/lib/design-system";

export function ContactCTA() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Card variant="elevated" className="p-8 sm:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <p className={`${typographyScale.label} text-muted`}>
                Start a project
              </p>
              <h2 className={typographyScale.displayLg}>
                Let us shape your next release.
              </h2>
              <p className="max-w-xl text-sm text-muted">{siteConfig.contactBlurb}</p>
            </div>
            <Button href="/contact" size="lg">
              Plan a call
            </Button>
          </div>
        </Card>
      </Container>
    </section>
  );
}
