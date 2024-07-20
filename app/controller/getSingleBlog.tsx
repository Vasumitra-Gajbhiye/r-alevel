export default async function getSingleSubject(id: any) {
  try {
    console.log(id);
    const res = await fetch(
      `https://main--r-alevel.netlify.app/api/blogs/${id}`
    );
    const sub = await res.json();
    return sub.data;
  } catch (error) {
    console.log(error);
  }
}
