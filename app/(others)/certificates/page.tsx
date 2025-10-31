// "use client";

// import { navigate } from "./action";
// import { ReactSearchAutocomplete } from "react-search-autocomplete";

// const Search = function () {
//   const uuid = [
//     { name: "2a00sg309itg", id: "2a00sg309itg" },
//     { name: "2g00of311lek", id: "2g00of311lek" },
//     { name: "2d00io308jke", id: "2d00io308jke" },
//     { name: "2h00vd310gdf", id: "2h00vd310gdf" },
//     { name: "2t00ml394ndi", id: "2t00ml394ndi" },
//     { name: "2f00bk313iru", id: "2f00bk313iru" },
//     { name: "2a00rt412uji", id: "2a00rt412uji" },
//   ];

//   const items = [
//     { name: "2a00sg309itg", id: 1 },
//     { name: "Martin Fernando Pramanik", id: 1 },
//     { name: "2g00of311lek", id: 2 },
//     { name: "Abdur Rafay Khan", id: 2 },
//     { name: "2d00io308jke", id: 3 },
//     { name: "Kyaw Nyi Nyi", id: 3 },
//     { name: "2h00vd310gdf", id: 4 },
//     { name: "Syed Ibrahim Ali", id: 4 },
//     { name: "2t00ml394ndi", id: 5 },
//     { name: "Molly Bonsall", id: 5 },
//     { name: "2f00bk313iru", id: 6 },
//     { name: "Jake Schwegler", id: 6 },
//   ];

//   const handleOnSearch = (string: any, results: any) => {
//     // let newSearch = uuid.filter((item) => {
//     // if (item.name === string) return true;
//     // else return false;
//     // });
//     // if (newSearch[newSearch].length - 1])
//     // navigate(newSearch[newSearch.length - 1].id);
//     // if ((results.length = 1)) console.log(results[0]);
//     // navigate(results);
//     // for (let i = 0; i < items.length; i++) {
//     //   const element = items[i];
//     //   if(items[i].name==string){
//     //     console.log(`recieved ${string}`)
//     //   }
//     // }
//     console.log("results " + results);
//     console.log("string " + string);

//   };

//   const handleOnSelect = (item: any) => {
//     // the item selected
//     // console.log("selected " + item.id);
//     console.log(item)
//     navigate(uuid[item.id - 1].id);
//   };

//   const formatResult = (item: any) => {
//     return (
//       <>
//         <span style={{ display: "block", textAlign: "left" }}>{item.name}</span>
//       </>
//     );
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <div className="w-[400px] max-sm:w-[300px]" >
//           <ReactSearchAutocomplete
//             items={items}
//             onSearch={handleOnSearch}
//             onSelect={handleOnSelect}
//             autoFocus
//             formatResult={formatResult}
//             maxResults={4}
//             placeholder="Enter Certificate ID or your name"
//           />
//         </div>
//       </header>
//     </div>
//   );
// };

//////////////////////////////////////////////////////

// "use client";
// import { useRouter } from "next/navigation";
// import { ReactSearchAutocomplete } from "react-search-autocomplete";

// const Search = function () {
//   const router = useRouter();

//   const uuid = [
//     { name: "2a00sg309itg", id: "2a00sg309itg" },
//     { name: "2g00of311lek", id: "2g00of311lek" },
//     { name: "2d00io308jke", id: "2d00io308jke" },
//     { name: "2h00vd310gdf", id: "2h00vd310gdf" },
//     { name: "2t00ml394ndi", id: "2t00ml394ndi" },
//     { name: "2f00bk313iru", id: "2f00bk313iru" },
//     { name: "2a00rt412uji", id: "2a00rt412uji" },
//   ];

//   const items = [
//     { name: "2a00sg309itg", id: 1 },
//     { name: "Martin Fernando Pramanik", id: 1 },
//     { name: "2g00of311lek", id: 2 },
//     { name: "Abdur Rafay Khan", id: 2 },
//     { name: "2d00io308jke", id: 3 },
//     { name: "Kyaw Nyi Nyi", id: 3 },
//     { name: "2h00vd310gdf", id: 4 },
//     { name: "Syed Ibrahim Ali", id: 4 },
//     { name: "2t00ml394ndi", id: 5 },
//     { name: "Molly Bonsall", id: 5 },
//     { name: "2f00bk313iru", id: 6 },
//     { name: "Jake Schwegler", id: 6 },
//   ];

