import mongoDBConnect from "@/libs/mongodb";
import CertData from "@/models/certsData";
import { NextResponse, NextRequest } from "next/server";
import { createServer } from "tls";

// GET ALL SUBJECTS
export async function GET(req: NextRequest) {
  try {
    await mongoDBConnect();

    const certs = await CertData.find();

    return NextResponse.json(
      {
        message: "Successfully fetched all certs",
        data: certs,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to fetch all certs",
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
    const { name, certType, certId, issueDate } = await req.json();

    const newCertData = {
      name: name,
      certType: certType,
      certId: certId,
      issueDate: issueDate,
    };

    await mongoDBConnect();

    await CertData.create(newCertData);

    return NextResponse.json(
      {
        message: "Successfully created a new cert",
        data: newCertData,
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

export async function DELETE(req: NextRequest) {
  try {
    const id = req.nextUrl.searchParams.get("id");

    console.log(id);

    await mongoDBConnect();

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
