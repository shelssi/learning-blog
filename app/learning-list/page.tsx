"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, BookOpen, AlertCircle, Zap, Code } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { learningList } from "@/lib/data";

type TopicId = string;

export default function LearningListPage() {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(["javascript-basics"])
  );
  const [expandedTopics, setExpandedTopics] = useState<Set<TopicId>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string | null>("session-management");

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

  const selectedCategoryData = learningList.find(c => c.id === selectedCategory);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#1e40af33,transparent_40%),radial-gradient(circle_at_bottom_right,#9333ea33,transparent_40%)]" />

        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <div className="mb-6 inline-flex rounded-full border border-white/10 px-4 py-2 text-sm text-muted-foreground">
              <BookOpen className="mr-2 h-4 w-4" />
              完整学习路线
            </div>

            <h1 className="text-6xl font-bold tracking-tight">
              全栈工程师{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                必学知识体系
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg text-muted-foreground leading-relaxed">
              从Web基础到认证系统、后端API再到全栈架构，这是一份详细的学习清单。每个主题都包括学习动机、核心概念和实战应用。
            </p>
          </div>
        </div>
      </section>

      <div className="relative">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* 左侧：分类列表 */}
            <div className="space-y-2">
              <h2 className="text-sm font-semibold text-muted-foreground mb-4 px-4">
                学习类别
              </h2>
              <div className="space-y-2">
                {learningList.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                      selectedCategory === category.id
                        ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/50 text-white"
                        : "bg-white/5 border border-transparent text-muted-foreground hover:bg-white/10"
                    }`}
                  >
                    <div className="font-medium">{category.category}</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {category.topics.length} 个主题
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 右侧：详细内容 */}
            <div className="lg:col-span-2">
              {selectedCategoryData && (
                <div className="space-y-6">
                  {/* 类别标题 */}
                  <div>
                    <div className="text-4xl mb-2">{selectedCategoryData.category.split(" ")[0]}</div>
                    <h2 className="text-3xl font-bold mb-2">
                      {selectedCategoryData.category.substring(3)}
                    </h2>
                    <p className="text-muted-foreground">
                      {selectedCategoryData.description}
                    </p>
                  </div>

                  {/* 如果有详细解释，显示在最上面 */}
                  {selectedCategoryData.explanation && (
                    <Card className="border-amber-500/30 bg-amber-500/5">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-3 mb-4">
                          <Zap className="h-5 w-5 flex-shrink-0 text-amber-500 mt-1" />
                          <h3 className="text-lg font-semibold">完整流程解析</h3>
                        </div>
                        <div className="prose prose-invert max-w-none text-sm">
                          {selectedCategoryData.explanation
                            .split('\n')
                            .map((line, idx) => {
                              if (line.startsWith('###')) {
                                return (
                                  <h4 key={idx} className="text-base font-semibold mt-4 mb-2 text-white">
                                    {line.replace(/^### /, '')}
                                  </h4>
                                );
                              }
                              if (line.startsWith('```')) {
                                return null;
                              }
                              if (line.startsWith('│') || line.startsWith('┌') || line.startsWith('├') || line.startsWith('└')) {
                                return (
                                  <pre key={idx} className="bg-black/30 rounded px-3 py-2 text-xs font-mono overflow-x-auto">
                                    {line}
                                  </pre>
                                );
                              }
                              if (line.trim().startsWith('const ') || line.trim().startsWith('//') || line.trim().startsWith('GET ')) {
                                return (
                                  <pre key={idx} className="bg-black/30 rounded px-3 py-1 text-xs font-mono my-1 overflow-x-auto">
                                    {line}
                                  </pre>
                                );
                              }
                              return (
                                <p key={idx} className="text-muted-foreground my-2">
                                  {line || ' '}
                                </p>
                              );
                            })}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* 主题列表 */}
                  <div className="space-y-3">
                    {selectedCategoryData.topics.map((topic) => {
                      const topicKey = `${selectedCategoryData.id}-${topic.title}`;
                      const isExpanded = expandedTopics.has(topicKey);

                      return (
                        <Card
                          key={topicKey}
                          className="border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-colors"
                        >
                          <div
                            className="cursor-pointer p-5"
                            onClick={() => toggleTopic(topicKey)}
                          >
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex items-start gap-3 flex-1 min-w-0">
                                <div className={`mt-1 h-5 w-5 flex-shrink-0 flex items-center justify-center rounded transition-colors ${
                                  isExpanded ? 'bg-blue-500' : 'bg-white/10'
                                }`}>
                                  {isExpanded ? (
                                    <ChevronUp className="h-4 w-4" />
                                  ) : (
                                    <ChevronDown className="h-4 w-4" />
                                  )}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h3 className="font-semibold text-base leading-tight">
                                    {topic.title}
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </div>

                          {isExpanded && (
                            <div className="border-t border-white/5 bg-white/[0.02] px-5 py-4 space-y-4">
                              {/* Why learn this */}
                              <div>
                                <div className="flex items-start gap-2 mb-2">
                                  <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0 text-amber-500" />
                                  <div className="flex-1 min-w-0">
                                    <p className="text-xs font-semibold text-amber-400 mb-1">
                                      为什么要学？
                                    </p>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                      {topic.reason}
                                    </p>
                                  </div>
                                </div>
                              </div>

                              {/* Key focus areas */}
                              <div>
                                <div className="flex items-center gap-2 mb-2">
                                  <Code className="h-4 w-4" />
                                  <p className="text-xs font-semibold text-white">
                                    重点学习
                                  </p>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                  {topic.subtopics.map((subtopic) => (
                                    <span
                                      key={subtopic}
                                      className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-3 py-1 text-xs font-medium text-blue-200 border border-blue-500/30 hover:border-blue-500/50 transition-colors"
                                    >
                                      {subtopic}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                        </Card>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Tips */}
      <section className="relative px-6 py-16 border-t border-white/10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-green-500/30 bg-green-500/5">
              <CardContent className="p-6">
                <div className="text-2xl mb-3">✅</div>
                <h3 className="font-semibold mb-2">阅读 "为什么要学"</h3>
                <p className="text-sm text-muted-foreground">
                  理解学习动机，明确这些技能对全栈开发的重要性
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-500/30 bg-blue-500/5">
              <CardContent className="p-6">
                <div className="text-2xl mb-3">🎯</div>
                <h3 className="font-semibold mb-2">关注重点</h3>
                <p className="text-sm text-muted-foreground">
                  每个主题的标签列出了最关键的概念，作为学习的方向指引
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-500/30 bg-purple-500/5">
              <CardContent className="p-6">
                <div className="text-2xl mb-3">🚀</div>
                <h3 className="font-semibold mb-2">动手实践</h3>
                <p className="text-sm text-muted-foreground">
                  在学习后建立项目，应用这些知识，记录在进度页面
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
