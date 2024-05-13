import React, {useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {color} from '../../style/color';
import {goBack} from '../../screennavigation/navigation';
import {Images} from '../../assets/typimg/image';
const ImageArray = [
  {
    Id: 1,
    Image:
      'https://media.istockphoto.com/id/657028020/photo/sport-handsome-man-doing-push-ups-exercise-with-one-hand-in-fitness-gym.jpg?s=612x612&w=0&k=20&c=Yst1tR2ybhTA3hfqdw4c9YGEe6xstuOeVbETh1zlJYE=',
    Name: 'Pushups',
  },
];

export const Pushupsdetails: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };
  return (
    <View style={{backgroundColor: color.white, flex: 1}}>
      <FlatList
        data={ImageArray}
        renderItem={({item}) => {
          return (
            <View style={{backgroundColor: color.white}}>
              <View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  {loading && (
                    <ActivityIndicator size="large" color={color.blue} />
                  )}

                  <Image
                    style={{
                      height: 200,
                      width: '100%',
                      resizeMode: 'cover',
                    }}
                    source={{uri: item.Image}}
                    onLoad={handleImageLoad}
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
                    source={Images.pushupsimg}
                  />
                  <Text style={styles.Heading}>1. Warm-Up (5-10 minutes):</Text>
                  <Text style={styles.Deatils}>
                    • Start with a brief warm-up to get your blood flowing and
                    prepare your muscles for the workout.
                    {'\n'}• Perform dynamic movements such as arm circles,
                    shoulder rolls, and light jogging in place to loosen up your
                    upper body and increase circulation.
                  </Text>
                </View>

                <View style={{marginTop: 10}}>
                  <Text style={styles.Heading}>
                    2. Main Workout Push-Up Variations (15-20 minutes):
                  </Text>
                  <Text style={styles.Deatils}>
                    • Standard Push-Ups: Start in a high plank position with
                    hands shoulder-width apart, lower your body until your chest
                    nearly touches the ground, then push back up.
                    {'\n'}• Wide-Grip Push-Ups: Place your hands wider than
                    shoulder-width apart to target the chest and shoulders more.
                    {'\n'}• Close-Grip Push-Ups: Position your hands closer
                    together (just below shoulder-width) to emphasize the
                    triceps.
                    {'\n'} • Diamond Push-Ups: Form a diamond shape with your
                    hands directly under your chest, targeting the triceps and
                    inner chest.
                  </Text>
                </View>

                <View style={{marginTop: 10}}>
                  <Text style={styles.Heading}>
                    3. Cool Down (5-10 minutes):
                  </Text>
                  <Text style={styles.Deatils}>
                    • After completing the push-up variations, take some time to
                    cool down and stretch your muscles.
                    {'\n'}• Perform static stretches for the chest, shoulders,
                    and triceps to improve flexibility and reduce muscle
                    tension. {'\n'}• Hold each stretch for 15-30 seconds and
                    focus on deep breathing to aid relaxation and recovery.
                  </Text>
                </View>

                <View style={{marginTop: 10}}>
                  <Text style={styles.Heading}>4. Tips:</Text>
                  <Text style={styles.Deatils}>
                    • Maintain proper form throughout the push-up variations to
                    maximize effectiveness and reduce the risk of injury.
                    {'\n'}• Start with a manageable number of repetitions for
                    each variation and gradually increase as you build strength
                    and endurance.
                    {'\n'}• Listen to your body and modify the exercises as
                    needed to accommodate your fitness level and any existing
                    injuries or limitations.{'\n'}
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
