"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, BookOpen, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { learningList } from "@/lib/data";

type TopicId = string;

export default function LearningListPage() {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(["javascript-basics"])
  );
  const [expandedTopics, setExpandedTopics] = useState<Set<TopicId>>(new Set());

  const toggleCategory = (id: string) => {
    const newSet = new Set(expandedCategories);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setExpandedCategories(newSet);
  };

  const toggleTopic = (id: TopicId) => {
    const newSet = new Set(expandedTopics);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setExpandedTopics(newSet);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden px-6 py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#1e40af33,transparent_35%),radial-gradient(circle_at_bottom_right,#9333ea33,transparent_35%)]" />

        <div className="mx-auto max-w-4xl">
          <div className="mb-12">
            <div className="mb-6 inline-flex rounded-full border border-white/10 px-4 py-2 text-sm text-muted-foreground">
              <BookOpen className="mr-2 h-4 w-4" />
              Learning Resources
            </div>

            <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
              My Learning{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Checklist
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              A comprehensive guide of what I need to learn as a full-stack engineer. Each item includes why it matters and what to focus on.
            </p>
          </div>

          <div className="space-y-4">
            {learningList.map((category) => (
              <Card key={category.id} className="border-white/10 bg-white/5">
                <CardHeader
                  className="cursor-pointer transition-colors hover:bg-white/10"
                  onClick={() => toggleCategory(category.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {expandedCategories.has(category.id) ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                      <CardTitle className="text-xl">
                        {category.category}
                      </CardTitle>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {category.topics.length} topic
                      {category.topics.length > 1 ? "s" : ""}
                    </span>
                  </div>
                </CardHeader>

                {expandedCategories.has(category.id) && (
                  <CardContent className="space-y-4 pt-0">
                    {category.topics.map((topic) => {
                      const topicKey = `${category.id}-${topic.title}`;
                      const isExpanded = expandedTopics.has(topicKey);

                      return (
                        <div
                          key={topicKey}
                          className="rounded-lg border border-white/5 bg-white/[0.02]"
                        >
                          <div
                            className="cursor-pointer p-4 transition-colors hover:bg-white/10"
                            onClick={() => toggleTopic(topicKey)}
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex items-start gap-3 flex-1">
                                {isExpanded ? (
                                  <ChevronUp className="mt-1 h-4 w-4 flex-shrink-0" />
                                ) : (
                                  <ChevronDown className="mt-1 h-4 w-4 flex-shrink-0" />
                                )}
                                <div className="flex-1 min-w-0">
                                  <h3 className="font-semibold text-base">
                                    {topic.title}
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </div>

                          {isExpanded && (
                            <div className="border-t border-white/5 bg-white/[0.03] p-4 space-y-3">
                              <div>
                                <div className="flex items-start gap-2 mb-2">
                                  <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0 text-amber-500" />
                                  <div className="flex-1 min-w-0">
                                    <p className="text-sm font-semibold text-white mb-1">
                                      Why learn this?
                                    </p>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                      {topic.reason}
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <div>
                                <p className="text-sm font-semibold text-white mb-2">
                                  Key topics to focus on:
                                </p>
                                <div className="flex flex-wrap gap-2">
                                  {topic.subtopics.map((subtopic) => (
                                    <span
                                      key={subtopic}
                                      className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-muted-foreground hover:bg-white/20 transition-colors"
                                    >
                                      {subtopic}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          <Card className="border-white/10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 mt-8">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2">
                💡 How to use this list
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Review one category at a time</li>
                <li>✓ Read the "why learn this?" section for context</li>
                <li>✓ Focus on the key topics listed</li>
                <li>✓ Document your progress in the progress section</li>
                <li>✓ Build projects to practice what you learn</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
