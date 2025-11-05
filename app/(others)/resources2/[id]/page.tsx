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

import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import Link from "next/link";


/* -------------------------
   ---- UTILITY COMPONENTS ----
   ------------------------- */
interface IconCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  onClick?: () => void;
}

function IconCard({ icon, title, subtitle, onClick }: IconCardProps) {
  return (
    <button
      onClick={onClick}
      className="group bg-white/70 backdrop-blur-sm border border-sky-100 rounded-2xl p-4 flex flex-col items-start gap-2 shadow-sm hover:shadow-md transition transform hover:-translate-y-1"
    >
      <div className="bg-sky-50 rounded p-2 inline-flex items-center justify-center">
        <div className="text-sky-700 text-xl">{icon}</div>
      </div>
      <div className="text-left">
        <div className="text-sm font-semibold text-sky-800">{title}</div>
        {subtitle && <div className="text-xs text-gray-500 mt-0.5">{subtitle}</div>}
      </div>
    </button>
  );
}

export default function ChemistryResourcesPage({ params }: { params: { id: string } }) {
  const { id } = params;

  const [resource, setResource] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

    const [query, setQuery] = useState("");
    const [filterBoard, setFilterBoard] = useState<string | null>(null);
    const [showContribute, setShowContribute] = useState(false);


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
    ...(resource.syllabus || []).map((s:any) => ({ type: "Syllabus", title: s.title, desc: s.board || "", link: s.link })),
    ...(resource.notes || []).map((n:any) => ({ type: "Notes", title: n.title, desc: n.source, link: n.link })),
    ...(resource.books || []).map((b:any) => ({ type: "Books", title: b.title, desc: b.edition || "", link: b.buy })),
    ...(resource.youtube || []).map((y:any) => ({ type: "Videos", title: y.channel, desc: y.description, link: y.channelUrl })),
    ...(resource.pastPapers || []).map((p:any) => ({ type: "Papers", title: `${p.board} — ${p.year}`, desc: p.board, link: p.link })),
    ...(resource.tools || []).map((t:any) => ({ type: "Tools", title: t.name, desc: "", link: t.url })),
  ];

  if (!query) return items;
  const q = query.toLowerCase();
  return items.filter((it) => (it.title + " " + it.desc).toLowerCase().includes(q));
}, [resource, query]);

  
const filteredPapers = useMemo(() => {
  if (!resource) return [];
  return (resource.pastPapers || []).filter((p:any) =>
    filterBoard ? p.board === filterBoard : true
  );
}, [resource, filterBoard]);

  
    /* small helpers */
    const scrollTo = (id:string) => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
  
    /* visual variants */
    const fade = { initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.45 } };

 if (loading) return <div className="p-10 text-center">Loading...</div>;

  if (notFound)
    return (
      <div className="p-10 text-center text-red-600">
        Resource not found.
      </div>
    );

    console.log(resource)
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* HERO */}
      <section className="relative bg-gradient-to-b from-[#eaf5ff] via-[#f9fbff] to-white pt-16 pb-10 border-b border-sky-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-center gap-14">
            <div className="flex-shrink-0">
              <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-xl overflow-hidden shadow">
                <Image src="/subjects/chem_new_main_thumb.png" alt="Chemistry hero" fill className="object-cover" />
              </div>
            </div>

            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-extrabold text-sky-900">Chemistry</h1>
              <p className="mt-3 text-gray-600 max-w-2xl">
                Your curated hub for A-Level Chemistry: syllabus, notes, past papers, videos and tools —
                everything you need in one place.
              </p>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => scrollTo("notes")}
                  className="px-4 py-2 bg-sky-600 text-white rounded-full shadow hover:bg-sky-700 transition"
                >
                  Start with Notes
                </button>
                <button
                  onClick={() => scrollTo("papers")}
                  className="px-4 py-2 border border-sky-100 text-sky-700 rounded-full shadow-sm hover:shadow transition"
                >
                  Past Papers
                </button>

                <button
                  onClick={() => setShowContribute(true)}
                  className="ml-2 px-3 py-2 bg-white border border-sky-100 text-sky-700 rounded-full hover:shadow transition"
                >
                  Contribute a resource
                </button>
              </div>
            </div>

            {/* quick search */}
            <div className="mt-4 md:mt-0 md:w-1/3 hidden">
              <div className="relative">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search notes, videos, past papers..."
                  className="w-full px-4 py-3 rounded-2xl border border-sky-100 focus:ring-2 focus:ring-sky-200 outline-none"
                />
                <div className="absolute right-3 top-3 text-sm text-gray-400">⌘K</div>
              </div>
              <div className="mt-3 text-xs text-gray-500">
                {query ? `${combinedResources.length} results` : "Search across all resources"}
              </div>
            </div>
          </div>

          {/* QUICK ACCESS / CATEGORY CARDS */}
          <motion.div {...fade} className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <IconCard
              icon="📘"
              title="Notes & Summaries"
              subtitle="Unit-by-unit, concise"
              onClick={() => scrollTo("notes")}
            />
            <IconCard icon="🎥" title="Video Playlists" subtitle="Channels & walkthroughs" onClick={() => scrollTo("videos")} />
            <IconCard icon="🧾" title="Past Papers" subtitle="Papers + mark schemes" onClick={() => scrollTo("papers")} />
            <IconCard icon="📚" title="Books & Textbooks" subtitle="Recommended reads" onClick={() => scrollTo("books")} />
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: categories & content (2/3) */}
          <div className="lg:col-span-2 space-y-8">
            {/* SYLLABUS */}
            <motion.section {...fade} id="syllabus" className="bg-white p-6 rounded-2xl shadow-sm border border-sky-50">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold text-sky-900">Syllabus & Specification</h2>
                  <p className="text-sm text-gray-500 mt-1">Official specifications & exam board notes.</p>
                </div>
                <div> 
                  <a className="text-sm text-sky-700 underline" target="_blank" href="/resources/chemistry/syllabus">View all</a>
                </div>
              </div>

              <div className="mt-4 grid gap-3">
                {resource.syllabus.map((s:any) => (
                  <a key={s.title} href={s.link} target="_blank" className="flex items-center gap-3 p-3 border rounded-lg hover:shadow-sm transition">
                    {/* <div className="w-10 h-10 rounded-md bg-sky-50 flex items-center justify-center text-sky-700">📄</div> */}
                    <div className="w-10 h-10 rounded-md bg-sky-50 flex items-center justify-center text-sky-700">
                      <Image src={`/syllabus_icons/${s.board.replace("/", "")}.png`} alt={`${s.board} logo`} width={25} height={25}/>
                    </div>

                    <div>
                      <div className="font-medium text-sky-800">{s.title}</div>
                      <div className="text-xs text-gray-500">{s.board}</div>
                    </div>
                  </a>
                ))}
              </div>
            </motion.section>

            {/* NOTES */}
            <motion.section {...fade} id="notes" className="bg-white p-6 rounded-2xl shadow-sm border border-sky-50">
              <h2 className="text-xl font-semibold text-sky-900">Notes & Summaries</h2>
              <p className="text-sm text-gray-500 mt-1">Concise unit notes, printable summaries and cheat sheets.</p>

              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                {resource.notes.map((n:any) => (
                  <a key={n.id} href={n.link} target="_blank" className="p-4 border rounded-lg hover:shadow transition flex gap-3">
                    <div className="w-12 h-12 rounded-md bg-sky-50 flex items-center justify-center text-sky-700">📝</div>
                    <div className="flex-1">
                      <div className="font-medium text-sky-800">{n.title}</div>
                      <div className="text-xs text-gray-500 mt-1">{n.source}</div>
                      <div className="text-xs text-gray-400 mt-2">{n.tags?.join(", ")}</div>
                    </div>
                  </a>
                ))}
              </div>
            </motion.section>

            {/* BOOKS */}
            <motion.section {...fade} id="books" className="bg-white p-6 rounded-2xl shadow-sm border border-sky-50">
              <h2 className="text-xl font-semibold text-sky-900">Books & Textbooks</h2>
              <p className="text-sm text-gray-500 mt-1">Recommended references & editions.</p>

              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {resource.books.map((b:any) => (
                  <div key={b.title} className="border rounded-lg p-3 flex flex-col items-start gap-3 hover:shadow transition bg-white">
                    <div className="w-full h-56 relative rounded overflow-hidden bg-gray-100">
                      <Image src={b.cover} alt={b.title} fill className="object-contain" />
                    </div>
                    <div className="text-sm font-medium text-sky-800">{b.title}</div>
                    <a className="text-xs text-sky-700 underline" target="_blank" href={b.buy}>Buy / Details</a>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* VIDEOS */}
            <motion.section {...fade} id="videos" className="bg-white p-6 rounded-2xl shadow-sm border border-sky-50">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold text-sky-900">Video Channels & Playlists</h2>
                  <p className="text-sm text-gray-500 mt-1">Walkthroughs, concept explainers, and past-paper guides.</p>
                </div>
                <div>
                  <a className="text-sm text-sky-700 underline" target="_blank" href="#videos">Open YouTube</a>
                </div>
              </div>

              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                {resource.youtube.map((y:any) => (
                  <a key={y.channel} href={y.channelUrl} target="_blank" className="p-3 border rounded-lg hover:shadow transition flex gap-3 items-center">
                    <div className="w-12 h-12 rounded-full relative  overflow-hidden bg-gray-100">
                      <Image src={y.thumbnail} alt={y.channel} fill className="object-cover" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="font-medium text-sky-800">{y.channel}</div>
                      <div className="text-xs text-gray-500 mt-1">{y.description}</div>
                    </div>
                  </a>
                ))}
              </div>
            </motion.section>

            {/* PAST PAPERS */}
            <motion.section {...fade} id="papers" className="bg-white p-6 rounded-2xl shadow-sm border border-sky-50">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-sky-900">Past Papers & Mark Schemes</h2>
                  <p className="text-sm text-gray-500 mt-1">Filter by board and download individual papers.</p>
                </div>

                <div className="flex items-center gap-2">
                  <select
                    value={filterBoard || ""}
                    onChange={(e) => setFilterBoard(e.target.value || null)}
                    className="px-3 py-2 border rounded-full"
                  >
                    <option value="">All boards</option>
                    <option value="CAIE">CAIE</option>
                    <option value="Edexcel">Edexcel</option>
                    <option value="AQA">AQA</option>
                    <option value="WJEC/Eduqas">WJEC/Eduqas</option>

                  </select>
                  <button
                    onClick={() => {
                      // demo: in prod create a zip or direct download
                      alert("Download all (demo): combine links server-side for full export.");
                    }}
                    className="px-3 py-2 bg-sky-600 text-white rounded-full"
                  >
                    Download all
                  </button>
                </div>
              </div>

              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-xs text-gray-500 border-b">
                      <th className="py-2">Year</th>
                      <th>Board</th>
                      <th>Download</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredPapers.map((p:any) => (
                      <tr key={`${p.board}-${p.year}`} className="border-b last:border-b-0">
                        <td className="py-3">{p.year}</td>
                        <td>{p.board}</td>
                        <td>
                          <a className="text-sky-700 underline" target="_blank" href={p.link}>
                            Download PDF
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

            {/* TOOLS */}
            <motion.section {...fade} id="tools" className="bg-white p-6 rounded-2xl shadow-sm border border-sky-50">
              <h2 className="text-xl font-semibold text-sky-900">Tools & Utilities</h2>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {resource.tools.map((t:any) => (
                  <a key={t.name} href={t.url} target="_blank" className="p-3 border rounded-lg hover:shadow transition flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-sky-50 flex items-center justify-center">🔧</div>
                    <div>
                      <div className="font-medium text-sky-800">{t.name}</div>
                    </div>
                  </a>
                ))}
              </div>
            </motion.section>

            {/* COMMUNITY */}
            <motion.section {...fade} id="community" className="bg-white p-6 rounded-2xl shadow-sm border border-sky-50">
              <div className="flex justify-between items-center">
                <div>
                  
                  <h2 className="text-xl font-semibold text-sky-900">Community Help</h2>
                  <p className="text-sm text-gray-500 mt-1">Discord, subreddit and places to ask for help.</p>
                  
                </div>
                <div>
                  <a className="text-sky-700 underline" href="https://discord.gg/vS7eTFKZfD">Join Discord</a>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 border rounded-lg">
                  <a href="https://discord.gg/vS7eTFKZfD" target="_blank">
                  <div className="text-sm font-medium text-sky-800">r/alevel Discord</div>
                  <div className="text-xs text-gray-500">Active channels for Chemistry Q&A</div>
                  </a>
                </div>

                <div className="p-3 border rounded-lg">
                  <a href="https://www.reddit.com/r/alevel/" target="_blank">
                  <div className="text-sm font-medium text-sky-800">Ask r/alevel Reddit</div>
                  <div className="text-xs text-gray-500">Post a question — volunteers respond</div>
                  </a>
                </div>
              </div>
            </motion.section>
          </div>

          {/* Right column: inline search results & quick list (1/3) */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-4">
              <div className="p-4 bg-white border rounded-2xl shadow-sm">
                <div className="text-xs text-gray-500">Quick search results</div>
                <div className="mt-3 space-y-2">
                  {combinedResources.slice(0, 6).map((r, i) => (
                    <a key={i} href={r.link} target="_blank" className="block text-sm text-sky-800 hover:underline">
                      {r.title} <span className="text-xs text-gray-400">— {r.type}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-white border rounded-2xl shadow-sm">
                <div className="text-xs text-gray-500">Top picks</div>
                <div className="mt-3">
                  <a className="block text-sm text-sky-800 hover:underline" target="_blank" href={resource.notes[0]?.link}>
                    {resource.notes[0]?.title}
                  </a>
                  <a className="block text-sm text-sky-800 hover:underline mt-2" target="_blank" href={resource.books[0]?.buy}>
                    {resource.books[0]?.title}
                  </a>
                </div>
              </div>

              <div className="p-4 bg-white border rounded-2xl shadow-sm text-center">
                <div className="text-sm text-gray-700">Want to contribute?</div>
                <button onClick={() => setShowContribute(true)} className="mt-3 px-3 py-2 bg-sky-600 text-white rounded-full">
                  Submit a resource
                </button>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Contribute Modal (simple) */}
      {showContribute && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setShowContribute(false)} />
          <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="relative max-w-xl w-full bg-white rounded-2xl p-6 shadow-lg z-10">
            <h3 className="text-lg font-semibold text-sky-900">Contribute a Resource</h3>
            <p className="text-sm text-gray-500 mt-1">Share a helpful link or upload notes to help other students.</p>

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
                <button type="button" onClick={() => setShowContribute(false)} className="px-3 py-2 border rounded">
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => {
                    alert("Thanks — submission received (demo). In production, POST to your server.");
                    setShowContribute(false);
                  }}
                  className="px-3 py-2 bg-sky-600 text-white rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </main>
  );
}

