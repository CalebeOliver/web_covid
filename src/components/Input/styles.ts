import styled, { css } from "styled-components";

export const Container = styled.div<{active:boolean}>`
  display: flex;
  align-items: center;

  padding: 8px;

  border: none;
  border-radius: 8px;
  background-color:#fff;
  box-shadow: 0px 0px 4px #00000099;

  & > * + * {
    margin-left: 8px;
  }

  & > svg {
    ${({active})=>active?'':css`color:#7c7c7c;`}
    &:last-child{
      cursor: pointer;
    }
  }
`;

export const InputArea = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  & > p {
    font-size: 8pt;
  }

  & > input {
    border:none;
  }
`;
