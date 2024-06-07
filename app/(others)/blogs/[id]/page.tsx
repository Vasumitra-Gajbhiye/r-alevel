import getSingleBlog from "@/app/controller/getSingleBlog";

export default async function Post({ params: { id } }: any) {
  let blog = [];
  blog = await getSingleBlog(id);
  return (
    <div className="flex flex-col my-16  justify-center items-center">
      <div className="w-1/2 ">
        {/* POST INFO */}
        <div>
          <h1 className="text-3xl font-bold">{blog.mainTitle}</h1>
          <div className="text-xs mt-3 ">
            <h6 className="text-gray-500">{blog.date}</h6>
            <h6 className="text-blue-500 mt-1">-{blog.author}</h6>
          </div>
        </div>
        <div className="leading-5 tracking-wide">
          {/* INTRODUCTION SECTION */}
          <div className="flex flex-col gap-4  mb-12">
            <div
              className="overflow-hidden flex items-center mt-10 mb-5"
              style={{ maxHeight: "20rem" }}
            >
              <img
                src={blog.introSection.imageSrc}
                alt={blog.introSection.imageAlt}
              />
            </div>
            {blog
              ? blog.introSection.paragraphs.map((para: string, i: number) => {
                  return <h3 key={i}>{para}</h3>;
                })
              : null}
          </div>

          {blog
            ? blog.sections.map((section: any, i: number) => {
                return (
                  <div key={i} className="flex flex-col gap-4  mb-12">
                    <h2 className="text-3xl font-semibold">{section.title}</h2>
                    {section
                      ? section.paragraphs.map(
                          (paragraph: string, i: number) => {
                            return <h3 key={i}>{paragraph}</h3>;
                          }
                        )
                      : null}
                  </div>
                );
              })
            : null}

          {/* 
          <div className="flex flex-col gap-4  mb-12 ">
            <h2 className="text-3xl font-semibold">
              Questions over use of Hindu card as a campaign tool
            </h2>
            <h3>
              Religion is a factor in every Indian election, and this one was no
              different.
            </h3>
            <h3>
              Mr Modi inaugurated a Hindu temple at a controversial site that
              had been disputed between Hindus and Muslims in January and this
              was expected to give his party a big boost during the election.
            </h3>
            <h3>
              But no one quite expected the BJP’s campaign to be as polarising
              as it was - or for some of the most aggressive comments to come
              from the very top.
            </h3>
            <h3>
              At a campaign rally in April, Mr Modi said: “When their (the
              opposition Congress) government was in power they had said Muslims
              have the first right on the nation’s wealth. This means they’ll
              collect the wealth and give it to whom? To those who have many
              children. To infiltrators.”
            </h3>
            <h3>
              Some analysts interpreted the remark as an attempt by Mr Modi to
              galvanise his conservative Hindu support base.
            </h3>
            <h3>
              But looking at the results from some key constituencies – the BJP
              candidate has lost in the temple city of Ayodhya - it doesn’t
              appear to have had the desired effect.
            </h3>
            <h3>
              Questions are now being raised about using the Hindu card as a
              campaign tool, especially since what it seems to have achieved is
              the opposite - uniting Muslim minorities against the BJP.
            </h3>
          </div>

          <div className="flex flex-col gap-4  mb-12 ">
            <h2 className="text-3xl font-semibold">
              4,200 mile opposition march galvanised party cadres
            </h2>
            <h3>
              Since the July 2023 formation of the opposition INDIA alliance, a
              grouping of more than two dozen parties, the Modi-led government
              has been painting it as a ragtag bunch of self-serving leaders out
              to personally target Mr Modi and destroy the country.
            </h3>
            <h3>
              While the leaders of the ruling BJP, along with most analysts and
              pollsters, had for months been predicting an easy win for Mr Modi,
              the Congress-led opposition block kept emphasising rural distress,
              inflation and rampant unemployment in its messaging and public
              meetings.
            </h3>
            <h3>
              The Constitution is in danger and the country’s “democratic
              institutions are under attack” under a “divisive” Mr Modi was
              their war cry.
            </h3>
            <h3>
              A 4,200 miles (6,700 km) long march by Rahul Gandhi, a senior
              leader of the Congress party, that began months before the
              elections was heavily panned for its timing, but analysts believe
              it enthused supporters and galvanised party cadres.
            </h3>
            <h3>
              The opposition also upped its social media reach and aggressively
              took on the BJP which has for a long time dominated the digital
              landscape in India.
            </h3>
          </div> */}
        </div>
      </div>
    </div>
  );
}
