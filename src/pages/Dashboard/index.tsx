import React, { useContext, useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";

import Table from "../../components/Table";
import { Container } from "./styles";

import { SearchContext } from "../../context/SearchContext";

import CountryInformations from "../../interfaces/CountryInformations";
import ModalUpdater from "./components/ModalUpdater";

const Dashboard: React.FC = () => {
  const [editing, setEditing] = useState<CountryInformations | undefined>();

  const { search, sort } = useContext(SearchContext);

  useEffect(() => {
    search();
  }, [ search]);

  return (
    <>
      <Container>
        <Table
          title="Dados de Covid-19 pelo mundo"
          labels={["Editar","País","","Casos","Ativos","Recuperados","Mortos",]}
          values={sort().map((row) => () => (
            <div style={{ display: "flex" }} key={row.id}>
              <div><FiEdit style={{color:"#272928",cursor:'pointer'}} onClick={()=>setEditing(row)} /></div>
              <div>{row.name}</div>
              <div><img src={row.flag} style={{ height: 25, width: 30 }} alt={row.name} /></div>
              <div>{row.covidInformation.cases.toLocaleString("pt-Br")}</div>
              <div>{row.covidInformation.active.toLocaleString("pt-Br")}</div>
              <div>{row.covidInformation.recovered.toLocaleString("pt-Br")}</div>
              <div>{row.covidInformation.deaths.toLocaleString("pt-Br")}</div>
            </div>
          ))}
        />
      </Container>

      <ModalUpdater data={editing} reset={()=>setEditing(undefined)}/>
    </>
  );
};

export default Dashboard;
