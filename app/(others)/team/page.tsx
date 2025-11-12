/*


import getAllTeam from "@/app/controller/getAllTeam";
import { useEffect, useState } from "react";

const Profile = function ({
  name,
  title,
  id,
}: {
  name: string;
  title: string;
  id: string;
}) {
  return (
    <a href={"https://discord.com/users/" + id} target="_blank">
      <div className="flex justify-center flex-col items-center hover:cursor-pointer drop-shadow-2xl p-5 rounded-lg">
        <div className=" hover:brightness-50 transition-all w-48 mb-2">
          <img src="/team-img/profile.png" className="rounded-lg w-full" />
        </div>
        <h2 className="text-lg font-semibold">{name}</h2>
        <h3>{title}</h3>
      </div>
    </a>
  );
};

export default function Team() {
  const [members, setMembers] = useState([]);

  // const members = await getAllMembers();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allTeam = await getAllTeam();
        setMembers(allTeam);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="my-24 px-16">
      <h1 className="text-center text-5xl font-bold">Our Team</h1>
      <div
        className="mt-10 grid items-center justify-items-center gap-y-12 gap-x-5"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" }}
      >
        {members
          ? members.map((member: any, i: number) => {
              return (
                <div key={i}>
                  <Profile
                    name={member.name}
                    title={member.title}
                    id={member.discordId}
                  />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}
*/

// "use client";

// import getAllTeam from "@/app/controller/getAllTeam";
// import { useEffect, useState } from "react";
// import Skeleton from "@/app/skeleton";

// const Profile = function ({
//   name,
//   title,
//   id,
// }: {
//   name: string;
//   title: string;
//   id: string;
// }) {
//   return (
//     <a href={"https://discord.com/users/" + id} target="_blank">
//       <div className="flex justify-center flex-col items-center hover:cursor-pointer drop-shadow-2xl p-5 rounded-lg">
//         <div className="hover:brightness-50 transition-all w-48 mb-2">
//           <img src="/team-img/profile.png" className="rounded-lg w-full" />
//         </div>
//         <h2 className="text-lg font-semibold">{name}</h2>
//         <h3>{title}</h3>
//       </div>
//     </a>
//   );
// };

// export default function Team() {
//   const [members, setMembers] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const allTeam = await getAllTeam();
//         setMembers(allTeam);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="my-24 px-16">
//       <h1 className="text-center text-5xl font-bold">Our Team</h1>

//       <div
//         className="mt-10 grid items-center justify-items-center gap-y-12 gap-x-5"
//         style={{ gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" }}
//       >
//         {loading
//           ? // 🩶 Skeleton placeholders
//             [...Array(11)].map((_, i) => (
//               <div
//                 key={i}
//                 className="flex flex-col items-center p-5 gap-3 rounded-lg drop-shadow-2xl"
//               >
//                 <Skeleton className="w-48 h-48 rounded-full mb-2" />
//                 <Skeleton className="h-4 w-24 rounded-md" />
//                 <Skeleton className="h-3 w-16 rounded-md" />
//               </div>
//             ))
//           : // ✅ Real data after loading
//             members.map((member: any, i: number) => (
//               <Profile
//                 key={i}
//                 name={member.name}
//                 title={member.title}
//                 id={member.discordId}
//               />
//             ))}
//       </div>
//     </div>
//   );
// }

// "use client";

// import getAllTeam from "@/app/controller/getAllTeam";
// import { useEffect, useState } from "react";
// import { motion, Variants } from "framer-motion";
// import { FaDiscord, FaLinkedin } from "react-icons/fa";
// import Skeleton from "@/app/skeleton";

