import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import WaterFeeCalc from '../components/WaterFeeCalc';

export default function SimpleCalculatorScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simple Calculator</Text>
      <WaterFeeCalc />
      <EditScreenInfo path='/screens/SimpleCalculatorScreen.tsx' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
