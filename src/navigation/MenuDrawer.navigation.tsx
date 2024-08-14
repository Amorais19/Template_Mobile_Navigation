import { DrawerNavigationProp, createDrawerNavigator } from '@react-navigation/drawer';
import { Perfil, Mensagem } from '../screens';
import React from 'react';

type MenuDrawerParam = {
    Perfil: undefined
    Mensagem: undefined
}
type MenuScreenNavigation = DrawerNavigationProp<MenuDrawerParam, 'Perfil'>
export type MenuDrawerTypes = {
    navigation: MenuScreenNavigation
}

export function MenuDrawer() {
    const Drawer = createDrawerNavigator<MenuDrawerParam>();
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Perfil' component={Perfil} />
            <Drawer.Screen name='Mensagem' component={Mensagem} />
        </Drawer.Navigator>
    );
}