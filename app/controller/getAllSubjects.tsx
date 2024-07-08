export default async function getAllMembers() {
  try {
    const res = await fetch("http://localhost:3000/api/resources");
    const sub = await res.json();
    return sub.data;
  } catch (error) {
    console.log(error);
  }
}
