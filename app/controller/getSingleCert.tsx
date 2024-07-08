export default async function getSingleSubject(id: any) {
  try {
    console.log(id);
    const res = await fetch(
      `http://localhost:3000/api/certificates/2g00of311lek`,
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
