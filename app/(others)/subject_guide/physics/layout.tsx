import fs from "fs";
import path from "path";
import Sidebar from "../sidebar/Sidebar";

export default function PhysicsLayout({ children }: { children: React.ReactNode }) {
  const filePath = path.join(process.cwd(), "app","(others)", "subject_guide", "physics", "subject.json");
  const subjectData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  return (
    <div className="flex min-h-screen">
      <Sidebar subjectData={JSON.parse(JSON.stringify(subjectData))} />
      <main className="flex-1 p-6 overflow-y-auto">{children}</main>
    </div>
  );
}