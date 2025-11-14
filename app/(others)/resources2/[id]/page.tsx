/*
import getSingleSubject from "@/app/controller/getSingleSubject";
import Image from "next/image";

export default async function SingleResource({ params: { id } }: any) {
  const subject = await getSingleSubject(id);

  return (
    
    // <div>
    //   <img
    //     src={"/res-img/" + subject.title.toLowerCase() + ".jpg"}
    //     alt="image"
    //   />
    //   <h1>{subject.emoji}</h1>
    //   <h1>{subject.title}</h1>
    //   <div className="flex flex-col gap-4">
    //     {subject.links.map((link: any) => {
    //       return (
    //         <a key={link._id} href={link.link} className="text-blue-700">
    //           {link.linkTitle}
    //         </a>
    //       );
    //     })}
    //   </div>
    // </div>
    



    <div className="px-4 md:px-16 font-poppins">
      <div className="w-full h-80 overflow-hidden	rounded-xl mt-4 xs:mt-12 md:mt-20 flex items-center">
        {
        // <img
        //   src={
        //     "/res-img/" +
        //     subject.title.toLowerCase().replace(/ /g, "-") +
        //     ".jpg"
        //   }
        //   alt="image"
        //   className="object-contain -z-10 "
        // /> 
        }
        { 
//         <img
//           src=
// "@/public/res-img/chemistry_comp.jpg"
          
//           alt="image"
//           className="object-contain -z-10 "
//         /> 
        }
      <Image src={"/res-img/" +
            subject.title.toLowerCase().replace(/ /g, "-") +
            "_comp.jpg"} alt="img" width={2000} height={1000} />
      </div>
      <div className="px-3 xs:px-5 md2:px-10 -mt-20 xs:-mt-12 md2:-mt-6">
        <div className="mb-16">
          <h1 className="text-7xl mb-5 ">{subject.emoji}</h1>
          <h1 className="text-6xl font-semibold 	">{subject.title}</h1>
        </div>
        <div className="flex flex-col mb-32">
          {subject.links.map((link: any, index: number) => {
            return (
              <>
                <a
                  target="_blank"
                  className="underline text-xl mb-3 visited:text-gray-500 text-gray-950 hover:bg-gray-100 transition-all px-1 rounded-sm"
                  key={index}
                  href={link.link}
                >
                  {link.linkTitle}
                </a>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
*/

/*
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
// import getSingleSubject from "@/app/controller/getSingleSubject";

export default function SingleResource({ params: { id } }: any) {
  const [subject, setSubject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubject = async () => {
      try {
        // const data = await getSingleSubject(id);
         const apiLink =process.env.NEXT_PUBLIC_GETSINGLESUBJECT;
        const res = await fetch(`${apiLink}/${id}`);
        const sub = await res.json();
        const data = sub.data
        setSubject(data);
      } catch (err) {
        console.error("Error loading subject:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSubject();
  }, [id]);

  // 🔹 SKELETON PLACEHOLDER
  if (loading || !subject) {
    return (
      <div className=" px-16 max-md:px-10 max-md2:px-7 font-poppins ">
        <div className="w-full flex items-center justify-center h-80 bg-gray-200 rounded-xl mt-4 max-xs:mt-12 max-md:mt-20  animate-shimmer">
          <svg className="w-16 h-16 text-gray-100 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
        </svg>
        </div>
        <div className=" -mt-20 xs:-mt-12 md2:-mt-6">
          <div className="mb-16">
            
            <div className="h-10 bg-gray-200 rounded w-2/3 mb-3 mt-24 animate-shimmer"></div>
          </div>
          <div className="flex flex-col mb-32 space-y-4">
            <div className="h-5 bg-gray-200 rounded w-1/2 animate-shimmer"></div>
            <div className="h-5 bg-gray-200 rounded w-3/4 animate-shimmer"></div>
            <div className="h-5 bg-gray-200 rounded w-2/3 animate-shimmer"></div>
            <div className="h-5 bg-gray-200 rounded w-1/3 animate-shimmer"></div>
          </div>
        </div>
      </div>
    );
  }

  // 🔹 ACTUAL CONTENT
  return (
    <div className="px-16 max-md:px-10 max-md2:px-7 font-poppins">
      <div className="w-full h-80 overflow-hidden rounded-3xl  mt-10 max-xs:mt-1 max-md:mt-14 max-md2:mt-6 max-xxs:mt-0 flex items-center">
        {
        // <img
        //   src={
        //     "/res-img/" +
        //     subject.title.toLowerCase().replace(/ /g, "-") +
        //     ".jpg"
        //   }
        //   alt="image"
        //   className="object-contain -z-10 "
        // /> 
        }
        { 
//         <img
//           src=
// "@/public/res-img/chemistry_comp.jpg"
          
//           alt="image"
//           className="object-contain -z-10 "
//         /> 
        }
      <Image className="rounded-2xl" src={"/res-img/" +
            subject.title.toLowerCase().replace(/ /g, "-") +
            "_comp.jpg"} alt="img" width={2000} height={1000} />
      </div>
      <div className="px-3 xs:px-5 md2:px-10 -mt-20 xs:-mt-12 md2:-mt-6">
        <div className="mb-16">
          <h1 className="text-7xl mb-5 ">{subject.emoji}</h1>
          <h1 className="text-6xl max-xs:text-xl max-sm:text-2xl max-md:text-3xl max-lg:text-4xl max-xl:text-5xl font-semibold 	">{subject.title}</h1>
        </div>
        <div className="flex flex-col mb-32">
          {subject.links.map((link: any, index: number) => {
            return (
              <>
                <a
                  target="_blank"
                  className="underline text-xl mb-3 visited:text-gray-500 text-gray-950 hover:bg-gray-100 transition-all px-1 rounded-sm"
                  key={index}
                  href={link.link}
                >
                  {link.linkTitle}
                </a>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}*/

