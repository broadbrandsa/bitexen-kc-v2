import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SideMenu } from "@/components/side-menu";
import { ReadingProgress } from "@/components/reading-progress";
import {
  Hero,
  AboutBitexen,
  Spectatorship,
  Opportunity,
  WhyKaizerChiefs,
  FanEconomy,
  Token,
  Launch,
  Revenue,
  Stakeholders,
  GrowthEngine,
  LongTermValue,
  Experiences,
  Beyond,
  Sponsorship,
  WhyBitexen,
  Vision,
  Discussion,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--kc-ink)] text-[var(--kc-paper)]">
      <ReadingProgress />
      <Header />
      <SideMenu />
      <Hero />
      <AboutBitexen />
      <Spectatorship />
      <Opportunity />
      <WhyKaizerChiefs />
      <FanEconomy />
      <Token />
      <Launch />
      <Revenue />
      <Stakeholders />
      <GrowthEngine />
      <LongTermValue />
      <Experiences />
      <Beyond />
      <Sponsorship />
      <WhyBitexen />
      <Vision />
      <Discussion />
      <Footer />
    </main>
  );
}
