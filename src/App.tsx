import React from "react";

import Global from "./styles/global";

import { SearchProvider } from "./context/SearchContext";
import { LoadingContextProvider } from "./context/LoadingContext";

import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import ApisProvider from "./context/ApisContext";

function App() {
  return (
    <>
      <LoadingContextProvider>
        <ApisProvider>
          <SearchProvider>
            <Header />
            <Dashboard />
          </SearchProvider>
        </ApisProvider>
      </LoadingContextProvider>
      <Global />
    </>
  );
}

export default App;