//   const handleOnSelect = (item: any) => {
//     router.push(`/certificates/${uuid[item.id - 1].id}`);
//   };

//   const formatResult = (item: any) => (
//     <span style={{ display: "block", textAlign: "left" }}>{item.name}</span>
//   );

//   return (
//     <div className="App">
//       <header className="App-header">
//         <div className="w-[400px] max-sm:w-[300px]">
//           <ReactSearchAutocomplete
//             items={items}
//             onSelect={handleOnSelect}
//             autoFocus
//             formatResult={formatResult}
//             maxResults={4}
//             placeholder="Enter Certificate ID or your name"
//           />
//         </div>
//       </header>
//     </div>
//   );
// };

// const Step2 = function ({
//   link,
//   linkText,
//   actualLink,
// }: {
//   link: boolean;
//   linkText?: string;
//   actualLink?: string;
// }) {
//   if (link)
//     return (
//       <div className="h-bullet-text">
//         Fill{" "}
//         <a
//           href={actualLink}
//           className="text-blue-700 underline hover:text-violet-800"
//           target="_blank"
//         >
//           this
//         </a>{" "}
//         {linkText}
//       </div>
//     );
//   else return <h1>Start Helping!</h1>;
// };

// const InfoCon = function ({
//   heading,
//   info,
//   link,
//   linkText,
//   actualLink,
//   s3,
//   s4,
//   imgSrc,
// }: {
//   heading: string;
//   info: string;
//   link: boolean;
//   linkText?: string;
//   actualLink?: string;
//   s3: string;
//   s4: string;
//   imgSrc: string;
// }) {
//   return (
//     <div className="mb-28">
//       <div className="lg:grid grid-cols-2 grid-flow-col w-full content-between items-center">
//         <div>
//           <h1 className="text-3xl font-semibold">{heading} Certificate</h1>
//           <div>
//             <p className="text-xl text-gray-700 my-6">{info}</p>
//           </div>
//           <div className="flex gap-2 text-lg mb-4 ">
//             <div className="bg-cy-500 rounded-full text-white font-bold min-w-8 min-h-8 max-h-8 flex justify-center items-center">
//               1
//             </div>
//             <div className="h-bullet-text">
//               Join our community on{" "}
//               <a
//                 href="https://discord.gg/r-alevel-1114437735692902481"
//                 target="_blank"
//                 className="text-blue-700 underline hover:text-violet-800"
//               >
//                 Discord
//               </a>{" "}
//               and{" "}
//               <a
//                 href="https://www.reddit.com/r/alevel/"
//                 target="_blank"
//                 className="text-blue-700 underline hover:text-violet-800"
//               >
//                 Reddit
//               </a>{" "}
//             </div>
//           </div>
//           <div className="flex gap-2 text-lg mb-4 ">
//             <div className="bg-cy-500 rounded-full text-white font-bold min-w-8 min-h-8 max-h-8 flex justify-center items-center">
//               2
//             </div>
//             <Step2 link={link} linkText={linkText} actualLink={actualLink} />
//           </div>
//           <div className="flex gap-2 text-lg mb-4 ">
//             <div className="bg-cy-500 rounded-full text-white font-bold min-w-8 min-h-8 max-h-8 flex justify-center items-center">
//               3
//             </div>
//             <div className="h-bullet-text">Eligibility criteria: {s3}</div>
//           </div>
//           <div className="flex gap-2 text-lg mb-4 ">
//             <div className="bg-cy-500 rounded-full text-white font-bold min-w-8 min-h-8 max-h-8  flex justify-center items-center">
//               4
//             </div>
//             <div className="h-bullet-text">{s4}</div>
//           </div>
//         </div>
//         <div className="h-img w-3/5 justify-self-center hidden lg:block">
//           <img src={imgSrc} alt="Image"></img>
//         </div>
//       </div>
//     </div>
//   );
// };

