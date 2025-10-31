"use client";

import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useRouter } from "next/navigation";

function Search() {
  const router = useRouter();

  const uuid = [
    { name: "accounting", id: "accounting" },
    { name: "biology", id: "biology" },
    { name: "business studies", id: "business_studies" },
    { name: "business", id: "business" },
    { name: "chemistry", id: "chemistry" },
    { name: "computer science", id: "computer_science" },
    { name: "economics", id: "economics" },
    { name: "english language", id: "english_language" },
    { name: "environmental studies", id: "environmental_studies" },
    { name: "further mathematics", id: "further_mathematics" },
    { name: "geography", id: "geography" },
    { name: "history", id: "history" },
    { name: "information technology", id: "information_technology" },
    { name: "mathematics", id: "mathematics" },
    { name: "physics", id: "physics" },
    { name: "psychology", id: "psychology" },
    { name: "sociology", id: "sociology" },
    { name: "spanish", id: "spanish" },
  ];

  const items = uuid.map((item, index) => ({
    name: item.name,
    id: index + 1,
  }));

  const handleOnSelect = (item: any) => {
    const selected = uuid[item.id - 1];
    router.push(`/subject_guide/g/${selected.id}`);
  };

  const formatResult = (item: any) => {
    return (
      <span style={{ display: "block", textAlign: "left" }}>{item.name}</span>
    );
  };

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
        Official Subject Guides
      </h1>
      <Search />
    </div>
  );
}