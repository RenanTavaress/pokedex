import { StyleCard } from "./styles"

// interface PokesProps {
//   pokes: string;
// }

export default function Card({id, name, image}: any) {
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
