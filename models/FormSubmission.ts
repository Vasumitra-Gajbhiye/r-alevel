// import mongoose from "mongoose";

// const FormSubmissionSchema = new mongoose.Schema(
//   {
//     formId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Form",
//       required: true,
//     },
//     responses: Object,
//     files: [
//       {
//         fieldId: String,
//         fileUrl: String,
//         fileName: String,
//       },
//     ],
//   },
//   { timestamps: true }
// );

// export default mongoose.models.FormSubmission ||
//   mongoose.model("FormSubmission", FormSubmissionSchema);

// models/FormSubmission.ts
import mongoose from "mongoose";

const FormSubmissionSchema = new mongoose.Schema(
  {
    formSlug: {
      type: String,
      required: true,
      index: true,
    },

    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
      index: true,
    },

    responses: {
      type: Object,
      required: true,
      /**
       * shape:
       * {
       *   [sectionId]: {
       *     [fieldId]: value
       *   }
       *
       * value can be:
       * - string
       * - number
       * - array
       * - file metadata object
       */
    },

    submittedAt: {
      type: Date,
      default: Date.now,
      index: true,
    },

    metadata: {
      ip: String,
      userAgent: String,
    },
  },
  { timestamps: true }
);

export default mongoose.models.FormSubmission ||
  mongoose.model("FormSubmission", FormSubmissionSchema);
