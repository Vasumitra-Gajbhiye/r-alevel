export default async function getAllSubjects() {
  try {
    const res = await fetch(`https://r-alevel.netlify.app/api/team`);
    const sub = await res.json();
    return sub.data;
  } catch (error) {
    console.log(error);
  }
}
