
/*


import getAllTeam from "@/app/controller/getAllTeam";
import { useEffect, useState } from "react";

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

export default function Team() {
  const [members, setMembers] = useState([]);

  // const members = await getAllMembers();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allTeam = await getAllTeam();
        setMembers(allTeam);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
*/

"use client";

import getAllTeam from "@/app/controller/getAllTeam";
import { useEffect, useState } from "react";
import Skeleton from "@/app/skeleton";

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
        <div className="hover:brightness-50 transition-all w-48 mb-2">
          <img src="/team-img/profile.png" className="rounded-lg w-full" />
        </div>
        <h2 className="text-lg font-semibold">{name}</h2>
        <h3>{title}</h3>
      </div>
    </a>
  );
};

export default function Team() {
  const [members, setMembers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allTeam = await getAllTeam();
        setMembers(allTeam);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="my-24 px-16">
      <h1 className="text-center text-5xl font-bold">Our Team</h1>

      <div
        className="mt-10 grid items-center justify-items-center gap-y-12 gap-x-5"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" }}
      >
        {loading
          ? // 🩶 Skeleton placeholders
            [...Array(11)].map((_, i) => (
              <div
                key={i}
                className="flex flex-col items-center p-5 gap-3 rounded-lg drop-shadow-2xl"
              >
                <Skeleton className="w-48 h-48 rounded-full mb-2" />
                <Skeleton className="h-4 w-24 rounded-md" />
                <Skeleton className="h-3 w-16 rounded-md" />
              </div>
            ))
          : // ✅ Real data after loading
            members.map((member: any, i: number) => (
              <Profile
                key={i}
                name={member.name}
                title={member.title}
                id={member.discordId}
              />
            ))}
      </div>
    </div>
  );
}