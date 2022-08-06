import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Drawer } from 'react-native-paper';

import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

export function DrawerContent(props) {
  useEffect(() => {
    console.log('hello');
    console.log({ props });
  });
  return (
    <View>
      <DrawerContentScrollView {...props}>
        <DrawerItem
          label='Setting'
          onPress={() => {
            props.navigation.navigate('setting');
          }}
        />
      </DrawerContentScrollView>
    </View>
  );
}
