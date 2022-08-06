import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import SimpleCalculatorScreen from './screens/SimpleCalculatorScreen';
import { DrawerContent } from './components/DrawerContent';

const Drawer = createDrawerNavigator();

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}
          >
            <Drawer.Screen name='Home' component={SimpleCalculatorScreen} />
            {/* <Navigation colorScheme={colorScheme} /> */}
          </Drawer.Navigator>
        </NavigationContainer>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
