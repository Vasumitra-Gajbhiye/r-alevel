export default async function getAllMembers() {
  try {
<<<<<<< HEAD
    const res = await fetch(`https://alevel.netlify.app/api/resources`);
=======
    const apiLink =process.env.NEXT_PUBLIC_GETALLSUBJECTS;
    // const res = await fetch(`https://r-alevel.netlify.app/api/resources`);
>>>>>>> f09491a (new hope)
    // const res = await fetch(`http://localhost:3000/api/resources`);
    const res = await fetch(`${apiLink}`);
    const sub = await res.json();
    return sub.data;
  } catch (error) {
    console.log(error);
  }
}
