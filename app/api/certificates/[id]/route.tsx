import mongoDBConnect from "@/libs/mongodb";
import CertsData from "@/models/certsData";
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

    await mongoDBConnect();

    const cert = await CertsData.findOne({ certId: id });

    return NextResponse.json(
      {
        message: "Successfully fetched single cert",
        data: cert,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to fetch single cert",
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
      newName: name,
      newCertType: certType,
      newCertId: certId,
      newIssueDate: issueDate,
    } = await req.json();

    const newCertsData = {
      name: name,
      certType: certType,
      certId: certId,
      issueDate: issueDate,
    };
    console.log(pramasID);

    await mongoDBConnect();

    await CertsData.findByIdAndUpdate(pramasID, newCertsData);

    return NextResponse.json(
      {
        message: "Successfully updated a new cert",
        data: newCertsData,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json({
      message: "Cannot update a cert",
      error: error,
    });
  }
}
