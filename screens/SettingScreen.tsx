import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, TextInput, Button, ToastAndroid } from 'react-native';
import { useState } from 'react';

export default function SettingScreen() {
  const [waterPrice, setWaterPrice] = useState('0');
  const [electricityPrice, setElectricityPrice] = useState('0');
  // TODO this could be accessed from sidebar
  // input value
  // button to save value
  // get initial value

  const onSubmit = async () => {
    try {
      AsyncStorage.setItem('electricityPrice', electricityPrice);
      AsyncStorage.setItem('waterPrice', waterPrice);
      ToastAndroid.show('Lưu giá điện nước thành công!', 5000);
    } catch (error) {
      console.log(error);
    }
  };

  const retrieveConfig = async () => {
    try {
      const retrievedWaterPrice = await AsyncStorage.getItem('waterPrice');
      const retrievedElectricityPrice = await AsyncStorage.getItem(
        'electricityPrice'
      );
      if (retrievedWaterPrice !== null) {
        setWaterPrice(retrievedWaterPrice);
      } else {
        ToastAndroid.show('Lấy giá nước mặc định là 6.700đ/m3', 5000);
        setWaterPrice('6700');
      }

      if (retrievedElectricityPrice !== null) {
        setElectricityPrice(retrievedElectricityPrice);
      } else {
        ToastAndroid.show('Lấy giá điện mặc định là 2.927đ/kWh', 5000);
        setElectricityPrice('2927');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeWater = (value: string) => {
    setWaterPrice(value);
  };

  const onChangeElectricity = (value: string) => {
    setElectricityPrice(value);
  };

  return (
    <View>
      <Text>Enter something</Text>
      <TextInput
        keyboardType='numeric'
        value={waterPrice.toString()}
        onChangeText={onChangeWater}
      />
      <TextInput
        keyboardType='numeric'
        value={electricityPrice.toString()}
        onChangeText={onChangeElectricity}
      />
      <Button onPress={onSubmit} title='Lưu' />
      <Button onPress={retrieveConfig} title='Load' />
      {/* input  */}
      {/* button, but where to find the correct implementation of this? */}
      {/* how to add this screen to the navigation sidebar */}
      {/* i will watch the video then note down the steps, then try to reproduce it myself */}
      {/* but first let's finish the remaining tasks? */}
    </View>
  );
}
