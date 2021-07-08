import React from "react";

import * as S from "./style";

import Logo from '../../assets/logo.png';
import Menu from '../../assets/menu.png';
import { RectButton } from "react-native-gesture-handler";

const Header = () => {
    return (
        <S.HeaderStyle>
            <RectButton>
                <S.Logo source={ Menu } />
            </RectButton>
            <S.Logo source={ Logo } />
        </S.HeaderStyle>
    )
}

export default Header;