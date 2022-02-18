import React, { FormEvent, useEffect, useState } from 'react';
import Logo from '../../assets/Logo.svg';
import api from '../../services/api';
import Form from './styles';


interface PokemonRepos {
  id: number;
  name: string;
  image: string;

}

const Home: React.FC = () => {

  const [pokemons, setPokemons] = useState('')
  const [pokemonRepos, setPokemonRepos] = useState<PokemonRepos[]>([])

  async function handleSubimit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault()
    api.get<PokemonRepos>(`pokemons/${pokemons}`)
      .then(response => setPokemonRepos([...pokemonRepos, response.data ]))
      setPokemons('')
  }


  return (
    <>
      <Form onSubmit={handleSubimit}>

        <div className='logo' >
          <img src={Logo} alt="" />
        </div>
        <section>
          <input placeholder='Digite o nome do pokemon' value={pokemons}
          onChange={event => setPokemons(event.target.value)}/>
          <button type='submit'><span>Buscar</span></button>
        </section>
      </Form>

      <div>
        {pokemonRepos.map(pokes => (
            <ul key={pokes.id}>
              <li>{pokes.name}</li>
              <img src={pokes.image} alt="imagem do pokemon" />
            </ul>
        ))}
      </div>
    </>
  )

};

export default Home;
