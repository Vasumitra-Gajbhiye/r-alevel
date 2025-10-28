import Image from "next/image";

export default function Blog() {
  return (
    <>
      <div className="flex flex-col my-16  justify-center items-center">
        <div className=" w-11/12 xs:w-5/6 md:w-3/5 lg:w-1/2 ">
          <div>
            {/* POST TITLE */}
            <h1 className="text-xl xxs:text-2xl md2:text-3xl font-bold">
              Mastering The Art Of Effective Note Taking
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
                                  src="/blogs/66c09b78885c6d954427fb4f/mainImg.jpg"
                                  alt="illustraion of a brain"
                                  height={1260}
                                  width={2240}
                                />
              </div>

              {/* INTRO PARAGRAPHS */}
              <h3>
                Effective note taking is ultimately a vital skill for a level
                students to learn.{" "}
              </h3>
              <h3>
                {" "}
                It can help you organize information, enhance understanding and
                make revision more manageable. Here are some techniques that
                should hopefully transform your note taking into a powerful
                study tool.
              </h3>
            </div>

            {/* POST PARAGRAPHS */}
            <div className="flex flex-col gap-4  mb-12">
              {/* SECTION TITLE */}
              <h2 className="text-xl xxs:text-2xl md2:text-3xl font-medium">
                1. Choose the Right Tools
              </h2>
              {/* SECTION DATA */}
              <h3>
                <strong>Digital vs. Paper:</strong> You should decide whether
                you prefer digital or paper notes. Digital notes might include
                Microsoft OneNote, Evernote or Google Docs, of which offer
                advantages like eggy, easy organization, searchability and the
                ability to even include multimedia. However, paper notes can be
                much more flexible and can help with retention for some
                students. Make sure to choose what works best for you.
              </h3>
              <h3>
                <strong>Notebooks and Stationery:</strong> If you opt for paper,
                you should invest in quality notebooks and stationery. It&apos;s
                always useful to try different colored pens, highlighters and
                possibly even sticky notes that might make your notes more
                visually appealing and easier to navigate whilst practicing your
                art skills!
              </h3>
            </div>

            {/* POST PARAGRAPHS */}
            <div className="flex flex-col gap-4  mb-12">
              {/* SECTION TITLE */}
              <h2 className="text-xl xxs:text-2xl md2:text-3xl font-medium">
                2. The Cornell Method
              </h2>
              {/* SECTION DATA */}
              <h3>
                The Cornell Method is a structured way to take notes that
                promotes active engagement and efficient revision.
              </h3>
              <h3>
                <strong>Layout:</strong> You should divide your page into three
                sections, a narrow-left hand column for keywords and questions,
                a larger right-hand column for more detailed notes, and a bottom
                section for a conclusion or summary.
              </h3>
              <h3>
                <strong>Note-Taking:</strong> During the lesson or lecture, jot
                down key points and details in the right-hand column. Use the
                left-hand column to write down keywords or questions that arise.
              </h3>
              <h3>
                During your lecture you should jot down key points and details
                within the right-hand column you can use the left hand column to
                write down keywords or questions that might arise.
              </h3>
              <h3>
                <strong>Summary:</strong> After each lesson, summarized the main
                point in the bottom section. This will allow you to reinforce
                learning and creates a concise review tool that should hopefully
                strengthen your memory.
              </h3>
            </div>

            {/* POST PARAGRAPHS */}
            <div className="flex flex-col gap-4  mb-12">
              {/* SECTION TITLE */}
              <h2 className="text-xl xxs:text-2xl md2:text-3xl font-medium">
                3. Mind Mapping
              </h2>
              {/* SECTION DATA */}
              <h3>
                Mind maps are a visual way to organize information, showing
                relationships between concepts.
              </h3>
              <h3>
                <strong>Central Idea:</strong> Start with the central topic in
                the middle of the page.
              </h3>
              <h3>
                <strong>Branches:</strong> Create branches for main ideas or
                subtopics, and further subdivide these branches with details.
                Use keywords and images to make the mind map more memorable.
              </h3>
              <h3>
                <strong>Color-Coding:</strong> Use different colors for
                different branches to help differentiate between sections and
                make the map visually engaging.
              </h3>
            </div>

            {/* POST PARAGRAPHS */}
            <div className="flex flex-col gap-4  mb-12">
              {/* SECTION TITLE */}
              <h2 className="text-xl xxs:text-2xl md2:text-3xl font-medium">
                4. Outline Method
              </h2>
              {/* SECTION DATA */}
              <h3>
                The Outline Method is great for organizing information
                hierarchically.
              </h3>
              <h3>
                <strong>Main Points:</strong> Write main points or headings on
                the left side of the page.
              </h3>
              <h3>
                <strong>Subpoints:</strong> Place and sub points under each main
                point. You can use further points below them to provide
                additional details.
              </h3>
              <h3>
                <strong>Bullets and Numbering:</strong> Use bullets or numbers
                to keep your notes organized and easy to follow.
              </h3>
            </div>

            {/* POST PARAGRAPHS */}
            <div className="flex flex-col gap-4  mb-12">
              {/* SECTION TITLE */}
              <h2 className="text-xl xxs:text-2xl md2:text-3xl font-medium">
                5. Flow Notes
              </h2>
              {/* SECTION DATA */}
              <h3>
                Flow notes focus on understanding the material during the
                note-taking process.
              </h3>
              <h3>
                <strong>Active Engagement:</strong> Write down thoughts,
                questions, and connections as they come to you during the
                lesson.
              </h3>
              <h3>
                <strong>Diagrams and Arrows:</strong> You can use diagrams,
                arrows and other visuals that might help you to show
                relationships between ideas.
              </h3>
              <h3>
                <strong>Review:</strong> After the lesson, review your notes and
                highlight key points. Add summaries or additional thoughts in
                the margins.
              </h3>
            </div>

            {/* POST PARAGRAPHS */}
            <div className="flex flex-col gap-4  mb-12">
              {/* SECTION TITLE */}
              <h2 className="text-xl xxs:text-2xl md2:text-3xl font-medium">
                6. Bonus Tips!
              </h2>
              {/* SECTION DATA */}
              <h3>
                <strong>Active Listening:</strong> Pay close attention during
                lessons. Don’t try to write down everything; focus on key points
                and concepts. You can instead voice record to write AI generated
                notes and then come back to them afterwards if need be.
              </h3>
              <h3>
                <strong>Abbreviations and Symbols:</strong> Develop a system of
                abbreviations and symbols to speed up your notetaking.{" "}
              </h3>
              <h3>
                For example, use “&” for “and”, “b/w” for “between”, “opp” for
                “opposite”, “coz” for “because”, “dir” for “direction”, etc.
              </h3>
              <h3>
                <strong>Consistent Format:</strong> Stick to a consistent format
                for your notes. This makes them easier to review and understand
                later.
              </h3>
              <h3>
                <strong>Review Regularly:</strong> Regularly review and revise
                your notes to reinforce learning. This might also help to you
                identify any gaps in your understanding.
              </h3>
              <h3>
                <strong>Stay Organized:</strong> Try to keep your notes
                organized by subject and date. Use dividers or digital folders
                to make it easy to find specific notes when needed.
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
                In my opinion, effective note taking is more than simply writing
                down what you hear.{" "}
              </h3>
              <h3>
                It involves regularly reviewing your notes, organizing
                information in a way that makes sense, and actively engaging
                with the material and the lesson itself.
              </h3>
              <h3>
                {" "}
                Always try to experiment with different techniques such as the
                Cornell method, mind mapping, the outline method and flow notes.
                Hopefully through this you can find the approach that works best
                for you.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
