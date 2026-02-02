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

// Import 2025-specific data
import { speakers2025 } from "@/data/2025/speakers";
import { organizers2025, organizersDescription2025 } from "@/data/2025/organizers";
import { abstractParagraphs2025, abstractHighlight2025, abstractImage2025 } from "@/data/2025/abstract";
import { program2025, getTalkSpeakers2025, getSpeakerTalks2025 } from "@/data/2025/program";

const days2025 = [
  { date: "May 26", day: "Day 1" },
  { date: "May 27", day: "Day 2" },
  { date: "May 28", day: "Day 3" },
];

export default function Edition2025() {
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
        <Navbar edition="2025" logo="/logo-2025.png" />
        <Header
          subtitle="Artificial Life Perspectives"
          dateLocation="May 26-28, 2025 • EPFL, Lausanne"
          logo="/logo-2025.png"
        />
        <div className="container mx-auto px-4">
          <Abstract
            paragraphs={abstractParagraphs2025}
            highlight={abstractHighlight2025}
            image={abstractImage2025}
          />
          <RecordedTalks
            firstParagraph={
              <>
                Recorded talks from Demeco 2025 are available on the Youtube channel{" "}
                <a
                  href="https://www.youtube.com/watch?v=tU6OOYZarNc&list=PLEt5M_lIDJdlVYeByo116YMdMPD-qcCak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-blue-200 underline"
                >
                  Artificial Life EPFL
                </a>
                .
              </>
            }
            secondParagraph="You can also browse the 'Conference Program' below; clicking on the talk slots will give you a link to the recorded talk."
          />
          <Program
            onTalkClick={handleTalkClick}
            programData={program2025}
            getTalkSpeakersFunc={getTalkSpeakers2025}
            days={days2025}
          />
          <Speakers
            onSpeakerClick={handlePersonClick}
            speakersList={speakers2025}
          />
          <Sponsors />
          <Organizers
            onOrganizerClick={handlePersonClick}
            organizersList={organizers2025}
            description={organizersDescription2025}
          />
          <Location />
        </div>
        <Footer />

        <ProgramSlotModal
          talk={selectedTalk}
          onClose={() => setSelectedTalk(null)}
          onSpeakerClick={handlePersonClick}
          getTalkSpeakersFunc={getTalkSpeakers2025}
        />

        <ProfileModal
          person={selectedPerson}
          onClose={() => setSelectedPerson(null)}
          talks={selectedPerson ? getSpeakerTalks2025(selectedPerson.id) : undefined}
          onTalkClick={handleTalkClick}
        />
      </div>
    </main>
  );
}
