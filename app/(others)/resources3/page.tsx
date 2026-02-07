// "use client"
// import { navigate } from "./action";
// import { ReactSearchAutocomplete } from "react-search-autocomplete";

// function Search() {
//   // const subjects = await getAllSubjects();

//   // const items = subjects.map((subject: any) => {
//   //   return { name: subject.title, id: subject.id };
//   // });
//   // const data = Profile()!["data"];
//   // console.log(data);

//   // console.log(items);

//   const uuid = [
//     { name: "accounting", id: "6655b6b02e379ceca333520c" },
//     { name: "biology", id: "6655b6b02e379ceca333520d" },
//     { name: "business studies", id: "6655b6b02e379ceca333520e" },
//     { name: "business", id: "6655b6b02e379ceca333520f" },
//     { name: "chemistry", id: "6655b6b02e379ceca3335210" },
//     { name: "computer science", id: "6655b6b02e379ceca3335211" },
//     { name: "economics", id: "6655b6b02e379ceca3335212" },
//     { name: "english language", id: "6655b6b02e379ceca3335213" },
//     { name: "environmental studies", id: "6655b6b02e379ceca3335214" },
//     { name: "further mathematics", id: "6655b6b02e379ceca3335215" },
//     { name: "geography", id: "6655b6b02e379ceca3335216" },
//     { name: "history", id: "6655b6b02e379ceca3335217" },
//     { name: "information technology", id: "6655b6b02e379ceca3335218" },
//     { name: "mathematics", id: "6655b6b02e379ceca3335219" },
//     { name: "physics", id: "6655b6b02e379ceca333521a" },
//     { name: "psychology", id: "6655b6b02e379ceca333521b" },
//     { name: "sociology", id: "6655b6b02e379ceca333521c" },
//     { name: "spanish", id: "6655b6b02e379ceca333521d" },
//   ];

//   const items = [
//     { name: "accounting", id: 1 },
//     { name: "biology", id: 2 },
//     { name: "business studies", id: 3 },
//     { name: "business", id: 4 },
//     { name: "chemistry", id: 5 },
//     { name: "computer science", id: 6 },
//     { name: "economics", id: 7 },
//     { name: "english language", id: 8 },
//     { name: "environmental studies", id: 9 },
//     { name: "further mathematics", id: 10 },
//     { name: "geography", id: 11 },
//     { name: "history", id: 12 },
//     { name: "information technology", id: 13 },
//     { name: "mathematics", id: 14 },
//     { name: "physics", id: 15 },
//     { name: "psychology", id: 16 },
//     { name: "sociology", id: 17 },
//     { name: "spanish", id: 18 },
//   ];

//   const handleOnSearch = (string: any, results: any) => {
//     // let newSearch = uuid.filter((item) => {
//     // if (item.name === string) return true;
//     // else return false;
//     // });
//     // if (newSearch[newSearch].length - 1])
//     // navigate(newSearch[newSearch.length - 1].id);
//     // if ((results.length = 1)) console.log(results[0]);
//   };

//   const handleOnSelect = (item: any) => {
//     // the item selected
//     // console.log("selected" + item);
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
//             placeholder="Enter Subject Name"
//           />
//         </div>
//       </header>
//     </div>
//   );
// }

// export default function Resources() {
//   return (
//     <div className="flex flex-col items-center min-h-[70lvh] px-5">
//       <h1 className="text-6xl max-xs:text-3xl max-sm:text-4xl max-md:text-5xl font-bold mt-32 mb-16 text-center">
//         Resource Repository
//       </h1>
//       <Search />
//     </div>
//   );
// }

// // export default async function Resources() {
// //   return (
// //     <div>
// //       <div>
// //         {subjects.map((subject: any) => {
// //           return (
// //             <div key={subject._id} className="mb-10">
// //               <div>
// //                 <h1>{subject.emoji}</h1>
// //                 <a
// //                   href={`http://localhost:3000/resources/${subject._id}`}
// //                   className="text-blue-700"
// //                 >
// //                   {subject.title}
// //                 </a>
// //               </div>
// //             </div>
// //           );
// //         })}
// //       </div>
// //     </div>
// //   );
// // }

"use client";

import { useRouter } from "next/navigation";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

