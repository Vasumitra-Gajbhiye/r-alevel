import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default async function ChapterPage({
  params,
}: {
  params: Promise<{
    board: string;
    level: string;
    subject: string;
    subjectCode: string;
    chapter: string;
  }>;
}) {
  const { board, level, subject, subjectCode, chapter } = await params;

  return (
    <div className="max-w-4xl mx-auto px-6 pt-12 pb-16 space-y-12">
      <Breadcrumb className="mb-2">
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
            <BreadcrumbPage>{chapter.replace(/-/g, " ")}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Chapter Title */}
      <div className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight">Dynamics</h1>
        <p className="text-neutral-600 text-lg leading-relaxed">
          This chapter introduces the fundamental ideas of forces and motion.
          You will learn how forces affect the motion of objects and how
          Newton’s laws describe these relationships. These concepts form the
          basis of many later topics in physics, including momentum, circular
          motion and gravitational fields.
        </p>
      </div>

      {/* Key Concepts */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Key Concepts</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Newton's Laws</CardTitle>
            </CardHeader>
            <CardContent className="text-neutral-600">
              Understand how forces relate to motion and how Newton’s three laws
              describe these relationships.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Resultant Forces</CardTitle>
            </CardHeader>
            <CardContent className="text-neutral-600">
              Learn how multiple forces combine to determine the acceleration of
              an object.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Friction and Drag</CardTitle>
            </CardHeader>
            <CardContent className="text-neutral-600">
              Explore resistive forces that oppose motion such as friction and
              air resistance.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Non‑uniform Motion</CardTitle>
            </CardHeader>
            <CardContent className="text-neutral-600">
              Study motion where acceleration is changing due to varying forces.
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Topics */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Topics in this Chapter</h2>

        <div className="grid gap-3">
          <Link href="#">
            <Button variant="outline" className="w-full justify-start">
              1. Newton’s Laws of Motion
            </Button>
          </Link>

          <Link href="#">
            <Button variant="outline" className="w-full justify-start">
              2. Resultant Forces
            </Button>
          </Link>

          <Link href="#">
            <Button variant="outline" className="w-full justify-start">
              3. Friction and Drag
            </Button>
          </Link>

          <Link href="#">
            <Button variant="outline" className="w-full justify-start">
              4. Non‑uniform Motion
            </Button>
          </Link>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Common Mistakes */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Common Mistakes</h2>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Confusing mass and weight</AccordionTrigger>
            <AccordionContent>
              Mass measures the amount of matter in an object while weight is
              the force exerted by gravity on that mass.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Ignoring direction of forces</AccordionTrigger>
            <AccordionContent>
              Forces are vectors. Always include both magnitude and direction
              when analyzing forces.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Forgetting resultant forces</AccordionTrigger>
            <AccordionContent>
              The acceleration of an object depends on the net force acting on
              it, not individual forces alone.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <Separator className="my-12" />

      {/* Exam Tips */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Exam Tips</h2>

        <Card>
          <CardContent className="pt-6 text-neutral-600 leading-relaxed">
            Always draw a clear free‑body diagram when solving force problems.
            Label each force and indicate directions clearly. This helps avoid
            sign mistakes and makes your reasoning easier to follow.
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      {/* Practice Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Practice</h2>

        <div className="flex flex-wrap gap-3">
          <Button>Practice MCQs</Button>
          <Button variant="secondary">Flashcards</Button>
          <Button variant="outline">Topic Questions</Button>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Chapter Summary */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Chapter Summary</h2>
        <p className="text-neutral-600 leading-relaxed">
          In this chapter you learned how forces influence motion. Newton’s laws
          provide the foundation for understanding how objects accelerate when
          forces act on them. You also explored friction, drag and other forces
          that oppose motion, as well as situations where forces vary and
          produce non‑uniform motion.
        </p>
      </section>
    </div>
  );
}
