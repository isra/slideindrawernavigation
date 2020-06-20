import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {CustomHeader} from '../shared';
import styles from '../styles/Common';

export const RegisterScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title={'Register Screen'} navigator={navigation} />
      <View style={styles.container}>
        <Text>Register Screen</Text>
      </View>
    </SafeAreaView>
  );
};
