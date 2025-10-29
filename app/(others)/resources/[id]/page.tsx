/*
import getSingleSubject from "@/app/controller/getSingleSubject";
import Image from "next/image";

export default async function SingleResource({ params: { id } }: any) {
  const subject = await getSingleSubject(id);

  return (
    
    // <div>
    //   <img
    //     src={"/res-img/" + subject.title.toLowerCase() + ".jpg"}
    //     alt="image"
    //   />
    //   <h1>{subject.emoji}</h1>
    //   <h1>{subject.title}</h1>
    //   <div className="flex flex-col gap-4">
    //     {subject.links.map((link: any) => {
    //       return (
    //         <a key={link._id} href={link.link} className="text-blue-700">
    //           {link.linkTitle}
    //         </a>
    //       );
    //     })}
    //   </div>
    // </div>
    



    <div className="px-4 md:px-16 font-poppins">
      <div className="w-full h-80 overflow-hidden	rounded-xl mt-4 xs:mt-12 md:mt-20 flex items-center">
        {
        // <img
        //   src={
        //     "/res-img/" +
        //     subject.title.toLowerCase().replace(/ /g, "-") +
        //     ".jpg"
        //   }
        //   alt="image"
        //   className="object-contain -z-10 "
        // /> 
        }
        { 
//         <img
//           src=
// "@/public/res-img/chemistry_comp.jpg"
          
//           alt="image"
//           className="object-contain -z-10 "
//         /> 
        }
      <Image src={"/res-img/" +
            subject.title.toLowerCase().replace(/ /g, "-") +
            "_comp.jpg"} alt="img" width={2000} height={1000} />
      </div>
      <div className="px-3 xs:px-5 md2:px-10 -mt-20 xs:-mt-12 md2:-mt-6">
        <div className="mb-16">
          <h1 className="text-7xl mb-5 ">{subject.emoji}</h1>
          <h1 className="text-6xl font-semibold 	">{subject.title}</h1>
        </div>
        <div className="flex flex-col mb-32">
          {subject.links.map((link: any, index: number) => {
            return (
              <>
                <a
                  target="_blank"
                  className="underline text-xl mb-3 visited:text-gray-500 text-gray-950 hover:bg-gray-100 transition-all px-1 rounded-sm"
                  key={index}
                  href={link.link}
                >
                  {link.linkTitle}
                </a>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
*/

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import getSingleSubject from "@/app/controller/getSingleSubject";

export default function SingleResource({ params: { id } }: any) {
  const [subject, setSubject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubject = async () => {
      try {
        const data = await getSingleSubject(id);
        setSubject(data);
      } catch (err) {
        console.error("Error loading subject:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSubject();
  }, [id]);

  // 🔹 SKELETON PLACEHOLDER
  if (loading || !subject) {
    return (
      <div className=" px-16 max-md:px-10 max-md2:px-7 font-poppins ">
        <div className="w-full flex items-center justify-center h-80 bg-gray-200 rounded-xl mt-4 max-xs:mt-12 max-md:mt-20  animate-shimmer">
          <svg className="w-16 h-16 text-gray-100 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
        </svg>
        </div>
        <div className=" -mt-20 xs:-mt-12 md2:-mt-6">
          <div className="mb-16">
            
            <div className="h-10 bg-gray-200 rounded w-2/3 mb-3 mt-24 animate-shimmer"></div>
          </div>
          <div className="flex flex-col mb-32 space-y-4">
            <div className="h-5 bg-gray-200 rounded w-1/2 animate-shimmer"></div>
            <div className="h-5 bg-gray-200 rounded w-3/4 animate-shimmer"></div>
            <div className="h-5 bg-gray-200 rounded w-2/3 animate-shimmer"></div>
            <div className="h-5 bg-gray-200 rounded w-1/3 animate-shimmer"></div>
          </div>
        </div>
      </div>
    );
  }

  // 🔹 ACTUAL CONTENT
  return (
    <div className="px-16 max-md:px-10 max-md2:px-7 font-poppins">
      <div className="w-full h-80 overflow-hidden rounded-3xl  mt-10 max-xs:mt-1 max-md:mt-14 max-md2:mt-6 max-xxs:mt-0 flex items-center">
        {
        // <img
        //   src={
        //     "/res-img/" +
        //     subject.title.toLowerCase().replace(/ /g, "-") +
        //     ".jpg"
        //   }
        //   alt="image"
        //   className="object-contain -z-10 "
        // /> 
        }
        { 
//         <img
//           src=
// "@/public/res-img/chemistry_comp.jpg"
          
//           alt="image"
//           className="object-contain -z-10 "
//         /> 
        }
      <Image className="rounded-2xl" src={"/res-img/" +
            subject.title.toLowerCase().replace(/ /g, "-") +
            "_comp.jpg"} alt="img" width={2000} height={1000} />
      </div>
      <div className="px-3 xs:px-5 md2:px-10 -mt-20 xs:-mt-12 md2:-mt-6">
        <div className="mb-16">
          <h1 className="text-7xl mb-5 ">{subject.emoji}</h1>
          <h1 className="text-6xl max-xs:text-xl max-sm:text-2xl max-md:text-3xl max-lg:text-4xl max-xl:text-5xl font-semibold 	">{subject.title}</h1>
        </div>
        <div className="flex flex-col mb-32">
          {subject.links.map((link: any, index: number) => {
            return (
              <>
                <a
                  target="_blank"
                  className="underline text-xl mb-3 visited:text-gray-500 text-gray-950 hover:bg-gray-100 transition-all px-1 rounded-sm"
                  key={index}
                  href={link.link}
                >
                  {link.linkTitle}
                </a>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}