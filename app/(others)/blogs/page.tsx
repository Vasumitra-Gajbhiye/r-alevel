// "use client";
// //////////////////////////////////////////////////////////////
// // IMPORTANT NOTE: EVERY PUBLIC BLOG FOLDER THAT CONTAINS THE ASSETS, MUST HAVE A MAIN IMAGE CALLED "mainImg.jpg"
// //////////////////////////////////////////////////////////////

// import Image from "next/image";
// import brain from "@/public/blogs/b1-brain.jpg";
// // import brain from `@/public/blogs/`
// import getAllBlogs from "@/app/controller/getAllBlogs";
// import { useEffect, useState } from "react";
// import Skeleton from "@/app/skeleton";
// import { ImageSkeleton } from "@/app/skeleton";


// const FeatureAbout = function ({
//   date,
//   time,
//   author,
// }: {
//   date: string;
//   time: string;
//   author: string;
// }) {
//   return (
//     <div className="flex justify-between text-gray-600 text-xs mt-2">
//       <div className="flex gap-10">
//         <h6>{date}</h6>
//         <h6>{time} min read</h6>
//       </div>
//       <h6>-{author}</h6>
//     </div>
//   );
// };

// const FeatureText = function ({
//   title,
//   description,
// }: {
//   title: string;
//   description: string;
// }) {
//   return (
//     <div>
//       <h3 className="mt-5 text-xl font-bold">{title}</h3>
//       <h5>{description}</h5>
//     </div>
//   );
// };

// const Feature = function () {
//   return (
//     <div className="mt-12 hidden">
//       <h1 className="text-xl font-bold uppercase border-t-4 border-black pt-2">
//         Feature
//       </h1>
//       <div className="grid grid-rows-2  gird-col-3 grid-flow-col gap-4 mt-10">
//         <div className="row-span-2 col-span-2">
//           <Image src={brain} alt="brain img" className="rounded-lg" />
//           <FeatureAbout date="14 Feb" time="5" author="Vasumitra" />
//           <FeatureText
//             title="Why is being gay a bigger tragedy than 9/11"
//             description="A good idiom for kids is Its raining cats and dogs. Kids know what
//               both cats and dogs are from an early. A good idiom for kids is Its
//               raining cats and dogs. Kids know what both cats and dogs are."
//           />
//         </div>

//         <div className="hidden lg:block">
//           <div className="overflow-hidden max-h-56  rounded-lg">
//             <Image src={brain} alt="brain img" className="-translate-y-16" />
//           </div>
//           <FeatureAbout date="14 Feb" time="5" author="Vasumitra" />
//           <FeatureText
//             title="Things of the Internet"
//             description="A good idiom for kids is Its raining cats and dogs. Kids know what
//               both cats and dogs."
//           />
//         </div>

//         <div className="hidden lg:block">
//           <div className="overflow-hidden max-h-56  rounded-lg">
//             <Image src={brain} alt="brain img" className="-translate-y-16" />
//           </div>
//           <FeatureAbout date="14 Feb" time="5" author="Vasumitra" />
//           <FeatureText
//             title="Things of the Internet"
//             description="A good idiom for kids is Its raining cats and dogs. Kids know what
//               both cats and dogs."
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// const LatestPost = function ({
//   tag,
//   title,
//   date,
//   author,
//   id,
// }: {
//   tag: string;
//   title: string;
//   date: string;
//   author: string;
//   id: string;
// }) {
//   return (
//     // <a href={`/blogs/${id}`}>
//     <a href={`/blogs/tb/${id}`}>
//       <div className="flex flex-col items-center gap-1  pb-1">
//         <div className="overflow-hidden rounded-lg w-full max-h-64">
//           {/* <Image src={brain} alt="image" /> */}
//           <img
//             src={`/blogs/${id}/mainImgThumb.jpg`}
//             alt="Hero Image"
//             className="object-cover text-left"
//             style={{
//               height: "250px",
//               width: "100%",
//             }}
//           />
//         </div>
//         <h3 className="uppercase text-sky-600 font-semibold text-sm mt-2">
//           {tag}
//         </h3>
//         <h4 className="font-semibold text-lg text-center">{title}</h4>
//         <h5 className="text-xs">
//           {date} by <span className="text-blue-600">{author}</span>
//           {/* <a
//             className="underline text-blue-600 visited:text-purple-600 active:bg-blue-600 hover:text-gray-700 transition-all"
//             href="/sdfas"
//           >
//             {author}
//           </a> */}
//         </h5>
//       </div>
//     </a>
//   );
// };

// export default function Blogs() {
//   // let allBlogs = [];

//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   // allBlogs = await getAllBlogs();
//   // console.log(Object.prototype.toString.call(allBlogs) == "[object Array]");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const allBlogs = await getAllBlogs();
//         setData(allBlogs);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="px-5 md:px-8 sm:px-16 mt-16  ">
//       <h1 className="text-5xl font-bold text-center">Blogs</h1>
//       <div>
//         <Feature />
//         <div className="my-36">
//           <h1 className="text-xl font-bold uppercase border-t-4 border-black pt-2">
//             Latest
//           </h1>
//           <div
//             className="grid mt-10 gap-x-5 gap-y-20"
//             style={{
//               gridTemplateColumns: "repeat( auto-fit, minmax(350px, 1fr) )",
//               gridAutoRows: "1fr",
//             }}
//           >
//             {loading ?  // 🩶 Skeleton placeholders
//                 [...Array(11)].map((_, i) => (
//                   <div key={i} className="border-b-2 border-gray-200 pb-5">
//                     <ImageSkeleton className="w-full h-64 rounded-lg mb-3" />
//                     <Skeleton className="h-4 w-16 mb-2 rounded-md" />
//                     <Skeleton className="h-5 w-3/4 mb-2 rounded-md" />
//                     <Skeleton className="h-3 w-1/2 rounded-md" />
//                   </div>
//                 )):
            
//             data
//               ? data.map((blog: any, i: number) => {
//                   return (
//                     <div key={i} className="border-b-2 border-gray-300">
//                       <LatestPost
//                         tag={blog.tag}
//                         title={blog.mainTitle}
//                         date={blog.date}
//                         author={blog.author}
//                         id={blog._id}
//                       />
//                     </div>
//                   );
//                 })
//               : null}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

/////////////////////////////////
// export default async function Blogs() {
//   let allBlogs = [];
//   allBlogs = await getAllBlogs();
//   // console.log(Object.prototype.toString.call(allBlogs) == "[object Array]");

