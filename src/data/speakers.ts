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
    id: "google-zurich",
    name: "Paradigms of Intelligence",
    institution: "Google Zurich",
    website: "",
    image: "/speakers/alexander-mordvintsev.jpeg",
    biography: "Paradigms of Intelligence team at Google Zurich.",
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
    image: "/speakers/jensen-suther.png",
    biography: "Harvard University.",
  },
  {
    id: "lisa-soros",
    name: "Lisa Soros",
    institution: "Nof1",
    website: "",
    image: "/speakers/lisa-soros.png",
    biography: "Nof1",
  },



];

export const getSpeakerById = (id: string): Speaker | undefined => {
  // First check speakers, then check organizers
  return speakers.find((speaker) => speaker.id === id)
    ?? organizers.find((organizer) => organizer.id === id);
};
