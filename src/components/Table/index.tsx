import React, { useState } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight,
} from "react-icons/fi";

import { Container } from "./styles";

interface TableProps {
  title?: string;
  labels: string[];
  values: React.FC[];
}

const Table: React.FC<TableProps> = ({ title, labels, values }) => {
  const [page, setPage] = useState(0);

  return (
    <Container>
      <h3>{title}</h3>
      <div className="labels">
        {labels.map((label) => (
          <div key={label}>{label}</div>
        ))}
      </div>

      <div className="rows">
        {values.filter((item,index)=>index>=page*10&&index<=page*10+10).map(
          (Element, index) => <Element key={index} />
        )}
      </div>

      <div className="footer">
        <button disabled={page===0} onClick={()=>setPage(0)}><FiChevronsLeft /></button>
        <button disabled={page===0} onClick={()=>setPage(page-1)}><FiChevronLeft /></button>
        {page+1} - {Math.round(values.length / 10)} de {values.length}
        <button disabled={page>=Math.trunc(values.length/10)} onClick={()=>setPage(page+1)}><FiChevronRight /></button>
        <button disabled={page>=Math.trunc(values.length/10)} onClick={()=>setPage(Math.trunc(values.length/10))}><FiChevronsRight /></button>
      </div>
    </Container>
  );
};

export default Table;
