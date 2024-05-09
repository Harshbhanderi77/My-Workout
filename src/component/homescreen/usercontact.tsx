import React from 'react';
import {Image, Pressable, View} from 'react-native';
import {Images} from '../../assets/typimg/image';
import {color} from '../../style/color';
import {navigate, Routes} from '../../screennavigation/navigation';

export const Usercontact: React.FC = () => {
  return (
    <View
      style={{
        margin: 10,
      }}>
      <Pressable
        onPress={() => navigate({screenName: Routes.Contect})}
        style={{
          backgroundColor: color.blue,
          borderRadius: 20,
          padding: 6,
        }}>
        <Image
          source={Images.user}
          style={{
            width: 24,
            height: 24,
          }}
        />
      </Pressable>
    </View>
  );
};
