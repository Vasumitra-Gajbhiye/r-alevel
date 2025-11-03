import connectDB from "@/libs/mongodb";
import CertData from "@/models/userData";
import { NextResponse, NextRequest } from "next/server";

// CREATE A SUBJECT
export async function POST(req) {
  try {
      const {name, email, subjectsAS, subjectsA2, examSession, receiveEmails } = await req.json();

    const newUserData = {
        name:name,
      email: email,
      subjectsAS: subjectsAS,
      subjectsA2: subjectsA2,
      examSession: examSession,
      receiveEmails: receiveEmails, 
    };

    await connectDB();

    await CertData.create(newUserData);

    return NextResponse.json(
      {
        message: "Successfully created a new cert",
        data: newUserData,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json({
      message: "Cannot create a new cert",
      error: error,
    });
  }
}

export async function DELETE(req) {
  try {
    const id = req.nextUrl.searchParams.get("id");

    console.log(id);

    await connectDB();

    await CertData.findByIdAndDelete(id);

    return NextResponse.json(
      {
        message: "Cert deleted successfully",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to delete cert",
        error: error,
      },
      {
        status: 500,
      }
    );
  }
}
