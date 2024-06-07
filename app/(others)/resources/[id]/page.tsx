import getSingleSubject from "@/app/controller/getSingleSubject";

export default async function SingleResource({ params: { id } }: any) {
  const subject = await getSingleSubject(id);

  return (
    <div>
      <h1>{subject.emoji}</h1>
      <h1>{subject.title}</h1>
      <div className="flex flex-col gap-4">
        {subject.links.map((link: any) => {
          return (
            <a key={link._id} href={link.link} className="text-blue-700">
              {link.linkTitle}
            </a>
          );
        })}
      </div>
    </div>
  );
}
