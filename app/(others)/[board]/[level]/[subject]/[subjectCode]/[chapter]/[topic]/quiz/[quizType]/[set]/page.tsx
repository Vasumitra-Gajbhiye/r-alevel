import McqQuiz, { QuizKind } from "@/components/quiz/McqQuiz";
import { FINAL_TEST, type MCQ } from "@/lib/quiz/waves-content";
type Params = {
  quizType: string;
  set: string;
};

export default async function QuizSet({ params }: { params: Promise<Params> }) {
  const { quizType, set } = await params;
  const timerEnabled = false;
  const livesEnabled = false;
  console.log(quizType, set);
  let questions: MCQ[] = FINAL_TEST;

  return (
    <main className="mx-auto max-w-5xl px-5 py-8 md:py-12">
      {/* <header className="border-b border-slate-200 pb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          A Level Physics • Waves
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink md:text-5xl">
          MCQ Practice
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
          {timerEnabled ? "Timer on" : "Timer off"} •{" "}
          {livesEnabled ? "Lives on" : "Lives off"}
        </p>
      </header> */}

      <McqQuiz
        title={"A Level Physics • Waves • MCQ • Set 1"}
        quizKind={"topic" as QuizKind}
        questions={questions}
        timerEnabled={timerEnabled}
        immediateFeedback={livesEnabled}
      />
    </main>
  );
}
