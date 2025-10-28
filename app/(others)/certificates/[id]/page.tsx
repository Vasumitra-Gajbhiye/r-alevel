import getSingleCert from "@/app/controller/getSingleCert";
import Image from "next/image";
import style from "@/app/(others)/certificates/[id]/layout.module.css";
import verticalLog from "@/public/logo/Vertical logo.png";
import group39 from "@/public/certificateImages/Group 39.png";
import group40 from "@/public/certificateImages/Group 40.png";
import group41 from "@/public/certificateImages/Group 41.png";
import group42 from "@/public/certificateImages/Group 42.png";
import kushSign from "@/public/certificateImages/Kush_sign.png";
import jakeSign from "@/public/certificateImages/Jake_sign.jpg";
import vasuSign from "@/public/certificateImages/Vasu_sign.jpg";

export default async function SingleResource({ params: { id } }: any) {
  const cert = await getSingleCert(id);
  console.log(cert.admin)
  let admin;
  let adminSign;
  let height;
  let width;
  if(cert.admin=="kush") {
    admin="Kush";
    adminSign="Kush_sign.png"
    width=300
    height=200
    } 
  if(cert.admin=="scrim") {
    admin = "Jake Schwegler";
     adminSign="Jake_sign.jpg"
     width=1263
    height=360
  }
  
const src = adminSign ? `/certificateImages/${adminSign}` : "/fallback.png";

  const typeMessage = function () {
    if (cert.certType === "helper")
      return {
        lineOne: "FOR HELPING AND GUIDING THE STUDENTS OF",
        lineTwo: "r/alevel COMMUNITY",
      };
      
    if (cert.certType === "resource")
      return {
        lineOne: "FOR MAKING ACADEMIC RESOURCES AND HELPING",
        lineTwo: "THE STUDENTS OF r/alevel COMMUNITY",
      };
      if (cert.certType === "2024WriterCompFirstPlace")
      return {
        lineOne: "For First Place",
        lineTwo: "2024 Creative & Essay Writing Competition",
      };
  };
  return (
    <div className="main-cert-con scale-30 xs:scale-40 md:scale-50 lg:scale-70 xl:scale-80">
      <div
        className="cert-con flex justify-center flex-col items-center scale-50"
        style={{ marginTop: "-40rem", marginBottom: "-35rem" }}
      >
        <div
          className="cert border-2 border-themBlue-100  flex flex-col items-center rounded-xl relative overflow-hidden mb-40"
          style={{ width: "140rem", padding: "23rem 18rem 55rem 18rem" }}
        >
          <div className="design">
            <Image
              className="c-design-img top-des scale-150 absolute -z-10 top-28 left-28"
              src={group41}
              alt="something"
            />

            <Image
              className="c-design-img bottom-des absolute -z- bottom-0 left-0 w-full"
              src={group42}
              alt="something"
            />

            <Image
              className="c-design-img bottom-dot absolute -z-10 scale-125"
              src={group40}
              alt="something"
              style={{ bottom: "16%", left: "2%" }}
            />

            <Image
              className="c-design-img top-dot absolute -z-10 scale-125"
              src={group39}
              alt="something"
              style={{ top: "2%", right: "2%" }}
            />
          </div>
          <div className="title-con relative">
            <h1
              className="c-heading-main text-themBlue-300  mb-7 font-bold"
              style={{ fontSize: "11rem" }}
            >
              CERTIFICATE
            </h1>
            <h1
              className="c-heading-main-shadow text-themBlue-100 absolute  top-3 left-3 -z-10 font-bold"
              style={{ fontSize: "11rem" }}
            >
              CERTIFICATE
            </h1>
          </div>
          <h2
            className="c-sub-heading text-themBlue-200 text-5xl tracking-widest font-semibold mb-24"
            style={{ letterSpacing: "0.9rem" }}
          >
            OF APPRECIATION
          </h2>
          <h2
            className="c-name-intro text-themBlue-200 text-5xl font-medium mb-24 "
            style={{ letterSpacing: "0.2rem" }}
          >
            Proudly Presented To
          </h2>
          <h1
            className="c-name border-themBlue-300 text-themBlue-300 text-8xl border-b mb-24 text-center font-bold"
            style={{ padding: "0 2.8rem 2rem 2rem" }}
          >
            {cert.name ? cert.name : null}
          </h1>
          <h2
            className="c-subtitle text-themBlue-200 text-center text-5xl font-medium mb-44"
            style={{ lineHeight: "3.4rem" }}
          >
            {typeMessage()?.lineOne} <br></br> {typeMessage()?.lineTwo}
          </h2>
          <div className="auth w-full flex items-center justify-between">
            <div className=" owner-info flex flex-col items-center gap-12">
              <Image
                className="owner-sign max-w-96 border-1 border-black pb-12"
                src={vasuSign}
                alt="Signature"
              />
              <h4 className="owner-name text-themBlue-300 text-5xl font-semibold">
                Vasumitra
              </h4>
              <h6
                className="owner-title text-themBlue-100 text-4xl font-medium"
                style={{ letterSpacing: "0.3rem" }}
              >
                SERVER OWNER
              </h6>
            </div>
            <div className="server-logo w-96">
              <Image
                className="server-logo-img w-full"
                src={verticalLog}
                alt="Signature"
              />
            </div>
            <div className={`admin-info flex  flex-col items-center gap-12 ${admin=="Kush" ? "-mt-40" : ""}`}>
              <Image
                className={`admin-sign max-w-96 border-1 border-black ${admin=="Kush" ? "" : "pb-12"}`}
               src={src}
               height={height}
               width={width}
                alt="Signature"
              />
              <h4 className="admin-name text-themBlue-300 text-5xl font-semibold">
                {admin}
              </h4>
              <h6
                className="admin-title text-themBlue-100 text-4xl font-medium"
                style={{ letterSpacing: "0.3rem" }}
              >
                CHIEF ADMINISTRATOR
              </h6>
            </div>
          </div>
        </div>
        <div className="download-btn bg-cy-500 py-8 px-12 rounded-2xl flex justify-center items-center gap-8 transition-all hover:cursor-pointer hover:scale-105">
          <svg
            className="db-svg w-20 h-20 text-white"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 3V16M12 16L16 11.625M12 16L8 11.625"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15M21 15C21 17.8284 21 19.2426 20.1213 20.1213C19.8215 20.4211 19.4594 20.6186 19 20.7487"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <a
            href={`/cert_pdf_doc/${cert.certId}-pdf.pdf`}
            target="_blank"
            className="download-btn-text text-white text-6xl font-bold no-underline"
            style={{ letterSpacing: "0.5rem" }}
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
}
