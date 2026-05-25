import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container className="space-y-12">
        <header className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">About</p>
          <h1 className="text-4xl font-semibold sm:text-5xl">
            Building products with clarity, craft, and empathy.
          </h1>
          <p className="max-w-2xl text-lg text-muted">
            {siteConfig.aboutExtended}
          </p>
        </header>
        <section className="grid gap-6 md:grid-cols-2">
          {siteConfig.values.map((value) => (
            <article
              key={value.title}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <h2 className="text-xl font-semibold">{value.title}</h2>
              <p className="mt-2 text-sm text-muted">{value.description}</p>
            </article>
          ))}
        </section>
        <section className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="text-2xl font-semibold">Focus areas</h2>
          <ul className="mt-4 grid gap-3 text-sm text-muted sm:grid-cols-2">
            {siteConfig.services.map((service) => (
              <li key={service} className="rounded-xl border border-border px-3 py-2">
                {service}
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </div>
  );
}