//   return (
//     <div className="px-8 sm:px-16 mt-16  ">
//       <h1 className="text-5xl font-bold text-center">Blogs</h1>
//       <div>
//         <Feature />
//         <div className="my-36">
//           <h1 className="text-xl font-bold uppercase border-t-4 border-black pt-2">
//             Latest
//           </h1>
//           <div
//             className="grid mt-10 gap-x-5 gap-y-20"
//             style={{
//               gridTemplateColumns: "repeat( auto-fit, minmax(250px, 1fr) )",
//             }}
//           >
//             {allBlogs
//               ? allBlogs.map((blog: any, i: number) => {
//                   return (
//                     <div key={i}>
//                       <LatestPost
//                         tag={blog.tag}
//                         title={blog.mainTitle}
//                         date={blog.date}
//                         author={blog.author}
//                         id={blog._id}
//                       />
//                     </div>
//                   );
//                 })
//               : null}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
/////////////////////////////////

// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import getAllBlogs from "@/app/controller/getAllBlogs";
// import Skeleton, { ImageSkeleton } from "@/app/skeleton";
// import { motion } from "framer-motion";

// export default function Blogs() {
//   const [data, setData] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const allBlogs = await getAllBlogs();
//         setData(allBlogs);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   const featured = data?.[0];

//   return (
//     <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800">
//       {/* Hero Section */}
//       <section className="text-center py-24 px-6 md:px-12 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-tr from-sky-100 to-transparent blur-2xl"></div>
//         <motion.h1
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-5xl md:text-6xl font-extrabold text-sky-800 relative z-10"
//         >
//           Explore. Learn. Grow.
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.1 }}
//           className="text-gray-600 mt-4 max-w-2xl mx-auto relative z-10"
//         >
//           Insightful articles and guides written by the r/alevel community — made
//           to help you study smarter and live better.
//         </motion.p>
//       </section>

//       {/* Featured Blog */}
//       {featured && (
//         <section className="max-w-6xl mx-auto px-6 md:px-10 mb-24">
//           <motion.a
//             href={`/blogs/tb/${featured._id}`}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             className="block rounded-2xl overflow-hidden relative group shadow-md hover:shadow-xl transition-all duration-500"
//           >
//             <div className="relative h-[400px] md:h-[500px] w-full">
//               <Image
//                 src={`/blogs/${featured._id}/mainImgThumb.jpg`}
//                 alt={featured.mainTitle}
//                 fill
//                 className="object-cover brightness-90 group-hover:brightness-100 transition-all duration-500"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//               <div className="absolute bottom-8 left-8 right-8 text-white">
//                 <p className="uppercase text-sm tracking-wide text-sky-300">
//                   {featured.tag}
//                 </p>
//                 <h2 className="text-3xl md:text-4xl font-bold mt-2">
//                   {featured.mainTitle}
//                 </h2>
//                 <p className="text-sm mt-2 text-gray-200">
//                   {featured.date} • by {featured.author}
//                 </p>
//               </div>
//             </div>
//           </motion.a>
//         </section>
//       )}

//       {/* Latest Blogs */}
//       <section className="max-w-7xl mx-auto px-6 md:px-10 mb-32">
//         <h2 className="text-2xl font-semibold border-l-4 border-sky-600 pl-3 mb-10">
//           Latest Articles
//         </h2>

//         <div
//           className="grid gap-10 sm:gap-12"
//           style={{
//             gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
//           }}
//         >
//           {loading
//             ? [...Array(8)].map((_, i) => (
//                 <div
//                   key={i}
//                   className="rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100 p-4"
//                 >
//                   <ImageSkeleton className="w-full h-56 rounded-lg mb-4" />
//                   <Skeleton className="h-4 w-20 mb-3 rounded-md" />
//                   <Skeleton className="h-5 w-3/4 mb-2 rounded-md" />
//                   <Skeleton className="h-3 w-1/2 rounded-md" />
//                 </div>
//               ))
//             : data?.slice(1).map((blog, i) => (
//                 <motion.a
//                   key={i}
//                   href={`/blogs/tb/${blog._id}`}
//                   whileHover={{ y: -6 }}
//                   transition={{ type: "spring", stiffness: 200, damping: 15 }}
//                   className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100 group"
//                 >
//                   <div className="overflow-hidden relative">
//                     <img
//                       src={`/blogs/${blog._id}/mainImgThumb.jpg`}
//                       alt={blog.mainTitle}
//                       className="object-cover w-full h-56 group-hover:scale-105 transition-all duration-500"
//                     />
//                     <span className="absolute top-3 left-3 bg-sky-100 text-sky-800 px-3 py-1 text-xs font-medium rounded-full">
//                       {blog.tag}
//                     </span>
//                   </div>
//                   <div className="p-5">
//                     <h3 className="text-lg font-semibold text-gray-900 group-hover:text-sky-700 transition-colors">
//                       {blog.mainTitle}
//                     </h3>
//                     <p className="text-xs text-gray-500 mt-2">
//                       {blog.date} • {blog.author}
//                     </p>
//                   </div>
//                 </motion.a>
//               ))}
//         </div>
//       </section>
//     </main>
//   );
// }
// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import getAllBlogs from "@/app/controller/getAllBlogs";
// import Skeleton, { ImageSkeleton } from "@/app/skeleton";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Blogs() {
//   const [data, setData] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const allBlogs = await getAllBlogs();
//         setData(allBlogs);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   // Auto-slide every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % Math.min(data.length, 5)); // up to 5 featured blogs
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [data]);

//   const handleNext = () => setCurrent((prev) => (prev + 1) % Math.min(data.length, 5));
//   const handlePrev = () =>
//     setCurrent((prev) => (prev - 1 + Math.min(data.length, 5)) % Math.min(data.length, 5));

//   const featuredBlogs = data.slice(0, 5);

//   return (
//     <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800">
//       {/* Hero Section */}
//       <section className="text-center py-24 px-6 md:px-12 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-tr from-sky-100 to-transparent blur-2xl"></div>
//         <motion.h1
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-5xl md:text-6xl font-extrabold text-sky-800 relative z-10"
//         >
//           Explore. Learn. Grow.
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.1 }}
//           className="text-gray-600 mt-4 max-w-2xl mx-auto relative z-10"
//         >
//           Insightful articles and guides written by the r/alevel community — made
//           to help you study smarter and live better.
//         </motion.p>
//       </section>

