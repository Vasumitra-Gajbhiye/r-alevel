// // "use client";

// // import React, { useState } from "react";
// // import { useRouter } from "next/navigation";

// // type Subtopic = string;
// // type Topic = {
// //   title: string;
// //   subtopics: Subtopic[];
// // };
// // type Chapter = {
// //   title: string;
// //   topics: Topic[];
// // };
// // type SubjectDoc = {
// //   subjectName: string;
// //   examCode?: string;
// //   chapters: Chapter[];
// // };

// // function sanitizeForUrl(str: string) {
// //   return encodeURIComponent(str.replace(/\//g, "-"));
// // }

// // function TwoColumnGrid({ children }: { children: React.ReactNode }) {
// //   return <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{children}</div>;
// // }

// // export default function ContentsClient({ subject }: { subject: SubjectDoc }) {
// //   const router = useRouter();
// //   const [expandedChapters, setExpandedChapters] = useState<Record<number, boolean>>({});

// //   const toggleChapter = (idx: number) => {
// //     setExpandedChapters((s) => ({ ...s, [idx]: !s[idx] }));
// //   };

// //   const handleSubtopicClick = (chapter: Chapter, topic: Topic, subtopic: Subtopic) => {
// //     const subjectName = subject.subjectName;
// //     const url = `/subject_guide/${sanitizeForUrl(subjectName)}/${sanitizeForUrl(
// //       chapter.title
// //     )}/${sanitizeForUrl(topic.title)}/${sanitizeForUrl(subtopic)}`;
// //     router.push(url);
// //   };

// //   return (
// //     <div>
// //       <TwoColumnGrid>
// //         {subject.chapters.map((chapter, idx) => (
// //           <div key={idx} className="bg-white border rounded-lg shadow-sm p-4">
// //             <div className="flex items-center justify-between mb-3">
// //               <h2 className="text-lg font-semibold">
// //                 {idx + 1}. {chapter.title}
// //               </h2>
// //               <button
// //                 onClick={() => toggleChapter(idx)}
// //                 className="w-8 h-8 rounded-full flex items-center justify-center border hover:bg-gray-50"
// //                 aria-label={expandedChapters[idx] ? "Collapse" : "Expand"}
// //               >
// //                 <svg
// //                   className={`w-4 h-4 transform ${expandedChapters[idx] ? "rotate-180" : ""}`}
// //                   viewBox="0 0 20 20"
// //                   fill="none"
// //                   xmlns="http://www.w3.org/2000/svg"
// //                 >
// //                   <path
// //                     d="M5 8 L10 13 L15 8"
// //                     stroke="currentColor"
// //                     strokeWidth="1.6"
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                   />
// //                 </svg>
// //               </button>
// //             </div>

// //             <div className="space-y-3">
// //               {chapter.topics.map((topic, tIdx) => (
// //                 <div key={tIdx} className="bg-gray-50 border rounded-md p-3">
// //                   <div className="flex items-center justify-between">
// //                     <div className="text-sm font-medium">{topic.title}</div>
// //                     <div className="text-xs text-gray-500">{topic.subtopics.length} subtopics</div>
// //                   </div>

// //                   {expandedChapters[idx] && (
// //                     <ul className="mt-3 space-y-1">
// //                       {topic.subtopics.map((sub, sIdx) => (
// //                         <li key={sIdx}>
// //                           <button
// //                             onClick={() => handleSubtopicClick(chapter, topic, sub)}
// //                             className="w-full text-left px-3 py-2 rounded-md hover:bg-white hover:shadow-sm transition flex items-center justify-between"
// //                           >
// //                             <span className="text-sm">{sub}</span>
// //                             <svg
// //                               className="w-4 h-4 opacity-50"
// //                               viewBox="0 0 20 20"
// //                               fill="none"
// //                               xmlns="http://www.w3.org/2000/svg"
// //                             >
// //                               <path
// //                                 d="M6 8 L10 12 L14 8"
// //                                 stroke="currentColor"
// //                                 strokeWidth="1.4"
// //                                 strokeLinecap="round"
// //                                 strokeLinejoin="round"
// //                               />
// //                             </svg>
// //                           </button>
// //                         </li>
// //                       ))}
// //                     </ul>
// //                   )}
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         ))}
// //       </TwoColumnGrid>
// //     </div>
// //   );
// // }

