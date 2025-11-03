// "use client";

// import { useState } from "react";
// import { useSession } from "next-auth/react";

// export default function ProfilePage() {
//   const { data: session } = useSession();
//   const [formData, setFormData] = useState({
//     subjectsAS: [],
//     subjectsA2: [],
//     examSession: "",
//     receiveEmails: false,
//   });


//   async function handleSubmit(e) {
//     e.preventDefault();
//     await fetch("/api/user/update", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email: session.user.email, ...formData }),
//     });
//     alert("Profile updated!");
//   }

//   if (!session?.user) return <p>Please sign in with Google first.</p>;

//   return (
//     <form onSubmit={handleSubmit} className="p-6 max-w-lg mx-auto">
//       <h1 className="text-xl font-bold mb-4">Your Profile</h1>

//       <label>Subjects (AS Level)</label>
//       <input
//         type="text"
//         placeholder="e.g. Math, Physics"
//         onChange={(e) =>
//           setFormData({ ...formData, subjectsAS: e.target.value.split(",") })
//         }
//         className="w-full border p-2 mb-4"
//       />

//       <label>Subjects (A2 Level)</label>
//       <input
//         type="text"
//         placeholder="e.g. Chemistry, Biology"
//         onChange={(e) =>
//           setFormData({ ...formData, subjectsA2: e.target.value.split(",") })
//         }
//         className="w-full border p-2 mb-4"
//       />

//       <label>Exam Session</label>
//       <input
//         type="text"
//         placeholder="e.g. May/June 2026"
//         onChange={(e) =>
//           setFormData({ ...formData, examSession: e.target.value })
//         }
//         className="w-full border p-2 mb-4"
//       />

//       <label className="flex items-center space-x-2">
//         <input
//           type="checkbox"
//           onChange={(e) =>
//             setFormData({ ...formData, receiveEmails: e.target.checked })
//           }
//         />
//         <span>Receive emails about new resources?</span>
//       </label>

//       <button
//         type="submit"
//         className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
//       >
//         Save
//       </button>
//     </form>
//   );
// }

// "use client";

// import { useState, FormEvent } from "react";
// import { useSession } from "next-auth/react";

// interface FormData {
//   subjectsAS: string[];
//   subjectsA2: string[];
//   examSession: string;
//   receiveEmails: boolean;
// }

// export default function ProfilePage() {
//   const { data: session } = useSession();

//   const [formData, setFormData] = useState<FormData>({
//     subjectsAS: [],
//     subjectsA2: [],
//     examSession: "",
//     receiveEmails: false,
//   });

//   async function handleSubmit(e: FormEvent<HTMLFormElement>) {
//     e.preventDefault();

//     if (!session?.user?.email) {
//       alert("Please sign in with Google first.");
//       return;
//     }

//     try {
//       const res = await fetch("/api/user/update", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email: session.user.email, ...formData }),
//       });

//       if (!res.ok) throw new Error("Network response was not ok");

//       alert("Profile updated!");
//     } catch (error) {
//       console.error("Error updating profile:", error);
//       alert("There was a problem updating your profile. Please try again.");
//     }
//   }

//   // Show this if the user is not signed in
//   if (!session?.user) return <p>Please sign in with Google first.</p>;

//   return (
//     <form onSubmit={handleSubmit} className="p-6 max-w-lg mx-auto">
//       <h1 className="text-xl font-bold mb-4">Your Profile</h1>

//       {/* AS Level Subjects */}
//       <label className="block mb-1">Subjects (AS Level)</label>
//       <input
//         type="text"
//         placeholder="e.g. Math, Physics"
//         onChange={(e) =>
//           setFormData({
//             ...formData,
//             subjectsAS: e.target.value
//               .split(",")
//               .map((s) => s.trim())
//               .filter(Boolean),
//           })
//         }
//         className="w-full border p-2 mb-4 rounded"
//       />

//       {/* A2 Level Subjects */}
//       <label className="block mb-1">Subjects (A2 Level)</label>
//       <input
//         type="text"
//         placeholder="e.g. Chemistry, Biology"
//         onChange={(e) =>
//           setFormData({
//             ...formData,
//             subjectsA2: e.target.value
//               .split(",")
//               .map((s) => s.trim())
//               .filter(Boolean),
//           })
//         }
//         className="w-full border p-2 mb-4 rounded"
//       />

//       {/* Exam Session */}
//       <label className="block mb-1">Exam Session</label>
//       <input
//         type="text"
//         placeholder="e.g. May/June 2026"
//         onChange={(e) =>
//           setFormData({ ...formData, examSession: e.target.value })
//         }
//         className="w-full border p-2 mb-4 rounded"
//       />

