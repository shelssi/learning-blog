import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { roadmapItems } from "@/lib/data";

export default function RoadmapPage() {
  return (
    <div className="mx-auto min-h-screen max-w-6xl px-6 py-16">
      <div className="mb-10">
        <h1 className="text-4xl font-bold">Learning Roadmap</h1>
        <p className="mt-3 text-muted-foreground">
          My current full-stack learning path, tracked by topic and progress.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {roadmapItems.map((item) => (
          <Card key={item.title} className="border-white/10 bg-white/5">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="text-sm text-muted-foreground">{item.category}</p>
                </div>
                <Badge variant={item.status === "Completed" ? "default" : "secondary"}>
                  {item.status}
                </Badge>
              </div>

              <p className="mb-4 text-sm text-muted-foreground">{item.description}</p>

              <Progress value={item.progress} />
              <p className="mt-2 text-sm text-muted-foreground">{item.progress}%</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}