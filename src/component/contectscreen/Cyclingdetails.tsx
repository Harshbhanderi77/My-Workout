import React from 'react';
import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {color} from '../../style/color';
import {goBack} from '../../screennavigation/navigation';
import {Images} from '../../assets/typimg/image';
const ImageArray = [
  {
    Id: 1,
    Image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvvi6sAcoWt8Me8R3KK-tmD5zbcoxb8LxVrQ&s',
    Name: 'Cycling',
  },
];
export const Cyclingdetails: React.FC = () => {
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
                    source={Images.cyclingimg}
                  />
                  <Text style={styles.Heading}>1. Warm-Up (5-10 minutes):</Text>
                  <Text style={styles.Deatils}>
                    • Begin with a light warm-up to prepare your muscles and
                    cardiovascular system for the workout.
                    {'\n'}• Start by pedaling at a relaxed pace on flat terrain,
                    gradually increasing your cadence and resistance.
                  </Text>
                </View>

                <View style={{marginTop: 10}}>
                  <Text style={styles.Heading}>
                    2. Main Workout Interval Cycling (20-25 minutes):
                  </Text>
                  <Text style={styles.Deatils}>
                    • Warm-Up Phase (5 minutes): Pedal at a moderate pace to
                    gradually increase your heart rate and warm up your muscles.
                    {'\n'}• Interval Sets (20-30 minutes): Alternate between
                    periods of higher intensity and recovery. You can customize
                    the intervals based on your fitness level and goals. For
                    example:
                    {'\n'}• Hill Climbs: Increase the resistance or find a hilly
                    route and focus on climbing for 2-5 minutes, followed by a
                    recovery period of flat terrain or downhill cycling.
                  </Text>
                </View>

                <View style={{marginTop: 10}}>
                  <Text style={styles.Heading}>
                    3. Cool Down (5-10 minutes):
                  </Text>
                  <Text style={styles.Deatils}>
                    • After completing the main workout, continue cycling at an
                    easy pace for 5-10 minutes to cool down your muscles and
                    prevent stiffness.
                    {'\n'}• Perform static stretches targeting major muscle
                    groups such as quadriceps, hamstrings, calves, and lower
                    back. Hold each stretch for 15-30 seconds without bouncing.
                    {'\n'}• Hydrate well and refuel with a nutritious
                    post-workout snack or meal containing carbohydrates and
                    protein to support recovery.
                  </Text>
                </View>

                <View style={{marginTop: 10}}>
                  <Text style={styles.Heading}>4. Tips:</Text>
                  <Text style={styles.Deatils}>
                    • Adjust the intensity and duration of the intervals based
                    on your fitness level, cycling experience, and personal
                    goals.
                    {'\n'}• Stay hydrated throughout the workout by drinking
                    water regularly, especially in warmer weather.
                    {'\n'}•Listen to your body and rest or modify the workout if
                    you experience any discomfort or fatigue.
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
