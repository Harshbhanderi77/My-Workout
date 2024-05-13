import React, {useEffect} from 'react';
import {Alert, SafeAreaView, ScrollView} from 'react-native';
import {color} from '../style/color';
import messaging from '@react-native-firebase/messaging';
import {Mainheader} from '../component/homescreen/Mainheader';
import {Sliderscreen} from '../component/homescreen/Sliderscreen';
import {Bottommenu} from '../component/homescreen/Bottommenu';
import {Pushups} from '../component/homescreen/Pushups';
import {Cycling} from '../component/homescreen/Cycling';
import {Crossfit} from '../component/homescreen/Crossfit';
import {Powerlifting} from '../component/homescreen/Powerlifting';
import {Running} from '../component/homescreen/Running';

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

  const getdevicetoken = async () => {
    const token = await messaging().getToken();
    console.log(token);
  };

  return (
    <SafeAreaView style={{backgroundColor: color.white, flex: 1}}>
      <Mainheader />
      <Sliderscreen />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginBottom: 80}}>
        <Running />
        <Crossfit />
        <Powerlifting />
        <Pushups />
        <Cycling />
      </ScrollView>
      <Bottommenu />
    </SafeAreaView>
  );
};