// import { Suspense, useEffect, useState } from "react";

// export default function SingleSubject({ params: { id } }: any) {
//   SubjectDisplay()
//   return (
//     <h1>hi</h1>
//   );
// }

// interface Resource{
//   _id: any;
//   title: string;
//   emoji: string;
//   links: any;
//   id: string;
// }

// export default function SubjectDisplay({ id }:  { id: string }) {
//   console.log(id)

// let subject: Resource | null = null;

//       try {
//   const apiLink =process.env.NEXT_PUBLIC_GETSINGLESUBJECT!;
//   const res = await fetch(`${apiLink}/${id}`);

//   if (!res.ok) {
//     throw new Error(`Failed to fetch certificate with ID ${id}`);
//   }

//   const certi = await res.json();
//   const data: Resource = certi.data;
//   subject = data;
// } catch (err) {
//   console.error("Error loading certificate:", err);
// }
//   return (
//     <h1>hi</h1>
//   );

// }

// export default function Return({ id }:  { id: string }){
//   console.log("hello" + id)
//   return(
//     <h1>hello</h1>
//   )
// }

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

/* -------------------------
   ---- UTILITY COMPONENTS ----
   ------------------------- */
interface IconCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  onClick?: () => void;
  border: string;
}

function IconCard({ icon, title, subtitle, onClick, border }: IconCardProps) {
  return (
    <button
      onClick={onClick}
      className={`group bg-white/70 backdrop-blur-sm border border-[${border}] rounded-2xl p-4 flex flex-col items-start gap-2 shadow-sm hover:shadow-md transition transform hover:-translate-y-1`}
    >
      <div className="bg-[var(--primary-light)] rounded p-2 inline-flex items-center justify-center">
        <div className="text-[var(--primary-accent)] text-xl">{icon}</div>
      </div>
      <div className="text-left">
        <div className="text-sm font-semibold text-[var(--primary-text)]">
          {title}
        </div>
        {subtitle && (
          <div className="text-xs text-gray-500 mt-0.5">{subtitle}</div>
        )}
      </div>
    </button>
  );
}