// const CertContent = function () {
//   return (
//     <div className="mt-72 mb-20">
//       <h1 className="text-3xl font-semibold mb-3">
//         How are these certificates going to help me?
//       </h1>
//       <div className="flex text-gray-700 text-xl gap-4 items-center">
//         <p>
//           r/alevel certificates are distributed as an honour to some of our most
//           helpful members for their efforts in helping our community. These
//           certificates can serve as a proof of extra curricular activity by the
//           student. They can be submitted with university application and on
//           social media profiles (e.g. linkedin). <br /> <br /> Have a look at
//           all the certificates we offer below!
//         </p>
//         <img
//           className="w-1/6 hidden md:block"
//           src="/cert_pg/medal.png"
//           alt=""
//         ></img>
//       </div>
//     </div>
//   );
// };

// export default function Cert() {
//   return (
//     <div className="flex flex-col items-center min-h-lvh ">
//       <div className="flex flex-col items-center">
//         <h1 className="text-6xl max-xs:text-5xl font-bold mt-32 mb-16">Certificates</h1>
//         <Search />
//       </div>
//       <div className="px-16 max-xs:px-8">
//         <CertContent />
//         <InfoCon
//           heading="Helper"
//           info="Given to members who are show incredible helpfulness towards others"
//           link={false}
//           s3="minimum 100 reps on Discord from helping"
//           s4="Certificates will be awarded on the basis of overall activity in the community"
//           imgSrc="/cert_pg/svg-1.png"
//         />

//         <InfoCon
//           heading="Writer"
//           info="Write about whatever you are passionate about and help the community learn"
//           link={true}
//           linkText="form the apply to become a writer"
//           actualLink="https://docs.google.com/forms/d/e/1FAIpQLSeQ7LAYUjRtWunMRPPwdZyAtBN1lCXZt2A-tbcz_psc-DTC8Q/viewform?usp=sf_link"
//           s3="minimum of 10 blog posts"
//           s4="Certificates will be awarded once the 10th blog is posted"
//           imgSrc="/cert_pg/svg-2.png"
//         />

//         <InfoCon
//           heading="Resource Contributor"
//           info="Share resources made by you for any subject to help other fellow learners"
//           link={true}
//           linkText="form the apply to become a resource contributor"
//           actualLink="https://docs.google.com/forms/d/e/1FAIpQLSfUhcZGsksSn8GRLQAOwYW8wTpJLWTZZ7SPmlRJ5T6rgYUPUQ/viewform?usp=sf_link"
//           s3="a reasonable amount of resources for any subject"
//           s4="Certificates will be awarded once the resource is approved by admins"
//           imgSrc="/cert_pg/svg-3.png"
//         />
//       </div>
//     </div>
//   );
// }


// app/certificates/page.tsx


// "use client";

// import React from "react";
// import { useRouter } from "next/navigation";
// import { ReactSearchAutocomplete } from "react-search-autocomplete";
// import { motion } from "framer-motion";

// /* ---------------------------
//   Replace the demo arrays below
//   with your real data / api calls
//    --------------------------- */
// const uuid = [
//   { name: "2a00sg309itg", id: "2a00sg309itg" },
//   { name: "2g00of311lek", id: "2g00of311lek" },
//   { name: "2d00io308jke", id: "2d00io308jke" },
//   { name: "2h00vd310gdf", id: "2h00vd310gdf" },
//   { name: "2t00ml394ndi", id: "2t00ml394ndi" },
//   { name: "2f00bk313iru", id: "2f00bk313iru" },
//   { name: "2a00rt412uji", id: "2a00rt412uji" },
// ];

// const items = [
//   { name: "2a00sg309itg", id: 1 },
//   { name: "Martin Fernando Pramanik", id: 1 },
//   { name: "2g00of311lek", id: 2 },
//   { name: "Abdur Rafay Khan", id: 2 },
//   { name: "2d00io308jke", id: 3 },
//   { name: "Kyaw Nyi Nyi", id: 3 },
//   { name: "2h00vd310gdf", id: 4 },
//   { name: "Syed Ibrahim Ali", id: 4 },
//   { name: "2t00ml394ndi", id: 5 },
//   { name: "Molly Bonsall", id: 5 },
//   { name: "2f00bk313iru", id: 6 },
//   { name: "Jake Schwegler", id: 6 },
// ];

// /* ---------------------------
//   Small UI components
//    --------------------------- */

// function NumberBadge({ n }: { n: number }) {
//   return (
//     <div className="w-8 h-8 flex items-center justify-center rounded-full bg-cy-500 text-white font-semibold">
//       {n}
//     </div>
//   );
// }

