"use client";

import { signIn } from "next-auth/react";
import { useEffect } from "react";

export default function SwitchAccountPage() {
  useEffect(() => {
    signIn("google", {
      prompt: "select_account",
      callbackUrl: "/profile",
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center text-gray-500">
      Redirecting to Google…
    </div>
  );
}
