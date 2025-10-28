import Image from "next/image";

export default function Blog() {
  return (
    <>
      <div className="flex flex-col my-16  justify-center items-center">
        <div className=" w-11/12 xs:w-5/6 md:w-3/5 lg:w-1/2 ">
          <div>
            {/* POST TITLE */}
            <h1 className="text-xl xxs:text-2xl md2:text-3xl font-bold">
              The Ultimate Guide to Acing Your University Applications
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
                                  src="/blogs/66c09b6b885c6d954427fb4d/mainImg.jpg"
                                  alt="illustraion of a brain"
                                  height={1260}
                                  width={2240}
                                />
              </div>

              {/* INTRO PARAGRAPHS */}
              <h3>
                There are 2 basic things you need to ace your university
                application and get into your dream university. Firstly choosing
                the right universities and course. I know it can be tempting.
                There are a lot of options available out there. In this guide
                we&apos;ll help you with exactly that.
              </h3>
              <h3>
                The second thing you need is a killer personal statement. This
                is where you get to shine, tell you story and convince the board
                why you, amid everyone else, deserve to study at their
                university. This blog contains tips and trick on how you can ace
                your personal statement and shine among others. Let&apos;s
                begin!
              </h3>
            </div>

            {/* POST PARAGRAPHS */}
            <div className="flex flex-col gap-4  mb-12">
              {/* SECTION TITLE */}
              <h2 className="text-xl xxs:text-2xl md2:text-3xl font-medium">
                How to Choose the Right University and Course
              </h2>
              {/* SECTION DATA */}
              <h3>
                Choosing the right university and course is a big deal—it’s
                going to shape your next few years and even your future career.
                Let’s make sure you get it right!
              </h3>
              <h3>
                <strong>
                  1. Figure Out What You Love and What You’re Good At
                </strong>
                <br />
                Start by thinking about what you enjoy and what you’re good at.
                Which subjects do you actually look forward to? What do you find
                yourself excelling in? Pick a course that matches your passions
                and strengths—this will help keep you motivated and excited
                throughout your studies.
              </h3>
              <h3>
                <strong>2. Do Your Research</strong>
                <br />
                Take some time to research different universities and courses.
                Check out what they offer, how they teach, and what their
                campuses are like. University websites, open days, and
                prospectuses are super useful here. Jot down a few options that
                seem like a good fit.
              </h3>
              <h3>
                <strong>3. Think About Where You Want to Be</strong>
                <br />
                Location is key! Do you want to be in a lively city or somewhere
                more laid-back? Consider where the university is, what the
                campus is like, and what kind of social life you can expect.
                These things will make a big difference in how much you enjoy
                your time there.
              </h3>
              <h3>
                <strong>4. Check the Requirements</strong>
                <br />
                Make sure you can meet the entry requirements for the courses
                you’re interested in. This usually means specific grades and
                subjects at A-level. If you’re not sure, don’t hesitate to
                contact the university’s admissions team—they’re there to help!
              </h3>
              <h3>
                <strong>5. Consider Your Future</strong>
                <br />
                Think about where your course could take you career-wise. Look
                at the university’s employability rates, industry connections,
                and opportunities for internships or work placements. A course
                that supports your career goals is a major plus!
              </h3>
            </div>

            <div className="flex flex-col gap-4  mb-12">
              {/* SECTION TITLE */}
              <h2 className="text-xl xxs:text-2xl md2:text-3xl font-medium">
                Tips for Writing a Strong Personal Statement
              </h2>
              {/* SECTION DATA */}
              <h3>
                Your personal statement is your chance to show who you are and
                why you’re perfect for the course. Here’s how to nail it.
              </h3>
              <h3>
                <strong>1. Start Early</strong>
                <br />
                Don’t leave your personal statement until the last minute! Start
                working on it early, so you have plenty of time to think, write,
                and revise. A well-thought-out statement will always come across
                better than a rushed one.
              </h3>
              <h3>
                <strong>2. Be Yourself</strong>
                <br />
                Let your personality shine through in your personal statement.
                Be honest about what you’ve done and why you want to study this
                course. Admissions tutors are looking for genuine passion, so
                make sure that comes across.
              </h3>
              <h3>
                <strong>3. Show Off Your Achievements</strong>
                <br />
                This is your chance to highlight your academic and
                extracurricular successes. Use specific examples to show what
                you’ve achieved and how it relates to the course you’re applying
                for. Don’t just say it—prove it with your experiences!
              </h3>
              <h3>
                <strong>4. Share Your “Why”</strong>
                <br />
                Explain why you’re interested in this course and why you think
                it’s right for you. Talk about your long-term goals and how this
                course will help you get there. Show that you’ve done your
                research and really know what you’re getting into.
              </h3>
              <h3>
                <strong>5. Keep It Clear and Simple</strong>
                <br />
                Organize your personal statement into clear, easy-to-read
                sections. Start with an engaging introduction, move on to your
                achievements and motivations, and finish with a strong
                conclusion. Make sure it flows well and isn’t too long-winded.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
