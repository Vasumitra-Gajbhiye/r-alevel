import mongoose from "mongoose";

const syllabusSchema = new mongoose.Schema({
  title: { type: String, required: true },
  board: { type: String, required: true },
  link: { type: String, required: true },
});

const notesSchema = new mongoose.Schema({
  title: { type: String, required: true },
  source: { type: String },
  link: { type: String, required: true },
  tags: [{ type: String }],
});

const booksSchema = new mongoose.Schema({
  title: { type: String, required: true },
  edition: { type: String },
  cover: { type: String },
  buy: { type: String },
});

const youtubeChannelSchema = new mongoose.Schema({
  channel: { type: String, required: true },
  channelUrl: { type: String, required: true },
  description: { type: String },
  thumbnail: { type: String },
  type: { type: String },

});

const youtubePlaylistSchema = new mongoose.Schema({
  title: { type: String, required: true },
  playlistUrl: { type: String, required: true },
  description: { type: String },
  thumbnail: { type: String },
});

const pastPaperSchema = new mongoose.Schema({
  year: { type: Number, required: true },
  board: { type: String, required: true },
  link: { type: String, required: true },
});

const toolsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  description: { type: String},
});

const resources2dataSchema = new mongoose.Schema(
  {
    subject: { type: String, required: true }, // e.g. "Chemistry"
    level: { type: String, default: "A-Level" }, // optional field
    syllabus: [syllabusSchema],
    notes: [notesSchema],
    books: [booksSchema],
    youtubeChannel: [youtubeChannelSchema],
    youtubePlaylist: [youtubePlaylistSchema],
    pastPapers: [pastPaperSchema],
    tools: [toolsSchema],
  },
  { timestamps: true }
);

export default mongoose.models.resources2data ||
  mongoose.model("resources2data", resources2dataSchema);