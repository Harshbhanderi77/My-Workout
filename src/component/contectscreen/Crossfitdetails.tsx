import React from 'react';
import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {color} from '../../style/color';
import {goBack} from '../../screennavigation/navigation';
import {Images} from '../../assets/typimg/image';
const ImageArray = [
  {
    Id: 1,
    Image:
      'https://t4.ftcdn.net/jpg/02/56/50/93/360_F_256509369_nkNJXk1QLtQvBCO2yFmNu1K3d6gmHDGv.jpg',
    Name: 'Crossfit',
  },
];
export const Crossfitdetails: React.FC = () => {
  return (
    <View style={{backgroundColor: color.white, flex: 1}}>
      <FlatList
        data={ImageArray}
        renderItem={({item}) => {
          return (
            <View style={{backgroundColor: color.white}}>
              <View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Image
                    style={{
                      height: 200,
                      width: '100%',
                      resizeMode: 'cover',
                    }}
                    source={{uri: item.Image}}
                  />
                  <View
                    style={{
                      margin: 10,
                      position: 'absolute',
                    }}>
                    <Text
                      style={{
                        color: color.white,
                        fontSize: 30,
                        fontWeight: '600',
                      }}>
                      {item.Name}
                    </Text>
                  </View>
                </View>

                <View style={{position: 'absolute', margin: 20}}>
                  <Pressable
                    onPress={() => goBack()}
                    style={{
                      backgroundColor: color.blue,
                      borderRadius: 50,
                      padding: 10,
                    }}>
                    <Image
                      source={Images.leftarrow}
                      style={{
                        width: 26,
                        height: 26,
                      }}
                    />
                  </Pressable>
                </View>
              </View>

              <View
                style={{
                  justifyContent: 'center',
                  marginHorizontal: 10,
                }}>
                <View style={{marginTop: 20}}>
                  <Image
                    style={{
                      height: 180,
                      width: '100%',
                      resizeMode: 'contain',
                    }}
                    source={Images.crossfitimg}
                  />
                  <Text style={styles.Heading}>
                    1. Warm-Up (10-15 minutes):
                  </Text>
                  <Text style={styles.Deatils}>
                    • Begin with a dynamic warm-up to increase your heart rate,
                    warm up your muscles, and improve mobility.
                    {'\n'}• Perform exercises such as jumping jacks, high knees,
                    butt kicks, arm circles, and leg swings to prepare your body
                    for the workout ahead.
                  </Text>
                </View>

                <View style={{marginTop: 10}}>
                  <Text style={styles.Heading}>
                    2. Circuit Training (30-45 minutes):
                  </Text>
                  <Text style={styles.Deatils}>
                    • SCreate a circuit consisting of functional movements that
                    target different muscle groups and energy systems. Here's a
                    sample CrossFit circuit workout:{' '}
                  </Text>
                  <Text style={styles.Heading}>Round 1:</Text>
                  <Text style={styles.Deatils}>
                    {'\n'}• 10-15 Burpees
                    {'\n'}• 15-20 Air Squats
                    {'\n'} • 10-12 Push-Ups
                    {'\n'} • 20-30 seconds of Jump Rope
                    {'\n'} • Rest for 1-2 minutes after completing the round
                  </Text>
                  <Text style={styles.Heading}>Round 2:</Text>
                  <Text style={styles.Deatils}>
                    {'\n'} • 10-12 Pull-Ups or Rows
                    {'\n'} • 12-15 Kettlebell Swings
                    {'\n'} • 10-15 Box Jumps or Step-Ups
                    {'\n'} • 30-60 seconds of Plank Hold
                    {'\n'} • Rest for 1-2 minutes after completing the round
                  </Text>
                </View>

                <View style={{marginTop: 10}}>
                  <Text style={styles.Heading}>
                    3. Cool Down (5-10 minutes):
                  </Text>
                  <Text style={styles.Deatils}>
                    • After completing the circuit training, take time to cool
                    down and stretch your muscles.
                    {'\n'}• Hold each stretch for 15-30 seconds and focus on
                    deep breathing to promote relaxation and recovery.
                    {'\n'}• Hydrate well and refuel with a balanced post-workout
                    meal or snack containing carbohydrates and protein to
                    support muscle recovery and replenish energy stores.
                  </Text>
                </View>

                <View style={{marginTop: 10}}>
                  <Text style={styles.Heading}>4. Tips:</Text>
                  <Text style={styles.Deatils}>
                    • Focus on maintaining proper form and technique throughout
                    the workout to maximize effectiveness and prevent injury.
                    {'\n'}• Scale the exercises and intensity to match your
                    fitness level and capabilities, especially if you're new to
                    CrossFit or recovering from an injury.
                    {'\n'}• Stay hydrated throughout the workout by drinking
                    water regularly, especially during intense exercises.
                    {'\n'}
                  </Text>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Heading: {
    color: color.black,
    fontSize: 16,
    fontWeight: '600',
    marginTop: 20,
  },
  Deatils: {
    color: color.black,
    fontSize: 14,
    fontWeight: '600',
    marginTop: 5,
  },
});
