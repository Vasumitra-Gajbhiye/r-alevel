"use server";

import { redirect } from "next/navigation";

export async function navigate(data: any) {
  // redirect(`http://localhost:3000/resources/${data}`);
  redirect(`https://r-alevel.netlify.app/resources/${data}`);
}
