import connectDB from "@/libs/mongodb";
import BlogsData from "@/models/blogsData";
import { NextResponse, NextRequest } from "next/server";

// GET ALL blogs
export async function GET() {
  try {
    await connectDB();

    const blogs = await BlogsData.find(
      {}, // no filter
      {
        _id: 1,
        slug: 1,
        mainTitle: 1,
        description: 1,
        date: 1,
        timeToRead: 1,
        tag: 1,
        author: 1,
      }
    ).lean(); // ← optional (faster)

    return NextResponse.json(
      { message: "Successfully fetched all blogs", data: blogs },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to fetch all blogs", error },
      { status: 500 }
    );
  }
}

// CREATE A SUBJECT
export async function POST(req: NextRequest) {
  try {
    // const { mainTitle, date, author, introSection, sections, id } =
    const { mainTitle, description, date, timeToRead, tag, author, slug } =
      await req.json();

    // const newBlogsData = {
    //   mainTitle: mainTitle,
    //   date: date,
    //   author: author,
    //   introSection: introSection,
    //   sections: sections,
    // };

    const newBlogsData = {
      mainTitle: mainTitle,
      description: description,
      date: date,
      timeToRead: timeToRead,
      tag: tag,
      author: author,
      slug: slug,
    };

    await connectDB();

    await BlogsData.create(newBlogsData);

    return NextResponse.json(
      {
        message: "Successfully created a new blog",
        data: newBlogsData,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json({
      message: "Cannot create a new blog",
      error: error,
    });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const id = req.nextUrl.searchParams.get("id");

    console.log(id);

    await connectDB();

    await BlogsData.findByIdAndDelete(id);

    return NextResponse.json(
      {
        message: "Blog deleted successfully",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to delete subjects",
        error: error,
      },
      {
        status: 500,
      }
    );
  }
}
