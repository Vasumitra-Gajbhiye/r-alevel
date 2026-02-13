import Form from "@/models/Form";
import FormIndex from "@/models/FormIndex";
import { NextResponse } from "next/server";

export async function PATCH(req: Request) {
  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const form = await Form.findById(body.id);

  if (form.status === "permanently-closed") {
    return NextResponse.json(
      { success: true, formStatus: form.status },
      { status: 201 }
    );
  }
  const formIndex = await FormIndex.findOne({ slug: form.formType });
  const newStatus = form.status === "open" ? "closed" : "open";
  //   form.status === "open" ? (form.status = "closed") : (form.status = "open");
  form.status = newStatus;

  //   console.log(formIndex.status);
  formIndex.status = newStatus === "open" ? "open" : "soon";
  await form.save();
  await formIndex.save();

  return NextResponse.json(
    { success: true, formStatus: form.status },
    { status: 201 }
  );
}
