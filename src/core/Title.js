import React from 'react';
import {Text} from 'react-native';

export const Title = props => {
  return (
    <Text {...props} style={[{fontSize: 20}, props.style]}>
      {props.content}
    </Text>
  );
};