export default function ChemistryResourcesPage() {
  const { id } = useParams();

  const [resource, setResource] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const [query, setQuery] = useState("");
  const [filterBoard, setFilterBoard] = useState<string | null>(null);
  const [showContribute, setShowContribute] = useState(false);

  const [showAllSyllabus, setShowAllSyllabus] = useState(false);
  const [showAllBooks, setShowAllBooks] = useState(false);
  const [showAllTools, setShowAllTools] = useState(false);
  const [showAllPlaylists, setShowAllPlaylists] = useState(false);
  const [showAllChannels, setShowAllChannels] = useState(false);
  const [showAllNotes, setShowAllNotes] = useState(false);
  const [showAllPdfBooks, setShowAllPdfBooks] = useState(false);
  const [showAllWorksheets, setShowAllWorksheets] = useState(false);

  useEffect(() => {
    async function fetchResource() {
      try {
        const res = await fetch(`/api/resources2/${id}`);
        if (res.status === 404) {
          setNotFound(true);
          setLoading(false);
          return;
        }
        const data = await res.json();
        setResource(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setNotFound(true);
        setLoading(false);
      }
    }
    fetchResource();
  }, [id]);

  // quick-access anchors
  const anchors = [
    { id: "syllabus", label: "Syllabus" },
    { id: "notes", label: "Notes" },
    { id: "books", label: "Books" },
    { id: "videos", label: "Videos" },
    { id: "papers", label: "Past Papers" },
    { id: "tools", label: "Tools" },
    { id: "community", label: "Community" },
  ];

  const combinedResources = useMemo(() => {
    if (!resource) return [];

    const items = [
      ...(resource.syllabus || []).map((s: any) => ({
        type: "Syllabus",
        title: s.title,
        desc: s.board || "",
        link: s.link,
      })),
      ...(resource.notes || []).map((n: any) => ({
        type: "Notes",
        title: n.title,
        desc: n.source,
        link: n.link,
      })),
      ...(resource.books || []).map((b: any) => ({
        type: "Books",
        title: b.title,
        desc: b.edition || "",
        link: b.buy,
      })),
      ...(resource.youtubeChannel || []).map((y: any) => ({
        type: "Videos",
        title: y.channel,
        desc: y.description,
        link: y.channelUrl,
      })),
      ...(resource.youtubePlaylist || []).map((y: any) => ({
        type: "Videos",
        title: y.title,
        desc: y.description,
        link: y.playlistUrl,
      })),
      ...(resource.pastPapers || []).map((p: any) => ({
        type: "Papers",
        title: `${p.board} — ${p.year}`,
        desc: p.board,
        link: p.link,
      })),
      ...(resource.tools || []).map((t: any) => ({
        type: "Tools",
        title: t.name,
        desc: t.description,
        link: t.url,
      })),
    ];

    if (!query) return items;
    const q = query.toLowerCase();
    return items.filter((it) =>
      (it.title + " " + it.desc).toLowerCase().includes(q)
    );
  }, [resource, query]);

  const filteredPapers = useMemo(() => {
    if (!resource) return [];
    return (resource.pastPapers || []).filter((p: any) =>
      filterBoard ? p.board === filterBoard : true
    );
  }, [resource, filterBoard]);
  const showPaperScrollbar = filteredPapers.length > 8;

  /* small helpers */
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  /* visual variants */
  const fade = {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.45 },
  };

  if (loading) return <div className="p-10 text-center">Loading...</div>;

  if (notFound)
    return (
      <div className="p-10 text-center text-red-600">Resource not found.</div>
    );

  //       const theme = {
  //   primary: "#0084d1",          // sky-600
  //   primaryDark: "#0069a8",      // sky-700
  //   primaryAccent: "#0069a8",    // sky-700
  //   primaryLight: "#f0f9ff",     // sky-50
  //   primaryText: "#00598a",      // sky-800
  //   primaryTextStrong: "#024a70",// sky-900

  //   borderLight:"#b8e6fe",       // sky-200
  //   borderLighter:"#dff2fe",     // sky-100
  //   borderLightest:"#f0f9ff",    // sky-50

  //   gradientStart: "#eaf5ff",
  //   gradientMid: "#f9fbff",
  //   gradientEnd: "#ffffff",
  // };

  //       const theme = {
  //   primary: "#0084d1",          // sky-600
  //   primaryDark: "#0069a8",      // sky-700
  //   primaryAccent: "#0069a8",    // sky-700
  //   primaryLight: "#f0f9ff",     // sky-50
  //   primaryText: "#00598a",      // sky-800
  //   primaryTextStrong: "#024a70",// sky-900

  //   borderLight:"#b8e6fe",       // sky-200
  //   borderLighter:"#dff2fe",     // sky-100
  //   borderLightest:"#f0f9ff",    // sky-50

  //   gradientStart: "#eaf5ff",
  //   gradientMid: "#f9fbff",
  //   gradientEnd: "#ffffff",
  // };

  const roseTheme = {
    primary: "#E4546E",
    primaryDark: "#C04056",
    primaryAccent: "#A13648",
    primaryLight: "#FFF0F3",
    primaryText: "#8A2B3B",
    primaryTextStrong: "#611D29",

    borderLight: "#F5C5CF",
    borderLighter: "#FCE4E9",
    borderLightest: "#FFF0F3",

    gradientStart: "#FFE9EE",
    gradientMid: "#FFF9FA",
    gradientEnd: "#ffffff",
  };

  console.log(resource);
  return (
    <main
      className="min-h-screen bg-white text-slate-800"
      style={
        {
          "--primary": resource.theme.primary,
          "--primary-dark": resource.theme.primaryDark,
          "--primary-accent": resource.theme.primaryAccent,
          "--primary-light": resource.theme.primaryLight,
          "--primary-text": resource.theme.primaryText,
          "--primary-text-strong": resource.theme.primaryTextStrong,
          "--border-light": resource.theme.borderLight,
          "--border-lighter": resource.theme.borderLighter,
          "--border-lightest": resource.theme.borderLightest,
          "--gradient-start": resource.theme.gradientStart,
          "--gradient-mid": resource.theme.gradientMid,
          "--gradient-end": resource.theme.gradientEnd,
        } as React.CSSProperties
      }
    >
      {/* HERO */}
      <section className="relative bg-gradient-to-b from-[var(--gradient-start)] via-[var(--gradient-mid)] to-[var(--gradient-end)] pt-16 pb-10 border-b border-[var(--border-lightest]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-center gap-14">
            <div className="flex-shrink-0">
              <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-xl overflow-hidden shadow">
                <Image
                  src={`/subjects/${resource.subject.toLowerCase()}_main_thumb.png`}
                  alt={`${resource.subject} hero`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--primary-text-strong)]">
                {resource.subject}
              </h1>
              <p className="mt-3 text-gray-600 max-w-2xl">
                Your curated hub for A-Level {resource.subject}: syllabus,
                notes, past papers, videos and tools — everything you need in
                one place.
              </p>

              <div className="mt-6 flex gap-3 max-md2:flex-col max-md2:justify-center">
                <button
                  onClick={() => scrollTo("notes")}
                  className="px-4 py-2 bg-[var(--primary)] text-white rounded-full shadow hover:bg-[var(--primary-dark)] transition max-lg:text-sm"
                >
                  Start with Notes
                </button>
                <button
                  onClick={() => scrollTo("papers")}
                  className="px-4 py-2 border border-[var(--border-lighter] text-[var(--primary-accent)] rounded-full shadow-sm hover:shadow transition max-lg:text-sm"
                >
                  Past Papers
                </button>

                <a
                  href="https://forms.gle/hAaHLimxKMB5WN4w9"
                  target="_blank"
                  className="ml-2 px-3 py-2 text-center bg-white border border-[var(--border-lighter] text-[var(--primary-accent)] rounded-full hover:shadow transition max-lg:text-sm"
                >
                  Contribute a resource
                </a>
              </div>
            </div>

            {/* quick search */}
            <div className="mt-4 md:mt-0 md:w-1/3 hidden">
              <div className="relative">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search notes, videos, past papers..."
                  className="w-full px-4 py-3 rounded-2xl border border-[var(--border-lighter] focus:ring-2 focus:ring-[var(--border-light] outline-none"
                />
                <div className="absolute right-3 top-3 text-sm text-gray-400">
                  ⌘K
                </div>
              </div>
              <div className="mt-3 text-xs text-gray-500">
                {query
                  ? `${combinedResources.length} results`
                  : "Search across all resources"}
              </div>
            </div>
          </div>

          {/* QUICK ACCESS / CATEGORY CARDS */}
          <motion.div
            {...fade}
            className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            <IconCard
              icon="📘"
              title="Notes & Summaries"
              subtitle="Unit-by-unit, concise"
              onClick={() => scrollTo("notes")}
              border={`${resource.theme.borderLighter}`}
            />
            <IconCard
              icon="🎥"
              title="Youtube Channels"
              subtitle="Channels & walkthroughs"
              onClick={() => scrollTo("videos")}
              border={`${resource.theme.borderLighter}`}
            />
            <IconCard
              icon="🧾"
              title="Past Papers"
              subtitle="Papers + mark schemes"
              onClick={() => scrollTo("papers")}
              border={`${resource.theme.borderLighter}`}
            />
            <IconCard
              icon="📚"
              title="Books & Textbooks"
              subtitle="Recommended reads"
              onClick={() => scrollTo("books")}
              border={`${resource.theme.borderLighter}`}
            />
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: categories & content (2/3) */}
          <div className="lg:col-span-2 space-y-8">
            {/* SYLLABUS */}

            <motion.section
              {...fade}
              id="syllabus"
              className="bg-white p-6 rounded-2xl shadow-sm border border-[var(--border-lightest]"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold text-[var(--primary-text-strong)]">
                    Syllabus & Specification
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Official specifications & exam board notes.
                  </p>
                </div>

                <button
                  onClick={() => setShowAllSyllabus((prev) => !prev)}
                  className={`text-sm text-[var(--primary-accent)] underline ${
                    resource.syllabus.length > 6 ? "visible" : "hidden"
                  }`}
                >
                  {showAllSyllabus ? "View less" : "View all"}
                </button>
              </div>

              {/* Animated wrapper */}
              <motion.div
                initial={false}
                animate={showAllSyllabus ? "expanded" : "collapsed"}
                variants={{
                  expanded: { height: "auto", opacity: 1 },
                  collapsed: { height: "auto", opacity: 1 }, // container remains auto
                }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="overflow-hidden mt-4"
              >
                <motion.div
                  layout
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="grid gap-3"
                >
                  {(showAllSyllabus
                    ? resource.syllabus
                    : resource.syllabus.slice(0, 6)
                  ).map((s: any) => (
                    <motion.a
                      key={s.title}
                      href={s.link}
                      target="_blank"
                      layout
                      className="flex items-center gap-3 p-3 border rounded-lg hover:shadow-sm transition"
                    >
                      <div className="w-10 h-10 rounded-md bg-[var(--primary-light)] flex items-center justify-center text-[var(--primary-accent)]">
                        <Image
                          src={`/syllabus_icons/${s.board
                            .replace("/", "")
                            .toLowerCase()}.png`}
                          alt={`${s.board} logo`}
                          width={25}
                          height={25}
                        />
                      </div>

                      <div>
                        <div className="font-medium text-[var(--primary-text)]">
                          {s.title}
                        </div>
                        <div className="text-xs text-gray-500">{s.board}</div>
                      </div>
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>
            </motion.section>

            {/* NOTES */}
            {/* <motion.section
              {...fade}
              id="notes"
              className="bg-white p-6 rounded-2xl shadow-sm border border-[var(--border-lightest]"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-[var(--primary-text-strong)]">
                    Notes & Summaries
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Concise unit notes, printable summaries and cheat sheets.
                  </p>
                </div>

                {resource.notes.length > 6 && (
                  <button
                    onClick={() => setShowAllNotes((prev) => !prev)}
                    className="text-sm text-[var(--primary-accent)] underline"
                  >
                    {showAllNotes ? "View less" : "View all"}
                  </button>
                )}
              </div>


              <div className="mt-4 grid sm:grid-cols-1 gap-3">
                {(showAllNotes
                  ? resource.notes
                  : resource.notes.slice(0, 6)
                ).map((n: any, idx: number) => (
                  <motion.a
                    key={idx}
                    href={n.link}
                    target="_blank"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.25,
                      delay: showAllNotes ? idx * 0.02 : 0,
                    }}
                    className="p-3 border rounded-lg hover:shadow-md transition flex gap-3 bg-white"
                  >
                    <div className="w-10 h-10 rounded-md bg-[var(--primary-light)] flex items-center justify-center text-[var(--primary-accent)] text-sm">
                      📝
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-[var(--primary-text)] leading-snug truncate">
                        {n.title}
                      </div>

                      <div className="mt-1 flex flex-wrap items-center gap-2 text-xs">
                        {n.source && (
                          <span className="text-gray-500 whitespace-nowrap">
                            {n.source}
                          </span>
                        )}

                        {n.tags?.length > 0 && (
                          <div className="flex flex-wrap gap-1">
                            {n.tags
                              .slice(0, 4)
                              .map((tag: string, i: number) => (
                                <span
                                  key={i}
                                  className="px-2 py-[2px] rounded-full bg-[var(--primary-light)] text-[var(--primary-accent)] text-[10px] whitespace-nowrap"
                                >
                                  {tag}
                                </span>
                              ))}
                            {n.tags.length > 4 && (
                              <span className="px-2 py-[2px] rounded-full bg-[var(--primary-light)] text-[var(--primary-accent)] text-[10px]">
                                +{n.tags.length - 4}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.section> */}

            <motion.section
              {...fade}
              id="notes"
              className="bg-white p-6 rounded-2xl shadow-sm border border-[var(--border-lightest)]"
            >
              <div className="flex items-start justify-between flex-wrap gap-2">
                <div>
                  <h2 className="text-xl font-semibold text-[var(--primary-text-strong)]">
                    Notes & Summaries
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Concise unit notes, printable summaries and cheat sheets.
                  </p>
                </div>

                {resource.notes.length > 8 && (
                  <button
                    onClick={() => setShowAllNotes((prev) => !prev)}
                    className="text-sm text-[var(--primary-accent)] underline self-center"
                  >
                    {showAllNotes ? "View less" : "View all"}
                  </button>
                )}
              </div>

              {/* Responsive list layout like syllabus cards */}
              <div className="mt-4 flex flex-col divide-y divide-[var(--border-lightest)]">
                {(showAllNotes
                  ? resource.notes
                  : resource.notes.slice(0, 8)
                ).map((n: any, idx: number) => (
                  <motion.a
                    key={idx}
                    href={n.link}
                    target="_blank"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.25,
                      delay: showAllNotes ? idx * 0.02 : 0,
                    }}
                    className="flex items-start gap-3 py-3 px-1 hover:bg-[var(--primary-lightest)] rounded-lg transition-all duration-200"
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0 w-10 h-10 rounded-md bg-[var(--primary-light)] flex items-center justify-center text-[var(--primary-accent)] text-sm">
                      📝
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-[var(--primary-text)] leading-snug truncate max-sm:text-sm">
                        {n.title}
                      </div>

                      <div className="mt-1 flex flex-wrap items-center gap-1 text-xs">
                        {/* Source */}
                        {n.source && (
                          <span className="text-gray-500 whitespace-nowrap">
                            {n.source}
                          </span>
                        )}

                        {/* Tags */}
                        {n.tags?.length > 0 && (
                          <div className="flex flex-wrap gap-1">
                            {n.tags
                              .slice(0, 3)
                              .map((tag: string, i: number) => (
                                <span
                                  key={i}
                                  className="px-2 py-[2px] rounded-full bg-[var(--primary-light)] text-[var(--primary-accent)] text-[10px] whitespace-nowrap"
                                >
                                  {tag}
                                </span>
                              ))}
                            {n.tags.length > 3 && (
                              <span className="px-2 py-[2px] rounded-full bg-[var(--primary-light)] text-[var(--primary-accent)] text-[10px]">
                                +{n.tags.length - 3}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.section>

            {/* YOUTUBE CHANNELS */}
            <motion.section
              {...fade}
              id="videos"
              className="bg-white p-6 rounded-2xl shadow-sm border border-[var(--border-lightest]"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold text-[var(--primary-text-strong)]">
                    YouTube Channels
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Walkthroughs, concept explainers, and past-paper guides.
                  </p>
                </div>

                {resource.youtubeChannel.length > 6 && (
                  <button
                    onClick={() => setShowAllChannels((prev) => !prev)}
                    className="text-sm text-[var(--primary-accent)] underline"
                  >
                    {showAllChannels ? "View less" : "View all"}
                  </button>
                )}
              </div>

              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                {(showAllChannels
                  ? resource.youtubeChannel
                  : resource.youtubeChannel.slice(0, 6)
                ).map((y: any, idx: number) => (
                  <motion.a
                    key={y.channel}
                    href={y.channelUrl}
                    target="_blank"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.25,
                      delay: showAllChannels ? idx * 0.02 : 0,
                    }}
                    className="p-3 border rounded-lg hover:shadow-md transition flex gap-3 items-center bg-white"
                  >
                    <div className="w-12 h-12 rounded-full relative overflow-hidden bg-gray-100">
                      <Image
                        src={y.thumbnail}
                        alt={y.channel}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1 text-left">
                      <div className="font-medium text-[var(--primary-text)]">
                        {y.channel}
                      </div>
                      {y.description && (
                        <div className="text-xs text-gray-500 mt-1 line-clamp-2">
                          {y.description}
                        </div>
                      )}
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.section>

            {/* VIDEOS — PLAYLISTS (NEW) */}
            <motion.section
              {...fade}
              id="yt-playlists"
              className="bg-white p-6 rounded-2xl shadow-sm border border-[var(--border-lightest]"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold text-[var(--primary-text-strong)]">
                    Useful Playlists & Videos
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Curated topic modules, revision series, and past-paper
                    walkthrough sets.
                  </p>
                </div>

                {resource.youtubePlaylist?.length > 6 && (
                  <button
                    onClick={() => setShowAllPlaylists((prev) => !prev)}
                    className="text-sm text-[var(--primary-accent)] underline"
                  >
                    {showAllPlaylists ? "View less" : "View all"}
                  </button>
                )}
              </div>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {(showAllPlaylists
                  ? resource.youtubePlaylist
                  : resource.youtubePlaylist.slice(0, 6)
                ).map((p: any, idx: number) => {
                  const href = p.playlistUrl;
                  const title = p.title;
                  const description = p.description || "";
                  const thumb = p.thumbnail || "/playlist_thumb/fallback.png";
                  const type = p.type;

                  return (
                    <motion.a
                      key={title + href}
                      href={href}
                      target="_blank"
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.25,
                        delay: showAllPlaylists ? idx * 0.02 : 0,
                      }}
                      className="group rounded-2xl border border-[var(--border-lightest] bg-white overflow-hidden shadow-sm hover:shadow-md transition transform hover:-translate-y-0.5"
                    >
                      {/* Thumbnail */}
                      <div className="relative w-full aspect-video bg-gray-100">
                        <Image
                          src={thumb}
                          alt={title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
                        <div className="absolute top-2 left-2 text-[10px] uppercase tracking-wide bg-white/90 backdrop-blur px-2 py-1 rounded-md">
                          {type}
                        </div>
                      </div>

                      {/* Body */}
                      <div className="p-4">
                        <div className="text-sm font-semibold text-[var(--primary-text-strong)] line-clamp-2">
                          {title}
                        </div>

                        {description && (
                          <p className="mt-1 text-xs text-gray-600 line-clamp-3">
                            {description}
                          </p>
                        )}
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </motion.section>

            {/* WORKSHEETS & TOPICALS */}
            {(resource.worksheets?.length || 0) > 0 && (
              <motion.section
                {...fade}
                id="worksheets"
                className="bg-white p-6 rounded-2xl shadow-sm border border-[var(--border-lightest]"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-[var(--primary-text-strong)]">
                      Worksheets & Topical Past Papers
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      Topic-focused practice sets with answers/mark schemes
                      where available.
                    </p>
                  </div>

                  {resource.worksheets.length > 9 && (
                    <button
                      onClick={() => setShowAllWorksheets((s) => !s)}
                      className="text-sm text-[var(--primary-accent)] underline"
                    >
                      {showAllWorksheets ? "View less" : "View all"}
                    </button>
                  )}
                </div>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {(showAllWorksheets
                    ? resource.worksheets
                    : resource.worksheets.slice(0, 9)
                  ).map((w: any, idx: number) => (
                    <motion.a
                      key={w.title + idx}
                      href={w.link}
                      target="_blank"
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.25,
                        delay: showAllWorksheets ? idx * 0.02 : 0,
                      }}
                      className="rounded-xl border border-[var(--border-lightest] bg-white hover:shadow-md transition p-4"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-md bg-[var(--primary-light)] flex items-center justify-center">
                          📄
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-[var(--primary-text-strong)] line-clamp-2">
                            {w.title}
                          </div>
                          <div className="mt-1 flex flex-wrap gap-1.5 text-[10px]">
                            {w.board && (
                              <span className="px-2 py-0.5 rounded-full border border-[var(--border-lighter)] text-gray-600">
                                {w.board}
                              </span>
                            )}
                            {w.topic && (
                              <span className="px-2 py-0.5 rounded-full bg-[var(--gradient-start)] text-[var(--primary-text)] border border-[var(--border-lighter)]">
                                {w.topic}
                              </span>
                            )}
                            {w.difficulty && (
                              <span className="px-2 py-0.5 rounded-full bg-[var(--border-lightest)] text-gray-600">
                                {w.difficulty}
                              </span>
                            )}
                            {w.yearRange && (
                              <span className="px-2 py-0.5 rounded-full border border-[var(--border-lighter)] text-gray-600">
                                {w.yearRange}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.section>
            )}

            {/* PAST PAPERS */}
            <motion.section
              {...fade}
              id="papers"
              className="bg-white p-6 rounded-2xl shadow-sm border border-[var(--border-lightest]"
            >
              <div className="flex items-center justify-between max-md:flex-col max-md:gap-5 max-md:items-start">
                <div>
                  <h2 className="text-xl font-semibold text-[var(--primary-text-strong)]">
                    Past Papers & Mark Schemes
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Filter by board and download individual papers.
                  </p>
                </div>

                <div className="flex items-center gap-2 ">
                  <select
                    value={filterBoard || ""}
                    onChange={(e) => setFilterBoard(e.target.value || null)}
                    className="px-3 py-2 border rounded-full max-md:bg-[var(--primary)] max-md:text-white"
                  >
                    <option value="">All boards</option>
                    <option value="CAIE">CAIE</option>
                    <option value="Edexcel">Edexcel</option>
                    <option value="AQA">AQA</option>
                    <option value="WJEC/Eduqas">WJEC/Eduqas</option>
                  </select>
                  <button
                    onClick={() => {
                      alert(
                        "Sorry! Download all button is still in development"
                      );
                    }}
                    className="px-3 py-2 bg-[var(--primary)] text-white text-sm rounded-full max-md:hidden"
                  >
                    Download all
                  </button>
                </div>
              </div>

              {/* Scroll Container */}
              <div
                className={`mt-4 overflow-x-auto ${
                  showPaperScrollbar ? "max-h-[25rem] overflow-y-auto" : ""
                }`}
              >
                <table className="w-full text-sm border-collapse">
                  <thead className="sticky top-0 bg-white z-10 border-b">
                    <tr className="text-left text-xs text-gray-500">
                      <th className="py-2">Year</th>
                      <th>Board</th>
                      <th>Download</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredPapers.map((p: any) => (
                      <tr
                        key={`${p.board}-${p.year}`}
                        className="border-b last:border-b-0"
                      >
                        <td className="py-3">{p.year}</td>
                        <td>{p.board}</td>
                        <td>
                          <a
                            className="text-[var(--primary-accent)] underline"
                            target="_blank"
                            href={p.link}
                          >
                            Download ZIP
                          </a>
                        </td>
                      </tr>
                    ))}

                    {filteredPapers.length === 0 && (
                      <tr>
                        <td colSpan={3} className="py-3 text-gray-500">
                          No papers found for this board
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </motion.section>

            {/* FREE PDF TEXTBOOKS */}
            {(resource.pdfBooks?.length || 0) > 0 && (
              <motion.section
                {...fade}
                id="pdf-books"
                className="bg-white p-6 rounded-2xl shadow-sm border border-[var(--border-lightest]"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-[var(--primary-text-strong)]">
                      Free PDF Textbooks
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      Open-access/author-permitted PDFs for quick reference.
                    </p>
                  </div>

                  {resource.pdfBooks.length > 8 && (
                    <button
                      onClick={() => setShowAllPdfBooks((s) => !s)}
                      className="text-sm text-[var(--primary-accent)] underline"
                    >
                      {showAllPdfBooks ? "View less" : "View all"}
                    </button>
                  )}
                </div>

                <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {(showAllPdfBooks
                    ? resource.pdfBooks
                    : resource.pdfBooks.slice(0, 8)
                  ).map((b: any, idx: number) => (
                    <motion.a
                      key={b.title + idx}
                      href={b.link}
                      target="_blank"
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.25,
                        delay: showAllPdfBooks ? idx * 0.02 : 0,
                      }}
                      className="border rounded-xl p-3 hover:shadow-md transition bg-white group"
                    >
                      <div className="w-full aspect-[3/4] relative rounded overflow-hidden bg-gray-100">
                        <Image
                          src={b.cover || "/books_pdf_thumb/fallback.png"}
                          alt={b.title}
                          fill
                          className="object-contain"
                        />
                        <div className="absolute bottom-2 left-2 text-[10px] uppercase tracking-wide bg-white/90 backdrop-blur px-2 py-1 rounded">
                          PDF
                        </div>
                      </div>
                      <div className="mt-2 text-sm font-medium text-[var(--primary-text)] line-clamp-2 group-hover:underline">
                        {b.title}
                      </div>
                      {b.source && (
                        <div className="text-[10px] mt-1 text-gray-500">
                          Source: {b.source}
                        </div>
                      )}
                    </motion.a>
                  ))}
                </div>
              </motion.section>
            )}

            {/* BOOKS */}

            <motion.section
              {...fade}
              id="books"
              className="bg-white p-6 rounded-2xl shadow-sm border border-[var(--border-lightest]"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-[var(--primary-text-strong)]">
                    Books & Textbooks
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Recommended references & editions.
                  </p>
                </div>

                {resource.books.length > 6 && (
                  <button
                    onClick={() => setShowAllBooks((prev) => !prev)}
                    className="text-sm text-[var(--primary-accent)] underline"
                  >
                    {showAllBooks ? "View less" : "View all"}
                  </button>
                )}
              </div>

              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {(showAllBooks
                  ? resource.books
                  : resource.books.slice(0, 6)
                ).map((b: any, idx: number) => (
                  <motion.div
                    key={b.title}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.25,
                      delay: showAllBooks ? idx * 0.02 : 0,
                    }} // subtle stagger when expanding
                    className="border rounded-lg p-3 flex flex-col items-start gap-3 hover:shadow transition bg-white"
                  >
                    <a
                      className="text-xs text-[var(--primary-accent)] underline"
                      target="_blank"
                      href={b.buy}
                    >
                      <div className="w-full h-56 relative rounded overflow-hidden bg-gray-100">
                        <Image
                          src={b.cover}
                          alt={b.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="text-sm font-medium text-[var(--primary-text)] line-clamp-2">
                        {b.title}
                      </div>
                      Buy / Details
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* TOOLS */}
            <motion.section
              {...fade}
              id="tools"
              className="bg-white p-6 rounded-2xl shadow-sm border border-[var(--border-lightest]"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-[var(--primary-text-strong)]">
                    Tools & Utilities
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Useful calculators, references, and quick-access utilities.
                  </p>
                </div>

                {resource.tools.length > 6 && (
                  <button
                    onClick={() => setShowAllTools((prev) => !prev)}
                    className="text-sm text-[var(--primary-accent)] underline"
                  >
                    {showAllTools ? "View less" : "View all"}
                  </button>
                )}
              </div>

              <div className="mt-4 grid grid-cols-1 gap-3">
                {(showAllTools
                  ? resource.tools
                  : resource.tools.slice(0, 6)
                ).map((t: any, idx: number) => (
                  <motion.a
                    key={t.name}
                    href={t.url}
                    target="_blank"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.25,
                      delay: showAllTools ? idx * 0.02 : 0,
                    }} // subtle stagger when expanding
                    className="p-4 pr-2 border rounded-lg hover:shadow-md transition flex justify-center items-start gap-3 bg-white"
                  >
                    <div className="w-10 h-10 rounded bg-[var(--primary-light)] flex items-center justify-center text-xl">
                      🔧
                    </div>

                    <div className="flex-1">
                      <div className="text-sm font-semibold text-[var(--primary-text)]">
                        {t.name}
                      </div>

                      {t.description && (
                        <p className="text-xs text-gray-500 mt-1 leading-snug line-clamp-2">
                          {t.description}
                        </p>
                      )}
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.section>

            {/* COMMUNITY */}
            <motion.section
              {...fade}
              id="community"
              className="bg-white p-6 rounded-2xl shadow-sm border border-[var(--border-lightest]"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-semibold text-[var(--primary-text-strong)]">
                    Community Help
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Discord, subreddit and places to ask for help.
                  </p>
                </div>
                <div>
                  <a
                    className="text-[var(--primary-accent)] underline"
                    href="https://discord.gg/vS7eTFKZfD"
                  >
                    Join Discord
                  </a>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 border rounded-lg">
                  <a href="https://discord.gg/vS7eTFKZfD" target="_blank">
                    <div className="text-sm font-medium text-[var(--primary-text)]">
                      r/alevel Discord
                    </div>
                    <div className="text-xs text-gray-500">
                      Active channels for Chemistry Q&A
                    </div>
                  </a>
                </div>

                <div className="p-3 border rounded-lg">
                  <a href="https://www.reddit.com/r/alevel/" target="_blank">
                    <div className="text-sm font-medium text-[var(--primary-text)]">
                      Ask r/alevel Reddit
                    </div>
                    <div className="text-xs text-gray-500">
                      Post a question — volunteers respond
                    </div>
                  </a>
                </div>
              </div>
            </motion.section>
          </div>

          {/* Right column: inline search results & quick list (1/3) */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-4">
              <div className="p-4 bg-white border rounded-2xl shadow-sm">
                <div className="text-xs text-gray-500">
                  Quick search results
                </div>
                <div className="mt-3 space-y-2">
                  {combinedResources.slice(0, 6).map((r, i) => (
                    <a
                      key={i}
                      href={r.link}
                      target="_blank"
                      className="block text-sm text-[var(--primary-text)] hover:underline"
                    >
                      {r.title}{" "}
                      <span className="text-xs text-gray-400">— {r.type}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-white border rounded-2xl shadow-sm">
                <div className="text-xs text-gray-500">Top picks</div>
                <div className="mt-3">
                  <a
                    className="block text-sm text-[var(--primary-text)] hover:underline"
                    target="_blank"
                    href={resource.notes[0]?.link}
                  >
                    {resource.notes[0]?.title}
                  </a>
                  <a
                    className="block text-sm text-[var(--primary-text)] hover:underline mt-2"
                    target="_blank"
                    href={resource.books[0]?.buy}
                  >
                    {resource.books[0]?.title}
                  </a>
                </div>
              </div>

              <div className="p-4 bg-white border rounded-2xl shadow-sm text-center flex flex-col ">
                <div className="text-sm text-gray-700">Want to contribute?</div>
                <a
                  href="https://forms.gle/hAaHLimxKMB5WN4w9"
                  target="_blank"
                  className="mt-3 px-3 py-2 bg-[var(--primary)] text-white rounded-full"
                >
                  Submit a resource
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Contribute Modal (simple) */}
      {showContribute && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setShowContribute(false)}
          />
          <motion.div
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-xl w-full bg-white rounded-2xl p-6 shadow-lg z-10"
          >
            <h3 className="text-lg font-semibold text-[var(--primary-text-strong)]">
              Contribute a Resource
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Share a helpful link or upload notes to help other students.
            </p>

            <form className="mt-4 grid gap-3">
              <input className="px-3 py-2 border rounded" placeholder="Title" />
              <input className="px-3 py-2 border rounded" placeholder="URL" />
              <select className="px-3 py-2 border rounded">
                <option>Notes</option>
                <option>Video</option>
                <option>Past paper</option>
                <option>Book</option>
                <option>Tool</option>
              </select>
              <div className="flex justify-end gap-2 mt-2">
                <button
                  type="button"
                  onClick={() => setShowContribute(false)}
                  className="px-3 py-2 border rounded"
                >
                  Cancel
                </button>
                <a
                  href="https://forms.gle/hAaHLimxKMB5WN4w9"
                  target="_blank"
                  className="px-3 py-2 bg-[var(--primary)] text-white rounded"
                >
                  Submit
                </a>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </main>
  );
}
