import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MenuStack } from './MenuStack.navigation';
import { MenuDrawer } from './MenuDrawer.navigation'
import { MenuTabs } from './MenuBottomTab.navigation';
import { MessageNavigation } from './message.navigation';

export default function Navigation() {
    return (
        <NavigationContainer>
            <MessageNavigation />     {/* Aqui você coloca o menu que desejar  */}
        </NavigationContainer>
    );
}