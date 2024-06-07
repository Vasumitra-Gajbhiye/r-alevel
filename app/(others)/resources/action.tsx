"use server";

import { redirect } from "next/navigation";

export async function navigate(data: any) {
  console.log(`redirecting to http://localhost:3000/resources/${data}`);
  redirect(`http://localhost:3000/resources/${data}`);
}
