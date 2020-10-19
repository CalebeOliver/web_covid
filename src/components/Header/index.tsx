import React, { FormEvent, useCallback, useContext, useState } from "react";
import { FiSearch } from "react-icons/fi";

import { Container } from "./styles";

import { SearchContext, SortByType } from "../../context/SearchContext";
import Dropdown from "../Dropdown";
import Input from "../Input";

const filterOptions: { label: string; value: SortByType }[] = [
  { label: "País", value: "name" },
  { label: "Casos", value: "cases" },
  { label: "Ativos", value: "active" },
  { label: "Recuperados", value: "recovered" },
  { label: "Mortes", value: "deaths" },
];

const Header: React.FC = () => {
  const [countryName, setCountryName] = useState("");
  const { search, setSortBy, sortBy } = useContext(SearchContext);

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      search(countryName);
    },
    [countryName, search]
  );

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Input
          value={countryName}
          onChange={({target})=>setCountryName(target.value)}
          icon={FiSearch}
          label="Buscar País"
          placeholder="Buscar País"
          initialValue=""
          resetButton
        />
      </form>

      <Dropdown
        options={filterOptions}
        label="Ordenar por"
        value={sortBy}
        onChange={(value) => setSortBy(value)}
      />
    </Container>
  );
};

export default Header;
