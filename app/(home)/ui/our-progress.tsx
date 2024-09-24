import Image from "next/image";
// import cloudImg from "@/public/home_img/blue-clouds.jpg";
import cloudImg from "@/public/home_img/progress bannar.png";

export default function OurProgress() {
  type propType = {
    title: string;
    titleAlt?: string;
    data: string;
    subtitle: string;
  };
  const CardProgress = function (props: propType) {
    return (
      <div className="bg-white rounded-lg p-5 drop-shadow-md	">
        <h5 className="hidden lg:block text-cy-700 font-bold text-base md:text-lg mb-1">
          {props.title}
        </h5>
        <h5 className=" lg:hidden text-cy-700 font-bold text-base md:text-lg mb-1">
          {props.titleAlt}
        </h5>
        <h3 className="md:text-3xl text-2xl font-semibold mb-3">
          {props.data}
        </h3>
        <h6 className="text-sm md:text-base">{props.subtitle} </h6>
      </div>
    );
  };
  return (
    <div className="bg-cy-200 flex flex-col items-center py-20 mb-52 ">
      <div className="w-11/12 h-full md:max-h-96 overflow-hidden rounded-lg">
        <Image src={cloudImg} alt="background image" className="w-full" />
      </div>

      <div className="flex flex-col items-center -mt-20 xxs:-mt-24 xs:-mt-32 md2:-mt-36 md:-mt-48  gap-10 w-5/6 ">
        <div className="flex flex-col items-center gap-4 text-center leading-3	text-white">
          <h1 className="font-extrabold text-2xl sm:text-3xl md2:text-4xl md:5xl">
            Our Standout Progress
          </h1>
          {/* <h4 className="md:text-xl md2:text-lg md:hidden text-base text-black font-medium">
            Result of our 10 years worth of hard work, making us the largest
            A-level community
          </h4> */}
          <h4 className="hidden md:block md:text-xl text-base text-white">
            From a very small and humble start about 10 years ago, we’ve create
            a community with passion to learn and help fellow members
          </h4>
        </div>
        <div className="grid grid-cols-1 xxs:grid-cols-2 md:grid-cols-4 gap-y-5 gap-x-5">
          <CardProgress
            title="Reddit Members"
            titleAlt="Reddit"
            data="100k+"
            subtitle="The number of members on our subreddit"
          />
          <CardProgress
            title="Discord Members"
            titleAlt="Discord"
            data="20k+"
            subtitle="The number of members on our discord server"
          />
          <CardProgress
            title="Avg Views"
            titleAlt="Avg Views"
            data="500k+"
            subtitle="The number of views on our subreddit per day"
          />
          <CardProgress
            title="Top"
            titleAlt="Top"
            data="2%"
            subtitle="Our subreddit is among the top 2% subreddits by size"
          />
        </div>
      </div>
    </div>
  );
}
