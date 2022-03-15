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
    width: 100%;

    .name-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      p {
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
        color: #ffffff;
        margin-left: 39px;
      }
      img {
        margin-left: 15px;
      }

    }
    span {
      font-weight: 600;
      font-size: 15px;
      line-height: 18px;
      color: rgba(0, 0, 0, 0.42);
    }
  }
`;

const StyledDivBackground = styled.div`
    width: 151px;
    height: 151px;
    background-color: ${props => props.color} ;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 122px;
      height: 122px;
    }

`

export { StyleCard, StyledDivBackground };