//       {/* Carousel Section */}
//       <section className="max-w-6xl mx-auto px-6 md:px-10 mb-24 relative">
//         <div className="overflow-hidden rounded-2xl relative shadow-md">
//           <AnimatePresence mode="wait">
//             {!loading && featuredBlogs.length > 0 && (
//               <motion.a
//                 key={featuredBlogs[current]._id}
//                 href={`/blogs/tb/${featuredBlogs[current]._id}`}
//                 initial={{ opacity: 0, x: 60 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -60 }}
//                 transition={{ duration: 0.6, ease: "easeInOut" }}
//                 className="block relative group"
//               >
//                 <div className="relative h-[400px] md:h-[500px] w-full">
//                   <Image
//                     src={`/blogs/${featuredBlogs[current]._id}/mainImgThumb.jpg`}
//                     alt={featuredBlogs[current].mainTitle}
//                     fill
//                     className="object-cover brightness-100 group-hover:brightness-105 transition-all duration-500"
//                   />
//                   {/* Softer gradient overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
//                   <div className="absolute bottom-8 left-8 right-8 text-white drop-shadow-lg">
//                     <p className="uppercase text-sm tracking-wide text-sky-200">
//                       {featuredBlogs[current].tag}
//                     </p>
//                     <h2 className="text-3xl md:text-4xl font-bold mt-2">
//                       {featuredBlogs[current].mainTitle}
//                     </h2>
//                     <p className="text-sm mt-2 text-gray-100">
//                       {featuredBlogs[current].date} • by {featuredBlogs[current].author}
//                     </p>
//                   </div>
//                 </div>
//               </motion.a>
//             )}
//           </AnimatePresence>

//           {/* Navigation Arrows */}
//           <button
//             onClick={handlePrev}
//             className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-sky-700 rounded-full p-2 shadow-md transition"
//           >
//             ‹
//           </button>
//           <button
//             onClick={handleNext}
//             className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-sky-700 rounded-full p-2 shadow-md transition"
//           >
//             ›
//           </button>

//           {/* Dots */}
//           <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-2">
//             {featuredBlogs.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => setCurrent(i)}
//                 className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                   i === current ? "bg-sky-600 scale-125" : "bg-sky-200 hover:bg-sky-400"
//                 }`}
//               ></button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Latest Blogs */}
//       <section className="max-w-7xl mx-auto px-6 md:px-10 mb-32">
//         <h2 className="text-2xl font-semibold border-l-4 border-sky-600 pl-3 mb-10">
//           Latest Articles
//         </h2>

//         <div
//           className="grid gap-10 sm:gap-12"
//           style={{
//             gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
//           }}
//         >
//           {loading
//             ? [...Array(8)].map((_, i) => (
//                 <div
//                   key={i}
//                   className="rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100 p-4"
//                 >
//                   <ImageSkeleton className="w-full h-56 rounded-lg mb-4" />
//                   <Skeleton className="h-4 w-20 mb-3 rounded-md" />
//                   <Skeleton className="h-5 w-3/4 mb-2 rounded-md" />
//                   <Skeleton className="h-3 w-1/2 rounded-md" />
//                 </div>
//               ))
//             : data?.slice(5).map((blog, i) => (
//                 <motion.a
//                   key={i}
//                   href={`/blogs/tb/${blog._id}`}
//                   whileHover={{ y: -6 }}
//                   transition={{ type: "spring", stiffness: 200, damping: 15 }}
//                   className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100 group"
//                 >
//                   <div className="overflow-hidden relative">
//                     <img
//                       src={`/blogs/${blog._id}/mainImgThumb.jpg`}
//                       alt={blog.mainTitle}
//                       className="object-cover w-full h-56 group-hover:scale-105 transition-all duration-500"
//                     />
//                     <span className="absolute top-3 left-3 bg-sky-100 text-sky-800 px-3 py-1 text-xs font-medium rounded-full">
//                       {blog.tag}
//                     </span>
//                   </div>
//                   <div className="p-5">
//                     <h3 className="text-lg font-semibold text-gray-900 group-hover:text-sky-700 transition-colors">
//                       {blog.mainTitle}
//                     </h3>
//                     <p className="text-xs text-gray-500 mt-2">
//                       {blog.date} • {blog.author}
//                     </p>
//                   </div>
//                 </motion.a>
//               ))}
//         </div>
//       </section>
//     </main>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import getAllBlogs from "@/app/controller/getAllBlogs";
// import Skeleton, { ImageSkeleton } from "@/app/skeleton";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Blogs() {
//   const [data, setData] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const allBlogs = await getAllBlogs();
//         setData(allBlogs);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % Math.min(data.length, 5));
//     }, 6000);
//     return () => clearInterval(interval);
//   }, [data]);

//   const handleNext = () =>
//     setCurrent((prev) => (prev + 1) % Math.min(data.length, 5));
//   const handlePrev = () =>
//     setCurrent(
//       (prev) => (prev - 1 + Math.min(data.length, 5)) % Math.min(data.length, 5)
//     );

//   const featuredBlogs = data.slice(0, 5);

//   return (
//     <main className="min-h-screen bg-white text-gray-800">
//       {/* Hero Section */}
//       <section className="text-center py-24 px-6 md:px-12 border-b border-gray-200">
//         <motion.h1
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-5xl md:text-6xl font-extrabold tracking-tight text-sky-800"
//         >
//           Explore. Learn. Grow.
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.1 }}
//           className="text-gray-600 mt-4 max-w-2xl mx-auto"
//         >
//           Insightful articles and guides written by the r/alevel community — made
//           to help you study smarter and live better.
//         </motion.p>
//       </section>

//       {/* FEATURED CAROUSEL */}
//       <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 relative">
//         <AnimatePresence mode="wait">
//           {!loading && featuredBlogs.length > 0 && (
//             <motion.div
//               key={featuredBlogs[current]._id}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.6 }}
//               className="grid md:grid-cols-2 gap-10 items-center"
//             >
//               {/* Image */}
//               <a
//                 href={`/blogs/tb/${featuredBlogs[current]._id}`}
//                 className="block rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all"
//               >
//                 <Image
//                   src={`/blogs/${featuredBlogs[current]._id}/mainImgThumb.jpg`}
//                   alt={featuredBlogs[current].mainTitle}
//                   width={700}
//                   height={450}
//                   className="object-cover w-full h-[350px] md:h-[420px] transition-transform duration-700 hover:scale-[1.03]"
//                 />
//               </a>

