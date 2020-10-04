import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/github-background.svg';

// Styled component global para toda a aplicação deve ser importado no App.tsx

export default createGlobalStyle`
 *{
   margin: 0;
   padding: 0;
   outline: 0;
   box-sizing: border-box;
 }

 body {
   /* Importar a imagem via variavel com template string, não repetir 70% no topo */
   background: #F0F0F5 url(${githubBackground}) no-repeat 70% top;
   -webkit-font-smoothing: antialiased;

 }
/* Fonte global importada via index.html */
 body, input, button {
   font: 16px Robot, sans-serif;
 }

 /* Manipulando a div id =root do index.html */
 #root {
   /* Largura */
   max-width: 960px;
   /* Centralizar */
   margin: 0 auto;
   /* Quando diminuir o layout não encosta no canto aprimorado para o mobile */
   padding: 40px 20px;
 }
 /* Padrão ícone o cursos para clicar */
 button {
   cursor: pointer;
 }
`
