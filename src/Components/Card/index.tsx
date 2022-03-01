import { StyleCard } from "./styles";
import { colorsBackground } from "../ColorCards/Colors";

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
        <p>{name}</p>
        <span>{`#00${id}`}</span>
      </div>
      <div className="div-image">
        <img src={image} alt="Imagem do pokemon" />
      </div>
    </StyleCard>
  );
}