//               {/* Text beside image */}
//               <div className="px-1">
//                 <p className="uppercase text-sm font-medium tracking-widest text-sky-600 mb-2">
//                   {featuredBlogs[current].tag}
//                 </p>
//                 <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight mb-4">
//                   <a
//                     href={`/blogs/tb/${featuredBlogs[current]._id}`}
//                     className="hover:text-sky-700 transition-colors"
//                   >
//                     {featuredBlogs[current].mainTitle}
//                   </a>
//                 </h2>
//                 <p className="text-gray-600 mb-6 line-clamp-3">
//                   {featuredBlogs[current].subtitle ||
//                     "A featured piece from the r/alevel community exploring something worth reading."}
//                 </p>
//                 <p className="text-sm text-gray-500">
//                   {featuredBlogs[current].date} • by{" "}
//                   <span className="text-sky-700 font-medium">
//                     {featuredBlogs[current].author}
//                   </span>
//                 </p>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Navigation Arrows */}
//         <button
//           onClick={handlePrev}
//           className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border border-gray-200 hover:border-sky-400 text-sky-700 rounded-full w-12 h-12 flex items-center justify-center shadow-sm hover:shadow-md transition"
//         >
//           <span className="text-3xl font-light">‹</span>
//         </button>
//         <button
//           onClick={handleNext}
//           className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border border-gray-200 hover:border-sky-400 text-sky-700 rounded-full w-12 h-12 flex items-center justify-center shadow-sm hover:shadow-md transition"
//         >
//           <span className="text-3xl font-light">›</span>
//         </button>

//         {/* Dots */}
//         <div className="absolute -bottom-8 left-0 right-0 flex justify-center space-x-2">
//           {featuredBlogs.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setCurrent(i)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 i === current ? "bg-sky-700 scale-125" : "bg-gray-300 hover:bg-sky-400"
//               }`}
//             ></button>
//           ))}
//         </div>
//       </section>

//       {/* LATEST ARTICLES */}
//       <section className="max-w-7xl mx-auto px-6 md:px-10 mt-28 mb-32">
//         <h2 className="text-2xl font-semibold border-l-4 border-sky-600 pl-3 mb-10">
//           Latest Articles
//         </h2>

//         <div
//           className="grid gap-10 sm:gap-12"
//           style={{
//             gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
//           }}
//         >
//           {loading
//             ? [...Array(8)].map((_, i) => (
//                 <div
//                   key={i}
//                   className="rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100 p-4"
//                 >
//                   <ImageSkeleton className="w-full h-56 rounded-lg mb-4" />
//                   <Skeleton className="h-4 w-20 mb-3 rounded-md" />
//                   <Skeleton className="h-5 w-3/4 mb-2 rounded-md" />
//                   <Skeleton className="h-3 w-1/2 rounded-md" />
//                 </div>
//               ))
//             : data?.slice(5).map((blog, i) => (
//                 <motion.a
//                   key={i}
//                   href={`/blogs/tb/${blog._id}`}
//                   whileHover={{ y: -6 }}
//                   transition={{ type: "spring", stiffness: 200, damping: 15 }}
//                   className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100 group"
//                 >
//                   <div className="overflow-hidden relative">
//                     <img
//                       src={`/blogs/${blog._id}/mainImgThumb.jpg`}
//                       alt={blog.mainTitle}
//                       className="object-cover w-full h-56 group-hover:scale-105 transition-all duration-500"
//                     />
//                     <span className="absolute top-3 left-3 bg-sky-100 text-sky-800 px-3 py-1 text-xs font-medium rounded-full">
//                       {blog.tag}
//                     </span>
//                   </div>
//                   <div className="p-5">
//                     <h3 className="text-lg font-semibold text-gray-900 group-hover:text-sky-700 transition-colors">
//                       {blog.mainTitle}
//                     </h3>
//                     <p className="text-xs text-gray-500 mt-2">
//                       {blog.date} • {blog.author}
//                     </p>
//                   </div>
//                 </motion.a>
//               ))}
//         </div>
//       </section>
//     </main>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import getAllBlogs from "@/app/controller/getAllBlogs";
// import Skeleton, { ImageSkeleton } from "@/app/skeleton";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Blogs() {
//   const [data, setData] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const allBlogs = await getAllBlogs();
//         setData(allBlogs);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % Math.min(data.length, 5));
//     }, 6000);
//     return () => clearInterval(interval);
//   }, [data]);

//   const handleNext = () =>
//     setCurrent((prev) => (prev + 1) % Math.min(data.length, 5));
//   const handlePrev = () =>
//     setCurrent(
//       (prev) => (prev - 1 + Math.min(data.length, 5)) % Math.min(data.length, 5)
//     );

//   const featuredBlogs = data.slice(0, 5);

//   return (
//     <main className="min-h-screen bg-white text-gray-800">
//      {/* HERO + FEATURED combined gradient section */}
// <section className="relative bg-gradient-to-b from-[#eaf5ff] via-[#f9fbff] to-white">
//   {/* Hero Section */}
//   <div className="text-center py-24 px-6 md:px-12">
//     <motion.h1
//       initial={{ opacity: 0, y: 10 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       className="text-5xl md:text-6xl font-extrabold tracking-tight text-sky-800"
//     >
//       Explore. Learn. Grow.
//     </motion.h1>
//     <motion.p
//       initial={{ opacity: 0, y: 10 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, delay: 0.1 }}
//       className="text-gray-600 mt-4 max-w-2xl mx-auto"
//     >
//       Insightful articles and guides written by the r/alevel community — made
//       to help you study smarter and live better.
//     </motion.p>
//   </div>

//   {/* FEATURED SECTION (VERTICAL) */}
//   <div className="relative py-6 px-6 md:px-10">
//     <div className="max-w-5xl mx-auto text-center">
//       <AnimatePresence mode="wait">
//         {!loading && featuredBlogs.length > 0 && (
//           <motion.div
//             key={featuredBlogs[current]._id}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.6 }}
//           >
//             {/* Image */}
//             <a
//               href={`/blogs/tb/${featuredBlogs[current]._id}`}
//               className="block rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all mx-auto max-w-4xl"
//             >
//               <Image
//                 src={`/blogs/${featuredBlogs[current]._id}/mainImgThumb.jpg`}
//                 alt={featuredBlogs[current].mainTitle}
//                 width={1200}
//                 height={600}
//                 className="object-cover w-full h-[420px] md:h-[520px] transition-transform duration-700 hover:scale-[1.03]"
//               />
//             </a>

