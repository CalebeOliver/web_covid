import React, { createContext, useCallback, useState } from "react";

import CountryInformations from "../interfaces/CountryInformations";
import api from "../services/api";

export type SortByType = "name" | "cases" | "deaths" | "active" | "recovered";

interface SearchContextProps {
  countryName?: string;
  search(name?: string): Promise<void>;
  state: CountryInformations[];
  sortBy:SortByType;
  setSortBy(value:SortByType): void;
  sort(): CountryInformations[];
}

export const SearchContext = createContext<SearchContextProps>(
  {} as SearchContextProps
);

export const SearchProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<CountryInformations[]>([]);
  const [sortBy, setSortBy] = useState<SortByType>('cases');

  const search = useCallback(async (name?: string) => {
    const { data } = await api.get<CountryInformations[]>(`/countries${name ? `?name=${name}` : ""}`);
    setState(data);
  }, []);

  const sort = useCallback(() => {
    if (sortBy === "name") {
      return state.sort((info1, info2) => {
        if (info1.name < info2.name) return -1;
        if (info1.name > info2.name) return 1;
        return 0;
      });
    }

    return state.sort((info1, info2) => info2.covidInformation[sortBy]-info1.covidInformation[sortBy]);
  }, [sortBy, state]);

  return (
    <SearchContext.Provider value={{ countryName: "", search, state, sortBy, setSortBy, sort }}>
      {children}
    </SearchContext.Provider>
  );
};