// "use client";

// import React, { useState } from "react";
// import { useRouter } from "next/navigation";

// type Subtopic = string;
// type Topic = {
//   title: string;
//   subtopics: Subtopic[];
// };
// type Chapter = {
//   title: string;
//   topics: Topic[];
// };
// type SubjectDoc = {
//   subjectName: string;
//   examCode?: string;
//   chapters: Chapter[];
// };

// // ✅ Custom sanitization for cleaner URLs
// function sanitizeForUrl(str: string) {
//   return str
//     .trim()
//     .toLowerCase()
//     .replace(/[\s/]+/g, "_") // convert spaces & slashes to underscores
//     .replace(/[^\w.\-:]+/g, ""); // allow letters, numbers, underscore, dot, dash, colon
// }

// function TwoColumnGrid({ children }: { children: React.ReactNode }) {
//   return <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{children}</div>;
// }

// export default function ContentsClient({ subject }: { subject: SubjectDoc }) {
//   const router = useRouter();
//   const [expandedChapters, setExpandedChapters] = useState<Record<number, boolean>>({});

//   const toggleChapter = (idx: number) => {
//     setExpandedChapters((s) => ({ ...s, [idx]: !s[idx] }));
//   };

//   const handleSubtopicClick = (chapter: Chapter, topic: Topic, subtopic: Subtopic) => {
//     const subjectName = sanitizeForUrl(subject.subjectName);
//     const chapterSlug = sanitizeForUrl(chapter.title);
//     const topicSlug = sanitizeForUrl(topic.title);
//     const subtopicSlug = sanitizeForUrl(subtopic);

//     const url = `/subject_guide/${subjectName}/${chapterSlug}/${topicSlug}/${subtopicSlug}`;
//     router.push(url);
//   };

//   return (
//     <div>
//       <TwoColumnGrid>
//         {subject.chapters.map((chapter, idx) => (
//           <div key={idx} className="bg-white border rounded-lg shadow-sm p-4">
//             <div className="flex items-center justify-between mb-3">
//               <h2 className="text-lg font-semibold">
//                 {chapter.title}
//               </h2>
//               <button
//                 onClick={() => toggleChapter(idx)}
//                 className="w-8 h-8 rounded-full flex items-center justify-center border hover:bg-gray-50"
//                 aria-label={expandedChapters[idx] ? "Collapse" : "Expand"}
//               >
//                 <svg
//                   className={`w-4 h-4 transform ${expandedChapters[idx] ? "rotate-180" : ""}`}
//                   viewBox="0 0 20 20"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M5 8 L10 13 L15 8"
//                     stroke="currentColor"
//                     strokeWidth="1.6"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </button>
//             </div>

//             <div className="space-y-3">
//               {chapter.topics.map((topic, tIdx) => (
//                 <div key={tIdx} className="bg-gray-50 border rounded-md p-3">
//                   <div className="flex items-center justify-between">
//                     <div className="text-sm font-medium">{topic.title}</div>
//                     <div className="text-xs text-gray-500">{topic.subtopics.length} subtopics</div>
//                   </div>

//                   {expandedChapters[idx] && (
//                     <ul className="mt-3 space-y-1">
//                       {topic.subtopics.map((sub, sIdx) => (
//                         <li key={sIdx}>
//                           <button
//                             onClick={() => handleSubtopicClick(chapter, topic, sub)}
//                             className="w-full text-left px-3 py-2 rounded-md hover:bg-white hover:shadow-sm transition flex items-center justify-between"
//                           >
//                             <span className="text-sm">{sub}</span>
//                             <svg
//                               className="w-4 h-4 opacity-50"
//                               viewBox="0 0 20 20"
//                               fill="none"
//                               xmlns="http://www.w3.org/2000/svg"
//                             >
//                               <path
//                                 d="M6 8 L10 12 L14 8"
//                                 stroke="currentColor"
//                                 strokeWidth="1.4"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                               />
//                             </svg>
//                           </button>
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </TwoColumnGrid>
//     </div>
//   );
// }

"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

type Subtopic = string;
type Topic = {
  title: string;
  subtopics: Subtopic[];
};
type Chapter = {
  title: string;
  topics: Topic[];
};
type SubjectDoc = {
  subjectName: string;
  examCode?: string;
  chapters: Chapter[];
};

