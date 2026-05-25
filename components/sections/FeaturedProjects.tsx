import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { projects } from "@/data/projects";

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
            <h2 className="text-3xl font-semibold sm:text-4xl">Recent projects</h2>
          </div>
          <Button href="/projects" variant="ghost" size="sm">
            View all
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-border bg-surface p-6 shadow-sm"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-muted">
                {project.year}
              </p>
              <h3 className="mt-3 text-xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm text-muted">{project.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
