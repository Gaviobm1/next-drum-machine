"use client";
import React from "react";

export const EnabledContext = React.createContext();

function EnabledProvider({ children }) {
  const [enabled, setEnabled] = React.useState(true);

  const value = { enabled, setEnabled };

  return (
    <EnabledContext.Provider value={value}>{children}</EnabledContext.Provider>
  );
}

export default EnabledProvider;
