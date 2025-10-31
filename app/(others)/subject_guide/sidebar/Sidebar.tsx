// "use client";

// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";
// import Link from "next/link";

// type Subtopic = string;
// type Topic = { title: string; subtopics: Subtopic[] };
// type Chapter = { title: string; topics: Topic[] };
// type SubjectDoc = { subjectName: string; examCode?: string; chapters: Chapter[] };

// export default function Sidebar({ subjectData }: { subjectData: SubjectDoc }) {
//   const pathname = usePathname();
//   const [completed, setCompleted] = useState<Record<string, boolean>>({});
//   const [active, setActive] = useState<string | null>(null);

//   useEffect(() => {
//     // Load saved progress
//     const saved = localStorage.getItem("progress");
//     if (saved) setCompleted(JSON.parse(saved));
//   }, []);

//   useEffect(() => {
//     // Detect active subtopic based on current URL
//     const segments = pathname.split("/");
//     setActive(segments[segments.length - 1]);
//   }, [pathname]);

//   // Save progress when subtopic is completed
//   useEffect(() => {
//     function handleScroll() {
//       if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
//         if (active) {
//           setCompleted((prev) => {
//             const updated = { ...prev, [active]: true };
//             localStorage.setItem("progress", JSON.stringify(updated));
//             return updated;
//           });
//         }
//       }
//     }

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [active]);

//   function formatUrl(str: string) {
//     return str.toLowerCase().replace(/\s+/g, "_").replace(/\//g, "-");
//   }

//   return (
//     <aside className="w-80 border-r bg-gray-50 p-4 overflow-y-auto h-screen sticky top-0">
//       <h2 className="text-xl font-semibold mb-4">{subjectData.subjectName} Notes</h2>

//       {subjectData.chapters.map((chapter, cIdx) => (
//         <div key={cIdx} className="mb-4">
//           <div className="font-semibold mb-2">{chapter.title}</div>

//           {chapter.topics.map((topic, tIdx) => (
//             <div key={tIdx} className="ml-2 mb-2">
//               <div className="text-sm font-medium mb-1">{topic.title}</div>

//               <ul className="ml-4 space-y-1">
//                 {topic.subtopics.map((sub, sIdx) => {
//                   const formatted = formatUrl(sub);
//                   const isActive = pathname.includes(formatted);
//                   const isCompleted = completed[formatted];

//                   return (
//                     <li key={sIdx}>
//                       <Link
//                         href={`/subject_guide/${subjectData.subjectName.toLowerCase()}/${formatUrl(
//                           chapter.title
//                         )}/${formatUrl(topic.title)}/${formatted}`}
//                         className={`flex items-center gap-2 p-2 rounded-md transition ${
//                           isActive
//                             ? "bg-blue-100 text-blue-700"
//                             : "hover:bg-gray-100 text-gray-700"
//                         }`}
//                       >
//                         <span
//                           className={`w-3 h-3 rounded-full flex-shrink-0 ${
//                             isCompleted
//                               ? "bg-green-500"
//                               : isActive
//                               ? "bg-blue-500"
//                               : "border border-gray-400"
//                           }`}
//                         ></span>
//                         <span className="text-sm">{sub}</span>
//                       </Link>
//                     </li>
//                   );
//                 })}
//               </ul>
//             </div>
//           ))}
//         </div>
//       ))}
//     </aside>
//   );
// }
/////////////////////////////////////////////////////////////////////
// "use client";

// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { ChevronDown, ChevronRight } from "lucide-react";

// type Subtopic = string;
// type Topic = { title: string; subtopics: Subtopic[] };
// type Chapter = { title: string; topics: Topic[] };
// type SubjectDoc = { subjectName: string; examCode?: string; chapters: Chapter[] };

// export default function Sidebar({ subjectData }: { subjectData: SubjectDoc }) {
//   const pathname = usePathname();
//   const [completed, setCompleted] = useState<Record<string, boolean>>({});
//   const [active, setActive] = useState<string | null>(null);

//   const [openChapters, setOpenChapters] = useState<Record<number, boolean>>({});
//   const [openTopics, setOpenTopics] = useState<Record<string, boolean>>({});

//   useEffect(() => {
//     const saved = localStorage.getItem("progress");
//     if (saved) setCompleted(JSON.parse(saved));
//   }, []);

//   useEffect(() => {
//     const segments = pathname.split("/");
//     const activeSub = segments[segments.length - 1];
//     setActive(activeSub);
//   }, [pathname]);

//   useEffect(() => {
//     function handleScroll() {
//       if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
//         if (active) {
//           setCompleted((prev) => {
//             const updated = { ...prev, [active]: true };
//             localStorage.setItem("progress", JSON.stringify(updated));
//             return updated;
//           });
//         }
//       }
//     }
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [active]);

//   function formatUrl(str: string) {
//     return str.toLowerCase().replace(/\s+/g, "_").replace(/\//g, "-");
//   }

//   function toggleChapter(index: number) {
//     setOpenChapters((prev) => ({ ...prev, [index]: !prev[index] }));
//   }

//   function toggleTopic(chapterIdx: number, topicTitle: string) {
//     const key = `${chapterIdx}-${topicTitle}`;
//     setOpenTopics((prev) => ({ ...prev, [key]: !prev[key] }));
//   }

