// const CardInfo = function ({ name, role, className }: { name: string; role: string, className?:string }) {
//   return (
//     <div className={`flex-col flex bg-cy-200 p-8 max-lg:p-4 max-xxs:p-3 rounded-xl justify-center items-center w-full max-h-72 ${className}`}>
//       <div className="w-44 max-lg:w-32 max-xs:w-28 max-xl:w-36 mb-2">
//         <svg
//           className="t-profile-svg"
//           viewBox="0 0 225 225"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <circle cx="112.5" cy="112.5" r="112.5" fill="#A5D8FF" />
//           <path
//             fill-rule="evenodd"
//             clip-rule="evenodd"
//             d="M81.1667 73.3333C81.1667 65.0232 84.4678 57.0535 90.344 51.1773C96.2201 45.3012 104.19 42 112.5 42C120.81 42 128.78 45.3012 134.656 51.1773C140.532 57.0535 143.833 65.0232 143.833 73.3333C143.833 81.6435 140.532 89.6132 134.656 95.4893C128.78 101.365 120.81 104.667 112.5 104.667C104.19 104.667 96.2201 101.365 90.344 95.4893C84.4678 89.6132 81.1667 81.6435 81.1667 73.3333ZM81.1667 120.333C70.779 120.333 60.8168 124.46 53.4717 131.805C46.1265 139.15 42 149.112 42 159.5C42 165.733 44.4759 171.71 48.883 176.117C53.2901 180.524 59.2674 183 65.5 183H159.5C165.733 183 171.71 180.524 176.117 176.117C180.524 171.71 183 165.733 183 159.5C183 149.112 178.874 139.15 171.528 131.805C164.183 124.46 154.221 120.333 143.833 120.333H81.1667Z"
//             fill="#228BE6"
//           />
//         </svg>
//       </div>
//       <div className="flex flex-col items-center ">
//         <div className="font-semibold text-lg max-xs:text-base">{name}</div>
//         <div className="text-sm tracking-widest max-sm:tracking-wide text-gray-600 text-center">
//           {role}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default function OurTeam() {
//   return (
//     <div className="flex flex-col items-center mb-52 px-5">
//       <div className="flex flex-col items-center mb-20 text-center">
//         <h1 className="font-bold text-4xl text-gray-600 mb-2">
//           Our Team Members
//         </h1>
//         <p className="text-gray-500">
//           This is our amazing team. They take care of the community to maintain
//           a safe environment for learning and gowth
//         </p>
//       </div>

//       <div className=" w-4/5 max-xs:w-full max-lg:w-11/12 grid justify-items-center gap-y-5 gap-x-7 max-xxs:gap-y-3 max-lg:gap-x-5 max-xxs:grid-cols-1 max-md:grid-cols-2 grid-cols-3 mb-10 max-md:mb-5">
//         <CardInfo name="Vasumitra" role="Community leader" />
//         <CardInfo name="Jake" role="Chief Administrator" />
//         <CardInfo name="Abu Bakar" role="Administrator" />
//         <CardInfo className="max-md:flex hidden" name="Haz" role="Administrator" />

//       </div>
//         <div className=" w-4/5 max-xs:w-full max-lg:w-4/5 grid justify-items-center gap-y-12 gap-x-7 max-lg:gap-x-3 max-md:grid-cols-1 grid-cols-2 ">
//         <CardInfo className="max-md:hidden flex" name="Haz" role="Administrator" />
//         <CardInfo name="Alen" role="Administrator" />
//       </div>

//       <div className="mt-10 text-blue-600 underline hover:text-purple-800 transition-all">
//         <a href="/team">View all</a>
//       </div>
//     </div>
//   );
// }

"use client";

