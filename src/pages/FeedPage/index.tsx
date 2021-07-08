import React, { useEffect } from "react";
import { View, Text, Image, TextInput, ScrollView, StyleSheet } from "react-native";
import { RectButton } from 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";

import axios from "axios";

import Header from "../../components/Header";
import { createDrawerNavigator } from '@react-navigation/drawer';
// import NavBar from "../../components/navBar/index";
// import Piu from "../../components/piu";
// import PostarPiu from "../../components/postarPiu";
// import Input from "../../components/input";

import api from "../../services/api";

import { useState } from "react";  


import * as I from "../../models/index";

import NavBar from "../../components/NavBar";

import * as S from "./style";
import Piu from "../../components/Piu";
import PostarPiu from "../../components/PostarPiu";

function FeedPage() {

    const Drawer = createDrawerNavigator();   

    const [pius, setPius] = useState([])

    const [filtro, setFiltro] = useState('')

    const [piusFiltrados, setPiusFiltrados] = useState(pius)

    const [buscar, setBuscar] = useState(false)

    const [postar, setPostar] = useState(false)

    const [filtroTexto, setFiltroTexto] = useState('')

    useEffect(() => {
        if (piusFiltrados) {
            setPiusFiltrados(pius.filter((piu: I.Piu) => piu.user.username.startsWith(filtro)))
        }
    }, [filtroTexto])

    useEffect(() => {
        const loadPius = async () => {
          const response = await api.get('/pius');
          setPius(response.data);
        }
        pius.forEach(element => {
        });
        loadPius()
    }, []); 

    const styles = StyleSheet.create({
        filtro: {
            padding: 4,
            justifyContent: "flex-start",
            borderWidth: 1,
            borderRadius: 15,
        }
    })

    function FeedScreen({ navigation }) {
        return (
            <View>
                <Header />
                <ScrollView
                    automaticallyAdjustContentInsets
                >
                    <S.Botoes>
                        <S.Botao>
                            <RectButton onPress={() => {
                                setBuscar(true)
                                setPostar(false)
                            }}>
                                <S.TextoBotao>Buscar</S.TextoBotao>
                            </RectButton>
                        </S.Botao>
                        <S.Botao>
                            <RectButton onPress={() => {
                                setPostar(true)
                                setBuscar(false)
                            }}>
                                <S.TextoBotao>Postar</S.TextoBotao>
                            </RectButton>
                        </S.Botao>
                    </S.Botoes>
                    {buscar && (
                        <S.Filtro>
                            <TextInput
                                    style={styles.filtro}
                                    placeholder="Busque o piu de seus colegas!"
                                    value={filtro}
                                    onChangeText={text => setFiltro(filtro)}
                            />
                            <RectButton onPress={() => setFiltroTexto(filtro)}>
                                <S.Botao>
                                    <S.TextoBotao>Filtrar</S.TextoBotao>
                                </S.Botao>
                            </RectButton>
                        </S.Filtro>
                    )}
                    {postar && <PostarPiu />}
                    <View>                     
                        {piusFiltrados.map((piu: I.Piu) => {
                            return (<Piu key={piu.id} piu={piu} pius={pius}/>)
                        })}
                    </View>
                </ScrollView>
                
            </View>
        )
    }   

    return(
        <NavigationContainer independent={true}>
            <Drawer.Navigator 
                initialRouteName="Feed"
                drawerStyle={{
                    backgroundColor: '#B7E4C7',
                }}
                drawerContent={(props) => <NavBar {...props}/>}            
            >
                <Drawer.Screen name="Feed" component={FeedScreen} />
                <Drawer.Screen name="Meu perfil" component={NavBar} />
            </Drawer.Navigator>
        </NavigationContainer>

        // <div>
        //     <S.Main>
        //         <NavBar />
        //         <S.Conteudo>
        //             <PostarPiu />
        //             <S.BarraDePesquisa>
        //                 <div>
        //                     <Input 
        //                         type="text"
        //                         label="Pesquise os pius!"
        //                         name="Pesquisa de usuários"
        //                         onChange={event => setFiltro(event.target.value)} 
        //                     />
        //                 </div>
        //             </S.BarraDePesquisa>
                    
        //             {piusFiltrados.map((piu: I.Piu) => {
        //                 return (<Piu key={piu.id} piu={piu} pius={pius}/>)
        //             })}
        //         </S.Conteudo>
        //     </S.Main>
        // </div>
    );
}

export default FeedPage;
