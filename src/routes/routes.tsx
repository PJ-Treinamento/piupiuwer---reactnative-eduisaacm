import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppStack from './AppStack';
import AuthStack from './AuthStack';

import { useAuth } from '../hooks/auth';

export const Routes = () => {
    const { token } = useAuth();

    console.log(token);

    console.log(!!token);
    

    return(
        <NavigationContainer>
            {!!token ? <AppStack/> : <AuthStack/>}
        </NavigationContainer>
    )
}
