import React from 'react';
import { RectButton } from 'react-native-gesture-handler';

import Close from '../../assets/close.png';

import * as S from './style';

function NavBar ({ navigation }) {
    return (
        <S.NavBarContainer>
            <RectButton onPress={() => navigation.toggleDrawer()}>
                <S.Close source={Close} />
            </RectButton>
            <RectButton>
                <S.Button>
                    <S.TextButton>Amigos</S.TextButton>
                </S.Button>
            </RectButton>
            <RectButton>
                <S.Button>
                    <S.TextButton>Mensagens</S.TextButton>
                </S.Button>
            </RectButton>                
            <RectButton>
                <S.Button>
                    <S.TextButton>Meu Perfil</S.TextButton>
                </S.Button>  
            </RectButton>                
            <RectButton>
                <S.Button>
                    <S.TextButton>Configurações</S.TextButton>
                </S.Button>  
            </RectButton>
            <RectButton>
                <S.Button>
                    <S.TextButton>Sair</S.TextButton>
                </S.Button>  
            </RectButton>
        </S.NavBarContainer>
    )
}

export default NavBar;