//   // Auto-expand the chapter and topic of the active subtopic
//   useEffect(() => {
//     if (!active) return;
//     subjectData.chapters.forEach((chapter, cIdx) => {
//       chapter.topics.forEach((topic) => {
//         topic.subtopics.forEach((sub) => {
//           if (pathname.includes(formatUrl(sub))) {
//             setOpenChapters((prev) => ({ ...prev, [cIdx]: true }));
//             setOpenTopics((prev) => ({ ...prev, [`${cIdx}-${topic.title}`]: true }));
//           }
//         });
//       });
//     });
//   }, [pathname, active, subjectData]);

//   return (
//     <aside className="w-80 border-r bg-gray-50 p-4 overflow-y-auto h-screen sticky top-0">
//       <h2 className="text-xl font-semibold mb-4">{subjectData.subjectName} Notes</h2>

//       {subjectData.chapters.map((chapter, cIdx) => (
//         <div key={cIdx} className="mb-3">
//           {/* Chapter header */}
//           <button
//             onClick={() => toggleChapter(cIdx)}
//             className="w-full flex justify-between items-center text-left font-semibold text-gray-800 hover:bg-gray-100 p-2 rounded-md"
//           >
//             {chapter.title}
//             {openChapters[cIdx] ? (
//               <ChevronDown size={18} className="text-gray-600" />
//             ) : (
//               <ChevronRight size={18} className="text-gray-600" />
//             )}
//           </button>

//           {/* Topics (visible only if chapter expanded) */}
//           {openChapters[cIdx] && (
//             <div className="ml-3 mt-2 border-l pl-3 border-gray-200">
//               {chapter.topics.map((topic, tIdx) => {
//                 const topicKey = `${cIdx}-${topic.title}`;
//                 return (
//                   <div key={tIdx} className="mb-2">
//                     <button
//                       onClick={() => toggleTopic(cIdx, topic.title)}
//                       className="flex justify-between items-center w-full text-sm font-medium text-gray-700 hover:bg-gray-100 p-2 rounded-md"
//                     >
//                       {topic.title}
//                       {openTopics[topicKey] ? (
//                         <ChevronDown size={14} className="text-gray-500" />
//                       ) : (
//                         <ChevronRight size={14} className="text-gray-500" />
//                       )}
//                     </button>

//                     {/* Subtopics */}
//                     {openTopics[topicKey] && (
//                       <ul className="ml-4 mt-1 space-y-1">
//                         {topic.subtopics.map((sub, sIdx) => {
//                           const formatted = formatUrl(sub);
//                           const isActive = pathname.includes(formatted);
//                           const isCompleted = completed[formatted];

//                           return (
//                             <li key={sIdx}>
//                               <Link
//                                 href={`/subject_guide/${subjectData.subjectName.toLowerCase()}/${formatUrl(
//                                   chapter.title
//                                 )}/${formatUrl(topic.title)}/${formatted}`}
//                                 className={`flex items-center gap-2 p-2 rounded-md transition ${
//                                   isActive
//                                     ? "bg-blue-100 text-blue-700"
//                                     : "hover:bg-gray-100 text-gray-700"
//                                 }`}
//                               >
//                                 <span
//                                   className={`w-3 h-3 rounded-full flex-shrink-0 ${
//                                     isCompleted
//                                       ? "bg-green-500"
//                                       : isActive
//                                       ? "bg-blue-500"
//                                       : "border border-gray-400"
//                                   }`}
//                                 ></span>
//                                 <span className="text-sm">{sub}</span>
//                               </Link>
//                             </li>
//                           );
//                         })}
//                       </ul>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//           )}
//         </div>
//       ))}
//     </aside>
//   );
// }

// "use client";

// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { ChevronDown, ChevronRight } from "lucide-react";

// type Subtopic = string;
// type Topic = { title: string; subtopics: Subtopic[] };
// type Chapter = { title: string; topics: Topic[] };
// type SubjectDoc = { subjectName: string; examCode?: string; chapters: Chapter[] };

// export default function Sidebar({ subjectData }: { subjectData: SubjectDoc }) {
//   const pathname = usePathname();
//   const [completed, setCompleted] = useState<Record<string, boolean>>({});
//   const [active, setActive] = useState<string | null>(null);

//   const [openChapters, setOpenChapters] = useState<Record<number, boolean>>({});
//   const [openTopics, setOpenTopics] = useState<Record<string, boolean>>({});

//   useEffect(() => {
//     const saved = localStorage.getItem("progress");
//     if (saved) setCompleted(JSON.parse(saved));
//   }, []);

//   useEffect(() => {
//     const segments = pathname.split("/");
//     const activeSub = segments[segments.length - 1];
//     setActive(activeSub);
//   }, [pathname]);

//   useEffect(() => {
//     function handleScroll() {
//       if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
//         if (active) {
//           setCompleted((prev) => {
//             const updated = { ...prev, [active]: true };
//             localStorage.setItem("progress", JSON.stringify(updated));
//             return updated;
//           });
//         }
//       }
//     }
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [active]);

//   function formatUrl(str: string) {
//     return str.toLowerCase().replace(/\s+/g, "_").replace(/\//g, "-");
//   }

//   function toggleChapter(index: number) {
//     setOpenChapters((prev) => ({ ...prev, [index]: !prev[index] }));
//   }

