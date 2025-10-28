import Image from "next/image";
export default function Blog() {
  return (
    <>
      <div className="flex flex-col my-16  justify-center items-center">
        <div className=" w-11/12 xs:w-5/6 md:w-3/5 lg:w-1/2 ">
          <div>
            {/* POST TITLE */}
            <h1 className="text-xl xxs:text-2xl md2:text-3xl font-bold">
              Choosing Extracurricular Activities That Compliment Your Studies
            </h1>

            {/* POST AUTHOR AND DATE */}
            <div className="text-xs mt-3 ">
              <h6 className="text-gray-500">4 May 2024</h6>
              <h6 className="text-blue-500 mt-1">-Vasumitra Gajbhiye</h6>
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
                  src="/blogs/66c5d55db6fe1c382e55eb73/mainImg.jpg"
                  alt="illustraion of a brain"
                  height={1260}
                  width={2240}
                />
              </div>

              {/* INTRO PARAGRAPHS */}
              <h3>
                Extracurricular activities can play a significant role in your
                A-level experience, offering valuable skills, experiences, and
                insights that complement your academic pursuits.
              </h3>
              <h3>
                {" "}
                Selecting activities that align with your studies can enhance
                your personal growth, strengthen your university applications,
                and make your academic journey more fulfilling. Here’s how to
                choose extracurriculars that effectively complement your
                studies.
              </h3>
              <h3>
                Extracurricular activities play a vital role in your academic
                experience. They offer valuable skills, experiences, and major
                insight that might even compliment your academic pursuits.
              </h3>
              <h3>
                Hopefully by selecting activities that align with your studies
                and career goals, you’ll be able to strengthen your personal
                growth, your university applications, and make your journey more
                fulfilling.{" "}
              </h3>
              <h3>
                Here, I’ll provide you with insight on how to choose
                extracurriculars that effectively complement your studies.
              </h3>
            </div>

            {/* POST PARAGRAPHS */}
            <div className="flex flex-col gap-4  mb-12">
              {/* SECTION TITLE */}
              <h2 className="text-xl xxs:text-2xl md2:text-3xl font-medium">
                1. Identify your academic interests and goals
              </h2>
              {/* SECTION DATA */}
              <h3>
                Attempt to reflect on the subjects you are currently studying,
                along with the areas of interests surrounding them. For example,
                if you’re studying Science, then activities like science clubs
                or research projects may be more ideal as they might deepen your
                understanding and passion for that specific subject.
              </h3>
              <h3>
                <strong>Career aspirations:</strong> Try to take a moment and
                think about your long-term goals. How might extracurricular
                activities support you in getting there.{" "}
              </h3>
              <h3>
                For example, if you aspire to work in a business, then
                participate in a business club or a debate society!{" "}
              </h3>
              <h3>
                <strong>University requirements:</strong> It&apos;s highly
                important to research the requirements of a university.
                It&apos;s common that universities will require a series of
                extracurricular activities that demonstrate relevant skills that
                relate to the course that you&apos;re intending to study.
              </h3>
            </div>
            {/* POST PARAGRAPHS */}
            <div className="flex flex-col gap-4  mb-12">
              {/* SECTION TITLE */}
              <h2 className="text-xl xxs:text-2xl md2:text-3xl font-medium">
                2. Choose activities that develop relevant skills
              </h2>
              {/* SECTION DATA */}
              <h3>
                <strong>Leadership and teamwork:</strong> You should try to
                engage in activities that help to build leadership and teamwork
                skills.{" "}
              </h3>
              <h3>
                For example, roles such as president of a club, a team captain
                or being a project, leader can help you to develop these
                attributes that will help you throughout your studies
              </h3>
              <h3>
                <strong>Communication Skills:</strong> Communication skills are
                also extremely vital.
              </h3>
              <h3>
                {" "}
                You should try to consider activities that enhance your
                communicational abilities, such as drama clubs, debate teams or
                student journalism. Strong communication skills are vital to
                almost every field of study and profession.
              </h3>
              <h3>
                <strong>Problem-solving and creativity:</strong> One thing that
                people lose as they grow up is their ability to solve problems
                and be creative.
              </h3>
              <h3>
                You should attempt to participate in activities that also foster
                problem solving and creativity, such as coding clubs,
                engineering projects or art classes.{" "}
              </h3>
              <h3>
                These skills are also transferable and can even enhance your
                academic work and future career prospects.
              </h3>
            </div>
            {/* POST PARAGRAPHS */}
            <div className="flex flex-col gap-4  mb-12">
              {/* SECTION TITLE */}
              <h2 className="text-xl xxs:text-2xl md2:text-3xl font-medium">
                3. Balance depth and breadth
              </h2>
              {/* SECTION DATA */}
              <h3>
                <strong>Depth in a key area:</strong> Try to ensure that
                you&apos;re focusing your extracurricular activities on things
                that align closely with your academic interests or career goals.{" "}
              </h3>
              <h3>
                Deep involvement in these sorts of areas can demonstrate to both
                employers and universities your commitment along with more a
                larger showcases of experience and achievements.
              </h3>
              <h3>
                <strong>Breadth for variety:</strong> Include a range of
                activities to show versatility and a well-rounded character.{" "}
              </h3>
              <h3>
                While depth is important, having a variety of experiences can
                highlight your adaptability and diverse skills. Try to show a
                range of activities that showcase versatility and a well-rounded
                character.{" "}
              </h3>
              <h3>
                Whilst depth is important, having a variety of experiences can
                also help to highlight your capability to adapt along with your
                diverse skill set. Try to identify a middle-point between the
                two.
              </h3>
            </div>
            {/* POST PARAGRAPHS */}
            <div className="flex flex-col gap-4  mb-12">
              {/* SECTION TITLE */}
              <h2 className="text-xl xxs:text-2xl md2:text-3xl font-medium">
                4. Evaluate the impact on your time management:
              </h2>
              {/* SECTION DATA */}
              <h3>
                <strong>Assess your schedule:</strong> Always ensure not to
                overwork yourself.
              </h3>
              <h3>
                You should consider how much time you can realistically dedicate
                to extracurricular activities without compromising your academic
                performance. Remember, balance is key, so don&apos;t overcommit
                yourself.
              </h3>
              <h3>
                <strong>Quality over quantity:</strong> It&apos;s often better
                to be deeply involved in a few activities rather than to spread
                yourself thinly across many activities.
              </h3>
              <h3>
                {" "}
                Quality participation can help to provide meaningful
                contribution and experiences
              </h3>
            </div>
            {/* POST PARAGRAPHS */}
            <div className="flex flex-col gap-4  mb-12">
              {/* SECTION TITLE */}
              <h2 className="text-xl xxs:text-2xl md2:text-3xl font-medium">
                5. Seek opportunities for personal growth
              </h2>
              {/* SECTION DATA */}
              <h3>
                <strong>Explore new interests:</strong> Never be afraid to
                explore activities that are outside of your usual interests.
              </h3>
              <h3>
                {" "}
                It&apos;s very often that these new experiences can lead to
                unexpected passion or skills that can even compliment your
                studies. The worst-case scenario is you dont&apos;t like it, and
                you drop the activity, but at least you know you tried it.
              </h3>
              <h3>
                <strong>Challenge yourself:</strong> Much like exploring your
                interests, try to choose activities that push you outside of
                your comfort zone and challenge your current abilities.{" "}
              </h3>
              <h3>
                Growth often comes from stepping beyond your usual boundaries.
                An example of this is when yout&apos;re playing a sport.
              </h3>
              <h3>
                Yout&apos;ll never get better playing against people that are
                the same skill level. You will always get better playing against
                people who are far better than you.
              </h3>
            </div>
            {/* POST PARAGRAPHS */}
            <div className="flex flex-col gap-4  mb-12">
              {/* SECTION TITLE */}
              <h2 className="text-xl xxs:text-2xl md2:text-3xl font-medium">
                6. Get involved and make an impact
              </h2>
              {/* SECTION DATA */}
              <h3>
                <strong>Volunteer and intern:</strong> Always ensure to look for
                any volunteering and internship opportunity that relates to your
                current field of interest.{" "}
              </h3>
              <h3>
                Participating in practical experience within a real-world
                setting is always valuable and can always help provide a deeper
                understanding of your chosen field.
              </h3>
              <h3>
                <strong>Join clubs and societies:</strong> As said,
                participating in clubs or societies related to your academic
                subjects or your potential future career can help to lead you
                towards leadership opportunities, potential networking and
                enhance your knowledge within your area of interest.{" "}
              </h3>
              <h3>
                Although it might seem daunting at first, I promise you in the
                long run you will appreciate yourself for joining these clubs
                and societies, as you will make friends, and you will people
                throughout the journey.
              </h3>
              <h3>
                <strong>Contribute to projects:</strong> For whichever projects
                or competitions that are occurring, try to engage in them, as
                long as they&apos;re relevant to your studies or interests.{" "}
              </h3>
              <h3>
                Whether it&apos;s a science fair, a business plan competition,
                or a creative writing contest, such experiences can be enriching
                and rewarding to your portfolio and your current skill set and
                experience.
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
                Remember that for most, academics within A-Levels take two
                years. Therefore, choosing extracurricular activities that both
                complement your studies, along with aligning with your
                interests, goals, and skill sets, can help to create meaningful
                experiences outside of the classroom.{" "}
              </h3>
              <h3>
                It can help to enhance your academic strengths, support your
                career aspirations, and even contribute to your overall personal
                development.{" "}
              </h3>
              <h3>
                Remember that the right extracurriculars can enrich and even
                dramatically change the course of your education.{" "}
              </h3>
              <h3>
                They will also help you build valuable skills and strengthen
                your
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
