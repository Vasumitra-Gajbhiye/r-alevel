import mongoDBConnect from "@/libs/mongodb";
import TeamData from "@/models/teamData";
import { NextResponse, NextRequest } from "next/server";

// GET ALL SUBJECTS
export async function GET(req: NextRequest) {
  try {
    await mongoDBConnect();

    const members = await TeamData.find();

    return NextResponse.json(
      {
        message: "Successfully fetched all members",
        data: members,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to fetch all members",
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
    const { name, title, discordId } = await req.json();

    const newTeamData = {
      name: name,
      title: title,
      discordId: discordId,
    };

    await mongoDBConnect();

    await TeamData.create(newTeamData);

    return NextResponse.json(
      {
        message: "Successfully created a new member",
        data: newTeamData,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json({
      message: "Cannot create a new member",
      error: error,
    });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const id = req.nextUrl.searchParams.get("id");

    console.log(id);

    await mongoDBConnect();

    await TeamData.findByIdAndDelete(id);

    return NextResponse.json(
      {
        message: "Member deleted successfully",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to delete member",
        error: error,
      },
      {
        status: 500,
      }
    );
  }
}
