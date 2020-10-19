import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 8px;
  background-color: #c03e18;
  box-shadow: 0px 0px 4px #00000099;

  & > * {
    margin: 8px;
    margin-left: 32px;
  }
`;

export const InputSearch = styled.div<{ active?: boolean }>`
  background-color: #ffff;
  padding: 8px;
  border-radius: 6px;
  box-shadow: 0px 0px 4px #00000099;

  & > p {
    font-size: 8pt;
    color:#00000099;
  }

  & > div {
    display: flex;
    align-items: center;

    input {
      margin-left: 8px;
      background: none;
      border: none;
    }
    button {
      display: flex;
      align-items: center;
      border: none;
      background: none;
      ${({ active }) =>
        active
          ? css`
              & > svg {
                color: #000;
              }
            `
          : ""}
    }
    svg {
      color: #7c7c7c;
    }
  }
`;