//   function toggleTopic(chapterIdx: number, topicTitle: string) {
//     const key = `${chapterIdx}-${topicTitle}`;
//     setOpenTopics((prev) => ({ ...prev, [key]: !prev[key] }));
//   }

//   useEffect(() => {
//     if (!active) return;
//     subjectData.chapters.forEach((chapter, cIdx) => {
//       chapter.topics.forEach((topic) => {
//         topic.subtopics.forEach((sub) => {
//           if (pathname.includes(formatUrl(sub))) {
//             setOpenChapters((prev) => ({ ...prev, [cIdx]: true }));
//             setOpenTopics((prev) => ({ ...prev, [`${cIdx}-${topic.title}`]: true }));
//           }
//         });
//       });
//     });
//   }, [pathname, active, subjectData]);

//   return (
//     <aside className="w-80 border-r bg-gray-50 p-4 overflow-y-auto h-screen sticky top-0">
//       <h2 className="text-xl font-semibold mb-4">{subjectData.subjectName} Notes</h2>

//       {subjectData.chapters.map((chapter, cIdx) => (
//         <div key={cIdx} className="mb-3">
//           {/* Chapter header */}
//           <button
//             onClick={() => toggleChapter(cIdx)}
//             className="w-full flex justify-between items-center text-left font-semibold text-gray-800 hover:bg-gray-100 p-2 rounded-md"
//           >
//             {chapter.title}
//             {openChapters[cIdx] ? (
//               <ChevronDown size={18} className="text-gray-600" />
//             ) : (
//               <ChevronRight size={18} className="text-gray-600" />
//             )}
//           </button>

//           {/* Animated topics container */}
//           <div
//             className={`transition-all duration-500 ease-in-out overflow-hidden ${
//               openChapters[cIdx] ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
//             }`}
//           >
//             <div className="ml-3 mt-2 border-l pl-3 border-gray-200">
//               {chapter.topics.map((topic, tIdx) => {
//                 const topicKey = `${cIdx}-${topic.title}`;
//                 return (
//                   <div key={tIdx} className="mb-2">
//                     <button
//                       onClick={() => toggleTopic(cIdx, topic.title)}
//                       className="flex justify-between items-center w-full text-sm font-medium text-gray-700 hover:bg-gray-100 p-2 rounded-md"
//                     >
//                       {topic.title}
//                       {openTopics[topicKey] ? (
//                         <ChevronDown size={14} className="text-gray-500" />
//                       ) : (
//                         <ChevronRight size={14} className="text-gray-500" />
//                       )}
//                     </button>

//                     {/* Animated subtopics container */}
//                     <div
//                       className={`transition-all duration-500 ease-in-out overflow-hidden ${
//                         openTopics[topicKey]
//                           ? "max-h-[1000px] opacity-100"
//                           : "max-h-0 opacity-0"
//                       }`}
//                     >
//                       <ul className="ml-4 mt-1 space-y-1">
//                         {topic.subtopics.map((sub, sIdx) => {
//                           const formatted = formatUrl(sub);
//                           const isActive = pathname.includes(formatted);
//                           const isCompleted = completed[formatted];

//                           return (
//                             <li key={sIdx}>
//                               <Link
//                                 href={`/subject_guide/${subjectData.subjectName.toLowerCase()}/${formatUrl(
//                                   chapter.title
//                                 )}/${formatUrl(topic.title)}/${formatted}`}
//                                 className={`flex items-center gap-2 p-2 rounded-md transition ${
//                                   isActive
//                                     ? "bg-blue-100 text-blue-700"
//                                     : "hover:bg-gray-100 text-gray-700"
//                                 }`}
//                               >
//                                 <span
//                                   className={`w-3 h-3 rounded-full flex-shrink-0 ${
//                                     isCompleted
//                                       ? "bg-green-500"
//                                       : isActive
//                                       ? "bg-blue-500"
//                                       : "border border-gray-400"
//                                   }`}
//                                 ></span>
//                                 <span className="text-sm">{sub}</span>
//                               </Link>
//                             </li>
//                           );
//                         })}
//                       </ul>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       ))}
//     </aside>
//   );
// }

// "use client";

// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";

// type Subtopic = string;
// type Topic = { title: string; subtopics: Subtopic[] };
// type Chapter = { title: string; topics: Topic[] };
// type SubjectDoc = { subjectName: string; examCode?: string; chapters: Chapter[] };

// export default function Sidebar({ subjectData }: { subjectData: SubjectDoc }) {
//   const pathname = usePathname();
//   const [completed, setCompleted] = useState<Record<string, boolean>>({});
//   const [active, setActive] = useState<string | null>(null);

//   const [openChapters, setOpenChapters] = useState<Record<number, boolean>>({});
//   const [openTopics, setOpenTopics] = useState<Record<string, boolean>>({});
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     const saved = localStorage.getItem("progress");
//     if (saved) setCompleted(JSON.parse(saved));
//   }, []);

//   useEffect(() => {
//     const segments = pathname.split("/");
//     const activeSub = segments[segments.length - 1];
//     setActive(activeSub);
//   }, [pathname]);

//   useEffect(() => {
//     function handleScroll() {
//       if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
//         if (active) {
//           setCompleted((prev) => {
//             const updated = { ...prev, [active]: true };
//             localStorage.setItem("progress", JSON.stringify(updated));
//             return updated;
//           });
//         }
//       }
//     }
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [active]);

