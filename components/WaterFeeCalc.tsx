import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
  ToastAndroid,
} from 'react-native';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
// input last month
// input this month
// button
// logic

export default function WaterFeeCalc(props) {
  const [lastMonthVal, setLastMonthVal] = useState('0');
  const [thisMonthVal, setThisMonthVal] = useState('0');
  const [unitPrice, setUnitPrice] = useState('0');
  const [fee, setFee] = useState('0');
  const [modeTitle, setModeTitle] = useState('');

  useEffect(() => {
    if (props.mode == 'water') setModeTitle('nước');
    else if (props.mode == 'electricity') setModeTitle('điện');
    // if needed, add new mode here

    const fetchData = async () => {
      let itemTitle = '';
      if (props.mode == 'water') itemTitle = 'waterPrice';
      else if (props.mode == 'electricity') itemTitle = 'electricityPrice';

      const fetchedUnitPrice = await AsyncStorage.getItem(itemTitle);
      if (fetchedUnitPrice !== null) {
        // TODO refactor fetch code to an external common component
        setUnitPrice(fetchedUnitPrice);
        ToastAndroid.show('Nạp thành công đơn giá', 5000);
      }
    };

    fetchData();
  }, []);

  const calculateWaterFee = () => {
    const unitPriceVal = parseInt(unitPrice);
    if (!unitPriceVal) {
      ToastAndroid.show(
        'Đơn giá chưa được nạp thành công, vui lòng vào Cài đặt để thiết lập!',
        5000
      );
      return;
    }
    let calculatedFee =
      (parseInt(thisMonthVal) - parseInt(lastMonthVal)) * parseInt(unitPrice);
    setFee(calculatedFee.toString());
  };

  return (
    <View style={styles.waterCalc}>
      <Text>{props.title}</Text>
      {/* input last month */}
      <Text>Nhập số {modeTitle} tháng trước</Text>
      <TextInput
        style={styles.inputValue}
        onChangeText={setLastMonthVal}
        value={lastMonthVal}
        keyboardType='numeric'
      />
      {/* TODO last lang file for extension */}
      {/* input this month */}
      <Text>Nhập số {modeTitle} tháng này</Text>
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
    width: '80%',
    borderRadius: 5,
  },

  inputValue: {
    backgroundColor: 'green',
  },
});
