import React from "react";

import { createStackNavigator } from '@react-navigation/stack';

import LoginPage from '../pages/LoginPage';

const {Navigator, Screen} = createStackNavigator();

function AuthStack() {
    return(
        <Navigator 
            screenOptions={{headerShown:false}}
        >
            <Screen name="Login" component={LoginPage}/>
        </Navigator>
    )
}

export default AuthStack;