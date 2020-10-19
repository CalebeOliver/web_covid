import React, { useCallback, useState } from "react";
import { FiChevronDown, FiFilter } from "react-icons/fi";

import { Container, DropdownContent, DropdownCover } from "./styles";

interface DropdownProps {
  options: { label: string; value: string | number }[];
  label: string;
  value: string;
  onChange(values: any): void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, value, onChange }) => {
  const [open, setOpen] = useState(false);

  const handleClick = useCallback((value)=>{
    setOpen(false);
    onChange(value)
  },[onChange]);

  return (
    <Container open={open}>
      <DropdownCover open={open}>
        
        <FiFilter/>

        <div>
          <p>Ordenar por</p>
          <p>{options.filter((option)=>option.value===value)[0].label}</p>
        </div>

        <button onClick={() => setOpen(!open)}>
          <FiChevronDown />
        </button>
      </DropdownCover>

      <DropdownContent open={open}>
        {options.map((item) => (
          <li key={item.label} onClick={()=>handleClick(item.value)}>
            {item.label}
          </li>
        ))}
      </DropdownContent>
    </Container>
  );
};

export default Dropdown;