//   function formatUrl(str: string) {
//     return str.toLowerCase().replace(/\s+/g, "_").replace(/\//g, "-");
//   }

//   function toggleChapter(index: number) {
//     setOpenChapters((prev) => ({ ...prev, [index]: !prev[index] }));
//   }

//   function toggleTopic(chapterIdx: number, topicTitle: string) {
//     const key = `${chapterIdx}-${topicTitle}`;
//     setOpenTopics((prev) => ({ ...prev, [key]: !prev[key] }));
//   }

//   useEffect(() => {
//     if (!active) return;
//     subjectData.chapters.forEach((chapter, cIdx) => {
//       chapter.topics.forEach((topic) => {
//         topic.subtopics.forEach((sub) => {
//           if (pathname.includes(formatUrl(sub))) {
//             setOpenChapters((prev) => ({ ...prev, [cIdx]: true }));
//             setOpenTopics((prev) => ({ ...prev, [`${cIdx}-${topic.title}`]: true }));
//           }
//         });
//       });
//     });
//   }, [pathname, active, subjectData]);

//   // Handle mobile toggle button visibility
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 768) setIsVisible(false);
//       else setIsVisible(true);
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <>
//       {/* Toggle button (visible on mobile) */}
//       <button
//         onClick={() => setIsVisible((prev) => !prev)}
//         className="fixed top-4 left-4 z-50 md:hidden bg-white border rounded-lg shadow p-2 transition hover:bg-gray-100"
//         aria-label="Toggle sidebar"
//       >
//         {isVisible ? <X size={20} /> : <Menu size={20} />}
//       </button>

//       {/* Sidebar container */}
//       <aside
//         className={`fixed md:static top-0 left-0 z-40 h-screen w-72 border-r bg-gray-50 p-4 overflow-y-auto transition-transform duration-500 ease-in-out transform
//         ${isVisible ? "translate-x-0" : "-translate-x-full"}
//         md:translate-x-0`}
//       >
//         <h2 className="text-xl font-semibold mb-4">{subjectData.subjectName} Notes</h2>

//         {subjectData.chapters.map((chapter, cIdx) => (
//           <div key={cIdx} className="mb-3">
//             {/* Chapter header */}
//             <button
//               onClick={() => toggleChapter(cIdx)}
//               className="w-full flex justify-between items-center text-left font-semibold text-gray-800 hover:bg-gray-100 p-2 rounded-md"
//             >
//               {chapter.title}
//               {openChapters[cIdx] ? (
//                 <ChevronDown size={18} className="text-gray-600" />
//               ) : (
//                 <ChevronRight size={18} className="text-gray-600" />
//               )}
//             </button>

//             {/* Animated topics container */}
//             <div
//               className={`transition-all duration-500 ease-in-out overflow-hidden ${
//                 openChapters[cIdx] ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
//               }`}
//             >
//               <div className="ml-3 mt-2 border-l pl-3 border-gray-200">
//                 {chapter.topics.map((topic, tIdx) => {
//                   const topicKey = `${cIdx}-${topic.title}`;
//                   return (
//                     <div key={tIdx} className="mb-2">
//                       <button
//                         onClick={() => toggleTopic(cIdx, topic.title)}
//                         className="flex justify-between items-center w-full text-sm font-medium text-gray-700 hover:bg-gray-100 p-2 rounded-md"
//                       >
//                         {topic.title}
//                         {openTopics[topicKey] ? (
//                           <ChevronDown size={14} className="text-gray-500" />
//                         ) : (
//                           <ChevronRight size={14} className="text-gray-500" />
//                         )}
//                       </button>

//                       {/* Animated subtopics container */}
//                       <div
//                         className={`transition-all duration-500 ease-in-out overflow-hidden ${
//                           openTopics[topicKey]
//                             ? "max-h-[1000px] opacity-100"
//                             : "max-h-0 opacity-0"
//                         }`}
//                       >
//                         <ul className="ml-4 mt-1 space-y-1">
//                           {topic.subtopics.map((sub, sIdx) => {
//                             const formatted = formatUrl(sub);
//                             const isActive = pathname.includes(formatted);
//                             const isCompleted = completed[formatted];

//                             return (
//                               <li key={sIdx}>
//                                 <Link
//                                   href={`/subject_guide/${subjectData.subjectName.toLowerCase()}/${formatUrl(
//                                     chapter.title
//                                   )}/${formatUrl(topic.title)}/${formatted}`}
//                                   className={`flex items-center gap-2 p-2 rounded-md transition ${
//                                     isActive
//                                       ? "bg-blue-100 text-blue-700"
//                                       : "hover:bg-gray-100 text-gray-700"
//                                   }`}
//                                 >
//                                   <span
//                                     className={`w-3 h-3 rounded-full flex-shrink-0 ${
//                                       isCompleted
//                                         ? "bg-green-500"
//                                         : isActive
//                                         ? "bg-blue-500"
//                                         : "border border-gray-400"
//                                     }`}
//                                   ></span>
//                                   <span className="text-sm">{sub}</span>
//                                 </Link>
//                               </li>
//                             );
//                           })}
//                         </ul>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         ))}
//       </aside>
//     </>
//   );
// }

// "use client";

// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { ChevronDown, ChevronRight, X } from "lucide-react";

