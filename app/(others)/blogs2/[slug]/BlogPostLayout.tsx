// "use client";

// import { ReactNode, useEffect, useRef, useState } from "react";
// import { motion, useScroll, useSpring } from "framer-motion";
// import Image from "next/image";

// export default function BlogPostLayout({
//   metadata,
//   children,
// }: {
//   metadata: any;
//   children: ReactNode;
// }) {
//   const ref = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({ target: ref });
//   const scaleX = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//   });

//   const [activeHeading, setActiveHeading] = useState("");

//   useEffect(() => {
//     const headings = document.querySelectorAll("h2");
//     const observer = new IntersectionObserver(
//       (entries) =>
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActiveHeading(entry.target.textContent || "");
//           }
//         }),
//       { rootMargin: "0px 0px -60% 0px" }
//     );
//     headings.forEach((h) => observer.observe(h));
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <>
//       {/* Scroll Bar */}
//       <motion.div
//         className="fixed top-0 left-0 right-0 h-[3px] bg-sky-600 origin-left z-50"
//         style={{ scaleX }}
//       />

//       <div ref={ref} className="flex justify-center px-6 md:px-10 my-20 relative">
//         <article className="max-w-3xl w-full prose prose-sky prose-lg leading-relaxed">
//           {/* Title + Meta */}
//           <h1 className="font-extrabold text-sky-900!">{metadata.title}</h1>
//           <p className="text-sm text-gray-500 -mt-3 mb-6">
//             {metadata.date} • <span className="text-sky-700">{metadata.author}</span>
//           </p>

//           <Image
//             src={metadata.image}
//             alt={metadata.title}
//             width={1200}
//             height={600}
//             className="rounded-xl shadow-md mb-10"
//           />

//           {children}
//         </article>

//         {/* Floating TOC */}
//         <aside className="hidden lg:block sticky top-32 h-fit ml-16 w-48 text-sm">
//           <div className="bg-white/50 backdrop-blur-md border border-sky-100 rounded-xl p-4 shadow-sm">
//             <p className="font-semibold text-gray-700 mb-2">On this page</p>
//             <ul className="space-y-2">
//               {[...document.querySelectorAll("h2")].map((el, i) => {
//                 const text = el.textContent || "";
//                 return (
//                   <li
//                     key={i}
//                     className={`cursor-pointer transition ${
//                       activeHeading === text ? "text-sky-600 font-semibold" : "text-gray-700"
//                     }`}
//                     onClick={() => el.scrollIntoView({ behavior: "smooth" })}
//                   >
//                     {text}
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>
//         </aside>
//       </div>
//     </>
//   );
// }

// app/(others)/blogs2/[slug]/BlogPostLayout.tsx
"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";

export default function BlogPostLayout({
  metadata,
  children,
}: {
  metadata: any;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const [activeHeading, setActiveHeading] = useState("");

  useEffect(() => {
    const headings = document.querySelectorAll("h2");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveHeading(e.target.textContent || "");
        });
      },
      { rootMargin: "0px 0px -60% 0px" }
    );
    headings.forEach((h) => io.observe(h));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-sky-600 origin-left z-50"
        style={{ scaleX }}
      />
      <div ref={ref} className="flex justify-center px-6 md:px-10 my-20 relative">
        <article className="max-w-3xl w-full prose prose-sky prose-lg leading-relaxed">
          <h1 className="!mb-2">{metadata.title}</h1>
          <p className="text-sm text-gray-500 mb-6">
            {metadata.date} • <span className="text-sky-700">{metadata.author}</span>
          </p>
          {metadata.image && (
            <Image
              src={metadata.image}
              alt={metadata.title}
              width={1200}
              height={600}
              className="rounded-xl shadow mb-10"
            />
          )}
          {children}
        </article>

        <aside className="hidden lg:block sticky top-32 h-fit ml-16 w-48 text-sm">
          <div className="bg-white/50 backdrop-blur-md border border-sky-100 rounded-xl p-4 shadow-sm">
            <p className="font-semibold text-gray-700 mb-2">On this page</p>
            <ul className="space-y-2">
              {Array.from(document.querySelectorAll("h2")).map((el, i) => {
                const text = el.textContent || "";
                return (
                  <li
                    key={i}
                    className={`cursor-pointer transition ${
                      activeHeading === text ? "text-sky-600 font-semibold" : "text-gray-700"
                    }`}
                    onClick={() => el.scrollIntoView({ behavior: "smooth", block: "start" })}
                  >
                    {text}
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}