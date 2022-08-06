import { StyleSheet, TouchableOpacity, TextInput, Button } from 'react-native';
import { useState } from 'react';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
// input last month
// input this month
// button
// logic

export default function WaterFeeCalc() {
  const [lastMonthVal, setLastMonthVal] = useState('0');
  const [thisMonthVal, setThisMonthVal] = useState('0');
  const [fee, setFee] = useState('0');
  const calculateWaterFee = () => {
    let calculatedFee =
      (parseInt(thisMonthVal) - parseInt(lastMonthVal)) * 20000;
    setFee(calculatedFee.toString());
  };
  return (
    <View style={styles.waterCalc}>
      <Text>Hello, start calculating water fee</Text>
      {/* input last month */}
      <Text>Nhập số nước tháng trước</Text>
      <TextInput
        style={styles.inputValue}
        onChangeText={setLastMonthVal}
        value={lastMonthVal}
        keyboardType='numeric'
      />
      {/* TODO last lang file for extension */}
      {/* input this month */}
      <Text>Nhập số nước tháng này</Text>
      <TextInput
        style={styles.inputValue}
        onChangeText={setThisMonthVal}
        value={thisMonthVal}
        keyboardType='numeric'
      />
      {/* util function for calculating the fee */}
      {/* submit button */}
      <Button onPress={calculateWaterFee} title='Tính tiền' color='#841584' />
      {/* dialog for result */}
      <TextInput
        style={styles.inputValue}
        value={fee}
        keyboardType='numeric'
        editable={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  waterCalc: {
    backgroundColor: 'yellow',
  },

  inputValue: {
    backgroundColor: 'green',
  },
});
