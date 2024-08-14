import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { MessageNavigation } from './message.navigation'
import { Perfil, Mensagem } from '../screens';
import { Entypo, Feather } from '@expo/vector-icons';
import React from 'react'

type MenuTabParam = {
    Perfil: undefined
    Mensagem: undefined
}
type MenuScreenNavigation = BottomTabNavigationProp<MenuTabParam, 'Perfil'>
export type MenuTabTypes = {
    navigation: MenuScreenNavigation
}

export function MenuTabs() {
    const Tab = createBottomTabNavigator<MenuTabParam>();
    return (
        <Tab.Navigator>
            <Tab.Screen name='Perfil' component={Perfil} options={{
                tabBarIcon: () => ( <Entypo name='slideshare' size={24} color='black' />
                )
            }} />
            <Tab.Screen name='Mensagem' component={MessageNavigation} options={{
                tabBarIcon: () => ( <Feather name='sliders' size={24} color='black' />
                )
            }} />
        </Tab.Navigator>
    )
}