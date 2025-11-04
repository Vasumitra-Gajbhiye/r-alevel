import connectDB from "@/libs/mongodb";
import ResourcesData from "@/models/resourcesData";
import { NextResponse, NextRequest } from "next/server";

// GET ALL SUBJECTS
export async function GET(req: NextRequest) {
  try {
    await connectDB();

    const subjects = await ResourcesData.find();

    return NextResponse.json(
      {
        message: "Successfully fetched all subjects",
        data: subjects,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to fetch all subjects",
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
    const { title, emoji, links, id } = await req.json();

    const newResourcesData = {
      title: title,
      emoji: emoji,
      links: links,
      id: id,
    };

    await connectDB();

    await ResourcesData.create(newResourcesData);

    return NextResponse.json(
      {
        message: "Successfully created a new subject",
        data: newResourcesData,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json({
      message: "Cannot create a new subject",
      error: error,
    });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const id = req.nextUrl.searchParams.get("id");

    console.log(id);

    await connectDB();

    await ResourcesData.findByIdAndDelete(id);

    return NextResponse.json(
      {
        message: "Subject deleted successfully",
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
