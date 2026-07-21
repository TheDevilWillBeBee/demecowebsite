"use client";

import Image from "next/image";
import Modal from "./ui/Modal";
import { motion } from "framer-motion";
import { Speaker, Talk } from "@/types";
import { getTalkSpeakers as defaultGetTalkSpeakers } from "@/data/program";

interface ProgramSlotModalProps {
  talk: Talk | null;
  onClose: () => void;
  onSpeakerClick: (speaker: Speaker) => void;
  getTalkSpeakersFunc?: (talk: Talk) => Speaker[];
}

export default function ProgramSlotModal({
  talk,
  onClose,
  onSpeakerClick,
  getTalkSpeakersFunc,
}: ProgramSlotModalProps) {
  if (!talk) return null;

  const getTalkSpeakers = getTalkSpeakersFunc ?? defaultGetTalkSpeakers;
  const speakers = getTalkSpeakers(talk);
  const recordings = talk.recordings ?? (
    talk.recordingUrl
      ? [{ label: "Watch Recording", url: talk.recordingUrl }]
      : []
  );

  return (
    <Modal isOpen={true} onClose={onClose}>
      <div className="text-white">
        <h2 className="text-2xl font-bold mb-2">{talk.title}</h2>
        <p className="text-white/60 mb-6">{talk.date}</p>
        <p className="text-white/80 mb-8 whitespace-pre-wrap text-justify">{talk.description}</p>

        {recordings.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {recordings.map((recording) => (
              <motion.a
                key={recording.url}
                href={recording.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-black/30 backdrop-blur-xl border border-white/10 text-white/90 hover:bg-black/40 hover:border-white/30 transition-all duration-300 ease-in-out shadow-lg"
                aria-label={`${recording.label} on YouTube`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-red-500"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M23.5 6.2c-.3-1.3-1.3-2.3-2.6-2.6C18.3 3 12 3 12 3s-6.3 0-8.9.6C1.8 3.9.8 4.9.5 6.2.1 8.8.1 12 .1 12s0 3.2.4 5.8c.3 1.3 1.3 2.3 2.6 2.6 2.6.6 8.9.6 8.9.6s6.3 0 8.9-.6c1.3-.3 2.3-1.3 2.6-2.6.4-2.6.4-5.8.4-5.8s0-3.2-.4-5.8c-.3-1.3-1.3-2.3-2.6-2.6ZM9.75 15.02V8.98L15.5 12l-5.75 3.02Z" />
                </svg>
                <span className="font-semibold">{recording.label}</span>
              </motion.a>
            ))}
          </div>
        )}

        {speakers.length > 0 && (
          <>
            <h3 className="text-xl font-semibold mb-4">Speakers</h3>
            <div className="space-y-4">
              {speakers.map((speaker, index) => (
                <motion.button
                  key={index}
                  onClick={() => onSpeakerClick(speaker)}
                  className="flex items-center space-x-4 w-full p-3 rounded-lg bg-white/5 hover:bg-white/10 hover:scale-105 transition-all text-left"
                >
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">
                      {speaker.name}
                    </h4>
                    <p className="text-white/60 text-sm line-clamp-2">
                      {speaker.institution}
                    </p>
                  </div>
                </motion.button>
              ))}
            </div>
          </>
        )}
      </div>
    </Modal>
  );
}
