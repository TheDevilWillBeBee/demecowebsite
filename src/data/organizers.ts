import { Speaker } from "@/types";

// ============================================================================
// PLACEHOLDER: Update this description for the organizers section
// ============================================================================
export const organizersDescription = "";

// ============================================================================
// PLACEHOLDER: Update this list with organizers for the new edition
// Each organizer needs: id, name, institution, website, image, biography (optional)
// Images should be placed in /public/organizers/
// ============================================================================

export const organizers: Speaker[] = [
  {
    id: "barbora-hudcova",
    name: "Barbora Hudcová",
    institution: "EPFL",
    website: "https://www.barahudcova.com/",
    image: "/organizers/bara-new.png",
    biography:
      "I am a researcher at the border between mathematics and computer science, fascinated with emergent behaviour of dynamical systems. I am currently studying complex systems as models of self-replication and universal computation.",
  },
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
    id: "ehsan-pajouheshgar",
    name: "Ehsan Pajouheshgar",
    institution: "EPFL",
    website: "https://pajouheshgar.github.io/",
    image: "/organizers/ehsan-pajouheshgar.png",
    biography:
      "I am a postdoctoral researcher at EPFL, working on artificial life and complex systems.",
  },
  
];

export const getOrganizerById = (id: string): Speaker | undefined => {
  return organizers.find((organizer) => organizer.id === id);
};
