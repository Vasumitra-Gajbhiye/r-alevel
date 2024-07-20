// "use client";

// import { link } from "fs";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import style from "@/app/(home)/layout ui/layout.module.css";
// import Image from "next/image";

// const MainContact = function () {
//   const pathname = usePathname();

//   const communityItems = [
//     { id: 1, title: "Discord", link: "/" },
//     { id: 1, title: "Reddit", link: "/" },
//     { id: 1, title: "r.alevelserver@gmail.com", link: "/" },
//   ];
//   const navigationItems = [
//     { id: 1, title: "Certificates" },
//     { id: 2, title: "Resources" },
//     { id: 3, title: "Blogs" },
//   ];

//   return (
//     <div
//       className={
//         style.contact +
//         " grid sm:grid-cols-2 xs:grid-row-2 md:grid-cols-3 justify-items-center align-top grid-x-8 md:grid-y-5 font-light py-8 w-3/4 xs:w-2/3 md:w-4/5 mt-10"
//       }
//     >
//       <div className="mb-12 md:mb-0">
//         <h3 className="mb-5 font-semibold underline mb:no-underline underline-offset-2">
//           Community
//         </h3>
//         <div className="flex flex-col">
//           {communityItems.map((item, index) => {
//             return (
//               <a href={`${item.link}`} key={`${index}`}>
//                 {item.title}
//               </a>
//             );
//           })}
//         </div>
//       </div>
//       <div className="hidden md:block">
//         <h3 className="mb-5 font-semibold  underline underline-offset-2">
//           Navigation
//         </h3>
//         <div>
//           <div>
//             <Link href={"/"} className={`${pathname === "/" ? "active" : ""}`}>
//               Home
//             </Link>
//           </div>
//           {navigationItems.map((item) => {
//             return (
//               <div key={item.id}>
//                 <Link
//                   href={`/${item.title.toLowerCase()}`}
//                   className={`${
//                     pathname === `/${item.title.toLowerCase}` ? "active" : ""
//                   }`}
//                 >
//                   {item.title}
//                 </Link>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//       <div>
//         <h3 className="mb-5 font-semibold  underline mb:no-underline underline-offset-2">
//           Talk to us
//         </h3>
//         <div>
//           <div className="flex gap-1 items-center ">
//             <img src="/contact/discordLogo.png" alt="logo" className="w-4" />
//             <h4>_vasumitra</h4>
//           </div>
//           <div className="flex gap-1 items-center ">
//             <img src="/contact/discordLogo.png" alt="logo" className="w-4" />
//             <h4>s_kush</h4>
//           </div>
//           <div className="flex gap-1 items-center">
//             <img src="/contact/redditLogo.png" alt="logo" className="w-4" />

//             <h4>Vasumitra Gajbhiye</h4>
//           </div>
//           <div className="flex gap-1 items-center ">
//             <img src="/contact/gmailLogo.png" alt="logo" className="w-4" />

//             <h4>
//               <a href="mailto:r.alevelserver@gmail.com">
//                 r.alevelserver@gmail.com
//               </a>
//             </h4>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Credit = function () {
//   return (
//     <>
//       <div className="text-sm flex-col items-center gap-2 mb-5 text-center   flex ">
//         <h4 className="hidden xxs:block">
//           Website designed & developed with 🖤 by Vasumitra
//         </h4>
//         <h4 className="xxs:hidden block">
//           Website designed & developed with 🖤 <br></br> by Vasumitra
//         </h4>
//         <h4>© 2024 r/alevel  • All Rights Reserved</h4>
//       </div>
//     </>
//   );
// };

// export default function ContactUs() {
//   return (
//     <div
//       className="contact-bg  overflow-hidden bg-right
//       md:bg-center bg-scroll
//     bg-no-repeat bg-cover flex justify-center items-center flex-col gap-12 text-white"
//       style={{ backgroundImage: "url('../../../public/contact/contact.png')" }}
//     >
//       <MainContact />
//       <Credit />
//     </div>
//   );
// }

