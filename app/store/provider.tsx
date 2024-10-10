"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import { ReactNode } from "react"; // Import ReactNode

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return <Provider store={store}>{children}</Provider>;
}
