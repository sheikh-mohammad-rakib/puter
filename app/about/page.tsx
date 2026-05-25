import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";
import { typographyScale } from "@/lib/design-system";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container className="space-y-12">
        <header className="space-y-4">
          <p className={`${typographyScale.label} text-muted`}>About</p>
          <h1 className={typographyScale.displayLg}>
            Building products with clarity, craft, and empathy.
          </h1>
          <p className={`${typographyScale.bodyLg} max-w-2xl text-muted`}>
            {siteConfig.aboutExtended}
          </p>
        </header>
        <section className="grid gap-6 md:grid-cols-2">
          {siteConfig.values.map((value) => (
            <Card key={value.title} variant="elevated" className="p-6">
              <h2 className="text-xl font-semibold">{value.title}</h2>
              <p className="mt-2 text-sm text-muted">{value.description}</p>
            </Card>
          ))}
        </section>
        <Card variant="elevated" className="p-6">
          <h2 className="text-2xl font-semibold">Focus areas</h2>
          <ul className="mt-4 grid gap-3 text-sm text-muted sm:grid-cols-2">
            {siteConfig.services.map((service) => (
              <li key={service}>
                <Badge badgeStyle="list">{service}</Badge>
              </li>
            ))}
          </ul>
        </Card>
      </Container>
    </div>
  );
}
