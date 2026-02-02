"use client";

import { Speaker } from "@/types";
import { organizers as defaultOrganizers, organizersDescription as defaultDescription } from "@/data/organizers";
import PeopleGrid from "./ui/PeopleGrid";

interface OrganizersProps {
  onOrganizerClick: (organizer: Speaker) => void;
  organizersList?: Speaker[];
  description?: string;
}

export default function Organizers({ onOrganizerClick, organizersList, description }: OrganizersProps) {
  const organizers = organizersList ?? defaultOrganizers;
  const organizersDescription = description ?? defaultDescription;

  return (
    <PeopleGrid
      id="organizers"
      title="Organizers"
      items={organizers}
      description={<p>{organizersDescription}</p>}
      onPersonClick={onOrganizerClick}
    />
  );
}
