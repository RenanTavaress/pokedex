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

const SectionCards = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 45px;
`;


const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: 33%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 5px;
    color: #3763ad;
    a:visited {
    color: #3763ad;
  }

  }
`

export { SectionCards, Main, Header};
