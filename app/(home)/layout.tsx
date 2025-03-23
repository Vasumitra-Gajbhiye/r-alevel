import type { Metadata } from "next";
import "../globals.css";
import Navigation from "./layout ui/navigation";
import ContactUs from "./layout ui/contact-us";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "r/alevel",
  description: "World's Largest A-Level Community",
  keywords:
    "alevel, a-level, a level, alevel community, a-level community, cambridge, edexcel",
  openGraph: {
    type: "website",
    url: "https://alevel.netlify.app",
    title: "r/alevel",
    description: "World's Largest A-Level Community",
    images: [
      {
        url: "https://r-alevel.netlify.app/opengraph-image.png",
        width: 960,
        height: 540,
        alt: "r/alevel",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className + " tracking-widest	"}>
        <Navigation />
        {children}
        <ContactUs />
      </body>
    </html>
  );
}