//             {/* Text below image */}
//             <div className="mt-10">
//               <p className="uppercase text-sm font-medium tracking-widest text-sky-600 mb-3">
//                 {featuredBlogs[current].tag}
//               </p>
//               <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight mb-4 text-sky-900">
//                 <a
//                   href={`/blogs/tb/${featuredBlogs[current]._id}`}
//                   className="hover:text-sky-700 transition-colors"
//                 >
//                   {featuredBlogs[current].mainTitle}
//                 </a>
//               </h2>
//               <p className="text-gray-600 mb-5 max-w-2xl mx-auto">
//                 {featuredBlogs[current].subtitle ||
//                   "A featured piece from the r/alevel community exploring something worth reading."}
//               </p>
//               <p className="text-sm text-gray-500">
//                 {featuredBlogs[current].date} • by{" "}
//                 <span className="text-sky-700 font-medium">
//                   {featuredBlogs[current].author}
//                 </span>
//               </p>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Navigation Arrows */}
//       <div className="flex justify-center items-center gap-6 mt-10">
//         <button
//           onClick={handlePrev}
//           className="bg-white border border-gray-200 hover:border-sky-400 text-sky-700 rounded-full w-12 h-12 flex items-center justify-center shadow-sm hover:shadow-md transition"
//         >
//           <span className="text-3xl font-light">‹</span>
//         </button>
//         <button
//           onClick={handleNext}
//           className="bg-white border border-gray-200 hover:border-sky-400 text-sky-700 rounded-full w-12 h-12 flex items-center justify-center shadow-sm hover:shadow-md transition"
//         >
//           <span className="text-3xl font-light">›</span>
//         </button>
//       </div>

//       {/* Dots */}
//       <div className="flex justify-center space-x-2 mt-6">
//         {featuredBlogs.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setCurrent(i)}
//             className={`w-3 h-3 rounded-full transition-all duration-300 ${
//               i === current ? "bg-sky-700 scale-125" : "bg-gray-300 hover:bg-sky-400"
//             }`}
//           ></button>
//         ))}
//       </div>
//     </div>
//   </div>
// </section>

//       {/* LATEST ARTICLES */}
//       <section className="max-w-7xl mx-auto px-6 md:px-10 mt-28 mb-32">
//         <h2 className="text-2xl font-semibold border-l-4 border-sky-600 pl-3 mb-10">
//           Latest Articles
//         </h2>

//         <div
//           className="grid gap-10 sm:gap-12"
//           style={{
//             gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
//           }}
//         >
//           {loading
//             ? [...Array(8)].map((_, i) => (
//                 <div
//                   key={i}
//                   className="rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100 p-4"
//                 >
//                   <ImageSkeleton className="w-full h-56 rounded-lg mb-4" />
//                   <Skeleton className="h-4 w-20 mb-3 rounded-md" />
//                   <Skeleton className="h-5 w-3/4 mb-2 rounded-md" />
//                   <Skeleton className="h-3 w-1/2 rounded-md" />
//                 </div>
//               ))
//             : data?.slice(5).map((blog, i) => (
//                 <motion.a
//                   key={i}
//                   href={`/blogs/tb/${blog._id}`}
//                   whileHover={{ y: -6 }}
//                   transition={{ type: "spring", stiffness: 200, damping: 15 }}
//                   className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100 group"
//                 >
//                   <div className="overflow-hidden relative">
//                     <img
//                       src={`/blogs/${blog._id}/mainImgThumb.jpg`}
//                       alt={blog.mainTitle}
//                       className="object-cover w-full h-56 group-hover:scale-105 transition-all duration-500"
//                     />
//                     <span className="absolute top-3 left-3 bg-sky-100 text-sky-800 px-3 py-1 text-xs font-medium rounded-full">
//                       {blog.tag}
//                     </span>
//                   </div>
//                   <div className="p-5">
//                     <h3 className="text-lg font-semibold text-gray-900 group-hover:text-sky-700 transition-colors">
//                       {blog.mainTitle}
//                     </h3>
//                     <p className="text-xs text-gray-500 mt-2">
//                       {blog.date} • {blog.author}
//                     </p>
//                   </div>
//                 </motion.a>
//               ))}
//         </div>
//       </section>
//     </main>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import getAllBlogs from "@/app/controller/getAllBlogs";
// import Skeleton, { ImageSkeleton } from "@/app/skeleton";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Blogs() {
//   const [data, setData] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [current, setCurrent] = useState(0);
//   const [direction, setDirection] = useState(0); // track slide direction

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const allBlogs = await getAllBlogs();
//         setData(allBlogs);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNext();
//     }, 6000);
//     return () => clearInterval(interval);
//   }, [data]);

//   const handleNext = () => {
//     setDirection(1);
//     setCurrent((prev) => (prev + 1) % Math.min(data.length, 5));
//   };

//   const handlePrev = () => {
//     setDirection(-1);
//     setCurrent(
//       (prev) => (prev - 1 + Math.min(data.length, 5)) % Math.min(data.length, 5)
//     );
//   };

//   const featuredBlogs = data.slice(0, 5);

//   const variants = {
//     enter: (direction: number) => ({
//       x: direction > 0 ? 100 : -100,
//       opacity: 0,
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//     },
//     exit: (direction: number) => ({
//       x: direction > 0 ? -100 : 100,
//       opacity: 0,
//     }),
//   };

//   return (
//     <main className="min-h-screen bg-white text-gray-800">
//       {/* HERO + FEATURED combined gradient section */}
//       <section className="relative bg-gradient-to-b from-[#eaf5ff] via-[#f9fbff] to-white">
//         {/* Hero Section */}
//         <div className="text-center py-24 px-6 md:px-12">
//           <motion.h1
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-5xl md:text-6xl font-extrabold tracking-tight text-sky-800"
//           >
//             Explore. Learn. Grow.
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.1 }}
//             className="text-gray-600 mt-4 max-w-2xl mx-auto"
//           >
//             Insightful articles and guides written by the r/alevel community —
//             made to help you study smarter and live better.
//           </motion.p>
//         </div>