// type Subtopic = string;
// type Topic = { title: string; subtopics: Subtopic[] };
// type Chapter = { title: string; topics: Topic[] };
// type SubjectDoc = { subjectName: string; examCode?: string; chapters: Chapter[] };

// export default function Sidebar({ subjectData }: { subjectData: SubjectDoc }) {
//   const pathname = usePathname();
//   const [completed, setCompleted] = useState<Record<string, boolean>>({});
//   const [active, setActive] = useState<string | null>(null);
//   const [openChapters, setOpenChapters] = useState<Record<number, boolean>>({});
//   const [openTopics, setOpenTopics] = useState<Record<string, boolean>>({});
//   const [isMobileSheetOpen, setIsMobileSheetOpen] = useState(false);

//   // Load completion
//   useEffect(() => {
//     const saved = localStorage.getItem("progress");
//     if (saved) setCompleted(JSON.parse(saved));
//   }, []);

//   useEffect(() => {
//     const segments = pathname.split("/");
//     setActive(segments[segments.length - 1]);
//   }, [pathname]);

//   // Mark completion
//   useEffect(() => {
//     function handleScroll() {
//       if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
//         if (active) {
//           setCompleted((prev) => {
//             const updated = { ...prev, [active]: true };
//             localStorage.setItem("progress", JSON.stringify(updated));
//             return updated;
//           });
//         }
//       }
//     }
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [active]);

//   // Utilities
//   const formatUrl = (str: string) =>
//     str.toLowerCase().replace(/\s+/g, "_").replace(/\//g, "-");

//   const toggleChapter = (index: number) =>
//     setOpenChapters((prev) => ({ ...prev, [index]: !prev[index] }));

//   const toggleTopic = (cIdx: number, title: string) => {
//     const key = `${cIdx}-${title}`;
//     setOpenTopics((prev) => ({ ...prev, [key]: !prev[key] }));
//   };

//   // Expand the chapter that matches current path
//   useEffect(() => {
//     if (!active) return;
//     subjectData.chapters.forEach((chapter, cIdx) => {
//       chapter.topics.forEach((topic) => {
//         topic.subtopics.forEach((sub) => {
//           if (pathname.includes(formatUrl(sub))) {
//             setOpenChapters((p) => ({ ...p, [cIdx]: true }));
//             setOpenTopics((p) => ({ ...p, [`${cIdx}-${topic.title}`]: true }));
//           }
//         });
//       });
//     });
//   }, [pathname, active, subjectData]);

//   // Reusable sidebar content
//   const SidebarContent = (
//     <div className="p-4 overflow-y-auto h-full">
//       <h2 className="text-xl font-semibold mb-4">
//         {subjectData.subjectName} Notes
//       </h2>
//       {subjectData.chapters.map((chapter, cIdx) => (
//         <div key={cIdx} className="mb-3">
//           <button
//             onClick={() => toggleChapter(cIdx)}
//             className="w-full flex justify-between items-center text-left font-semibold text-gray-800 hover:bg-gray-100 p-2 rounded-md"
//           >
//             {chapter.title}
//             {openChapters[cIdx] ? (
//               <ChevronDown size={18} className="text-gray-600" />
//             ) : (
//               <ChevronRight size={18} className="text-gray-600" />
//             )}
//           </button>

//           <div
//             className={`transition-all duration-500 ease-in-out overflow-hidden ${
//               openChapters[cIdx] ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
//             }`}
//           >
//             <div className="ml-3 mt-2 border-l pl-3 border-gray-200">
//               {chapter.topics.map((topic, tIdx) => {
//                 const topicKey = `${cIdx}-${topic.title}`;
//                 return (
//                   <div key={tIdx} className="mb-2">
//                     <button
//                       onClick={() => toggleTopic(cIdx, topic.title)}
//                       className="flex justify-between items-center w-full text-sm font-medium text-gray-700 hover:bg-gray-100 p-2 rounded-md"
//                     >
//                       {topic.title}
//                       {openTopics[topicKey] ? (
//                         <ChevronDown size={14} className="text-gray-500" />
//                       ) : (
//                         <ChevronRight size={14} className="text-gray-500" />
//                       )}
//                     </button>

//                     <div
//                       className={`transition-all duration-500 ease-in-out overflow-hidden ${
//                         openTopics[topicKey]
//                           ? "max-h-[1000px] opacity-100"
//                           : "max-h-0 opacity-0"
//                       }`}
//                     >
//                       <ul className="ml-4 mt-1 space-y-1">
//                         {topic.subtopics.map((sub, sIdx) => {
//                           const formatted = formatUrl(sub);
//                           const isActive = pathname.includes(formatted);
//                           const isCompleted = completed[formatted];

//                           return (
//                             <li key={sIdx}>
//                               <Link
//                                 href={`/subject_guide/${subjectData.subjectName.toLowerCase()}/${formatUrl(
//                                   chapter.title
//                                 )}/${formatUrl(topic.title)}/${formatted}`}
//                                 onClick={() => setIsMobileSheetOpen(false)} // Close on click
//                                 className={`flex items-center gap-2 p-2 rounded-md transition ${
//                                   isActive
//                                     ? "bg-blue-100 text-blue-700"
//                                     : "hover:bg-gray-100 text-gray-700"
//                                 }`}
//                               >
//                                 <span
//                                   className={`w-3 h-3 rounded-full flex-shrink-0 ${
//                                     isCompleted
//                                       ? "bg-green-500"
//                                       : isActive
//                                       ? "bg-blue-500"
//                                       : "border border-gray-400"
//                                   }`}
//                                 ></span>
//                                 <span className="text-sm">{sub}</span>
//                               </Link>
//                             </li>
//                           );
//                         })}
//                       </ul>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );

