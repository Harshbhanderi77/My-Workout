import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Images} from '../../assets/typimg/image';
import {color} from '../../style/color';

export const Headinglogo: React.FC = () => {
  return (
    <View>
      <View
        style={{
          backgroundColor: color.blue,
          borderRadius: 100,
          marginTop: 20,
          padding: 10,
          elevation: 20,
          marginHorizontal: 120,
          shadowColor: 'red',
          alignItems: 'center',
          top: 0,
        }}>
        <Image source={Images.gymimg} style={{width: 120, height: 120}} />
      </View>
      <View style={{marginTop: 14, alignItems: 'center'}}>
        <Text style={{color: color.black, fontSize: 24, fontWeight: '600'}}>
          My Workout
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