function sanitizeForUrl(str: string) {
  return str
    .trim()
    .toLowerCase()
    .replace(/[\s/]+/g, "_")
    .replace(/[^\w.\-:(),]+/g, "");
}

export default function ContentsClient({ subject }: { subject: SubjectDoc }) {
  const router = useRouter();
  const [openChapters, setOpenChapters] = useState<Record<string, boolean>>({});
  const [openTopics, setOpenTopics] = useState<Record<string, boolean>>({});

  // expand first chapter initially
  useEffect(() => {
    if (subject?.chapters?.length && Object.keys(openChapters).length === 0) {
      const firstKey = sanitizeForUrl(subject.chapters[0].title);
      setOpenChapters({ [firstKey]: true });
    }
  }, [subject, openChapters]);

  const toggleChapter = (chapterTitle: string) => {
    const key = sanitizeForUrl(chapterTitle);
    setOpenChapters((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleTopic = (chapterTitle: string, topicTitle: string) => {
    const key = `${sanitizeForUrl(chapterTitle)}::${sanitizeForUrl(topicTitle)}`;
    setOpenTopics((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSubtopicClick = (chapter: Chapter, topic: Topic, subtopic: Subtopic) => {
    const subjectName = sanitizeForUrl(subject.subjectName);
    const chapterSlug = sanitizeForUrl(chapter.title);
    const topicSlug = sanitizeForUrl(topic.title);
    const subtopicSlug = sanitizeForUrl(subtopic);
    router.push(`/subject_guide/${subjectName}/${chapterSlug}/${topicSlug}/${subtopicSlug}`);
  };

  const collapseVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1 },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {subject.chapters.map((chapter) => {
        const chapterKey = sanitizeForUrl(chapter.title);
        const isChapterOpen = !!openChapters[chapterKey];

        return (
          <div
            key={`chapter-${chapterKey}`}
            className="bg-white border rounded-lg shadow-sm p-4 transition-all duration-150 hover:shadow-md"
          >
            {/* CHAPTER HEADER */}
            <button
              onClick={() => toggleChapter(chapter.title)}
              aria-expanded={isChapterOpen}
              className="w-full flex items-center justify-between text-left cursor-pointer"
            >
              <h2 className="text-lg font-semibold">{chapter.title}</h2>
              {isChapterOpen ? (
                <ChevronUp className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-600" />
              )}
            </button>

            {/* TOPICS (animated) */}
            <AnimatePresence initial={false}>
              {isChapterOpen && (
                <motion.div
                  key={`topics-${chapterKey}`}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={collapseVariants}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden mt-3 space-y-3"
                >
                  {chapter.topics.map((topic) => {
                    const topicKey = `${chapterKey}::${sanitizeForUrl(topic.title)}`;
                    const isTopicOpen = !!openTopics[topicKey];

                    return (
                      <div
                        key={`topic-${topicKey}`}
                        className="bg-gray-50 border rounded-md p-3 transition hover:shadow-sm"
                      >
                        {/* TOPIC HEADER */}
                        <button
                          onClick={() => toggleTopic(chapter.title, topic.title)}
                          aria-expanded={isTopicOpen}
                          className="w-full flex items-center justify-between text-left"
                        >
                          <span className="text-sm font-medium">{topic.title}</span>
                          {isTopicOpen ? (
                            <ChevronUp className="w-4 h-4 text-gray-500" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-gray-500" />
                          )}
                        </button>

                        {/* SUBTOPICS (animated) */}
                        <AnimatePresence initial={false}>
                          {isTopicOpen && (
                            <motion.ul
                              key={`subs-${topicKey}`}
                              initial="hidden"
                              animate="visible"
                              exit="hidden"
                              variants={collapseVariants}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                              className="mt-2 space-y-1 overflow-hidden"
                            >
                              {topic.subtopics.map((sub) => {
                                const subKey = `${topicKey}::${sanitizeForUrl(sub)}`;
                                return (
                                  <li key={`sub-${subKey}`}>
                                    <button
                                      onClick={() => handleSubtopicClick(chapter, topic, sub)}
                                      className="w-full text-left px-3 py-1.5 rounded-md hover:bg-white hover:shadow transition flex justify-between items-center"
                                    >
                                      <span className="text-sm">{sub}</span>
                                    </button>
                                  </li>
                                );
                              })}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}