//   return (
//     <>
//       {/* Desktop Sidebar */}
//       <aside className="hidden md:block w-72 border-r bg-gray-50 h-[calc(100vh)] overflow-y-auto">
//         {SidebarContent}
//       </aside>

//       {/* Mobile Bottom Sheet */}
//       <div
//         className={`fixed inset-0 z-50 md:hidden transition-all duration-500 ease-in-out ${
//           isMobileSheetOpen
//             ? "translate-y-0 opacity-100"
//             : "translate-y-full opacity-0 pointer-events-none"
//         }`}
//       >
//         {/* Overlay */}
//         <div
//           className="absolute inset-0 bg-black/50"
//           onClick={() => setIsMobileSheetOpen(false)}
//         ></div>

//         {/* Sheet Content */}
//         <div className="absolute bottom-0 w-full h-[90vh] bg-white rounded-t-2xl shadow-lg flex flex-col">
//           <div className="flex justify-between items-center p-4 border-b">
//             <h3 className="font-semibold text-lg">All Topics</h3>
//             <button onClick={() => setIsMobileSheetOpen(false)}>
//               <X size={24} />
//             </button>
//           </div>
//           <div className="flex-1 overflow-y-auto">{SidebarContent}</div>
//         </div>
//       </div>

//       {/* Mobile Floating Button */}
//       <button
//         onClick={() => setIsMobileSheetOpen(true)}
//         className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 md:hidden bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition"
//       >
//         All Topics
//       </button>
//     </>
//   );
// }

// "use client";

// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { ChevronDown, ChevronRight, X } from "lucide-react";

// type Subtopic = string;
// type Topic = { title: string; subtopics: Subtopic[] };
// type Chapter = { title: string; topics: Topic[] };
// type SubjectDoc = { subjectName: string; examCode?: string; chapters: Chapter[] };

// export default function Sidebar({ subjectData }: { subjectData: SubjectDoc }) {
//   const pathname = usePathname();
//   const [completed, setCompleted] = useState<Record<string, boolean>>({});
//   const [active, setActive] = useState<string | null>(null);
//   const [openChapters, setOpenChapters] = useState<Record<number, boolean>>({});
//   const [openTopics, setOpenTopics] = useState<Record<string, boolean>>({});
//   const [isMobileSheetOpen, setIsMobileSheetOpen] = useState(false);

//   // --- Sanitize function identical to your global one ---
//   const sanitizeForUrl = (str: string) => {
//     return str
//       .trim()
//       .toLowerCase()
//       .replace(/[.]/g, "") // remove full stops
//       .replace(/[:]/g, "_") // replace colons with underscores
//       .replace(/[()]/g, "") // remove parentheses
//       .replace(/,/g, "") // remove commas
//       .replace(/\s+/g, "_") // replace spaces with underscores
//       .replace(/[^\w-]/g, ""); // remove any remaining invalid characters
//   };

//   // Load completion
//   useEffect(() => {
//     const saved = localStorage.getItem("progress");
//     if (saved) setCompleted(JSON.parse(saved));
//   }, []);

//   useEffect(() => {
//     const segments = pathname.split("/");
//     setActive(segments[segments.length - 1]);
//   }, [pathname]);

//   // Mark completion
//   useEffect(() => {
//     function handleScroll() {
//       if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
//         if (active) {
//           setCompleted((prev) => {
//             const updated = { ...prev, [active]: true };
//             localStorage.setItem("progress", JSON.stringify(updated));
//             return updated;
//           });
//         }
//       }
//     }
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [active]);

//   const toggleChapter = (index: number) =>
//     setOpenChapters((prev) => ({ ...prev, [index]: !prev[index] }));

//   const toggleTopic = (cIdx: number, title: string) => {
//     const key = `${cIdx}-${title}`;
//     setOpenTopics((prev) => ({ ...prev, [key]: !prev[key] }));
//   };

//   // Expand the chapter that matches current path
//   useEffect(() => {
//     if (!active) return;
//     subjectData.chapters.forEach((chapter, cIdx) => {
//       chapter.topics.forEach((topic) => {
//         topic.subtopics.forEach((sub) => {
//           if (pathname.includes(sanitizeForUrl(sub))) {
//             setOpenChapters((p) => ({ ...p, [cIdx]: true }));
//             setOpenTopics((p) => ({ ...p, [`${cIdx}-${topic.title}`]: true }));
//           }
//         });
//       });
//     });
//   }, [pathname, active, subjectData]);

//   // Sidebar content
//   const SidebarContent = (
//     <div className="p-4 overflow-y-auto h-full">
//       <h2 className="text-xl font-semibold mb-4">
//         {subjectData.subjectName} Notes
//       </h2>
//       {subjectData.chapters.map((chapter, cIdx) => (
//         <div key={cIdx} className="mb-3">
//           <button
//             onClick={() => toggleChapter(cIdx)}
//             className="w-full flex justify-between items-center text-left font-semibold text-gray-800 hover:bg-gray-100 p-2 rounded-md"
//           >
//             {chapter.title}
//             {openChapters[cIdx] ? (
//               <ChevronDown size={18} className="text-gray-600" />
//             ) : (
//               <ChevronRight size={18} className="text-gray-600" />
//             )}
//           </button>

