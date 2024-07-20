const CardInfo = function ({ name, role }: { name: string; role: string }) {
  return (
    <div className="flex-col bg-cy-200 p-8 rounded-xl items-center">
      <div className="min-w-48 mb-2">
        <svg
          className="t-profile-svg"
          viewBox="0 0 225 225"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="112.5" cy="112.5" r="112.5" fill="#A5D8FF" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M81.1667 73.3333C81.1667 65.0232 84.4678 57.0535 90.344 51.1773C96.2201 45.3012 104.19 42 112.5 42C120.81 42 128.78 45.3012 134.656 51.1773C140.532 57.0535 143.833 65.0232 143.833 73.3333C143.833 81.6435 140.532 89.6132 134.656 95.4893C128.78 101.365 120.81 104.667 112.5 104.667C104.19 104.667 96.2201 101.365 90.344 95.4893C84.4678 89.6132 81.1667 81.6435 81.1667 73.3333ZM81.1667 120.333C70.779 120.333 60.8168 124.46 53.4717 131.805C46.1265 139.15 42 149.112 42 159.5C42 165.733 44.4759 171.71 48.883 176.117C53.2901 180.524 59.2674 183 65.5 183H159.5C165.733 183 171.71 180.524 176.117 176.117C180.524 171.71 183 165.733 183 159.5C183 149.112 178.874 139.15 171.528 131.805C164.183 124.46 154.221 120.333 143.833 120.333H81.1667Z"
            fill="#228BE6"
          />
        </svg>
      </div>
      <div className="flex flex-col items-center ">
        <div className="font-semibold text-lg">{name}</div>
        <div className="text-sm tracking-widest text-gray-600">{role}</div>
      </div>
    </div>
  );
};

export default function OurTeam() {
  return (
    <div className="flex flex-col items-center mb-52">
      <div className="flex flex-col items-center mb-20">
        <h1 className="font-bold text-4xl text-gray-600 mb-2">
          Our Team Members
        </h1>
        <p className="text-gray-500">
          This is our amazing team. They take care of the community to maintain
          a safe environment for learning and gowth
        </p>
      </div>

      <div className="w-3/5 grid justify-items-center gap-y-12  grid-cols-3">
        <CardInfo name="Vasumitra" role="Community lead" />
        <CardInfo name="Kush" role="Administrator" />
        <CardInfo name="Rage" role="Administrator" />
        <CardInfo name="Spiedy" role="Administrator" />
        <CardInfo name="Alen" role="Administrator" />
        <CardInfo name="Myz" role="Bot dev & Administrator" />
      </div>

      <div className="mt-10 text-blue-600 underline hover:text-purple-800 transition-all">
        <a href="/team">View all</a>
      </div>
    </div>
  );
}
