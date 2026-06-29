import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SideMenu } from "@/components/side-menu";
import { ReadingProgress } from "@/components/reading-progress";
import { Interstitial } from "@/components/section";
import {
  Hero,
  AboutBitexen,
  Spectatorship,
  Opportunity,
  WhyKaizerChiefs,
  FanEconomy,
  Token,
  Launch,
  EcosystemValue,
  Revenue,
  Stakeholders,
  GrowthEngine,
  LongTermValue,
  Experiences,
  Beyond,
  Sponsorship,
  BitexenEnables,
  WhyBitexen,
  Vision,
  Conclusion,
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
      <Interstitial label="The thesis">
        Kaizer Chiefs already has the audience. The opportunity is to build the digital
        economy around it — not just tickets, merchandise and sponsorships, but digital
        participation, rewards, transactions, sponsor interaction and continuous supporter
        engagement.
      </Interstitial>
      <WhyKaizerChiefs />
      <FanEconomy />
      <Token />
      <Launch />
      <EcosystemValue />
      <Revenue />
      <Stakeholders />
      <GrowthEngine />
      <LongTermValue />
      <Experiences />
      <Beyond />
      <Interstitial label="A reminder">
        Mobile-first. Mass-market. The technology stays invisible. The supporter sees a
        club they belong to, a reward they have earned, a moment they helped shape — not a
        wallet, not a token, not a chain.
      </Interstitial>
      <Sponsorship />
      <BitexenEnables />
      <WhyBitexen />
      <Vision />
      <Conclusion />
      <Footer />
    </main>
  );
}
