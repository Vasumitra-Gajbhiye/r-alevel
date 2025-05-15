"use client";

import { navigate } from "./action";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

const Search = function () {
  const uuid = [
    { name: "2a00sg309itg", id: "2a00sg309itg" },
    { name: "2g00of311lek", id: "2g00of311lek" },
    { name: "2d00io308jke", id: "2d00io308jke" },
    { name: "2h00vd310gdf", id: "2h00vd310gdf" },
    {name: "2t00ml394ndi", id: "2t00ml394ndi"},
  ];

  const items = [
    { name: "2a00sg309itg", id: 1 },
    { name: "2g00of311lek", id: 2 },
    { name: "2d00io308jke", id: 3 },
    { name: "2h00vd310gdf", id: 4 },
    { name: "2t00ml394ndi", id: 5 },
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
        Fill{" "}
        <a
          href={actualLink}
          className="text-blue-700 underline hover:text-violet-800"
          target="_blank"
        >
          this
        </a>{" "}
        {linkText}
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
            <div className="bg-cy-500 rounded-full text-white font-bold min-w-8 min-h-8 max-h-8 flex justify-center items-center">
              1
            </div>
            <div className="h-bullet-text">
              Join our community on{" "}
              <a
                href="https://discord.gg/r-alevel-1114437735692902481"
                target="_blank"
                className="text-blue-700 underline hover:text-violet-800"
              >
                Discord
              </a>{" "}
              and{" "}
              <a
                href="https://www.reddit.com/r/alevel/"
                target="_blank"
                className="text-blue-700 underline hover:text-violet-800"
              >
                Reddit
              </a>{" "}
            </div>
          </div>
          <div className="flex gap-2 text-lg mb-4 ">
            <div className="bg-cy-500 rounded-full text-white font-bold min-w-8 min-h-8 max-h-8 flex justify-center items-center">
              2
            </div>
            <Step2 link={link} linkText={linkText} actualLink={actualLink} />
          </div>
          <div className="flex gap-2 text-lg mb-4 ">
            <div className="bg-cy-500 rounded-full text-white font-bold min-w-8 min-h-8 max-h-8 flex justify-center items-center">
              3
            </div>
            <div className="h-bullet-text">Eligibility criteria: {s3}</div>
          </div>
          <div className="flex gap-2 text-lg mb-4 ">
            <div className="bg-cy-500 rounded-full text-white font-bold min-w-8 min-h-8 max-h-8  flex justify-center items-center">
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
          s3="minimum 100 reps on Discord from helping"
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
