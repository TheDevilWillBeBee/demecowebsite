"use client";

import Image from "next/image";
import Modal from "./ui/Modal";
import { motion } from "framer-motion";
import { Speaker } from "@/types";

interface ProgramSlotModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  date: string;
  description: string;
  speakers: (Speaker | undefined)[];
  onSpeakerClick: (speaker: Speaker) => void;
  recordingUrl?: string;
}

export default function ProgramSlotModal({
  isOpen,
  onClose,
  title,
  date,
  description,
  speakers,
  onSpeakerClick,
  recordingUrl,
}: ProgramSlotModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="text-white">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-white/60 mb-6">{date}</p>
        <p className="text-white/80 mb-8 whitespace-pre-wrap text-justify">{description}</p>

        {recordingUrl && (
          <div className="flex justify-center mb-8">
            <motion.a
              href={recordingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-black/30 backdrop-blur-xl border border-white/10 text-white/90 hover:bg-black/40 hover:border-white/30 transition-all duration-300 ease-in-out shadow-lg"
              aria-label="Watch recording on YouTube"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-6 w-6 mx-2 text-red-500"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M23.5 6.2c-.3-1.3-1.3-2.3-2.6-2.6C18.3 3 12 3 12 3s-6.3 0-8.9.6C1.8 3.9.8 4.9.5 6.2.1 8.8.1 12 .1 12s0 3.2.4 5.8c.3 1.3 1.3 2.3 2.6 2.6 2.6.6 8.9.6 8.9.6s6.3 0 8.9-.6c1.3-.3 2.3-1.3 2.6-2.6.4-2.6.4-5.8.4-5.8s0-3.2-.4-5.8ZM9.75 15.02V8.98L15.5 12l-5.75 3.02Z" />
              </svg>
              <span className="font-semibold">Watch Recording</span>
            </motion.a>
          </div>
        )}

        {speakers.length > 0 && (
          <>
            <h3 className="text-xl font-semibold mb-4">Speakers</h3>
            <div className="space-y-4">
              {speakers.filter(Boolean).map((speaker, index) => (
                <motion.button
                  key={index}
                  onClick={() => onSpeakerClick(speaker!)}
                  className="flex items-center space-x-4 w-full p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-left hover:bg-white/10 transition-all hover:scale-105"
                >
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <Image
                      src={speaker!.image}
                      alt={speaker!.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-white group-hover:text-blue-300 transition-colors">
                      {speaker!.name}
                    </h4>
                    <p className="text-white/60 text-sm line-clamp-2">
                      {speaker!.institution}
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