// const fadeUp: Variants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: i => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: (i as number) * 0.08, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
//   }),
// };
// const Profile = ({
//   name,
//   title,
//   discordId,
//   linkedin,
//   i,
// }: {
//   name: string;
//   title: string;
//   discordId: string;
//   linkedin?: string;
//   i: number;
// }) => {
//   return (
//     <motion.div
//       custom={i}
//       variants={fadeUp}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.3 }}
//       className="group flex flex-col items-center bg-gradient-to-b from-white to-blue-50 p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 w-[260px]"
//     >
//       <div className="relative mb-4">
//         <img
//           src="/team-img/profile.png"
//           className="w-32 h-32 rounded-full object-cover border-4 border-blue-200 shadow-sm group-hover:scale-105 transition-transform duration-300"
//         />
//         <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//       </div>

//       <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
//       <h3 className="text-sm text-gray-500 mb-4">{title}</h3>

//       <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//         <a
//           href={`https://discord.com/users/${discordId}`}
//           target="_blank"
//           className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors"
//         >
//           <FaDiscord size={18} />
//         </a>
//         {linkedin && (
//           <a
//             href={linkedin}
//             target="_blank"
//             className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-colors"
//           >
//             <FaLinkedin size={18} />
//           </a>
//         )}
//       </div>
//     </motion.div>
//   );
// };

// export default function Team() {
//   const [members, setMembers] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const allTeam = await getAllTeam();
//         setMembers(allTeam);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="my-24 px-10 md:px-16">
//       <h1 className="text-center text-5xl font-bold mb-14">Our Team</h1>

//       <div
//         className="grid justify-items-center gap-y-12 gap-x-8"
//         style={{ gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" }}
//       >
//         {loading
//           ? [...Array(11)].map((_, i) => (
//               <div
//                 key={i}
//                 className="flex flex-col items-center p-6 gap-4 rounded-2xl shadow-md bg-gradient-to-b from-white to-blue-50"
//               >
//                 <Skeleton className="w-32 h-32 rounded-full mb-3" />
//                 <Skeleton className="h-4 w-24 rounded-md" />
//                 <Skeleton className="h-3 w-16 rounded-md" />
//               </div>
//             ))
//           : members.map((member: any, i: number) => (
//               <Profile
//                 key={i}
//                 name={member.name}
//                 title={member.title}
//                 discordId={member.discordId}
//                 linkedin={member.linkedin}
//                 i={i}
//               />
//             ))}
//       </div>
//     </div>
//   );
// }

// "use client";

// import getAllTeam from "@/app/controller/getAllTeam";
// import { useEffect, useState } from "react";
// import { motion, Variants } from "framer-motion";
// import { FaDiscord, FaLinkedin } from "react-icons/fa";
// import Skeleton from "@/app/skeleton";

// const fadeUp: Variants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: (i as number) * 0.08,
//       duration: 0.6,
//       ease: [0.25, 0.1, 0.25, 1],
//     },
//   }),
// };

// const Profile = ({
//   name,
//   title,
//   discordId,
//   linkedin,
//   i,
// }: {
//   name: string;
//   title: string;
//   discordId: string;
//   linkedin?: string;
//   i: number;
// }) => {
//   return (
//     <motion.div
//       custom={i}
//       variants={fadeUp}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.3 }}
//       className="relative flex flex-col items-center bg-gradient-to-b from-white to-blue-50 p-6 rounded-2xl shadow-md
//                  hover:shadow-xl transition-all duration-300 w-[260px] overflow-hidden group"
//       whileHover={{ y: -5, transition: { duration: 0.3 } }}
//     >
//       {/* Animated glow background */}
//       <motion.div
//         className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/0 via-blue-200/10 to-blue-400/0 opacity-0 group-hover:opacity-100 blur-xl"
//         animate={{
//           backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
//         }}
//         transition={{
//           duration: 6,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//         style={{
//           backgroundSize: "200% 200%",
//         }}
//       />

//       {/* Profile image */}
//       <div className="relative mb-4 z-10">
//         <img
//           src="/team-img/profile.png"
//           className="w-32 h-32 rounded-full object-cover border-4 border-blue-200 shadow-sm group-hover:scale-105 transition-transform duration-300"
//         />
//         <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//       </div>

