import React, {useEffect} from 'react';
import {PermissionsAndroid, Platform, StyleSheet, View} from 'react-native';
import {request} from 'react-native-permissions';
import {Header} from '../component/homescreen/Header';

export const Notificationscreen: React.FC = () => {
  useEffect(() => {
    NotificationsPermission();
  }, []);
  const NotificationsPermission = async () => {
    try {
      let permissionResult;
      if (Platform.OS === 'android') {
        permissionResult = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        );
      } else {
        permissionResult = await request(
          'android.permission.POST_NOTIFICATIONS',
        );
      }
      if (permissionResult === 'granted') {
      } else {
        console.log('Notification access denied');
      }
    } catch (error) {
      console.error('Notification permission:', error);
    }
  };
  return (
    <View>
      <Header />
    </View>
  );
};

const styles = StyleSheet.create({});
