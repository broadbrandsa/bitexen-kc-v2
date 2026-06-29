import {
  Award,
  CalendarCheck,
  Gift,
  Handshake,
  Lock,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";
import { Section, KeyTakeaway } from "@/components/section";
import { Grid, PillarCard } from "@/components/sections/primitives";

export function Experiences() {
  return (
    <Section
      id="experiences"
      eyebrow="The Experience"
      title="Bringing the ecosystem to life"
      intro="The digital fan economy is built around continuously introducing new experiences that keep supporters engaged throughout the season."
    >
      <Grid cols={4}>
        <PillarCard
          icon={CalendarCheck}
          title="Matchday experiences"
          items={[
            "Predict match outcomes",
            "Build winning streaks",
            "Live match challenges",
            "Matchday check-ins",
            "Digital match passports",
          ]}
        />
        <PillarCard
          icon={Gift}
          title="Rewards & recognition"
          items={[
            "Loyalty milestones",
            "Digital collectibles",
            "Merchandise unlocks",
            "Hospitality experiences",
            "Meet & greet opportunities",
          ]}
        />
        <PillarCard
          icon={Users}
          title="Community engagement"
          items={[
            "Supporter branch competitions",
            "Referral campaigns",
            "Regional leaderboards",
            "Community achievements",
            "Seasonal challenges",
          ]}
        />
        <PillarCard
          icon={Handshake}
          title="Sponsor experiences"
          items={[
            "Brand challenges",
            "Exclusive partner offers",
            "Cashback campaigns",
            "Retail rewards",
            "Co-branded competitions",
          ]}
        />
      </Grid>

      <KeyTakeaway>
        The objective is to create new reasons for supporters to engage every day — not
        just on matchday.
      </KeyTakeaway>
    </Section>
  );
}

export function Beyond() {
  return (
    <Section
      id="beyond"
      eyebrow="Beyond Fan Engagement"
      title="Strengthening the club–supporter relationship"
      intro="The ecosystem creates opportunities that strengthen the relationship between supporters and the club in entirely new ways."
    >
      <Grid cols={4}>
        <PillarCard
          icon={Trophy}
          title="Club growth campaigns"
          items={[
            "Youth academy initiatives",
            "Community development projects",
            "Stadium enhancement campaigns",
            "Heritage and legacy projects",
            "Supporter-funded experiences",
          ]}
        />
        <PillarCard
          icon={Lock}
          title="Exclusive access"
          items={[
            "Behind-the-scenes content",
            "Training session access",
            "Player Q&A sessions",
            "Exclusive digital content",
            "Limited edition experiences",
          ]}
        />
        <PillarCard
          icon={Award}
          title="Recognition"
          items={[
            "Digital supporter badges",
            "Founding member status",
            "Campaign recognition",
            "Community leaderboards",
            "Loyalty achievements",
          ]}
        />
        <PillarCard
          icon={Sparkles}
          accent="blue"
          title="Future opportunities"
          items={[
            "Financial services",
            "Digital commerce",
            "Merchant rewards",
            "Ticketing integration",
            "Broader supporter ecosystem",
          ]}
        />
      </Grid>

      <KeyTakeaway>
        Supporters become active participants in the club&apos;s journey through
        experiences, recognition and community.
      </KeyTakeaway>
    </Section>
  );
}
