import React from 'react';
import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {color} from '../../style/color';
import {navigate, Routes} from '../../screennavigation/navigation';
import { Cyclingdetails } from "../contectscreen/Cyclingdetails";

const ImageArray = [
  {
    Id: 1,
    Image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvvi6sAcoWt8Me8R3KK-tmD5zbcoxb8LxVrQ&s',
    Name: 'Cycling',
  },
];
export const Cycling: React.FC = () => {
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
                  onPress={() => navigate({screenName: Routes.Cyclingdetails})}>
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
