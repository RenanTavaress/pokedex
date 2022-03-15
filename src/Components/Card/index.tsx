import { StyleCard, StyledDivBackground } from "./styles";
import { colorsBackground, backgrounDiv } from "../ColorCards/Colors";
//import { BsHeart } from "react-icons/bs"
import Heart from '../../assets/Heart.svg'

interface PokesProps {
  name: string;
  id: number;
  image: string;
  types: Array<string>;
}

export default function Card({ id, name, image, types }: PokesProps) {
  return (
    <StyleCard color={`${colorsBackground[types[0]]}`}>
      <div className="div-name" >
        <div className="name-icon">
            <p>{name}</p>
            <img src={Heart} alt="" />
        </div>
        <span>{`#00${id}`}</span>
      </div>
      <StyledDivBackground color={`${backgrounDiv[types[0]]}`} >
        {console.log(`${backgrounDiv[types[0]]}`)}
        <img src={image} alt="Imagem do pokemon" />
      </StyledDivBackground>
    </StyleCard>
  );
}
