export default function JoinBanner() {
  return (
    <div className="bg-join bg-no-repeat bg-cover text-white flex flex-col gap-4 items-center px-16 py-10 ">
      <h1 className="text-4xl font-bold">Join our team</h1>
      <h4 className="text-center text-lg mb-6">
        We are always in search for passionate members to become part of our
        team. Team members receive certificates that can be showcased while
        applying to universities. Contact us via our email below.
      </h4>
      <div className="flex gap-4">
        <div className=" flex gap-2 bg-cy-100 w-max text-black justify-center items-center rounded-2xl  p-2">
          <div className="w-6 h-6 bg-cy-300 rounded-full"></div>
          <h5 className="text-xl">r.alevelserver@gmail.com</h5>
        </div>
        <div className=" flex gap-2 bg-cy-100 w-max text-black justify-center items-center rounded-2xl  p-2">
          <div className="w-6 h-6 bg-cy-300 rounded-full"></div>
          <h4 className="text-xl">
            <a
              href=" https://discord.com/users/1058932081629069363"
              target="_blank"
            >
              Vasumitra
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
}
