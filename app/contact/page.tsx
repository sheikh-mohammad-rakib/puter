import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Input, Textarea } from "@/components/ui/Input";
import { siteConfig } from "@/data/site";
import { typographyScale } from "@/lib/design-system";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <p className={`${typographyScale.label} text-muted`}>Contact</p>
          <h1 className={typographyScale.displayLg}>
            Ready to plan your next release?
          </h1>
          <p className={`${typographyScale.bodyLg} text-muted`}>{siteConfig.contactBlurb}</p>
          <Card variant="elevated" className="space-y-2 p-5">
            <p className="text-sm text-muted">Email</p>
            <p className="text-lg font-semibold">{siteConfig.email}</p>
          </Card>
        </div>
        <Card variant="elevated" className="space-y-6 p-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">What to include</h2>
            <p className="text-sm text-muted">
              Share the context so I can respond with the right next steps.
            </p>
          </div>
          <ul className="space-y-3 text-sm text-muted">
            {siteConfig.contactChecklist.map((item) => (
              <li key={item}>
                <Badge badgeStyle="list">{item}</Badge>
              </li>
            ))}
          </ul>
          <form className="space-y-3" aria-label="Contact form preview">
            <label className="block space-y-2 text-sm font-medium">
              <span>Your name</span>
              <Input type="text" placeholder="Your name" aria-label="Your name" />
            </label>
            <label className="block space-y-2 text-sm font-medium">
              <span>Email address</span>
              <Input type="email" placeholder="Email address" aria-label="Email address" />
            </label>
            <label className="block space-y-2 text-sm font-medium">
              <span>Project details</span>
              <Textarea placeholder="Project details" aria-label="Project details" />
            </label>
          </form>
          <Button href="/projects" variant="outline">
            View case studies
          </Button>
        </Card>
      </Container>
    </div>
  );
}
