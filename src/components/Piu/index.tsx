import React, { useCallback, useEffect } from "react";

import { View, Text, StyleSheet} from 'react-native';

import Like from '../../assets/like.png';
import SemLike from "../../assets/passion.png";
import SemFavorito from "../../assets/estrela.png";
import ComFavorito from "../../assets/star.png";
import Lixeira from "../../assets/lixeira.png";

import * as I from "../../models/index";
import * as S from './styles';

import { useState } from "react";
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';
import { RectButton } from "react-native-gesture-handler";

interface PiuProps {
    piu: I.Piu,
    pius: I.Piu[],
}

const Piu: React.FC<PiuProps> = ( {piu, pius} ) => {

    const [numeroLikes, setNumeroLikes] = useState(piu.likes.length);

    const [like, setLike] = useState(SemLike);

    const { user } = useAuth();

    useEffect(() => {
        const LikeSemLike = () => {
            piu.likes.map((users) => {
                if (user.id == users.id) {
                    setLike(Like);
                } else {
                    setLike(SemLike)
                }
            })
        }
        LikeSemLike();
    }, [])


    const darLike = useCallback(() => {
        pius.map((piuDados: I.Piu) => {
            if (piu.id === piuDados.id) {
                const darLikeMesmo = async () => {
                    const response = await api.post('/pius/like', { piu_id: piuDados.id })
                    const operation: string = response.data.operation
            
                    if (operation === 'like') {
                        setNumeroLikes(numeroLikes + 1);
                        setLike(Like);
                        console.log(operation)
                    }
                    else {
                        setNumeroLikes(numeroLikes - 1);
                        setLike(SemLike);
                        console.log(operation)

                    }}
                darLikeMesmo()

            }
        })
    }, [numeroLikes])


    const deletar = useCallback( () => {    
        pius.map((piuDados: I.Piu) => {
          if (piu.id === piuDados.id) {
            const deletePiu = async () => {
              await api.delete('/pius', { data: {piu_id: piuDados.id }})
              window.location.reload();
            }
            return deletePiu()
          }
        })
    }, [])

    const styles = StyleSheet.create({
        elevacao: {
            shadowOffset: {
                width: 0,
                height: 2,                
            },
            shadowOpacity: 0.1,
            shadowRadius: 2,
        }
    })    

    return(
        <S.piuContent
            style={styles.elevacao}
        >
            <S.PerfilTexto>
                <S.Perfil>
                    <S.ImgPerfil source={{uri: piu.user.photo}}/>
                </S.Perfil>
                <S.UserTexto>
                    <S.UserName>
                        <S.Name>{piu.user.first_name}</S.Name>
                        <Text>@{piu.user.username}</Text>
                    </S.UserName>
                    <S.TextContainer>
                        <S.Texto>{piu.text}</S.Texto>
                    </S.TextContainer>
                </S.UserTexto>
            </S.PerfilTexto>    
            <S.Interacao>
                <RectButton onPress={darLike}>
                    <S.imgInteracao className="like" source={like} alt="Curtida" />
                    <Text>{numeroLikes}</Text>
                </RectButton>
                <S.imgInteracao source={SemFavorito} alt="Estrela" />
                { (user.id === piu.user.id) && (
                    <RectButton onPress={deletar}>
                        <S.imgInteracao source={Lixeira}/>
                    </RectButton>                    
                    )
                }
            </S.Interacao>
        </S.piuContent>
    )
}

export default Piu;