//       {/* Text */}
//       <h2 className="text-lg font-semibold text-gray-800 z-10">{name}</h2>
//       <h3 className="text-sm text-gray-500 mb-4 z-10">{title}</h3>

//       {/* Icons — Discord always visible */}
//       <div className="flex gap-3 z-10">
//         <a
//           href={`https://discord.com/users/${discordId}`}
//           target="_blank"
//           className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 shadow-md hover:shadow-blue-300/50"
//         >
//           <FaDiscord size={18} />
//         </a>
//         {linkedin && (
//           <a
//             href={linkedin}
//             target="_blank"
//             className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 shadow-md hover:shadow-blue-300/50"
//           >
//             <FaLinkedin size={18} />
//           </a>
//         )}
//       </div>

//       {/* Subtle floating animation */}
//       <motion.div
//         className="absolute inset-0"
//         animate={{ y: [0, -4, 0] }}
//         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//       />
//     </motion.div>
//   );
// };

// export default function Team() {
//   const [members, setMembers] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const allTeam = await getAllTeam();
//         setMembers(allTeam);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="my-24 px-10 md:px-16 relative">
//       <h1 className="text-center text-5xl font-bold mb-14 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
//         Our Team
//       </h1>

//       <div
//         className="grid justify-items-center gap-y-12 gap-x-8"
//         style={{ gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" }}
//       >
//         {loading
//           ? [...Array(11)].map((_, i) => (
//               <div
//                 key={i}
//                 className="flex flex-col items-center p-6 gap-4 rounded-2xl shadow-md bg-gradient-to-b from-white to-blue-50"
//               >
//                 <Skeleton className="w-32 h-32 rounded-full mb-3" />
//                 <Skeleton className="h-4 w-24 rounded-md" />
//                 <Skeleton className="h-3 w-16 rounded-md" />
//               </div>
//             ))
//           : members.map((member: any, i: number) => (
//               <Profile
//                 key={i}
//                 name={member.name}
//                 title={member.title}
//                 discordId={member.discordId}
//                 linkedin={member.linkedin}
//                 i={i}
//               />
//             ))}
//       </div>
//     </div>
//   );
// }

// "use client";

// import getAllTeam from "@/app/controller/getAllTeam";
// import { useEffect, useState } from "react";
// import { motion, Variants } from "framer-motion";
// import { FaDiscord, FaLinkedin } from "react-icons/fa";
// import Skeleton from "@/app/skeleton";

// const fadeUp: Variants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: (i as number) * 0.08,
//       duration: 0.6,
//       ease: [0.25, 0.1, 0.25, 1],
//     },
//   }),
// };

// // Role-based gradient
// const getGradient = (title: string) => {
//   const role = title.toLowerCase();
//   if (role.includes("leader")) return "from-indigo-300 to-purple-200";
//   if (role.includes("admin")) return "from-blue-200 to-cyan-100";
//   if (role.includes("sr")) return "from-teal-200 to-emerald-100";
//   if (role.includes("jr")) return "from-green-200 to-yellow-50";
//   return "from-gray-100 to-blue-50";
// };

// const Profile = ({
//   name,
//   title,
//   discordId,
//   linkedin,
//   i,
// }: {
//   name: string;
//   title: string;
//   discordId: string;
//   linkedin?: string;
//   i: number;
// }) => {
//   const gradient = getGradient(title);

//   return (
//     <motion.div
//       custom={i}
//       variants={fadeUp}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.3 }}
//       whileHover={{ y: -5, transition: { duration: 0.3 } }}
//       className={`relative flex flex-col items-center bg-gradient-to-b ${gradient}
//         p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 w-[260px] overflow-hidden group`}
//     >
//       {/* Background shimmer */}
//       <motion.div
//         className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl"
//         style={{
//           backgroundImage:
//             "linear-gradient(120deg, rgba(255,255,255,0.2), transparent, rgba(255,255,255,0.1))",
//           backgroundSize: "200% 200%",
//         }}
//         animate={{
//           backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
//         }}
//         transition={{
//           duration: 6,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//       />

