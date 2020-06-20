import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {IMAGE} from '../constants/Image';

export const CustomHeader = ({title, isHome, navigator}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 50,
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        {isHome ? (
          <TouchableOpacity onPress={() => navigator.openDrawer()}>
            <Image
              style={{
                width: 30,
                height: 30,
                resizeMode: 'contain',
                marginLeft: 5,
              }}
              source={IMAGE.ICON_MENU}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => navigator.goBack()}>
            <Image
              style={{
                width: 30,
                height: 30,
                resizeMode: 'contain',
                marginLeft: 5,
              }}
              source={IMAGE.ICON_MENU_BACK}
            />
            <Text>Back</Text>
          </TouchableOpacity>
        )}
      </View>
      <View
        style={{
          flex: 1.5,
          justifyContent: 'center',
        }}>
        <Text style={{textAlign: 'center'}}>{title}</Text>
      </View>
      <View style={{flex: 1}}>
        <Text />
      </View>
    </View>
  );
};