//       {/* Email Notifications */}
//       <label className="flex items-center space-x-2">
//         <input
//           type="checkbox"
//           onChange={(e) =>
//             setFormData({ ...formData, receiveEmails: e.target.checked })
//           }
//         />
//         <span>Receive emails about new resources?</span>
//       </label>

//       {/* Submit Button */}
//       <button
//         type="submit"
//         className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
//       >
//         Save
//       </button>
//     </form>
//   );
// }

// "use client";

// import React, { useEffect, useMemo, useState } from "react";
// import Image from "next/image";
// import { useSession, signOut } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import { FormEvent } from "react";

// /**
//  * Profile Page 2.0
//  *
//  * - Floating left user card (desktop)
//  * - Boards multi-select -> unlocks subject lists & session dropdowns
//  * - AS/A2 subject pickers with subject codes (sample lists, 4-5 per board)
//  * - Prefills data from GET /api/user
//  * - POST /api/user/update on Save
//  *
//  * Notes:
//  * - Ensure next.config.js includes remote hosts (google avatars) or fallback to <img>
//  * - Ensure /api/user returns the user object with fields:
//  *   { name, email, subjectsAS: string[], subjectsA2: string[], examSession: string, receiveEmails: boolean, boards: string[] }
//  */

// type BoardKey = "CAIE" | "Edexcel" | "Edexcel-IAL" | "AQA" | "OCR" | "WJEC";

// const BOARDS: { key: BoardKey; label: string }[] = [
//   { key: "CAIE", label: "Cambridge (CAIE)" },
//   { key: "Edexcel", label: "Pearson Edexcel (UK)" },
//   { key: "Edexcel-IAL", label: "Edexcel IAL" },
//   { key: "AQA", label: "AQA" },
//   { key: "OCR", label: "OCR" },
//   { key: "WJEC", label: "WJEC/Eduqas" },
// ];

// /**
//  * Sample subject lists (4-5 each) with codes.
//  * Replace / expand later — this is a compact sample as requested.
//  */
// const SUBJECTS_BY_BOARD: Record<BoardKey, { code: string; name: string }[]> = {
//   CAIE: [
//     { code: "9709", name: "Mathematics" },
//     { code: "9701", name: "Chemistry" },
//     { code: "9702", name: "Physics" },
//     { code: "9708", name: "Economics" },
//     { code: "9691", name: "Computer Science" },
//   ],
//   Edexcel: [
//     { code: "9MA0", name: "Mathematics" },
//     { code: "8CH0", name: "Chemistry" },
//     { code: "8PH0", name: "Physics" },
//     { code: "9EC0", name: "Economics" },
//     { code: "9PS0", name: "Psychology" },
//   ],
//   "Edexcel-IAL": [
//     { code: "IAL-MA", name: "Mathematics (IAL)" },
//     { code: "IAL-CH", name: "Chemistry (IAL)" },
//     { code: "IAL-PH", name: "Physics (IAL)" },
//     { code: "IAL-EC", name: "Economics (IAL)" },
//     { code: "IAL-CS", name: "Computer Science (IAL)" },
//   ],
//   AQA: [
//     { code: "7408", name: "Biology" },
//     { code: "7405", name: "Chemistry" },
//     { code: "7407", name: "Physics" },
//     { code: "7181", name: "Economics" },
//     { code: "7182", name: "Psychology" },
//   ],
//   OCR: [
//     { code: "H230", name: "Biology" },
//     { code: "H432", name: "Chemistry" },
//     { code: "H556", name: "Physics" },
//     { code: "H866", name: "Computer Science" },
//     { code: "H581", name: "History" },
//   ],
//   WJEC: [
//     { code: "WJEC-01", name: "Chemistry" },
//     { code: "WJEC-02", name: "Physics" },
//     { code: "WJEC-03", name: "Mathematics" },
//     { code: "WJEC-04", name: "Economics" },
//     { code: "WJEC-05", name: "Business" },
//   ],
// };

// /**
//  * Exam sessions per board (sample tags)
//  */
// const SESSIONS_BY_BOARD: Record<BoardKey, string[]> = {
//   CAIE: ["May/June", "Oct/Nov", "Mar"],
//   Edexcel: ["May/June", "Jan", "Oct/Nov"],
//   "Edexcel-IAL": ["May/June", "Oct/Nov", "Nov"],
//   AQA: ["May/June", "Jan", "Oct/Nov"],
//   OCR: ["May/June", "Jan", "Oct/Nov"],
//   WJEC: ["May/June", "Jan", "Oct/Nov"],
// };

