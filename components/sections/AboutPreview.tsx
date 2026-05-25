import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";
import { typographyScale } from "@/lib/design-system";

export function AboutPreview() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <p className={`${typographyScale.label} text-muted`}>About</p>
          <h2 className={typographyScale.displayLg}>
            Designing calm, clear product journeys.
          </h2>
          <p className="text-muted">{siteConfig.about}</p>
          <Button href="/about" variant="ghost">
            Read the full story
          </Button>
        </div>
        <div className="space-y-4">
          {siteConfig.highlights.map((item) => (
            <Card key={item.title} variant="elevated" className="space-y-2 p-5">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-muted">{item.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
