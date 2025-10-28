import Image from "next/image";
export default function Blog() {
  return (
    <>
      <div className="flex flex-col my-16  justify-center items-center">
        <div className=" w-11/12 xs:w-5/6 md:w-3/5 lg:w-1/2 ">
          <div>
            {/* POST TITLE */}
            <h1 className="text-xl xxs:text-2xl md2:text-3xl font-bold">
              Masterin Focus: How to stay focused and avoid procrastination
            </h1>

            {/* POST AUTHOR AND DATE */}
            <div className="text-xs mt-3 ">
              <h6 className="text-gray-500">4 May 2024</h6>
              <h6 className="text-blue-500 mt-1">-Jake</h6>
            </div>
          </div>

          <div className="leading-7 tracking-wider text-lg">
            {/* INTRODUCTION SECTION */}
            <div className="flex flex-col gap-4  mb-12">
              {/* INTRO IMAGE */}
              <div
                className="overflow-hidden flex items-center mt-10 mb-5"
                style={{ maxHeight: "30rem" }}
              >
                 <Image
                                  src="/blogs/66c09b9d885c6d954427fb55/mainImg.jpg"
                                  alt="illustraion of a brain"
                                  height={1260}
                                  width={2240}
                                />
              </div>

              {/* INTRO PARAGRAPHS */}
              <h3>
                With a major increase in workload for A level students,
                it&apos;s very difficult to stay focused and avoid
                procrastination. Here is how you&apos;ll be able to prioritize,
                focus and ensure productivity allowing you to stay on track of
                your studies.
              </h3>
            </div>

            {/* POST PARAGRAPHS */}
            <div className="flex flex-col gap-4  mb-12">
              {/* SECTION TITLE */}
              <h2 className="text-xl xxs:text-2xl md2:text-3xl font-medium">
                1. Understand procrastination
              </h2>
              {/* SECTION DATA */}
              <h3>
                <strong>Identify the causes: </strong>
                Procrastination often is caused from fears of failure
                perfectionism or just genuinely feeling overwhelmed if
                you&apos;re able to identify the root cause then it should
                hopefully be able to let you address the issue more effectively.
              </h3>
              <h3>
                <strong>Acknowledge the consequences: </strong>
                Understand the negative impact procrastination has on your
                academic performance, stress levels, and overall well-being.
                Recognizing these consequences can motivate you to change your
                habits.
              </h3>
              <h3>
                Always try to see and understand the negative impact that
                procrastination has on your academic performance, your stress
                levels and your overall well-being. If you can recognize these
                consequences, they should motivate you to change your habits.
              </h3>
            </div>

            {/* POST PARAGRAPHS */}
            <div className="flex flex-col gap-4  mb-12">
              {/* SECTION TITLE */}
              <h2 className="text-xl xxs:text-2xl md2:text-3xl font-medium">
                2.Set clear goals
              </h2>
              {/* SECTION DATA */}
              <h3>
                <strong>Define your objectives: </strong>
                If you&apos;re struggling to achieve your objectives, then
                perhaps SMART goals might be helpful. This stands for Specific,
                Measurable, Achievable, Relevant, and Time Bound. Clear
                objectives can help to provide direction and make it easier to
                stay focused.
              </h3>
              <h3>
                <strong>Break it down: </strong>
                When tasks seem too large to handle, try to divide these large
                tasks down into smaller, more manageable steps. This may make
                tasks seem less daunting and can also help you make consistent
                progress.
              </h3>
            </div>

            {/* POST PARAGRAPHS */}
            <div className="flex flex-col gap-4  mb-12">
              {/* SECTION TITLE */}
              <h2 className="text-xl xxs:text-2xl md2:text-3xl font-medium">
                3.Create a productive environment
              </h2>
              {/* SECTION DATA */}
              <h3>
                <strong>Minimize distractions: </strong>
                Identify and eliminate distractions in your study environment.
                Turn off notifications, use website blockers, and create a
                quiet, clutter-free workspace.
              </h3>
              <h3>
                Always try to identify and eliminate potential distractions that
                might be in your study environment. You could try to turn off
                notifications, use website blockers, or create a quiet and
                clutter free workspace.{" "}
              </h3>
              <h3>
                One thing that works for me is if you go to settings on your
                phone, go to screentime and then go to downtime, you can enable
                for your apps to be unusable except for the important ones.{" "}
              </h3>
              <h3>
                Another thing that worked for me is to download an app called
                Jomo. This app helps you to restrict your time and utilize your
                phone for more important things.
              </h3>
              <h3>
                <strong>Use the right tools: </strong>
                Invest in tools that enhance your productivity, such as a
                comfortable chair, good lighting, and necessary stationery or
                digital tools.
              </h3>
              <h3>
                You should always try to invest in tools that enhance your
                productivity. This might include a comfortable chair, some good
                lighting, and necessary stationary or devices
              </h3>
            </div>

            {/* POST PARAGRAPHS */}
            <div className="flex flex-col gap-4  mb-12">
              {/* SECTION TITLE */}
              <h2 className="text-xl xxs:text-2xl md2:text-3xl font-medium">
                4.Develop a routine
              </h2>
              {/* SECTION DATA */}
              <h3>
                <strong>Establish a study schedule: </strong>
                Use an app that can help you to develop a consistent study
                routine. You should allocate specific times for studying, breaks
                and relaxation. By utilizing consistency, this can help you
                build the habits make it basically easier to stay focused.
              </h3>
              <h3>
                <strong>Prioritize tasks: </strong>
                Ensure that priority is key. You can use A to do list to
                prioritize tasks based on their importance and their deadlines.
                Tackle high priority tasks first to ensure that you stay on top
                of your workload.{" "}
              </h3>
              <h3>
                I personally like to use a book where I list all the things I
                must do in order of priority and tick them off as I go
                throughout the day.
              </h3>
            </div>

            {/* POST PARAGRAPHS */}
            <div className="flex flex-col gap-4  mb-12">
              {/* SECTION TITLE */}
              <h2 className="text-xl xxs:text-2xl md2:text-3xl font-medium">
                5.Use effective time management techniques
              </h2>
              {/* SECTION DATA */}
              <h3>
                <strong>The Pomodoro technique: </strong>
                There are many focus techniques that are beneficial, one of
                which I prioritize is the Pomodoro technique. You can find this
                technique in the r/alevel discord, and it basically allows you
                to utilize 25-minute study and five-minute break intervals or
                50-minute study and 10-minute break intervals.
              </h3>
              <h3>
                {" "}
                This technique can help you to maintain high levels of focused
                and often prevents burnouts. On top of this, there&apos;s a
                leaderboard that you can utilize to create a form of competition
                which might also help you remain focused.
              </h3>
              <h3>
                <strong>Time Blocking: </strong>
                You could also try to divide your day into blocks of time
                dedicated to a specific task or a specific activity. This can
                help you to allocate equal amounts of time per day to each task,
                which can help you stay organized.
              </h3>
            </div>

            {/* POST PARAGRAPHS */}
            <div className="flex flex-col gap-4  mb-12">
              {/* SECTION TITLE */}
              <h2 className="text-xl xxs:text-2xl md2:text-3xl font-medium">
                6.Stay motivated
              </h2>
              {/* SECTION DATA */}
              <h3>
                <strong>Find your why: </strong>
                You should also attempt to identify your primary motivation for
                studying. Whether it&apos;s achieving good grades, getting into
                a dream university, or pursuing a career goal, keeping your
                goals in mind can help you to boost motivation.
              </h3>
              <h3>
                <strong>Reward yourself: </strong>
                It&apos;s never a crime to reward yourself for completing tasks.
                Rewards can be small, like taking a break or enjoying a tree, or
                something larger, like watching a movie or spending time with
                friends. Do what you deem enjoyable and in exchange, you get
                work done.
              </h3>
            </div>

            {/* POST PARAGRAPHS */}
            <div className="flex flex-col gap-4  mb-12">
              {/* SECTION TITLE */}
              <h2 className="text-xl xxs:text-2xl md2:text-3xl font-medium">
                7.Develop healthy habits
              </h2>
              {/* SECTION DATA */}
              <h3>
                <strong>Get enough sleep: </strong>
                Ensuring you get enough sleep is extremely crucial towards
                maintaining focus and general cognitive function. Always try to
                aim to achieve 7 to 9 hours of sleep each night to remain alert
                and productive throughout the day.
              </h3>
              <h3>
                <strong>Exercise regularly: </strong>
                One key way to remain focused is to engage in physical activity.
                Physical activity helps to boost brain function, reduce stress,
                and improves your mood. Try to incorporate regular exercise into
                your routine to overall enhance your focus.
              </h3>
              <h3>
                <strong>Eat healthily: </strong>
                Always try to eat healthy. You can fuel your brain with a
                balanced diet rich in fruits, vegetables, whole grains and lean
                proteins. Try to avoid excessive caffeine or sugary snacks,
                which can lead to energy crashes.
              </h3>
            </div>

            {/* POST PARAGRAPHS */}
            <div className="flex flex-col gap-4  mb-12">
              {/* SECTION TITLE */}
              <h2 className="text-xl xxs:text-2xl md2:text-3xl font-medium">
                8. Seek support
              </h2>
              {/* SECTION DATA */}
              <h3>
                <strong>Study groups: </strong>
                It&apos;s never a bad thing to seek support. Try to join or form
                a study group with classmates. Collaborative learning can help
                to enhance your understanding, provide motivation, develop new
                perspectives, and keep you productive.
              </h3>
              <h3>
                <strong>Talk to teachers: </strong>
                If you&apos;re ever struggling with a particular subject or
                task, never hesitate to seek help from teachers. They&apos;re
                there to provide support, guidance, and resources.
              </h3>
              <h3>
                <strong>Use resources: </strong>
                Ensure to take advantage of any available resources such as
                online tutorial tutorials, textbooks or educational apps. You
                can find a lot of these online, or through teachers. These can
                provide additional support and help to clarify complex concepts,
                which in turn keeps you motivated.
              </h3>
            </div>

            {/* POST PARAGRAPHS */}
            <div className="flex flex-col gap-4  mb-12">
              {/* SECTION TITLE */}
              <h2 className="text-xl xxs:text-2xl md2:text-3xl font-medium">
                Conclusion
              </h2>
              {/* SECTION DATA */}
              <h3>
                Staying focused and avoiding procrastination often requires a
                combination of extremely effective strategies, self-discipline,
                and healthy habits.
              </h3>
              <h3>
                {" "}
                If you&apos;re able to set clear goals and create a productive
                environment along with developing a routine, using time
                management techniques, and seeking support, you&apos;ll be able
                to remain motivated and overcome potential procrastination,
                overall enhancing your academic performance.{" "}
              </h3>
              <h3>
                Remember that the key is consistency, so find out what works
                best for you. Stay committed to your goals, and you&apos;ll
                hopefully see positive results in your studies.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
