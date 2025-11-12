import { Poppins } from "next/font/google";
import Script from "next/script";
import "../globals.css";
import SessionProviderWrapper from "../SessionProviderWrapper";
import ContactUs from "./layout ui/contact-us";
import Navigation from "./layout ui/navigation";

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
    description: "The largest A Level community with free notes and resources.",
    url: "https://ralevel.com",
    siteName: "r/alevel",
    images: ["/opengraph-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "r/alevel - Notes, Past Papers & Resources",
    description: "By Students. For Students.",
    images: ["/opengraph-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
      <body className={poppins.className}>
        <SessionProviderWrapper>
          <Navigation />
          <div className="pt-11">{children}</div>
          <ContactUs />
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
