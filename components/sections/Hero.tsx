import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";
import { typographyScale } from "@/lib/design-system";

export function Hero() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="space-y-10">
        <div className="space-y-5">
          <p className={`${typographyScale.label} text-muted`}>
            {siteConfig.availability}
          </p>
          <h1 className={`${typographyScale.displayXl} max-w-4xl`}>
            {siteConfig.heroHeadline}
          </h1>
          <p className={`${typographyScale.bodyLg} max-w-2xl text-muted`}>
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
            <Card key={stat.label} variant="elevated" className="space-y-2 px-5 py-4">
              <p className="text-2xl font-semibold">{stat.value}</p>
              <Badge>{stat.label}</Badge>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
