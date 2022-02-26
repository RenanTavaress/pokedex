import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  height: 100%;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  gap: 32px;
`;


const Form = styled.form`
  width: auto;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  input {
    width: 751px;
    height: 45px;
    border-radius: 10px;
    background: #ffffff;
    border: 0;
    padding-left: 15px;
    font-size: 14px;
  }

  button {
    margin-left: 10px;
    background-color: #3763ad;
    width: 119px;
    height: auto;
    border-radius: 10px;
    border: 0;

    span {
      color: #ffcb05;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 21px;
    }

    :hover {
      cursor: pointer;
    }
  }
`;

const SectionCards = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 45px;
  //top: 230px;
`;



export { Form, SectionCards, Main };