//         {/* FEATURED SECTION */}
//         <div className="relative py-10 px-6 md:px-10">
//           <div className="max-w-5xl mx-auto text-center relative">
//             <AnimatePresence mode="wait" custom={direction}>
//               {!loading && featuredBlogs.length > 0 && (
//                 <motion.div
//                   key={featuredBlogs[current]._id}
//                   custom={direction}
//                   variants={variants}
//                   initial="enter"
//                   animate="center"
//                   exit="exit"
//                   transition={{
//                     x: { type: "spring", stiffness: 150, damping: 25 },
//                     opacity: { duration: 0.3 },
//                   }}
//                   className="relative"
//                 >
//                   {/* Image */}
//                   <a
//                     href={`/blogs/tb/${featuredBlogs[current]._id}`}
//                     className="block rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all mx-auto max-w-4xl"
//                   >
//                     <Image
//                       src={`/blogs/${featuredBlogs[current]._id}/mainImgThumb.jpg`}
//                       alt={featuredBlogs[current].mainTitle}
//                       width={1200}
//                       height={600}
//                       className="object-cover w-full h-[420px] md:h-[520px] transition-transform duration-700 hover:scale-[1.03]"
//                     />
//                   </a>

//                   {/* Text below image */}
//                   <div className="mt-10">
//                     <p className="uppercase text-sm font-medium tracking-widest text-sky-600 mb-3">
//                       {featuredBlogs[current].tag}
//                     </p>
//                     <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight mb-4 text-sky-900">
//                       <a
//                         href={`/blogs/tb/${featuredBlogs[current]._id}`}
//                         className="hover:text-sky-700 transition-colors"
//                       >
//                         {featuredBlogs[current].mainTitle}
//                       </a>
//                     </h2>
//                     <p className="text-gray-600 mb-5 max-w-2xl mx-auto">
//                       {featuredBlogs[current].subtitle ||
//                         "A featured piece from the r/alevel community exploring something worth reading."}
//                     </p>
//                     <p className="text-sm text-gray-500">
//                       {featuredBlogs[current].date} • by{" "}
//                       <span className="text-sky-700 font-medium">
//                         {featuredBlogs[current].author}
//                       </span>
//                     </p>
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>

//             {/* SIDE Navigation Arrows */}
//             <button
//               onClick={handlePrev}
//               className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 border border-gray-200 hover:border-sky-400 text-sky-700 rounded-full w-12 h-12 flex items-center justify-center shadow-sm hover:shadow-md transition"
//             >
//               <span className="text-3xl font-light">‹</span>
//             </button>

//             <button
//               onClick={handleNext}
//               className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 border border-gray-200 hover:border-sky-400 text-sky-700 rounded-full w-12 h-12 flex items-center justify-center shadow-sm hover:shadow-md transition"
//             >
//               <span className="text-3xl font-light">›</span>
//             </button>

//             {/* Dots */}
//             <div className="flex justify-center space-x-2 mt-10">
//               {featuredBlogs.map((_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => {
//                     setDirection(i > current ? 1 : -1);
//                     setCurrent(i);
//                   }}
//                   className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                     i === current
//                       ? "bg-sky-700 scale-125"
//                       : "bg-gray-300 hover:bg-sky-400"
//                   }`}
//                 ></button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* LATEST ARTICLES */}
//       <section className="max-w-7xl mx-auto px-6 md:px-10 mt-28 mb-32">
//         <h2 className="text-2xl font-semibold border-l-4 border-sky-600 pl-3 mb-10">
//           Latest Articles
//         </h2>

//         <div
//           className="grid gap-10 sm:gap-12"
//           style={{
//             gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
//           }}
//         >
//           {loading
//             ? [...Array(8)].map((_, i) => (
//                 <div
//                   key={i}
//                   className="rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100 p-4"
//                 >
//                   <ImageSkeleton className="w-full h-56 rounded-lg mb-4" />
//                   <Skeleton className="h-4 w-20 mb-3 rounded-md" />
//                   <Skeleton className="h-5 w-3/4 mb-2 rounded-md" />
//                   <Skeleton className="h-3 w-1/2 rounded-md" />
//                 </div>
//               ))
//             : data?.slice(5).map((blog, i) => (
//                 <motion.a
//                   key={i}
//                   href={`/blogs/tb/${blog._id}`}
//                   whileHover={{ y: -6 }}
//                   transition={{ type: "spring", stiffness: 200, damping: 15 }}
//                   className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100 group"
//                 >
//                   <div className="overflow-hidden relative">
//                     <img
//                       src={`/blogs/${blog._id}/mainImgThumb.jpg`}
//                       alt={blog.mainTitle}
//                       className="object-cover w-full h-56 group-hover:scale-105 transition-all duration-500"
//                     />
//                     <span className="absolute top-3 left-3 bg-sky-100 text-sky-800 px-3 py-1 text-xs font-medium rounded-full">
//                       {blog.tag}
//                     </span>
//                   </div>
//                   <div className="p-5">
//                     <h3 className="text-lg font-semibold text-gray-900 group-hover:text-sky-700 transition-colors">
//                       {blog.mainTitle}
//                     </h3>
//                     <p className="text-xs text-gray-500 mt-2">
//                       {blog.date} • {blog.author}
//                     </p>
//                   </div>
//                 </motion.a>
//               ))}
//         </div>
//       </section>
//     </main>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import getAllBlogs from "@/app/controller/getAllBlogs";
// import Skeleton, { ImageSkeleton } from "@/app/skeleton";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Blogs() {
//   const [data, setData] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [current, setCurrent] = useState(0);
//   const [direction, setDirection] = useState(0);
//   const [isHovered, setIsHovered] = useState(false); // pause on hover

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const allBlogs = await getAllBlogs();
//         setData(allBlogs);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (isHovered || data.length === 0) return;
//     const interval = setInterval(() => handleNext(), 6000);
//     return () => clearInterval(interval);
//   }, [data, isHovered]);

//   const handleNext = () => {
//     setDirection(1);
//     setCurrent((prev) => (prev + 1) % Math.min(data.length, 5));
//   };

//   const handlePrev = () => {
//     setDirection(-1);
//     setCurrent(
//       (prev) => (prev - 1 + Math.min(data.length, 5)) % Math.min(data.length, 5)
//     );
//   };

//   const featuredBlogs = data.slice(0, 5);

