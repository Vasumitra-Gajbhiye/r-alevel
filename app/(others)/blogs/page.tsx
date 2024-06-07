"use server";
import Image from "next/image";
import brain from "@/public/brain.jpg";
import getAllBlogs from "@/app/controller/getAllBlogs";

const FeatureAbout = function ({
  date,
  time,
  author,
}: {
  date: string;
  time: string;
  author: string;
}) {
  return (
    <div className="flex justify-between text-gray-600 text-xs mt-2">
      <div className="flex gap-10">
        <h6>{date}</h6>
        <h6>{time} min read</h6>
      </div>
      <h6>-{author}</h6>
    </div>
  );
};

const FeatureText = function ({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <h3 className="mt-5 text-xl font-bold">{title}</h3>
      <h5>{description}</h5>
    </div>
  );
};

const Feature = function () {
  return (
    <div className="mt-12">
      <h1 className="text-xl font-bold uppercase border-t-4 border-black pt-2">
        Feature
      </h1>
      <div className="grid grid-rows-2  gird-col-3 grid-flow-col gap-4 mt-10">
        <div className="row-span-2 col-span-2">
          <Image src={brain} alt="brain img" className="rounded-lg" />
          <FeatureAbout date="14 Feb" time="5" author="Vasumitra" />
          <FeatureText
            title="Why is being gay a bigger tragedy than 9/11"
            description="A good idiom for kids is Its raining cats and dogs. Kids know what
              both cats and dogs are from an early. A good idiom for kids is Its
              raining cats and dogs. Kids know what both cats and dogs are."
          />
        </div>
        <div>
          <div className="overflow-hidden max-h-56  rounded-lg">
            <Image src={brain} alt="brain img" className="-translate-y-16" />
          </div>
          <FeatureAbout date="14 Feb" time="5" author="Vasumitra" />
          <FeatureText
            title="Things of the Internet"
            description="A good idiom for kids is Its raining cats and dogs. Kids know what
              both cats and dogs."
          />
        </div>
        <div>
          <div className="overflow-hidden max-h-56  rounded-lg">
            <Image src={brain} alt="brain img" className="-translate-y-16" />
          </div>
          <FeatureAbout date="14 Feb" time="5" author="Vasumitra" />
          <FeatureText
            title="Things of the Internet"
            description="A good idiom for kids is Its raining cats and dogs. Kids know what
              both cats and dogs."
          />
        </div>
      </div>
    </div>
  );
};

const LatestPost = function ({
  tag,
  title,
  date,
  author,
  id,
}: {
  tag: string;
  title: string;
  date: string;
  author: string;
  id: string;
}) {
  return (
    <a href={`/blogs/${id}`}>
      <div className="flex flex-col items-center gap-1 border-b-2 border-gray-300 pb-4">
        <div className="max-h-64 overflow-hidden rounded-lg">
          <Image src={brain} alt="image" />
        </div>
        <h3 className="uppercase text-sky-600 font-semibold text-sm mt-2">
          {tag}
        </h3>
        <h4 className="font-semibold text-lg">{title}</h4>
        <h5 className="text-xs">
          {date} by <span className="text-blue-600">{author}</span>
          {/* <a
            className="underline text-blue-600 visited:text-purple-600 active:bg-blue-600 hover:text-gray-700 transition-all"
            href="/sdfas"
          >
            {author}
          </a> */}
        </h5>
      </div>
    </a>
  );
};

export default async function Blogs() {
  let allBlogs = [];
  allBlogs = await getAllBlogs();
  // console.log(Object.prototype.toString.call(allBlogs) == "[object Array]");

  return (
    <div className="px-16 mt-16  ">
      <h1 className="text-5xl font-bold text-center">Blogs</h1>
      <div>
        <Feature />
        <div className="my-36">
          <h1 className="text-xl font-bold uppercase border-t-4 border-black pt-2">
            Latest
          </h1>
          <div
            className="grid mt-10 gap-x-5 gap-y-20"
            style={{
              gridTemplateColumns: "repeat( auto-fit, minmax(300px, 1fr) )",
            }}
          >
            {allBlogs
              ? allBlogs.map((blog: any, i: number) => {
                  return (
                    <div key={i}>
                      <LatestPost
                        tag={blog.tag}
                        title={blog.mainTitle}
                        date={blog.date}
                        author={blog.author}
                        id={blog._id}
                      />
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}
