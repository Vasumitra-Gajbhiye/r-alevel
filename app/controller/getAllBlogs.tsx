export default async function getAllSubjects() {
  try {
    const res = await fetch("http://localhost:3000/api/blogs");
    const sub = await res.json();
    return sub.data;
  } catch (error) {
    console.log(error);
  }
}
