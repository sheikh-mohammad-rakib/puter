import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">Contact</p>
          <h1 className="text-4xl font-semibold sm:text-5xl">
            Ready to plan your next release?
          </h1>
          <p className="text-lg text-muted">{siteConfig.contactBlurb}</p>
          <div className="rounded-2xl border border-border bg-surface p-5">
            <p className="text-sm text-muted">Email</p>
            <p className="text-lg font-semibold">{siteConfig.email}</p>
          </div>
        </div>
        <div className="space-y-6 rounded-2xl border border-border bg-surface p-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">What to include</h2>
            <p className="text-sm text-muted">
              Share the context so I can respond with the right next steps.
            </p>
          </div>
          <ul className="space-y-3 text-sm text-muted">
            {siteConfig.contactChecklist.map((item) => (
              <li key={item} className="rounded-xl border border-border px-3 py-2">
                {item}
              </li>
            ))}
          </ul>
          <Button href="/projects" variant="outline">
            View case studies
          </Button>
        </div>
      </Container>
    </div>
  );
}