// interface UserPayload {
//   name: string;
//   email: string;
//   boards?: BoardKey[];
//   subjectsAS?: string[]; // store as "Board|code|name" or simpler "code — name"
//   subjectsA2?: string[];
//   examSession?: string; // we will store as "Board|session" if multi-board? For now keep single string
//   receiveEmails?: boolean;
// }

// export default function ProfilePage() {
//   const { data: session } = useSession();
//   const router = useRouter();

//   // local UI state
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);
//   const [toast, setToast] = useState<string | null>(null);

//   // form state
//   const [boards, setBoards] = useState<BoardKey[]>([]);
//   const [activeLevel, setActiveLevel] = useState<"AS" | "A2">("AS"); // toggle between AS / A2 lists
//   const [subjectsAS, setSubjectsAS] = useState<string[]>([]);
//   const [subjectsA2, setSubjectsA2] = useState<string[]>([]);
//   const [examSession, setExamSession] = useState<string>(""); // we will store as "BoardKey::session"
//   const [receiveEmails, setReceiveEmails] = useState<boolean>(false);
//   const [name, setName] = useState<string>("");

//   // helper: show temporary toast message
//   function showToast(msg: string, ms = 2500) {
//     setToast(msg);
//     window.setTimeout(() => setToast(null), ms);
//   }

//   // compute combined subjects available for the selected boards
//   const availableSubjects = useMemo(() => {
//     const set = new Map<string, { code: string; name: string }>();
//     boards.forEach((b) => {
//       const list = SUBJECTS_BY_BOARD[b] || [];
//       list.forEach((s) => {
//         // key by code + board to avoid collisions: `${b}::${s.code}`
//         const key = `${b}::${s.code}`;
//         if (!set.has(key)) set.set(key, s);
//       });
//     });
//     // return array of {key, board, code, name}
//     return Array.from(set.entries()).map(([key, val]) => {
//       const [board] = key.split("::");
//       return { key, board: board as BoardKey, code: val.code, name: val.name };
//     });
//   }, [boards]);

//   // load existing user data from backend
//   useEffect(() => {
//     async function load() {
//       if (!session?.user?.email) {
//         setLoading(false);
//         return;
//       }
//       try {
//         setLoading(true);
//         const res = await fetch("/api/user", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ email: session.user.email }),
//         });
//         if (!res.ok) throw new Error("Failed to fetch user");
//         const data: UserPayload = await res.json();
//         setName(data.name ?? session.user?.name ?? "");
//         if (data.boards) setBoards(data.boards);
//         if (data.subjectsAS) setSubjectsAS(data.subjectsAS);
//         if (data.subjectsA2) setSubjectsA2(data.subjectsA2);
//         if (data.examSession) setExamSession(data.examSession);
//         if (typeof data.receiveEmails === "boolean")
//           setReceiveEmails(data.receiveEmails);
//       } catch (err) {
//         console.error(err);
//         showToast("Could not load profile — try reloading.");
//       } finally {
//         setLoading(false);
//       }
//     }
//     load();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [session?.user?.email]);

//   // toggle board selected/unselected
//   function toggleBoard(b: BoardKey) {
//     setBoards((prev) => {
//       if (prev.includes(b)) {
//         // removing: also remove any subjects chosen that come from this board
//         const newBoards = prev.filter((x) => x !== b);
//         // filter subject lists to only keep ones from remaining boards
//         const remainingBoardKeys = new Set(newBoards);
//         setSubjectsAS((prevAS) =>
//           prevAS.filter((s) => {
//             // s stored as `${board}::${code}::${name}`
//             const parts = s.split("::");
//             return parts.length >= 3 && remainingBoardKeys.has(parts[0] as BoardKey);
//           })
//         );
//         setSubjectsA2((prevA2) =>
//           prevA2.filter((s) => {
//             const parts = s.split("::");
//             return parts.length >= 3 && remainingBoardKeys.has(parts[0] as BoardKey);
//           })
//         );
//         // if examSession was for this board, clear
//         if (examSession.startsWith(`${b}::`)) setExamSession("");
//         return newBoards;
//       } else {
//         return [...prev, b];
//       }
//     });
//   }

//   // toggle a subject (AS or A2)
//   function toggleSubject(level: "AS" | "A2", board: BoardKey, code: string, name_: string) {
//     // store subject as `${board}::${code}::${name}`
//     const key = `${board}::${code}::${name_}`;
//     if (level === "AS") {
//       // must have boards selected
//       if (boards.length === 0) {
//         showToast("Select at least one exam board before adding subjects.");
//         return;
//       }
//       setSubjectsAS((prev) => {
//         if (prev.includes(key)) return prev.filter((p) => p !== key);
//         return [...prev, key];
//       });
//     } else {
//       if (boards.length === 0) {
//         showToast("Select at least one exam board before adding subjects.");
//         return;
//       }
//       setSubjectsA2((prev) => {
//         if (prev.includes(key)) return prev.filter((p) => p !== key);
//         return [...prev, key];
//       });
//     }
//   }

