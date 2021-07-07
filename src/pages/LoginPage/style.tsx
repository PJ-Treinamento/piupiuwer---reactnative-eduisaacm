import React from 'react';
import styled from 'styled-components/native';




export const Container = styled.View`
    display: flex;
    background-color: #d8f3dc;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`

export const Logo = styled.Image`
    width: 100;
    height: 120;
`

export const TitleContainer = styled.View`
    flex-direction: row;
    margin-bottom: 10;
`
export const Title1 = styled.Text`
    font-size: 100;
    text-shadow: 2px 2px 3px #00000044;
    color: black;
`

export const Title2 = styled.Text`
    font-size: 100;
    text-shadow: 2px 2px 3px #00000044;
    color: #2d6a4f;
`

export const FraseDeEfeito = styled.Text`
    font-size: 15;
    margin-bottom: 40;
`

export const ButtonContainer = styled.View`
    justify-content: space-between;
    height: 210;
    margin-top: 50;
`

export const ButtonEntrar = styled.View`
    width: 300;
    height: 80;
    border-radius: 8;
    box-shadow: 2px 3px 6px #00000029;
    background-color: #2D6A4F;
    align-items: center;
    justify-content: center;
`

export const ButtonCadastrar = styled.View`
    width: 300;
    height: 80;
    border-radius: 8px;
    box-shadow: 2px 3px 6px #00000029;
    border: 2px solid #2D6A4F ;
    background-color: white;
    align-items: center;
    justify-content: center;
`

export const ButtonText1 = styled.Text`
    font-size: 25;
    color: white;
`

export const ButtonText2 = styled.Text`
    font-size: 25;    
`

export const PopUp = styled.View`
    background-color: white;
    margin: 20px;
    border-radius: 20;
    padding: 35px;
    align-items: center;
    width: 90%;
    height: 70%;
    position: absolute;
    top: 10%
`

export const Opacity =styled.View`
    position: absolute;
    background-color: #00000047;
    height: 1000;
    width: 1000;
`