// /* Animated certificate info card */
// function CertificateCard({
//   heading,
//   description,
//   stepInfo,
//   imgSrc,
//   actionLink,
//   actionText,
// }: {
//   heading: string;
//   description: string;
//   stepInfo: { label: string; link?: string }[];
//   imgSrc?: string;
//   actionLink?: string;
//   actionText?: string;
// }) {
//   return (
//     <motion.section
//       initial={{ opacity: 0, y: 18 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.35 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       className="mb-12"
//     >
//       <div className="lg:grid lg:grid-cols-2 gap-8 items-center">
//         <div>
//           <h2 className="text-2xl font-semibold mb-3">{heading} Certificate</h2>
//           <p className="text-gray-700 text-lg mb-6">{description}</p>

//           <div className="space-y-4">
//             {stepInfo.map((s, i) => (
//               <div key={i} className="flex items-start gap-4">
//                 <NumberBadge n={i + 1} />
//                 <div className="leading-tight">
//                   {s.link ? (
//                     <a
//                       href={s.link}
//                       className="text-blue-600 underline hover:text-blue-700"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       {s.label}
//                     </a>
//                   ) : (
//                     <span>{s.label}</span>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {actionLink && (
//             <div className="mt-6">
//               <a
//                 href={actionLink}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="inline-block bg-blue-600 text-white px-5 py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition"
//               >
//                 {actionText ?? "Apply"}
//               </a>
//             </div>
//           )}
//         </div>

//         {imgSrc && (
//           <div className="mt-6 lg:mt-0 flex justify-center lg:justify-end">
//             <img className="w-48 h-auto" src={imgSrc} alt={`${heading} illustration`} />
//           </div>
//         )}
//       </div>
//     </motion.section>
//   );
// }

// /* ---------------------------
//   Search component (animated)
//    --------------------------- */
// function AnimatedSearch({ onSelect }: { onSelect: (id: string) => void }) {
//   function formatResult(item: any) {
//     return (
//       <div className="p-2">
//         <div className="text-sm font-medium">{item.name}</div>
//       </div>
//     );
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: -8 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.45 }}
//       className="w-full max-w-xl"
//     >
//       <ReactSearchAutocomplete
//         items={items}
//         onSelect={(item) => {
//           // item.id is the numeric id in list -> map to uuid
//           const idx = item.id - 1;
//           if (uuid[idx]) onSelect(uuid[idx].id);
//         }}
//         styling={{
//           borderRadius: "999px",
//           boxShadow: "0 6px 18px rgba(15,23,42,0.06)",
//           height: "48px",
//           zIndex: 50,
//           fontSize: "15px",
//         }}
//         autoFocus={false}
//         formatResult={formatResult}
//         maxResults={6}
//         placeholder="Search certificate ID or recipient name..."
//       />
//     </motion.div>
//   );
// }

// /* ---------------------------
//   Page: Certificates
//    --------------------------- */
// export default function CertificatesPage() {
//   const router = useRouter();

//   const handleSelect = (id: string) => {
//     // push to real certificate page
//     router.push(`/certificates/${id}`);
//   };

//   return (
//     <main className="min-h-screen flex flex-col items-center pt-24 pb-20">
//       {/* Hero */}
//       <header className="w-full max-w-6xl px-6 sm:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 8 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, ease: "easeOut" }}
//           className="flex flex-col items-center"
//         >
//           <h1 className="text-6xl sm:text-7xl font-extrabold leading-tight mb-8 text-center">
//             Certificates
//           </h1>

//           <p className="max-w-2xl text-center text-gray-600 mb-8">
//             Official recognition for our most helpful contributors — searchable by
//             certificate ID or name. Click a result to view the certificate.
//           </p>

//           <AnimatedSearch onSelect={handleSelect} />
//         </motion.div>
//       </header>

