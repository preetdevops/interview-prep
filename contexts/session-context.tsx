"use client";
import { createContext } from "react";
import { CreateNewSessionType, INITIAL_CREATE_SESSION_VALUES } from "./create-new-session";

export type SessionType = {
  questions: string[];
  metadata: CreateNewSessionType;
}

export type SessionContextType = {
  session: SessionType;
  setSession: (session: SessionType) => void;
}

export const INITIAL_SESSION_VALUES: SessionType = {
  questions: [],
  metadata: INITIAL_CREATE_SESSION_VALUES
}

export const SessionContext = createContext<SessionContextType>({
  session: INITIAL_SESSION_VALUES,
  setSession: () => { }
});