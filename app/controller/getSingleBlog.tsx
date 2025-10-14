export default async function getSingleSubject(id: any) {
  try {
    console.log(id);
    const apiLink =process.env.NEXT_PUBLIC_GETALLTEAM;
        const res = await fetch(`${apiLink}/${id}`);
    // const res = await fetch(`https://r-alevel.netlify.app/api/blogs/${id}`);
    // const res = await fetch(`http://localhost:3000/api/blogs/${id}`);
    const sub = await res.json();
    return sub.data;
  } catch (error) {
    console.log(error);
  }
}
