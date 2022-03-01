import { FormEvent, useState, SetStateAction } from "react";
import { Form } from "./styles";
import api from "../../services/api";

interface PokemonRepos {
  id: number;
  name: string;
  image: string;
  types: Array<string>;
}

interface PropsPokemonRepos {
  pokemonRepos: PokemonRepos[];
  //setPokemonRepos: React.Dispatch<SetStateAction<PokemonRepos[]>>;
  setPokemonRepos: (val: PokemonRepos[]) => void;
}

export default function Forms({
  pokemonRepos,
  setPokemonRepos,
}: PropsPokemonRepos) {
  const [pokemons, setPokemons] = useState("");

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
    <Form onSubmit={handleSubimit}>
      <input
        placeholder="Digite o nome do pokemon"
        value={pokemons}
        onChange={(event) => setPokemons(event.target.value)}
        required
      />
      <button type="submit">
        <span>Buscar</span>
      </button>
    </Form>
  );
}
