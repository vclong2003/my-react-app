import React from "react";
import { BrowserRouter } from "react-router-dom";

interface IAppProviderProps {
  children: React.ReactNode;
}

export default function AppProvider({ children }: IAppProviderProps) {
  return <BrowserRouter>{children}</BrowserRouter>;
}
