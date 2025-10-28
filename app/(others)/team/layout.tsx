import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Team | r/alevel",
  description: "World's Largest A-Level Community",
  // keywords:
  // "alevel, a-level, a level, alevel community, a-level community, cambridge, edexcel",

  openGraph: {
    images: ["https://r-alevel.netlify.app/opengraph-image.jpg"],
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
      <main className={poppins.className}>
        {children}
      </main>
  );
}
