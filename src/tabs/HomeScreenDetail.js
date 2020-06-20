import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {CustomHeader} from '../shared';
import styles from '../styles/Common';

export const HomeScreenDetail = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title={'Home Detail Screen'} navigator={navigation} />
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Text>Back to Home Screen</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