import { motion, useAnimation, easeInOut } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const CardInfo = function ({
  name,
  role,
  className,
}: {
  name: string;
  role: string;
  className?: string;
}) {
  return (
    <motion.div
      variants={cardVariants}
      className={`flex-col flex bg-cy-200 p-8 max-lg:p-4 max-xxs:p-3 rounded-xl justify-center items-center w-full max-h-72 shadow-sm hover:shadow-lg transition-shadow ${className}`}
    >
      <div className="w-44 max-lg:w-32 max-xs:w-28 max-xl:w-36 mb-2">
        <svg
          className="t-profile-svg"
          viewBox="0 0 225 225"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="112.5" cy="112.5" r="112.5" fill="#A5D8FF" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M81.1667 73.3333C81.1667 65.0232 84.4678 57.0535 90.344 51.1773C96.2201 45.3012 104.19 42 112.5 42C120.81 42 128.78 45.3012 134.656 51.1773C140.532 57.0535 143.833 65.0232 143.833 73.3333C143.833 81.6435 140.532 89.6132 134.656 95.4893C128.78 101.365 120.81 104.667 112.5 104.667C104.19 104.667 96.2201 101.365 90.344 95.4893C84.4678 89.6132 81.1667 81.6435 81.1667 73.3333ZM81.1667 120.333C70.779 120.333 60.8168 124.46 53.4717 131.805C46.1265 139.15 42 149.112 42 159.5C42 165.733 44.4759 171.71 48.883 176.117C53.2901 180.524 59.2674 183 65.5 183H159.5C165.733 183 171.71 180.524 176.117 176.117C180.524 171.71 183 165.733 183 159.5C183 149.112 178.874 139.15 171.528 131.805C164.183 124.46 154.221 120.333 143.833 120.333H81.1667Z"
            fill="#228BE6"
          />
        </svg>
      </div>
      <div className="flex flex-col items-center ">
        <div className="font-semibold text-lg max-xs:text-base">{name}</div>
        <div className="text-sm tracking-widest max-sm:tracking-wide text-gray-600 text-center">
          {role}
        </div>
      </div>
    </motion.div>
  );
};

// --- Animation Variants ---
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easeInOut,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeInOut,
    },
  },
};

export default function OurTeam() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // starts when 40% visible
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="flex flex-col items-center mb-52 px-5"
    >
      {/* Section Heading */}
      <motion.div
        variants={textVariants}
        className="flex flex-col items-center mb-20 text-center"
      >
        <h1 className="font-bold text-4xl text-gray-600 mb-2">
          Our Team Members
        </h1>
        <p className="text-gray-500 max-w-xl">
          This is our amazing team. They take care of the community to maintain
          a safe environment for learning and growth.
        </p>
      </motion.div>

      {/* First Row */}
      <motion.div
        variants={containerVariants}
        className="w-4/5 max-xs:w-full max-lg:w-11/12 grid justify-items-center gap-y-5 gap-x-7 max-xxs:gap-y-3 max-lg:gap-x-5 max-xxs:grid-cols-1 max-md:grid-cols-2 grid-cols-3 mb-10 max-md:mb-5"
      >
        <CardInfo name="Vasumitra" role="Community Leader" />
        <CardInfo name="Jake" role="Chief Administrator" />
        <CardInfo name="Abu Bakar" role="Administrator" />
        <CardInfo
          className="max-md:flex hidden"
          name="Haz"
          role="Administrator"
        />
      </motion.div>

      {/* Second Row */}
      <motion.div
        variants={containerVariants}
        className="w-4/5 max-xs:w-full max-lg:w-4/5 grid justify-items-center gap-y-12 gap-x-7 max-lg:gap-x-3 max-md:grid-cols-1 grid-cols-2"
      >
        <CardInfo
          className="max-md:hidden flex"
          name="Haz"
          role="Administrator"
        />
        <CardInfo name="Alen" role="Administrator" />
      </motion.div>

      {/* View All Link */}
      <motion.div
        variants={textVariants}
        className="mt-10 text-blue-600 underline hover:text-purple-800 transition-all"
      >
        <a href="/team">View all</a>
      </motion.div>
    </motion.div>
  );
}