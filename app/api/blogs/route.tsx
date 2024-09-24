import mongoDBConnect from "@/libs/mongodb";
import BlogsData from "@/models/blogsData";
import { NextResponse, NextRequest } from "next/server";

// GET ALL SUBJECTS
export async function GET(req: NextRequest) {
  try {
    await mongoDBConnect();

    const blogs = await BlogsData.find();

    return NextResponse.json(
      {
        message: "Successfully fetched all blogs",
        data: blogs,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to fetch all blogs",
        error: error,
      },
      {
        status: 500,
      }
    );
  }
}

// CREATE A SUBJECT
export async function POST(req: NextRequest) {
  try {
    // const { mainTitle, date, author, introSection, sections, id } =
    const { mainTitle, description, date, timeToRead, tag, author } =
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
    };

    await mongoDBConnect();

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

    await mongoDBConnect();

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
