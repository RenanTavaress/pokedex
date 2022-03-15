import React, { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { BsHeartFill } from "react-icons/bs"
import { SectionCards, Main,Header } from "./styles";
import Card from "../../Components/Card";
import Forms from "../../Components/Form/index";

interface PokemonRepos {
  id: number;
  name: string;
  image: string;
  types: Array<string>;
}

const Home: React.FC = () => {
  const [pokemonRepos, setPokemonRepos] = useState<PokemonRepos[]>([]);

  return (
    <Main>
      <Header>
        <div>
          <img src={Logo} alt="" />
        </div>
        <div>
          <BsHeartFill/>
          <a href="#">  Meus Favoritos</a>
        </div>
      </Header>
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
