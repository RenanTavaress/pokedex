import { StyleCard } from "./styles"

interface PokesProps {
  name: string;
  id: number;
  image: string;
}

export default function Card({id, name, image}: PokesProps) {
  return(
    <StyleCard>
      <div className="div-name">
        <p>{name}</p>
          <span>{`#00${id}`}</span>
      </div>
      <div className="div-image">
        <img src={image} alt="Imagem do pokemon" />
      </div>
    </StyleCard>
  )
}
