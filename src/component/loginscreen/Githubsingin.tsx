import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Images} from '../../assets/typimg/image';
import {color} from '../../style/color';
import auth from '@react-native-firebase/auth';
import {Routes, replace} from '../../screennavigation/navigation';

export const Githubsingin: React.FC = () => {
  const singinwithGithub = async () => {
    try {
      const githubProvider = new auth.OAuthProvider('github.com');
      // githubProvider.addScope('repo');
      // githubProvider.addScope('user');
      const result = await auth().signInWithPopup(githubProvider);
      replace({screenName: Routes.Home});
      console.log('GitHub sign-in successful!', result);
    } catch (error) {
      console.error('GitHub sign-in failed!', error);
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={singinwithGithub}>
        <View
          style={{
            marginTop: 20,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 2,
            marginHorizontal: 40,
            borderRadius: 10,
            padding: 6,
            flexDirection: 'row',
          }}>
          <Image
            source={Images.github}
            style={{
              height: 20,
              width: 20,
              marginRight: 20,
            }}
          />
          <Text style={{color: color.black, fontSize: 16}}>
            Continue with Github
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({});