//       {/* Main content */}
//       <section className="w-full max-w-5xl px-6 sm:px-8 mt-12">
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.35 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h3 className="text-3xl font-semibold mb-6">How these certificates help</h3>
//           <div className="grid md:grid-cols-2 gap-6 items-center">
//             <p className="text-gray-700 text-lg">
//               r/alevel certificates are awarded to members who have supported the
//               community in meaningful ways. They are designed to be professional
//               and can be shared with university applications or LinkedIn profiles.
//             </p>
//             <div className="flex justify-center md:justify-end">
//               <div className="rounded-xl bg-gradient-to-br from-cy-100 to-cy-300 p-6 shadow-lg">
//                 <img src="/cert_pg/medal.png" alt="medal" className="w-36" />
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Certificates list (animated cards) */}
//         <div className="mt-12">
//           <CertificateCard
//             heading="Helper"
//             description="Awarded to members who consistently help others through answers, resources, and moderation."
//             stepInfo={[
//               { label: "Join our community on Discord and Reddit", link: "https://discord.gg/r-alevel-1114437735692902481" },
//               { label: "Start helping — answer questions, review resources" },
//               { label: "Eligibility: ~100 helpful reps on Discord" },
//               { label: "Certificates awarded based on overall community activity" },
//             ]}
//             imgSrc="/cert_pg/svg-1.png"
//           />

//           <CertificateCard
//             heading="Writer"
//             description="For creators who publish well-researched, clear, and helpful blog posts."
//             stepInfo={[
//               { label: "Join our community on Discord and Reddit", link: "https://discord.gg/r-alevel-1114437735692902481" },
//               { label: "Fill the application form to apply as a writer", link: "https://docs.google.com/forms/d/e/1FAIpQLSeQ7LAYUjRtWunMRPPwdZyAtBN1lCXZt2A-tbcz_psc-DTC8Q/viewform?usp=sf_link" },
//               { label: "Eligibility: publish at least 10 blog posts" },
//               { label: "Certificates awarded once the 10th blog is approved" },
//             ]}
//             imgSrc="/cert_pg/svg-2.png"
//             actionLink="https://docs.google.com/forms/d/e/1FAIpQLSeQ7LAYUjRtWunMRPPwdZyAtBN1lCXZt2A-tbcz_psc-DTC8Q/viewform?usp=sf_link"
//             actionText="Apply as Writer"
//           />

//           <CertificateCard
//             heading="Resource Contributor"
//             description="For members who share useful notes, guides, or interactive tools for subjects."
//             stepInfo={[
//               { label: "Join our community on Discord and Reddit", link: "https://discord.gg/r-alevel-1114437735692902481" },
//               { label: "Submit resources using our contributor form", link: "https://docs.google.com/forms/d/e/1FAIpQLSfUhcZGsksSn8GRLQAOwYW8wTpJLWTZZ7SPmlRJ5T6rgYUPUQ/viewform?usp=sf_link" },
//               { label: "Eligibility: a reasonable set of approved resources" },
//               { label: "Certificates awarded after admin approval" },
//             ]}
//             imgSrc="/cert_pg/svg-3.png"
//             actionLink="https://docs.google.com/forms/d/e/1FAIpQLSfUhcZGsksSn8GRLQAOwYW8wTpJLWTZZ7SPmlRJ5T6rgYUPUQ/viewform?usp=sf_link"
//             actionText="Submit a Resource"
//           />
//         </div>
//       </section>

//       {/* Final call-to-action */}
//       <motion.div
//         initial={{ opacity: 0, y: 18 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.4 }}
//         transition={{ duration: 0.6 }}
//         className="w-full max-w-5xl px-6 sm:px-8 mt-12"
//       >
//         <div className="rounded-2xl p-8 bg-gradient-to-r from-blue-50 to-white border shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
//           <div>
//             <h3 className="text-2xl font-semibold">Want a certificate but unsure where to start?</h3>
//             <p className="text-gray-700 mt-2">Join Discord, help others, and apply for the role that fits you.</p>
//           </div>

//           <div className="flex gap-4">
//             <a
//               href="https://discord.gg/r-alevel-1114437735692902481"
//               target="_blank"
//               rel="noreferrer"
//               className="px-4 py-2 rounded-full bg-cy-600 text-white font-semibold hover:bg-cy-700 transition"
//             >
//               Join Discord
//             </a>
//             <a
//               href="/team"
//               className="px-4 py-2 rounded-full border border-gray-200 hover:bg-gray-50 transition"
//             >
//               Meet the Team
//             </a>
//           </div>
//         </div>
//       </motion.div>
//     </main>
//   );
// }

