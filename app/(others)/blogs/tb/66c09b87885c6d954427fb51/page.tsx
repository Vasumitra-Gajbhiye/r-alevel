export default function Blog() {
  return (
    <>
      <div className="flex flex-col my-16  justify-center items-center">
        <div className=" w-11/12 xs:w-5/6 md:w-3/5 lg:w-1/2 ">
          <div>
            {/* POST TITLE */}
            <h1 className="text-xl xxs:text-2xl md2:text-3xl font-bold">
              The Importance Of Sleep, Nutrition, And Exercise For Academic
              Performance
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
                  src="/blogs/66c09b87885c6d954427fb51/mainImg.jpg"
                  alt="illustraion of a brain"
                />
              </div>

              {/* INTRO PARAGRAPHS */}
              <h3>
                Remember this, studies second, health first. Achieving academic
                success isn&apos;t simply about studying hard.{" "}
              </h3>
              <h3>
                It&apos;s also about taking care of your body and your mind.
                Sleep, nutrition, and exercise all play crucial roles in
                enhancing your cognitive function and improving your memory,
                along with boosting your overall performance.
              </h3>
              <h3>
                {" "}
                Therefore, take this guide. And understand why these factors are
                essential for your academic journey and how you can optimize
                them for better results.
              </h3>
            </div>

            {/* POST PARAGRAPHS */}
            <div className="flex flex-col gap-5  mb-12">
              {/* SECTION TITLE */}
              <h2 className="text-xl xxs:text-2xl md2:text-3xl font-medium">
                1. The Power of Sleep
              </h2>
              {/* SECTION DATA */}
              <h3>
                <strong>Why Sleep Matters: </strong>
                Have you ever not liked going to sleep, but once you inevitably
                fall asleep, you don&apos;t want to wake up because you just
                enjoy the sleep and you&apos;re in so much comfort?
              </h3>
              <h3>
                {" "}
                It&apos;s something we all feel. Sleep is vital for brain
                function. WhilstIt processes information and overall heals and
                rejuvenates itself. You should seriously try to be getting
                enough sleep every day.
              </h3>
              <h3>
                {" "}
                A lack of sleep can create difficulty in concentration. It can
                reduce problem solving abilities and can overall decreased
                cognitive function.
              </h3>
              <h3>
                <strong>Benefits of Adequate Sleep: </strong>
              </h3>
              <ul className="list-disc flex flex-col gap-2 pl-8 ">
                <li>
                  <span className="underline">Memory Consolidation</span>: Sleep
                  can help to solidify new information in your memory, making it
                  easier to recall facts during exams. Always try to revise a
                  bit before you sleep so that this method functions well.
                </li>
                <li>
                  <span className="underline">Improved Focus</span>: A good
                  night&apos;s sleep can improve attention and concentration,
                  allowing you to study more effectively, focus on class, and be
                  more attentive and alert to your surroundings.
                </li>

                <li>
                  <span className="underline">Mood Regulation</span>: Adequate
                  sleep helps regulate your mood, reducing stress and anxiety,
                  which can affect academic performance. No more groggy and
                  drowsy mornings!
                </li>
              </ul>

              <h3>
                <strong>Tips for Better Sleep: </strong>
              </h3>
              <ul className="list-disc flex flex-col gap-2 pl-8">
                <li>
                  <span className="underline">Establish a Routine</span>: Go to
                  bed and wake up at the same time every day, even on weekends.
                  Writing this, I&apos;m personally but more productive early in
                  the morning and late at night, which causes some struggle in
                  scheduling. However, I tend to schedule sleep at 10Pm, with a
                  wakeup up at 5:30Am.
                </li>
                <li>
                  <span className="underline">
                    Create a Sleep-Friendly Environment
                  </span>
                  : Ensure your bedroom is dark, quiet, and cool. Use
                  comfortable pillows, grab some stuffed animals, and enjoy some
                  well-deserved rest.
                </li>
                <li>
                  <span className="underline">Limit Screen Time</span>: Avoid
                  screens (phones, tablets, computers) at least 30 minutes
                  before bed. The blue light from screens can interfere with
                  your sleep cycle, and possibly even lead you to another brain
                  rot session on TikTok.
                </li>
                <li>
                  <span className="underline">Relax Before Bed</span>: Engage in
                  calming activities like reading, meditation, or taking a warm
                  bath/shower. Peace of mind if vital to sleep as it regulates
                  your thinking and calms yourself.
                </li>
              </ul>
            </div>

            {/* POST PARAGRAPHS */}
            <div className="flex flex-col gap-5  mb-12">
              {/* SECTION TITLE */}
              <h2 className="text-xl xxs:text-2xl md2:text-3xl font-medium">
                2. Nutrition for the Brain
              </h2>
              {/* SECTION DATA */}
              <h3>
                <strong>Why Nutrition Matters: </strong>
                Your brain quite literally requires a constant supply of
                nutrients to genuinely to function. Therefore, balanced diet can
                help to support cognitive process your energy levels and your
                overall health which again are crucial for academic success.
              </h3>
              <h3>
                <strong>Benefits of Proper Nutrition: </strong>
              </h3>
              <ul className="list-disc flex flex-col gap-1 pl-8">
                <li>
                  <span className="underline">Enhanced Cognitive Function</span>
                  : Nutrient-rich foods can support brain function, improving
                  memory, focus, and problem-solving skills – therefore limit
                  the pesky unhealthy snacks, and aim for more beneficial foods.
                </li>
                <li>
                  <span className="underline">Stable Energy Levels</span>:
                  Balanced meals provide sustained energy, preventing the
                  fatigue and concentration dips associated with poor eating
                  habits. You can compare this by eating a healthy diet and then
                  going on a jog, and then comparing it to eating unhealthy
                  snacks before jogging. The same concept works for focus
                  levels.
                </li>
                <li>
                  <span className="underline">Better Mood</span>: Let&apos;s be
                  a bit scientific. Certain nutrients influence
                  neurotransmitters that regulate mood, helping you stay
                  positive and motivated. This factor overall leads to a
                  brighter spirit when waking up, and your overall wellbeing
                  will thank you for it.
                </li>
              </ul>
              <h3>
                <strong>Key Nutrients for Academic Performance: </strong>{" "}
                (Brought to you by: Google…)
              </h3>
              <ul className="list-disc flex flex-col gap-1 pl-8">
                <li>
                  <span className="underline">Omega-3 Fatty Acids:</span> Found
                  in fish, flaxseeds, and walnuts, these fats support brain
                  health and cognitive function.
                </li>
                <li>
                  <span className="underline">Antioxidants:</span> Fruits and
                  vegetables rich in antioxidants (like berries, spinach, and
                  kale) protect brain cells from damage and improve mental
                  clarity.
                </li>
                <li>
                  <span className="underline">Complex Carbohydrates:</span>{" "}
                  Whole grains, legumes, and vegetables provide a steady supply
                  of glucose, the brain&apos;s primary energy source.
                </li>
                <li>
                  <span className="underline">Protein:</span> Lean meats, eggs,
                  dairy, and plant-based proteins support neurotransmitter
                  production and brain function.
                </li>
              </ul>
              <h3>
                <strong>Tips for Better Nutrition: </strong>
              </h3>
              <ul className="list-disc flex flex-col gap-1 pl-8">
                <li>
                  <span className="underline">Eat Regularly:</span> Avoid
                  skipping meals, especially breakfast. Regular meals help
                  maintain energy levels and concentration. Breakfast is quite
                  literally what gets you started for the day, so I repeat,
                  DON&apos;T skip breakfast.
                </li>
                <li>
                  <span className="underline">Choose Whole Foods:</span> Opt for
                  whole, minimally processed foods over sugary snacks and fast
                  food. Grab some fruits, possibly some oats, and discard the
                  fast-food and minimart snacks.
                </li>
                <li>
                  <span className="underline">Stay Hydrated:</span> Drink plenty
                  of water throughout the day to keep your body hydrated and
                  brain functioning to its maximum capability.
                </li>
              </ul>
            </div>

            {/* POST PARAGRAPHS */}
            <div className="flex flex-col gap-5  mb-12">
              {/* SECTION TITLE */}
              <h2 className="text-xl xxs:text-2xl md2:text-3xl font-medium">
                3. Exercise for the Mind and Body
              </h2>
              {/* SECTION DATA */}
              <h3>
                <strong>Why Exercise Matters: </strong>
                Physical activity isn&apos;t just good for your body; it&apos;s
                also beneficial for your brain. Regular exercise improves
                cognitive function, boosts mood, and enhances overall
                well-being.
              </h3>
              <h3>
                Physical activity isn&apos;t just simply good for your body,
                it&apos;s also beneficial for your brain. Conducting regular
                exercise can help to improve cognitive function, boost your
                mood, and enhance your overall well-being.{" "}
              </h3>
              <h3>
                {" "}
                If physical activity contradicts with your schedules, I advise
                for you to work out right after school, right before school, or
                during recess. Sports can also be considered a form of physical
                activity.
              </h3>
              <h3>
                <strong>Benefits of Regular Exercise: </strong>
              </h3>
              <ul className="list-disc flex flex-col gap-1 pl-8">
                <li>
                  <span className="underline"> Increased Brain Function</span>:
                  Exercise can promote the growth of new brain cells, overall
                  enhancing your learning and memory.
                </li>
                <li>
                  <span className="underline">Reduced Stress</span>: Physical
                  activity reduces levels of stress hormones and triggers the
                  release of endorphins, which can improve mood and reduce
                  anxiety.
                </li>
                <li>
                  <span className="underline">Improved Sleep</span>: Regular
                  exercise helps regulate your sleep patterns, leading to better
                  quality sleep. You&apos;ve never experienced true sleep until
                  you experience post-workout sleep – it&apos;s the best.
                </li>
                <li>
                  <span className="underline">Aerobic Exercise</span>:
                  Activities like running, cycling, and swimming increase your
                  heart rate and blood flow to the brain.
                </li>
                <li>
                  <span className="underline">Strength Training</span>: Lifting
                  weights or bodyweight exercises improve muscle strength and
                  endurance.
                </li>
                <li>
                  <span className="underline"> Mind-Body Exercises </span>:
                  Practices like yoga and tai chi combine physical activity with
                  mindfulness, reducing stress and enhancing focus.
                </li>
              </ul>
              <h3>
                <strong>Tips for Incorporating Exercise: </strong>
              </h3>
              <ul className="list-disc flex flex-col gap-1 pl-8">
                <li>
                  <span className="underline">Set a Routine</span>: Aim for at
                  least 30 minutes minimum of moderate exercise most days of the
                  week.
                </li>
                <li>
                  <span className="underline">Find Activities You Enjoy</span>:
                  Choose exercises that you find fun and engaging to stay
                  motivated. Remember the reason and the result, this will keep
                  you motivated.
                </li>
                <li>
                  <span className="underline">Take Active Breaks</span>:
                  Incorporate short bursts of physical activity into your study
                  sessions to boost energy and concentration.
                </li>
              </ul>
            </div>

            {/* POST PARAGRAPHS */}
            <div className="flex flex-col gap-5  mb-12">
              {/* SECTION TITLE */}
              <h2 className="text-xl xxs:text-2xl md2:text-3xl font-medium">
                Conclusion
              </h2>
              {/* SECTION DATA */}
              <h3>
                In conclusion, sleep, nutrition, and exercise are fundamental
                pillars of academic success.{" "}
              </h3>
              <h3>
                If you&apos;re able to prioritize adequate sleep, maintain a
                balanced diet and engage in regular physical activity, you can
                enhance your cognitive function, improve your mood, and achieve
                better academic performance overall.
              </h3>
              <h3>
                {" "}
                Please remember to take care of your body and mind as it&apos;s
                just as important as hitting the books. Stay healthy and stay
                active. Remember, studies second, health first.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
