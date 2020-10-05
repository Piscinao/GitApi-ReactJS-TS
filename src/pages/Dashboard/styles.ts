import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

// Template literals -- template string
// css do styled vale tanto para o reactjs e para o native
export const Title = styled.h1`
  font-size: 48px;
  color: #3A3A3A;

  /* Largura máxima quebra o texto */
  max-width: 450px;
  /* Leve distanciamento do texto */
  line-height: 56px;

  /* Espaçamento da parte de cima */
  margin-top: 80px;


  `;

// Style do form
export const Form = styled.form<FormProps>`
  /* Distanciamento do texto */
  margin-top: 40px;
  /* Tamanho máximo do form */
  max-width: 700px;

  /* Um ao lado do outro */
  display: flex;

  /* Fica flexível e ocupa o máximo do espaço possível */
  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3A3A3A;
    border: 2px solid #FFF;
    border-right: 0;

    ${(props) => props.hasError && css `
      border-color: #c53030;
    `}

    /* Alteração da cor do placeholder do input */
    &::placeholder {
      color: #A8A8b3;
    }
  }

  /* Button style */
  button {
  /* Tamanho do botão */
    width: 210px;
    background: #04D361;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #FFF;
    font-weight: bold;
    transition: background-color 0.2s;

  /* Sempre que for colocar js no css coloca template string */
  /* Usa a biblioteca polished para manipular a densidade da cor sem precisar do código  */
  &:hover {
    background: ${shade(0.2, '#04D361')};
    }
}

`;


export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  /* a + a {
      margin-top: 16px;
  } */

  a {
    background: #FFF;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    /* delay para ativação do hover */
    transition: transform 0.2s;

    /* distanciamento dos elementos a depois do primeiro */
    & + a {
      margin-top: 16px;
    }
    /* joga um pouco para direita */
    &:hover {
      transform: translateX(10px);
    }


    img {
      /* Largura */
      width: 64px;
      /* Altura */
      height: 64px;
      /* Imagem arredondada */
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3D3D4D;
      }

      p {
        font-size: 18px;
        color: #A8A8B3;
        margin-top: 4px;

      }
    }

    /* Manipulando o ícone  */
    svg {
      /* todo espaço disponível da esquerda */
      margin-left: auto;
      color: #cbcbd6;
    }





  }

`;


export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 30px;
`;

