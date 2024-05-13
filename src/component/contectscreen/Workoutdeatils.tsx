import React from 'react';
import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {color} from '../../style/color';
import {goBack} from '../../screennavigation/navigation';
import {Images} from '../../assets/typimg/image';
const ImageArray = [
  {
    Id: 1,
    Image:
      'https://media.istockphoto.com/id/929793652/photo/strong-bodybuilder.jpg?b=1&s=612x612&w=0&k=20&c=-6kL8imRnb9Y5RYF89oPnP4FGqnrQALSD_9-hIirHAc=',
    Name: 'Power lifting',
  },
];
export const Workoutdeatils: React.FC = () => {
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
                      height: 140,
                      width: '100%',
                      resizeMode: 'cover',
                    }}
                    source={Images.powerliftingimg}
                  />
                  <Text style={styles.Heading}>1. Warm-up:</Text>
                  <Text style={styles.Deatils}>
                    • 5-10 minutes of light cardio (jogging, cycling, etc.)
                    {'\n'}• Dynamic stretches for lower body (leg swings).{'\n'}
                    • Warm-up sets of squats with increasing weights (3-4 sets
                    of 5 reps).
                  </Text>
                </View>

                <View style={{marginTop: 10}}>
                  <Text style={styles.Heading}>2. Assistance Exercises:</Text>
                  <Text style={styles.Deatils}>
                    • Leg press: 3 sets of 8-10 reps.{'\n'}• Dynamic stretches
                    for lower body (leg swings).{'\n'}• Walking lunges: 3 sets
                    of 12 steps per leg.{'\n'}• Calf raises: 3 sets of 12-15
                    reps.
                  </Text>
                </View>

                <View style={{marginTop: 10}}>
                  <Text style={styles.Heading}>
                    3. Accessory Work (Optional):
                  </Text>
                  <Text style={styles.Deatils}>
                    • Planks: 3 sets, holding for 30-60 seconds each.{'\n'}• Leg
                    curls: 3 sets of 10-12 reps.
                    {'\n'}• Walking lunges: 3 sets of 12 steps per leg.{'\n'}•
                    Calf raises: 3 sets of 12-15 reps.
                  </Text>
                </View>

                <View style={{marginTop: 10}}>
                  <Text style={styles.Heading}>4. Cool-down:</Text>
                  <Text style={styles.Deatils}>
                    • Static stretches for lower body muscles (hamstrings,
                    quads, calves) .{'\n'}• Foam rolling for lower body muscles.
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
