import Topic from "@/models/Topic";
import mongoose from "mongoose";
import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

async function connectDB() {
  if (mongoose.connection.readyState === 1) return;
  await mongoose.connect(process.env.MONGODB_URI as string);
}

type Params = {
  board: string;
  level: string;
  subject: string;
  subjectCode: string;
  chapter: string;
  topic: string;
};

type TopicDoc = {
  board: string;
  level: string;
  subject: string;
  code: string;
  chapterSlug: string;
  slug: string;
};

export default async function TopicQuizHome({
  params,
}: {
  params: Promise<Params>;
}) {
  const { board, level, subject, subjectCode, chapter, topic } = await params;

  await connectDB();

  const topicDoc = await Topic.findOne<TopicDoc>({
    board,
    level,
    subject,
    code: subjectCode,
    chapterSlug: chapter,
    slug: topic,
  }).lean();
  const sets = [1, 2, 3];

  return (
    <div className="max-w-4xl mx-auto px-6 pb-16 mt-12">
      {/* Breadcrumb */}
      <Breadcrumb className="my-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href={`/${board}`}>{board}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href={`/${board}/${level}`}>{level}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href={`/${board}/${level}/${subject}/${subjectCode}`}>
                {subject} {subjectCode}
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link
                href={`/${board}/${level}/${subject}/${subjectCode}/${chapter}`}
              >
                {chapter.replace(/-/g, " ")}
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbPage>{topicDoc?.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Title */}
      <h1 className="text-4xl font-semibold tracking-tight mb-8">
        {topicDoc?.title} Practice
      </h1>

      <p className="text-muted-foreground mb-12 max-w-xl">
        Test your understanding with multiple choice questions covering theory,
        calculations, and mixed exam-style problems.
      </p>

      {/* THEORY */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-6">Theory Questions</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {sets.map((set) => (
            <Card key={`theory-${set}`} className="border">
              <CardHeader>
                <CardTitle className="text-lg">Theory Set {set}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Conceptual questions testing understanding of the topic.
                </p>

                <Link
                  href={`/${board}/${level}/${subject}/${subjectCode}/${chapter}/${topic}/quiz/theory/${set}`}
                >
                  <Button className="w-full bg-cyan-600 hover:bg-cyan-700">
                    Start Quiz
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CALCULATION */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-6">Calculation Questions</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {sets.map((set) => (
            <Card key={`calc-${set}`}>
              <CardHeader>
                <CardTitle className="text-lg">Calculation Set {set}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Numerical problems requiring equations and calculations.
                </p>

                <Link
                  href={`/${board}/${level}/${subject}/${subjectCode}/${chapter}/${topic}/quiz/calculation/${set}`}
                >
                  <Button className="w-full bg-cyan-600 hover:bg-cyan-700">
                    Start Quiz
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* MIXED */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Mixed Practice</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {sets.map((set) => (
            <Card key={`mixed-${set}`}>
              <CardHeader>
                <CardTitle className="text-lg">Mixed Set {set}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  A mix of conceptual and calculation questions.
                </p>

                <Link
                  href={`/${board}/${level}/${subject}/${subjectCode}/${chapter}/${topic}/quiz/mixed/${set}`}
                >
                  <Button className="w-full bg-cyan-600 hover:bg-cyan-700">
                    Start Quiz
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
