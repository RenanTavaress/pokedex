import styled from "styled-components";

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
    height: 45px;
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

export { Form };
