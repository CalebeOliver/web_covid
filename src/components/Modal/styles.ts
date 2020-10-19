import styled, { css } from "styled-components";

export const Container = styled.div<{ open: boolean }>`
  position: absolute;
  top: 0px;
  left: 0px;

  width: 100%;
  height: 100%;

  ${({ open }) =>
    open
      ? css`
          display: flex;
        `
      : css`
          display: none;
        `}

  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.4);

  & > div {
    display: flex;
    flex-direction: column;

    max-width: 500px;
    width: 100%;

    margin: 32px;

    background-color: #fff;
    box-shadow: 0px 2px 4px 2px #dbdada;
    border-radius: 8px;

    color: #272928;
  }
  & > div > div + div {
    border-top: 1px solid rgba(0, 0, 0, 0.2);
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;

  button {
    display: flex;
    border: none;
    background: none;
  }
`;

export const Body = styled.div`
  padding: 16px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    padding:16px;

    color:#5a5a5a;
    font-weight: bold;

    border: none;
    background-color: rgb(93, 176, 215);

    border: none;
    border-left:1px solid rgba(0,0,0,0.2);
    background: none;
    
    

    &.close {
      color: #c03e18;
    }
  }
`;