//   const variants = {
//     enter: (direction: number) => ({
//       x: direction > 0 ? 100 : -100,
//       opacity: 0,
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//     },
//     exit: (direction: number) => ({
//       x: direction > 0 ? -100 : 100,
//       opacity: 0,
//     }),
//   };

//   return (
//     <main className="min-h-screen bg-white text-gray-800">
//       {/* HERO + FEATURED combined gradient section */}
//       <section className="relative bg-gradient-to-b from-[#eaf5ff] via-[#f9fbff] to-white">
//         {/* Hero Section */}
//         <div className="text-center py-24 px-6 md:px-12">
//           <motion.h1
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-5xl md:text-6xl font-extrabold tracking-tight text-sky-800"
//           >
//             Explore. Learn. Grow.
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.1 }}
//             className="text-gray-600 mt-4 max-w-2xl mx-auto"
//           >
//             Insightful articles and guides written by the r/alevel community —
//             made to help you study smarter and live better.
//           </motion.p>
//         </div>

//         {/* FEATURED SECTION */}
//         <div className="relative py-10 px-6 md:px-10">
//           <div className="max-w-5xl mx-auto text-center relative">
//             <AnimatePresence mode="wait" custom={direction}>
//               {!loading && featuredBlogs.length > 0 && (
//                 <motion.div
//                   key={featuredBlogs[current]._id}
//                   custom={direction}
//                   variants={variants}
//                   initial="enter"
//                   animate="center"
//                   exit="exit"
//                   transition={{
//                     x: { type: "spring", stiffness: 150, damping: 25 },
//                     opacity: { duration: 0.3 },
//                   }}
//                   className="relative"
//                 >
//                   {/* Image + arrows container */}
//                   <div
//                     className="relative inline-block"
//                     onMouseEnter={() => setIsHovered(true)}
//                     onMouseLeave={() => setIsHovered(false)}
//                   >
//                     <a
//                       href={`/blogs/tb/${featuredBlogs[current]._id}`}
//                       className="block rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all mx-auto max-w-4xl"
//                     >
//                       <Image
//                         src={`/blogs/${featuredBlogs[current]._id}/mainImgThumb.jpg`}
//                         alt={featuredBlogs[current].mainTitle}
//                         width={1200}
//                         height={600}
//                         className="object-cover w-full h-[420px] md:h-[520px] transition-transform duration-700 hover:scale-[1.03]"
//                       />
//                     </a>

//                     {/* SIDE Arrows (centered relative to image) */}
//                     <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
//                       <button
//                         onClick={handlePrev}
//                         className="pointer-events-auto bg-white/80 border border-gray-200 hover:border-sky-400 text-sky-700 rounded-full w-12 h-12 flex items-center justify-center shadow-sm hover:shadow-md transition"
//                       >
//                         <span className="text-3xl font-light">‹</span>
//                       </button>
//                       <button
//                         onClick={handleNext}
//                         className="pointer-events-auto bg-white/80 border border-gray-200 hover:border-sky-400 text-sky-700 rounded-full w-12 h-12 flex items-center justify-center shadow-sm hover:shadow-md transition"
//                       >
//                         <span className="text-3xl font-light">›</span>
//                       </button>
//                     </div>
//                   </div>

//                   {/* Text below image */}
//                   <div className="mt-10">
//                     <p className="uppercase text-sm font-medium tracking-widest text-sky-600 mb-3">
//                       {featuredBlogs[current].tag}
//                     </p>
//                     <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight mb-4 text-sky-900">
//                       <a
//                         href={`/blogs/tb/${featuredBlogs[current]._id}`}
//                         className="hover:text-sky-700 transition-colors"
//                       >
//                         {featuredBlogs[current].mainTitle}
//                       </a>
//                     </h2>
//                     <p className="text-gray-600 mb-5 max-w-2xl mx-auto">
//                       {featuredBlogs[current].subtitle ||
//                         "A featured piece from the r/alevel community exploring something worth reading."}
//                     </p>
//                     <p className="text-sm text-gray-500">
//                       {featuredBlogs[current].date} • by{" "}
//                       <span className="text-sky-700 font-medium">
//                         {featuredBlogs[current].author}
//                       </span>
//                     </p>
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>

//             {/* Dots */}
//             <div className="flex justify-center space-x-2 mt-10">
//               {featuredBlogs.map((_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => {
//                     setDirection(i > current ? 1 : -1);
//                     setCurrent(i);
//                   }}
//                   className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                     i === current
//                       ? "bg-sky-700 scale-125"
//                       : "bg-gray-300 hover:bg-sky-400"
//                   }`}
//                 ></button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* LATEST ARTICLES */}
//       <section className="max-w-7xl mx-auto px-6 md:px-10 mt-28 mb-32">
//         <h2 className="text-2xl font-semibold border-l-4 border-sky-600 pl-3 mb-10">
//           Latest Articles
//         </h2>

//         <div
//           className="grid gap-10 sm:gap-12"
//           style={{
//             gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
//           }}
//         >
//           {loading
//             ? [...Array(8)].map((_, i) => (
//                 <div
//                   key={i}
//                   className="rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100 p-4"
//                 >
//                   <ImageSkeleton className="w-full h-56 rounded-lg mb-4" />
//                   <Skeleton className="h-4 w-20 mb-3 rounded-md" />
//                   <Skeleton className="h-5 w-3/4 mb-2 rounded-md" />
//                   <Skeleton className="h-3 w-1/2 rounded-md" />
//                 </div>
//               ))
//             : data?.slice(5).map((blog, i) => (
//                 <motion.a
//                   key={i}
//                   href={`/blogs/tb/${blog._id}`}
//                   whileHover={{ y: -6 }}
//                   transition={{ type: "spring", stiffness: 200, damping: 15 }}
//                   className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100 group"
//                 >
//                   <div className="overflow-hidden relative">
//                     <img
//                       src={`/blogs/${blog._id}/mainImgThumb.jpg`}
//                       alt={blog.mainTitle}
//                       className="object-cover w-full h-56 group-hover:scale-105 transition-all duration-500"
//                     />
//                     <span className="absolute top-3 left-3 bg-sky-100 text-sky-800 px-3 py-1 text-xs font-medium rounded-full">
//                       {blog.tag}
//                     </span>
//                   </div>
//                   <div className="p-5">
//                     <h3 className="text-lg font-semibold text-gray-900 group-hover:text-sky-700 transition-colors">
//                       {blog.mainTitle}
//                     </h3>
//                     <p className="text-xs text-gray-500 mt-2">
//                       {blog.date} • {blog.author}
//                     </p>
//                   </div>
//                 </motion.a>
//               ))}
//         </div>
//       </section>
//     </main>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import getAllBlogs from "@/app/controller/getAllBlogs";
import Skeleton, { ImageSkeleton } from "@/app/skeleton";
import { motion, AnimatePresence } from "framer-motion";

