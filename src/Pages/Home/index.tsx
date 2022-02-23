import React, { FormEvent, useEffect, useState } from "react";
import Logo from "../../assets/Logo.svg";
import api from "../../services/api";
import { Form, Cards, Divsao } from "./styles";

interface PokemonRepos {
  id: number;
  name: string;
  image: string;
}

const Home: React.FC = () => {
  const [pokemons, setPokemons] = useState("");
  const [pokemonRepos, setPokemonRepos] = useState<PokemonRepos[]>([]);

  async function handleSubimit(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();
    api
      .get<PokemonRepos>(`pokemons/${pokemons}`)
      .then((response) => setPokemonRepos([...pokemonRepos, response.data]));
    setPokemons("");
  }

  return (
    <>
      <Form onSubmit={handleSubimit}>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <section>
          <input
            placeholder="Digite o nome do pokemon"
            value={pokemons}
            onChange={(event) => setPokemons(event.target.value)}
          />
          <button type="submit">
            <span>Buscar</span>
          </button>
        </section>
      </Form>
      <Divsao>
        {pokemonRepos.map((pokes) => (
          <Cards key={pokes.id}>
            <div className="div-name">
              <p>{pokes.name}</p>
              <span>{`#00${pokes.id}`}</span>
            </div>
            <div className="div-image">
              <img src={pokes.image} alt="Imagem do pokemon" />
            </div>
          </Cards>
        ))}
      </Divsao>
    </>
  );
};

export default Home;
