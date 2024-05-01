import React from 'react';
import {Text, View} from 'react-native';
import {Usercontact} from './usercontact';
import {color} from '../../style/color';
import {Notifications} from './Notifications';

export const Mainheader: React.FC = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: color.gray1,
      }}>
      <Notifications />
      <Text
        style={{
          color: color.black,
          fontSize: 16,
          fontWeight: '600',
          margin: 10,
        }}>
        My Workout
      </Text>
      <Usercontact />
    </View>
  );
};
