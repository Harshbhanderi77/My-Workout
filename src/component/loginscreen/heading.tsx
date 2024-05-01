import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {color} from '../../style/color';
import {Images} from '../../assets/typimg/image';

export const Heading: React.FC = () => {
  return (
    <View
      style={{
        backgroundColor: 'transparent',
        // flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={Images.loginbackground}
        style={{
          width: '100%',
          height: '100%',
          flex: 1,
          resizeMode: 'cover',
          justifyContent: 'center',
          marginTop: 10,
        }}
      />
      <Text style={{color: color.black, fontSize: 26, fontWeight: '600'}}>
        Login screen
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});
