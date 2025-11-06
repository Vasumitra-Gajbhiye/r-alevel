import Hero from "./ui/hero";
import AboutUs from "./ui/about-us";
import OurProgress from "./ui/our-progress";
import OurTeam from "./ui/our-team";
import JoinBanner from "./ui/join-banner.client";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export default function Home() {
  return (
    <main className={poppins.className}>
      <Hero />
      <AboutUs />
      <OurProgress />
      <OurTeam />
      <JoinBanner />
    </main>
  );
}