function Search() {
  const router = useRouter();
  const updated = [
    { name: "chemistry", id: "chemistry" },
    { name: "biology", id: "biology" },
    { name: "business", id: "business" },
    { name: "physics", id: "physics" },
    { name: "accounting", id: "accounting" },
    { name: "arabic", id: "arabic" },
    { name: "business studies", id: "business_studies" },
    { name: "chemistry", id: "chemistry" },
    { name: "computer science", id: "computer_science" },
    { name: "economics", id: "economics" },
    { name: "english language", id: "english_language" },
    { name: "english literature", id: "english_literature" },
    { name: "environmental studies", id: "environmental_studies" },
    { name: "further mathematics", id: "further_mathematics" },
    { name: "geography", id: "geography" },
    { name: "history", id: "history" },
    { name: "information technology", id: "information_technology" },
    { name: "media studies", id: "media_studies" },
    { name: "mathematics", id: "mathematics" },
    { name: "art and design", id: "art_and_design" },
    { name: "physics", id: "physics" },
    { name: "drama", id: "drama" },
    { name: "psychology", id: "psychology" },
    { name: "sociology", id: "sociology" },
    { name: "spanish", id: "spanish" },
    { name: "french", id: "french" },
    { name: "law", id: "law" },
    { name: "music", id: "music" },
    { name: "urdu", id: "urdu" },
  ];

  const uuid = [
    { name: "accounting", id: "6655b6b02e379ceca333520c", updated: true },
    { name: "biology", id: "6655b6b02e379ceca333520d" },
    { name: "business studies", id: "6655b6b02e379ceca333520e" },
    { name: "business", id: "6655b6b02e379ceca333520f" },
    { name: "chemistry", id: "6655b6b02e379ceca3335210", updated: true },
    { name: "computer science", id: "6655b6b02e379ceca3335211" },
    { name: "arabic", id: "69720245a1db954b6b71c0f7" },
    { name: "art and design", id: "69720257a1db954b6b71c0f8" },
    { name: "drama", id: "6972028da1db954b6b71c0fb" },
    { name: "economics", id: "6655b6b02e379ceca3335212", updated: true },
    { name: "english language", id: "6655b6b02e379ceca3335213" },
    { name: "english literature", id: "697202a6a1db954b6b71c0fd" },
    { name: "environmental studies", id: "6655b6b02e379ceca3335214" },
    { name: "further mathematics", id: "6655b6b02e379ceca3335215" },
    { name: "geography", id: "6655b6b02e379ceca3335216" },
    { name: "history", id: "6655b6b02e379ceca3335217" },
    { name: "information technology", id: "6655b6b02e379ceca3335218" },
    { name: "mathematics", id: "6655b6b02e379ceca3335219" },
    { name: "music", id: "6655b6b02e379ceca3335219" },
    { name: "physics", id: "6655b6b02e379ceca333521a", updated: true },
    { name: "psychology", id: "6655b6b02e379ceca333521b" },
    { name: "sociology", id: "6655b6b02e379ceca333521c" },
    { name: "spanish", id: "6655b6b02e379ceca333521d" },
    { name: "media studies", id: "6655b6b02e379ceca333521d" },
    { name: "french", id: "697202b0a1db954b6b71c0fe" },
    { name: "law", id: "697202b0a1db954b6b71c0fe" },
    { name: "urdu", id: "697202b0a1db954b6b71c0fe" },
  ];

  const items = uuid.map((item, index) => ({ name: item.name, id: index + 1 }));

  const handleOnSelect = (item: any) => {
    const selected = uuid[item.id - 1];
    if (selected) {
      // ✅ navigate client-side
      // CODE TO REDIRECT TO UPDATED RESOURCES
      const isUpdated = function (sub: any) {
        return sub.name == selected.name;
      };
      router.push(`/resources2/${updated.find(isUpdated)?.id}`);
      // selected.updated
      //   ? router.push(`/resources2/${updated.find(isUpdated)?.id}`)
      //   : router.push(`/resources/${selected.id}`);
    }
  };

  const formatResult = (item: any) => (
    <span style={{ display: "block", textAlign: "left" }}>{item.name}</span>
  );

  return (
    <div className="App">
      <header className="App-header">
        <div className="w-[400px] max-sm:w-[300px]">
          <ReactSearchAutocomplete
            items={items}
            onSelect={handleOnSelect}
            autoFocus
            formatResult={formatResult}
            maxResults={4}
            placeholder="Enter Subject Name"
          />
        </div>
      </header>
    </div>
  );
}

export default function Resources() {
  return (
    <div className="flex flex-col items-center min-h-[70lvh] px-5">
      <h1 className="text-6xl max-xs:text-3xl max-sm:text-4xl max-md:text-5xl font-bold mt-32 mb-16 text-center">
        Resource Repository
      </h1>
      <Search />
    </div>
  );
}
