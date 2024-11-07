import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'red' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'}
`;

function Test() {
  return (
    <>
      <Botao fontSize='18px' principal={true}>Clique Aqui</Botao>
      <Botao fontSize='14px' principal={false}>Cancelar</Botao>
    </>
  );
}

export default Test;
