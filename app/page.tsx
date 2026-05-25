import { ArrowRight, Database, Code2, Rocket } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { roadmapItems, progressEntries, projects } from "@/lib/data";

export default function HomePage() {
  const averageProgress =
    roadmapItems.reduce((sum, item) => sum + item.progress, 0) / roadmapItems.length;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden px-6 py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#1e40af33,transparent_35%),radial-gradient(circle_at_bottom_right,#9333ea33,transparent_35%)]" />

        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex rounded-full border border-white/10 px-4 py-2 text-sm text-muted-foreground">
              Full-stack learning journal
            </div>

            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
              Building my path to becoming a{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                full-stack engineer
              </span>
              .
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              I use this site to document what I learn, track progress, build projects,
              and turn learning into a public portfolio.
            </p>

            <div className="mt-8 flex gap-4">
              <Button asChild>
                <Link href="/roadmap">
                  View Roadmap <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button variant="outline" asChild>
                <Link href="/progress">Read Progress</Link>
              </Button>
            </div>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            <Card className="border-white/10 bg-white/5">
              <CardContent className="p-6">
                <Database className="mb-4 h-8 w-8" />
                <p className="text-3xl font-bold">{Math.round(averageProgress)}%</p>
                <p className="text-sm text-muted-foreground">Average learning progress</p>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-white/5">
              <CardContent className="p-6">
                <Code2 className="mb-4 h-8 w-8" />
                <p className="text-3xl font-bold">{progressEntries.length}</p>
                <p className="text-sm text-muted-foreground">Progress updates</p>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-white/5">
              <CardContent className="p-6">
                <Rocket className="mb-4 h-8 w-8" />
                <p className="text-3xl font-bold">{projects.length}</p>
                <p className="text-sm text-muted-foreground">Projects tracked</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}