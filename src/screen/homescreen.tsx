import React, {useEffect} from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import {Camera} from '../component/homescreen/Camera';
import {Location} from '../component/homescreen/Location';
import {color} from '../style/color';
import {Recodeing} from '../component/homescreen/Recoding';
import {Bluetooth} from '../component/homescreen/Bluetooth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {replace, Routes} from '../screennavigation/navigation';
import messaging from '@react-native-firebase/messaging';
import {Mainheader} from '../component/homescreen/Mainheader';

export const Homescreen: React.FC = () => {
  const logout = async () => {
    try {
      await GoogleSignin.signOut();
      replace({screenName: Routes.Login});
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    getdevicetoken();
  }, []);

  const getdevicetoken = async () => {
    const token = await messaging().getToken();
    console.log(token);
  };
  return (
    <View style={{backgroundColor: color.white, flex: 1}}>
      <Mainheader />
      <View
        style={{
          // flexDirection: 'row',
          // justifyContent: 'space-between',
          margin: 20,
        }}>
        <View>
          <TouchableOpacity onPress={logout}>
            <Text style={{color: color.black}}>logout</Text>
          </TouchableOpacity>
        </View>
        <Camera />
        <Location />
        <Recodeing />
        <Bluetooth />
      </View>
    </View>
  );
};