//   // helper to display subject chip label (code — name)
//   function renderSubjectLabel(subjectKey: string) {
//     // subjectKey: `${board}::${code}::${name}`
//     const parts = subjectKey.split("::");
//     if (parts.length >= 3) {
//       return `${parts[1]} — ${parts[2]}`;
//     }
//     return subjectKey;
//   }

//   // helper to check if a subject is selected
//   function isSubjectSelected(level: "AS" | "A2", key: string) {
//     if (level === "AS") return subjectsAS.includes(key);
//     return subjectsA2.includes(key);
//   }

//   // save changes
//   async function handleSave(e?: FormEvent) {
//     if (e) e.preventDefault();
//     if (!session?.user?.email) {
//       showToast("Sign in required");
//       return;
//     }
//     setSaving(true);
//     try {
//       const payload: UserPayload = {
//         name,
//         email: session.user.email,
//         boards,
//         subjectsAS,
//         subjectsA2,
//         examSession,
//         receiveEmails,
//       };
//       const res = await fetch("/api/user/update", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });
//       if (!res.ok) throw new Error("Save failed");
//       showToast("Profile saved");
//     } catch (err) {
//       console.error(err);
//       showToast("Could not save profile");
//     } finally {
//       setSaving(false);
//     }
//   }

//   // render helper for sessions dropdown (combined for selected boards)
//   const sessionOptions = useMemo(() => {
//     const opts: { key: string; label: string }[] = [];
//     boards.forEach((b) => {
//       const sessions = SESSIONS_BY_BOARD[b] || [];
//       sessions.forEach((s) => {
//         opts.push({ key: `${b}::${s}`, label: `${b} — ${s}` });
//       });
//     });
//     return opts;
//   }, [boards]);

//   // small loading skeleton
//   if (loading || !session?.user) {
//     return (
//       <div className="p-8 max-w-5xl mx-auto">
//         <div className="animate-pulse bg-gray-100 rounded-lg p-6">
//           <div className="h-6 w-48 bg-gray-200 rounded mb-4" />
//           <div className="h-36 bg-gray-200 rounded mb-4" />
//           <div className="h-10 bg-gray-200 rounded" />
//         </div>
//       </div>
//     );
//   }

//   return (
//     <main className="p-6 md:p-10 max-w-7xl mx-auto relative">
//       {/* Toast */}
//       {toast && (
//         <div className="fixed right-6 top-6 z-50 bg-gray-900 text-white px-4 py-2 rounded shadow">
//           {toast}
//         </div>
//       )}

//       <div className="flex flex-col md:flex-row gap-6">
//         {/* Floating card (left) */}
//         <aside
//           className="md:w-80 sticky top-24 self-start"
//           aria-hidden={false}
//         >
//           <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-lg transition-transform transform hover:-translate-y-1">
//             <div className="flex items-center gap-4">
//               <div className="w-16 h-16 rounded-full overflow-hidden border border-gray-200 relative">
//                 {session.user?.image ? (
//                   // next/image will work if next.config.js allows the host
//                   // fallback to <img> if you haven't configured next.config.js
//                   // (Image is nicer if you have domains set)
//                   // use width/height props for reliability
//                   <Image
//                     src={session.user.image}
//                     alt={session.user.name ?? "avatar"}
//                     width={64}
//                     height={64}
//                     className="object-cover"
//                   />
//                 ) : (
//                   <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
//                     {session.user?.name ? session.user.name.charAt(0) : "U"}
//                   </div>
//                 )}
//               </div>

//               <div className="flex-1">
//                 <div className="text-lg font-semibold text-gray-800">
//                   {name || session.user?.name}
//                 </div>
//                 <div className="text-xs text-gray-500 mt-1">Signed in with Google</div>
//               </div>
//             </div>

//             <div className="mt-6">
//               <button
//                 onClick={() => signOut()}
//                 className="w-full text-center bg-red-50 text-red-700 border border-red-100 px-3 py-2 rounded font-semibold hover:bg-red-100 transition"
//               >
//                 Sign out
//               </button>
//             </div>
//           </div>

//           {/* small helper card */}
//           <div className="mt-6 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-4 shadow-sm text-sm text-gray-600">
//             <strong className="block text-gray-800 mb-1">Tip</strong>
//             Select your exam boards first — subjects & sessions depend on them.
//           </div>
//         </aside>

