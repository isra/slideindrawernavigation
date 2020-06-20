import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {CustomHeader} from '../shared';
import styles from '../styles/Common';
import {Title} from '../core';

export const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader
        title={'Home Screen'}
        isHome={true}
        navigator={navigation}
      />
      <View style={styles.container}>
        <Title content="Home Screen" style={{fontSize: 30}} />
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => {
            navigation.navigate('HomeDetail');
          }}>
          <Title content="Go to Home Detail" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
