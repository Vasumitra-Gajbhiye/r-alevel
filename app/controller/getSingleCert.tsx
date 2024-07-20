export default async function getSingleSubject(id: any) {
  try {
    console.log(id);
    const res = await fetch(
      `https://main--r-alevel.netlify.app/api/certificates/${id}`,
      {
        cache: "no-store",
      }
    );
    const cert = await res.json();
    return cert.data;
  } catch (error) {
    console.log(error);
  }
}
