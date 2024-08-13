import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import { Perfil, Mensagem } from '../screens'
import React from 'react'

type MenuStackParam = {
    Perfil: undefined
    Mensagem: undefined
}
type MenuScreenNavigation = StackNavigationProp<MenuStackParam, 'Perfil'>
export type MenuStackTypes = {
    navigation: MenuScreenNavigation
}

export function MenuStack() {
    const Stack = createStackNavigator<MenuStackParam>();
    return (
        <Stack.Navigator screenOptions={{ animationEnabled: true, gestureEnabled: true
        }}>
            <Stack.Screen name='Perfil' component={Perfil} />
            <Stack.Screen name='Mensagem' component={Mensagem} />
        </Stack.Navigator>
    );
}