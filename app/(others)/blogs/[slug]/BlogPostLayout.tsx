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
//   const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

//   const [activeHeading, setActiveHeading] = useState("");
//   const [toc, setToc] = useState<string[]>([]);

//   useEffect(() => {
//   // 1) Assign IDs to headings automatically
//   document.querySelectorAll("h2").forEach((el) => {
//     const text = el.textContent || "";
//     const id = text.toLowerCase().replace(/\s+/g, "-");
//     el.setAttribute("id", id);
//   });

//   // 2) Collect TOC items
//   const headers = Array.from(document.querySelectorAll("h2")).map(
//     (el) => el.textContent || ""
//   );
//   setToc(headers);

//   // 3) Intersection Observer for active highlight
//   const observer = new IntersectionObserver(
//     (entries) =>
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) setActiveHeading(entry.target.textContent || "");
//       }),
//     { rootMargin: "0px 0px -60% 0px" }
//   );

//   document.querySelectorAll("h2").forEach((h) => observer.observe(h));
//   return () => observer.disconnect();
// }, []);

//   return (
//     <>
//       {/* 🩵 Scroll Progress Bar */}
//       <motion.div
//         className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 to-sky-700 origin-left z-50"
//         style={{ scaleX }}
//       />

//       <div ref={ref} className="flex flex-col items-center my-20 px-5 md:px-10 relative">

//         {/* 🧠 HERO SECTION */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="w-full max-w-3xl text-center"
//         >
//           <h1 className="text-3xl md:text-4xl font-extrabold leading-snug text-sky-900">
//             {metadata.title}
//           </h1>

//           <div className="mt-3 text-sm text-gray-500">
//             <span>{metadata.date}</span> ·{" "}
//             <span className="text-blue-600 font-medium">{metadata.author}</span>
//           </div>

//           {metadata.image && (
//             <div className="mt-8 rounded-2xl overflow-hidden shadow-md">
//               <Image
//                 src={metadata.image}
//                 alt="blog hero"
//                 width={1200}
//                 height={600}
//                 className="object-cover w-full"
//               />
//             </div>
//           )}
//         </motion.div>

//         {/* 📖 FLOATING TABLE OF CONTENTS */}
//         {toc.length > 1 && (
//           <motion.aside
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             viewport={{ once: true }}
//             className="hidden lg:block fixed right-10 top-1/3 w-56 text-sm"
//           >
//             <div className="p-4 bg-white/60 backdrop-blur-md border border-sky-100/60 rounded-2xl shadow-md">
//               <h3 className="font-semibold text-gray-700 mb-3">On this page</h3>
//               <ul className="space-y-2 text-gray-600">
//                 {toc.map((h) => (
//                   <li
//                     key={h}
//                     className={`cursor-pointer relative pl-2 transition-all ${
//                       activeHeading === h
//                         ? "text-sky-600 font-medium before:absolute before:left-0 before:top-[5px] before:h-4 before:w-[3px] before:bg-sky-500 rounded-full"
//                         : "hover:text-sky-700 hover:translate-x-1"
//                     }`}
//                     onClick={() =>
//                       {const id = h.toLowerCase().replace(/\s+/g, "-");
// document.getElementById(id)?.scrollIntoView({
//   behavior: "smooth",
//   block: "start",
// });}
//                     }
//                   >
//                     {h}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </motion.aside>
//         )}

//         {/* 📝 BLOG CONTENT */}
//         <motion.div
//           initial={{ opacity: 0, y: 12 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="mt-14 max-w-4xl  leading-8 text-slate-800 tracking-wide prose prose-sky prose-lg"
//         >
//           {children}
//         </motion.div>

//       </div>
//     </>
//   );
// }

"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import { ReactNode, useEffect, useRef, useState } from "react";

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
  const [toc, setToc] = useState<string[]>([]);

  useEffect(() => {
    // 1) Assign IDs to H2s
    document.querySelectorAll("h2").forEach((el) => {
      const text = el.textContent || "";
      const id = text.toLowerCase().replace(/\s+/g, "-");
      el.setAttribute("id", id);
    });

    // 2) Collect TOC items
    const headers = Array.from(document.querySelectorAll("h2")).map(
      (el) => el.textContent || ""
    );
    setToc(headers);

    // 3) Active section highlight
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            setActiveHeading(entry.target.textContent || "");
        }),
      { rootMargin: "0px 0px -60% 0px" }
    );

    document.querySelectorAll("h2").forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 to-sky-700 origin-left z-50"
        style={{ scaleX }}
      />

      <div
        ref={ref}
        className="relative flex flex-col items-center my-20 px-5 md:px-10"
      >
        {/* HERO (shared width) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-3xl text-center"
        >
          <h1 className="text-3xl md:text-4xl font-extrabold leading-snug text-black">
            {metadata.title}
          </h1>

          <div className="mt-3 text-sm text-gray-500">
            <span>{metadata.date}</span> ·{" "}
            <span className="text-blue-600 font-medium">{metadata.author}</span>
          </div>

          {metadata.image && (
            <div className="mt-8 rounded-2xl overflow-hidden shadow-md">
              <Image
                src={metadata.image}
                alt="blog hero"
                width={1200}
                height={600}
                className="object-cover w-full"
                priority
              />
            </div>
          )}
        </motion.div>

        {/* FLOATING TOC (fixed) */}
        {toc.length > 1 && (
          <motion.aside
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="hidden xl:block fixed right-16 top-1/3 w-60 text-sm z-40"
          >
            <div className="p-4 bg-white/60 backdrop-blur-md border border-sky-100/60 rounded-2xl shadow-md">
              <h3 className="font-semibold text-gray-700 mb-3">On this page</h3>
              <ul className="space-y-2 text-gray-600">
                {toc.map((h) => (
                  <li
                    key={h}
                    className={`cursor-pointer relative pl-2 transition-all ${
                      activeHeading === h
                        ? "text-sky-600 font-medium before:absolute before:left-0 before:top-[5px] before:h-4 before:w-[3px] before:bg-sky-500 rounded-full"
                        : "hover:text-sky-700 hover:translate-x-1"
                    }`}
                    onClick={() => {
                      const id = h.toLowerCase().replace(/\s+/g, "-");
                      document.getElementById(id)?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }}
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </motion.aside>
        )}

        {/* CONTENT (wrap fixes the width; prose disables its own max-width) */}
        <div className="w-full max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-14 leading-8 text-slate-800 tracking-wide prose prose-sky prose-lg max-w-none"
          >
            {children}
          </motion.div>
        </div>
      </div>
    </>
  );
}
