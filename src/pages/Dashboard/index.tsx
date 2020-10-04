import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {

  // estado do input
  const [newRepo, setNewRepo] = useState('');

  // armazenar o repositorio
  // começa um valor de array vazio
  // valor do estado, toda vez que quiser mudar o validator, e estado vazio
  // sempre que é criado um estado sem valor padrão é preciso tipar no TS
  const [repositories, setRepositories] = useState<Repository[]>([]);

  // adição de um novo repositório
  // consumir a api do git
  // salvar o novo no estado            HTMlFormElemt disponivel de forma global representa o elemento html do form e o formevent representa o evento de submit do form
  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    // previne o comportamento padrão do form do html
    event.preventDefault();

    // texto que ta digitado dentro no input
    const response = await api.get<Repository>(`repos/${newRepo}`);

    const repository = response.data;

    setRepositories([...repositories, repository]);
    setNewRepo('');
    // console.log(response.data);
  }
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />

      <Title>Explore repositórios no Github</Title>
      {/* Form e repositories são componentes do style.ts */}
      <Form onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        {repositories.map(repository => (
          <a key={repository.full_name} href="teste" >
            <img src={repository.owner.avatar_url} alt={repository.owner.login} />

            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}

      </Repositories>

    </>
  );
};


export default Dashboard;
