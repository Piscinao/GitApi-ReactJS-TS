import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />

      <Title>Explore repositórios no Github</Title>
      {/* Form e repositories são componentes do style.ts */}
      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste" >
          <img src="https://avatars0.githubusercontent.com/u/28152962?s=460&v=4" alt="Piscinão"/>

        <div>
          <strong>bootcamp/Gostack</strong>
          <p>First reat app</p>
        </div>

        <FiChevronRight size={20}/>
        </a>
        <a href="teste" >
          <img src="https://avatars0.githubusercontent.com/u/28152962?s=460&v=4" alt="Piscinão"/>

        <div>
          <strong>bootcamp/Gostack</strong>
          <p>First reat app</p>
        </div>

        <FiChevronRight size={20}/>
        </a>
        <a href="teste" >
          <img src="https://avatars0.githubusercontent.com/u/28152962?s=460&v=4" alt="Piscinão"/>

        <div>
          <strong>bootcamp/Gostack</strong>
          <p>First reat app</p>
        </div>

        <FiChevronRight size={20}/>
        </a>
      </Repositories>

    </>
  );
};


export default Dashboard;