//         {/* Main interactive panel */}
//         <section className="flex-1">
//           <form onSubmit={handleSave}>
//             <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-sm transition">
//               <div className="flex items-center justify-between">
//                 <h2 className="text-2xl font-bold text-gray-800">Profile</h2>
//                 <div className="text-sm text-gray-500">Make changes and Save</div>
//               </div>

//               {/* Boards selection */}
//               <div className="mt-6">
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Exam boards</label>
//                 <div className="flex flex-wrap gap-3">
//                   {BOARDS.map((b) => {
//                     const active = boards.includes(b.key);
//                     return (
//                       <button
//                         key={b.key}
//                         type="button"
//                         onClick={() => toggleBoard(b.key)}
//                         className={`px-3 py-1.5 rounded-full text-sm font-semibold transition shadow-sm focus:outline-none ${
//                           active
//                             ? "bg-blue-600 text-white shadow-md"
//                             : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                         }`}
//                       >
//                         {b.label}
//                       </button>
//                     );
//                   })}
//                 </div>
//                 <p className="text-xs text-gray-400 mt-2">You can select multiple boards.</p>
//               </div>

//               {/* Level toggle and subject lists */}
//               <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <div className="flex items-center justify-between">
//                     <h3 className="text-lg font-semibold text-gray-800">Subjects — {activeLevel}</h3>
//                     <div className="flex items-center space-x-2">
//                       <button
//                         type="button"
//                         onClick={() => setActiveLevel("AS")}
//                         className={`px-3 py-1 rounded-md text-sm font-medium transition ${
//                           activeLevel === "AS"
//                             ? "bg-blue-50 text-blue-600"
//                             : "text-gray-600 hover:bg-gray-100"
//                         }`}
//                       >
//                         AS
//                       </button>
//                       <button
//                         type="button"
//                         onClick={() => setActiveLevel("A2")}
//                         className={`px-3 py-1 rounded-md text-sm font-medium transition ${
//                           activeLevel === "A2"
//                             ? "bg-blue-50 text-blue-600"
//                             : "text-gray-600 hover:bg-gray-100"
//                         }`}
//                       >
//                         A2
//                       </button>
//                     </div>
//                   </div>

//                   <p className="text-xs text-gray-400 mt-2">
//                     Choose subjects from the boards you selected.
//                   </p>

//                   <div className="mt-4">
//                     {boards.length === 0 ? (
//                       <div className="text-sm text-gray-500 italic">Select an exam board to show subjects.</div>
//                     ) : (
//                       <div className="flex flex-wrap gap-2">
//                         {availableSubjects.map((s) => {
//                           // subjectKey used in storage: `${board}::${code}::${name}`
//                           const key = `${s.board}::${s.code}::${s.name}`;
//                           const selected = isSubjectSelected(activeLevel, key);
//                           return (
//                             <button
//                               type="button"
//                               key={key}
//                               onClick={() => toggleSubject(activeLevel, s.board, s.code, s.name)}
//                               className={`px-3 py-1.5 rounded-full text-sm font-medium transition transform ${
//                                 selected
//                                   ? "bg-blue-600 text-white shadow-md scale-100"
//                                   : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                               }`}
//                             >
//                               <div className="flex items-center gap-2">
//                                 <span className="font-mono text-xs opacity-80">{s.code}</span>
//                                 <span>{s.name}</span>
//                               </div>
//                             </button>
//                           );
//                         })}
//                       </div>
//                     )}

//                     {/* currently selected for level */}
//                     <div className="mt-4">
//                       <div className="text-xs text-gray-500 mb-2">Selected {activeLevel} subjects</div>
//                       <div className="flex flex-wrap gap-2">
//                         {(activeLevel === "AS" ? subjectsAS : subjectsA2).length === 0 ? (
//                           <div className="text-sm text-gray-400 italic">No subjects selected yet.</div>
//                         ) : (
//                           (activeLevel === "AS" ? subjectsAS : subjectsA2).map((k) => (
//                             <div
//                               key={k}
//                               className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-100 text-sm"
//                             >
//                               <span className="font-mono text-xs opacity-80">{k.split("::")[1]}</span>
//                               <span>{k.split("::")[2]}</span>
//                               <button
//                                 type="button"
//                                 onClick={() =>
//                                   activeLevel === "AS"
//                                     ? setSubjectsAS((prev) => prev.filter((p) => p !== k))
//                                     : setSubjectsA2((prev) => prev.filter((p) => p !== k))
//                                 }
//                                 className="ml-2 text-xs text-red-500 hover:underline"
//                               >
//                                 Remove
//                               </button>
//                             </div>
//                           ))
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* right column: exam session & preferences */}
//                 <div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-800">Exam Session</h3>
//                     <p className="text-xs text-gray-400 mt-1">Pick the session for your exams (board-specific).</p>

