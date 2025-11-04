import connectDB from "@/libs/mongodb";
import BlogsData from "@/models/blogsData";
import { AnyCnameRecord } from "dns";
import { NextResponse, NextRequest } from "next/server";
// import { useSearchParams } from "next/navigation";

// GET ALL SUBJECTS
export async function GET(req: NextRequest, { params: { id } }: any) {
  console.log(id);
  try {
    // const searchParams = useSearchParams();

    // const id = searchParams.get("id");
    console.log(id);

    await connectDB();

    const blog = await BlogsData.findOne({ _id: id });

    return NextResponse.json(
      {
        message: "Successfully fetched single blog",
        data: blog,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to fetch single blog",
        error: error,
      },
      {
        status: 500,
      }
    );
  }
}

export async function PUT(req: NextRequest, { params: { id } }: any) {
  console.log(id);
  let pramasID = id;
  try {
    const {
      newMainTitle: mainTitle,
      newDate: date,
      newAuthor: author,
      newIntroSection: introSection,
      newSections: sections,
      newId: id,
    } = await req.json();

    const newBlogsData = {
      mainTitle: mainTitle,
      date: date,
      author: author,
      introSection: introSection,
      sections: sections,
      id: id,
    };
    console.log(pramasID);

    await connectDB();

    await BlogsData.findByIdAndUpdate(pramasID, newBlogsData);

    return NextResponse.json(
      {
        message: "Successfully updated a new subject",
        data: newBlogsData,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json({
      message: "Cannot update a subject",
      error: error,
    });
  }
}
