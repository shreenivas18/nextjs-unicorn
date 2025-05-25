"use client";
import UnicornStudioWidget from "../components/UnicornStudioWidget";
import TeamHero from "../components/TeamHero";
import TeamDescription from "../components/TeamDescription";
import TeamValues from "../components/TeamValues";
import TeamMembers from "../components/TeamMembers";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Keep the existing Unicorn Studio Widget */}
      <UnicornStudioWidget />
      
      {/* Add new team sections below */}
      <TeamHero />
      <TeamDescription />
      <TeamValues />
      <TeamMembers />
      <Footer />
    </div>
  );
}