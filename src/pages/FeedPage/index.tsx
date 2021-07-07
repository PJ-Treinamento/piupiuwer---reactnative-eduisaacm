import React, { useEffect } from "react";
import { View, Text } from "react-native";

import axios from "axios";

import Header from "../../components/Header";
// import NavBar from "../../components/navBar/index";
// import Piu from "../../components/piu";
// import PostarPiu from "../../components/postarPiu";
// import Input from "../../components/input";

import api from "../../services/api";

import * as I from "../../models/index";
// import * as S from "./style";
import { useState } from "react";



function FeedPage() {

    const [pius, setPius] = useState([])

    const [filtro, setFiltro] = useState('')

    const [piusFiltrados, setPiusFiltrados] = useState(pius)

    useEffect(() => {
        setPiusFiltrados(pius.filter((piu: I.Piu) => piu.user.username.startsWith(filtro)))
    }, [filtro])

    useEffect(() => {
        const loadPius = async () => {
          const response = await api.get('/pius');
          setPius(response.data);
        }
        pius.forEach(element => {
        });
        loadPius()
    }, []);    
        

    return(

        <View>
            <Header />
        </View>
        // <div>
        //     <Header 
        //         direcao="Meu Perfil"
        //     />
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
