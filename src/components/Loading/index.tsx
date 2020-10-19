import React from "react";

import { Container } from './styles';

import load from "../../assets/load.svg";

const Loading: React.FC = () => {
  return (
    <Container>
      <img src={load} alt="" />
    </Container>
  );
};

export default Loading;
