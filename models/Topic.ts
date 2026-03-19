import mongoose from "mongoose";

const TopicSchema = new mongoose.Schema(
  {
    board: {
      type: String,
      required: true,
      index: true,
    },

    level: {
      type: String,
      required: true,
      index: true,
    },

    subject: {
      type: String,
      required: true,
      index: true,
    },

    code: {
      type: String,
      required: true,
      index: true,
    },

    chapter: {
      type: String,
      required: true,
      index: true,
    },

    chapterSlug: {
      type: String,
      index: true,
    },

    chapterTitle: {
      type: String,
      required: true,
    },

    topicId: {
      type: String,
      required: true,
      index: true,
    },

    slug: {
      type: String,
      required: true,
      index: true,
    },

    title: {
      type: String,
      required: true,
    },

    introMarkdown: {
      type: String,
      default: "",
    },

    detailedNotesMarkdown: {
      type: String,
      default: "",
    },

    quickRevisionMarkdown: {
      type: String,
      default: "",
    },

    metaDescription: {
      type: String,
      default: "",
    },

    published: {
      type: Boolean,
      default: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

TopicSchema.index(
  { board: 1, level: 1, subject: 1, code: 1, topicId: 1 },
  { unique: true }
);

export default mongoose.models.Topic || mongoose.model("Topic", TopicSchema);
