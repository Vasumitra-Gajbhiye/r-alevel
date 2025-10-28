import Image from "next/image";
export default function Blog() {
  // Photo by <a href="https://unsplash.com/@thepaintedsquarejessica?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jessica Lewis 🦋 thepaintedsquare</a> on <a href="https://unsplash.com/photos/person-holding-white-printer-paper-8T-lK9FkzyI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

  return (
    <>
      <div className="flex flex-col my-16  justify-center items-center">
        <div className=" w-11/12 xs:w-5/6 md:w-3/5 lg:w-1/2 ">
          <div>
            {/* POST TITLE */}
            <h1 className="text-xl xxs:text-2xl md2:text-3xl font-bold">
              Tips for Tackling Difficult Exam Questions
            </h1>

            {/* POST AUTHOR AND DATE */}
            <div className="text-xs mt-3 ">
              <h6 className="text-gray-500">4 May 2024</h6>
              <h6 className="text-blue-500 mt-1">-Jake</h6>
            </div>
          </div>

          <div className="leading-7 tracking-wider text-lg font-normal">
            {/* INTRODUCTION SECTION */}
            <div className="flex flex-col gap-4  mb-12">
              {/* INTRO IMAGE */}
              <div
                className="overflow-hidden flex items-center mt-10 mb-5"
                style={{ maxHeight: "30rem" }}
              >
                <Image
                                  src="/blogs/66c09b3a885c6d954427fb3f/mainImg.jpg"
                                  alt="illustraion of a brain"
                                  height={1260}
                                  width={2240}
                                />
              </div>

              {/* INTRO PARAGRAPHS */}
              <h3>
                It’s inevitable that everyone will eventually face an exam
                question that completely stumps you, and although these
                questions might leave you questioning your knowledge on the
                subject, I can promise you that when following the correct
                strategies, you’ll be able to handle these daunting questions
                with confidence.{" "}
              </h3>
              <h3>
                Therefore, I leave with some tips that should help you put
                yourself back on track.
              </h3>
            </div>

            {/* POST PARAGRAPHS */}
            <div className="flex flex-col gap-4  mb-12">
              {/* SECTION TITLE */}
              <h2 className="text-xl xxs:text-2xl md2:text-3xl font-medium">
                1. Stay calm and composed
              </h2>
              {/* SECTION DATA */}
              <h3>
                It might seem completely obvious at first, but it’s highly
                common for people to panic when faced with a tough question.
              </h3>
              <h3>
                This panic may very well cloud your thinking, and hinder your
                ability to rationally solve a problem. When faced with such
                questions, I urge you to lean back, unclench your fists, lower
                your shoulders, and breath deeply.{" "}
              </h3>
              <h3>
                Close your eyes if you have to, just for a moment, and when
                you’ve returned to an open mind, confront the question once
                more. Through this, you may see the question from a difficult
                perspective and spark an idea that might help you solve it!
              </h3>
            </div>

            <div className="flex flex-col gap-4  mb-12">
              {/* SECTION TITLE */}
              <h2 className="text-xl xxs:text-2xl md2:text-3xl font-medium">
                2. Read, and reread the question CAREFULLY
              </h2>
              {/* SECTION DATA */}
              <h3>
                Too many times have I, and others, lost an intense number of
                marks, simply because I read the question wrong.{" "}
              </h3>
              <h3>
                {" "}
                This has led to a result of answering a completely separate
                question. Remember, ensure you’re answering the question that’s
                being asked, and not the question that you’d like to be asked.{" "}
              </h3>
              <h3>
                Make sure to take a moment, and read each question extremely
                question and ensure that you haven’t misinterpreted what’s being
                asked. Do this by looking through each word/number, along with
                keywords or phrases that associate to the question.{" "}
              </h3>
              <h3>
                {" "}
                Examples of this include words such as “explain”, “compare”,
                “calculate”, etc. These keywords at the start of questions might
                completely change what’s being asked, and will alter your
                response massively.{" "}
              </h3>
            </div>
            <div className="flex flex-col gap-4  mb-12">
              {/* SECTION TITLE */}
              <h2 className="text-xl xxs:text-2xl md2:text-3xl font-medium">
                3. Break down the question
              </h2>
              {/* SECTION DATA */}
              <h3>
                Sometimes, looking at a question as a whole can be worrisome and
                therefore difficult to communicate. It’s important to break a
                question down into manageable and less-worrying parts.{" "}
              </h3>
              <h3>
                {" "}
                Attempt to locate main components and what each part might
                actually require. Sometimes questions have different sections
                that interpret different ideas, in which case, tackle each one
                separately.{" "}
              </h3>
              <h3>
                {" "}
                Often times, breaking questions down bit by bit can help
                encourage logic and imaginative thinking, along with making a
                question seem far less overwhelming and more approachable.{" "}
              </h3>
            </div>
            <div className="flex flex-col gap-4  mb-12">
              {/* SECTION TITLE */}
              <h2 className="text-xl xxs:text-2xl md2:text-3xl font-medium">
                4. Plan your answer!
              </h2>
              {/* SECTION DATA */}
              <h3>
                I say this primarily for questions requiring long answers,
                however short answers are also included: Make sure to plan your
                response beforehand! Although your time is considerably limited
                in the exam, it’s important to plan what you’re going to write
                in a separate section of the page.{" "}
              </h3>
              <h3>
                You could quickly jot down notes in a bullet point format, or
                draw out a mind map if you deem it necessary. Doing so will help
                to organize your thoughts, and assist in structuring, promoting
                logic, and ensuring full coverage of all required points, which
                will allow you to develop a much higher quality answer.{" "}
              </h3>
            </div>
            <div className="flex flex-col gap-4  mb-12">
              {/* SECTION TITLE */}
              <h2 className="text-xl xxs:text-2xl md2:text-3xl font-medium">
                5. Process of Elimination
              </h2>
              {/* SECTION DATA */}
              <h3>
                Especially in multiple choice questions, but also in
                mathematical, scientific, or essay questions, the process of
                elimination can be vital towards pinpointing a correct answer,
                and eliminating the potential of incorrect ideas.{" "}
              </h3>
              <h3>
                {" "}
                When faced with difficult questions, you may start thinking of a
                wide variety of responses, that may or may not be correct. In
                often occasions, only one, or a few would be considered correct.{" "}
              </h3>
              <h3>
                Therefore, attempt to eliminate evidently incorrect answers.
                This can be done by pursuing part of an equation or response.{" "}
              </h3>
              <h3>
                This will help to rat out the incorrect answers, leaving you
                with a smaller selection that provides you the ability to make
                educated guesses, or even develop new ideas to assist in
                pinpointing a correct answer.{" "}
              </h3>
            </div>
            <div className="flex flex-col gap-4  mb-12">
              {/* SECTION TITLE */}
              <h2 className="text-xl xxs:text-2xl md2:text-3xl font-medium">
                6. Show your work
              </h2>
              {/* SECTION DATA */}
              <h3>
                Primarily in subjects like Math’s and Science, it’s extremely
                important to show your work.{" "}
              </h3>
              <h3>
                Not only do you often gain partial credit for showcasing a
                correct path, even if your final answer was incorrect, but it
                can also help you develop ideas for difficult questions.{" "}
              </h3>
              <h3>
                {" "}
                If you know where to start, and you begin developing your
                response, and you follow that by taking a step back and looking
                over the course of your working out, you may be surprised to see
                correlations that should help you in continuing that response
                and eventually identifying a correct answer. Doing this will
                also help you track your own thoughts, and catch any mistakes
                along with the way.{" "}
              </h3>
            </div>
            <div className="flex flex-col gap-4  mb-12">
              {/* SECTION TITLE */}
              <h2 className="text-xl xxs:text-2xl md2:text-3xl font-medium">
                7. Use relevant knowledge
              </h2>
              {/* SECTION DATA */}
              <h3>
                If a question appears unfamiliar, such as a topic you don’t
                think you’ve studied, then try to relate it to something you
                have studied.{" "}
              </h3>
              <h3>
                {" "}
                In some cases, aligning potentially relevant theories, formulas
                or concepts you are aware of, can help you identify similarities
                in the question you’re trying to answer. Doing so may help you
                single out a potential solution!
              </h3>
            </div>
            <div className="flex flex-col gap-4  mb-12">
              {/* SECTION TITLE */}
              <h2 className="text-xl xxs:text-2xl md2:text-3xl font-medium">
                8. Manage your time effectively
              </h2>
              {/* SECTION DATA */}
              <h3>
                Please, and I say this with experience, manage your time wisely
                at all costs. You’re provided a strict amount of time, which in
                some situations may not be enough.{" "}
              </h3>
              <h3>
                When faced with a difficult exam question, it might be wise to
                skip it to ensure you don’t waste any time that could be spent
                answering other questions and gaining more marks.{" "}
              </h3>
              <h3>
                If you end up with more time at the end of answering, you could
                return back to the question and utilize your remaining time on
                answering it then.{" "}
              </h3>
              <h3>
                {" "}
                You might also, due to you having answered other questions,
                think of new concepts that will assist you in figuring out an
                appropriate response.{" "}
              </h3>
              <h3>
                {" "}
                It’s extremely important to remain confident in prioritizing
                marks. Remember, you’re not answering questions for the sake of
                answering questions, you’re answering them for the sake of
                gaining marks.
              </h3>
            </div>
            <div className="flex flex-col gap-4  mb-12">
              {/* SECTION TITLE */}
              <h2 className="text-xl xxs:text-2xl md2:text-3xl font-medium">
                9. Answer EVERY question
              </h2>
              {/* SECTION DATA */}
              <h3>
                Unless you’re in an exam where you’re faced with penalties for
                incorrect answers, may sure you respond to each question. An
                educated guess is far better than leaving it blank.{" "}
              </h3>
              <h3>
                If you go through an entire exam, and skip a few questions, go
                back to them and guess if you have to. It’s highly possible that
                you’ll pick up a few marks, even if it’s for a partial or
                imperfect answer.
              </h3>
            </div>
            <div className="flex flex-col gap-4  mb-12">
              {/* SECTION TITLE */}
              <h2 className="text-xl xxs:text-2xl md2:text-3xl font-medium">
                10. Revise and review
              </h2>
              {/* SECTION DATA */}
              <h3>
                If you have enough time, and you’ve answered every question, do
                yourself a favor and review each answer.{" "}
              </h3>
              <h3>
                Attempt to seek mistakes or incomplete answers throughout your
                paper. It’s possible that by revisiting your work, you might
                gain a fresh perspective and identify errors or develop ideas to
                help you gain some more last-minute marks.
              </h3>
            </div>
            <div className="flex flex-col gap-4  mb-12">
              {/* SECTION TITLE */}
              <h2 className="text-xl xxs:text-2xl md2:text-3xl font-medium">
                Conclusion
              </h2>
              {/* SECTION DATA */}
              <h3>
                Battling difficult exam questions can be tricky, aggravating and
                stressful.{" "}
              </h3>
              <h3>
                {" "}
                But by remaining calm, thinking with an open mind, and applying
                strategic and educated thought, along with breaking down
                questions, planning responses, and managing your time
                effectively, you too can become a master examination taker.{" "}
              </h3>
              <h3>
                {" "}
                With this advice, I hope that your confident and your
                performance will be boosted.{" "}
              </h3>
              <h3>
                Every question will affect your mark, so answer it to the best
                of your ability. Strive for marks, any way how.
              </h3>
              <h3>Good luck!</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
