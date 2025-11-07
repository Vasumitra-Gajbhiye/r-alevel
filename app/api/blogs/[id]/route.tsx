import connectDB from "@/libs/mongodb";
import BlogsData from "@/models/blogsData";
import { AnyCnameRecord } from "dns";
import { NextResponse, NextRequest } from "next/server";
// import { useSearchParams } from "next/navigation";

// GET ALL SUBJECTS
export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  try {
    await connectDB();

    // ✅ slug-based lookup
    const blog = await BlogsData.findOne({ slug: id });

    if (!blog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Successfully fetched blog metadata", data: blog },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch blog", error },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

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
