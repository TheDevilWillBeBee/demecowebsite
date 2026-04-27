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
          <section className="sm:py-8 py-6">
            <div className="max-w-6xl mx-auto">
              <div className="backdrop-blur-xl bg-black/50 rounded-xl p-6 border border-white/15">
                <p className="text-white/95 text-base sm:text-lg leading-relaxed text-center">
                  The workshop is free and open to anyone who registers. If you would like to attend, please contact us at{" "}
                  <a
                    href="mailto:demeco2026@gmail.com"
                    className="text-blue-300 hover:text-blue-200 underline"
                  >
                    demeco2026@gmail.com
                  </a>{" "}
                  and complete the registration form we will share with you by May 15, 2026.
                </p>
              </div>
            </div>
          </section>
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
