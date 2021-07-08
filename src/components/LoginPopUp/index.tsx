import React, {useState, useCallback, FormEvent} from "react";
import{ TextInput, Image, Button, View, Text, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';


import { useAuth } from "../../hooks/auth";

import Close from '../../assets/close.png';

import * as S from "./style";

interface LoginPopUpProps{
    onClose: () => void,
    id?: string
}



const LoginPopUp: React.FC<LoginPopUpProps> = ({  onClose, children }) => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = useState('');

    const [mensagemVazio, setMensagemVazio] = useState(false);

    const [mensagemErro, setMensagemErro] = useState(false);


    const { login, user } = useAuth();

    const doLogin = useCallback(async () => {
        {(email.length == 0 || password.length == 0) && setMensagemVazio(true)}
        {(email.length > 0 && password.length > 0) && setMensagemVazio(false)}
        console.log("oi");
        login(email, password);
        {(!user) && setMensagemErro(true)}


    }, [login, email, password]);


    return(
        <View>
            <S.Container>
                <RectButton onPress={onClose}>
                    <S.Fechar source={Close} />
                </RectButton>
                <S.Titulo>Fazer o login</S.Titulo>
                {mensagemVazio && <S.Erro>Todos os campos devem estar preenchidos.</S.Erro>}
                {mensagemErro && <S.Erro>E-mail ou senha incorreto.</S.Erro>}
                <S.Form>
                    <S.InputStyle>
                        <S.InputLabel>E-mail:</S.InputLabel>
                        <TextInput 
                            style={styles.input}
                            value={email}
                            onChangeText={text => setEmail(text)}
                            // selectionColor="#0000"                
                        />
                    </S.InputStyle>
                    <S.InputStyle>
                        <S.InputLabel>Senha:</S.InputLabel>
                        <TextInput
                            style={styles.input}
                            secureTextEntry={true}
                            value={password}
                            onChangeText={(password) => setPassword(password)}
                            autoFocus={true}              
                        />
                    </S.InputStyle>
                </S.Form>
                <RectButton onPress={doLogin}>
                    <S.Botao>
                        <S.TextoBotao>Entrar</S.TextoBotao>
                    </S.Botao>
                </RectButton>
            </S.Container>
        </View>
    );

}

const styles = StyleSheet.create({
    input: {
        paddingHorizontal: 10,
        width: 300,
        height: 50,
        marginTop: 8,
        borderRadius: 8,
        backgroundColor: "#EDEFF2",
    }

})

export default LoginPopUp;