import React from 'react';
import {View} from 'react-native';
import {Camera} from './Camera';
import {Location} from './Location';
import {color} from '../../style/color';

export const Bottommenu: React.FC = () => {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        // marginBottom: 10,
        backgroundColor: color.gray1,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        paddingVertical: 10,
      }}>
      <Location />
      <Camera />
    </View>
  );
};
