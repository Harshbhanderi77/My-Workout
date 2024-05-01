import React from 'react';
import {Image, View} from 'react-native';
import {Images} from '../../assets/typimg/image';
import {color} from '../../style/color';

export const Drowemenu: React.FC = () => {
  return (
    <View
      style={{
        margin: 10,
      }}>
      <Image
        source={Images.menu}
        style={{
          width: 30,
          height: 30,
          backgroundColor: color.blue,
          borderRadius: 6,
        }}
      />
    </View>
  );
};
