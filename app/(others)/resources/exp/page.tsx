"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

/**
 * Chemistry Resource Hub - single-file page component
 * - Replace sample arrays with real data & images in /public
 * - Tailwind classes used (assumes your project already has Tailwind)
 */

/* -------------------------
   ---- SAMPLE DATA ----
   Replace these arrays with real data (IDs, links, thumbnails)
   ------------------------- */

const SYLLABUS = [
  {
    title: "Cambridge IAL Chemistry Specification",
    board: "CIE",
    link: "/resources/chemistry/syllabus/cie-spec.pdf",
  },
  {
    title: "Edexcel A-Level Chemistry Specification",
    board: "Edexcel",
    link: "/resources/chemistry/syllabus/edexcel-spec.pdf",
  },
];

const NOTES = [
  {
    id: "notes-ial-unit1",
    title: "IAL Unit 1 — Atomic Structure & Bonding (Summary)",
    source: "r/alevel Notes",
    link: "/resources/chemistry/notes/ial-unit1.pdf",
    tags: ["unit 1", "summary"],
  },
  {
    id: "notes-organic",
    title: "Organic Chemistry Cheat Sheet",
    source: "Community",
    link: "/resources/chemistry/notes/organic-cheatsheet.pdf",
    tags: ["organic", "cheatsheet"],
  },
];

const BOOKS = [
  {
    title: "CGP A-Level Chemistry",
    edition: "2020",
    cover: "/subjects/book-cgp.jpg",
    buy: "https://example.com/cgp-chemistry",
  },
  { title: "Oxford Chemistry for A-Level", cover: "/subjects/book-oxford.jpg", buy: "#" },
];

const YOUTUBE = [
  {
    channel: "Chemistry with Dr. X",
    channelUrl: "https://youtube.com/drx",
    description: "Short concept videos, great for visual learners",
    thumbnail: "/subjects/yt-chem-1.jpg",
  },
  {
    channel: "Exam Solutions Chemistry",
    channelUrl: "https://youtube.com/examsolutions",
    description: "Past paper walkthroughs & exam technique",
    thumbnail: "/subjects/yt-chem-2.jpg",
  },
];

const PAST_PAPERS = [
  { year: 2023, board: "CIE", link: "/resources/chemistry/papers/2023-cie-paper.pdf" },
  { year: 2022, board: "CIE", link: "/resources/chemistry/papers/2022-cie-paper.pdf" },
  { year: 2021, board: "Edexcel", link: "/resources/chemistry/papers/2021-edexcel-paper.pdf" },
];

const TOOLS = [
  { name: "Molar Mass Calculator", url: "https://www.calculator.net/molecular-weight-calculator.html" },
  { name: "Periodic Table (interactive)", url: "https://periodic-table.rsc.org/" },
];

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

/* -------------------------
   ---- MAIN PAGE ----
   ------------------------- */

export default function ChemistryResourcesPage() {
  const [query, setQuery] = useState("");
  const [filterBoard, setFilterBoard] = useState<string | null>(null);
  const [showContribute, setShowContribute] = useState(false);

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
    // unify for search
    const items = [
      ...SYLLABUS.map((s) => ({ type: "Syllabus", title: s.title, desc: s.board || "", link: s.link })),
      ...NOTES.map((n) => ({ type: "Notes", title: n.title, desc: n.source, link: n.link })),
      ...BOOKS.map((b) => ({ type: "Books", title: b.title, desc: b.edition || "", link: b.buy })),
      ...YOUTUBE.map((y) => ({ type: "Videos", title: y.channel, desc: y.description, link: y.channelUrl })),
      ...PAST_PAPERS.map((p) => ({ type: "Papers", title: `${p.board} — ${p.year}`, desc: p.board, link: p.link })),
      ...TOOLS.map((t) => ({ type: "Tools", title: t.name, desc: "", link: t.url })),
    ];
    if (!query) return items;
    const q = query.toLowerCase();
    return items.filter((it) => (it.title + " " + it.desc).toLowerCase().includes(q));
  }, [query]);

  const filteredPapers = useMemo(() => {
    return PAST_PAPERS.filter((p) => (filterBoard ? p.board === filterBoard : true));
  }, [filterBoard]);

  /* small helpers */
  const scrollTo = (id:string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  /* visual variants */
  const fade = { initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.45 } };

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
                  <a className="text-sm text-sky-700 underline" href="/resources/chemistry/syllabus">View all</a>
                </div>
              </div>

              <div className="mt-4 grid gap-3">
                {SYLLABUS.map((s) => (
                  <a key={s.title} href={s.link} className="flex items-center gap-3 p-3 border rounded-lg hover:shadow-sm transition">
                    <div className="w-10 h-10 rounded-md bg-sky-50 flex items-center justify-center text-sky-700">📄</div>
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
                {NOTES.map((n) => (
                  <a key={n.id} href={n.link} className="p-4 border rounded-lg hover:shadow transition flex gap-3">
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
                {BOOKS.map((b) => (
                  <div key={b.title} className="border rounded-lg p-3 flex flex-col items-start gap-3 hover:shadow transition bg-white">
                    <div className="w-full h-28 relative rounded overflow-hidden bg-gray-100">
                      <Image src={b.cover} alt={b.title} fill className="object-cover" />
                    </div>
                    <div className="text-sm font-medium text-sky-800">{b.title}</div>
                    <a className="text-xs text-sky-700 underline" href={b.buy}>Buy / Details</a>
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
                  <a className="text-sm text-sky-700 underline" href="#videos">Open YouTube</a>
                </div>
              </div>

              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                {YOUTUBE.map((y) => (
                  <a key={y.channel} href={y.channelUrl} className="p-3 border rounded-lg hover:shadow transition flex gap-3 items-center">
                    <div className="w-20 h-12 relative rounded overflow-hidden bg-gray-100">
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
                    <option value="CIE">CIE</option>
                    <option value="Edexcel">Edexcel</option>
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
                    {filteredPapers.map((p) => (
                      <tr key={`${p.board}-${p.year}`} className="border-b last:border-b-0">
                        <td className="py-3">{p.year}</td>
                        <td>{p.board}</td>
                        <td>
                          <a className="text-sky-700 underline" href={p.link}>
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
                {TOOLS.map((t) => (
                  <a key={t.name} href={t.url} className="p-3 border rounded-lg hover:shadow transition flex items-center gap-3">
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
                  <a className="text-sky-700 underline" href="/discord">Join Discord</a>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 border rounded-lg">
                  <div className="text-sm font-medium text-sky-800">r/alevel Discord</div>
                  <div className="text-xs text-gray-500">Active channels for Chemistry Q&A</div>
                </div>

                <div className="p-3 border rounded-lg">
                  <div className="text-sm font-medium text-sky-800">Ask a Tutor</div>
                  <div className="text-xs text-gray-500">Submit a question — volunteer tutors respond</div>
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
                    <a key={i} href={r.link} className="block text-sm text-sky-800 hover:underline">
                      {r.title} <span className="text-xs text-gray-400">— {r.type}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-white border rounded-2xl shadow-sm">
                <div className="text-xs text-gray-500">Top picks</div>
                <div className="mt-3">
                  <a className="block text-sm text-sky-800 hover:underline" href={NOTES[0]?.link}>
                    {NOTES[0]?.title}
                  </a>
                  <a className="block text-sm text-sky-800 hover:underline mt-2" href={BOOKS[0]?.buy}>
                    {BOOKS[0]?.title}
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