"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { motion } from "framer-motion";
import { CheckCircle, PenTool, Share2 } from "lucide-react";
import { Variants } from "framer-motion";


/* ---------------------------
  Dummy data for search
--------------------------- */
  const uuid = [
    { name: "2a00sg309itg", id: "2a00sg309itg" },
    { name: "2g00of311lek", id: "2g00of311lek" },
    { name: "2d00io308jke", id: "2d00io308jke" },
    { name: "2h00vd310gdf", id: "2h00vd310gdf" },
    { name: "2t00ml394ndi", id: "2t00ml394ndi" },
    { name: "2f00bk313iru", id: "2f00bk313iru" },
    { name: "2a00rt412uji", id: "2a00rt412uji" },
  ];

  const items = [
    { name: "2a00sg309itg", id: 1 },
    { name: "Martin Fernando Pramanik", id: 1 },
    { name: "2g00of311lek", id: 2 },
    { name: "Abdur Rafay Khan", id: 2 },
    { name: "2d00io308jke", id: 3 },
    { name: "Kyaw Nyi Nyi", id: 3 },
    { name: "2h00vd310gdf", id: 4 },
    { name: "Syed Ibrahim Ali", id: 4 },
    { name: "2t00ml394ndi", id: 5 },
    { name: "Molly Bonsall", id: 5 },
    { name: "2f00bk313iru", id: 6 },
    { name: "Jake Schwegler", id: 6 },
  ];

/* ---------------------------
  UI Components
--------------------------- */


const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1], // use cubic-bezier instead of "easeOut"
    },
  }),
};

/* Certificate Section */
function CertificateBlock({
  icon: Icon,
  title,
  description,
  steps,
  actionLink,
  actionText,
  gradientFrom,
  gradientTo,
}: {
  icon: any;
  title: string;
  description: string;
  steps: { label: string; link?: string }[];
  actionLink?: string;
  actionText?: string;
  gradientFrom: string;
  gradientTo: string;
}) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className={`relative rounded-2xl p-8 overflow-hidden mb-20 bg-gradient-to-br ${gradientFrom} ${gradientTo} shadow-lg`}
    >
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-semibold text-white">{title} Certificate</h2>
        </div>

        <p className="text-white/90 mb-6 leading-relaxed text-lg max-w-2xl">
          {description}
        </p>

        <div className="space-y-3">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              className="flex items-start gap-3 text-white/95"
            >
              <div className="min-w-[1.75rem] h-[1.75rem] flex items-center justify-center rounded-full bg-white/30 text-white font-semibold">
                {i + 1}
              </div>
              {step.link ? (
                <a
                  href={step.link}
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-white transition"
                >
                  {step.label}
                </a>
              ) : (
                <span>{step.label}</span>
              )}
            </motion.div>
          ))}
        </div>

        {actionLink && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-6"
          >
            <a
              href={actionLink}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-white text-gray-900 px-6 py-2 rounded-full font-semibold shadow hover:scale-[1.03] transition"
            >
              {actionText ?? "Apply"}
            </a>
          </motion.div>
        )}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
    </motion.section>
  );
}

