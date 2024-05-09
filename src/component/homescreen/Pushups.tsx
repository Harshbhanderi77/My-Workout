import React from 'react';
import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {color} from '../../style/color';
import {navigate, Routes} from '../../screennavigation/navigation';

const ImageArray = [
  {
    Id: 1,
    Image:
      'https://media.istockphoto.com/id/657028020/photo/sport-handsome-man-doing-push-ups-exercise-with-one-hand-in-fitness-gym.jpg?s=612x612&w=0&k=20&c=Yst1tR2ybhTA3hfqdw4c9YGEe6xstuOeVbETh1zlJYE=',
    Name: 'Pushups',
  },
];
export const Pushups: React.FC = () => {
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
                  onPress={() => navigate({screenName: Routes.Pushupsdetails})}>
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
