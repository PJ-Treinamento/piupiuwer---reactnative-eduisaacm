import React, { useState } from 'react';

import { View, Text, Image, Modal, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import Logo from '../../assets/logo.png';
import LoginPopUp from '../../components/LoginPopUp';

import * as S from './style'

function LoginPage() {

    const [isModalVisible, setIsModalVisible] = useState(false);

    return(
        <S.Container>
            <S.Logo source={Logo}/>
            <S.TitleContainer>
                <S.Title1>Piu</S.Title1>
                <S.Title2>piwer</S.Title2>
            </S.TitleContainer>
            <S.FraseDeEfeito>Conectando passarinhos de todo o mundo</S.FraseDeEfeito>
            <S.ButtonContainer>
                <RectButton onPress={() => setIsModalVisible(true) }>
                    <S.ButtonEntrar>
                        <S.ButtonText1>Entrar</S.ButtonText1>
                    </S.ButtonEntrar>
                </RectButton>
                <RectButton>
                    <S.ButtonCadastrar>
                        <S.ButtonText2>Cadastrar</S.ButtonText2>
                    </S.ButtonCadastrar>
                </RectButton>
            </S.ButtonContainer>
            {isModalVisible && <S.Opacity></S.Opacity> }
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={isModalVisible}
                    onRequestClose={ () => {
                        setIsModalVisible(!isModalVisible)
                    }}            
                >
                    <S.PopUp style={styles.modal}>
                        <LoginPopUp onClose={() => setIsModalVisible(!isModalVisible)}/>
                    </S.PopUp>
                </Modal>
        </S.Container>
    )
}

const styles = StyleSheet.create({
    modal : {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    }
})

export default LoginPage;