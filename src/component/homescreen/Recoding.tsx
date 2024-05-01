import React from 'react';
import {
  Image,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Images} from '../../assets/typimg/image';
import {color} from '../../style/color';
import {request} from 'react-native-permissions';
import {navigate, Routes} from '../../screennavigation/navigation';

export const Recodeing: React.FC = () => {
  const RecodeingPermission = async () => {
    try {
      let permissionResult;
      if (Platform.OS === 'android') {
        permissionResult = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        );
      } else {
        permissionResult = await request('android.permission.RECORD_AUDIO');
      }
      if (permissionResult === 'granted') {
      } else {
        console.log('Recodeing access denied');
      }
    } catch (error) {
      console.error('Recodeing permission:', error);
    }
  };

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: 10,
          marginTop: 20,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: color.blue,
            width: 60,
            height: 60,
            borderRadius: 30,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          // onPress={() => navigate({screenName: Routes.Audioplay})}
          onPress={() => RecodeingPermission()}>
          <Image
            source={Images.multimedia}
            style={{
              height: 40,
              width: 40,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({});
