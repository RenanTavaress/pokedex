import styled from "styled-components";

const StyleCard = styled.div`
  width: 181px;
  height: 253px;
  background-color: #48d0b0;
  border-radius: 25px;

  .div-name {
    position: relative;
    top: 22px;

    text-align: center;

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
    position: relative;
    bottom: -41px;
    left: 14px;
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

`

export {StyleCard}
