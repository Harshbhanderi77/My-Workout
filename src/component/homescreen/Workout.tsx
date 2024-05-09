import React from 'react';
import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {color} from '../../style/color';
import {navigate, Routes} from '../../screennavigation/navigation';

const ImageArray = [
  {
    Id: 1,
    Image:
      'https://media.istockphoto.com/id/838386570/photo/strong-man-doing-deadlift-training-in-gym.jpg?b=1&s=612x612&w=0&k=20&c=m55sD-E8mUGBdvbbdP_qOVW8eI8sM1E2jx0_XWjo8bY=',
    Name: 'Power lifting',
  },
];
export const Workout: React.FC = () => {
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
                  onPress={() => navigate({screenName: Routes.Workoutdeatils})}>
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
