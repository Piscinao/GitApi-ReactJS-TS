import React from 'react';
import { BrowserRouter } from 'react-router-dom';


import GlobalStyle from './styles/global';
import Routes from './routes';

const App: React.FC = () =>
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </>
export default App;


//estilização da aplicação de uma forma não global
//cehga um momento q vai ser alterado ai tem 4 coisas mudando o mesmo css
// taca um !important no final apra colocar a regra sobre as outras
// StyledComponents isola o css em components
