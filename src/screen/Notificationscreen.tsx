import React, {useEffect} from 'react';
import {
  Image,
  PermissionsAndroid,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {request} from 'react-native-permissions';
import {color} from '../style/color';
import {goBack} from '../screennavigation/navigation';
import {Images} from '../assets/typimg/image';

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
    <View style={{flex: 1, backgroundColor: color.white}}>
      {/*<Header />*/}
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
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 100,
        }}>
        <Text style={{color: color.gray1}}>No Data Found</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
