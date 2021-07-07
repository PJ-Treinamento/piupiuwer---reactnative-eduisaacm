import React from "react";

import * as S from "./style";

import Logo from '../../assets/logo.png';

const Header = () => {
    return (
        <S.HeaderStyle>
            <S.Logo source={ Logo }/>
            <S.LinksContainer>
                <S.Links className="black">Meu Perfil</S.Links>
                <S.Links className="white">Sair</S.Links>
            </S.LinksContainer>
        </S.HeaderStyle>
    )
}

export default Header;