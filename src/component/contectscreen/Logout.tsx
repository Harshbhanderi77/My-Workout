import React, {useEffect} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {color} from '../../style/color';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {replace, Routes} from '../../screennavigation/navigation';
import {Images} from '../../assets/typimg/image';

export const Logout: React.FC = () => {
  useEffect(() => {
    configureGoogleSignIn(); // Call configure method when component mounts
  }, []);

  const configureGoogleSignIn = async () => {
    try {
      await GoogleSignin.configure({
        webClientId:
          '744140446166-6f7a9c2qcph6ghoakatt60lrgukkofcp.apps.googleusercontent.com',
      });
    } catch (error) {
      console.log('Error configuring Google Sign-In:', error);
    }
  };
  const applogout = async () => {
    try {
      await GoogleSignin.signOut();
      replace({screenName: Routes.Login});
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={{margin: 10}}>
      <TouchableOpacity
        onPress={applogout}
        style={{backgroundColor: color.blue, borderRadius: 16, padding: 6}}>
        <Image
          source={Images.logout}
          style={{
            width: 24,
            height: 24,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};
