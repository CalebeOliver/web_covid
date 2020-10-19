import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  margin: 32px;

  background-color: #fff;
  box-shadow: 0px 4px 4px 2px #dbdada;
  border-radius: 8px;

  color: #272928;

  & > h3 {
    text-align: center;
    font-weight: normal;
    padding: 16px;
  }

  & > div.labels {
    display: flex;
    justify-content: space-around;
    & > * {
      width: 150px;
      padding: 16px;
      font-weight: bold;
      font-size: 10pt;
    }
    border-bottom: 1px solid #dbdada;
  }

  & > div.rows {
    & > div {
      display: flex;
      align-items: center;
      justify-content: space-around;
      & > * {
        display: flex;
        justify-content: flex-start;
        padding: 8px;
        margin-left: 8px;
        width: 150px;
      }
      border-bottom: 1px solid #dbdada;
    }

    & > div + div {
    }
  }

  & > div.footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    padding: 8px;

    font-size: 10pt;

    button {
      display:flex;
      border: none;
      background: none;
      padding: 8px;

      &:disabled {
        cursor: not-allowed;
      }
    }
  }
`;
