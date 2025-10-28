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
      <div className="px-4 md:px-16 font-poppins animate-pulse">
        <div className="w-full h-80 bg-gray-200 rounded-xl mt-4 xs:mt-12 md:mt-20"></div>
        <div className=" -mt-20 xs:-mt-12 md2:-mt-6">
          <div className="mb-16">
            
            <div className="h-10 bg-gray-200 rounded w-2/3 mb-3 mt-24"></div>
          </div>
          <div className="flex flex-col mb-32 space-y-4">
            <div className="h-5 bg-gray-200 rounded w-1/2"></div>
            <div className="h-5 bg-gray-200 rounded w-3/4"></div>
            <div className="h-5 bg-gray-200 rounded w-2/3"></div>
            <div className="h-5 bg-gray-200 rounded w-1/3"></div>
          </div>
        </div>
      </div>
    );
  }

  // 🔹 ACTUAL CONTENT
  return (
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