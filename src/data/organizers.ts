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
  // Example organizer entry (uncomment and modify):
  // {
  //   id: "organizer-id",
  //   name: "Organizer Name",
  //   institution: "Institution Name",
  //   website: "https://example.com",
  //   image: "/organizers/organizer-photo.jpg",
  //   biography: "Organizer biography goes here...",
  // },
];

export const getOrganizerById = (id: string): Speaker | undefined => {
  return organizers.find((organizer) => organizer.id === id);
};
