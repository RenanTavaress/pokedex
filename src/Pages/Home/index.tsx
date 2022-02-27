import React, { useState } from "react";
import Logo from "../../assets/Logo.svg";

import { SectionCards, Main } from "./styles";
import Card from "../../Components/Card";
import Forms from "../../Components/Form/index";

interface PokemonRepos {
  id: number;
  name: string;
  image: string;
}

const Home: React.FC = () => {
  const [pokemonRepos, setPokemonRepos] = useState<PokemonRepos[]>([]);

  return (
    <Main>
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <Forms pokemonRepos={pokemonRepos} setPokemonRepos={setPokemonRepos} />
      <SectionCards>
        {pokemonRepos.map((pokes) => (
          <Card key={pokes.id} {...pokes} />
        ))}
      </SectionCards>
    </Main>
  );
};

export default Home;