/* Search Component */
function AnimatedSearch({ onSelect }: { onSelect: (id: string) => void }) {
  function formatResult(item: any) {
    return (
      <div className="p-2">
        <div className="text-sm font-medium">{item.name}</div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="w-full max-w-xl"
    >
      <ReactSearchAutocomplete
        items={items}
        onSelect={(item) => {
          const idx = item.id - 1;
          if (uuid[idx]) onSelect(uuid[idx].id);
        }}
        styling={{
          // borderRadius: "999px",
          boxShadow: "0 6px 18px rgba(15,23,42,0.06)",
          height: "48px",
          zIndex: 50,
          fontSize: "15px",
        }}
        formatResult={formatResult}
        maxResults={4}
        placeholder="Search certificate ID or recipient name..."
      />
    </motion.div>
  );
}

/* ---------------------------
  Main Page
--------------------------- */
export default function CertificatesPage() {
  const router = useRouter();
  const handleSelect = (id: string) => router.push(`/certificates/${id}`);

  return (
    <main className="min-h-screen flex flex-col items-center pt-24 pb-20">
      {/* Hero */}
      <header className="w-full mb-44 max-w-6xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <h1 className="text-6xl sm:text-7xl font-extrabold leading-tight mb-8 text-center">
            Certificates
          </h1>
          <p className="max-w-2xl text-center text-gray-600 mb-8">
            Recognition for members who elevate r/alevel — through mentorship, writing, or sharing resources.
          </p>
          <AnimatedSearch onSelect={handleSelect} />
        </motion.div>
      </header>

      {/* Info Section */}
      <section className="w-full max-w-5xl px-6 sm:px-8 mt-14">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1, delay:0.8 } }
        >
          <h3 className="text-3xl font-semibold mb-6">How certificates work</h3>
          <p className="text-gray-700 text-lg mb-16">
            Every r/alevel certificate celebrates genuine contribution — whether through solving doubts, writing insightful articles, or building resources that help thousands of students.
          </p>

          {/* NEW, MODERNIZED Certificate Sections */}
          <CertificateBlock
            icon={CheckCircle}
            title="Helper"
            description="For those who consistently make learning easier for others — guiding, solving, and encouraging peers across our community."
            gradientFrom="from-green-600"
            gradientTo="to-lime-300"
            steps={[
              { label: "Join Discord and Reddit", link: "https://discord.gg/r-alevel-1114437735692902481" },
              { label: "Answer questions and support peers regularly" },
              { label: "Earn ~100 reputation points on Discord" },
              { label: "Admins verify your impact before issuing the certificate" },
            ]}
          />

          <CertificateBlock
            icon={PenTool}
            title="Writer"
            description="For authors who craft informative, accurate, and student-friendly blog posts — helping thousands through clarity and insight."
            gradientFrom="from-pink-500"
            gradientTo="to-rose-600"
            steps={[
              { label: "Join r/alevel community on Discord or Reddit", link: "https://discord.gg/r-alevel-1114437735692902481" },
              { label: "Apply as a writer via Google Form", link: "https://docs.google.com/forms/d/e/1FAIpQLSeQ7LAYUjRtWunMRPPwdZyAtBN1lCXZt2A-tbcz_psc-DTC8Q/viewform?usp=sf_link" },
              { label: "Publish 10 approved posts on r/alevel Blogs" },
              { label: "Receive a Writer Certificate after your 10th publication" },
            ]}
            actionLink="https://docs.google.com/forms/d/e/1FAIpQLSeQ7LAYUjRtWunMRPPwdZyAtBN1lCXZt2A-tbcz_psc-DTC8Q/viewform?usp=sf_link"
            actionText="Apply as Writer"
          />

          <CertificateBlock
            icon={Share2}
            title="Resource Contributor"
            description="For contributors who share high-quality notes, guides, or interactive learning tools that uplift the entire student body."
            gradientFrom="from-indigo-500"
            gradientTo="to-sky-600"
            steps={[
              { label: "Join Discord and Reddit", link: "https://discord.gg/r-alevel-1114437735692902481" },
              { label: "Submit your resources using our official form", link: "https://docs.google.com/forms/d/e/1FAIpQLSfUhcZGsksSn8GRLQAOwYW8wTpJLWTZZ7SPmlRJ5T6rgYUPUQ/viewform?usp=sf_link" },
              { label: "Wait for moderator approval" },
              { label: "Earn a Contributor Certificate for accepted submissions" },
            ]}
            actionLink="https://docs.google.com/forms/d/e/1FAIpQLSfUhcZGsksSn8GRLQAOwYW8wTpJLWTZZ7SPmlRJ5T6rgYUPUQ/viewform?usp=sf_link"
            actionText="Submit a Resource"
          />
        </motion.div>
      </section>

      {/* Final CTA */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl px-6 sm:px-8 mt-12"
      >
        <div className="rounded-2xl p-8 bg-gradient-to-r from-blue-50 to-white border shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold">Want a certificate but unsure where to start?</h3>
            <p className="text-gray-700 mt-2">Join Discord, help others, and apply for the role that fits you.</p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://discord.gg/r-alevel-1114437735692902481"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-full bg-cy-600 text-white font-semibold hover:bg-cy-700 transition"
            >
              Join Discord
            </a>
            <a
              href="/team"
              className="px-4 py-2 rounded-full border border-gray-200 hover:bg-gray-50 transition"
            >
              Meet the Team
            </a>
          </div>
        </div>
      </motion.div>
    </main>
  );
}