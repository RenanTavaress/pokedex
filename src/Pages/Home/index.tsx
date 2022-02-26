import React, { FormEvent, useEffect, useState } from "react";
import Logo from "../../assets/Logo.svg";
import api from "../../services/api";
import { Form, SectionCards, Main } from "./styles";
import Card from "../../Components/Card";

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
    <Main>
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <Form onSubmit={handleSubimit}>
        <input
          placeholder="Digite o nome do pokemon"
          value={pokemons}
          onChange={(event) => setPokemons(event.target.value)}
        />
        <button type="submit">
          <span>Buscar</span>
        </button>
      </Form>
      <SectionCards>
        {pokemonRepos.map((pokes) => (
          <Card key={pokes.id} {...pokes} />
        ))}
      </SectionCards>
    </Main>
  );
};

export default Home;
