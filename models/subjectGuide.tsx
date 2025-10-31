// import mongoose, { Schema, model, models } from "mongoose";


// const subtopicSchema = new mongoose.Schema({
//   name: String,
//   url: String,
// });

// const chapterSchema = new mongoose.Schema({
//   name: String,
//   subtopics: [subtopicSchema],
// });

// const subjectGuideSchema = new mongoose.Schema({
//   subjectName: { type: String, required: true },
//   examCode: { type: String, required: true },
//   chapters: [chapterSchema],
// });

// export default mongoose.models.SubjectGuide || mongoose.model("SubjectGuide", subjectGuideSchema);



// export interface SubjectGuideType {
//   subjectName: string;
//   examCode?: string;
//   topics: {
//     title: string;
//     subtopics: string[];
//   }[];
// }

// const subjectGuideSchema = new Schema<SubjectGuideType>({
//   subjectName: String,
//   examCode: String,
//   topics: [
//     {
//       title: String,
//       subtopics: [String],
//     },
//   ],
// });

// export default models.SubjectGuide ||
//   model<SubjectGuideType>("SubjectGuide", subjectGuideSchema);


// ✅ Safe initialization
// const SubjectGuide =
//   (mongoose.models && mongoose.models.SubjectGuide) ||
//   mongoose.model("SubjectGuide", subjectGuideSchema);

// export default SubjectGuide;

import mongoose, { Schema, model, models } from "mongoose";

export interface SubjectGuideType {
  subjectName: string;
  examCode?: string;
  chapters: {
    title: string;
    topics: {
      title: string;
      subtopics: string[];
    }[];
  }[];
}

const subjectGuideSchema = new Schema<SubjectGuideType>({
  subjectName: { type: String, required: true },
  examCode: String,
  chapters: [
    {
      title: String,
      topics: [
        {
          title: String,
          subtopics: [String],
        },
      ],
    },
  ],
});

export default models.SubjectGuide ||
  model<SubjectGuideType>("SubjectGuide", subjectGuideSchema);