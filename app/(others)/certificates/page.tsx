"use client";

import { navigate } from "./action";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

const Search = function () {
  const uuid = [
    { name: "2a00sg309itg", id: "2a00sg309itg" },
    { name: "2g00of311lek", id: "2g00of311lek" },
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
    { name: "2a00sg309itg", id: 1 },
    { name: "2g00of311lek", id: 2 },
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
    console.log(string);
  };

  const handleOnSelect = (item: any) => {
    // the item selected
    // console.log("selected " + item.id);
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
};

const Step2 = function ({
  link,
  linkText,
  actualLink,
}: {
  link: boolean;
  linkText?: string;
  actualLink?: string;
}) {
  if (link)
    return (
      <div className="h-bullet-text">
        Fill <a href={actualLink}>this</a> {linkText}
      </div>
    );
  else return <h1>Start Helping!</h1>;
};

const InfoCon = function ({
  heading,
  info,
  link,
  linkText,
  actualLink,
  s3,
  s4,
  imgSrc,
}: {
  heading: string;
  info: string;
  link: boolean;
  linkText?: string;
  actualLink?: string;
  s3: string;
  s4: string;
  imgSrc: string;
}) {
  return (
    <div className="mb-28">
      <div className="lg:grid grid-cols-2 grid-flow-col w-full content-between items-center">
        <div>
          <h1 className="text-3xl font-semibold">{heading} Certificate</h1>
          <div>
            <p className="text-xl text-gray-700 my-6">{info}</p>
          </div>
          <div className="flex gap-2 text-lg mb-4 ">
            <div className="bg-cy-500 rounded-full text-white font-bold w-8 h-8 flex justify-center items-center">
              1
            </div>
            <div className="h-bullet-text">
              Join our community on{" "}
              <a href="https://discord.gg/r-alevel-1114437735692902481">
                Discord
              </a>{" "}
              and <a href="https://www.reddit.com/r/alevel/">Reddit</a>{" "}
            </div>
          </div>
          <div className="flex gap-2 text-lg mb-4 ">
            <div className="bg-cy-500 rounded-full text-white font-bold w-8 h-8 flex justify-center items-center">
              2
            </div>
            <Step2 link={link} linkText={linkText} actualLink={actualLink} />
          </div>
          <div className="flex gap-2 text-lg mb-4 ">
            <div className="bg-cy-500 rounded-full text-white font-bold w-8 h-8 flex justify-center items-center">
              3
            </div>
            <div className="h-bullet-text">Eligibility criteria: {s3}</div>
          </div>
          <div className="flex gap-2 text-lg mb-4 ">
            <div className="bg-cy-500 rounded-full text-white font-bold w-8 h-8 flex justify-center items-center">
              4
            </div>
            <div className="h-bullet-text">{s4}</div>
          </div>
        </div>
        <div className="h-img w-3/5 justify-self-center hidden lg:block">
          <img src={imgSrc} alt="Image"></img>
        </div>
      </div>
    </div>
  );
};

const CertContent = function () {
  return (
    <div className="mt-72 mb-20">
      <h1 className="text-3xl font-semibold mb-3">
        How are these certificates going to help me?
      </h1>
      <div className="flex text-gray-700 text-xl gap-4 items-center">
        <p>
          r/alevel certificates are distributed as an honour to some of our most
          helpful members for their efforts in helping our community. These
          certificates can serve as a proof of extra curricular activity by the
          student. They can be submitted with university application and on
          social media profiles (e.g. linkedin). <br /> <br /> Have a look at
          all the certificates we offer below!
        </p>
        <img
          className="w-1/6 hidden md:block"
          src="/cert_pg/medal.png"
          alt=""
        ></img>
      </div>
    </div>
  );
};

export default function Cert() {
  return (
    <div className="flex flex-col items-center min-h-lvh ">
      <div>
        <h1 className="text-6xl font-bold mt-32 mb-16">Certificates</h1>
        <Search />
      </div>
      <div className="px-16">
        <CertContent />
        <InfoCon
          heading="Helper"
          info="Given to members who are show incredible helpfulness towards others"
          link={false}
          s3="minimum 80 karmas on Reddit or 80 reps on Discord from helping"
          s4="Certificates will be awarded on the basis of overall activity in the community"
          imgSrc="/cert_pg/svg-1.png"
        />

        <InfoCon
          heading="Writer"
          info="Write about whatever you are passionate about and help the community learn"
          link={true}
          linkText="form the apply to become a writer"
          actualLink="https://docs.google.com/forms/d/e/1FAIpQLSeQ7LAYUjRtWunMRPPwdZyAtBN1lCXZt2A-tbcz_psc-DTC8Q/viewform?usp=sf_link"
          s3="minimum of 10 blog posts"
          s4="Certificates will be awarded once the 10th blog is posted"
          imgSrc="/cert_pg/svg-2.png"
        />

        <InfoCon
          heading="Resource Contributor"
          info="Share resources made by you for any subject to help other fellow learners"
          link={true}
          linkText="form the apply to become a resource contributor"
          actualLink="https://docs.google.com/forms/d/e/1FAIpQLSfUhcZGsksSn8GRLQAOwYW8wTpJLWTZZ7SPmlRJ5T6rgYUPUQ/viewform?usp=sf_link"
          s3="a reasonable amount of resources for any subject"
          s4="Certificates will be awarded once the resource is approved by admins"
          imgSrc="/cert_pg/svg-3.png"
        />
      </div>
    </div>
  );
}
