// import Image from "next/image";
// export default function Blog() {
//   return (
//     <>
//       <div className="flex flex-col my-16  justify-center items-center">
//         <div className=" w-11/12 xs:w-5/6 md:w-3/5 lg:w-1/2 ">
//           <div>
//             {/* POST TITLE */}
//             <h1 className="text-xl xxs:text-2xl md2:text-3xl font-bold">
//               Russias economy is growing, but can it last?
//             </h1>

//             {/* POST AUTHOR AND DATE */}
//             <div className="text-xs mt-3 ">
//               <h6 className="text-gray-500">4 May 2024</h6>
//               <h6 className="text-blue-500 mt-1">-Vasumitra Gajbhiye</h6>
//             </div>
//           </div>

//           <div className="leading-7 tracking-wider text-lg">
//             {/* INTRODUCTION SECTION */}
//             <div className="flex flex-col gap-4  mb-12">
//               {/* INTRO IMAGE */}
//               <div
//                 className="overflow-hidden flex items-center mt-10 mb-5"
//                 style={{ maxHeight: "30rem" }}
//               >
//                 <Image
//                                   src="/blogs/6661d7a64c630ca016e5088f/mainImg.jpg"
//                                   alt="illustraion of a brain"
//                                   height={1260}
//                                   width={2240}
//                                 />
//               </div>

//               {/* INTRO PARAGRAPHS */}
//               <h3>
//                 Russias full-scale invasion of Ukraine in February 2022 not only
//               </h3>
//             </div>

//             {/* POST PARAGRAPHS */}
//             <div className="flex flex-col gap-4  mb-12">
//               {/* SECTION TITLE */}
//               <h2 className="text-xl xxs:text-2xl md2:text-3xl font-medium">
//                 Questions over use of Hindu card as a campaign tool
//               </h2>
//               {/* SECTION DATA */}
//               <h3>
//                 Religion is a factor in every Indian election, and this one was
//               </h3>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


"use client";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Blog() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [activeHeading, setActiveHeading] = useState<string>("");

  useEffect(() => {
    const headings = document.querySelectorAll("h2");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.textContent || "");
          }
        });
      },
      { rootMargin: "0px 0px -60% 0px" }
    );
    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, []);

  const tocItems = [
    "Identify your academic interests and goals",
    "Choose activities that develop relevant skills",
    "Balance depth and breadth",
    "Evaluate your time management",
    "Seek opportunities for personal growth",
    "Get involved and make an impact",
    "Conclusion",
  ];

  return (
    <>
      {/* 🩵 Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 to-sky-700 origin-left z-50"
        style={{ scaleX }}
      />

      <div ref={ref} className="flex flex-col items-center my-20 px-5 md:px-10">
        {/* 🧠 HERO SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-3xl text-center"
        >
          <h1 className="text-3xl md:text-4xl font-extrabold leading-snug text-sky-900">
            Choosing Extracurricular Activities That Compliment Your Studies
          </h1>

          <div className="mt-3 text-sm text-gray-500">
            <span>4 May 2024</span> ·{" "}
            <span className="text-blue-600 font-medium">Vasumitra Gajbhiye</span>
          </div>

          <div className="mt-8 rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/blogs/66c5d55db6fe1c382e55eb73/mainImg.jpg"
              alt="blog hero"
              width={1200}
              height={600}
              className="object-cover w-full"
            />
          </div>
        </motion.div>

        {/* 📖 FLOATING TABLE OF CONTENTS */}
        <motion.aside
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="hidden lg:block fixed right-10 top-1/3 w-48 text-sm"
        >
          <div className="p-4 bg-white/60 backdrop-blur-md border border-sky-100/60 rounded-2xl shadow-md">
            <h3 className="font-semibold text-gray-700 mb-3">On this page</h3>
            <ul className="space-y-2 text-gray-600">
              {tocItems.map((h) => (
                <li
                  key={h}
                  className={`cursor-pointer relative pl-2 transition-all ${
                    activeHeading === h
                      ? "text-sky-600 font-medium before:absolute before:left-0 before:top-1 before:h-4 before:w-[3px] before:bg-sky-500 rounded-full"
                      : "hover:text-sky-700 hover:translate-x-1"
                  }`}
                  onClick={() =>
                    document
                      .querySelector(`h2[id='${h.replace(/\s+/g, "-")}']`)
                      ?.scrollIntoView({ behavior: "smooth", block: "center" })
                  }
                >
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </motion.aside>

        {/* 🩶 BLOG CONTENT */}
        <div className="mt-14 max-w-3xl leading-8 text-slate-800 tracking-wide prose prose-sky">
          <p>
            Extracurricular activities can play a significant role in your A-level
            experience, offering valuable skills, experiences, and insights that
            complement your academic pursuits.
          </p>

          <p>
            Selecting activities that align with your studies can enhance your personal
            growth, strengthen your university applications, and make your academic
            journey more fulfilling.
          </p>

          <blockquote className="border-l-4 border-sky-400 pl-4 italic text-gray-600 bg-sky-50/80 p-3 rounded-md">
            “Extracurriculars aren’t distractions — they’re extensions of who you are
            becoming.”
          </blockquote>

          <hr className="my-10 border-sky-100" />

          {tocItems.map((title, i) => (
            <motion.section
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="my-10"
            >
              <h2
                id={title.replace(/\s+/g, "-")}
                className="text-xl font-semibold text-sky-900 mb-3"
              >
                {i + 1}. {title}
              </h2>
              <p>
                {
                  [
                    "Reflect on your subjects and see how activities can deepen or complement them.",
                    "Pick clubs or projects that build teamwork, communication, or leadership.",
                    "Stay consistent in a few, but explore variety for balance.",
                    "Balance passion with rest — quality beats quantity.",
                    "Try unfamiliar roles or experiences that push your comfort zone.",
                    "Lead, volunteer, or create — make your impact visible.",
                    "Extracurriculars are more than tasks; they’re tools for transformation.",
                  ][i]
                }
              </p>
              {i === 1 && (
                <div className="p-5 bg-gradient-to-r from-sky-50 to-blue-50 border-l-4 border-sky-400 rounded-md my-5">
                  <strong>💡 Tip:</strong> Join debate, coding, or theatre — they all
                  teach collaboration and creativity.
                </div>
              )}
              {i === 0 && (
                <div className="bg-sky-50/60 border border-sky-100 p-4 rounded-lg my-3">
                  <strong>Example:</strong> Science students may find research or club
                  work fuels both curiosity and skill.
                </div>
              )}
            </motion.section>
          ))}
        </div>

        {/* 💫 NEXT BLOG CTA */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="mt-20 p-6 bg-sky-50 border border-sky-200 rounded-xl shadow-sm text-center w-full max-w-2xl"
        >
          <h3 className="text-lg font-semibold text-sky-800">
            Read Next: <span className="text-gray-800">“The Art of Studying Smart”</span>
          </h3>
          <a
            href="/blogs/tb/next"
            className="inline-block mt-3 text-sm text-white bg-sky-600 px-4 py-2 rounded-lg hover:bg-sky-700 transition-all"
          >
            Read Now →
          </a>
        </motion.div>
      </div>
    </>
  );
}