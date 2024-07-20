export default async function getAllSubjects() {
  try {
    const res = await fetch("https://main--r-alevel.netlify.app/api/team");
    const sub = await res.json();
    return sub.data;
  } catch (error) {
    console.log(error);
  }
}