export default function Blogs() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showAll, setShowAll] = useState(false);

  // ✅ STEP 1: Define which blogs go into the carousel
  const featuredIds = [
    // Example: put IDs you want featured here
    "66c09af3885c6d954427fb33",
    "66c09b9d885c6d954427fb55",
    "66c09ba8885c6d954427fb57",
    "66c09b3a885c6d954427fb3f",
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allBlogs = await getAllBlogs();
        setData(allBlogs);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (isHovered || data.length === 0) return;
    const interval = setInterval(() => handleNext(), 4000);
    return () => clearInterval(interval);
  }, [data, isHovered]);

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % featuredBlogs.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrent(
      (prev) => (prev - 1 + featuredBlogs.length) % featuredBlogs.length
    );
  };

  // ✅ STEP 2: Filter featured blogs easily
  const featuredBlogs = data.filter((b) => featuredIds.includes(b._id));

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* HERO + FEATURED combined gradient section */}
      <section className="relative bg-gradient-to-b from-[#eaf5ff] via-[#f9fbff] to-white">
        {/* Hero Section - scaled down */}
        <div className="text-center py-16 px-6 md:px-10">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-sky-800"
          >
            Explore. Learn. Grow.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-gray-600 mt-3 max-w-2xl mx-auto text-base md:text-lg"
          >
            Insightful articles and guides written by the r/alevel community —
            made to help you study smarter and live better.
          </motion.p>
        </div>

        {/* FEATURED SECTION */}
        <div className="relative py-4 px-6 md:px-10">
          <div className="max-w-5xl mx-auto text-center relative">
            <AnimatePresence mode="wait" custom={direction}>
              {!loading && featuredBlogs.length > 0 && (
                <motion.div
                  key={featuredBlogs[current]._id}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 150, damping: 25 },
                    opacity: { duration: 0.3 },
                  }}
                  className="relative"
                >
                  {/* Image + arrows container */}
                  <div
                    className="relative inline-block"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <a
                      href={`/blogs/tb/${featuredBlogs[current]._id}`}
                      className="block rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all mx-auto max-w-4xl"
                    >
                      <Image
                        src={`/blogs/${featuredBlogs[current]._id}/mainImgThumb.jpg`}
                        alt={featuredBlogs[current].mainTitle}
                        width={1200}
                        height={600}
                        className="object-cover w-full h-[400px] md:h-[480px] transition-transform duration-700 hover:scale-[1.03]"
                      />
                    </a>

                    {/* SIDE Arrows */}
                    <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
                      <button
                        onClick={handlePrev}
                        className="pointer-events-auto bg-white/80 border border-gray-200 hover:border-sky-400 text-sky-700 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-sm hover:shadow-md transition"
                      >
                        <span className="text-2xl md:text-3xl font-light">
                          ‹
                        </span>
                      </button>
                      <button
                        onClick={handleNext}
                        className="pointer-events-auto bg-white/80 border border-gray-200 hover:border-sky-400 text-sky-700 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-sm hover:shadow-md transition"
                      >
                        <span className="text-2xl md:text-3xl font-light">
                          ›
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Text below image */}
                  <div className="mt-8">
                    <p className="uppercase text-sm font-medium tracking-widest text-sky-600 mb-2">
                      {featuredBlogs[current].tag}
                    </p>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold leading-tight mb-3 text-sky-900">
                      <a
                        href={`/blogs/tb/${featuredBlogs[current]._id}`}
                        className="hover:text-sky-700 transition-colors"
                      >
                        {featuredBlogs[current].mainTitle}
                      </a>
                    </h2>
                    <p className="text-gray-600 mb-4 max-w-2xl mx-auto text-sm md:text-base">
                      {featuredBlogs[current].subtitle ||
                        "A featured piece from the r/alevel community exploring something worth reading."}
                    </p>
                    <p className="text-sm text-gray-500">
                      {featuredBlogs[current].date} • by{" "}
                      <span className="text-sky-700 font-medium">
                        {featuredBlogs[current].author}
                      </span>
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {featuredBlogs.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-sky-700 scale-125"
                      : "bg-gray-300 hover:bg-sky-400"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LATEST ARTICLES */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 mt-24 mb-32">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-semibold border-l-4 border-sky-600 pl-3">
            Latest Articles
          </h2>
          {!loading && data.length > 8 && (
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="text-sky-700 hover:text-sky-900 font-medium text-sm border border-sky-200 px-4 py-1.5 rounded-full hover:border-sky-400 transition"
            >
              {showAll ? "Show Less" : "View All"}
            </button>
          )}
        </div>

        <div
          className="grid gap-10 sm:gap-12"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          }}
        >
          {loading
            ? [...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100 p-4"
                >
                  <ImageSkeleton className="w-full h-56 rounded-lg mb-4" />
                  <Skeleton className="h-4 w-20 mb-3 rounded-md" />
                  <Skeleton className="h-5 w-3/4 mb-2 rounded-md" />
                  <Skeleton className="h-3 w-1/2 rounded-md" />
                </div>
              ))
            : data
                .filter((b) => !featuredIds.includes(b._id))
                .slice(0, showAll ? data.length : 8)
                .map((blog, i) => (
                  <motion.a
                    key={i}
                    href={`/blogs/tb/${blog._id}`}
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100 group"
                  >
                    <div className="overflow-hidden relative">
                      <img
                        src={`/blogs/${blog._id}/mainImgThumb.jpg`}
                        alt={blog.mainTitle}
                        className="object-cover w-full h-56 group-hover:scale-105 transition-all duration-500"
                      />
                      <span className="absolute top-3 left-3 bg-sky-100 text-sky-800 px-3 py-1 text-xs font-medium rounded-full">
                        {blog.tag}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-sky-700 transition-colors">
                        {blog.mainTitle}
                      </h3>
                      <p className="text-xs text-gray-500 mt-2">
                        {blog.date} • {blog.author}
                      </p>
                    </div>
                  </motion.a>
                ))}
        </div>
      </section>
    </main>
  );
}