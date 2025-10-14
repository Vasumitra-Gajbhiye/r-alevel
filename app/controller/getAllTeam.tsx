export default async function getAllSubjects() {
  try {
<<<<<<< HEAD
    const res = await fetch(`https://alevel.netlify.app/api/team`);
=======
        const apiLink =process.env.NEXT_PUBLIC_GETALLTEAM;
        const res = await fetch(`${apiLink}`);

    // const res = await fetch(`https://r-alevel.netlify.app/api/team`);
>>>>>>> f09491a (new hope)
    // const res = await fetch(`http://localhost:3000/api/team`);
    const sub = await res.json();
    return sub.data;
  } catch (error) {
    console.log(error);
  }
}