//           <div
//             className={`transition-all duration-500 ease-in-out overflow-hidden ${
//               openChapters[cIdx] ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
//             }`}
//           >
//             <div className="ml-3 mt-2 border-l pl-3 border-gray-200">
//               {chapter.topics.map((topic, tIdx) => {
//                 const topicKey = `${cIdx}-${topic.title}`;
//                 return (
//                   <div key={tIdx} className="mb-2">
//                     <button
//                       onClick={() => toggleTopic(cIdx, topic.title)}
//                       className="flex justify-between items-center w-full text-sm font-medium text-gray-700 hover:bg-gray-100 p-2 rounded-md"
//                     >
//                       {topic.title}
//                       {openTopics[topicKey] ? (
//                         <ChevronDown size={14} className="text-gray-500" />
//                       ) : (
//                         <ChevronRight size={14} className="text-gray-500" />
//                       )}
//                     </button>

//                     <div
//                       className={`transition-all duration-500 ease-in-out overflow-hidden ${
//                         openTopics[topicKey]
//                           ? "max-h-[1000px] opacity-100"
//                           : "max-h-0 opacity-0"
//                       }`}
//                     >
//                       <ul className="ml-4 mt-1 space-y-1">
//                         {topic.subtopics.map((sub, sIdx) => {
//                           const formatted = sanitizeForUrl(sub);
//                           const isActive = pathname.includes(formatted);
//                           const isCompleted = completed[formatted];

//                           return (
//                             <li key={sIdx}>
//                               <Link
//                                 href={`/subject_guide/${sanitizeForUrl(
//                                   subjectData.subjectName
//                                 )}/${sanitizeForUrl(chapter.title)}/${sanitizeForUrl(
//                                   topic.title
//                                 )}/${formatted}`}
//                                 onClick={() => setIsMobileSheetOpen(false)}
//                                 className={`flex items-center gap-2 p-2 rounded-md transition ${
//                                   isActive
//                                     ? "bg-blue-100 text-blue-700"
//                                     : "hover:bg-gray-100 text-gray-700"
//                                 }`}
//                               >
//                                 <span
//                                   className={`w-3 h-3 rounded-full flex-shrink-0 ${
//                                     isCompleted
//                                       ? "bg-green-500"
//                                       : isActive
//                                       ? "bg-blue-500"
//                                       : "border border-gray-400"
//                                   }`}
//                                 ></span>
//                                 <span className="text-sm">{sub}</span>
//                               </Link>
//                             </li>
//                           );
//                         })}
//                       </ul>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );

//   return (
//     <>
//       {/* Desktop Sidebar */}
//       <aside className="hidden md:block w-72 border-r bg-gray-50 h-[calc(100vh)] overflow-y-auto">
//         {SidebarContent}
//       </aside>

//       {/* Mobile Bottom Sheet */}
//       <div
//         className={`fixed inset-0 z-50 md:hidden transition-all duration-500 ease-in-out ${
//           isMobileSheetOpen
//             ? "translate-y-0 opacity-100"
//             : "translate-y-full opacity-0 pointer-events-none"
//         }`}
//       >
//         {/* Overlay */}
//         <div
//           className="absolute inset-0 bg-black/50"
//           onClick={() => setIsMobileSheetOpen(false)}
//         ></div>

//         {/* Sheet Content */}
//         <div className="absolute bottom-0 w-full h-[90vh] bg-white rounded-t-2xl shadow-lg flex flex-col">
//           <div className="flex justify-between items-center p-4 border-b">
//             <h3 className="font-semibold text-lg">All Topics</h3>
//             <button onClick={() => setIsMobileSheetOpen(false)}>
//               <X size={24} />
//             </button>
//           </div>
//           <div className="flex-1 overflow-y-auto">{SidebarContent}</div>
//         </div>
//       </div>

//       {/* Mobile Floating Button */}
//       <button
//         onClick={() => setIsMobileSheetOpen(true)}
//         className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 md:hidden bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition"
//       >
//         All Topics
//       </button>
//     </>
//   );
// }

// app/components/Sidebar.tsx (or wherever you keep it)

/* eslint-disable react/no-unescaped-entities */
"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight, X } from "lucide-react";

type Subtopic = string;
type Topic = { title: string; subtopics: Subtopic[] };
type Chapter = { title: string; topics: Topic[] };
type SubjectDoc = { subjectName: string; examCode?: string; chapters: Chapter[] };

