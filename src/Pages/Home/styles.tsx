import styled from "styled-components";

const Form = styled.form`
  width: 1000px;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  .logo {
    position: absolute;
    top: 27px;
  }

  section {
    display: flex;
    position: absolute;
    top: 125px;

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
  }
`;

const SectionCards = styled.section`
  width: auto;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 45px;
  position: absolute;
  top: 230px;
`;

// const Cards = styled.div`
//   width: 181px;
//   height: 253px;
//   background-color: #48d0b0;
//   border-radius: 25px;

//   .div-name {
//     position: relative;
//     top: 22px;

//     text-align: center;

//     p {
//       font-weight: 500;
//       font-size: 18px;
//       line-height: 21px;
//       color: #ffffff;
//     }

//     span {
//       font-weight: 500;
//       font-size: 15px;
//       line-height: 18px;
//       color: rgba(0, 0, 0, 0.42);
//     }
//   }
//   .div-image {
//     position: relative;
//     bottom: -41px;
//     left: 14px;
//     width: 151px;
//     height: 151px;
//     background-color: #91e3d0;
//     border-radius: 50%;

//     display: flex;
//     justify-content: center;
//     align-items: center;

//     img {
//       width: 122px;
//       height: 122px;
//     }
//   }
// `;

const Main = styled.main`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { Form, SectionCards, Main };
