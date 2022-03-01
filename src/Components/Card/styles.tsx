import styled from "styled-components";

const StyleCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 181px;
  height: 253px;
  background-color: #48d0b0;
  border-radius: 25px;
  background-color: ${props => props.color} ;

  .div-name {
    margin-top: -10px;
    text-align: center;
    margin-bottom: 1.75rem;

    p {
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
      color: #ffffff;
    }

    span {
      font-weight: 500;
      font-size: 15px;
      line-height: 18px;
      color: rgba(0, 0, 0, 0.42);
    }
  }
  .div-image {
    width: 151px;
    height: 151px;
    background-color: #91e3d0;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 122px;
      height: 122px;
    }
  }
`;

export { StyleCard };
