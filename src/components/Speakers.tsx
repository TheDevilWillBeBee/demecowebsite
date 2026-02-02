"use client";

import { Speaker } from "@/types";
import { speakers as defaultSpeakers } from "@/data/speakers";
import PeopleGrid from "./ui/PeopleGrid";

interface SpeakersProps {
  onSpeakerClick: (speaker: Speaker) => void;
  speakersList?: Speaker[];
}

export default function Speakers({ onSpeakerClick, speakersList }: SpeakersProps) {
  const speakers = speakersList ?? defaultSpeakers;

  return (
    <PeopleGrid
      id="speakers"
      title="Speakers"
      items={speakers}
      onPersonClick={onSpeakerClick}
    />
  );
}
