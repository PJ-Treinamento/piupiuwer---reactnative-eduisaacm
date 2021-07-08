import styled from 'styled-components/native';

export const Botoes = styled.View`
    flex-direction: row;
    margin-top: 20px;
    justify-content: space-around;
    align-items: center;
`



export const Botao = styled.View`
    align-items: center;
    justify-content: center;
    width: 100;
    height: 30;
    border-radius: 8;
    box-shadow: 2px 3px 6px #00000029;
    background-color: #2D6A4F;
    color: white;
    margin-bottom: 10px;
`

export const TextoBotao = styled.Text`
    font-size: 15;
    color: white;
`

export const Filtro = styled.View`
    background-color: #cdffe2;
    border: black;
    border-radius: 20px;
    align-items: center;
    margin: 10px;
    padding-top: 5px;
`