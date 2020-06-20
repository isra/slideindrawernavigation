import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {CustomHeader} from '../shared';
import styles from '../styles/Common';
import {Title} from '../core';

export const SettingsScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader
        title={'Settings Screen'}
        isHome={true}
        navigator={navigation}
      />
      <View style={styles.container}>
        <Title content="Settings Screen" style={{fontSize: 30}} />
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => {
            navigation.navigate('SettingsDetail');
          }}>
          <Title content="Go to Settings Detail" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
