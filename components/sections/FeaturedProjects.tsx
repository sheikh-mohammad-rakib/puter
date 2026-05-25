import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { projects } from "@/data/projects";
import { typographyScale } from "@/lib/design-system";

export function FeaturedProjects() {
  const featured = projects.slice(0, 3);

  return (
    <section className="py-16 sm:py-24">
      <Container className="space-y-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">
              Selected work
            </p>
            <h2 className={typographyScale.displayLg}>Recent projects</h2>
          </div>
          <Button href="/projects" variant="ghost" size="sm">
            View all
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((project) => (
            <Card key={project.title} variant="interactive" className="p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-muted">
                {project.year}
              </p>
              <h3 className="mt-3 text-xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm text-muted">{project.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
