import { Talk, Speaker } from "@/types";
import { getSpeakerById } from "./speakers";

// ============================================================================
// PLACEHOLDER: Update this program with the schedule for the new edition
//
// Each day is a key (e.g., "Day 1", "Day 2") with an array of Talk objects.
// Each Talk needs:
//   - time: string (e.g., "10:00")
//   - title: string
//   - date: string (e.g., "May 26, 2026")
//   - description: string (can be empty or detailed)
//   - speakerIds: string[] (array of speaker IDs from speakers.ts)
//   - isBreak?: boolean (true for coffee breaks, lunch, etc.)
//   - recordingUrl?: string (optional YouTube link after the event)
// ============================================================================

export const program: Record<string, Talk[]> = {
  "Day 1": [
    // Example entries (uncomment and modify):
    // {
    //   time: "9:45",
    //   title: "Coffee & Registration",
    //   date: "Date TBD",
    //   description: "Morning refreshments",
    //   speakerIds: [],
    //   isBreak: true,
    // },
    // {
    //   time: "10:00",
    //   title: "Opening words",
    //   date: "Date TBD",
    //   description: "",
    //   speakerIds: [],
    //   isBreak: false,
    // },
    // {
    //   time: "10:20",
    //   title: "Talk Title",
    //   date: "Date TBD",
    //   description: "Talk description...",
    //   speakerIds: ["speaker-id"],
    //   isBreak: false,
    // },
  ],
  "Day 2": [],
  "Day 3": [],
};

export const getTalkSpeakers = (talk: Talk): Speaker[] => {
  return talk.speakerIds.map((id) => getSpeakerById(id)).filter((speaker): speaker is Speaker => speaker !== undefined);
};

export const getSpeakerTalks = (speakerId: string): Talk[] => {
  const allTalks: Talk[] = [];
  Object.values(program).forEach((dayTalks) => {
    dayTalks.forEach((talk) => {
      if (talk.speakerIds.includes(speakerId)) {
        allTalks.push(talk);
      }
    });
  });
  return allTalks;
};
