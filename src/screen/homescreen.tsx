import React, {useEffect} from 'react';
import {
  Alert,
  PermissionsAndroid,
  Platform,
  ScrollView,
  View,
} from 'react-native';
import {color} from '../style/color';
import messaging from '@react-native-firebase/messaging';
import {Mainheader} from '../component/homescreen/Mainheader';
import {Sliderscreen} from '../component/homescreen/Sliderscreen';
import {Bottommenu} from '../component/homescreen/Bottommenu';
import {Workout} from '../component/homescreen/Workout';
import {Running} from '../component/homescreen/Running';
import {Pushups} from '../component/homescreen/Pushups';
import {Cycling} from '../component/homescreen/Cycling';
import {Crossfit} from '../component/homescreen/Crossfit';
import {request} from 'react-native-permissions';

export const Homescreen: React.FC = () => {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
    return unsubscribe;
  }, []);
  useEffect(() => {
    getdevicetoken();
  }, []);

  // useEffect(() => {
  //   NotificationsPermission();
  // }, []);

  const getdevicetoken = async () => {
    const token = await messaging().getToken();
    console.log(token);
  };

  // const NotificationsPermission = async () => {
  //   try {
  //     let permissionResult;
  //     if (Platform.OS === 'android') {
  //       permissionResult = await PermissionsAndroid.request(
  //         PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
  //       );
  //     } else {
  //       permissionResult = await request(
  //         'android.permission.POST_NOTIFICATIONS',
  //       );
  //     }
  //     if (permissionResult === 'granted') {
  //     } else {
  //       console.log('Notification access denied');
  //     }
  //   } catch (error) {
  //     console.error('Notification permission:', error);
  //   }
  // };

  return (
    <View style={{backgroundColor: color.white, flex: 1}}>
      <Mainheader />
      <Sliderscreen />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginBottom: 80}}>
        <Running />
        <Crossfit />
        <Workout />
        <Pushups />
        <Cycling />
      </ScrollView>
      <Bottommenu />
    </View>
  );
};