//                     <div className="mt-4">
//                       {boards.length === 0 ? (
//                         <div className="text-sm text-gray-500 italic">Select at least one board to choose sessions.</div>
//                       ) : (
//                         <>
//                           <label className="block text-sm text-gray-700 mb-2">Session (board-specific)</label>
//                           <select
//                             value={examSession}
//                             onChange={(e) => setExamSession(e.target.value)}
//                             className="w-full border rounded p-2 bg-white"
//                           >
//                             <option value="">-- Select session --</option>
//                             {sessionOptions.map((opt) => (
//                               <option key={opt.key} value={opt.key}>
//                                 {opt.label}
//                               </option>
//                             ))}
//                           </select>
//                           <p className="text-xs text-gray-400 mt-2">Sessions are listed per selected board (Board — Session).</p>
//                         </>
//                       )}
//                     </div>

//                     <div className="mt-6">
//                       <label className="flex items-center gap-3">
//                         <input
//                           type="checkbox"
//                           checked={receiveEmails}
//                           onChange={(e) => setReceiveEmails(e.target.checked)}
//                         />
//                         <span className="text-sm text-gray-700">Receive emails about new resources for selected subjects</span>
//                       </label>
//                     </div>
//                   </div>

//                   {/* currently chosen boards summary */}
//                   <div className="mt-6 bg-gray-50 border border-gray-100 rounded p-3 text-sm text-gray-700">
//                     <strong className="block text-gray-800 mb-2">Boards selected</strong>
//                     {boards.length === 0 ? (
//                       <div className="text-gray-400 italic">None</div>
//                     ) : (
//                       <div className="flex flex-wrap gap-2">
//                         {boards.map((b) => (
//                           <div key={b} className="px-2 py-1 rounded bg-white border text-xs">
//                             {b}
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               {/* Save button */}
//               <div className="mt-6 flex items-center justify-end gap-4">
//                 <button
//                   type="button"
//                   onClick={() => {
//                     // reset (reload)
//                     if (!confirm("Reload saved profile from server? Unsaved changes will be lost.")) return;
//                     window.location.reload();
//                   }}
//                   className="px-3 py-2 rounded text-sm bg-gray-50 border hover:bg-gray-100"
//                 >
//                   Cancel
//                 </button>

//                 <button
//                   type="submit"
//                   disabled={saving}
//                   className={`px-4 py-2 rounded-md text-sm font-semibold transition ${
//                     saving ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
//                   } text-white`}
//                 >
//                   {saving ? "Saving..." : "Save Changes"}
//                 </button>
//               </div>
//             </div>
//           </form>
//         </section>
//       </div>
//     </main>
//   );
// }

"use client";

import React, { useEffect, useMemo, useState, FormEvent } from "react";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";

/* ---------------------------------- Types ---------------------------------- */

type BoardKey = "CAIE" | "Edexcel" | "Edexcel-IAL" | "AQA" | "OCR" | "WJEC";

/* -------------------------------- Constants -------------------------------- */

const BOARDS: { key: BoardKey; label: string }[] = [
  { key: "CAIE", label: "Cambridge (CAIE)" },
  { key: "Edexcel", label: "Pearson Edexcel (UK)" },
  { key: "Edexcel-IAL", label: "Edexcel IAL" },
  { key: "AQA", label: "AQA" },
  { key: "OCR", label: "OCR" },
  { key: "WJEC", label: "WJEC/Eduqas" },
];

const SUBJECTS_BY_BOARD: Record<BoardKey, { code: string; name: string }[]> = {
  CAIE: [
    { code: "9709", name: "Mathematics" },
    { code: "9701", name: "Chemistry" },
    { code: "9702", name: "Physics" },
    { code: "9708", name: "Economics" },
    { code: "9691", name: "Computer Science" },
  ],
  Edexcel: [
    { code: "9MA0", name: "Mathematics" },
    { code: "8CH0", name: "Chemistry" },
    { code: "8PH0", name: "Physics" },
    { code: "9EC0", name: "Economics" },
    { code: "9PS0", name: "Psychology" },
  ],
  "Edexcel-IAL": [
    { code: "IAL-MA", name: "Mathematics (IAL)" },
    { code: "IAL-CH", name: "Chemistry (IAL)" },
    { code: "IAL-PH", name: "Physics (IAL)" },
    { code: "IAL-EC", name: "Economics (IAL)" },
    { code: "IAL-CS", name: "Computer Science (IAL)" },
  ],
  AQA: [
    { code: "7408", name: "Biology" },
    { code: "7405", name: "Chemistry" },
    { code: "7407", name: "Physics" },
    { code: "7181", name: "Economics" },
    { code: "7182", name: "Psychology" },
  ],
  OCR: [
    { code: "H230", name: "Biology" },
    { code: "H432", name: "Chemistry" },
    { code: "H556", name: "Physics" },
    { code: "H866", name: "Computer Science" },
    { code: "H581", name: "History" },
  ],
  WJEC: [
    { code: "WJEC-01", name: "Chemistry" },
    { code: "WJEC-02", name: "Physics" },
    { code: "WJEC-03", name: "Mathematics" },
    { code: "WJEC-04", name: "Economics" },
    { code: "WJEC-05", name: "Business" },
  ],
};

