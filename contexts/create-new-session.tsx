"use client";
import { createContext } from "react";

export type CreateNewSessionType = {
  roleName: string;
  jobDescription: string;
  preferredLevelType: PreferredLevelType;
}

export type CreateNewSessionContextType = {
  sessionFormat: CreateNewSessionType;
  setSessionFormat: (format: CreateNewSessionType) => void;
}

export const INITIAL_CREATE_SESSION_VALUES: CreateNewSessionType = {
  roleName: "",
  jobDescription: "",
  preferredLevelType: "" as unknown as any
}

export const CreateNewSessionContext = createContext<CreateNewSessionContextType>({
  sessionFormat: INITIAL_CREATE_SESSION_VALUES,
  setSessionFormat: () => { }
});