import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {color} from '../../style/color';

const sliderArray = [
  {
    Id: 1,
    sliderImage:
      'https://t3.ftcdn.net/jpg/01/19/59/76/360_F_119597620_Nf4htQRhQZ9FsqJsMV2ERbH2xUzDa5on.jpg',
    Name: 'Just do it',
  },
  {
    Id: 2,
    sliderImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxWUPHmylFbkREv4HAumcgFi1rmXnTzFB690ZTKDFe-eAxEdzcqCUzhInWN9xX1SY4UoA&usqp=CAU',
    Name: 'Make yourself proud.',
  },
  {
    Id: 3,
    sliderImage:
      'https://plus.unsplash.com/premium_photo-1670505062610-b9041ebe603c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    Name: 'Fitness',
  },
];
export const Sliderscreen: React.FC = () => {
  return (
    <View
      style={{
        backgroundColor: color.blue,
      }}>
      <FlatList
        data={sliderArray}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <View style={{marginLeft: 6, marginVertical: 10}}>
              <Image
                style={{height: 100, width: 360, borderRadius: 16}}
                source={{uri: item.sliderImage}}
              />
              <View style={{position: 'absolute', margin: 10}}>
                <Text
                  style={{
                    color: color.white,
                    fontStyle: 'italic',
                    fontSize: 20,
                    fontWeight: '600',
                  }}>
                  {item.Name}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
