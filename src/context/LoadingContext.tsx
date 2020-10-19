import React, { createContext, useCallback, useState } from "react";
import Loading from "../components/Loading";

interface LoadingContextProps {
  state: boolean;
  open(): void;
  close(): void;
}

export const LoadingContext = createContext({} as LoadingContextProps);

export const LoadingContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(false);

  const open = useCallback(() => setState(true), []);
  const close = useCallback(() => setState(false), []);

  return (
    <LoadingContext.Provider value={{ state, open, close }}>
      {children}
      {state && <Loading/>}
    </LoadingContext.Provider>
  );
};
