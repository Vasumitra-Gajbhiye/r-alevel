export default async function getAllTeam() {
  try {
        const apiLink =process.env.NEXT_PUBLIC_GETALLTEAM;
        const res = await fetch(`${apiLink}`);

    // const res = await fetch(`https://r-alevel.netlify.app/api/team`);
    // const res = await fetch(`http://localhost:3000/api/team`);
    const team = await res.json();
  const roleOrder: Record<string, number> = {
      "Community Leader": 1,
      "Chief Administrator": 2,
      "Administrator": 3,
      "Sr. Moderator": 4,
      "Jr. Moderator": 5,
    };


  
    // ✅ Correct sort syntax
    const sortedTeam = team.data.sort((a: any, b: any) => {
      const orderA = roleOrder[a.title] ;
      const orderB = roleOrder[b.title] ;
      console.log(orderA, orderB)
      return orderA - orderB;
    });

    console.log(sortedTeam);
    return sortedTeam;
  } catch (error) {
    console.log(error);
  }
}
