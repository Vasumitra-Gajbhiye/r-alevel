export default function JoinBanner() {
  return (
    <div className="bg-join bg-no-repeat bg-cover text-white flex flex-col gap-4 items-center px-5 xs:px-16 py-10 ">
      <h1 className="text-3xl xs:text-4xl font-bold">Join our team</h1>
      <h4 className="text-center text-base xs:text-lg mb-6 hidden md:block">
        We are always in search for passionate members to become part of our
        team. Team members receive certificates that can be showcased while
        applying to universities. Contact us via our email below.
      </h4>
      <h3 className="text-center text-lg mb-6 md:hidden">
        We&apos;re seeking passionate members for our team. You&apos;ll receive
        certificates for university applications. Contact us via email below.
      </h3>
      <div className="flex gap-4 flex-col sm:flex-row items-center">
        <div className=" flex gap-2 bg-cy-100 w-max text-black justify-center items-center rounded-2xl  p-2">
          <div className="xs:w-6 xs:h-6 w-4 h-4 bg-cy-300 rounded-full"></div>
          <h5 className="text-lg xs:text-xl">r.alevelserver@gmail.com</h5>
        </div>
        <div className=" flex gap-2 bg-cy-100 w-max text-black justify-center items-center rounded-2xl  p-2">
          <div className="xs:w-6 xs:h-6 w-4 h-4 bg-cy-300 rounded-full"></div>
          <h4 className="text-lg xs:text-xl">
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
