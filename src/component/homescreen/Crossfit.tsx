import React from 'react';
import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {color} from '../../style/color';
import {navigate, Routes} from '../../screennavigation/navigation';

const ImageArray = [
  {
    Id: 1,
    Image:
      'https://t4.ftcdn.net/jpg/02/56/50/93/360_F_256509369_nkNJXk1QLtQvBCO2yFmNu1K3d6gmHDGv.jpg',
    Name: 'Crossfit',
  },
];
export const Crossfit: React.FC = () => {
  return (
    <View style={{backgroundColor: '#fff'}}>
      <FlatList
        data={ImageArray}
        extraData={ImageArray}
        renderItem={({item}) => {
          return (
            <View style={{backgroundColor: color.white}}>
              <View
                style={{
                  marginHorizontal: 12,
                  marginTop: 10,
                  marginBottom: 10,
                }}>
                <Pressable
                  onPress={() =>
                    navigate({screenName: Routes.Crossfitdetails})
                  }>
                  <View style={{alignItems: 'center'}}>
                    <Image
                      style={{
                        height: 140,
                        width: '100%',
                        borderRadius: 10,
                        resizeMode: 'cover',
                      }}
                      source={{uri: item.Image}}
                    />
                  </View>
                  <View
                    style={{
                      position: 'absolute',
                      justifyContent: 'center',
                      margin: 10,
                    }}>
                    <Text
                      style={{
                        color: color.white,
                        fontSize: 20,
                        fontWeight: '600',
                      }}>
                      {item.Name}
                    </Text>
                  </View>
                </Pressable>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
