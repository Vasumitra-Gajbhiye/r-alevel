import connectDB from "@/libs/mongodb";
import CertData from "@/models/certsData";
import CertificatesAdminPage from "./certificateClient";

export default async function Certificates() {
  await connectDB();
  const certificates = await CertData.find();

  console.log(certificates);
  return (
    <>
      <CertificatesAdminPage />
    </>
  );
}