////////////////////////////////////////////////////////////////
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "@/app/(others)/layout ui/layout.module.css";
import Image from "next/image";

const MainContact = function () {
  const pathname = usePathname();

  const communityItems = [
    { id: 1, title: "Discord", link: "/" },
    { id: 1, title: "Reddit", link: "/" },
    { id: 1, title: "r.alevelserver@gmail.com", link: "/" },
  ];
  const navigationItems = [
    { id: 1, title: "Certificates" },
    { id: 2, title: "Resources" },
    { id: 3, title: "Blogs" },
  ];

  return (
    <div
      className={
        " grid sm:grid-cols-2 xs:grid-row-2 md:grid-cols-3 justify-items-center align-top grid-x-8 md:grid-y-5 font-light py-8 w-5/6 xs:w-2/3 md:w-4/5 mt-10 border-b-2 border-gray-300"
      }
    >
      <div className="mb-12 md:mb-0">
        <h3 className="mb-5 font-semibold underline mb:no-underline underline-offset-2">
          Community
        </h3>
        <div className="flex flex-col">
          {communityItems.map((item, index) => {
            return (
              <a href={`${item.link}`} key={`${index}`}>
                {item.title}
              </a>
            );
          })}
        </div>
      </div>
      <div className="hidden md:block">
        <h3 className="mb-5 font-semibold  underline underline-offset-2">
          Navigation
        </h3>
        <div>
          <div>
            <Link href={"/"} className={`${pathname === "/" ? "active" : ""}`}>
              Home
            </Link>
          </div>
          {navigationItems.map((item) => {
            return (
              <div key={item.id}>
                <Link
                  href={`/${item.title.toLowerCase()}`}
                  className={`${
                    pathname === `/${item.title.toLowerCase}` ? "active" : ""
                  }`}
                >
                  {item.title}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h3 className="mb-5 font-semibold  underline mb:no-underline underline-offset-2">
          Talk to us
        </h3>
        <div>
          <div className="flex gap-1 items-center ">
            <img src="/contact/discord-ic-b.png" alt="logo" className="w-4" />

            <a
              href=" https://discord.com/users/1058932081629069363"
              target="_blank"
            >
              _vasumitra
            </a>
          </div>
          <div className="flex gap-1 items-center ">
            <img src="/contact/discord-ic-b.png" alt="logo" className="w-4" />

            <h4>
              <a
                href=" https://discord.com/users/702284046893580328"
                target="_blank"
              >
                s_kush
              </a>
            </h4>
          </div>
          <div className="flex gap-1 items-center">
            <img src="/contact/reddit-ic-b.png" alt="logo" className="w-4" />

            <h4>
              <a
                href="https://www.reddit.com/user/VasumitraGajbhiye/"
                target="_blank"
              >
                Vasumitra Gajbhiye
              </a>
            </h4>
          </div>
          <div className="flex gap-1 items-center ">
            <img src="/contact/gmail-ic-b.png" alt="logo" className="w-4" />

            <h4>
              <a href="mailto:r.alevelserver@gmail.com">
                r.alevelserver@gmail.com
              </a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

const Credit = function () {
  return (
    <>
      <div className="text-sm flex-col items-center gap-2 mb-5 text-center   flex ">
        <h4 className="hidden xxs:block">
          Website designed & developed with 🖤 by Vasumitra
        </h4>
        <h4 className="xxs:hidden block">
          Website designed & developed with 🖤 <br></br> by Vasumitra
        </h4>
        <h4>© 2024 r/alevel  • All Rights Reserved</h4>
      </div>
    </>
  );
};

export default function ContactUs() {
  return (
    <div
      className=" bg-gray-100 overflow-hidden bg-right
      md:bg-center bg-scroll	
    bg-no-repeat bg-cover flex justify-center items-center flex-col gap-12 text-gray-900"
    >
      <MainContact />
      <Credit />
    </div>
  );
}
