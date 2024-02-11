
"use client";
import { INITIAL_SESSION_VALUES, SessionContext, SessionType } from "@/contexts/session-context";
import { useState } from "react";

export const SessionContextProvider
  = ({ children }: { children: React.ReactNode }) => {
    const [session, setSession]
      = useState<SessionType>(INITIAL_SESSION_VALUES);
    return (
      <SessionContext.Provider value={{ session, setSession }}>
        {children}
      </SessionContext.Provider>
    )
  }