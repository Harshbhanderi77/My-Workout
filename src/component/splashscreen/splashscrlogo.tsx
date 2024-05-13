import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {color} from '../../style/color';
import {Images} from '../../assets/typimg/image';

export const Splashscrlogo: React.FC = () => {
  return (
    <View
      style={{
        backgroundColor: color.white,
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          backgroundColor: color.blue,
          borderRadius: 100,
          padding: 10,
          elevation: 20,
        }}>
        <Image source={Images.gymimg} style={{width: 120, height: 120}} />
      </View>
      <View style={{marginTop: 14}}>
        <Text style={{color: color.black, fontSize: 24, fontWeight: '600'}}>
          My Workout
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
