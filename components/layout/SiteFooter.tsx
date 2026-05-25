import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70">
      <Container className="flex flex-col gap-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-4">
          <span>{siteConfig.location}</span>
          <span>{siteConfig.email}</span>
        </div>
      </Container>
    </footer>
  );
}
