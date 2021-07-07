import React from "react";

import { createStackNavigator } from '@react-navigation/stack';

import FeedPage from "../pages/FeedPage";

const {Navigator, Screen} = createStackNavigator();

function AppStack() {
    return(
        <Navigator 
            screenOptions={{headerShown:false}}
        >
            <Screen name="Feed" component={FeedPage}/>
        </Navigator>
    )
}

export default AppStack;
