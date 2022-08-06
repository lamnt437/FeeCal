import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './screens/HomeScreen';
import SimpleCalculatorScreen from './screens/SimpleCalculatorScreen';
import { DrawerContent } from './components/DrawerContent';
import SettingScreen from './screens/SettingScreen';

const Drawer = createDrawerNavigator();

export default function App2() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Trang chủ' component={HomeScreen} />
        <Drawer.Screen name='Máy tính' component={SimpleCalculatorScreen} />
        <Drawer.Screen name='Cài đặt' component={SettingScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

registerRootComponent(App2);
