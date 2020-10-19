import styled, { css } from "styled-components";

export const Container = styled.div<{ open: boolean }>`
  display: flex;
  flex-direction: column;

  position: relative;
`;

export const DropdownCover = styled.div<{ open: boolean }>`
  display: flex;
  align-items: center;
  padding: 8px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0px 0px 4px #00000099;

  & > div {
    p:first-child {
      font-size: 8pt;
      color: #00000099;
    }
  }

  button {
    display: flex;
    border: none;
    background: none;
    margin-left: 4px;

    & > svg {
      ${({ open }) =>
        open
          ? css`
              transform: rotateZ(180deg);
            `
          : css`
              transform: rotateZ(0deg);
            `}
      transition: 0.4s;
    }
  }
`;

export const DropdownContent = styled.ul<{ open: boolean }>`
  ${({ open }) =>
    open
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}

  position:absolute;
  top: 40px;
  width: 100%;

  background-color: #fff;
  list-style: none;

  border-radius: 0px 0px 8px 8px;
  box-shadow: 0px 0px 4px 0px #dbdada;

  & > li {
    padding: 8px;
    cursor: pointer;
  }
`;
