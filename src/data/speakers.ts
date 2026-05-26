import { Speaker } from "@/types";
import { organizers } from "./organizers";

// ============================================================================
// PLACEHOLDER: Update this list with speakers for the new edition
// Each speaker needs: id, name, institution, website, image, biography (optional)
// Images should be placed in /public/speakers/
// ============================================================================

export const speakers: Speaker[] = [
  // Example speaker entry (uncomment and modify):
  // {
  //   id: "speaker-id",
  //   name: "Speaker Name",
  //   institution: "Institution Name",
  //   website: "https://example.com",
  //   image: "/speakers/speaker-photo.jpg",
  //   biography: "Speaker biography goes here...",
  // },
  {
    id: "lisa-soros",
    name: "Lisa Soros",
    institution: "Independent Researcher",
    website: "",
    image: "/speakers/lisa-soros.png",
    biography: "Independent researcher.",
  },
  {
    id: "lana-sinapayen",
    name: "Lana Sinapayen",
    institution: "Sony Computer Science Lab",
    website: "https://lanasina.github.io/",
    image: "/speakers/lana-sinapayen.png",
    biography: "Researcher at Sony and Associate Professor at National Insitute for Basic Biology, Japan.",
  },
  {
    id: "martin-schule",
    name: "Martin Schüle",
    institution: "ZHAW University",
    website: "",
    image: "/speakers/martin-schule.jpeg",
    biography: "Head of Research AI & Computational Environment at ZHAW School of Life Sciences and Facility Management Institute of Computational Life Sciences",
  },

  {
    id: "eyvind-niklasson",
    name: "Eyvind Niklasson",
    institution: "Google Research (Paradigms of Intelligence)",
    website: "",
    image: "/speakers/eyvind-niklasson.png",
    biography: "Researcher at Google Research (Paradigms of Intelligence).",
  },
  {
    id: "mayalen-etcheverry",
    name: "Mayalen Etcheverry",
    institution: "Google Research (Paradigms of Intelligence)",
    website: "",
    image: "/speakers/mayalen-etcheverry.png",
    biography: "Researcher at Google Research (Paradigms of Intelligence).",
  },
  {
    id: "ettore-randazzo",
    name: "Ettore Randazzo",
    institution: "Google Research (Paradigms of Intelligence)",
    website: "",
    image: "/speakers/ettore-randazzo.png",
    biography: "Researcher at Google Research (Paradigms of Intelligence).",
  },
  {
    id: "alexander-mordvintsev",
    name: "Alexander Mordvintsev",
    institution: "Google Research (Paradigms of Intelligence)",
    website: "",
    image: "/speakers/alexander-mordvintsev.jpeg",
    biography: "Researcher at Google Research (Paradigms of Intelligence).",
  },
  {
    id: "charlotte",
    name: "Charlotte Knierim",
    institution: "Google Research (Paradigms of Intelligence)",
    website: "",
    image: "/speakers/charlotte-knierim.jpg",
    biography: "Researcher at Google Research (Paradigms of Intelligence).",
  },

  {
    id: "stefano-nichele",
    name: "Stefano Nichele",
    institution: "Østfold University College",
    website: "https://www.nichele.eu/",
    image: "/speakers/stefano-nichele.png",
    biography: "Professor at Østfold University College.",
  },

  {
    id: "ethan-lake",
    name: "Ethan Lake",
    institution: "Berkeley",
    website: "https://ethanlake.github.io/",
    image: "/speakers/ethan-lake.jpeg",
    biography: "Postdoctoral Fellow at UC Berkeley",
  },
  {
    id: "clement-hongler",
    name: "Clement Hongler",
    institution: "EPFL, Xent Labs",
    website: "https://www.hongler.org/",
    image: "/organizers/clement-hongler.jpg",
    biography: "Professor at EPFL, and CEO and founder of Xent Labs.",
  },
  {
    id: "jordan-cotler",
    name: "Jordan Cotler",
    institution: "Harvard University",
    website: "",
    image: "/speakers/jordan-cotler.jpeg",
    biography: "Assistant Professor at Harvard University",
  },
  {
    id: "martin-biehl",
    name: "Martin Biehl",
    institution: "Cross Labs",
    website: "",
    image: "/speakers/martin-biehl.jpg",
    biography: "Researcher at Cross Labs.",
  },
  {
    id: "jensen-suther",
    name: "Jensen Suther",
    institution: "Harvard University",
    website: "",
    image: "/speakers/jensen-suther.jpg",
    biography: "Harvard University.",
  },




];

export const getSpeakerById = (id: string): Speaker | undefined => {
  // First check speakers, then check organizers
  return speakers.find((speaker) => speaker.id === id)
    ?? organizers.find((organizer) => organizer.id === id);
};
