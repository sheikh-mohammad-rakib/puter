import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { projects } from "@/data/projects";
import { typographyScale } from "@/lib/design-system";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container className="space-y-10">
        <header className="space-y-4">
          <p className={`${typographyScale.label} text-muted`}>Projects</p>
          <h1 className={typographyScale.displayLg}>Selected work</h1>
          <p className="max-w-2xl text-lg text-muted">
            A snapshot of recent engagements across product strategy, design systems,
            and product UI.
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.title} variant="interactive" className="p-6">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted">
                <span>{project.year}</span>
                <span>{project.role}</span>
              </div>
              <h2 className="mt-4 text-2xl font-semibold">{project.title}</h2>
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
    </div>
  );
}
