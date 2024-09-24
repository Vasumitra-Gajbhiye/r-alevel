export default function Blog() {
  return (
    <>
      <div className="flex flex-col my-16  justify-center items-center">
        <div className=" w-11/12 xs:w-5/6 md:w-3/5 lg:w-1/2 ">
          <div>
            {/* POST TITLE */}
            <h1 className="text-xl xxs:text-2xl md2:text-3xl font-bold">
              Russias economy is growing, but can it last?
            </h1>

            {/* POST AUTHOR AND DATE */}
            <div className="text-xs mt-3 ">
              <h6 className="text-gray-500">4 May 2024</h6>
              <h6 className="text-blue-500 mt-1">-Vasumitra Gajbhiye</h6>
            </div>
          </div>

          <div className="leading-7 tracking-wider text-lg">
            {/* INTRODUCTION SECTION */}
            <div className="flex flex-col gap-4  mb-12">
              {/* INTRO IMAGE */}
              <div
                className="overflow-hidden flex items-center mt-10 mb-5"
                style={{ maxHeight: "30rem" }}
              >
                <img
                  src="/blogs/6661d7a64c630ca016e5088f/mainImg.jpg"
                  alt="illustraion of a brain"
                />
              </div>

              {/* INTRO PARAGRAPHS */}
              <h3>
                Russias full-scale invasion of Ukraine in February 2022 not only
              </h3>
            </div>

            {/* POST PARAGRAPHS */}
            <div className="flex flex-col gap-4  mb-12">
              {/* SECTION TITLE */}
              <h2 className="text-xl xxs:text-2xl md2:text-3xl font-medium">
                Questions over use of Hindu card as a campaign tool
              </h2>
              {/* SECTION DATA */}
              <h3>
                Religion is a factor in every Indian election, and this one was
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
