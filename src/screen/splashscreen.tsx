import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {color} from '../style/color';
import {replace, Routes} from '../screennavigation/navigation';
import {Headinglogo} from '../component/singupscreen/headinglogo';

export const Splashscreen: React.FC = () => {
  useEffect(() => {
    setTimeout(() => {
      replace({
        screenName: Routes.Login,
      });
    }, 2000);
    return () => clearTimeout('timers');
  }, []);
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
