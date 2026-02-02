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
    {
      time: "9:15",
      title: "Registration + Coffee & Pastry",
      date: "May 27, 2025",
      description: "Morning refreshments",
      speakerIds: [],
      isBreak: true,
    },
    {
      time: "10:00",
      title: "Opening and Introducing our EPFL Research Group",
      date: "May 27, 2025",
      description: "",
      speakerIds: ["barbora-hudcova", "vassilis-papadopoulos", "ehsan-pajouheshgar"],
      isBreak: false,
    },
    {
      time: "11:15",
      title: "Research Talk (Title TBD)",
      date: "May 27, 2025",
      description: "",
      speakerIds: ["clement-hongler"],
      isBreak: false,
    },
    {
      time: "12:30",
      title: "Lunch Break & Coffee",
      date: "May 27, 2025",
      description: "",
      speakerIds: [],
      isBreak: true,
    },
    {
      time: "14:00",
      title: "Research Talk (Title TBD)",
      date: "May 27, 2025",
      description: "",
      speakerIds: ["lana-sinapayen"],
      isBreak: false,
    },
    {
      time: "15:30",
      title: "Coffee & Pastry",
      date: "May 27, 2025",
      description: "Afternoon refreshments",
      speakerIds: [],
      isBreak: true,
    },
    {
      time: "16:00",
      title: "Research Talk (Title TBD)",
      date: "May 27, 2025",
      description: "",
      speakerIds: ["martin-biehl"],
      isBreak: false,
    },

    {
      time: "17:30",
      title: "Open-Ended Discussion",
      date: "May 27, 2025",
      description: "",
      speakerIds: [""],
      isBreak: true,
    },

  ],
  "Day 2": [
    {
      time: "9:30",
      title: "Coffee & Pastry",
      date: "May 28, 2025",
      description: "Morning refreshments",
      speakerIds: [],
      isBreak: true,
    },
    {
      time: "10:00",
      title: "Research Talk (Title TBD)",
      date: "May 28, 2025",
      description: "",
      speakerIds: ["martin-schule"],
      isBreak: false,
    },
    {
      time: "11:15",
      title: "Research Talk (Title TBD)",
      date: "May 28, 2025",
      description: "",
      speakerIds: ["stefano-nichele"],
      isBreak: false,
    },
    {
      time: "12:30",
      title: "Lunch Break & Coffee",
      date: "May 28, 2025",
      description: "",
      speakerIds: [],
      isBreak: true,
    },
    {
      time: "14:00",
      title: "Research Talk (Title TBD)",
      date: "May 28, 2025",
      description: "",
      speakerIds: ["ethan-lake"],
      isBreak: false,
    },
    {
      time: "15:30",
      title: "Coffee & Pastry",
      date: "May 28, 2025",
      description: "Afternoon refreshments",
      speakerIds: [],
      isBreak: true,
    },
    {
      time: "16:00",
      title: "Research Talk (Title TBD)",
      date: "May 28, 2025",
      description: "",
      speakerIds: ["jordan-cotler"],
      isBreak: false,
    },

    {
      time: "17:30",
      title: "Invited Dinner",
      date: "May 28, 2025",
      description: "",
      speakerIds: [""],
      isBreak: true,
    },

  ],
  "Day 3": [
    {
      time: "9:30",
      title: "Coffee & Pastry",
      date: "May 29, 2025",
      description: "Morning refreshments",
      speakerIds: [],
      isBreak: true,
    },
    {
      time: "10:00",
      title: "Research Talk (Title TBD)",
      date: "May 29, 2025",
      description: "",
      speakerIds: ["google-zurich"],
      isBreak: false,
    },
    {
      time: "11:15",
      title: "Research Talk (Title TBD)",
      date: "May 29, 2025",
      description: "",
      speakerIds: ["google-zurich"],
      isBreak: false,
    },
    {
      time: "12:30",
      title: "Lunch Break & Coffee",
      date: "May 29, 2025",
      description: "",
      speakerIds: [],
      isBreak: true,
    },
    {
      time: "14:00",
      title: "Lightning Talks",
      date: "May 29, 2025",
      description: "",
      speakerIds: [],
      isBreak: false,
    },
    {
      time: "15:30",
      title: "Coffee & Pastry",
      date: "May 29, 2025",
      description: "Afternoon refreshments",
      speakerIds: [],
      isBreak: true,
    },
    {
      time: "16:00",
      title: "Lightning Talks",
      date: "May 29, 2025",
      description: "",
      speakerIds: [],
      isBreak: false,
    },

    {
      time: "17:30",
      title: "Open-Ended Discussion",
      date: "May 29, 2025",
      description: "",
      speakerIds: [""],
      isBreak: true,
    },
    
  ],
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
