import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {CustomHeader} from '../shared';
import styles from '../styles/Common';

export const SettingsScreenDetail = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title={'Settings Screen'} navigator={navigation} />
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Text>Back to Settings Screen</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