//       {/* Sparkles */}
//       {Array.from({ length: 5 }).map((_, idx) => (
//         <motion.span
//           key={idx}
//           className="absolute bg-white rounded-full opacity-60"
//           style={{
//             width: `${Math.random() * 3 + 2}px`,
//             height: `${Math.random() * 3 + 2}px`,
//             top: `${Math.random() * 90}%`,
//             left: `${Math.random() * 90}%`,
//             filter: "blur(0.5px)",
//           }}
//           animate={{
//             y: [0, -8, 0],
//             opacity: [0.3, 1, 0.3],
//           }}
//           transition={{
//             duration: 3 + Math.random() * 3,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: Math.random() * 2,
//           }}
//         />
//       ))}

//       {/* Profile image */}
//       <div className="relative mb-4 z-10">
//         <img
//           src="/team-img/profile.png"
//           className="w-32 h-32 rounded-full object-cover border-4 border-white/60 shadow-sm group-hover:scale-105 transition-transform duration-300"
//         />
//         <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//       </div>

//       {/* Text */}
//       <h2 className="text-lg font-semibold text-gray-800 z-10">{name}</h2>
//       <h3 className="text-sm text-gray-700 mb-4 z-10 font-medium">{title}</h3>

//       {/* Socials */}
//       <div className="flex gap-3 z-10">
//         <a
//           href={`https://discord.com/users/${discordId}`}
//           target="_blank"
//           className="p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 shadow-md hover:shadow-blue-400/50 scale-110"
//         >
//           <FaDiscord size={22} />
//         </a>
//         {linkedin && (
//           <a
//             href={linkedin}
//             target="_blank"
//             className="p-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 shadow-md hover:shadow-blue-300/50"
//           >
//             <FaLinkedin size={20} />
//           </a>
//         )}
//       </div>

//       {/* Floating animation */}
//       <motion.div
//         className="absolute inset-0"
//         animate={{ y: [0, -3, 0] }}
//         transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
//       />
//     </motion.div>
//   );
// };

// export default function Team() {
//   const [members, setMembers] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const allTeam = await getAllTeam();
//         setMembers(allTeam);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="my-24 px-10 md:px-16 relative">
//       <h1 className="text-center text-5xl font-bold mb-14 bg-gradient-to-r from-blue-600 to-indigo-400 bg-clip-text text-transparent drop-shadow-sm">
//         Our Team
//       </h1>

//       <div
//         className="grid justify-items-center gap-y-12 gap-x-8"
//         style={{ gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" }}
//       >
//         {loading
//           ? [...Array(11)].map((_, i) => (
//               <div
//                 key={i}
//                 className="flex flex-col items-center p-6 gap-4 rounded-2xl shadow-md bg-gradient-to-b from-white to-blue-50"
//               >
//                 <Skeleton className="w-32 h-32 rounded-full mb-3" />
//                 <Skeleton className="h-4 w-24 rounded-md" />
//                 <Skeleton className="h-3 w-16 rounded-md" />
//               </div>
//             ))
//           : members.map((member: any, i: number) => (
//               <Profile
//                 key={i}
//                 name={member.name}
//                 title={member.title}
//                 discordId={member.discordId}
//                 linkedin={member.linkedin}
//                 i={i}
//               />
//             ))}
//       </div>
//     </div>
//   );
// }

"use client";

import getAllTeam from "@/app/controller/getAllTeam";
import Skeleton from "@/app/skeleton";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { FaDiscord, FaLinkedin } from "react-icons/fa";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: (i as number) * 0.08,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

// Role-based gradient
const getGradient = (title: string) => {
  const role = title.toLowerCase();
  if (role.includes("leader")) return "from-indigo-300 to-purple-200";
  if (role.includes("admin")) return "from-blue-200 to-cyan-100";
  if (role.includes("sr")) return "from-teal-200 to-emerald-100";
  if (role.includes("jr")) return "from-green-200 to-yellow-50";
  return "from-gray-100 to-blue-50";
};

