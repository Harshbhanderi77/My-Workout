import React from 'react';
import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {color} from '../../style/color';
import {goBack} from '../../screennavigation/navigation';
import {Images} from '../../assets/typimg/image';
const ImageArray = [
  {
    Id: 1,
    Image:
      'https://img.freepik.com/premium-photo/male-athlete-workout-running-exercise-machine-active-sport-training-gym_266732-208.jpg',
    Name: 'Running',
  },
];
export const Runningdetails: React.FC = () => {
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
                    source={{
                      uri: 'https://transform.octanecdn.com/crop/1000x600/https://octanecdn.com/prolianceorthopedicassociatescom/run-or-walk-1-1.jpg',
                    }}
                  />
                  <Text style={styles.Heading}>1. Warm-Up (5-10 minutes):</Text>
                  <Text style={styles.Deatils}>
                    • Start with a brisk walk or light jog for about 5 minutes
                    to get your muscles warmed up.
                    {'\n'}• Incorporate dynamic stretches such as leg swings,
                    arm circles, and hip circles to increase blood flow and
                    flexibility.
                  </Text>
                </View>

                <View style={{marginTop: 10}}>
                  <Text style={styles.Heading}>2. Main Workout:</Text>
                  <Text style={styles.Deatils}>
                    • Jog at an easy pace for 5 minutes to start.{'\n'}•
                    Increase your speed to a moderate pace (around 70-80% of
                    your maximum effort) and maintain it for 3-5 minutes.
                    {'\n'}• Recover by jogging or walking at a slower pace for
                    1-2 minutes.{'\n'} • Cool down with a 5-minute jog at an
                    easy pace.
                  </Text>
                </View>

                <View style={{marginTop: 10}}>
                  <Text style={styles.Heading}>
                    3. Cool Down (5-10 minutes):
                  </Text>
                  <Text style={styles.Deatils}>
                    • After completing the main workout, gradually reduce your
                    pace to a slow jog or walk for 5-10 minutes.
                    {'\n'}• Hold each stretch for 15-30 seconds without
                    bouncing. {'\n'}• Incorporate static stretches targeting
                    major muscle groups such as quadriceps, hamstrings, hips.{'\n'}
                  </Text>
                </View>

                <View style={{marginTop: 10}}>
                  <Text style={styles.Heading}>4. Tips:</Text>
                  <Text style={styles.Deatils}>
                    • Listen to your body and adjust the intensity or duration
                    of the workout as needed. {'\n'}• Stay hydrated throughout
                    the workout, especially during warmer weather.{'\n'}
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
