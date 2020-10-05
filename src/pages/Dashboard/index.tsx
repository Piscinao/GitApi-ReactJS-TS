import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories, Error } from './styles';

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

  const [inputError, setInputError] = useState('');

  // armazenar o repositorio
  // começa um valor de array vazio
  // valor do estado, toda vez que quiser mudar o validator, e estado vazio
  // sempre que é criado um estado sem valor padrão é preciso tipar no TS
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem(
      '@GithubExplorer:repositories',
    );


    // Converte novamente para transformar em um []
    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }

    return [];
  });



  // Dispara uma função como primeiro parametro sempre que uma variavel mudar que é enviado como segundo parametro(array)
  // sempre que que tiver uma mudança na variavel repositories irá salvar no localStorage
  useEffect(() => {
    localStorage.setItem('@GithubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  // adição de um novo repositório
  // consumir a api do git
  // salvar o novo no estado            HTMlFormElemt disponivel de forma global representa o elemento html do form e o formevent representa o evento de submit do form
  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>):
    Promise<void> {
    // previne o comportamento padrão do form do html
    event.preventDefault();
    if (!newRepo) {
      setInputError('Digite o autor/nome do repositório!');
      return;
    }

    try {

      // texto que ta digitado dentro no input
      const response = await api.get<Repository>(`repos/${newRepo}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);
      // Limpa campo
      setNewRepo('');
      // Limpa erro
      setInputError('');
      // console.log(response.data);


    } catch (err) {
      setInputError('Erro na busca por esse repositório');
    }

  }
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />

      <Title>Explore repositórios no Github</Title>
      {/* Form e repositories são componentes do style.ts */}
      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {/* If sem else do react */}
      { inputError && <Error>{inputError}</Error>}

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
