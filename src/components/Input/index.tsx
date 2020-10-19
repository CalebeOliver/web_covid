import React, { useCallback } from "react";
import { FiDelete } from "react-icons/fi";
import { IconType } from "react-icons/lib";

import { Container, InputArea } from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?:string;
  icon?: IconType;
  initialValue?:string;
  resetButton?:boolean;
  onResetClick?():void;
  onChange?(event:{target:{value:any}}):void;
}

const Input: React.FC<InputProps> = ({label, type, value, placeholder, onChange, icon: Icon, initialValue, resetButton }) => {
  const handleReset = useCallback(() => {
    if(onChange) onChange({ target: { value: initialValue||'' } });
  }, [initialValue, onChange]);

  return (
    <Container active={!!value}>
      {Icon && <Icon />}

      <InputArea>
        <p>{value&&label}</p>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </InputArea>

      {resetButton && <FiDelete onClick={handleReset} />}
    </Container>
  );
};

export default Input;