const SESSIONS_BY_BOARD: Record<BoardKey, string[]> = {
  CAIE: ["May/June", "Oct/Nov", "Mar"],
  Edexcel: ["May/June", "Jan", "Oct/Nov"],
  "Edexcel-IAL": ["May/June", "Oct/Nov", "Nov"],
  AQA: ["May/June", "Jan", "Oct/Nov"],
  OCR: ["May/June", "Jan", "Oct/Nov"],
  WJEC: ["May/June", "Jan", "Oct/Nov"],
};

/* -------------------------------- Component -------------------------------- */

interface UserPayload {
  name: string;
  email: string;
  boards?: BoardKey[];
  subjectsAS?: string[];
  subjectsA2?: string[];
  examSession?: string;
  receiveEmails?: boolean;
}

export default function ProfilePage() {
  const { data: session } = useSession();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const [boards, setBoards] = useState<BoardKey[]>([]);
  const [subjectsAS, setSubjectsAS] = useState<string[]>([]);
  const [subjectsA2, setSubjectsA2] = useState<string[]>([]);
  const [activeLevel, setActiveLevel] = useState<"AS" | "A2">("AS");
  const [examSession, setExamSession] = useState("");
  const [receiveEmails, setReceiveEmails] = useState(false);
  const [name, setName] = useState("");

  const availableSubjects = useMemo(() => {
    const combined = new Map<string, { board: BoardKey; code: string; name: string }>();
    boards.forEach((b) => {
      SUBJECTS_BY_BOARD[b]?.forEach((s) => {
        const key = `${b}::${s.code}`;
        if (!combined.has(key)) combined.set(key, { board: b, ...s });
      });
    });
    return Array.from(combined.entries()).map(([key, val]) => ({ key, ...val }));
  }, [boards]);

  function showToast(msg: string, ms = 2500) {
    setToast(msg);
    setTimeout(() => setToast(null), ms);
  }

  useEffect(() => {
    async function loadUser() {
      if (!session?.user?.email) return setLoading(false);
      try {
        const res = await fetch("/api/user", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: session.user.email }),
        });
        if (!res.ok) throw new Error("Failed to load profile");
        const data: UserPayload = await res.json();
        setName(data.name ?? session.user.name ?? "");
        setBoards(data.boards ?? []);
        setSubjectsAS(data.subjectsAS ?? []);
        setSubjectsA2(data.subjectsA2 ?? []);
        setExamSession(data.examSession ?? "");
        setReceiveEmails(data.receiveEmails ?? false);
      } catch {
        showToast("Could not load profile");
      } finally {
        setLoading(false);
      }
    }
    loadUser();
  }, [session?.user?.email]);

  async function handleSave(e: FormEvent) {
    e.preventDefault();
    if (!session?.user?.email) return showToast("Sign in required");
    try {
      setSaving(true);
      const payload: UserPayload = {
        name,
        email: session.user.email,
        boards,
        subjectsAS,
        subjectsA2,
        examSession,
        receiveEmails,
      };
      const res = await fetch("/api/user/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Save failed");
      showToast("Profile saved!");
    } catch {
      showToast("Error saving profile");
    } finally {
      setSaving(false);
    }
  }

  const sessionOptions = useMemo(() => {
    const opts: { key: string; label: string }[] = [];
    boards.forEach((b) => {
      SESSIONS_BY_BOARD[b]?.forEach((s) =>
        opts.push({ key: `${b}::${s}`, label: `${b} — ${s}` })
      );
    });
    return opts;
  }, [boards]);

  if (loading) {
    return (
      <div className="p-10 text-center text-gray-500">Loading your profile...</div>
    );
  }

  if (!session?.user) {
    return (
      <div className="p-10 text-center text-gray-700">
        Please sign in with Google first.
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto p-6 md:p-10 flex flex-col md:flex-row gap-6">
      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-6 right-6 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-md"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating user card */}
      <motion.aside
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="md:w-80 h-fit bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-6 shadow-md"
      >
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border border-gray-200">
            <Image
              src={session.user.image || "/default-avatar.png"}
              alt="Profile"
              width={64}
              height={64}
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              {name || session.user.name}
            </h2>
            <p className="text-xs text-gray-500">Signed in with Google</p>
          </div>
        </div>

        <button
          onClick={() => signOut()}
          className="mt-6 w-full bg-red-50 text-red-600 border border-red-100 py-2 rounded-lg font-semibold hover:bg-red-100 transition"
        >
          Sign Out
        </button>

        <div className="mt-6 bg-blue-50 border border-blue-100 text-blue-800 p-3 rounded-lg text-sm">
          💡 Tip: Select your exam boards first — subjects & sessions depend on them.
        </div>
      </motion.aside>

      {/* Main interactive panel */}
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="flex-1 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-sm p-6"
      >
        <form onSubmit={handleSave}>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800">Profile Settings</h2>
            <span className="text-sm text-gray-500">r/alevel account</span>
          </div>

          {/* Boards */}
          <div className="mt-6">
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Exam Boards
            </label>
            <div className="flex flex-wrap gap-2">
              {BOARDS.map((b) => {
                const active = boards.includes(b.key);
                return (
                  <button
                    key={b.key}
                    type="button"
                    onClick={() =>
                      setBoards((prev) =>
                        prev.includes(b.key)
                          ? prev.filter((x) => x !== b.key)
                          : [...prev, b.key]
                      )
                    }
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition ${
                      active
                        ? "bg-blue-600 text-white shadow"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {b.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Subjects */}
          <div className="mt-8">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">
                Subjects — {activeLevel}
              </h3>
              <div className="space-x-2">
                <button
                  type="button"
                  onClick={() => setActiveLevel("AS")}
                  className={`px-3 py-1 rounded text-sm ${
                    activeLevel === "AS"
                      ? "bg-blue-100 text-blue-700"
                      : "hover:bg-gray-100"
                  }`}
                >
                  AS
                </button>
                <button
                  type="button"
                  onClick={() => setActiveLevel("A2")}
                  className={`px-3 py-1 rounded text-sm ${
                    activeLevel === "A2"
                      ? "bg-blue-100 text-blue-700"
                      : "hover:bg-gray-100"
                  }`}
                >
                  A2
                </button>
              </div>
            </div>

            {boards.length === 0 ? (
              <p className="text-sm text-gray-500 mt-3 italic">
                Select a board first to choose subjects.
              </p>
            ) : (
              <div className="flex flex-wrap gap-2 mt-3">
                {availableSubjects.map((s) => {
                  const key = `${s.board}::${s.code}::${s.name}`;
                  const selected =
                    activeLevel === "AS"
                      ? subjectsAS.includes(key)
                      : subjectsA2.includes(key);
                  return (
                    <button
                      type="button"
                      key={key}
                      onClick={() => {
                        const updater =
                          activeLevel === "AS" ? setSubjectsAS : setSubjectsA2;
                        updater((prev) =>
                          prev.includes(key)
                            ? prev.filter((p) => p !== key)
                            : [...prev, key]
                        );
                      }}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium transition ${
                        selected
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      <span className="font-mono text-xs">{s.code}</span> {s.name}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Exam Session */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-800">Exam Session</h3>
            {boards.length === 0 ? (
              <p className="text-sm text-gray-500 mt-2 italic">
                Select a board first to choose exam sessions.
              </p>
            ) : (
              <select
                value={examSession}
                onChange={(e) => setExamSession(e.target.value)}
                className="mt-3 border rounded-md p-2 w-full bg-white"
              >
                <option value="">-- Select Session --</option>
                {sessionOptions.map((opt) => (
                  <option key={opt.key} value={opt.key}>
                    {opt.label}
                  </option>
                ))}
              </select>
            )}
          </div>

          {/* Preferences */}
          <div className="mt-8 flex items-center gap-3">
            <input
              type="checkbox"
              checked={receiveEmails}
              onChange={(e) => setReceiveEmails(e.target.checked)}
            />
            <span className="text-sm text-gray-700">
              Receive updates about new resources for your subjects
            </span>
          </div>

          {/* Save */}
          <div className="mt-8 flex justify-end gap-3">
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-gray-100 rounded-md text-sm hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className={`px-4 py-2 rounded-md text-sm font-semibold text-white ${
                saving ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </motion.section>
    </main>
  );
}