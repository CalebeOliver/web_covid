import React from "react";
import { FiX } from "react-icons/fi";

import { Container, Header, Body, Footer } from "./styles";

interface ModalProps {
  title: string;
  open: boolean;
  onClose?(): void;
  onDone?(): void;
}

const Modal: React.FC<ModalProps> = ({ title, open, onClose, onDone, children }) => {
  return (
    <Container open={open}>
      <div>
        <Header>
          <h4>{title}</h4>
          <button>
            <FiX onClick={onClose} />
          </button>
        </Header>

        <Body>{children}</Body>

        <Footer>
          <button className='close' onClick={onClose} >Cancelar</button>
          <button onClick={onDone}>Salvar</button>
        </Footer>
      </div>
    </Container>
  );
};

export default Modal;
