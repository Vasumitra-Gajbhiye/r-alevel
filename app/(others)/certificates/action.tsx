"use server";

import { redirect } from "next/navigation";

export async function navigate(data: any) {
  // console.log(`redirecting to http://localhost:3000/certificates/${data}`);
  // redirect(`http://localhost:3000/certificates/${data}`);
  redirect(`https://alevel.netlify.app/certificates/${data}`);
}
