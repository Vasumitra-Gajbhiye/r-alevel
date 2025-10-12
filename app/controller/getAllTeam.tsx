export default async function getAllSubjects() {
  try {
    const res = await fetch(`https://alevel.netlify.app/api/team`);
    // const res = await fetch(`http://localhost:3000/api/team`);
    const sub = await res.json();
    return sub.data;
  } catch (error) {
    console.log(error);
  }
}
