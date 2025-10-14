export default async function getSingleSubject(id: any) {
  try {
    console.log(id);
<<<<<<< HEAD
    const res = await fetch(`https://alevel.netlify.app/api/resources/${id}`);
=======
    const apiLink =process.env.NEXT_PUBLIC_GETSINGLESUBJECT;
        const res = await fetch(`${apiLink}/${id}`);

    // const res = await fetch(`https://r-alevel.netlify.app/api/resources/${id}`);
>>>>>>> f09491a (new hope)
    // const res = await fetch(`http://localhost:3000/api/resources/${id}`);
    const sub = await res.json();
    return sub.data;
  } catch (error) {
    console.log(error);
  }
}
