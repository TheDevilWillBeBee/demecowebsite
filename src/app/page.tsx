"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Abstract from "@/components/Abstract";
import Program from "@/components/Program";
import Speakers from "@/components/Speakers";
import Sponsors from "@/components/Sponsors";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import ProgramSlotModal from "@/components/ProgramSlotModal";
import ProfileModal from "@/components/ProfileModal";
import Organizers from "@/components/Organizers";
import VideoBackground from "@/components/VideoBackground";
import RecordedTalks from "@/components/HowToParticipate";
import { Talk, Speaker } from "@/types";
import { getSpeakerTalks } from "@/data/program";

export default function Home() {
  const [selectedTalk, setSelectedTalk] = useState<Talk | null>(null);
  const [selectedPerson, setSelectedPerson] = useState<Speaker | null>(null);

  const handleTalkClick = (talk: Talk) => {
    setSelectedPerson(null);
    setSelectedTalk(talk);
  };

  const handlePersonClick = (person: Speaker) => {
    setSelectedTalk(null);
    setSelectedPerson(person);
  };

  return (
    <main className="min-h-screen relative">
      <VideoBackground />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Header />
        <div className="container mx-auto px-4">
          <Abstract />
          <RecordedTalks />
          <Program onTalkClick={handleTalkClick} />
          <Speakers onSpeakerClick={handlePersonClick} />
          <Sponsors />
          <Organizers onOrganizerClick={handlePersonClick} />
          <Location />
        </div>
        <Footer />

        <ProgramSlotModal
          talk={selectedTalk}
          onClose={() => setSelectedTalk(null)}
          onSpeakerClick={handlePersonClick}
        />

        <ProfileModal
          person={selectedPerson}
          onClose={() => setSelectedPerson(null)}
          talks={selectedPerson ? getSpeakerTalks(selectedPerson.id) : undefined}
          onTalkClick={handleTalkClick}
        />
      </div>
    </main>
  );
}
