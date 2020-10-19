import styled, { keyframes } from "styled-components";

const animation = keyframes`
  from{
    transform: rotateZ(0deg);
  }
  to{
    transform: rotateZ(350deg);
  }
`;

export const Container = styled.div`
  position: absolute;
  z-index: 100;

  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;

  display:flex;
  justify-content:center;
  align-items:center;

  background-color: rgba(0, 0, 0, 0.4);

  img {
    animation: ${animation} 1s infinite;
  }
`;
