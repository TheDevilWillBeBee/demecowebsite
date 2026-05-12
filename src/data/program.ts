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
      title: "Meta-Game Objective: A Derivation",
      date: "May 27, 2025",
      description: "Is there a game that one can play that will lead us to AGI? Is there a game that will lead us to the automatic discovery of relevant skills? Assuming that the answer is yes, and working within a concrete framework, we will show that there are a consistency constraints that lead to a specific objective function.",
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
      title: "Could scales of complexity emerge from a lack of environmental controllability?",
      date: "May 27, 2025",
      description: "Replicate, collaborate, specialize: several of the \"great transitions\" marking an increase in complexity in evolutionary history follow this pattern. Unicellular organisms becoming clonal multicellular organisms made of various specialized cells, super-organisms made of genetically specialized members, societies made of professionally specialized members... In these examples, an increase in complexity can be seen as an increase in the types of interactions between entities. In this talk, I will walk you through some definitions of complexity that I have used in my work, and how they relate to / differ from this definition of complexity as \"interaction diversity\", where interaction diversity increases the control that organisms have over the environment. What constraints may environment and entities satisfy to give rise to those dynamics?",
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
      title: "Towards chemistries in dynamical systems",
      date: "May 27, 2025",
      description: "In chemistry and also in biology we are often concerned with multiple things (molecules or organisms) of the various kinds or species reacting with each other to produce other such things. Evolution, the process that supposedly converts chemistry into biology, also takes multiple things of various kinds as its starting point. I will present ongoing work on a way to describe aspects of any dynamical system in terms of multiple things and their reactions. To describe a dynamical system in this way three decisions have to be made. The first is how many different places there are at which molecules or chemical species can occur; the second is how to determine the species present (or not) at each place; and the third is the set of transitions and reactions that can occur between the species in the various places. For these choices to be compatible with the state update of the dynamical system each state must be able to determine transitions that take the currently occurring molecules to those occurring in the updated state. We also propose an additional requirement that there is always a unique way to choose the least amount of transitions occurring during state updates. As an example I will discuss gliders in the game of life cellular automaton.",
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
      title: "Hints of complexity in neural cellular automata and non-neural cellular automata",
      date: "May 28, 2025",
      description: "",
      speakerIds: ["martin-schule"],
      isBreak: false,
    },
    {
      time: "11:15",
      title: "Revisiting Symbiogenesis",
      date: "May 28, 2025",
      description: "Why do living organisms exist? This question was addressed in 1953 by Nils Barricelli, one of the founding fathers of artificial life, using numeric symbioorganisms (one dimensional cellular automata). In his CA models, reproduction and mutation were not sufficient to explain the origin of an evolutionary process (and therefore the origins of life). He proposed that the missing ingredient was symbiogenesis, the creation of a new entity out of a mutually beneficial relationship between two pre-existing entities. Barricelli's work has not been fully appreciated, however it is still very relevant today. In this presentation I will review Barricelli's ideas on symbiogenesis, recent ideas, and identify future directions and open questions.",
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
      title: "Noise-robust cellular automata",
      date: "May 28, 2025",
      description: "One of the most fascinating aspects of living systems is their ability to reliably perform complex information-processing tasks, even in a noisy environment. While any faithful model of artificial life must share this feature, very few concrete statements are known about the kinds of cellular automata that can be noise robust. In this talk, I will overview what we currently know and don't know about this topic. I will review some old results from the literature, and explain very new developments that have led to interesting discoveries in statistical physics. The talk will end with an open-ended discussion on the next steps that we as a community should take to better address the emergence of complexity in noise-robust systems.",
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
      title: "Turing's equations are Turing universal",
      date: "May 28, 2025",
      description: "Turing both developed the theory of pattern-formation in biological systems and the theory of universal computation. Turing's theory of pattern formation is based on a set of partial differential equations called reaction-diffusion equations (often with polynomial interactions), sometimes called \"Turing's equations\". We build a theory of what it means for PDEs to robustly perform computations, and demonstrate that Turing's equations are Turing universal. In doing so, we discover several mechanisms which are important for general, continuous-time analogue dynamics to robustly instantiate computation.",
      speakerIds: ["jordan-cotler"],
      isBreak: false,
    },
    {
      time: "16:45",
      title: "What Philosophy Demands of a Theory of Living Systems",
      date: "May 28, 2025",
      description: "This talk asks what it would take for a simulation not merely to model life-like behaviors, but to instantiate a living system itself. It argues that living systems are distinguished by internal standards of maintenance, malfunction, sickness, and death: they can fail not merely relative to an observer or designer but for themselves. Working backward from the possibility of internal failure, the paper identifies two deeper conditions of living systems: self-maintenance through time and the unity of the system whose activity is being maintained. Artificial life, if possible, would require not merely modeling life, but instantiating a self-maintaining system for which its own unity is at stake.",
      speakerIds: ["jensen-suther"],
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
      title: "Artificial Evolutionary Quantitative Finance",
      date: "May 29, 2025",
      description: "Artificial life methodologies have historically been applied to purely computational systems with strictly endogenous evolutionary dynamics. However, there lies another intriguing approach in allowing information from an external, real-world system (in this case, financial markets) to enable increased complexity within an artificial model. This talk provides foundations for understanding multi-scale evolutionary dynamics via a novel genetic programming system called FINPop (a Feasible-Infeasible N-Population approach). A core question explored during this talk is how best to generally explore inherently complex relationships within artificial systems from a hybrid qualitative and quantitative perspective, leveraging human intuition about natural living systems to gain insight into the realm of the artificial.",
      speakerIds: ["lisa-soros"],
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
