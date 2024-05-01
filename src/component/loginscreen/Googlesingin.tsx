import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Images} from '../../assets/typimg/image';
import {color} from '../../style/color';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {replace, Routes} from '../../screennavigation/navigation';

export const Googlesingin: React.FC = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '744140446166-6f7a9c2qcph6ghoakatt60lrgukkofcp.apps.googleusercontent.com',
      // scopes: ['profile', 'email'],
      offlineAccess: true,
      forceCodeForRefreshToken: true,
      profileImageSize: 80,
    });
  }, []);
  const googlesingin = async () => {
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      const {idToken, user} = await GoogleSignin.signIn();
      console.log(user);
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);
      replace({screenName: Routes.Home});
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <TouchableOpacity onPress={googlesingin}>
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
            source={Images.google}
            style={{
              height: 20,
              width: 20,
              marginRight: 20,
            }}
          />
          <Text style={{color: color.black, fontSize: 16}}>
            Continue with Google
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});
