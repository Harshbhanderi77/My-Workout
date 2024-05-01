import React from 'react';
import {color} from '../../style/color';
import {Image, Pressable, View} from 'react-native';
import {goBack} from '../../screennavigation/navigation';
import {Images} from '../../assets/typimg/image';

export const Header: React.FC = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: color.gray1,
        padding: 10,
      }}>
      <Pressable onPress={() => goBack()}>
        <Image
          source={Images.leftarrow}
          style={{
            width: 30,
            height: 30,
            backgroundColor: color.blue,
            borderRadius: 6,
          }}
        />
      </Pressable>
    </View>
  );
};
