import { Speaker } from "@/types";

export const organizersDescription2025 = "";

export const organizers2025: Speaker[] = [
  {
    id: "vassilis-papadopoulos",
    name: "Vassilis Papadopoulos",
    institution: "EPFL",
    website: "https://vassi.life/",
    image: "/organizers/vassilis-papadopoulos.jpg",
    biography:
      "I am a theoretical physicist, now working on more applied aspects of Artificial Life. I am particularly interested in developing methods that allow to generate interesting dynamics at scale (probably using machine learning, but not necessarily!).",
  },
  {
    id: "barbora-hudcova",
    name: "Barbora Hudcová",
    institution: "EPFL",
    website: "https://www.barahudcova.com/",
    image: "/organizers/barbora-hudcova.jpg",
    biography:
      "I am a researcher at the border between mathematics and computer science, fascinated with emergent behaviour of dynamical systems. I am currently studying complex systems as models of self-replication and universal computation.",
  },
];

export const getOrganizerById2025 = (id: string): Speaker | undefined => {
  return organizers2025.find((organizer) => organizer.id === id);
};
