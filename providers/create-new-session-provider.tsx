"use client";
import { CreateNewSessionContext, CreateNewSessionType, INITIAL_CREATE_SESSION_VALUES } from "@/contexts/create-new-session";
import { useState } from "react";

export const CreateNewSessionContextProvider
  = ({ children }: { children: React.ReactNode }) => {
    const [sessionFormat, setSessionFormat]
      = useState<CreateNewSessionType>(INITIAL_CREATE_SESSION_VALUES);
    return (
      <CreateNewSessionContext.Provider value={{ sessionFormat, setSessionFormat }}>
        {children}
      </CreateNewSessionContext.Provider>
    )
  }