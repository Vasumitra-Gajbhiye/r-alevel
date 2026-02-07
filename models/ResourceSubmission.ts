// import mongoose from "mongoose";

// const UploadedFileSchema = new mongoose.Schema(
//   {
//     fieldId: {
//       type: String,
//       required: true, // usually "files"
//     },

//     originalName: {
//       type: String,
//       required: true,
//     },

//     mimeType: {
//       type: String,
//       required: true,
//     },

//     size: {
//       type: Number, // bytes
//       required: true,
//     },

//     driveFileId: {
//       type: String,
//       required: true,
//     },

//     driveFolderId: {
//       type: String,
//       required: true,
//     },

//     viewLink: {
//       type: String,
//       required: true,
//     },

//     downloadLink: {
//       type: String,
//     },
//   },
//   { _id: false }
// );

// const ResourceSubmissionSchema = new mongoose.Schema(
//   {
//     /** 🔗 Which form this belongs to */
//     formSlug: {
//       type: String,
//       required: true,
//       index: true, // important for admin stats
//       default: "resource",
//     },

//     /** 👤 Contributor info */
//     contributor: {
//       fullName: {
//         type: String,
//         required: true,
//       },
//       email: {
//         type: String,
//         required: true,
//       },
//       discordOrRedditId: {
//         type: String,
//         required: true,
//       },
//     },

//     /** 🎓 Academic context */
//     academic: {
//       board: {
//         type: String,
//         enum: ["IGCSE", "AS Level", "A2 Level"],
//         required: true,
//       },
//       subject: {
//         type: String,
//         required: true,
//       },
//       topic: {
//         type: String,
//       },
//     },

//     /** 📦 Resource metadata */
//     resource: {
//       title: {
//         type: String,
//         required: true,
//       },
//       description: {
//         type: String,
//         required: true,
//       },
//       resourceType: {
//         type: String,
//         enum: ["Files", "Links", "Files + Links"],
//         required: true,
//       },
//       links: [
//         {
//           type: String,
//         },
//       ],
//     },

//     /** 📁 Uploaded files (Google Drive) */
//     files: [UploadedFileSchema],

//     /** 🧠 Moderation status */
//     status: {
//       type: String,
//       enum: ["pending", "approved", "rejected"],
//       default: "pending",
//       index: true,
//     },

//     /** 📝 Admin notes (internal only) */
//     adminNotes: {
//       type: String,
//     },

//     /** 🔍 Metadata */
//     metadata: {
//       ip: String,
//       userAgent: String,
//     },

//     /** 📜 Certificate tracking */
//     certificateIssued: {
//       type: Boolean,
//       default: false,
//     },

//     certificateIssuedAt: {
//       type: Date,
//     },
//   },
//   {
//     timestamps: true, // createdAt, updatedAt
//   }
// );

// export default mongoose.models.ResourceSubmission ||
//   mongoose.model("ResourceSubmission", ResourceSubmissionSchema);

import mongoose from "mongoose";

/* ================================
   📁 Uploaded file (Drive-backed)
================================ */
const UploadedFileSchema = new mongoose.Schema(
  {
    fieldId: {
      type: String,
      required: true, // usually "files"
    },

    originalName: {
      type: String,
      required: true,
    },

    mimeType: {
      type: String,
      required: true,
    },

    size: {
      type: Number, // bytes
      required: true,
    },

    driveFileId: {
      type: String,
      required: true,
    },

    driveFolderId: {
      type: String,
      required: true,
    },

    viewLink: {
      type: String,
      required: true,
    },

    downloadLink: {
      type: String,
    },
  },
  { _id: false }
);

/* ================================
   📦 Individual Resource
================================ */
const ResourceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    resourceType: {
      type: String,
      enum: ["Files", "Links", "Files + Links"],
      required: true,
    },

    /** 🔗 External links (stored in DB only) */
    links: [
      {
        type: String,
      },
    ],

    /** 📁 Files uploaded to Drive */
    files: [UploadedFileSchema],

    /** 📂 Drive folder for this resource */
    driveFolderId: {
      type: String,
      required: true,
    },

    /** 🧠 Moderation (per-resource, future-proof) */
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
      index: true,
    },

    adminNotes: {
      type: String,
    },
  },
  { _id: false }
);

/* ================================
   📄 Submission (root)
================================ */
const ResourceSubmissionSchema = new mongoose.Schema(
  {
    /** 🔗 Which form this belongs to */
    formSlug: {
      type: String,
      required: true,
      index: true,
      default: "resource",
    },

    /** 👤 Contributor info */
    contributor: {
      fullName: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      discordOrRedditId: {
        type: String,
        required: true,
      },
    },

    /** 📦 Submitted resources */
    resources: {
      type: [ResourceSchema],
      required: true,
    },

    /** 📂 Root Drive folder for submission */
    driveFolderId: {
      type: String,
      required: true,
    },

    /** 🧠 Overall submission status */
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
      index: true,
    },

    /** 📝 Admin notes (submission-level) */
    adminNotes: {
      type: String,
    },

    /** 🔍 Metadata */
    metadata: {
      ip: String,
      userAgent: String,
    },

    /** 📜 Certificate tracking */
    certificateIssued: {
      type: Boolean,
      default: false,
    },

    certificateIssuedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.ResourceSubmission ||
  mongoose.model("ResourceSubmission", ResourceSubmissionSchema);
