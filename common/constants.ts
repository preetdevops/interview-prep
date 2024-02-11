import { CreateNewSessionType } from "@/contexts/create-new-session";

export const PreferredLevelList: PreferredLevelType[] = [
  "entry",
  "internship",
  "lead",
  "mid",
  "senior",
];

export const ExploreSessionFormatList: CreateNewSessionType[] = [
  {
    roleName: "Frontend Engineer",
    jobDescription: "react, Design Systems, Javascript",
    preferredLevelType: "entry",
  },
  {
    roleName: "Backend Engineer",
    jobDescription: "NodeJS, Javascript",
    preferredLevelType: "entry",
  },
  {
    roleName: "Design Systems Engineer",
    jobDescription: "Design Systems, Storybook, Atomic Design, Chromatic",
    preferredLevelType: "mid",
  },
  {
    roleName: "Full-stack engineer",
    jobDescription: "Javascript, MongoDB",
    preferredLevelType: "senior",
  },
];
