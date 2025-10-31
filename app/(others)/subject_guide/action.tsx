"use server";

import { redirect } from "next/navigation";

export async function navigate(data: any) {
  // redirect(`http://localhost:3000/resources/${data}`);
  const apiLink = process.env.NEXT_PUBLIC_DISPLAYSUBJECTGUIDE;
  console.log('navitating')
  redirect(`${apiLink}/g/${data}`);
}