export default function Sidebar({ subjectData }: { subjectData: SubjectDoc }) {
  const pathname = usePathname();
  const [completed, setCompleted] = useState<Record<string, boolean>>({});
  const [active, setActive] = useState<string | null>(null);
  const [openChapters, setOpenChapters] = useState<Record<number, boolean>>({});
  const [openTopics, setOpenTopics] = useState<Record<string, boolean>>({});
  const [isMobileSheetOpen, setIsMobileSheetOpen] = useState(false);

  // === SANITIZER (same as generator) ===
  const sanitizeForUrl = (input: string) => {
    if (!input) return "";
    return input
      .trim()
      .toLowerCase()
      .replace(/[\/\\]+/g, "-")
      .replace(/[:=@]+/g, "_")
      .replace(/[()[\]{}"“”'’`%$€₹¢•†·•—–]/g, "")
      .replace(/[.,;?!‽…]+/g, "")
      .replace(/\s+/g, "_")
      .replace(/[^a-z0-9_-]/g, "")
      .replace(/_+/g, "_")
      .replace(/^[_-]+|[_-]+$/g, "");
  };

  // Load completion
  useEffect(() => {
    const saved = localStorage.getItem("progress");
    if (saved) setCompleted(JSON.parse(saved));
  }, []);

  useEffect(() => {
    const segments = pathname.split("/");
    setActive(segments[segments.length - 1] || null);
  }, [pathname]);

  // Mark completion on scroll bottom
  useEffect(() => {
    function handleScroll() {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        if (active) {
          setCompleted((prev) => {
            const updated = { ...prev, [active]: true };
            localStorage.setItem("progress", JSON.stringify(updated));
            return updated;
          });
        }
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [active]);

  const toggleChapter = (index: number) =>
    setOpenChapters((prev) => ({ ...prev, [index]: !prev[index] }));

  const toggleTopic = (cIdx: number, title: string) => {
    const key = `${cIdx}-${title}`;
    setOpenTopics((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // auto-expand chapter/topic containing active subtopic
  useEffect(() => {
    if (!active) return;
    subjectData.chapters.forEach((chapter, cIdx) => {
      chapter.topics.forEach((topic) => {
        topic.subtopics.forEach((sub) => {
          if (pathname.includes(sanitizeForUrl(sub))) {
            setOpenChapters((p) => ({ ...p, [cIdx]: true }));
            setOpenTopics((p) => ({ ...p, [`${cIdx}-${topic.title}`]: true }));
          }
        });
      });
    });
  }, [pathname, active, subjectData]);

  // Sidebar content
  const SidebarContent = (
    <div className="p-4 overflow-y-auto h-full">
      <h2 className="text-xl font-semibold mb-4">
        {subjectData.subjectName} Notes
      </h2>

      {subjectData.chapters.map((chapter, cIdx) => (
        <div key={cIdx} className="mb-3">
          <button
            onClick={() => toggleChapter(cIdx)}
            className="w-full flex justify-between items-center text-left font-semibold text-gray-800 hover:bg-gray-100 p-2 rounded-md"
          >
            {chapter.title}
            {openChapters[cIdx] ? (
              <ChevronDown size={18} className="text-gray-600" />
            ) : (
              <ChevronRight size={18} className="text-gray-600" />
            )}
          </button>

          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              openChapters[cIdx] ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="ml-3 mt-2 border-l pl-3 border-gray-200">
              {chapter.topics.map((topic, tIdx) => {
                const topicKey = `${cIdx}-${topic.title}`;
                return (
                  <div key={tIdx} className="mb-2">
                    <button
                      onClick={() => toggleTopic(cIdx, topic.title)}
                      className="flex justify-between items-center w-full text-sm font-medium text-left text-gray-700 hover:bg-gray-100 p-2 rounded-md"
                    >
                      {topic.title}
                      {openTopics[topicKey] ? (
                        <ChevronDown size={14} className="text-gray-500" />
                      ) : (
                        <ChevronRight size={14} className="text-gray-500" />
                      )}
                    </button>

                    <div
                      className={`transition-all duration-500 ease-in-out overflow-hidden ${
                        openTopics[topicKey] ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <ul className="ml-4 mt-1 space-y-1">
                        {topic.subtopics.map((sub, sIdx) => {
                          const formatted = sanitizeForUrl(sub);
                          const isActive = pathname.includes(formatted);
                          const isCompleted = completed[formatted];

                          // build href from sanitized parts — this will match generator output
                          const href = `/subject_guide/${sanitizeForUrl(
                            subjectData.subjectName
                          )}/${sanitizeForUrl(chapter.title)}/${sanitizeForUrl(topic.title)}/${formatted}`;

                          return (
                            <li key={sIdx}>
                              <Link
                                href={href}
                                onClick={() => setIsMobileSheetOpen(false)}
                                className={`flex items-center gap-2 p-2 rounded-md transition ${
                                  isActive ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100 text-gray-700"
                                }`}
                              >
                                <span
                                  className={`w-3 h-3 rounded-full flex-shrink-0 ${
                                    isCompleted ? "bg-green-500" : isActive ? "bg-blue-500" : "border border-gray-400"
                                  }`}
                                />
                                <span className="text-sm">{sub}</span>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <aside className="hidden md:block w-72 border-r bg-gray-50 h-[calc(100vh)] overflow-y-auto">
        {SidebarContent}
      </aside>

      {/* Mobile bottom sheet */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-500 ease-in-out ${
          isMobileSheetOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileSheetOpen(false)} />
        <div className="absolute bottom-0 w-full h-[90vh] bg-white rounded-t-2xl shadow-lg flex flex-col">
          <div className="flex justify-between items-center p-4 border-b">
            <h3 className="font-semibold text-lg">All Topics</h3>
            <button onClick={() => setIsMobileSheetOpen(false)}><X size={24} /></button>
          </div>
          <div className="flex-1 overflow-y-auto">{SidebarContent}</div>
        </div>
      </div>

      <button
        onClick={() => setIsMobileSheetOpen(true)}
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 md:hidden bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        All Topics
      </button>
    </>
  );
}