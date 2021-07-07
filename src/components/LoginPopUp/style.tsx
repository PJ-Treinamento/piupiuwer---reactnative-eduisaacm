import styled from 'styled-components/native';

export const Container = styled.View`
height: 100%;
    align-items: center;
    justify-content: space-between;
`;

export const Fechar = styled.Image`
    width: 20;
    height: 20;
`

export const InputStyle = styled.View`
    align-items: center;
`;

export const InputLabel = styled.Text`
    font-size: 20;
`

export const Form = styled.View `
    height: 45%;
    justify-content: space-around;
    margin: 35px 0;
`;

export const Botao = styled.View `
    align-items: center;
    justify-content: center;
    margin-top: 10;
    width: 300;
    height: 90;
    border-radius: 8;
    box-shadow: 2px 3px 6px #00000029;
    font-size: 1;
    background-color: #2D6A4F;
    color: white;
`;

export const TextoBotao = styled.Text`
    font-size: 25;
    color: white;
`

export const Erro = styled.Text`
    color: red;
    font-size: 15;
`;

export const Titulo = styled.Text`
    font-size: 35;
`;