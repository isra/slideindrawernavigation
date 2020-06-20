import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import {IMAGE} from '../constants/Image';

export const CustomDrawerContent = props => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{marginLeft: 5}}>
        <View
          style={{height: 150, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={IMAGE.ICON_USER}
            style={{width: 120, height: 120, borderRadius: 60}}
            resizeMode="contain"
          />
        </View>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => props.navigation.navigate('HomeTab')}>
          <Text>Menu tab</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => props.navigation.navigate('NotificationsTab')}>
          <Text>Notifications</Text>
        </TouchableOpacity>
      </ScrollView>
      <TouchableOpacity
        style={{marginLeft: 5, marginTop: 20}}
        onPress={() => {
          props.navigation.navigate('Login');
        }}>
        <Text>Log Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
