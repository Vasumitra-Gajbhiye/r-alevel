import fs from "fs";
import path from "path";

// ✅ Path to your subject.json
const subjectPath = path.join(process.cwd(), "app/(others)/subject_guide/physics/subject.json");

// ✅ Output base folder
const baseDir = path.join(process.cwd(), "app/(others)/subject_guide/physics");

const data = JSON.parse(fs.readFileSync(subjectPath, "utf-8"));

function formatName(str) {
  return str.toLowerCase().replace(/\s+/g, "_").replace(/\//g, "-");
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

// ✅ Simple default page content
function createPageContent(title, pathParts) {
  const fullPath = pathParts.join(" → ");
  return `export default function Page() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-2">${title}</h1>
      <p>This is the page for <strong>${fullPath}</strong>.</p>
    </div>
  );
}`;
}

data.chapters.forEach((chapter) => {
  const chapterDir = path.join(baseDir, formatName(chapter.title));
  ensureDir(chapterDir);

  chapter.topics.forEach((topic) => {
    const topicDir = path.join(chapterDir, formatName(topic.title));
    ensureDir(topicDir);

    topic.subtopics.forEach((sub) => {
      const subDir = path.join(topicDir, formatName(sub));
      ensureDir(subDir);

      const filePath = path.join(subDir, "page.tsx");

      if (!fs.existsSync(filePath)) {
        fs.writeFileSync(
          filePath,
          createPageContent(sub, [chapter.title, topic.title, sub]),
          "utf-8"
        );
      }
    });
  });
});

console.log("✅ All folders and pages generated successfully!");