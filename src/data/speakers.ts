import { Speaker } from "@/types";

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
];

export const getSpeakerById = (id: string): Speaker | undefined => {
  return speakers.find((speaker) => speaker.id === id);
};
