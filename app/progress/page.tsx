import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { progressEntries } from "@/lib/data";

export default function ProgressPage() {
  return (
    <div className="mx-auto min-h-screen max-w-4xl px-6 py-16">
      <div className="mb-10">
        <h1 className="text-4xl font-bold">Progress Log</h1>
        <p className="mt-3 text-muted-foreground">
          Weekly notes about what I learned, built and improved.
        </p>
      </div>

      <div className="space-y-4">
        {progressEntries.map((entry) => (
          <Card key={entry.title} className="border-white/10 bg-white/5">
            <CardContent className="p-6">
              <p className="mb-2 text-sm text-muted-foreground">{entry.date}</p>
              <h2 className="text-xl font-semibold">{entry.title}</h2>
              <p className="mt-3 text-muted-foreground">{entry.content}</p>

              <div className="mt-4 flex gap-2">
                {entry.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
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