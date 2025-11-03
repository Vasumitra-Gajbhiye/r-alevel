// "use client";

// import { useState } from "react";
// import { useSession } from "next-auth/react";

// export default function ProfilePage() {
//   const { data: session } = useSession();
//   const [formData, setFormData] = useState({
//     subjectsAS: [],
//     subjectsA2: [],
//     examSession: "",
//     receiveEmails: false,
//   });


//   async function handleSubmit(e) {
//     e.preventDefault();
//     await fetch("/api/user/update", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email: session.user.email, ...formData }),
//     });
//     alert("Profile updated!");
//   }

//   if (!session?.user) return <p>Please sign in with Google first.</p>;

//   return (
//     <form onSubmit={handleSubmit} className="p-6 max-w-lg mx-auto">
//       <h1 className="text-xl font-bold mb-4">Your Profile</h1>

//       <label>Subjects (AS Level)</label>
//       <input
//         type="text"
//         placeholder="e.g. Math, Physics"
//         onChange={(e) =>
//           setFormData({ ...formData, subjectsAS: e.target.value.split(",") })
//         }
//         className="w-full border p-2 mb-4"
//       />

//       <label>Subjects (A2 Level)</label>
//       <input
//         type="text"
//         placeholder="e.g. Chemistry, Biology"
//         onChange={(e) =>
//           setFormData({ ...formData, subjectsA2: e.target.value.split(",") })
//         }
//         className="w-full border p-2 mb-4"
//       />

//       <label>Exam Session</label>
//       <input
//         type="text"
//         placeholder="e.g. May/June 2026"
//         onChange={(e) =>
//           setFormData({ ...formData, examSession: e.target.value })
//         }
//         className="w-full border p-2 mb-4"
//       />

//       <label className="flex items-center space-x-2">
//         <input
//           type="checkbox"
//           onChange={(e) =>
//             setFormData({ ...formData, receiveEmails: e.target.checked })
//           }
//         />
//         <span>Receive emails about new resources?</span>
//       </label>

//       <button
//         type="submit"
//         className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
//       >
//         Save
//       </button>
//     </form>
//   );
// }

"use client";

import { useState, FormEvent } from "react";
import { useSession } from "next-auth/react";

interface FormData {
  subjectsAS: string[];
  subjectsA2: string[];
  examSession: string;
  receiveEmails: boolean;
}

export default function ProfilePage() {
  const { data: session } = useSession();

  const [formData, setFormData] = useState<FormData>({
    subjectsAS: [],
    subjectsA2: [],
    examSession: "",
    receiveEmails: false,
  });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!session?.user?.email) {
      alert("Please sign in with Google first.");
      return;
    }

    try {
      const res = await fetch("/api/user/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: session.user.email, ...formData }),
      });

      if (!res.ok) throw new Error("Network response was not ok");

      alert("Profile updated!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("There was a problem updating your profile. Please try again.");
    }
  }

  // Show this if the user is not signed in
  if (!session?.user) return <p>Please sign in with Google first.</p>;

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-lg mx-auto">
      <h1 className="text-xl font-bold mb-4">Your Profile</h1>

      {/* AS Level Subjects */}
      <label className="block mb-1">Subjects (AS Level)</label>
      <input
        type="text"
        placeholder="e.g. Math, Physics"
        onChange={(e) =>
          setFormData({
            ...formData,
            subjectsAS: e.target.value
              .split(",")
              .map((s) => s.trim())
              .filter(Boolean),
          })
        }
        className="w-full border p-2 mb-4 rounded"
      />

      {/* A2 Level Subjects */}
      <label className="block mb-1">Subjects (A2 Level)</label>
      <input
        type="text"
        placeholder="e.g. Chemistry, Biology"
        onChange={(e) =>
          setFormData({
            ...formData,
            subjectsA2: e.target.value
              .split(",")
              .map((s) => s.trim())
              .filter(Boolean),
          })
        }
        className="w-full border p-2 mb-4 rounded"
      />

      {/* Exam Session */}
      <label className="block mb-1">Exam Session</label>
      <input
        type="text"
        placeholder="e.g. May/June 2026"
        onChange={(e) =>
          setFormData({ ...formData, examSession: e.target.value })
        }
        className="w-full border p-2 mb-4 rounded"
      />

      {/* Email Notifications */}
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          onChange={(e) =>
            setFormData({ ...formData, receiveEmails: e.target.checked })
          }
        />
        <span>Receive emails about new resources?</span>
      </label>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Save
      </button>
    </form>
  );
}