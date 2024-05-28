import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {color} from '../style/color';
import {replace, Routes} from '../screennavigation/navigation';
import {Headinglogo} from '../component/singupscreen/headinglogo';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Splashscreen: React.FC = () => {
  const asa = async () => {
    const ss = await AsyncStorage.getItem('singup');
    if (ss === 'true') {
      replace({
        screenName: Routes.Home,
      });
    } else {
      replace({
        screenName: Routes.Login,
      });
    }
  };

  useEffect(() => {
    setTimeout(() => {
      asa();
    }, 2000);
    return () => clearTimeout('timers');
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     replace({
  //       screenName: Routes.Login,
  //     });
  //   }, 2000);
  //   return () => clearTimeout('timers');
  // }, []);
  return (
    <View
      style={{
        backgroundColor: color.white,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Headinglogo />
    </View>
  );
};

const styles = StyleSheet.create({});
