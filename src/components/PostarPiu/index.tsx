import React, { useState, useEffect } from "react";

import {TextInput, View, Text, StyleSheet} from 'react-native';


import { useAuth } from '../../hooks/auth';

import api from '../../services/api';

import * as I from "../../models/index";
import * as S from "./style";

import ImgPadrao from "../../assets/imgicone.png";
import AudioPadrao from "../../assets/audioIcone.png";
import { RectButton } from "react-native-gesture-handler";


const PostarPiu: React.FC = () => {
    const { user } = useAuth();

    const [mensagemErro, setMensagemErro] = useState(false);

    const [contador, setContador] = useState(0);

    const [piuTexto, setPiuTexto] = useState("");




    useEffect(()=>{
        
        setContador(piuTexto.length);

        const Validacao = () => {
            if (piuTexto.length > 140) {
            }

            if (piuTexto.length > 0 && piuTexto.length < 140) {
                setMensagemErro(false)
            }
        }
        
        Validacao();
    },[piuTexto.length])

    const postarPiu = async () => {
        if (piuTexto.length == 0 || piuTexto.length > 140) {
            setMensagemErro(true)
        } else {
            setMensagemErro(false)
            await api.post('/pius', { text: piuTexto })
            window.location.reload();
        }
    }

    const styles = StyleSheet.create({

        inputContainer: {
            margin: 10,
        },
        
        input: {
            height: 150,
            width: 350,
            justifyContent: "flex-start",
            borderColor: "black",
            borderWidth: 1,
            borderRadius: 15,
            padding: 5,
        }
    })
    
    return(
        <S.NovoPiuContainer>
            <Text>Poste um piu!</Text>
            {mensagemErro && <S.Erro >Número de caracteres inválidos.</S.Erro>}
            <S.Post>
                <TextInput
                    style={styles.input} 
                    multiline={true}
                    value={piuTexto}
                    numberOfLines={10} 
                    placeholder="Dê um piu!" 
                    onChangeText={text => setPiuTexto(text)}>
                </TextInput>
                <Text>
                    {contador}/140
                </Text>


            </S.Post>
            <S.IconesBotao>
                <S.Icones>
                    <S.Icone source={ImgPadrao}/>
                    <S.Icone source={AudioPadrao} alt="Upload de Áudio" />
                </S.Icones>
                <S.Botao>
                    <RectButton onPress={postarPiu}>
                        <S.TextoBotao>Postar</S.TextoBotao>
                    </RectButton>
                </S.Botao>
            </S.IconesBotao>
        </S.NovoPiuContainer>
    )
}

export default PostarPiu;