import React from 'react';
import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {color} from '../../style/color';
import {navigate, Routes} from '../../screennavigation/navigation';

const ImageArray = [
  {
    Id: 1,
    Image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqEyFHvuFMAc-knprFmaQcUBLgB4bTxJwL9Q&s',
    Name: 'Workout',
  },
  // {
  //   Id: 2,
  //   Image:
  //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv2i6vQGnIJHXRgT5Tdr2KCVvxsFNDlVlEdGJ5dz04a131pq2H4EySp57LpdWIl6_Xp9I&usqp=CAU',
  //   Name: 'Powerlifting',
  // },
];
export const Boxdesign: React.FC = () => {
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <FlatList
        data={ImageArray}
        renderItem={({item}) => {
          return (
            <View style={{backgroundColor: color.white}}>
              <View
                style={{
                  backgroundColor: color.blue,
                  marginLeft: 10,
                  marginRight: 10,
                  borderRadius: 10,
                  marginTop: 10,
                  width: 140,
                }}>
                <View
                  style={{
                    marginHorizontal: 12,
                    marginTop: 0,
                    marginBottom: 10,
                  }}>
                  <Pressable
                    onPress={() =>
                      navigate({screenName: Routes.Workoutdeatils})
                    }>
                    <View style={{alignItems: 'center', padding: 0}}>
                      <Image
                        style={{
                          height: 100,
                          width: 140,
                          borderTopRightRadius: 10,
                          borderTopLeftRadius: 10,
                          resizeMode: 'stretch',
                        }}
                        source={{uri: item.Image}}
                      />
                    </View>
                    <View
                      style={{alignItems: 'center', justifyContent: 'center'}}>
                      <Text
                        style={{
                          color: '#000',
                          fontSize: 18,
                          fontWeight: '600',
                        }}>
                        {item.Name}
                      </Text>
                    </View>
                  </Pressable>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
