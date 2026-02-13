import Form from "@/models/Form";
import FormIndex from "@/models/FormIndex";
import { NextResponse } from "next/server";

type IntroBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "bullet_list";
      bulletColor: string;
      items: string[];
    };

type FieldType = "text" | "email" | "textarea" | "select";

type FormField = {
  id: string;
  label: string;
  type: FieldType;
  required: boolean;
  placeholder?: string;
  options?: string[];
};

type FormSection = {
  id: string;
  title: string;
  subtitle?: string;
  fields: FormField[];
};

type Form = {
  title: string;
  slug: string;
  formType: string;
  banner: {
    type: "gradient";
    value: string;
  };
  ctaText: string;
  introductionBlocks: IntroBlock[];
  sections: FormSection[];
  confirmationMessage: {
    title: string;
    body: string[];
    contactEmail: string;
  };
};

// export async function POST(req: Request) {
//   let body: Form;
//   try {
//     body = await req.json();
//   } catch {
//     return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
//   }
//   const prevForm = (
//     await Form.find({ formType: body.formType })
//       .sort({
//         cycleId: -1,
//       })
//       .limit(1)
//   )[0];
//   const prevCycleId = prevForm.cycleId;

//   console.log(prevForm);
//   console.log("hit create form api");

//   const newForm = await Form.create({
//     banner: body.banner,
//     title: body.title,
//     slug: body.slug,
//     status: "open",
//     ctaText: body.ctaText,
//     confirmationMessage: body.confirmationMessage,
//     introductionBlocks: body.introductionBlocks,
//     sections: body.sections,
//     cycleId: prevCycleId + 1,
//     formType: body.formType,
//   });

//   prevForm.status = "closed";
//   prevForm.save();

//   const updatedIndex = await FormIndex.updateOne(
//     { slug: body.formType },
//     { $inc: { activeCycleId: 1 } }
//   );

//   console.log(updatedIndex);

//   //   console.log(body);
//   return NextResponse.json(
//     {
//       success: true,
//     },
//     { status: 201 }
//   );
// }

export async function POST(req: Request) {
  let body: Form;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (!body.title || !body.slug || !body.formType) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  const existingSlug = await Form.findOne({ slug: body.slug });
  if (existingSlug) {
    return NextResponse.json({ error: "Slug already exists" }, { status: 400 });
  }

  const prevForm = await Form.findOne({ formType: body.formType }).sort({
    cycleId: -1,
  });

  const prevCycleId = prevForm ? prevForm.cycleId : 0;

  const newForm = await Form.create({
    banner: body.banner,
    title: body.title,
    slug: body.slug,
    status: "open",
    ctaText: body.ctaText,
    introductionBlocks: body.introductionBlocks,
    sections: body.sections,
    cycleId: prevCycleId + 1,
    formType: body.formType,
  });

  if (prevForm) {
    prevForm.status = "permanently-closed";
    await prevForm.save();
  }

  await FormIndex.updateOne(
    { slug: body.formType },
    { $inc: { activeCycleId: 1 } }
  );

  return NextResponse.json({ success: true }, { status: 201 });
}
