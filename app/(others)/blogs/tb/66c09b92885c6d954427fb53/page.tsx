export default function Blog() {
  return (
    <>
      <div className="flex flex-col my-16  justify-center items-center">
        <div className=" w-11/12 xs:w-5/6 md:w-3/5 lg:w-1/2 ">
          <div>
            {/* POST TITLE */}
            <h1 className="text-xl xxs:text-2xl md2:text-3xl font-bold">
              Mastering The Balance: School Work, Extracurricular Activities,
              And Social Life{" "}
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
                <img
                  src="/blogs/66c09b92885c6d954427fb53/mainImg.jpg"
                  alt="illustraion of a brain"
                />
              </div>

              {/* INTRO PARAGRAPHS */}
              <h3>
                Balancing schoolwork with extracurricular activities and a
                social life can be challenging, especially for A-level students.
                However, finding this balance is crucial for your well-being and
                success. Here&apos;s a guide to help you manage your time
                effectively and maintain a healthy equilibrium.
              </h3>
              <h3>
                We&apos;ve all been there. It&apos;s your first time doing
                higher education, and balancing schoolwork along with
                extracurricular activities and a genuine social life can be
                extremely challenging.{" "}
              </h3>
              <h3>
                {" "}
                However, finding this balance will be crucial for both your
                well-being and your success. Here&apos;s a guide that should
                hopefully help you to manage your time effectively and maintain
                a healthy state.
              </h3>
            </div>

            {/* POST PARAGRAPHS */}
            <div className="flex flex-col gap-4  mb-12">
              {/* SECTION TITLE */}
              <h2 className="text-xl xxs:text-2xl md2:text-3xl font-medium">
                1. Prioritize and Plan
              </h2>
              {/* SECTION DATA */}
              <h3>
                <strong>Set Clear Goals:</strong> At the start of each year, you
                should try to identify your academic, extracurricular and social
                goals. What grades will you be attempting to aim for? What
                universities do you want to get to? Which extracurricular
                activities are important? How much time do you want to be
                spending with your friends and your family?
              </h3>
              <h3>
                {" "}
                Always ensure to create clear goals which will help you to
                prioritize your tasks and allocate your time accordingly.
                Remember, your time is limited.
              </h3>
              <h3>
                <strong>Create a Schedule:</strong> There are many planning and
                digital calendar apps that are great to help map out your week
                schedule, study sessions, extracurricular activities, and your
                social events.{" "}
              </h3>
              <h3>
                Make sure to include some breaks and some downtown to ensure you
                avoid burnout. Personally, as writing this, I like to utilize a
                little notebook where I write down at the end of my day or my
                early morning everything that needs to be done for the day, and
                I tick stuff off as I get it done.
              </h3>
              <h3>
                <strong>Use Time Blocks:</strong> It&apos;s sometimes very
                valuable to divide your day into time blocks dedicated to
                specific tasks.{" "}
              </h3>
              <h3>
                For example, you should allocate a few hours in the evening for
                homework, a couple of hours in the afternoon for extracurricular
                activities and possibly weekends for socializing.{" "}
              </h3>
              <h3>
                Time blocking can help you to stay organized and ensure that
                you’ve dedicated enough time to each area
              </h3>
            </div>

            <div className="flex flex-col gap-4  mb-12">
              {/* SECTION TITLE */}
              <h2 className="text-xl xxs:text-2xl md2:text-3xl font-medium">
                2. Stay Organized
              </h2>
              {/* SECTION DATA */}
              <h3>
                <strong>Keep a To-Do List:</strong>
                As I said, you should maintain a daily or weekly To-Do List. You
                can list your tasks in order of priority and check them off as
                you complete them.
              </h3>
              <h3>
                {" "}
                This will keep you focused and ensure that you don&apos;t forget
                any important assignments or commitments.
              </h3>
              <h3>
                <strong>Organize Your Study Space:</strong> A clean and
                organized study space can really make a major impact on your
                focus and productivity.{" "}
              </h3>
              <h3>
                Always try to keep your study area free from distractions and
                stocked with necessary supplies.
              </h3>
              <h3>
                <strong>Use Technology:</strong> Use technology to your
                advantage. You should leverage apps and tools like Trello, To-Do
                List or Google Calendars to help you in staying organized as
                these tools can ultimately help you to track your assignments
                set.
              </h3>
            </div>

            <div className="flex flex-col gap-4  mb-12">
              {/* SECTION TITLE */}
              <h2 className="text-xl xxs:text-2xl md2:text-3xl font-medium">
                3. Be Realistic and Flexible
              </h2>
              {/* SECTION DATA */}
              <h3>
                <strong>Set Realistic Goals:</strong> Always try to be realistic
                about how much you can achieve in a day. If you overload your
                schedule, it can lead to stress, burnout, and disappointment in
                your productivity.{" "}
              </h3>
              <h3>
                Set achievable goals and adjust your plan if it&apos;s required.
              </h3>
              <h3>
                {" "}
                <strong>Learn to Say No:</strong> Remember that it&apos;s ok to
                say no to activities or events that don&apos;t necessarily align
                with your priorities or that you don&apos;t have time for.
                Always focus on what&apos;s important to you and your success.
              </h3>
              <h3>
                <strong>Be Flexible:</strong> Life can be unpredictable, and
                sometimes your plans might need to change. Be flexible and
                willing to adjust your schedule when unexpected events or
                opportunities arise. Life can be extremely unpredictable and
                sometimes your plans might need to change.
              </h3>
              <h3>
                {" "}
                Always ensure that your schedule is flexible for when unexpected
                events or opportunities arise.
              </h3>
            </div>

            <div className="flex flex-col gap-4  mb-12">
              {/* SECTION TITLE */}
              <h2 className="text-xl xxs:text-2xl md2:text-3xl font-medium">
                4. Maximize Productivity
              </h2>
              {/* SECTION DATA */}
              <h3>
                <strong>Find Your Peak Times:</strong> Identify the times of day
                when you&apos;re most productive and focused. Schedule your most
                important or challenging tasks during these peak times.
              </h3>
              <h3>
                Identify the times of day where you see yourself as the most
                productive and focused. Schedule your most important or
                challenging tasks during these peak times.{" "}
              </h3>
              <h3>
                Personally, from my view, I find my most productive times to be
                early in the morning and later at night. Therefore, I schedule
                essays to be done in the morning and those pesky tasks to be
                completed.
              </h3>
              <h3>
                {" "}
                I keep the rest of my day relatively flexible and open to
                smaller, more enjoyable tasks along with obvious classes,
                workouts, and socializing,
              </h3>
              <h3>
                <strong>Use Study Techniques:</strong> If you’re struggling, you
                should always try to employ effective study techniques such as
                the Pomodoro technique, which refers to 25 minutes of focus work
                followed by a 5-minute break. This will help you to maintain
                concentration and prevent burnout.
              </h3>
              <h3>
                <strong>Limit Distractions:</strong> Minimize distractions by
                turning off notifications, setting your phone to Do Not Disturb,
                or using apps like Forest to stay focused.
              </h3>
              <h3>
                That pesky phone might be tempting, but always ensure to
                minimize distractions.
              </h3>
              <h3>
                {" "}
                You can do this by turning off notifications, setting your phone
                to Do Not Disturb, enabling Downtime, or using apps such as
                Forest or Jomo to limit screen time.
              </h3>
            </div>

            <div className="flex flex-col gap-4  mb-12">
              {/* SECTION TITLE */}
              <h2 className="text-xl xxs:text-2xl md2:text-3xl font-medium">
                5. Maintain a Healthy Lifestyle
              </h2>
              {/* SECTION DATA */}
              <h3>
                <strong>Enough Sleep:</strong> I&apos;ve said it before and
                I&apos;ll say it again, aim for 7 to 9 hours of sleep every
                single night. Sleep is extremely essential for cognitive
                function, memory consolidation and your overall well-being.
              </h3>
              <h3>
                <strong>Eat Healthily:</strong> Ensure you fuel your body and
                your brain with a balanced diet that&apos;s rich with fruits,
                vegetables, whole grains and lean proteins.{" "}
              </h3>
              <h3>
                Attempt to avoid excessive caffeine and sugar (as tempting as it
                may be) which can ultimately lead to energy crashes.
              </h3>
              <h3>
                <strong>Exercise Regularly:</strong> Try to incorporate physical
                activity into your routine. Exercise can boost your mood or
                energy levels and your cognitive function, which will help you
                to stay focused and productive throughout your day.
              </h3>
            </div>

            <div className="flex flex-col gap-4  mb-12">
              {/* SECTION TITLE */}
              <h2 className="text-xl xxs:text-2xl md2:text-3xl font-medium">
                6. Make Time for Self-Care and Relaxation
              </h2>
              {/* SECTION DATA */}
              <h3>
                <strong>Schedule Downtime:</strong>
                Ensure you have time for relaxation and self-care in your
                schedule. Engage in activities that help you unwind, such as
                reading, meditation, or hobbies.
              </h3>
              <h3>
                Don&apos;t hesitate to schedule a moment for relaxation and
                self-care in your schedule. Engage in activities that help you
                unwind, such as reading, meditation, or your general hobbies.
              </h3>
              <h3>
                <strong> Socialize:</strong> Studying isn&apos;t everything.
                Ensure to maintain a healthy social life by spending time with
                your friends and family. Social interactions can reduce stress
                and provide you with emotional support.
              </h3>
              <h3>
                <strong>Seek Balance:</strong> Remember that balance is key.
                Don&apos;t neglect your social life or extracurricular
                activities in favor of academics. A well-rounded life
                contributes to your overall happiness and success.
              </h3>
              <h3>
                Remember that balance is key. Never neglect your social life or
                your extracurricular activities in favor of academics. A
                well-rounded life can contribute to your overall happiness and
                your success. Remember that success is key, but happiness is
                success.
              </h3>
            </div>

            <div className="flex flex-col gap-4  mb-12">
              {/* SECTION TITLE */}
              <h2 className="text-xl xxs:text-2xl md2:text-3xl font-medium">
                Conclusion
              </h2>
              {/* SECTION DATA */}
              <h3>
                The reality is balancing schoolwork with extracurricular
                activities and a social life can require careful planning,
                organization, and a lot of flexibility.{" "}
              </h3>
              <h3>
                {" "}
                If you&apos;re able to set clear goals, stay organized, be
                realistic, maximize your productivity, maintain a healthy
                lifestyle all whilst making time for self-care, I promise you
                that you&apos;ll be able to achieve an enjoyment throughout your
                studies. Remember that it&apos;s all about finding what works
                best for you and adjusting when needed.{" "}
              </h3>
              <h3>
                With the right strategies, you&apos;ll be able to excel
                academically while still enjoying your extracurricular pursuits
                and your social life.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
