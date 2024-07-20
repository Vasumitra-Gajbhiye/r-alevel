export default async function getAllMembers() {
  try {
    const res = await fetch("https://main--r-alevel.netlify.app/api/resources");
    const sub = await res.json();
    return sub.data;
  } catch (error) {
    console.log(error);
  }
}
