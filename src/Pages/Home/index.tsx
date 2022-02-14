import React, { FormEvent } from 'react';
import Logo from '../../assets/Logo.svg';
import Form from './styles';

const Home: React.FC = () => {
  return (
    <Form>

      <div>
        <img src={Logo} alt="" />
      </div>

      <section>


        <input />
        <button>Buscar</button>
      </section>
    </Form>
  )

};

export default Home;
