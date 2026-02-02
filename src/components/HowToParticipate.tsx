"use client";

import { motion } from "framer-motion";

interface RecordedTalksProps {
  firstParagraph?: React.ReactNode;
  secondParagraph?: string;
}

export default function RecordedTalks({ firstParagraph, secondParagraph }: RecordedTalksProps) {
  const defaultFirstParagraph = (
    <>
      Recorded talks from previous years are available on the Youtube channel{" "}
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
  );

  const defaultSecondParagraph = "Recordings for this year's event will be available after the conference.";

  return (
    <section id="recorded-talks" className="sm:py-20 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-xl bg-black/50 rounded-xl p-6"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-white">
            Recorded Talks
          </h2>
          <div className="text-white/90 space-y-6 text-justify">
            <p>
              {firstParagraph ?? defaultFirstParagraph}
            </p>
            <p>
              {secondParagraph ?? defaultSecondParagraph}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 