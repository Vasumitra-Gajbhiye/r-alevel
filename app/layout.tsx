import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "r/alevel ",
  description:
    "Free A Level notes, past papers, and resources by top students from r/alevel. Study smarter with community-made materials and discussion groups.",
  metadataBase: new URL("https://ralevel.com"),
  openGraph: {
    title: "r/alevel - Notes & Past Papers",
    description:
      "Join 100k+ students sharing free A Level notes, past papers, and advice. For Students. By Students.",
    url: "https://ralevel.com",
    siteName: "r/alevel",
    images: ["/opengraph-image-2.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "r/alevel - Notes, Past Papers & Resources",
    description: "By Students. For Students.",
    images: ["/opengraph-image-2.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-8WQ1YNJQR8`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-8WQ1YNJQR8', {
            page_path: window.location.pathname,
          });
        `}
        </Script>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={poppins.className + " tracking-widest	"}>
        {/* <Navigation /> */}
        {children}
        {/* <ContactUs /> */}
      </body>
    </html>
  );
}
