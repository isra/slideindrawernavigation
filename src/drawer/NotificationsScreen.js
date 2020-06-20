import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {CustomHeader} from '../shared';
import styles from '../styles/Common';

export const NotificationsScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title={'Notifications Screen'} navigator={navigation} />
      <View style={styles.container}>
        <Text>Notifications Screen</Text>
      </View>
    </SafeAreaView>
  );
};