const Profile = ({
  name,
  title,
  discordId,
  linkedin,
  imgSrc,
  i,
}: {
  name: string;
  title: string;
  discordId: string;
  linkedin?: string;
  imgSrc?: string;
  i: number;
}) => {
  const gradient = getGradient(title);
  console.log(imgSrc);

  return (
    <motion.div
      custom={i}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className={`relative flex flex-col items-center bg-gradient-to-b ${gradient} 
        p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 w-[260px] overflow-hidden group`}
    >
      {/* Background shimmer */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(255,255,255,0.2), transparent, rgba(255,255,255,0.1))",
          backgroundSize: "200% 200%",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Sparkles */}
      {Array.from({ length: 5 }).map((_, idx) => (
        <motion.span
          key={idx}
          className="absolute bg-white rounded-full opacity-60"
          style={{
            width: `${Math.random() * 3 + 2}px`,
            height: `${Math.random() * 3 + 2}px`,
            top: `${Math.random() * 90}%`,
            left: `${Math.random() * 90}%`,
            filter: "blur(0.5px)",
          }}
          animate={{
            y: [0, -8, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Profile image */}
      <div className="relative mb-4 z-10">
        <img
          src={`${
            imgSrc
              ? imgSrc
              : `https://api.dicebear.com/9.x/avataaars/svg?seed=encodeURIComponent(${name})`
          }`}
          alt={name}
          className="w-32 h-32 rounded-full border-4 border-white/60 shadow-sm group-hover:scale-105 transition-transform duration-300"
        />

        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Text */}
      <h2 className="text-lg font-semibold text-gray-800 z-10 text-center">
        {name}
      </h2>
      <h3 className="text-sm text-gray-700 mb-4 z-10 font-medium">{title}</h3>

      {/* Socials */}
      <div className="flex gap-3 z-10">
        <motion.a
          href={`https://discord.com/users/${discordId}`}
          target="_blank"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          className="p-3 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 
                     text-white shadow-md hover:shadow-blue-400/50 transition-all duration-300"
        >
          <FaDiscord size={20} />
        </motion.a>

        {linkedin && (
          <motion.a
            href={linkedin}
            target="_blank"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full bg-gradient-to-br from-sky-500 to-blue-400 
                       text-white shadow-md hover:shadow-sky-300/50 transition-all duration-300"
          >
            <FaLinkedin size={18} />
          </motion.a>
        )}
      </div>

      {/* Floating animation */}
      <motion.div
        className="absolute inset-0"
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
};

export default function Team() {
  const [members, setMembers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allTeam = await getAllTeam();
        setMembers(allTeam);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="my-24 px-10 md:px-16 relative">
      <h1 className="text-center text-5xl font-bold mb-14 bg-gradient-to-r from-blue-600 to-indigo-400 bg-clip-text text-transparent drop-shadow-sm">
        Our Team
      </h1>

      <div
        className="grid justify-items-center gap-y-12 gap-x-8"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" }}
      >
        {loading
          ? [...Array(11)].map((_, i) => (
              <div
                key={i}
                className="flex flex-col items-center p-6 gap-4 rounded-2xl shadow-md bg-gradient-to-b from-white to-blue-50"
              >
                <Skeleton className="w-32 h-32 rounded-full mb-3" />
                <Skeleton className="h-4 w-24 rounded-md" />
                <Skeleton className="h-3 w-16 rounded-md" />
              </div>
            ))
          : members.map((member: any, i: number) => (
              <Profile
                key={i}
                name={member.name}
                title={member.title}
                discordId={member.discordId}
                linkedin={member.linkedin}
                imgSrc={member.imgSrc}
                i={i}
              />
            ))}
      </div>
    </div>
  );
}
