export default async function getSingleSubject(id: any) {
  try {
    console.log(id);
    const res = await fetch(`http://localhost:3000/api/resources/${id}`);
    const sub = await res.json();
    return sub.data;
  } catch (error) {
    console.log(error);
  }
}
