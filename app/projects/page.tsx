import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <div className="mx-auto min-h-screen max-w-6xl px-6 py-16">
      <div className="mb-10">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="mt-3 text-muted-foreground">
          Projects I use to practice full-stack engineering.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.title} className="border-white/10 bg-white/5">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <Badge>{project.status}</Badge>
              </div>

              <p className="text-muted-foreground">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}