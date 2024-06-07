"use client";

import { navigate } from "./action";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

import { useState, useEffect } from "react";

// function Profile() {
//   const [data, setData] = useState(null);
//   const [isLoading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("/api/resources")
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data);
//         setLoading(false);
//       });
//   }, []);

//   let uuid = []

//   for (let i = 0; i < data!.length; i++) {
//     const el = data[i];
//     uuid.push(el)
//   }

//   const uuid= data!.map((subject: any) => {
//     return { name: subject.title, id: subject._id };
//   });
//   console.log(uuid);

//   return data;
// }

function Search() {
  // const subjects = await getAllSubjects();

  // const items = subjects.map((subject: any) => {
  //   return { name: subject.title, id: subject.id };
  // });
  // const data = Profile()!["data"];
  // console.log(data);

  // console.log(items);

  const uuid = [
    { name: "accounting", id: "6655b6b02e379ceca333520c" },
    { name: "biology", id: "6655b6b02e379ceca333520d" },
    { name: "business studies", id: "6655b6b02e379ceca333520e" },
    { name: "business", id: "6655b6b02e379ceca333520f" },
    { name: "chemistry", id: "6655b6b02e379ceca3335210" },
    { name: "computer science", id: "6655b6b02e379ceca3335211" },
    { name: "economics", id: "6655b6b02e379ceca3335212" },
    { name: "english language", id: "6655b6b02e379ceca3335213" },
    { name: "environmental studies", id: "6655b6b02e379ceca3335214" },
    { name: "further mathematics", id: "6655b6b02e379ceca3335215" },
    { name: "geography", id: "6655b6b02e379ceca3335216" },
    { name: "history", id: "6655b6b02e379ceca3335217" },
    { name: "information technology", id: "6655b6b02e379ceca3335218" },
    { name: "mathematics", id: "6655b6b02e379ceca3335219" },
    { name: "physics", id: "6655b6b02e379ceca333521a" },
    { name: "psychology", id: "6655b6b02e379ceca333521b" },
    { name: "sociology", id: "6655b6b02e379ceca333521c" },
    { name: "spanish", id: "6655b6b02e379ceca333521d" },
  ];

  const items = [
    { name: "accounting", id: 1 },
    { name: "biology", id: 2 },
    { name: "business studies", id: 3 },
    { name: "business", id: 4 },
    { name: "chemistry", id: 5 },
    { name: "computer science", id: 6 },
    { name: "economics", id: 7 },
    { name: "english language", id: 8 },
    { name: "environmental studies", id: 9 },
    { name: "further mathematics", id: 10 },
    { name: "geography", id: 11 },
    { name: "history", id: 12 },
    { name: "information technology", id: 13 },
    { name: "mathematics", id: 14 },
    { name: "physics", id: 15 },
    { name: "psychology", id: 16 },
    { name: "sociology", id: 17 },
    { name: "spanish", id: 18 },
  ];

  const handleOnSearch = (string: any, results: any) => {
    // let newSearch = uuid.filter((item) => {
    // if (item.name === string) return true;
    // else return false;
    // });
    // if (newSearch[newSearch].length - 1])
    // navigate(newSearch[newSearch.length - 1].id);
    // if ((results.length = 1)) console.log(results[0]);
  };

  const handleOnSelect = (item: any) => {
    // the item selected
    // console.log("selected" + item);
    navigate(uuid[item.id - 1].id);
  };

  const formatResult = (item: any) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>{item.name}</span>
      </>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: 400 }}>
          <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onSelect={handleOnSelect}
            autoFocus
            formatResult={formatResult}
            maxResults={4}
          />
        </div>
      </header>
    </div>
  );
}

export default function Resources() {
  return (
    <div className="flex flex-col items-center min-h-lvh">
      <h1 className="text-6xl font-bold mt-32 mb-16">Resource Repository</h1>
      <Search />
    </div>
  );
}

// export default async function Resources() {
//   return (
//     <div>
//       <div>
//         {subjects.map((subject: any) => {
//           return (
//             <div key={subject._id} className="mb-10">
//               <div>
//                 <h1>{subject.emoji}</h1>
//                 <a
//                   href={`http://localhost:3000/resources/${subject._id}`}
//                   className="text-blue-700"
//                 >
//                   {subject.title}
//                 </a>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
