"use client";

import getAllMembers from "@/app/controller/getAllTeam";
const Profile = function ({
  name,
  title,
  id,
}: {
  name: string;
  title: string;
  id: string;
}) {
  return (
    <a href={"https://discord.com/users/" + id} target="_blank">
      <div className="flex justify-center flex-col items-center hover:cursor-pointer drop-shadow-2xl p-5 rounded-lg">
        <div className=" hover:brightness-50 transition-all w-48 mb-2">
          <img src="/team-img/profile.png" className="rounded-lg w-full" />
        </div>
        <h2 className="text-lg font-semibold">{name}</h2>
        <h3>{title}</h3>
      </div>
    </a>
  );
};

export default async function Team() {
  const members = await getAllMembers();
  return (
    <div className="my-24 px-16">
      <h1 className="text-center text-5xl font-bold">Our Team</h1>
      <div
        className="mt-10 grid items-center justify-items-center gap-y-12 gap-x-5"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" }}
      >
        {members
          ? members.map((member: any, i: number) => {
              return (
                <div key={i}>
                  <Profile
                    name={member.name}
                    title={member.title}
                    id={member.discordId}
                  />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}
